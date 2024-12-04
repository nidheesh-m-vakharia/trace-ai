"use client";
import { useState, useEffect, createContext, useContext } from "react";

type validTheme = "mono" | "github" | "pink" | "solarized" | "dracula";
type validMode = "light" | "dark";

type themeContextProps = {
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

  if (!isMounted) return null;

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
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};
