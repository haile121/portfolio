"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";

export function LandingNavbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-3.5 md:px-12 md:py-4 flex items-center justify-between bg-bg/70 border-b border-border backdrop-blur-md"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="flex items-baseline font-syne text-[20px] font-bold tracking-tighter leading-none select-none">
          <span className="text-text">H</span>
          <span className="text-text3 text-[18px]">A</span>
          <span className="text-blue">.</span>
        </div>
        <span className="font-dm-serif text-[16px] tracking-tight text-text ml-1 border-l border-border pl-3">
          Hailemariam <span className="text-text3">Agabzie</span>
        </span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Available badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-[10px] font-semibold tracking-wider text-text2 animate-pulse">
          <span
            className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"
            style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
          />
          Available for work
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="w-8 h-8 border border-border2 rounded-full bg-surface text-text flex items-center justify-center transition-all duration-200 hover:border-blue hover:text-blue clickable"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Sun size={14} /> : <Moon size={14} />}
        </button>
      </div>
    </motion.nav>
  );
}
