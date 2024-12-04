"use client";
import { useState, useEffect, createContext, useContext } from "react";

type validFont = "sans" | "serif" | "mono";
type validTheme = "mono" | "github" | "pink" | "solarized" | "dracula";
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

const ThemeContext = createContext<themeContextProps | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [font, setFont] = useState<validFont>("mono");
  const [theme, setTheme] = useState<validTheme>("solarized");
  const [mode, setMode] = useState<validMode>("light");
  const [isMounted, setIsMounted] = useState(false);

  const fontHandler = (font: validFont) => {
    setFont(font);
  };

  const themeHandler = (theme: validTheme) => {
    setTheme(theme);
  };

  const modeHandler = (mode: validMode) => {
    setMode(mode);
  };

  const toggleDarkMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    setIsMounted(true);
  }, [theme, mode, font]);

  if (!isMounted) return null;

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

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContextProvider>
      <WithThemeClass>{children}</WithThemeClass>
    </ThemeContextProvider>
  );
};

const WithThemeClass = ({ children }: { children: React.ReactNode }) => {
  const { theme, mode } = useTheme();
  return <div className={`${theme}-${mode}`} id="themeWindow">{children}</div>;
};
