// src/hooks/useTheme.js
import { useEffect, useState } from "react";

// All valid themes
const validThemes = ["light", "dark", "aqua", "arian-delta", "arian-alpha"];

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");

    if (saved && validThemes.includes(saved)) return saved;

    // If no valid saved theme → fallback to system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme, validThemes];
}
