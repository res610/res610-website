import Image from 'next/image';
import CTAButton from './lp/CTAButton';
import { FREE_CONSULTATION_MINUTES, STORE_NAME } from '@/constants';

export default function HeroSection() {
    return (
        <section className="relative w-full h-[100svh] flex items-center justify-center text-white overflow-hidden">
            {/* 動画背景 */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                poster="/images/hero-poster.webp"
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            {/* 暗いオーバーレイ（テキスト読みやすさ確保） */}
            <div className="absolute inset-0 bg-black/50" />

            {/* コンテンツ */}
            <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                <Image
                    src="/images/logo-cover-trimmed.webp"
                    alt={STORE_NAME}
                    width={600}
                    height={200}
                    className="mx-auto mb-6 w-full max-w-md h-auto"
                    priority
                />
                <p className="text-xs md:text-sm text-gray-300 mb-4 tracking-wider">
                    沖縄の個人事業主・小規模事業者の方へ
                </p>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    ITが苦手でも大丈夫。
                    <br />
                    <span className="text-accent">現場に合わせて</span>
                    <br className="md:hidden" />
                    仕組みを作ります。
                </h1>
                <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
                    ホームページ制作から業務のデジタル化まで、
                    <br className="hidden md:block" />
                    あなたの事業に合った方法で、一緒に解決します。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <CTAButton variant="line" text="無料相談はこちら" />
                </div>
                <p className="mt-3 text-xs text-gray-400">
                    無料・{FREE_CONSULTATION_MINUTES}分 / LINEで気軽にご相談ください
                </p>
            </div>
        </section>
    );
}
