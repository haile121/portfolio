"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Moon, Sun, ArrowRight } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";

export function LandingNavbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-3.5 md:px-10 md:py-4 flex items-center justify-between bg-bg/85 border-b border-border/80 backdrop-blur-xl"
    >
      {/* Brand Logo */}
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-surface border border-border text-text tracking-wider">
            HA
          </div>
          <span className="font-bold text-xs tracking-tight text-text group-hover:text-blue transition-colors">
            Hailemariam Agabzie
          </span>
        </Link>

        <span className="hidden sm:inline-block text-[11px] font-mono text-text3 border-l border-border pl-3">
          Full-Stack & Content
        </span>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* Status text - Available for work */}
        <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono text-text3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Available for work</span>
        </div>

        {/* Minimalist View Button - Human, clean styling */}
        <Link
          href="/minimalist"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-surface hover:bg-surface2 text-text text-xs font-mono font-semibold transition-all hover:border-blue/60 group clickable"
        >
          <span>Minimalist Portfolio</span>
          <ArrowRight
            size={13}
            className="text-text3 group-hover:text-blue group-hover:translate-x-0.5 transition-all"
          />
        </Link>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-md border border-border bg-surface text-text2 hover:text-text hover:border-border2 transition-all clickable"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Sun size={14} /> : <Moon size={14} />}
        </button>
      </div>
    </motion.nav>
  );
}
