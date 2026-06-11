import { EMAIL_ADDRESS } from '@/constants';

export default function AboutContactSection() {
    return (
        <section id="contact" className="py-16 px-4 bg-black text-section-text">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    お問い合わせ
                </h2>
                <p className="mb-8 text-section-sub leading-relaxed">
                    お取引・採用・取材等のお問い合わせは、メールにてご連絡ください。
                </p>
                <a href={`mailto:${EMAIL_ADDRESS}`} className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold py-4 px-8 rounded-full transition-colors min-w-[280px] text-lg">
                    メールで問い合わせる
                </a>
                <p className="mt-3 text-xs text-section-muted">{EMAIL_ADDRESS}</p>
            </div>
        </section>
    );
}
