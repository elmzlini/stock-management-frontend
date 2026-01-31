import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const themes = {
  light: {
    name: "Light",
    bg: "bg-white",
    bgSecondary: "bg-gray-50",
    bgTertiary: "bg-gray-100",
    text: "text-gray-900",
    textSecondary: "text-gray-600",
    textTertiary: "text-gray-500",
    border: "border-gray-200",
    primary: "bg-blue-600",
    primaryHover: "hover:bg-blue-700",
    primaryText: "text-blue-600",
    secondary: "bg-purple-600",
    success: "bg-green-600",
    warning: "bg-orange-500",
    danger: "bg-red-600",
    shadow: "shadow-md",
    shadowLg: "shadow-lg",
  },
  dark: {
    name: "Dark",
    bg: "bg-slate-900",
    bgSecondary: "bg-slate-800",
    bgTertiary: "bg-slate-700",
    text: "text-white",
    textSecondary: "text-gray-300",
    textTertiary: "text-gray-400",
    border: "border-slate-700",
    primary: "bg-blue-500",
    primaryHover: "hover:bg-blue-600",
    primaryText: "text-blue-400",
    secondary: "bg-purple-500",
    success: "bg-green-500",
    warning: "bg-orange-400",
    danger: "bg-red-500",
    shadow: "shadow-xl",
    shadowLg: "shadow-2xl",
  },
  modern: {
    name: "Modern",
    bg: "bg-gradient-to-br from-slate-50 to-blue-50",
    bgSecondary: "bg-white",
    bgTertiary: "bg-blue-50",
    text: "text-slate-900",
    textSecondary: "text-slate-600",
    textTertiary: "text-slate-500",
    border: "border-blue-200",
    primary: "bg-gradient-to-r from-blue-600 to-cyan-600",
    primaryHover: "hover:from-blue-700 hover:to-cyan-700",
    primaryText: "text-blue-600",
    secondary: "bg-gradient-to-r from-purple-600 to-pink-600",
    success: "bg-gradient-to-r from-green-500 to-emerald-600",
    warning: "bg-gradient-to-r from-orange-500 to-yellow-500",
    danger: "bg-gradient-to-r from-red-600 to-pink-600",
    shadow: "shadow-lg shadow-blue-200/50",
    shadowLg: "shadow-xl shadow-blue-300/50",
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const currentTheme = themes[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};