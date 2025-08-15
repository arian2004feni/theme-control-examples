// src/components/ThemeToggle.jsx
const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
  "my-custom-theme", // your custom
];

export default function ThemeToggle() {
  return (
    <select
      className="select select-bordered w-64"
      data-choose-theme
    >
      {/* Default option */}
      <option value="">Default</option>
      {/* DaisyUI themes are automatically detected */}
      {themes.map((theme) => (
        <option key={theme} value={theme}>
          {theme}
        </option>
      ))}
    </select>
  );
}
