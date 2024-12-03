"use client";
import { useState, useEffect, createContext } from "react";

type validFont = "sans" | "serif" | "mono";
type validTheme = "mono" | "github" | "pink" | "solardized" | "dracula";
type validMode = "light" | "dark";

type themeContextProps = {
  font: validFont;
  fontHandler: (font: validFont) => void;
  theme: validTheme;
  themeHandler: (theme: validTheme) => void;
  mode: validMode;
  modeHandler: (mode: validMode) => void;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<themeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [font, setFont] = useState<validFont>("sans");
  const [theme, setTheme] = useState<validTheme>("mono");
  const [mode, setMode] = useState<validMode>("light");

  const fontHandler = (font: validFont) => {
    localStorage.setItem("font", font);
    setFont(font);
  };

  const themeHandler = (theme: validTheme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  const modeHandler = (mode: validMode) => {
    localStorage.setItem("mode", mode);
    setMode(mode);
  };

  const toggleDarkMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider
      value={
        {
          font,
          fontHandler,
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
};
