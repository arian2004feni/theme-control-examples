// src/components/ThemeToggle.jsx
import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <label className="swap swap-rotate">
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />

      {/* Sun icon */}
      <svg className="swap-off w-8 h-8 fill-base-content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M5.64 17.66L4.22 19.07l1.41 1.41 1.41-1.41-1.4-1.41zM1 13h3v-2H1v2zm10 8h2v-3h-2v3zm9-3.93l-1.41 1.41 1.41 1.41 1.41-1.41-1.41-1.41zM17.66 5.64l1.41-1.41-1.41-1.41-1.41 1.41 1.41 1.41zM23 11h-3v2h3v-2zm-9-8h-2v3h2V3zm-1 4a5 5 0 100 10 5 5 0 000-10z"/>
      </svg>

      {/* Moon icon */}
      <svg className="swap-on w-8 h-8 fill-base-content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M21.64 13a9 9 0 01-11.31 7.23A9 9 0 0012 3a9 9 0 019.64 10z"/>
      </svg>
    </label>
  );
}
