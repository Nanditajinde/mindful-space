// src/pages/SettingsPage.jsx
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
    Palette,
    Globe,
    Shield,
    HelpCircle,
    User,
    LogOut,
    ChevronRight,
    Check,
    ExternalLink,
    Bell,
    Info,
} from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { getTrustedContact, logOut } from "../firebase";
import TrustedContactModal from "../components/TrustedContactModal";

// ── Section wrapper ──────────────────────────────────────────────
function Section({ title, description, children }) {
    return (
        <div className="bg-[var(--surface-primary)] rounded-2xl border border-[var(--border-primary)] overflow-hidden">
            <div className="px-6 py-4 border-b border-[var(--border-primary)] bg-[var(--surface-secondary)]/50">
                <h2 className="text-[15px] font-semibold text-[var(--text-primary)]">{title}</h2>
                {description && (
                    <p className="text-sm text-[var(--text-secondary)] mt-0.5">{description}</p>
                )}
            </div>
            <div className="divide-y divide-[var(--border-primary)]">{children}</div>
        </div>
    );
}

// ── Row inside a section ─────────────────────────────────────────
function SettingRow({ icon, label, sublabel, children, onClick, danger = false }) {
    const baseClass = `flex items-center gap-4 px-6 py-4 transition-colors ${
        onClick ? "cursor-pointer hover:bg-[var(--surface-secondary)]/60" : ""
    } ${danger ? "hover:bg-red-50" : ""}`;

    return (
        <div className={baseClass} onClick={onClick}>
            <span
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    danger ? "bg-red-100 text-red-500" : "bg-[var(--surface-secondary)] text-[var(--brand-primary)]"
                }`}
            >
                {icon}
            </span>
            <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${danger ? "text-red-600" : "text-[var(--text-primary)]"}`}>
                    {label}
                </p>
                {sublabel && (
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5 truncate">{sublabel}</p>
                )}
            </div>
            {children ? (
                <div className="shrink-0">{children}</div>
            ) : onClick ? (
                <ChevronRight className="w-4 h-4 text-[var(--text-tertiary)] shrink-0" />
            ) : null}
        </div>
    );
}

