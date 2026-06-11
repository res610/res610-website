import SectionWrapper from '@/components/lp/SectionWrapper';

export default function PhilosophySection() {
    return (
        <SectionWrapper id="philosophy">
            <div className="max-w-3xl mx-auto text-center">
                <p className="text-sm text-section-muted mb-4 tracking-wider">理念</p>
                <h2 className="text-2xl md:text-4xl font-bold mb-6 text-section-text">
                    追いかけず・売らず・並走する
                </h2>
                <p className="text-section-sub leading-relaxed">
                    システムを売り込むのではなく、困りごとから始める。納品して終わりにせず、何度でも並走する。
                    沖縄の小さな事業者の「ずっと隣にいるIT担当」であり続けることが、私たちの仕事です。
                </p>
            </div>
        </SectionWrapper>
    );
}
