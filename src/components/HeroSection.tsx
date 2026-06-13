'use client';

import { useState } from 'react';
import Image from 'next/image';
import CTAButton from './lp/CTAButton';
import { FREE_CONSULTATION_MINUTES, STORE_NAME } from '@/constants';

export default function HeroSection() {
    const [ended, setEnded] = useState(false);

    return (
        <section
            role="region"
            aria-label="ヒーローセクション"
            className="relative bg-gradient-to-b from-gray-50 to-white"
        >
            {/* ヘッダー分を引いた高さ（縦は1画面に収める） */}
            <div className="h-[calc(100svh-3.5rem)] md:h-[calc(100svh-4rem)]">
                <div className="relative h-full w-full px-4 py-4 md:py-10">
                    {/* 枠に収めたヒーロー（横幅は max-w-6xl で抑える） */}
                    <div className="relative mx-auto h-full w-full max-w-6xl overflow-hidden rounded-2xl bg-hero-bg shadow-lg">
                        {/* 静止画：常に下に敷く＝動画が終わるとここで止まる */}
                        <Image
                            src="/images/hero-poster.webp"
                            alt=""
                            fill
                            priority
                            aria-hidden="true"
                            className="object-cover"
                        />

                        {/* 動画：1回だけ再生し、終わったらフェードアウトして静止画に止める */}
                        <video
                            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                                ended ? 'pointer-events-none opacity-0' : 'opacity-100'
                            }`}
                            poster="/images/hero-poster.webp"
                            autoPlay
                            muted
                            playsInline
                            preload="auto"
                            aria-hidden="true"
                            onEnded={() => setEnded(true)}
                        >
                            <source src="/videos/hero.mp4" type="video/mp4" />
                        </video>

                        {/* ヴェール（静止画で止まってから表示） */}
                        <div
                            className={`absolute inset-0 bg-hero-bg/85 transition-opacity duration-700 ${
                                ended ? 'opacity-100' : 'opacity-0'
                            }`}
                        />

                        {/* 現ヒーローの文言（動画終了後＝静止画の上にだけ表示） */}
                        <div
                            className={`absolute inset-0 flex items-center justify-center overflow-y-auto px-4 py-6 transition-opacity duration-700 ${
                                ended ? 'opacity-100' : 'pointer-events-none opacity-0'
                            }`}
                        >
                            <div className="mx-auto max-w-3xl text-center text-hero-text">
                                <Image
                                    src="/images/logo-cover-trimmed.webp"
                                    alt={STORE_NAME}
                                    width={600}
                                    height={200}
                                    className="mx-auto mb-4 h-auto w-full max-w-[220px] sm:max-w-xs md:mb-6 md:max-w-md"
                                    priority
                                />
                                <p className="mb-3 text-xs tracking-wider text-hero-sub md:mb-4 md:text-sm">
                                    沖縄の個人事業主・小規模事業者の方へ
                                </p>
                                <h1 className="mb-3 text-2xl font-bold leading-tight sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
                                    あなたの事業に
                                    <br />
                                    <span className="text-accent">「IT担当」</span>を。
                                </h1>
                                <p className="mb-5 text-sm leading-relaxed text-hero-sub md:mb-6 md:text-base">
                                    ひとりで悩まなくて大丈夫。
                                    <br className="hidden md:block" />
                                    困ったとき、気軽に相談できる存在がいます。
                                </p>
                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                    <CTAButton variant="line" text="無料相談はこちら" />
                                </div>
                                <p className="mt-3 text-xs text-hero-sub">
                                    無料・{FREE_CONSULTATION_MINUTES}分 / LINEで気軽にご相談ください
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
