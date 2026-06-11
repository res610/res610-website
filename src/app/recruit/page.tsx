import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RecruitHero from '@/components/recruit/RecruitHero';
import AboutResSection from '@/components/recruit/AboutResSection';
import JobDescriptionSection from '@/components/recruit/JobDescriptionSection';
import WorkStyleSection from '@/components/recruit/WorkStyleSection';
import CeoMessageSection from '@/components/recruit/CeoMessageSection';
import RequirementsSection from '@/components/recruit/RequirementsSection';
import RecruitContactSection from '@/components/recruit/RecruitContactSection';

export const metadata: Metadata = {
    title: '採用情報',
    description: '合同会社RESのエンジニア採用情報。東京で磨いた腕を、沖縄の暮らしの中で。沖縄へのUターン・Iターンを考えているエンジニアを募集しています。八重瀬町拠点・リモート併用。',
    alternates: {
        canonical: '/recruit/',
    },
};

export default function RecruitPage() {
    return (
        <>
            <Header />
            <main>
                <RecruitHero />
                <AboutResSection />
                <JobDescriptionSection />
                <WorkStyleSection />
                <CeoMessageSection />
                <RequirementsSection />
                <RecruitContactSection />
            </main>
            <Footer />
        </>
    );
}
