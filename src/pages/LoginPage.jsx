// src/pages/LoginPage.jsx
import { useState } from "react";
import { signInWithGoogle } from "../firebase";
import { useLanguage } from "../context/LanguageContext";
import LanguageSelector from "../components/LanguageSelector";

export default function LoginPage() {
  const [signingIn, setSigningIn] = useState(false);
  const { t } = useLanguage();

  const handleLogin = async () => {
    if (signingIn) return;
    setSigningIn(true);
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.message);
      setSigningIn(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[var(--page-background)]">
      {/* Subtle Texture */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        
        <div className="w-full max-w-sm text-left animate-fade-in">
          
          {/* Logo + Language */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🧠</span>
              <span className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                MindfulSpace
              </span>
            </div>
            <LanguageSelector variant="navbar" />
          </div>

          <h1 className="text-2xl font-semibold mb-2 text-[var(--text-primary)] tracking-tight">
            {t("login.welcome")}
          </h1>

          <p className="text-[var(--text-secondary)] text-sm mb-8 leading-relaxed">
            {t("login.subtitle")}
          </p>

          {/* Card */}
          <div className="bg-[var(--surface-primary)] border border-[var(--border-primary)] rounded-2xl p-8 shadow-sm transition-all duration-200 relative">
            
            <button
              onClick={handleLogin}
              disabled={signingIn}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-[#F6F3EE] disabled:opacity-70 text-[#303D4A] font-medium py-3 px-4 rounded-xl transition-colors border border-[#D5DEE6] shadow-sm"
            >
              {signingIn ? (
                <div className="w-5 h-5 border-2 border-slate-300 border-t-[#647F98] rounded-full animate-spin" />
              ) : (
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
              )}
              {signingIn ? t("login.signingIn") : t("login.continueGoogle")}
            </button>

            {/* Disclaimer */}
            <div className="mt-8 pt-6 border-t border-[var(--border-primary)]">
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed text-center">
                {t("login.disclaimer")}<br />
                {t("login.crisis")}{" "}
                <a
                  href="tel:9152987821"
                  className="text-[#C64C4C] hover:underline transition-colors font-medium"
                >
                  iCall: 9152987821
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-6">
            {[t("login.badge.secure"), t("login.badge.ai"), t("login.badge.free")].map((b) => (
              <span key={b} className="text-xs text-[var(--text-secondary)] font-medium">
                {b}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}