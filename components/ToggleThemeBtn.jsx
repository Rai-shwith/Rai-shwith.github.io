"use client";
import ToggleDark from "./icons/ToggleDark";
import ToggleLight from "./icons/ToggleLight";
import { useTheme } from "@/context/ThemeContext";

const ToggleThemeBtn = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-full px-2"
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      <ToggleDark />
      <ToggleLight />
    </button>
  );
};

export default ToggleThemeBtn;
