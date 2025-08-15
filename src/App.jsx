// src/App.jsx
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <div className="p-6">
      <ThemeToggle />

      <div className="mt-6 p-4 border rounded-lg border-secondary dark:border-accent">
        <h1 className="text-2xl font-bold text-base-content">
          Light and dark theme Content
        </h1>
        <p className="text-base-content dark:text-accent">
          This text changes style based on DaisyUI theme
          and you can use Tailwind's <code>dark:</code> classes.
        </p>
      </div>
    </div>
  );
}
