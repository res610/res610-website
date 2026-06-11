import SectionWrapper from '@/components/lp/SectionWrapper';
import { RECRUIT_JOBS } from '@/data/recruit';

export default function JobDescriptionSection() {
    return (
        <SectionWrapper id="jobs" bgGray>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                仕事内容
            </h2>
            <p className="text-center text-section-sub mb-12">
                受託・SES・自社プロダクト。沖縄にいながら、幅のある仕事ができます
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {RECRUIT_JOBS.map((job, index) => (
                    <div key={index} className="bg-card-bg backdrop-blur-sm rounded-xl p-8">
                        <span className="text-5xl block mb-4">{job.icon}</span>
                        <h3 className="text-lg font-bold mb-3 text-section-text">{job.title}</h3>
                        <p className="text-section-sub text-sm leading-relaxed">{job.description}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
