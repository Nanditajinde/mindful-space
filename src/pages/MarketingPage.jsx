import { MarketingNavbar } from '../components/marketing/MarketingNavbar';
import { Hero } from '../components/marketing/Hero';
import { Stats } from '../components/marketing/Stats';
import { Features } from '../components/marketing/Features';
import { HowItWorks } from '../components/marketing/HowItWorks';
import { Quote } from '../components/marketing/Quote';
import { CTA } from '../components/marketing/CTA';
import { Footer } from '../components/marketing/Footer';
import { useEffect } from 'react';

export default function MarketingPage() {
    // Ensure we start at top and style body color directly to prevent flicker
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.backgroundColor = 'var(--bg-secondary)';
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);

    return (
        <div className="min-h-screen bg-[var(--bg-secondary)] text-[var(--text-primary)] font-sans selection:bg-[var(--brand-primary)]/20 selection:text-white overflow-x-hidden">
            <MarketingNavbar />
            <Hero />
            <Stats />
            <Features />
            <HowItWorks />
            {/* <Quote /> */}
            <CTA />
            <Footer />
        </div>
    );
}
