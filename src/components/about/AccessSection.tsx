import SectionWrapper from '@/components/lp/SectionWrapper';
import { STORE_INFO, STORE_LATITUDE, STORE_LONGITUDE } from '@/constants';

const GOOGLE_MAPS_URL = `https://www.google.com/maps?q=${STORE_LATITUDE},${STORE_LONGITUDE}`;

export default function AccessSection() {
    return (
        <SectionWrapper id="access" bgGray>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                アクセス
            </h2>
            <div className="max-w-3xl mx-auto text-center">
                <p className="text-section-text font-bold mb-2">
                    {STORE_INFO.postalCode} {STORE_INFO.address}
                </p>
                <p className="text-section-sub text-sm mb-6">
                    営業時間 {STORE_INFO.openingHours}（{STORE_INFO.closedDay}休み）
                </p>
                <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-section-bg font-bold py-3 px-6 rounded-full transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Googleマップで開く
                </a>
            </div>
        </SectionWrapper>
    );
}
