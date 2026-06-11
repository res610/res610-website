import SectionWrapper from '@/components/lp/SectionWrapper';
import { STORE_NAME } from '@/constants';

export default function AboutResSection() {
    return (
        <SectionWrapper id="about">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                RESについて
            </h2>
            <div className="max-w-3xl mx-auto">
                <p className="text-center text-xl md:text-2xl font-bold mb-8 text-section-text">
                    追いかけず・売らず・並走する
                </p>
                <p className="text-section-sub leading-relaxed mb-4">
                    {STORE_NAME}は、沖縄県八重瀬町を拠点とするIT会社です。
                    目指しているのは、沖縄の小さな事業者の「ずっと隣にいるIT担当」。
                    営業をかけて追いかけるのでも、システムを売り込むのでもなく、
                    事業者のすぐ隣で、現場に合った仕組みを一緒に作り、使い続けられるように並走します。
                </p>
                <p className="text-section-sub leading-relaxed">
                    派手な急成長は狙っていません。その代わり、お客様と長く付き合える仕事を、
                    一つひとつ丁寧に積み重ねています。この姿勢に共感できる方と働きたいと考えています。
                </p>
            </div>
        </SectionWrapper>
    );
}
