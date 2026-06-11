import SectionWrapper from '@/components/lp/SectionWrapper';
import { MAJOR_CLIENTS } from '@/data/company';

export default function ClientsSection() {
    return (
        <SectionWrapper id="clients" bgGray>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                主要取引先
            </h2>
            <div className="max-w-3xl mx-auto">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {MAJOR_CLIENTS.map((client, index) => (
                        <li key={index} className="bg-card-bg backdrop-blur-sm rounded-xl px-6 py-5 text-section-text font-bold text-center">
                            {client}
                        </li>
                    ))}
                </ul>
                <p className="mt-6 text-xs text-section-muted text-center">
                    （敬称略・順不同）
                </p>
            </div>
        </SectionWrapper>
    );
}
