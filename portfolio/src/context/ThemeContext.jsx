import React, { createContext, useEffect, useState } from "react";

const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") || "dark" : "dark"
  );  
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme == "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log("Theme toggle invoked");
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = () => React.useContext(themeContext);
