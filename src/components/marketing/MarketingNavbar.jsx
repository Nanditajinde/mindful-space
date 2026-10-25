import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector';
import { useLanguage } from '../../context/LanguageContext';

export function MarketingNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[var(--surface-primary)]/95 backdrop-blur-md border-[var(--border-primary)] shadow-sm' : 'bg-transparent border-transparent'} px-6 h-16 flex items-center justify-between`}>
            <div className="flex items-center gap-2">
                <span className="text-xl">🧠</span>
                <span className="font-semibold text-[var(--text-primary)] tracking-tight">MindfulSpace</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]">
                <button onClick={() => scrollToSection('features')} className="hover:text-[var(--text-primary)] transition-colors">{t("mkt.nav.features")}</button>
                <button onClick={() => scrollToSection('how-it-works')} className="hover:text-[var(--text-primary)] transition-colors">{t("mkt.nav.howItWorks")}</button>
                <Link to="/docs" className="hover:text-[var(--text-primary)] transition-colors">{t("mkt.nav.docs")}</Link>
            </div>

            <div className="flex items-center gap-3">
                <LanguageSelector variant="navbar" />
                <Link
                    to="/login"
                    className="btn-primary py-2 px-5 text-sm font-medium shadow-sm"
                >
                    {t("mkt.nav.tryFree")}
                </Link>
            </div>
        </nav>
    );
}
