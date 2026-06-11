import SectionWrapper from '@/components/lp/SectionWrapper';
import Image from 'next/image';
import { STORE_NAME } from '@/constants';

export default function RepresentativeSection() {
    return (
        <SectionWrapper id="representative">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                代表プロフィール
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-3xl mx-auto">
                {/* TODO: 顔写真の支給待ち。支給され次第 meishi-trimmed.webp から差し替える */}
                <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 overflow-hidden rounded-xl shadow-md">
                    <Image
                        src="/images/meishi-trimmed.webp"
                        alt="代表社員 城間敏光"
                        width={300}
                        height={300}
                        className="w-full h-full object-contain bg-white"
                    />
                </div>

                <div>
                    <p className="text-sm text-section-muted mb-1">{STORE_NAME} 代表社員</p>
                    <h3 className="text-2xl font-bold mb-4 text-section-text">城間 敏光</h3>
                    <p className="text-section-sub leading-relaxed mb-4">
                        東京で約20年、IT業界でSE・プロジェクトリーダー・PMとして勤務。
                        令和3年（2021年）に沖縄県八重瀬町へUターンし、合同会社RESを設立。
                        沖縄の個人事業主・小規模事業者の「IT担当」として活動しています。
                    </p>
                    <p className="text-section-sub text-sm leading-relaxed">
                        社名のRESは「RE-support＝何度でも並走する」、ドメインの610は代表の誕生日（6月10日）に由来します。
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
