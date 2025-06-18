import React, { createContext, useState, useContext } from "react";
const ThemeContext = createContext();
export const useTheme = () => {
  return useContext(ThemeContext);
};
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }; React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    const body = document.body;
    if (theme === "dark") {
      body.classList.add("bg-dark", "text-light");
      body.classList.remove("bg-light", "text-dark");
    } else {
      body.classList.add("bg-light", "text-dark");
      body.classList.remove("bg-dark", "text-light");
    }
    return () => {
      body.classList.remove("bg-dark", "text-light", "bg-light", "text-dark");
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
