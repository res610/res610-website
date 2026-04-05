import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CTASection from '@/components/lp/CTASection';
import ProblemsSection from '@/components/lp/ProblemsSection';
import SolutionSection from '@/components/lp/SolutionSection';
import CaseStudiesSection from '@/components/lp/CaseStudiesSection';
import ServicesSection from '@/components/lp/ServicesSection';
import ProfileSection from '@/components/lp/ProfileSection';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <CTASection />
                <ProblemsSection />
                <SolutionSection />
                <CaseStudiesSection />
                <CTASection headline="実績のある私たちに、まずはご相談ください" bgBlack />
                <ServicesSection />
                <ProfileSection />
                <InstagramFeed />
                <CTASection headline="あなたの業務、一緒に改善しませんか？" />
            </main>
            <Footer />
        </>
    );
}
