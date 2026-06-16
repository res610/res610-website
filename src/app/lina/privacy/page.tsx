import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'LINA プライバシーポリシー（サロンオーナー向け）',
    description: '美容サロン向け予約管理サービス「LINA」をご利用いただくサロン（オーナー）の情報、およびGoogleユーザーデータの取り扱いについて定めたプライバシーポリシーです。',
    alternates: {
        canonical: '/lina/privacy/',
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function LinaPrivacyPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-accent text-center mb-8 md:mb-12">
                        プライバシーポリシー
                    </h1>

                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                        <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-8">
                            {/* 前文 */}
                            <p>
                                合同会社RES（以下「当社」）は、当社が提供する美容サロン向け予約管理サービス「LINA」（以下「本サービス」）をご利用いただくサロン（オーナー）の情報、および本サービスがGoogleのOAuthを通じて取り扱うGoogleユーザーデータの取り扱いについて、以下のとおり定めます。
                            </p>
                            <p className="bg-gray-50 border border-gray-200 rounded p-4 text-sm">
                                ※ サロンをご利用になるお客様（利用者）の個人情報は、<span className="font-bold">各サロンが管理者（個人情報取扱事業者）として</span>取り扱います。本サービス（当社）はサロンの委託先としてシステムを提供する立場です。
                            </p>

                            {/* 1 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-accent">1. 事業者情報</h2>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li>事業者名：合同会社RES</li>
                                    <li>代表者：城間 敏光</li>
                                    <li>所在地：沖縄県島尻郡八重瀬町字後原537</li>
                                    <li>お問い合わせ：support@res610.com</li>
                                </ul>
                            </section>

                            {/* 2 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-accent">2. 取得する情報</h2>
                                <p className="mb-2">本サービスは、次の情報を取り扱います。</p>
                                <ol className="list-decimal list-inside space-y-2">
                                    <li><span className="font-bold">サロン（オーナー）の情報</span>：氏名・メールアドレス・電話番号・店舗情報、Googleアカウント連携に関する情報。</li>
                                    <li><span className="font-bold">サロンの利用者（お客様）の情報</span>：氏名・LINEプロフィール・予約内容・来店履歴・施術記録・チャット内容・施術写真／動画など（サロンがお客様から取得し、サロンの管理下で利用する情報）。</li>
                                </ol>
                            </section>

                            {/* 3 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-accent">3. 利用目的</h2>
                                <ol className="list-decimal list-inside space-y-2">
                                    <li>予約管理・顧客管理・チャット・通知など本サービスの機能提供のため。</li>
                                    <li>Googleユーザーデータ（drive.file）は、<span className="font-bold">施術写真・動画をオーナー自身のGoogleドライブに保存・表示する目的に限り</span>利用します。</li>
                                    <li>障害対応・不正防止・お問い合わせ対応のため。</li>
                                </ol>
                            </section>

                            {/* 4 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-accent">4. Google ユーザーデータの取り扱い（Limited Use）</h2>
                                <p className="mb-2">
                                    本サービスがGoogle APIから取得した情報の使用および他アプリへの転送は、<span className="font-bold">Google API Services User Data Policy（Limited Use の要件を含む）に準拠</span>します。具体的には：
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li>取得したGoogleユーザーデータは、<span className="font-bold">上記3.の目的にのみ</span>使用します。</li>
                                    <li><span className="font-bold">第三者へ販売しません。</span></li>
                                    <li><span className="font-bold">広告目的に使用しません。</span></li>
                                    <li><span className="font-bold">人間による閲覧を行いません</span>（ただし、(a) 利用者の明示的同意がある場合、(b) セキュリティ目的、(c) 法令遵守、(d) 集計・匿名化された運用上必要な場合を除く）。</li>
                                    <li>スコープは目的達成に必要な最小限（drive.file）に限定します。</li>
                                </ul>
                                <p className="mt-3 text-xs text-gray-500">
                                    原文（参考）: LINA&apos;s use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.
                                </p>
                            </section>

                            {/* 5 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-accent">5. 保存場所・データの所有</h2>
                                <p className="mb-2">本サービスは「個人情報を当社に集中させない」設計を採用しています。</p>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li><span className="font-bold">施術写真・動画・チャット画像</span>：<span className="font-bold">オーナー自身のGoogleドライブ</span>に保存されます（当社は参照情報のみ保持）。</li>
                                    <li><span className="font-bold">予約・顧客台帳・施術記録・チャット本文</span>：<span className="font-bold">オーナー自身のGoogleアカウント（スプレッドシート）</span>に保存されます。</li>
                                    <li><span className="font-bold">当社（GCP）</span>が保持するのは、本サービスの稼働に必要な情報（アプリ・ログ・認証処理・サロンごとの接続情報）に限られ、<span className="font-bold">お客様の個人情報そのものを蓄積・保存しません</span>。</li>
                                    <li>Google連携の認証情報（更新トークン）は<span className="font-bold">暗号化して安全に保管</span>します。</li>
                                </ul>
                            </section>

                            {/* 6 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-accent">6. 安全管理措置</h2>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li>通信の暗号化（TLS）、保存データの暗号化、アクセス権限の最小化、アクセスログの管理を行います。</li>
                                    <li>ログ等にパスワード・トークン・個人情報を出力しない運用とします。</li>
                                    <li>取得スコープ・権限を必要最小限に限定します。</li>
                                </ul>
                            </section>

                            {/* 7 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-accent">7. Cookie・アクセス解析</h2>
                                <p>
                                    本サービスは、ログイン状態の保持等のために必要な範囲でブラウザの保存領域（localStorage 等）を利用します。<span className="font-bold">現在、Google Analytics 等の第三者によるアクセス解析・行動追跡ツールは利用していません。</span> 将来的に解析ツールを導入する場合は、取得する情報・目的・無効化方法を本ポリシーに明記します。
                                </p>
                            </section>

                            {/* 8 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-accent">8. 第三者提供・委託</h2>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li>取得した情報を、本人の同意なく第三者に提供しません（法令に基づく場合を除く）。</li>
                                    <li>本サービスの提供にあたり、Google（クラウド基盤・ストレージ）等の外部サービスを利用します。これらは本サービス提供に必要な範囲での利用に限ります。</li>
                                </ul>
                            </section>

                            {/* 9 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-accent">9. 保有・削除</h2>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li>データの所有・管理権はサロン（オーナー）にあり、<span className="font-bold">削除のご請求にはオーナーまたは当社が対応</span>します（個人情報保護法に準拠）。</li>
                                    <li>Google連携を解除した場合、本サービスからのGoogleドライブへのアクセスは停止します。</li>
                                </ul>
                            </section>

                            {/* 10 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-accent">10. 開示・訂正・利用停止等の請求</h2>
                                <p>ご本人からの開示・訂正・利用停止等のご請求には、上記お問い合わせ窓口にて対応します。</p>
                            </section>

                            {/* 11 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-accent">11. 改定</h2>
                                <p>本ポリシーは、必要に応じて改定します。重要な変更がある場合は本サービス上で告知します。</p>
                            </section>

                            {/* 12 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-accent">12. お問い合わせ窓口</h2>
                                <div className="space-y-1">
                                    <p>合同会社RES　LINA担当</p>
                                    <p>メール：support@res610.com</p>
                                </div>
                            </section>

                            {/* 制定日 */}
                            <div className="text-right text-sm text-gray-500 mt-4">
                                <p>制定日：2026年6月10日</p>
                                <p>最終改定日：2026年6月10日</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
