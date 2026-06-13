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
                    <div className="overflow-hidden -mx-4 py-6">
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
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                                    {/* Date label */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-6 pb-1.5 px-2">
                                        <span className="text-white text-[10px] md:text-xs font-medium drop-shadow">
                                            {formatDate(post.timestamp)}
                                        </span>
                                    </div>
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
