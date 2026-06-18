'use client';

import { useState } from 'react';
import Image from 'next/image';
import CTAButton from './lp/CTAButton';
import { FREE_CONSULTATION_MINUTES, STORE_NAME } from '@/constants';

/** ヒーローの文言（デスクトップは動画上にオーバーレイ、スマホは動画の下に表示） */
function HeroCopy() {
    return (
        <div className="mx-auto max-w-3xl text-center text-hero-text">
            <Image
                src="/images/logo-cover-trimmed.webp"
                alt={STORE_NAME}
                width={600}
                height={200}
                className="mx-auto mb-4 h-auto w-full max-w-[220px] sm:max-w-xs md:mb-4 md:max-w-sm"
                priority
            />
            <p className="mb-3 text-xs tracking-wider text-hero-sub md:mb-3 md:text-sm">
                沖縄の個人事業主・小規模事業者の方へ
            </p>
            <h1 className="mb-3 text-2xl font-bold leading-tight sm:text-3xl md:mb-3 md:text-3xl lg:text-4xl">
                あなたの事業に
                <br />
                <span className="text-accent">「IT担当」</span>を。
            </h1>
            <p className="mb-5 text-sm leading-relaxed text-hero-sub md:mb-4 md:text-base">
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
    );
}

export default function HeroSection() {
    const [ended, setEnded] = useState(false);

    return (
        <section
            role="region"
            aria-label="ヒーローセクション"
            className="relative bg-gradient-to-b from-gray-50 to-white"
        >
            {/* デスクトップはヘッダー分を引いた高さで1画面に収める。スマホは内容に合わせて伸縮 */}
            <div className="md:h-[calc(100svh-4rem)]">
                <div className="px-4 py-4 md:h-full md:py-6">
                    {/* メディア枠：スマホは16:9。デスクトップは画面いっぱい（動画はcontainで全体表示＝余白が出る） */}
                    <div className="relative mx-auto aspect-video w-full max-w-6xl overflow-hidden rounded-2xl bg-hero-bg shadow-lg md:aspect-auto md:h-full">
                        {/* 静止画：常に下に敷く＝動画が終わるとここで止まる */}
                        <Image
                            src="/images/hero-poster.webp"
                            alt=""
                            fill
                            priority
                            aria-hidden="true"
                            className="object-contain"
                        />

                        {/* 動画：1回だけ再生し、終わったらフェードアウトして静止画に止める */}
                        <video
                            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
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

                        {/* デスクトップのみ：ヴェール＋文言オーバーレイ（動画終了後に表示） */}
                        <div
                            className={`absolute inset-0 hidden bg-hero-bg/85 transition-opacity duration-700 md:block ${
                                ended ? 'opacity-100' : 'opacity-0'
                            }`}
                        />
                        <div
                            className={`absolute inset-0 hidden items-center justify-center overflow-y-auto px-4 py-4 transition-opacity duration-700 md:flex ${
                                ended ? 'opacity-100' : 'pointer-events-none opacity-0'
                            }`}
                        >
                            <HeroCopy />
                        </div>
                    </div>

                    {/* スマホのみ：文言を動画の下に常時表示（字幕の見切れ回避） */}
                    <div className="mt-6 mb-2 md:hidden">
                        <HeroCopy />
                    </div>
                </div>
            </div>
        </section>
    );
}
