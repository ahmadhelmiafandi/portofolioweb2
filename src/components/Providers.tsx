"use client";

import { LangProvider } from "@/contexts/LangContext";
import {
  ReactNode,
  useEffect,
  useState,
  useCallback,
  useMemo,
  createContext,
  useContext,
} from "react";
import { LazyMotion, domMax } from "framer-motion";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
} | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    // Fallback safe dummy object
    return { theme: "dark" as Theme, setTheme: () => {} };
  }
  return context;
}

export function Providers({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme-v2") as Theme;
    if (saved === "light" || saved === "dark") {
      setThemeState(saved);
      document.documentElement.setAttribute("data-theme", saved);
      document.documentElement.className = saved;
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.className = "dark";
    }
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("portfolio-theme-v2", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    document.documentElement.className = newTheme;
  }, []);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <LazyMotion features={domMax} strict>
        <LangProvider>{children}</LangProvider>
      </LazyMotion>
    </ThemeContext.Provider>
  );
}
