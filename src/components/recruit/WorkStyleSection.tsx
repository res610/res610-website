import SectionWrapper from '@/components/lp/SectionWrapper';
import { RECRUIT_WORK_STYLES } from '@/data/recruit';

export default function WorkStyleSection() {
    return (
        <SectionWrapper id="workstyle">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                働き方
            </h2>
            <p className="text-center text-section-sub mb-12">
                東京の働き方をそのまま持ち込むのではなく、沖縄の暮らしに合う形で
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {RECRUIT_WORK_STYLES.map((style, index) => (
                    <div key={index} className="bg-card-bg backdrop-blur-sm rounded-xl p-8 text-center">
                        <h3 className="text-lg font-bold mb-3 text-section-text">{style.title}</h3>
                        <p className="text-section-sub text-sm leading-relaxed">{style.description}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
