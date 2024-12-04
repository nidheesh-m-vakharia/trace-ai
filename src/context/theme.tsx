"use client";
import { useState, useEffect, createContext } from "react";
import { validTheme, validMode, themeContextProps } from "@/types/theme";

export const ThemeContext = createContext<themeContextProps | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<validTheme>("solarized");
  const [mode, setMode] = useState<validMode>("light");
  const [isMounted, setIsMounted] = useState(false);

  const themeHandler = (theme: validTheme) => {
    setTheme(theme);
  };

  const modeHandler = (mode: validMode) => {
    setMode(mode);
  };

  const toggleDarkMode = () => {
    modeHandler((mode === "light" ? "dark" : "light") as validMode);
  };

  useEffect(() => {
    document.documentElement.className = `${theme}-${mode}`;
    setIsMounted(true);
  }, [theme, mode]);

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
