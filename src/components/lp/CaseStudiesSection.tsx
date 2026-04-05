'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { CASE_STUDIES, CaseStudy } from '@/data/caseStudies';

function CaseModal({ cs, onClose }: { cs: CaseStudy; onClose: () => void }) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={onClose}
        >
            <div
                className="bg-white text-gray-900 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl leading-none"
                    aria-label="閉じる"
                >
                    &times;
                </button>

                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {cs.industry}
                </span>
                <h3 className="text-2xl font-bold mt-3 mb-2">{cs.companyName}</h3>
                {cs.since && (
                    <p className="text-sm text-gray-500 mb-4">{cs.since}</p>
                )}

                <p className="text-gray-700 leading-relaxed mb-6">{cs.description}</p>

                <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-500 mb-2">提供サービス</h4>
                    <div className="flex flex-wrap gap-2">
                        {cs.services.map((s) => (
                            <span key={s} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                                {s}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="bg-green-50 rounded-xl p-5">
                    <h4 className="text-sm font-bold text-green-700 mb-1">成果</h4>
                    <p className="text-green-900 font-bold">{cs.result}</p>
                    {cs.contractAmount && (
                        <p className="text-sm text-green-700 mt-1">継続契約: {cs.contractAmount}</p>
                    )}
                </div>

                {cs.note && (
                    <p className="text-xs text-gray-400 mt-4">{cs.note}</p>
                )}
            </div>
        </div>
    );
}

export default function CaseStudiesSection() {
    const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const scrollAmount = scrollRef.current.clientWidth;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <section id="cases" className="relative h-[100svh] flex flex-col bg-section-bg text-section-text">
            {/* ヘッダー */}
            <div className="text-center pt-12 pb-6 px-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">導入実績</h2>
                <p className="text-section-sub text-sm">
                    業種を問わず、現場の課題を解決してきました
                </p>
            </div>

            {/* 横スライド */}
            <div className="relative flex-1 min-h-0">
                {/* 左矢印 */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors"
                    aria-label="前の実績"
                >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* スライドコンテナ */}
                <div
                    ref={scrollRef}
                    className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                    style={{ scrollbarWidth: 'none' }}
                >
                    {CASE_STUDIES.map((cs) => (
                        <div
                            key={cs.id}
                            className="flex-none w-full h-full snap-center relative cursor-pointer group"
                            onClick={() => setSelectedCase(cs)}
                        >
                            {/* 背景画像 */}
                            <Image
                                src={cs.image}
                                alt={cs.companyName}
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />
                            {/* オーバーレイ */}
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />

                            {/* テキスト */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                                <span className="text-xs md:text-sm text-gray-300 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
                                    {cs.industry}
                                </span>
                                <h3 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                                    {cs.summary}
                                </h3>
                                <p className="text-lg md:text-xl text-gray-200 mb-6">
                                    {cs.companyName}
                                </p>
                                <span className="text-sm text-gray-300 border border-white/30 px-6 py-2 rounded-full group-hover:bg-white/10 transition-colors">
                                    詳しく見る
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 右矢印 */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors"
                    aria-label="次の実績"
                >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* ドットインジケーター */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {CASE_STUDIES.map((cs) => (
                        <div
                            key={cs.id}
                            className="w-2 h-2 rounded-full bg-white/40"
                        />
                    ))}
                </div>
            </div>

            {/* ポップアップ */}
            {selectedCase && (
                <CaseModal cs={selectedCase} onClose={() => setSelectedCase(null)} />
            )}
        </section>
    );
}
