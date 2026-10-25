// src/components/Sidebar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    MessageCircle,
    ClipboardList,
    BarChart2,
    Calendar,
    BookOpen,
    Info,
    Settings,
    AlertTriangle,
    X,
    ChevronRight,
} from "lucide-react";
import { getTrustedContact } from "../firebase";
import TrustedContactModal from "./TrustedContactModal";
import CrisisModal from "./CrisisModal";
import AccountPanel from "./AccountPanel";
import { useLanguage } from "../context/LanguageContext";

export default function Sidebar({ user, mobileOpen, setMobileOpen }) {
    const { pathname } = useLocation();
    const { t } = useLanguage();
    const [showEdit, setShowEdit] = useState(false);
    const [showCrisis, setShowCrisis] = useState(false);
    const [contactData, setContactData] = useState(null);
    const [showAccountPanel, setShowAccountPanel] = useState(false);

    const mainLinks = [
        { to: "/chat",       labelKey: "nav.chat",        icon: <MessageCircle className="w-[17px] h-[17px]" /> },
        { to: "/dashboard",  labelKey: "nav.dashboard",   icon: <BarChart2     className="w-[17px] h-[17px]" /> },
        { to: "/assessment", labelKey: "nav.assessments", icon: <ClipboardList className="w-[17px] h-[17px]" /> },
        { to: "/therapists", labelKey: "Therapists",      icon: <Calendar      className="w-[17px] h-[17px]" /> },
    ];

    const resourceLinks = [
        { to: "/info/depression", labelKey: "nav.guides", icon: <BookOpen className="w-[17px] h-[17px]" /> },
        { to: "/info/mission",    labelKey: "nav.about",  icon: <Info     className="w-[17px] h-[17px]" /> },
    ];

    const openCrisis = async () => {
        try { setContactData(await getTrustedContact(user.uid)); }
        catch { setContactData(null); }
        setShowCrisis(true);
    };

    const NavLink = ({ to, icon, label }) => {
        const active = pathname === to || (to !== "/" && pathname.startsWith(to + "/"));
        return (
            <Link
                to={to}
                onClick={() => setMobileOpen(false)}
                className={`group flex items-center gap-3 px-3 py-2 rounded-[9px] text-sm transition-all duration-150 relative ${
                    active
                        ? "bg-[#E4EAF0] text-[#536D85] font-semibold border border-[#D5DEE6]"
                        : "text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)] hover:text-[var(--text-primary)]"
                }`}
            >
                {active && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#647F98] rounded-r-full" />
                )}
                <span className={active ? "text-[#536D85]" : "text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)]"}>
                    {icon}
                </span>
                <span>{label}</span>
            </Link>
        );
    };

    return (
        <>
            {/* Mobile overlay */}
            <div
                className={`fixed inset-0 bg-[#303D4A]/40 backdrop-blur-[2px] z-40 lg:hidden transition-opacity duration-200 ${
                    mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setMobileOpen(false)}
            />

            <aside
                className={`fixed top-0 left-0 h-full w-[272px] bg-[var(--surface-primary)] border-r border-[var(--border-primary)] z-50 flex flex-col shadow-sm
                transform transition-transform duration-200 ease-out lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* ── Logo ── */}
                <div className="h-14 flex items-center justify-between px-5 shrink-0 border-b border-[var(--border-primary)]">
                    <Link to="/chat" className="flex items-center gap-2.5 font-semibold text-[15px] hover:opacity-80 transition-opacity">
                        <span className="text-xl leading-none">🧠</span>
                        <span className="text-[var(--text-primary)] tracking-tight">MindfulSpace</span>
                    </Link>
                    <button
                        className="lg:hidden p-1.5 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)] hover:text-[var(--text-primary)] transition-colors"
                        onClick={() => setMobileOpen(false)}
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* ── Scrollable nav body ── */}
                <div className="flex-1 overflow-y-auto px-3 py-3 space-y-5 min-h-0">

                    {/* Main nav */}
                    <div className="space-y-0.5">
                        {mainLinks.map((l) => (
                            <NavLink key={l.to} to={l.to} icon={l.icon} label={t(l.labelKey)} />
                        ))}
                    </div>

                    {/* Resources */}
                    <div>
                        <p className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-widest px-3 mb-1.5">
                            Resources
                        </p>
                        <div className="space-y-0.5">
                            {resourceLinks.map((l) => (
                                <NavLink key={l.to} to={l.to} icon={l.icon} label={t(l.labelKey)} />
                            ))}
                        </div>
                    </div>

                    {/* Settings */}
                    <div>
                        <p className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-widest px-3 mb-1.5">
                            Preferences
                        </p>
                        <NavLink
                            to="/settings"
                            icon={<Settings className="w-[17px] h-[17px]" />}
                            label="Settings"
                        />
                    </div>

                    {/* SOS */}
                    <button
                        onClick={openCrisis}
                        className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-[10px] text-sm font-semibold
                        bg-[#C64C4C]/10 border border-[#C64C4C]/30 text-[#C64C4C]
                        hover:bg-[#C64C4C] hover:text-white hover:border-[#C64C4C]
                        transition-all duration-150"
                        title="Emergency Crisis Support"
                    >
                        <AlertTriangle className="w-4 h-4" />
                        <span>{t("crisis.title") || "Crisis / SOS"}</span>
                    </button>
                </div>

                {/* ── Footer — just the user row ── */}
                <div className="shrink-0 border-t border-[var(--border-primary)] px-3 py-3">
                    <div
                        onClick={() => setShowAccountPanel(!showAccountPanel)}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer hover:bg-[var(--surface-secondary)] transition-all duration-150 group border border-transparent hover:border-[var(--border-primary)]"
                    >
                        {user.photoURL ? (
                            <img src={user.photoURL} alt="" className="w-8 h-8 rounded-full shrink-0 object-cover border border-[var(--border-primary)]" />
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-[#E4EAF0] text-[#536D85] flex items-center justify-center text-sm font-bold shrink-0 border border-[#D5DEE6]">
                                {user.displayName?.charAt(0) || user.email?.charAt(0) || "?"}
                            </div>
                        )}
                        <div className="flex flex-col overflow-hidden flex-1 min-w-0">
                            <span className="text-[13px] font-semibold text-[var(--text-primary)] truncate leading-tight">
                                {user.displayName || "User"}
                            </span>
                            <span className="text-[11px] text-[var(--text-secondary)] truncate leading-tight">
                                {user.email || ""}
                            </span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-[var(--text-tertiary)] shrink-0 group-hover:text-[var(--text-secondary)] transition-colors" />
                    </div>
                </div>
            </aside>

            {/* Modals */}
            {showCrisis && (
                <CrisisModal
                    contact={contactData}
                    userName={user?.displayName?.split(" ")[0]}
                    onClose={() => setShowCrisis(false)}
                />
            )}

            {showEdit && (
                <TrustedContactModal
                    userId={user.uid}
                    editMode={true}
                    existingData={contactData}
                    onSaved={() => setShowEdit(false)}
                    onClose={() => setShowEdit(false)}
                />
            )}

            <AccountPanel
                user={user}
                isOpen={showAccountPanel}
                onClose={() => setShowAccountPanel(false)}
            />
        </>
    );
}
