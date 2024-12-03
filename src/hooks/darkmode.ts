import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default state is light mode

  // Sync with `localStorage` and DOM on mount
  useEffect(() => {
    const savedPreference = localStorage.getItem("darkMode");
    const prefersDarkMode = savedPreference === "true"; // Check stored preference
    setIsDarkMode(prefersDarkMode); // Set initial state

    const root = document.documentElement;
    if (prefersDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []); // Runs only on mount

  // Update `localStorage` and DOM whenever the mode changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]); // Runs whenever `isDarkMode` changes

  // Toggle function
  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;