// ── Main Page ────────────────────────────────────────────────────
export default function SettingsPage({ user }) {
    const { currentTheme, setCurrentTheme, themes } = useContext(ThemeContext);
    const { lang, setLang } = useLanguage();
    const [showTrustedModal, setShowTrustedModal] = useState(false);
    const [contactData, setContactData] = useState(null);

    const openTrustedContact = async () => {
        try { setContactData(await getTrustedContact(user.uid)); }
        catch { setContactData(null); }
        setShowTrustedModal(true);
    };

    const handleSignOut = async () => {
        try { await logOut(); }
        catch (e) { console.error(e); }
    };

    const languages = [
        { code: "en", label: "English", native: "English" },
        { code: "pa", label: "Punjabi", native: "ਪੰਜਾਬੀ" },
        { code: "hi", label: "Hindi",   native: "हिंदी" },
    ];

    return (
        <div className="max-w-2xl mx-auto py-2 space-y-6">

            {/* Header */}
            <div className="mb-2">
                <h1 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">Settings</h1>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                    Manage your preferences, appearance, and account.
                </p>
            </div>

            {/* ── Appearance ── */}
            <Section title="Appearance" description="Choose a theme that feels right for you.">
                <div className="px-6 py-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {Object.entries(themes).map(([key, theme]) => {
                        const active = currentTheme === key;
                        return (
                            <button
                                key={key}
                                onClick={() => setCurrentTheme(key)}
                                className={`relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-150 text-left ${
                                    active
                                        ? "border-[#647F98] bg-[#E4EAF0] shadow-sm"
                                        : "border-[var(--border-primary)] hover:border-[#879BAD] bg-[var(--surface-primary)] hover:bg-[var(--surface-secondary)]"
                                }`}
                            >
                                {/* Colour preview dot */}
                                <div
                                    className="w-10 h-10 rounded-full border border-[var(--border-primary)] shadow-sm flex items-center justify-center text-xl"
                                    style={{ background: theme.colors?.pageBackground || theme.colors?.background }}
                                >
                                    {theme.icon}
                                </div>
                                <div className="text-center">
                                    <p className={`text-[13px] font-semibold leading-tight ${active ? "text-[#536D85]" : "text-[var(--text-primary)]"}`}>
                                        {theme.name.split(" ")[0]}
                                    </p>
                                    <p className="text-[11px] text-[var(--text-secondary)] mt-0.5 leading-tight hidden sm:block">
                                        {theme.description}
                                    </p>
                                </div>
                                {active && (
                                    <span className="absolute top-2 right-2 w-5 h-5 bg-[#647F98] rounded-full flex items-center justify-center">
                                        <Check className="w-3 h-3 text-white" />
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </Section>

            {/* ── Language ── */}
            <Section title="Language" description="Select the language you prefer for the interface.">
                <div className="px-6 py-4 flex flex-wrap gap-2">
                    {languages.map((l) => {
                        const active = lang === l.code;
                        return (
                            <button
                                key={l.code}
                                onClick={() => setLang(l.code)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-150 ${
                                    active
                                        ? "bg-[#647F98] text-white border-[#647F98] shadow-sm"
                                        : "bg-[var(--surface-primary)] text-[var(--text-primary)] border-[var(--border-primary)] hover:border-[#879BAD] hover:bg-[var(--surface-secondary)]"
                                }`}
                            >
                                <Globe className="w-4 h-4" />
                                <span>{l.label}</span>
                                <span className="opacity-70">{l.native}</span>
                                {active && <Check className="w-3.5 h-3.5" />}
                            </button>
                        );
                    })}
                </div>
            </Section>

            {/* ── Privacy & Safety ── */}
            <Section title="Privacy & Safety">
                <SettingRow
                    icon={<Shield className="w-4 h-4" />}
                    label="Trusted Contact"
                    sublabel="Someone we can alert in a mental health crisis"
                    onClick={openTrustedContact}
                />
            </Section>

            {/* ── Help & Resources ── */}
            <Section title="Help & Resources">
                <SettingRow
                    icon={<HelpCircle className="w-4 h-4" />}
                    label="Help & Support"
                    sublabel="How to use MindfulSpace"
                >
                    <Link
                        to="/info/what-is-MindfulSpace"
                        className="flex items-center gap-1.5 text-xs font-medium text-[#647F98] hover:text-[#536D85] transition-colors"
                    >
                        Open <ExternalLink className="w-3 h-3" />
                    </Link>
                </SettingRow>
                <SettingRow
                    icon={<Info className="w-4 h-4" />}
                    label="About MindfulSpace"
                    sublabel="Our mission and values"
                >
                    <Link
                        to="/info/mission"
                        className="flex items-center gap-1.5 text-xs font-medium text-[#647F98] hover:text-[#536D85] transition-colors"
                    >
                        Open <ExternalLink className="w-3 h-3" />
                    </Link>
                </SettingRow>
                <SettingRow
                    icon={<Bell className="w-4 h-4" />}
                    label="Crisis Resources"
                    sublabel="Emergency helplines and crisis support links"
                >
                    <Link
                        to="/info/crisis-resources"
                        className="flex items-center gap-1.5 text-xs font-medium text-[#647F98] hover:text-[#536D85] transition-colors"
                    >
                        Open <ExternalLink className="w-3 h-3" />
                    </Link>
                </SettingRow>
            </Section>

            {/* ── Account ── */}
            <Section title="Account">
                <SettingRow
                    icon={<User className="w-4 h-4" />}
                    label={user?.displayName || "Your Account"}
                    sublabel={user?.email || ""}
                />
                <SettingRow
                    icon={<LogOut className="w-4 h-4" />}
                    label="Sign Out"
                    onClick={handleSignOut}
                    danger
                />
            </Section>

            {/* Modals */}
            {showTrustedModal && (
                <TrustedContactModal
                    userId={user.uid}
                    editMode={true}
                    existingData={contactData}
                    onSaved={() => setShowTrustedModal(false)}
                    onClose={() => setShowTrustedModal(false)}
                />
            )}
        </div>
    );
}
