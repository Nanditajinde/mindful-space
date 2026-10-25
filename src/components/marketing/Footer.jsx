import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-[var(--surface-primary)] border-t border-[var(--border-primary)] pt-16 pb-10">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                {/* Col 1 */}
                <div className="flex flex-col">
                    <Link to="/" className="flex items-center gap-2 mb-4">
                        <span className="text-xl">🧠</span>
                        <span className="font-semibold text-[var(--text-primary)] tracking-tight text-lg">
                            MindfulSpace
                        </span>
                    </Link>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-[250px]">
                        {t("footer.tagline")}
                    </p>
                </div>

                {/* Col 2 */}
                <div className="flex flex-col">
                    <h4 className="text-[var(--text-primary)] font-semibold mb-4 tracking-wide text-sm">
                        {t("footer.product")}
                    </h4>
                    <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                        <li>
                            <Link to="/login" className="hover:text-[var(--text-primary)] transition-colors">
                                {t("footer.signIn")}
                            </Link>
                        </li>
                        <li>
                            <Link to="/docs" className="hover:text-[var(--text-primary)] transition-colors">
                                {t("footer.docs")}
                            </Link>
                        </li>
                        <li>
                            <a href="#features" className="hover:text-[var(--text-primary)] transition-colors">
                                {t("footer.features")}
                            </a>
                        </li>
                        <li>
                            <Link to="/docs/privacy" className="hover:text-[var(--text-primary)] transition-colors">
                                {t("footer.privacy")}
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Col 3 - Crisis Helplines */}
                <div className="flex flex-col">
                    <h4 className="text-[var(--text-primary)] font-semibold mb-4 tracking-wide text-sm">
                        {t("footer.crisis")}
                    </h4>

                    <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                        <li>{t("crisis.helplines.kiran")}</li>
                        <li>{t("crisis.helplines.icall")}</li>
                        <li>{t("crisis.helplines.vandrevala")}</li>
                        <li>{t("crisis.helplines.aasra")}</li>
                    </ul>

                    {/* Disclaimer */}
                    <p className="text-xs text-[var(--text-secondary)] mt-3">
                        {t("crisis.helplines.note")}
                    </p>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="max-w-[1200px] mx-auto px-6 pt-8 border-t border-[var(--border-primary)] flex flex-col md:flex-row items-center justify-between text-xs text-[var(--text-secondary)]">
                
                <p>
                    © {new Date().getFullYear()} MindfulSpace AI. {t("footer.copy")}
                </p>

                <p className="mt-2 md:mt-0 flex items-center gap-1">
                    {t("footer.builtWith")}
                    <span className="mx-1">🤍</span>
                    <span className="text-[#647F98] font-semibold">
                        Google Gemini
                    </span>
                </p>

            </div>
        </footer>
    );
}
