'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { STORE_NAME, LINE_URL } from '@/constants';

const NAV_ITEMS = [
    { href: '/#problems', label: 'よくある悩み' },
    { href: '/#cases', label: '実績' },
    { href: '/#services', label: 'サービス' },
    { href: '/blog/', label: 'ブログ' },
    { href: '/about/', label: '会社概要' },
    { href: '/recruit/', label: '採用情報' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo-horizontal-trimmed.webp"
                            alt={STORE_NAME}
                            width={180}
                            height={45}
                            className="h-8 md:h-10 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <ul className="flex gap-6">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-sm hover:text-gray-600 transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <a
                            href={LINE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent hover:bg-accent-hover text-white text-sm font-bold py-2 px-5 rounded-full transition-colors"
                        >
                            無料相談
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="メニュー"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-3 pb-3 border-t pt-3">
                        <ul className="flex flex-col gap-1">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="block py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-3 px-4">
                            <a
                                href={LINE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center bg-accent hover:bg-accent-hover text-white text-sm font-bold py-3 px-5 rounded-full transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                無料相談はこちら
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
