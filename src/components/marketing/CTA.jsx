import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export function CTA() {
    const { ref, isVisible } = useScrollReveal();
    const { t } = useLanguage();

    return (
        <section className="relative py-24 bg-[var(--page-background)] overflow-hidden">
            <div
                ref={ref}
                className={`relative z-10 max-w-[800px] mx-auto px-6 text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--text-primary)] mb-8">
                    {t("cta.heading")}
                </h2>

                <Link
                    to="/login"
                    className="btn-primary py-3.5 px-8 text-base font-semibold shadow-sm hover:shadow group inline-flex items-center gap-2"
                >
                    {t("cta.button")}
                </Link>

                <div className="mt-12 p-5 rounded-2xl border border-[#C64C4C]/25 bg-[#C64C4C]/10 max-w-[420px] mx-auto shadow-sm">
                    <p className="text-[#303D4A] text-sm font-medium">{t("cta.crisis")}</p>
                    <a href="tel:9152987821" className="text-[#C64C4C] font-bold text-lg hover:underline mt-1 block">9152987821</a>
                </div>
            </div>
        </section>
    );
}
