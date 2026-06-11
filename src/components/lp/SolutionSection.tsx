import SectionWrapper from './SectionWrapper';

const SOLUTIONS = [
    {
        title: '現場に合わせて仕組みを作る',
        description: '業務の流れを直接見て理解した上で、あなたの現場に合った仕組みを提案します。',
    },
    {
        title: '商品を売らない。あなたに合うものを選ぶ',
        description: '世の中のツールやサービスから、あなたの事業に本当に必要なものだけを一緒に選びます。',
    },
    {
        title: '小さく始められる',
        description: 'いきなり大きな投資は不要。まずは一番困っていることから、小さく始められます。',
    },
];

export default function SolutionSection() {
    return (
        <SectionWrapper id="solution">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                「IT担当」として選ばれる理由
            </h2>
            <p className="text-center text-section-sub mb-12">
                こちらから現場に伺い、業務を理解した上で仕組みを作ります
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {SOLUTIONS.map((solution, index) => (
                    <div key={index} className="text-center">
                        <h3 className="text-lg font-bold mb-3 text-section-text">{solution.title}</h3>
                        <p className="text-section-sub text-sm leading-relaxed">{solution.description}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
