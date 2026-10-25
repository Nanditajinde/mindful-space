import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export function Hero() {
    const { ref, isVisible } = useScrollReveal();
    const { t } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-[var(--page-background)]">
            <div
                ref={ref}
                className={`relative z-10 max-w-5xl w-full mx-auto px-6 lg:px-8 flex flex-col items-center text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E4EAF0] border border-[#D5DEE6] mb-8 shadow-sm">
                    <span className="text-[#647F98] text-sm">✦</span>
                    <span className="text-xs font-semibold text-[#536D85] tracking-wide uppercase">{t("hero.badge")}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--text-primary)] mb-6 leading-tight">
                    {t("hero.headline1")} <br className="hidden md:block" />
                    <span className="text-[#647F98]">{t("hero.headline2")}</span>
                </h1>

                <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mb-10 leading-relaxed font-normal">
                    {t("hero.sub")}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                    <Link to="/login" className="btn-primary py-3 px-7 text-sm font-semibold shadow-sm hover:shadow">
                        {t("hero.cta1")}
                    </Link>
                    <a href="#features" className="btn-secondary py-3 px-6 text-sm font-semibold">
                        {t("hero.cta2")}
                    </a>
                </div>

                <p className="text-xs text-[var(--text-secondary)] flex items-center gap-3 mb-16">
                    <span>{t("hero.trust1")}</span>
                    <span className="w-1 h-1 rounded-full bg-[#D5DEE6]"></span>
                    <span>{t("hero.trust2")}</span>
                    <span className="w-1 h-1 rounded-full bg-[#D5DEE6]"></span>
                    <span>{t("hero.trust3")}</span>
                </p>

                {/* Chat Mockup Card */}
                <div className="w-full max-w-2xl relative">
                    <div className="relative bg-[var(--surface-primary)] border border-[var(--border-primary)] rounded-2xl p-6 sm:p-8 shadow-sm">

                        <div className="flex items-end justify-end gap-3 mb-6">
                            <div className="bg-[#647F98] text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-xs text-sm leading-relaxed shadow-sm">
                                {t("hero.chat.user")}
                            </div>
                        </div>

                        <div className="flex items-end gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#E4EAF0] border border-[#D5DEE6] flex items-center justify-center shrink-0 shadow-sm">
                                <span className="text-lg">🧠</span>
                            </div>
                            <div className="bg-[#FBFAF7] border border-[var(--border-primary)] text-[var(--text-primary)] px-4 py-3 rounded-2xl rounded-tl-sm max-w-md text-sm leading-relaxed shadow-sm text-left">
                                {t("hero.chat.ai")}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
