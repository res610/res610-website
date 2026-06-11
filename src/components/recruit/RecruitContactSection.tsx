import { EMAIL_ADDRESS } from '@/constants';

export default function RecruitContactSection() {
    return (
        <section id="contact" className="py-16 px-4 bg-black text-section-text">
            <div className="max-w-3xl mx-auto text-center">
                <p className="text-sm font-bold mb-2 text-accent">
                    カジュアル面談歓迎
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    まずは、話を聞いてみませんか？
                </h2>
                <p className="mb-8 text-section-sub leading-relaxed">
                    応募を決めていない段階でも大丈夫です。沖縄での働き方や仕事の中身について、気軽にお話ししましょう。
                    <br className="hidden md:block" />
                    人材紹介エージェント経由でのご応募・お問い合わせも受け付けています。
                </p>
                <a href={`mailto:${EMAIL_ADDRESS}`} className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold py-4 px-8 rounded-full transition-colors min-w-[280px] text-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    メールで問い合わせる
                </a>
                <p className="mt-3 text-xs text-section-muted">{EMAIL_ADDRESS}</p>
            </div>
        </section>
    );
}
