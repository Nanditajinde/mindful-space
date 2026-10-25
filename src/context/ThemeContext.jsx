import { createContext, useState, useEffect } from "react";
import { themes } from "../themes";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentThemeKey, setCurrentThemeKey] = useState("light");

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved && themes[saved]) {
      setCurrentThemeKey(saved);
    }
  }, []);

  // Apply theme globally
  useEffect(() => {
    const theme = themes[currentThemeKey];
    if (!theme) return;

    const root = document.documentElement;

    // Apply theme colors
    const colors = theme.colors;
    root.style.setProperty("--bg-gradient", colors.background);
    root.style.setProperty("--bg-primary", colors.surface);
    root.style.setProperty("--bg-secondary", colors.pageBackground || colors.background);
    root.style.setProperty("--bg-dark", colors.pageBackground || colors.background);
    root.style.setProperty("--bg-card", colors.surface);
    root.style.setProperty("--bg-sidebar", colors.surface);
    root.style.setProperty("--surface-primary", colors.surface);
    root.style.setProperty(
      "--surface-secondary",
      currentThemeKey === "dark" ? colors.inputBg || "#252F3A" : colors.inputBg || "#FBFAF7"
    );
    root.style.setProperty("--brand-primary", colors.primary);
    root.style.setProperty("--brand-primary-hover", colors.primaryHover || colors.primary);
    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--primary-hover", colors.primaryHover || colors.primary);
    root.style.setProperty("--brand-secondary", colors.secondary);
    root.style.setProperty("--brand-accent", colors.accent);
    root.style.setProperty("--brand-warm", colors.warmAccent || "#C49A82");
    root.style.setProperty("--text-primary", colors.textPrimary || "#303D4A");
    root.style.setProperty("--text-main", colors.textPrimary || "#303D4A");
    root.style.setProperty("--text-secondary", colors.textSecondary || "#777B80");
    root.style.setProperty("--text-muted", colors.textSecondary || "#777B80");
    root.style.setProperty("--border-primary", colors.border || "#E4DFD7");
    root.style.setProperty("--border", colors.border || "#E4DFD7");
    root.style.setProperty("--input-bg", colors.inputBg || "#FBFAF7");
    root.style.setProperty("--input-border", colors.inputBorder || "#D9D6CF");
    root.style.setProperty("--success", colors.success || "#527A66");
    root.style.setProperty("--warning", colors.warning || "#B88745");
    root.style.setProperty("--error", colors.error || "#C64C4C");
    root.style.setProperty("--sos", colors.sos || "#C64C4C");

    // Update body background for immediate effect without gradient
    document.body.style.background = colors.pageBackground || colors.background;
    document.body.style.backgroundColor = colors.pageBackground || colors.background;
    document.body.style.color = colors.textPrimary || "#303D4A";

    // Save to localStorage
    localStorage.setItem("theme", currentThemeKey);
  }, [currentThemeKey]);

  const currentTheme = themes[currentThemeKey];

  return (
    <ThemeContext.Provider value={{
      currentTheme: currentThemeKey,
      currentThemeData: currentTheme,
      setCurrentTheme: setCurrentThemeKey,
      themes
    }}>
      {children}
    </ThemeContext.Provider>
  );
};