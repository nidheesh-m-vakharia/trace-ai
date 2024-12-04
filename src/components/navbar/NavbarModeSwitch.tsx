"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export const NavbarModeSwitch = () => {
  const { mode, toggleDarkMode } = useTheme();
  return (
    <button onClick={toggleDarkMode}>
      {mode === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};
