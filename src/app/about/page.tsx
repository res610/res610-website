import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutPageHeader from '@/components/about/AboutPageHeader';
import PhilosophySection from '@/components/about/PhilosophySection';
import CompanyOverviewSection from '@/components/about/CompanyOverviewSection';
import HistorySection from '@/components/about/HistorySection';
import ClientsSection from '@/components/about/ClientsSection';
import RepresentativeSection from '@/components/about/RepresentativeSection';
import AccessSection from '@/components/about/AccessSection';
import AboutContactSection from '@/components/about/AboutContactSection';

export const metadata: Metadata = {
    title: '会社概要',
    description: '合同会社RESの会社概要。理念「追いかけず・売らず・並走する」。沖縄県八重瀬町を拠点に、システム開発・SES・Web制作・デジタルマーケティングを行っています。',
    alternates: {
        canonical: '/about/',
    },
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                <AboutPageHeader />
                <PhilosophySection />
                <CompanyOverviewSection />
                <HistorySection />
                <ClientsSection />
                <RepresentativeSection />
                <AccessSection />
                <AboutContactSection />
            </main>
            <Footer />
        </>
    );
}
