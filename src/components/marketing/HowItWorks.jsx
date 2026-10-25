import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLanguage } from '../../context/LanguageContext';

export function HowItWorks() {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
    const { t } = useLanguage();

    const steps = [
        { step: '01', titleKey: 'how.step1.title', descKey: 'how.step1.desc' },
        { step: '02', titleKey: 'how.step2.title', descKey: 'how.step2.desc' },
        { step: '03', titleKey: 'how.step3.title', descKey: 'how.step3.desc' },
    ];

    return (
        <section id="how-it-works" className="py-24 bg-[var(--page-background)]">
            <div className="max-w-[1000px] mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] mb-4">{t("how.heading")}</h2>
                    <p className="text-base text-[var(--text-secondary)] max-w-[600px] mx-auto">{t("how.sub")}</p>
                </div>

                <div
                    ref={ref}
                    className="relative grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    {/* Connecting Line */}
                    <div className="absolute top-[28px] left-[15%] right-[15%] h-[2px] hidden md:block z-0 overflow-hidden bg-[#E4DFD7]">
                        <div
                            className={`h-full bg-[#647F98] transition-all duration-1000 ease-out`}
                            style={{ width: isVisible ? '100%' : '0%' }}
                        />
                    </div>

                    {steps.map((item, idx) => (
                        <div
                            key={idx}
                            className={`relative z-10 flex flex-col items-center text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                            style={{ transitionDelay: `${idx * 150}ms` }}
                        >
                            <div className="w-14 h-14 rounded-full bg-[#E4EAF0] border-[2px] border-[#647F98] flex items-center justify-center text-[#536D85] font-bold text-lg mb-6 shadow-sm">
                                {item.step}
                            </div>
                            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{t(item.titleKey)}</h3>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-[260px]">{t(item.descKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
