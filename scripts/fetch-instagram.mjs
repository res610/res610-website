#!/usr/bin/env node
/**
 * Instagram Graph API fetcher for static site generation.
 * Downloads recent posts and images for offline rendering.
 *
 * Usage: node scripts/fetch-instagram.mjs
 * Required env vars: INSTAGRAM_ACCESS_TOKEN, INSTAGRAM_USER_ID
 */

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp'; // Next.js 同梱の sharp を利用（追加インストール不要）

// ─── Configuration ───
const POST_COUNT = 9;
const IMAGE_DIR = 'public/images/instagram';
// サイトでの表示は最大176px幅（Retina 2倍強を確保しつつフルサイズ保存の転送量ムダを防ぐ）
const THUMB_WIDTH = 400;
const THUMB_QUALITY = 80;
const JSON_PATH = 'src/data/instagram.json';
const API_VERSION = 'v21.0';
const API_BASE = `https://graph.instagram.com/${API_VERSION}`;
const FIELDS = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';

// ─── Main ───
async function main() {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const userId = process.env.INSTAGRAM_USER_ID;

    if (!accessToken || !userId) {
        console.error('Missing INSTAGRAM_ACCESS_TOKEN or INSTAGRAM_USER_ID');
        process.exit(1);
    }

    const url = `${API_BASE}/${userId}/media?fields=${FIELDS}&limit=${POST_COUNT}&access_token=${accessToken}`;
    console.log(`Fetching ${POST_COUNT} posts from Instagram Graph API...`);

    const response = await fetch(url);
    if (!response.ok) {
        const errorBody = await response.text();
        console.error(`API error ${response.status}: ${errorBody}`);
        process.exit(1);
    }

    const data = await response.json();
    const posts = data.data || [];

    if (posts.length === 0) {
        console.warn('No posts returned from API. Keeping existing data.');
        process.exit(0);
    }

    fs.mkdirSync(IMAGE_DIR, { recursive: true });
    fs.mkdirSync(path.dirname(JSON_PATH), { recursive: true });

    const metadata = [];

    for (const post of posts) {
        let imageUrl;

        if (post.media_type === 'VIDEO') {
            imageUrl = post.thumbnail_url;
        } else {
            imageUrl = post.media_url;
        }

        if (!imageUrl) {
            console.warn(`Skipping post ${post.id}: no image URL available`);
            continue;
        }

        const filename = `${post.id}.jpg`;
        const filepath = path.join(IMAGE_DIR, filename);

        try {
            await downloadImage(imageUrl, filepath);
            console.log(`Downloaded: ${filename}`);
        } catch (err) {
            console.error(`Failed to download ${post.id}: ${err.message}`);
            continue;
        }

        metadata.push({
            id: post.id,
            caption: truncateCaption(post.caption || '', 100),
            mediaType: post.media_type,
            permalink: post.permalink,
            timestamp: post.timestamp,
            localImage: `instagram/${filename}`,
        });
    }

    // Clean up old images
    const currentFiles = new Set(metadata.map((p) => `${p.id}.jpg`));
    const existingFiles = fs.readdirSync(IMAGE_DIR);
    for (const file of existingFiles) {
        if (file.endsWith('.jpg') && !currentFiles.has(file)) {
            fs.unlinkSync(path.join(IMAGE_DIR, file));
            console.log(`Removed old image: ${file}`);
        }
    }

    const output = {
        fetchedAt: new Date().toISOString(),
        posts: metadata,
    };

    fs.writeFileSync(JSON_PATH, JSON.stringify(output, null, 4) + '\n', 'utf-8');
    console.log(`Wrote ${metadata.length} posts to ${JSON_PATH}`);
    console.log('Done.');
}

// ─── Helpers ───
async function downloadImage(url, filepath) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    await sharp(buffer)
        .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
        .jpeg({ quality: THUMB_QUALITY })
        .toFile(filepath);
}

function truncateCaption(caption, maxLength) {
    if (caption.length <= maxLength) return caption;
    return caption.substring(0, maxLength).trimEnd() + '...';
}

main().catch((err) => {
    console.error('Fatal error:', err);
    process.exit(1);
});
