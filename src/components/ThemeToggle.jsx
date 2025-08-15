// src/components/ThemeToggle.jsx
import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const [theme, setTheme, validThemes] = useTheme();

  return (
    <select
      className="select select-accent w-52"
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
    >
      {validThemes.map((t) => (
        <option key={t} value={t} className="text-base-content bg-base-100">
          {t}
        </option>
      ))}
    </select>
  );
}
