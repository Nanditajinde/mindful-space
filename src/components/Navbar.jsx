// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, ClipboardList, BarChart2, LogOut, Shield, Palette } from "lucide-react";
import { logOut, getTrustedContact } from "../firebase";
import TrustedContactModal from "./TrustedContactModal";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Mindfulspace from "../assets/Mindfulspace";

export default function Navbar({ user }) {
  const { pathname } = useLocation();
  const [showEdit, setShowEdit] = useState(false);
  const [contactData, setContactData] = useState(null);
  const [showTheme, setShowTheme] = useState(false);

  // ✅ Correct context usage
  const { currentTheme, currentThemeData, setCurrentTheme, themes } = useContext(ThemeContext);

  const links = [
    { to: "/chat", label: "Chat", icon: <MessageCircle className="w-4 h-4" /> },
    { to: "/assessment", label: "Assessment", icon: <ClipboardList className="w-4 h-4" /> },
    { to: "/dashboard", label: "Dashboard", icon: <BarChart2 className="w-4 h-4" /> },
  ];

  const openEdit = async () => {
    try {
      const tc = await getTrustedContact(user.uid);
      setContactData(tc);
    } catch {
      setContactData(null);
    }
    setShowEdit(true);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-xl bg-[var(--surface-primary)]/90 border-b border-[var(--border-primary)] shadow-sm"></nav>

      <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-6">

          {/* Logo */}
          <Link to="/chat" className="text-lg font-bold text-[var(--text-primary)] hover:opacity-80 transition-opacity flex items-center gap-2">
            <span className="text-xl">🧠</span>
            <span className="font-semibold">MindfulSpace</span>
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] text-sm font-medium transition-all duration-180
                    ${active
                      ? "text-[#536D85] bg-[#E4EAF0] border border-[#D5DEE6] font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-secondary)]"
                    }`}
                >
                  {l.icon}
                  <span>{l.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">

            {/* Trusted Contact */}
            <button
              onClick={openEdit}
              title="Edit trusted contact"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/10 transition-all duration-200 group"
            >
              <Shield className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>

            {/* Theme button */}
            <button
              onClick={() => setShowTheme(true)}
              title="Change theme"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--brand-secondary)] hover:bg-[var(--brand-secondary)]/10 transition-all duration-200 group"
            >
              <Palette className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>

            {/* Avatar */}
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt=""
                className="w-8 h-8 rounded-full border-2 border-[var(--border-primary)] hover:border-[var(--brand-primary)] transition-colors"
              />
            )}

            {/* Logout */}
            <button
              onClick={logOut}
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--error)] hover:bg-red-50 rounded-lg transition-all"
              title="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

            {/* Avatar */}
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt=""
                className="w-8 h-8 rounded-full border-2 border-teal-600/60 hover:border-teal-400 transition-all"
              />
            )}

            {/* Logout */}
            <button
              onClick={logOut}
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              title="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Trusted Contact Modal */}
      {showEdit && (
        <TrustedContactModal
          userId={user.uid}
          editMode={true}
          existingData={contactData}
          onSaved={() => setShowEdit(false)}
          onClose={() => setShowEdit(false)}
        />
      )}

      {/* 🎨 Theme Modal */}
      {showTheme && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--surface-primary)] text-[var(--text-primary)] p-6 rounded-2xl w-full max-w-md shadow-2xl border border-[var(--border-primary)]">

            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                Choose Your Theme
              </h3>
              <button
                onClick={() => setShowTheme(false)}
                className="p-2 rounded-lg hover:bg-[var(--surface-secondary)] transition-colors"
              >
                ✕
              </button>
            </div>

            {/* ✅ New Premium UI */}
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(themes).map(([key, theme]) => (
                <button
                  key={key}
                  onClick={() => setCurrentTheme(key)}
                  className={`relative p-4 rounded-xl border-2 transition-all duration-200 group ${
                    currentTheme === key
                      ? "border-[var(--brand-primary)] bg-[var(--brand-primary)]/5 shadow-md"
                      : "border-[var(--border-primary)] hover:border-[var(--border-secondary)] bg-[var(--surface-primary)] hover:bg-[var(--surface-secondary)]"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{theme.icon}</div>
                    <div className={`text-sm font-semibold mb-1 ${
                      currentTheme === key ? "text-[var(--brand-primary)]" : "text-[var(--text-primary)]"
                    }`}>
                      {theme.name}
                    </div>
                    <div className="text-xs text-[var(--text-tertiary)]">
                      {theme.description}
                    </div>
                  </div>
                  {currentTheme === key && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--brand-primary)] rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowTheme(false)}
              className="w-full mt-6 px-4 py-2 bg-[var(--surface-secondary)] hover:bg-[var(--surface-tertiary)] text-[var(--text-primary)] rounded-lg transition-colors font-medium"
            >
              Done
            </button>

          </div>
        </div>
      )}
    </>
  );
}