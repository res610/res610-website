import SectionWrapper from '@/components/lp/SectionWrapper';
import { RECRUIT_REQUIREMENTS } from '@/data/recruit';

export default function RequirementsSection() {
    return (
        <SectionWrapper id="requirements">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                募集要項
            </h2>
            <div className="max-w-3xl mx-auto bg-card-bg backdrop-blur-sm rounded-xl p-6 md:p-10">
                <dl>
                    {RECRUIT_REQUIREMENTS.map((item, index) => (
                        <div key={index} className={`grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-1 sm:gap-4 py-4 ${index > 0 ? 'border-t border-white/10' : ''}`}>
                            <dt className="font-bold text-section-text">{item.label}</dt>
                            <dd className="text-section-sub">{item.value}</dd>
                        </div>
                    ))}
                </dl>
                <p className="mt-6 text-xs text-section-muted">
                    ※休日・保険等の詳細は、面談時にご説明します。
                </p>
            </div>
        </SectionWrapper>
    );
}
