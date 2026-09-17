"use client";

import Link from "next/link";
import { Sliders, Terminal, Search, Sun, Moon, ArrowLeft } from "lucide-react";

interface HeaderProps {
  persona: "code" | "design";
  setPersona: (persona: "code" | "design") => void;
  viewMode: "visual" | "cli";
  setViewMode: (mode: "visual" | "cli") => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
  setCmdOpen: (open: boolean) => void;
  currentTime: string;
}

export function Header({
  persona,
  setPersona,
  viewMode,
  setViewMode,
  theme,
  toggleTheme,
  setCmdOpen,
  currentTime,
}: HeaderProps) {
  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors duration-200 ${
        theme === "dark"
          ? "bg-[#050608]/90 border-white/[0.08]"
          : "bg-white/90 border-slate-200"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand & Focus Switcher */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <img
              src="/HaileSuit.jpg"
              alt="Hailemariam Agabzie"
              className="w-7 h-7 rounded-full object-cover grayscale contrast-125 border border-zinc-700/80 shadow-sm group-hover:scale-105 transition-transform"
            />
            <span className="font-bold text-xs tracking-tight group-hover:text-blue-400 transition-colors">
              Hailemariam Agabzie
            </span>
          </Link>

          {/* Clean Focus Selector */}
          <div className="hidden sm:flex items-center gap-1 text-xs font-mono border-l border-zinc-800/80 pl-3">
            <button
              onClick={() => setPersona("code")}
              className={`px-2 py-0.5 rounded transition-colors clickable ${
                persona === "code"
                  ? "text-blue-400 font-bold underline underline-offset-4"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Developer
            </button>
            <span className="text-zinc-700">/</span>
            <button
              onClick={() => setPersona("design")}
              className={`px-2 py-0.5 rounded transition-colors clickable ${
                persona === "design"
                  ? "text-orange-400 font-bold underline underline-offset-4"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Creator
            </button>
          </div>
        </div>

        {/* System Controls */}
        <div className="flex items-center gap-3">
          {/* Clock (Just the time) */}
          <div className="hidden md:block text-[11px] font-mono text-zinc-500">
            {currentTime}
          </div>

          {/* Visual / CLI Switcher */}
          <div className="flex items-center gap-1 p-0.5 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono">
            <button
              onClick={() => setViewMode("visual")}
              className={`px-2 py-0.5 rounded text-[11px] transition-all flex items-center gap-1 ${
                viewMode === "visual"
                  ? "bg-zinc-800 text-zinc-100 font-medium shadow-sm"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <Sliders size={11} />
              <span>Visual</span>
            </button>
            <button
              onClick={() => setViewMode("cli")}
              className={`px-2 py-0.5 rounded text-[11px] transition-all flex items-center gap-1 ${
                viewMode === "cli"
                  ? "bg-zinc-800 text-zinc-100 font-medium shadow-sm"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <Terminal size={11} />
              <span>CLI</span>
            </button>
          </div>

          {/* Command Palette Button */}
          <button
            onClick={() => setCmdOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <Search size={11} />
            <span>Search</span>
            <kbd className="text-[9px] text-zinc-500 bg-zinc-800 px-1 rounded">
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
          </button>

          {/* Return link */}
          <Link
            href="/"
            className="flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-zinc-100 transition-colors ml-1"
          >
            <ArrowLeft size={12} />
            <span className="hidden sm:inline">Split</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
