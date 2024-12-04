export type validTheme = "mono" | "github" | "pink" | "solarized" | "dracula";
export type validMode = "light" | "dark";

export type themeContextProps = {
  theme: validTheme;
  themeHandler: (theme: validTheme) => void;
  mode: validMode;
  modeHandler: (mode: validMode) => void;
  toggleDarkMode: () => void;
};
