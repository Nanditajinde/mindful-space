/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Dusty Blue & Warm Ivory Palette
        "dusty-blue": {
          DEFAULT: "#647F98",
          hover: "#536D85",
          dark: "#91A9BF",
        },
        "slate-blue": "#879BAD",
        "muted-mauve": "#A596B5",
        "soft-terracotta": "#C49A82",
        "warm-ivory": "#F6F3EE",
        "charcoal-blue": "#303D4A",
        "warm-grey": "#777B80",
        "soft-greige": "#E4DFD7",
        "input-bg": "#FBFAF7",
        "input-border": "#D9D6CF",
        "active-nav": "#E4EAF0",
        "active-nav-text": "#536D85",
        "sos": "#C64C4C",
        "success-sage": "#527A66",
        "warning-amber": "#B88745",

        // Dark mode specific tokens
        "dark-bg": "#202832",
        "dark-surface": "#2B3542",
        "dark-text": "#F1F0EC",
        "dark-secondary": "#B6C0CB",
        "dark-border": "#3C4754",
        "dark-input": "#252F3A",

        // Semantic mappings
        navy: "#202832",
        card: "var(--surface-primary)",
        "teal-primary": "#647F98",
        accent: "#A596B5",
      },
      boxShadow: {
        subtle: "0 2px 8px rgba(48, 61, 74, 0.04)",
        card: "0 2px 8px rgba(48, 61, 74, 0.04)",
      },
      borderRadius: {
        DEFAULT: "10px",
        card: "12px",
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "float": "float 5s ease-in-out infinite",
        "fade-in": "fade-in 0.2s ease forwards",
        "slide-up": "slide-up 0.25s ease-out forwards",
      },
    },
  },
  plugins: [],
};
