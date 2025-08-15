// src/components/ThemeToggle.jsx
import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const [theme, setTheme, validThemes] = useTheme();

  //   return (
  //     <select
  //       className="select select-accent w-52"
  //       value=
  //
  //     >
  //
  //     </select>
  //   );

  return (
    <div className="flex items-center justify-end">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-primary m-1">
          {theme}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content bg-base-100 text-base-content menu rounded-box z-1 w-52 p-2 shadow-sm"
        >
          {validThemes.map((t) => (
            <li
              key={t}
              onClick={() => setTheme(t)}
              className="text-base-content"
            >
              <a>{t}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
