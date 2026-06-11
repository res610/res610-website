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
                    メールで問い合わせる
                </a>
                <p className="mt-3 text-xs text-section-muted">{EMAIL_ADDRESS}</p>
            </div>
        </section>
    );
}
