import { createContext, useState, useEffect } from "react";
import { saveUserProfile } from "../firebase";

export const ThemeContext = createContext();

// ✅ Updated theme presets (4 calm themes + gradients)
const themes = {
  green: {
    primary: "#22C55E",
    background: "#0B1F17",
    gradient: "linear-gradient(135deg, #0B1F17, #064E3B)"
  },
  blue: {
    primary: "#3B82F6",
    background: "#0B1220",
    gradient: "linear-gradient(135deg, #0B1220, #1E3A8A)"
  },
  violet: {
    primary: "#8B5CF6",
    background: "#0F0A1F",
    gradient: "linear-gradient(135deg, #0F0A1F, #4C1D95)"
  },
  earth: {
    primary: "#F59E0B",
    background: "#1C1917",
    gradient: "linear-gradient(135deg, #1C1917, #78350F)"
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("green");

  // ✅ Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setCurrentTheme(saved);
  }, []);

  // ✅ Apply theme globally
  useEffect(() => {
    const theme = themes[currentTheme];

    const root = document.documentElement;

    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--bg-dark", theme.background);
    root.style.setProperty("--bg-gradient", theme.gradient);

    // ✅ NEW: gradient background variable
    root.style.setProperty("--bg-gradient", theme.gradient);

    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};