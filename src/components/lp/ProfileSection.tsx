import SectionWrapper from './SectionWrapper';
import Image from 'next/image';
import { STORE_NAME } from '@/constants';

export default function ProfileSection() {
    return (
        <SectionWrapper id="profile" bgGray>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                代表紹介
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto">
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
                        沖縄を拠点に、個人事業主や小規模事業者の「IT担当」として活動しています。
                        「難しいことをわかりやすく」をモットーに、
                        現場に足を運び、業務を理解した上で最適な仕組みをご提案します。
                    </p>
                    <p className="text-section-sub leading-relaxed">
                        大切にしているのは、お客様の事業が「自分の力で回せる」ようになること。
                        無理なシステムではなく、使い続けられる仕組みを一緒に作ります。
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
