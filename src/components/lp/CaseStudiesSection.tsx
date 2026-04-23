'use client';

import { useRef } from 'react';
import { CASE_STUDIES } from '@/data/caseStudies';

export default function CaseStudiesSection() {
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
        <section id="cases" className="relative flex flex-col">
            {/* ヘッダー */}
            <div className="text-center py-8 px-4 bg-section-bg">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-section-text">導入実績</h2>
                <p className="text-section-sub text-sm">
                    業種を問わず、現場の課題を解決してきました
                </p>
            </div>

            {/* 横スライド */}
            <div className="relative bg-white" style={{ height: '70vh' }}>
                {/* 左矢印 */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 text-gray-600 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors"
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
                            className="flex-none w-full h-full snap-center p-4 md:p-8"
                        >
                            <div className="w-full h-full rounded-2xl bg-gray-50 border border-gray-200 flex flex-col items-center justify-center px-6 md:px-16 text-center shadow-sm">
                                {/* 業種タグ */}
                                <span className="text-xs md:text-sm text-gray-600 bg-gray-200 px-4 py-1 rounded-full mb-8">
                                    {cs.industry}
                                </span>

                                {/* Before */}
                                <p className="text-base md:text-xl text-gray-700 mb-4 leading-relaxed">
                                    {cs.before}
                                </p>

                                {/* 矢印 */}
                                <div className="text-2xl md:text-3xl text-accent mb-4">↓</div>

                                {/* After（成果） */}
                                <h3 className="text-xl md:text-3xl font-bold mb-6 leading-tight text-gray-900">
                                    {cs.result}
                                </h3>

                                {/* 社名 */}
                                <p className="text-sm md:text-base text-gray-700 mb-2">
                                    {cs.companyName}
                                </p>
                                {cs.since && (
                                    <p className="text-xs text-gray-400">{cs.since}</p>
                                )}
                                {cs.contractAmount && (
                                    <p className="text-xs text-green-600 font-bold mt-1">継続契約: {cs.contractAmount}</p>
                                )}
                                {cs.note && (
                                    <p className="text-xs text-gray-400 mt-1">{cs.note}</p>
                                )}
                                {cs.siteUrl && (
                                    <a
                                        href={cs.siteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-flex items-center gap-2 text-sm md:text-base text-accent hover:underline font-medium"
                                    >
                                        サイトを見る
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 右矢印 */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 text-gray-600 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors"
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
                            className="w-2 h-2 rounded-full bg-gray-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
