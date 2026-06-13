import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/lp/CTASection';
import { SERVICES } from '@/data/services';
import { CASE_STUDIES } from '@/data/caseStudies';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
    title: 'サービス',
    description: '合同会社RESのサービス紹介。沖縄の個人事業主・小規模事業者向けに、ホームページ制作・業務効率化システム開発・IT導入支援を提供。現場に合わせた仕組みで、事業に並走します。',
    alternates: {
        canonical: '/services/',
    },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "サービス", item: `${siteUrl}/services/` },
    ],
};

const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: '合同会社RESのサービス',
    itemListElement: SERVICES.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: {
                "@type": "Organization",
                name: '合同会社RES',
            },
            areaServed: { "@type": "State", name: '沖縄県' },
            url: `${siteUrl}/services/#${service.id}`,
        },
    })),
};

export default function ServicesPage() {
    return (
        <>
            <Header />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
            <main className="min-h-screen bg-white">
                <div className="max-w-5xl mx-auto px-4 py-12">
                    <nav className="text-sm text-gray-500 mb-8">
                        <Link href="/" className="hover:text-black transition-colors">ホーム</Link>
                        <span className="mx-2">/</span>
                        <span>サービス</span>
                    </nav>

                    <h1 className="text-3xl font-bold mb-3">サービス</h1>
                    <p className="text-gray-600 mb-12">
                        沖縄の個人事業主・小規模事業者の「IT担当」として、現場に合わせた仕組みを作り、事業に並走します。
                    </p>

                    <div className="space-y-16">
                        {SERVICES.map((service) => {
                            const relatedCases = CASE_STUDIES.filter((cs) => service.caseIds.includes(cs.id));
                            return (
                                <section key={service.id} id={service.id} className="scroll-mt-20">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-6">{service.title}</h2>
                                    <p className="text-gray-700 leading-relaxed mb-8">{service.description}</p>

                                    <h3 className="text-base font-bold text-gray-900 mb-3">こんなお悩みの方へ</h3>
                                    <ul className="space-y-2 mb-8">
                                        {service.problems.map((problem) => (
                                            <li key={problem} className="flex gap-3 text-gray-700 leading-relaxed">
                                                <span className="flex-none mt-2 w-1.5 h-1.5 rounded-full bg-accent" aria-hidden />
                                                <span>{problem}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                        {service.features.map((feature) => (
                                            <div key={feature.title} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                                                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {relatedCases.length > 0 && (
                                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                                            <h3 className="text-base font-bold text-gray-900 mb-3">関連する導入実績</h3>
                                            <ul className="space-y-2">
                                                {relatedCases.map((cs) => (
                                                    <li key={cs.id}>
                                                        <Link href={`/cases/${cs.id}/`} className="text-accent hover:underline">
                                                            {cs.companyName}（{cs.industry}）— {cs.summary}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </section>
                            );
                        })}
                    </div>

                    <div className="mt-16 bg-gradient-to-br from-accent/5 to-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10">
                        <span className="inline-block text-xs font-bold text-accent bg-accent/10 rounded-full px-3 py-1 mb-4">AI活用</span>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">AIに任せきりにはしません。20年の経験で、使いこなします</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            RESでは、ホームページやシステムの制作に、AnthropicのAI「Claude」を活用しています。ただし、AIに丸投げはしません。「何を作るか」「その作りで本当にお客様の役に立つか」——大事な判断とチェックは、必ず私たちの目で行います。
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            AIは、<strong className="font-bold">経験のある人が使ってこそ</strong>力を発揮する道具です。RESには20年以上の現場経験があるからこそ、AIが出した答えの良し悪しを見抜き、そのまま使える部分と人が手をかけるべき部分を見極められます。<strong className="font-bold">スピードはAIで、品質は経験で。</strong>これがRESの作り方です。
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <h3 className="font-bold text-gray-900 mb-2">判断するのは、人</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">設計や「現場に何が必要か」の判断は、私たちが行います。AIはその実装を速めてくれる相棒。だから、速くても芯のぶれないものができあがります。</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <h3 className="font-bold text-gray-900 mb-2">20年の経験で見極める</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">AIが出したものを、そのまま納品することはありません。20年以上培った経験の目で一つひとつ確認し、SEOやセキュリティのチェックも重ねた上でお届けします。</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <h3 className="font-bold text-gray-900 mb-2">お客様にもAIの力を</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">いま、Web集客の状況をAIがわかりやすくレポートして届ける仕組みを育てています。ここでもAI任せにせず、人の視点を添えて「次に何をすればいいか」が伝わる形を目指しています。</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 border-t border-gray-200 pt-10">
                        <h2 className="text-xl font-bold mb-4">進め方</h2>
                        <ol className="space-y-3">
                            {['無料相談（30分）で困りごとを伺います', '現場・業務の現状を一緒に整理します', '最適な進め方と構成をご提案します', '構築・導入。使い方の定着までサポートします', '導入後も「IT担当」として並走します'].map((step, index) => (
                                <li key={step} className="flex gap-4 text-gray-700 leading-relaxed">
                                    <span className="flex-none w-7 h-7 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">{index + 1}</span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <CTASection headline="どのサービスが合うかわからなくても大丈夫です" />
            </main>
            <Footer />
        </>
    );
}
