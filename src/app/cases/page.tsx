import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/lp/CTASection';
import { CASE_STUDIES } from '@/data/caseStudies';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
    title: '導入実績',
    description: '合同会社RESの導入実績一覧。沖縄のレンタカー・建設・ネイルサロン・美容サロン・飲食店など、業種を問わず小規模事業者の課題をITで解決してきました。',
    alternates: {
        canonical: '/cases/',
    },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "導入実績", item: `${siteUrl}/cases/` },
    ],
};

export default function CasesPage() {
    return (
        <>
            <Header />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <main className="min-h-screen bg-white">
                <div className="max-w-5xl mx-auto px-4 py-12">
                    <nav className="text-sm text-gray-500 mb-8">
                        <Link href="/" className="hover:text-black transition-colors">ホーム</Link>
                        <span className="mx-2">/</span>
                        <span>導入実績</span>
                    </nav>

                    <h1 className="text-3xl font-bold mb-3">導入実績</h1>
                    <p className="text-gray-600 mb-10">
                        業種を問わず、沖縄の小規模事業者の現場の課題を解決してきました。
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {CASE_STUDIES.map((cs) => (
                            <Link key={cs.id} href={`/cases/${cs.id}/`} className="group block bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                {cs.image && (
                                    <div className="relative w-full aspect-[16/9] bg-white">
                                        <Image
                                            src={cs.image}
                                            alt={`${cs.companyName} の導入事例`}
                                            fill
                                            sizes="(min-width: 768px) 480px, 100vw"
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <div className="p-6">
                                    <div className="mb-3">
                                        <span className="text-xs text-gray-600 bg-gray-200 px-3 py-1 rounded-full">
                                            {cs.industry}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-2">{cs.before}</p>
                                    <h2 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-accent transition-colors">
                                        {cs.summary}
                                    </h2>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {cs.services.map((service) => (
                                            <span key={service} className="text-xs text-gray-700 bg-white border border-gray-300 px-2 py-1 rounded-md">
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-sm text-gray-700">{cs.companyName}</p>
                                    <p className="mt-3 text-sm text-accent font-medium">詳しく見る →</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <CTASection headline="あなたの事業でも、こうした成果を出しませんか？" />
            </main>
            <Footer />
        </>
    );
}
