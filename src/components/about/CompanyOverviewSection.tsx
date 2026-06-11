import SectionWrapper from '@/components/lp/SectionWrapper';
import { COMPANY_OVERVIEW } from '@/data/company';

export default function CompanyOverviewSection() {
    return (
        <SectionWrapper id="overview" bgGray>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                会社概要
            </h2>
            <div className="max-w-3xl mx-auto bg-card-bg backdrop-blur-sm rounded-xl p-6 md:p-10">
                <dl>
                    {COMPANY_OVERVIEW.map((item, index) => (
                        <div key={index} className={`grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-1 sm:gap-4 py-4 ${index > 0 ? 'border-t border-white/10' : ''}`}>
                            <dt className="font-bold text-section-text">{item.label}</dt>
                            <dd className="text-section-sub">{item.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </SectionWrapper>
    );
}
