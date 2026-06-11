import SectionWrapper from '@/components/lp/SectionWrapper';
import Image from 'next/image';
import { STORE_NAME } from '@/constants';

export default function CeoMessageSection() {
    return (
        <SectionWrapper id="message" bgGray>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                代表メッセージ
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-3xl mx-auto">
                <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 overflow-hidden rounded-xl shadow-md">
                    <Image
                        src="/images/meishi-trimmed.webp"
                        alt="代表社員 城間敏光 名刺"
                        width={300}
                        height={300}
                        className="w-full h-full object-contain bg-white"
                    />
                </div>

                <div>
                    <p className="text-sm text-section-muted mb-1">{STORE_NAME} 代表</p>
                    <h3 className="text-2xl font-bold mb-4 text-section-text">城間 敏光</h3>
                    <p className="text-section-sub leading-relaxed mb-4">
                        私自身、東京で18年以上エンジニアとして働いたあと、沖縄にUターンしてこの会社を立ち上げました。
                        「沖縄に帰りたい。でも、東京でやってきた仕事のレベルと収入を、沖縄で維持できるのか」——
                        その不安は、誰よりもよくわかります。私が同じ道を通ってきたからです。
                    </p>
                    <p className="text-section-sub leading-relaxed mb-4">
                        だからRESでは、東京水準の仕事の質をそのまま沖縄に持ち込むことにこだわっています。
                        AI駆動の開発環境、設計から運用まで任せる裁量、そして沖縄の事業者と長く並走する仕事。
                        場所を理由に、仕事の質を下げる必要はありません。
                    </p>
                    <p className="text-section-sub leading-relaxed">
                        沖縄に根を下ろして、腰を据えて働きたい。そんなあなたと、まずは気軽に話せたら嬉しいです。
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
