import SectionWrapper from '@/components/lp/SectionWrapper';
import { COMPANY_HISTORY } from '@/data/company';

export default function HistorySection() {
    return (
        <SectionWrapper id="history">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                沿革
            </h2>
            <div className="max-w-3xl mx-auto">
                <dl>
                    {COMPANY_HISTORY.map((item, index) => (
                        <div key={index} className={`grid grid-cols-1 sm:grid-cols-[12rem_1fr] gap-1 sm:gap-4 py-4 ${index > 0 ? 'border-t border-white/10' : ''}`}>
                            <dt className="font-bold text-section-text">{item.date}</dt>
                            <dd className="text-section-sub">{item.event}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </SectionWrapper>
    );
}
