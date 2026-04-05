'use client';

import Image from 'next/image';
import instagramData from '@/data/instagram.json';
import { INSTAGRAM_URL } from '@/constants';

const DISPLAY_COUNT = 9;

interface InstagramPost {
    id: string;
    caption: string;
    mediaType: string;
    permalink: string;
    timestamp: string;
    localImage: string;
}

function formatDate(timestamp: string): string {
    const date = new Date(timestamp);
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
}

export default function InstagramFeed() {
    const posts: InstagramPost[] = instagramData.posts ?? [];
    const displayPosts = posts.slice(0, DISPLAY_COUNT);

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-widest mb-2 text-gray-900">
                        Instagram
                    </h2>
                    <div className="w-48 h-0.5 bg-gray-900 mx-auto mb-2"></div>
                    <p className="text-sm tracking-widest text-gray-500">LATEST UPDATES</p>
                </div>

                {displayPosts.length > 0 ? (
                    <div className="overflow-hidden -mx-4 md:-mx-8 py-6">
                        <style>{`
                            @keyframes marquee {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(-50%); }
                            }
                            .marquee-track {
                                animation: marquee 36s linear infinite;
                            }
                            .marquee-track:hover {
                                animation-play-state: paused;
                            }
                        `}</style>
                        {/* 2セット複製でシームレスループ */}
                        <div
                            className="marquee-track flex gap-3 md:gap-4"
                            style={{ width: 'max-content' }}
                        >
                            {[...displayPosts, ...displayPosts].map((post, index) => (
                                <a
                                    key={`${post.id}-${index}`}
                                    href={post.permalink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex-shrink-0 w-32 md:w-44 aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 relative ${
                                        index % 2 === 0 ? '-translate-y-3' : 'translate-y-3'
                                    }`}
                                >
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/${post.localImage}`}
                                        alt={post.caption || 'Instagram投稿'}
                                        width={176}
                                        height={176}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                        <svg
                                            className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                        </svg>
                                    </div>
                                    {/* Date label */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-6 pb-1.5 px-2">
                                        <span className="text-white text-[10px] md:text-xs font-medium drop-shadow">
                                            {formatDate(post.timestamp)}
                                        </span>
                                    </div>
                                    {/* Video indicator */}
                                    {post.mediaType === 'VIDEO' && (
                                        <div className="absolute top-2 right-2">
                                            <svg
                                                className="w-5 h-5 text-white drop-shadow-lg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-8">
                        <p className="text-sm text-gray-500">
                            Instagramの最新投稿を準備中です
                        </p>
                    </div>
                )}

                <div className="text-center mt-6">
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white text-sm md:text-base font-medium rounded-full hover:opacity-90 transition-opacity"
                    >
                        @res_llc.info をフォロー
                    </a>
                </div>
            </div>
        </section>
    );
}
