import { useScrollReveal } from '../../hooks/useScrollReveal';
import { MessageSquareText, Mic, FileText, LineChart, BrainCircuit, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function Features() {
    const { ref, isVisible } = useScrollReveal();
    const { t } = useLanguage();

    const features = [
        {
            titleKey: "features.chat.title",
            descKey: "features.chat.desc",
            icon: <MessageSquareText className="w-6 h-6 text-[#647F98]" />,
            colSpan: "col-span-1 md:col-span-2",
        },
        {
            titleKey: "features.voice.title",
            descKey: "features.voice.desc",
            icon: <Mic className="w-6 h-6 text-[#A596B5]" />,
            colSpan: "col-span-1",
        },
        {
            titleKey: "features.phq9.title",
            descKey: "features.phq9.desc",
            icon: <FileText className="w-6 h-6 text-[#647F98]" />,
            colSpan: "col-span-1",
        },
        {
            titleKey: "features.mood.title",
            descKey: "features.mood.desc",
            icon: <LineChart className="w-6 h-6 text-[#C49A82]" />,
            colSpan: "col-span-1 md:col-span-2",
        },
        {
            titleKey: "features.insights.title",
            descKey: "features.insights.desc",
            icon: <BrainCircuit className="w-6 h-6 text-[#A596B5]" />,
            colSpan: "col-span-1 md:col-span-2",
        },
        {
            titleKey: "features.privacy.title",
            descKey: "features.privacy.desc",
            icon: <ShieldCheck className="w-6 h-6 text-[#647F98]" />,
            colSpan: "col-span-1",
        }
    ];

    return (
        <section id="features" className="py-24 bg-[var(--page-background)]">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] mb-4">{t("features.heading")}</h2>
                    <p className="text-base text-[var(--text-secondary)] max-w-[600px] mx-auto">{t("features.sub")}</p>
                </div>

                <div
                    ref={ref}
                    className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                >
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`group flex flex-col p-8 bg-[var(--surface-primary)] border border-[var(--border-primary)] rounded-2xl hover:border-[#647F98] shadow-sm hover:shadow-md transition-all duration-200 ${feature.colSpan}`}
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#E4EAF0] border border-[#D5DEE6] flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{t(feature.titleKey)}</h3>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{t(feature.descKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
