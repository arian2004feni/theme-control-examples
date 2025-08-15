// src/App.jsx
import { useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import { themeChange } from "theme-change";
export default function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="p-6 space-y-6">
      <ThemeToggle />
      <div className="p-4 border rounded-lg border-accent">
        <h1 className="text-2xl font-bold text-base-content">Theme Demo</h1>
        <p className="text-base-content">
          Works with all DaisyUI themes + custom.
        </p>
        <button className="btn btn-primary">DaisyUI Button</button>
      </div>
    </div>
  );
}
