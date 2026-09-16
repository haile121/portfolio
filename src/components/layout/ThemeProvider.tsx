"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event?: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initial = savedTheme ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    if (initial === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = (event?: React.MouseEvent) => {
    const newTheme = theme === "light" ? "dark" : "light";

    // Coordinates: use click position, fall back to top-right corner
    const x = event?.clientX ?? window.innerWidth - 60;
    const y = event?.clientY ?? 36;

    // Max radius needed to cover entire screen from click point
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const ripple = rippleRef.current;
    if (!ripple) {
      applyTheme(newTheme);
      return;
    }

    const size = endRadius * 2;
    ripple.style.cssText = `
      position: fixed;
      z-index: 99999;
      pointer-events: none;
      border-radius: 50%;
      width: ${size}px;
      height: ${size}px;
      top: ${y - endRadius}px;
      left: ${x - endRadius}px;
      transform: scale(0);
      background: ${newTheme === "dark" ? "rgba(8, 12, 20, 0.96)" : "rgba(248, 247, 244, 0.96)"};
      backdrop-filter: blur(8px);
      transition: transform 600ms cubic-bezier(0.25, 1, 0.5, 1), opacity 200ms ease-out;
      will-change: transform, opacity;
      opacity: 1;
    `;
    ripple.style.display = "block";

    // Force reflow so transition fires
    void ripple.offsetWidth;

    // Expand the ripple smoothly across screen
    ripple.style.transform = "scale(1)";

    // Apply theme at peak expansion
    const timeout = setTimeout(() => {
      applyTheme(newTheme);
    }, 300);

    // Fade out ripple smoothly after theme applies
    const cleanup = setTimeout(() => {
      if (rippleRef.current) {
        rippleRef.current.style.opacity = "0";
        setTimeout(() => {
          if (rippleRef.current) {
            rippleRef.current.style.display = "none";
            rippleRef.current.style.transform = "scale(0)";
          }
        }, 200);
      }
    }, 600);

    return () => {
      clearTimeout(timeout);
      clearTimeout(cleanup);
    };
  };

  const applyTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Liquid Ripple overlay — expands smoothly from click origin */}
      <div ref={rippleRef} style={{ display: "none" }} aria-hidden="true" />
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
