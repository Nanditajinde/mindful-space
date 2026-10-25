import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSelector = ({ variant = "default" }) => {
  const { currentTheme, currentThemeData, setCurrentTheme, themes } = useContext(ThemeContext);

  // Compact inline row of color swatches — used inside the sidebar footer
  if (variant === "sidebar-compact") {
    return (
      <div className="w-full">
        <div className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-widest mb-1.5 px-1">
          Theme
        </div>
        <div className="flex items-center gap-1.5 flex-wrap px-0.5">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              onClick={() => setCurrentTheme(key)}
              title={theme.name}
              className={`relative w-7 h-7 rounded-full border-2 flex items-center justify-center text-[13px] transition-all duration-150 ${
                currentTheme === key
                  ? "border-[#647F98] scale-110 shadow-md"
                  : "border-transparent hover:border-[#879BAD] hover:scale-105"
              }`}
              style={{ background: theme.colors?.pageBackground || theme.colors?.background || "var(--surface-secondary)" }}
            >
              <span className="leading-none">{theme.icon}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Sidebar grid variant (kept for backward compat but not used in sidebar anymore)
  if (variant === "sidebar") {
    return (
      <div className="w-full">
        <div className="text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wide mb-2 px-1">
          Theme
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              onClick={() => setCurrentTheme(key)}
              className={`relative p-2 rounded-[10px] border transition-all duration-180 group ${
                currentTheme === key
                  ? "border-[#647F98] bg-[#E4EAF0] shadow-sm"
                  : "border-[var(--border-primary)] hover:border-[#879BAD] bg-[var(--surface-primary)]"
              }`}
              title={`${theme.name}: ${theme.description}`}
            >
              <div className="text-center">
                <div className="text-base mb-0.5">{theme.icon}</div>
                <div className={`text-[11px] font-medium truncate ${
                  currentTheme === key ? "text-[#536D85] font-semibold" : "text-[var(--text-secondary)]"
                }`}>
                  {theme.name.split(" ")[0]}
                </div>
              </div>
              {currentTheme === key && (
                <div className="absolute top-1 right-1 w-2 h-2 bg-[#647F98] rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Default variant (used on settings / other pages)
  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(themes).map(([key, theme]) => (
        <button
          key={key}
          onClick={() => setCurrentTheme(key)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-[10px] transition-all duration-180 text-sm ${
            currentTheme === key
              ? "bg-[#647F98] text-white shadow-sm"
              : "bg-[var(--surface-secondary)] text-[var(--text-primary)] hover:bg-[var(--surface-primary)] border border-[var(--border-primary)]"
          }`}
        >
          <span>{theme.icon}</span>
          <span className="font-medium">{theme.name}</span>
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector;