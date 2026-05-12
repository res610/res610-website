import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/lp/CTASection';
import { getArticleBySlug, getAllSlugs } from '@/lib/blog';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    if (!article) return {};

    return {
        title: article.title,
        description: article.description,
    };
}

export default async function BlogArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    if (!article) notFound();

    return (
        <>
            <Header />
            <main className="min-h-screen">
                <article className="max-w-3xl mx-auto px-4 py-12">
                    <nav className="text-sm text-gray-500 mb-8">
                        <Link href="/" className="hover:text-black transition-colors">ホーム</Link>
                        <span className="mx-2">/</span>
                        <Link href="/blog/" className="hover:text-black transition-colors">ブログ</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-700">{article.title}</span>
                    </nav>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag) => (
                            <span key={tag} className="text-xs bg-brand-gray text-gray-600 px-2 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>

                    <div className="flex gap-4 text-sm text-gray-500 mb-10">
                        <time>公開: {article.publishedAt}</time>
                        {article.updatedAt && article.updatedAt !== article.publishedAt && (
                            <time>更新: {article.updatedAt}</time>
                        )}
                    </div>

                    <div
                        className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-[#06C755] prose-a:no-underline hover:prose-a:underline"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    <div className="mt-12 p-8 bg-brand-gray rounded-xl text-center">
                        <p className="text-lg font-bold mb-2">この記事を読んだ方へ</p>
                        <p className="text-gray-600 mb-4">
                            業務のIT化でお悩みなら、まずは30分の無料相談をご利用ください。
                        </p>
                        <Link
                            href="/"
                            className="inline-block text-[#06C755] font-bold hover:underline"
                        >
                            合同会社RESのサービスを見る →
                        </Link>
                    </div>
                </article>
                <CTASection headline="あなたの業務、一緒に改善しませんか？" />
            </main>
            <Footer />
        </>
    );
}
