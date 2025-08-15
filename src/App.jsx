// src/App.jsx
import ThemeToggle from "./components/ThemeToggle";
export default function App() {
  return (
    <div className="p-6 space-y-6">
      <ThemeToggle />

      <div className="p-4 border rounded-lg border-success">
        <h1 className="text-2xl font-bold text-primary dark:text-secondary aqua:text-accent arian-delta:text-success arian-alpha:text-error">
          Theme Demo
        </h1>
        <p className="text-primary dark:text-secondary aqua:text-accent arian-delta:text-success arian-alpha:text-error">
          This text changes based on the selected theme.
        </p>
        <button className="btn btn-primary dark:btn-secondary aqua:btn-accent arian-delta:btn-success arian-alpha:btn-error">DaisyUI Button</button>
      </div>
    </div>
  );
}

