/** @type {import('next').NextConfig} */
const fs = require('fs');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

// ─── プロジェクト設定 ───
const SITE_DOMAIN = 'res610.com';
const SITE_BASE_PATH = '';
// ────────────────────────

const basePath = isDev ? '' : SITE_BASE_PATH;
const siteUrl = isDev
    ? 'http://localhost:3000'
    : `https://${SITE_DOMAIN}${SITE_BASE_PATH}`;

// manifest.webmanifest 自動生成
fs.writeFileSync(
    path.join(__dirname, 'public', 'manifest.webmanifest'),
    JSON.stringify({
        name: '合同会社RES',
        short_name: 'RES',
        description: '沖縄の個人事業主・小規模事業者向けIT経営パートナー',
        start_url: `${basePath}/`,
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: `${basePath}/android-chrome-192x192.png`,
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: `${basePath}/android-chrome-512x512.png`,
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }, null, 4)
);

// sitemap.xml 自動生成
const today = new Date().toISOString().split('T')[0];
const sitemapPages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/blog/', priority: '0.7', changefreq: 'weekly' },
    { loc: '/services/', priority: '0.9', changefreq: 'monthly' },
    { loc: '/cases/', priority: '0.8', changefreq: 'monthly' },
    { loc: '/about/', priority: '0.7', changefreq: 'monthly' },
    { loc: '/recruit/', priority: '0.8', changefreq: 'monthly' },
];

// 実績詳細ページをサイトマップに追加
// （src/data/caseStudies.ts はTSのためここから読めない。実績の増減時はこのID一覧も更新する）
const caseStudyIds = ['o-one', 'yoshi-rentacar', 'hachimine', 'perchamomo', 'kintaro'];
caseStudyIds.forEach(id => {
    sitemapPages.push({ loc: `/cases/${id}/`, priority: '0.7', changefreq: 'monthly' });
});

// content/blog/ からブログ記事を検出してサイトマップに追加
const blogDir = path.join(__dirname, 'content', 'blog');
if (fs.existsSync(blogDir)) {
    const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
    blogFiles.forEach(file => {
        const slug = file.replace('.md', '');
        sitemapPages.push({ loc: `/blog/${slug}/`, priority: '0.8', changefreq: 'monthly' });
    });
}

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPages.map(p => `    <url>
        <loc>${siteUrl}${p.loc}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${p.changefreq}</changefreq>
        <priority>${p.priority}</priority>
    </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapXml);

const nextConfig = {
    output: 'export',
    basePath,
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
        NEXT_PUBLIC_SITE_URL: siteUrl,
    },
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
}

module.exports = nextConfig
