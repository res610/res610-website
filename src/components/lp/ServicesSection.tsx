import SectionWrapper from './SectionWrapper';
import Link from 'next/link';
import { SERVICES } from '@/data/services';

export default function ServicesSection() {
    return (
        <SectionWrapper id="services">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                私たちにできること
            </h2>
            <p className="text-center text-section-sub mb-12">
                あなたの事業に合わせて、必要なサポートを提供します
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {SERVICES.map((service) => (
                    <Link key={service.id} href={`/services/#${service.id}`} className="block bg-card-bg backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-colors">
                        <h3 className="text-lg font-bold mb-3 text-section-text">{service.title}</h3>
                        <p className="text-section-sub text-sm leading-relaxed">{service.description}</p>
                    </Link>
                ))}
            </div>
            <p className="text-center mt-10">
                <Link href="/services/" className="text-section-sub hover:text-section-text underline underline-offset-4 transition-colors text-sm">サービスの詳細を見る →</Link>
            </p>
        </SectionWrapper>
    );
}
