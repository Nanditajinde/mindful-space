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
      <div className="flex items-center gap-2 px-3 py-2">
        <span className="text-sm text-slate-500">🌐</span>

        <div className="flex items-center gap-1.5 bg-slate-800/60 border border-slate-700 rounded-full px-1 py-1">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              title={l.full}
              className={`${baseBtn} ${
                lang === l.code
                  ? "bg-teal-500 text-white shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-slate-700/60"
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
    <div className="flex items-center gap-2 bg-[#0D1117] border border-[#1A1F2E] rounded-full px-2 py-1.5 shadow-sm">
      <span className="text-sm text-[#8B949E]">🌐</span>

      <div className="flex items-center gap-1.5">
        {LANGS.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            title={l.full}
            className={`${baseBtn} ${
              lang === l.code
                ? "bg-gradient-to-r from-[#0D9488] to-[#7C3AED] text-white shadow-md"
                : "text-[#8B949E] hover:text-white hover:bg-white/10"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
    </div>
  );
}