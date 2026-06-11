import { HERO_COPY } from '@/data/recruit';

export default function RecruitHero() {
    return (
        <section className="bg-hero-bg text-hero-text px-4 py-20 md:py-28">
            <div className="max-w-3xl mx-auto text-center">
                <p className="text-xs md:text-sm text-hero-sub mb-4 tracking-wider">
                    {HERO_COPY.eyebrow}
                </p>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-balance">
                    {HERO_COPY.line1}
                    <br />
                    <span className="text-accent">{HERO_COPY.line2}</span>
                </h1>
                <p className="text-sm md:text-base text-hero-sub leading-relaxed">
                    {HERO_COPY.sub}
                </p>
            </div>
        </section>
    );
}
