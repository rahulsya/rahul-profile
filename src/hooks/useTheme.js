import { useState, useEffect } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("dark");
  const colorTheme = theme === "light" ? "dark" : "light";
  useEffect(() => {
    const rootElement = window.document.documentElement;
    rootElement.classList.remove(colorTheme);
    rootElement.classList.add(theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme];
}
