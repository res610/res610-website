'use client';

import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { PROBLEMS, Problem } from '@/data/problems';

function ProblemCard({ problem }: { problem: Problem }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="bg-card-bg rounded-xl p-6 shadow-sm backdrop-blur-sm cursor-pointer select-none transition-all duration-300 hover:shadow-md"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onClick={() => setIsOpen((prev) => !prev)}
        >
            <div className="flex items-start gap-4">
                <div className="flex-1">
                    <p className="text-base leading-relaxed text-card-text">{problem.text}</p>
                    <div
                        className={`grid transition-all duration-300 ease-in-out ${
                            isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                        }`}
                    >
                        <div className="overflow-hidden">
                            <p className="text-sm font-bold text-accent border-t border-gray-200 pt-3 mb-2">
                                {problem.catchphrase}
                            </p>
                            <p className="text-sm text-section-sub leading-relaxed">
                                {problem.example}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`text-center mt-2 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-40'}`}>
                <span className="text-xs text-section-muted">タップして詳しく</span>
            </div>
        </div>
    );
}

export default function ProblemsSection() {
    return (
        <SectionWrapper id="problems" bgGray>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                こんなお悩みありませんか？
            </h2>
            <p className="text-center text-section-sub mb-12">
                一つでも当てはまったら、私たちがお力になれます
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {PROBLEMS.map((problem, index) => (
                    <ProblemCard key={index} problem={problem} />
                ))}
            </div>
        </SectionWrapper>
    );
}
