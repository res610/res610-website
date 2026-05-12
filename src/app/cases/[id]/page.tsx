import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/lp/CTASection';
import { CASE_STUDIES } from '@/data/caseStudies';

interface PageProps {
    params: Promise<{ id: string }>;
}

export function generateStaticParams() {
    return CASE_STUDIES.map((cs) => ({ id: cs.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const cs = CASE_STUDIES.find((c) => c.id === id);
    if (!cs) return {};

    return {
        title: `${cs.companyName} の導入事例 | 合同会社RES`,
        description: cs.summary,
    };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
    const { id } = await params;
    const cs = CASE_STUDIES.find((c) => c.id === id);
    if (!cs) notFound();

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                <article className="max-w-3xl mx-auto px-4 py-12">
                    {/* パンくず */}
                    <nav className="text-sm text-gray-500 mb-8">
                        <Link href="/" className="hover:text-black transition-colors">ホーム</Link>
                        <span className="mx-2">/</span>
                        <Link href="/#cases" className="hover:text-black transition-colors">導入実績</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-700">{cs.companyName}</span>
                    </nav>

                    {/* 業種タグ */}
                    <div className="mb-3">
                        <span className="text-xs md:text-sm text-gray-600 bg-gray-200 px-3 py-1 rounded-full">
                            {cs.industry}
                        </span>
                    </div>

                    {/* タイトル */}
                    <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
                        {cs.companyName}
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 mb-8">
                        {cs.summary}
                    </p>

                    {/* メイン画像 */}
                    {cs.image && (
                        <div className="relative w-full aspect-[16/9] mb-10 rounded-xl overflow-hidden bg-gray-50">
                            <Image
                                src={cs.image}
                                alt={`${cs.companyName} の導入事例`}
                                fill
                                sizes="(min-width: 768px) 768px, 100vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* 課題 */}
                    <section className="mb-10">
                        <h2 className="text-lg md:text-xl font-bold mb-3 text-gray-900">課題</h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            {cs.before}
                        </p>
                    </section>

                    {/* 解決アプローチ */}
                    <section className="mb-10">
                        <h2 className="text-lg md:text-xl font-bold mb-3 text-gray-900">解決アプローチ</h2>
                        <p className="text-base text-gray-700 leading-relaxed">
                            {cs.description}
                        </p>
                    </section>

                    {/* 取り組みのポイント */}
                    {cs.keyPoints && cs.keyPoints.length > 0 && (
                        <section className="mb-10">
                            <h2 className="text-lg md:text-xl font-bold mb-3 text-gray-900">取り組みのポイント</h2>
                            <ul className="space-y-2">
                                {cs.keyPoints.map((point) => (
                                    <li key={point} className="flex gap-3 text-base text-gray-700 leading-relaxed">
                                        <span className="flex-none mt-1 w-1.5 h-1.5 rounded-full bg-accent" aria-hidden />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* 導入サービス */}
                    <section className="mb-10">
                        <h2 className="text-lg md:text-xl font-bold mb-3 text-gray-900">導入サービス</h2>
                        <div className="flex flex-wrap gap-2">
                            {cs.services.map((service) => (
                                <span
                                    key={service}
                                    className="text-sm text-gray-700 bg-gray-100 border border-gray-300 px-3 py-1 rounded-md"
                                >
                                    {service}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* 使用ツール */}
                    {cs.tools && cs.tools.length > 0 && (
                        <section className="mb-10">
                            <h2 className="text-lg md:text-xl font-bold mb-3 text-gray-900">使用ツール</h2>
                            <div className="flex flex-wrap gap-2">
                                {cs.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="text-sm text-gray-700 bg-white border border-gray-300 px-3 py-1 rounded-md"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* 成果 */}
                    <section className="mb-10 p-6 md:p-8 bg-gray-50 border border-gray-200 rounded-xl">
                        <h2 className="text-lg md:text-xl font-bold mb-3 text-gray-900">成果</h2>
                        <p className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                            {cs.result}
                        </p>
                    </section>

                    {/* お客様の声 */}
                    {cs.testimonial && (
                        <section className="mb-10">
                            <h2 className="text-lg md:text-xl font-bold mb-3 text-gray-900">お客様の声</h2>
                            <blockquote className="bg-gray-50 border-l-4 border-accent p-6 md:p-8 rounded-r-lg">
                                <p className="text-base md:text-lg text-gray-800 italic leading-relaxed">
                                    「{cs.testimonial.quote}」
                                </p>
                                <footer className="mt-4 text-sm text-gray-600 not-italic">
                                    — {cs.testimonial.author}
                                    {cs.testimonial.role && (
                                        <span className="ml-2 text-gray-500">（{cs.testimonial.role}）</span>
                                    )}
                                </footer>
                            </blockquote>
                        </section>
                    )}

                    {/* メタ情報 */}
                    {(cs.period || cs.since || cs.contractAmount || cs.note) && (
                        <section className="mb-10 text-sm text-gray-600 space-y-1">
                            {cs.period && <p>実施期間: {cs.period}</p>}
                            {!cs.period && cs.since && <p>開始時期: {cs.since}</p>}
                            {cs.contractAmount && (
                                <p className="text-green-600 font-bold">継続契約: {cs.contractAmount}</p>
                            )}
                            {cs.note && <p className="text-gray-400">{cs.note}</p>}
                        </section>
                    )}

                    {/* サイトリンク */}
                    {cs.siteUrl && (
                        <section className="mb-12">
                            <a
                                href={cs.siteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-base md:text-lg text-accent hover:underline font-medium"
                            >
                                {cs.companyName} のサイトを見る
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </section>
                    )}

                    {/* 戻る */}
                    <div className="border-t border-gray-200 pt-8">
                        <Link
                            href="/#cases"
                            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-black transition-colors"
                        >
                            ← 導入実績一覧に戻る
                        </Link>
                    </div>
                </article>
                <CTASection headline="あなたの事業でも、こうした成果を出しませんか？" />
            </main>
            <Footer />
        </>
    );
}
