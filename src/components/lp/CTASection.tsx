import CTAButton from './CTAButton';
import { FREE_CONSULTATION_MINUTES } from '@/constants';

interface CTASectionProps {
    headline?: string;
    bgBlack?: boolean;
}

export default function CTASection({ headline, bgBlack = false }: CTASectionProps) {
    return (
        <section className={`py-16 px-4 ${bgBlack ? 'bg-black' : 'bg-section-bg'} text-section-text`}>
            <div className="max-w-3xl mx-auto text-center">
                <p className="text-sm font-bold mb-2 text-accent">
                    無料・{FREE_CONSULTATION_MINUTES}分
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {headline || 'まずは気軽にご相談ください'}
                </h2>
                <p className="mb-8 text-section-sub">
                    {FREE_CONSULTATION_MINUTES}分の無料相談で、あなたの事業に合った進め方を一緒に考えます
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <CTAButton variant="line" />
                    <CTAButton variant="email" />
                </div>
            </div>
        </section>
    );
}
