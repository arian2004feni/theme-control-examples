// src/App.jsx
import ThemeToggle from "./components/ThemeToggle";
export default function App() {
  return (
    <div className="p-6 space-y-6">
      <ThemeToggle />

      <div className="p-4 border rounded-lg border-success">
        <h1 className="text-2xl font-bold text-primary">
          Theme Demo
        </h1>
        <p className="text-primary">
          using all 35 built-in daisyUI themes using all in the root css. can't use custom themes with all daisyui themes.
        </p>
        <button className="btn btn-primary ">DaisyUI Button</button>
      </div>
    </div>
  );
}

