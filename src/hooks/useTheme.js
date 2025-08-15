// src/hooks/useTheme.js
import { useEffect, useState } from "react";
const validThemes = ["light-theme", "dark-theme"];

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved && validThemes.includes(saved)) return saved;

    // System preference fallback
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark-theme" : "light-theme";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}
