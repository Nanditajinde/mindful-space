// src/context/LanguageContext.jsx

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import translations from "../i18n/translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "mb_lang";

export function LanguageProvider({ children }) {

  // 🔹 Initialize language (localStorage → browser → fallback "en")
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved && translations[saved]) {
      return saved;
    }

    // 🌍 Auto-detect browser language (optional but useful)
    const browserLang = navigator.language?.slice(0, 2);
    if (browserLang && translations[browserLang]) {
      return browserLang;
    }

    return "en";
  });

  // 🔹 Update language + persist
  const setLang = useCallback((newLang) => {
    if (!translations[newLang]) return;

    localStorage.setItem(STORAGE_KEY, newLang);
    setLangState(newLang);
  }, []);

  // 🔹 Translation function
  const t = useCallback(
    (key) => {
      return translations[lang]?.[key] ?? translations["en"]?.[key] ?? key;
    },
    [lang]
  );

  // 🔹 Debug (optional – remove later)
  useEffect(() => {
    console.log("🌐 Current Language:", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 🔹 Custom hook
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}