import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLanguage } from '../../context/LanguageContext';


export function Quote() {
    const { ref, isVisible } = useScrollReveal();
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-[var(--page-background)] border-y border-[var(--border-primary)]">
            <div
                ref={ref}
                className={`max-w-[800px] mx-auto px-6 text-center transition-all duration-700 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
                <p className="text-xl md:text-2xl text-[var(--text-primary)] font-medium leading-relaxed mb-6 italic">
                    "{t("quote.text")}"
                </p>

                <div className="text-[var(--text-secondary)] text-sm font-medium tracking-wide mb-10">
                    — {t("quote.attr")}
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                    <span className="px-4 py-2 rounded-full border border-[#D5DEE6] bg-[#E4EAF0] text-xs text-[#536D85] font-semibold flex items-center gap-2 shadow-sm">
                        <span>🔒</span> {t("quote.badge1")}
                    </span>
                    <span className="px-4 py-2 rounded-full border border-[#D5DEE6] bg-[#E4EAF0] text-xs text-[#536D85] font-semibold flex items-center gap-2 shadow-sm">
                        <span>🆓</span> {t("quote.badge2")}
                    </span>
                    <span className="px-4 py-2 rounded-full border border-[#D5DEE6] bg-[#E4EAF0] text-xs text-[#536D85] font-semibold flex items-center gap-2 shadow-sm">
                        <span>🇮🇳</span> {t("quote.badge3")}
                    </span>
                </div>

            </div>
        </section>
    );
}
