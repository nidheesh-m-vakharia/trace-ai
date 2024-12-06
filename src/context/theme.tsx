"use client";
import { useState, useEffect, createContext } from "react";
import { validTheme, validMode, themeContextProps } from "@/types/theme";

export const ThemeContext = createContext<themeContextProps | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<validTheme>("mono");
  const [mode, setMode] = useState<validMode>("dark");
  const [isMounted, setIsMounted] = useState(false);

  const themeHandler = (theme: validTheme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  const modeHandler = (mode: validMode) => {
    localStorage.setItem("mode", mode);
    setMode(mode);
  };

  const toggleDarkMode = () => {
    modeHandler((mode === "light" ? "dark" : "light") as validMode);
  };

  useEffect(() => {
    document.documentElement.className = `${theme}-${mode}`;
    setIsMounted(true);
  }, [theme, mode]);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as validTheme;
    if (localTheme) setTheme(localTheme);
  }, [theme]);

  useEffect(() => {
    const localMode = localStorage.getItem("mode") as validMode;
    if (localMode) setMode(localMode);
  }, [mode]);

  if (isMounted)
    return (
      <ThemeContext.Provider
        value={
          {
            theme,
            themeHandler,
            mode,
            modeHandler,
            toggleDarkMode,
          } as themeContextProps
        }
      >
        {children}
      </ThemeContext.Provider>
    );

  return null;
};
