// src/components/LanguageSelector.jsx
import { useLanguage } from "../context/LanguageContext";

const LANGS = [
  { code: "en", label: "EN", full: "English" },
  { code: "kn", label: "ಕ", full: "Kannada" },
  { code: "hi", label: "हिं", full: "Hindi" },
];

export default function LanguageSelector({ variant = "sidebar" }) {
  const { lang, setLang } = useLanguage();

  const baseBtn =
    "px-3 py-1 text-xs rounded-full font-medium transition-all duration-200 hover:scale-105";

  // 🔹 SIDEBAR VERSION
  if (variant === "sidebar") {
    return (
      <div className="flex items-center gap-2 px-1 py-1">
        <span className="text-sm text-[var(--text-secondary)]">🌐</span>

        <div className="flex items-center gap-1 bg-[var(--surface-secondary)] border border-[var(--border-primary)] rounded-full px-1 py-0.5">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              title={l.full}
              className={`${baseBtn} ${
                lang === l.code
                  ? "bg-[#647F98] text-white shadow-sm font-semibold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-primary)]"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 🔹 NAVBAR VERSION
  return (
    <div className="flex items-center gap-2 bg-[var(--surface-primary)] border border-[var(--border-primary)] rounded-full px-2 py-1 shadow-sm">
      <span className="text-sm text-[var(--text-secondary)]">🌐</span>

      <div className="flex items-center gap-1">
        {LANGS.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            title={l.full}
            className={`${baseBtn} ${
              lang === l.code
                ? "bg-[#647F98] text-white shadow-sm font-semibold"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-secondary)]"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
    </div>
  );
}