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
              className={`w-7 h-7 rounded-full object-cover grayscale contrast-125 border shadow-sm group-hover:scale-105 transition-transform ${
                theme === "dark" ? "border-zinc-700/80" : "border-slate-300"
              }`}
            />
            <span
              className={`font-bold text-xs tracking-tight transition-colors ${
                theme === "dark"
                  ? "text-zinc-100 group-hover:text-blue-400"
                  : "text-slate-900 group-hover:text-blue-600"
              }`}
            >
              Hailemariam Agabzie
            </span>
          </Link>

          {/* Clean Focus Selector */}
          <div
            className={`hidden sm:flex items-center gap-1 text-xs font-mono border-l pl-3 ${
              theme === "dark" ? "border-zinc-800/80" : "border-slate-200"
            }`}
          >
            <button
              onClick={() => setPersona("code")}
              className={`px-2 py-0.5 rounded transition-colors clickable ${
                persona === "code"
                  ? theme === "dark"
                    ? "text-blue-400 font-bold underline underline-offset-4"
                    : "text-blue-600 font-bold underline underline-offset-4"
                  : theme === "dark"
                    ? "text-zinc-500 hover:text-zinc-300"
                    : "text-slate-500 hover:text-slate-900 font-medium"
              }`}
            >
              Developer
            </button>
            <span
              className={theme === "dark" ? "text-zinc-700" : "text-slate-300"}
            >
              /
            </span>
            <button
              onClick={() => setPersona("design")}
              className={`px-2 py-0.5 rounded transition-colors clickable ${
                persona === "design"
                  ? theme === "dark"
                    ? "text-orange-400 font-bold underline underline-offset-4"
                    : "text-orange-600 font-bold underline underline-offset-4"
                  : theme === "dark"
                    ? "text-zinc-500 hover:text-zinc-300"
                    : "text-slate-500 hover:text-slate-900 font-medium"
              }`}
            >
              Creator
            </button>
          </div>
        </div>

        {/* System Controls */}
        <div className="flex items-center gap-3">
          {/* Clock (Just the time) */}
          <div
            className={`hidden md:block text-[11px] font-mono font-medium ${
              theme === "dark" ? "text-zinc-500" : "text-slate-500"
            }`}
          >
            {currentTime}
          </div>

          {/* Visual / CLI Switcher */}
          <div
            className={`flex items-center gap-1 p-0.5 rounded text-xs font-mono border ${
              theme === "dark"
                ? "bg-zinc-900 border-zinc-800"
                : "bg-slate-100 border-slate-200/90 shadow-sm"
            }`}
          >
            <button
              onClick={() => setViewMode("visual")}
              className={`px-2 py-0.5 rounded text-[11px] transition-all flex items-center gap-1 ${
                viewMode === "visual"
                  ? theme === "dark"
                    ? "bg-zinc-800 text-zinc-100 font-medium shadow-sm"
                    : "bg-white text-slate-900 font-semibold shadow-sm border border-slate-200/60"
                  : theme === "dark"
                    ? "text-zinc-500 hover:text-zinc-300"
                    : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Sliders size={11} />
              <span>Visual</span>
            </button>
            <button
              onClick={() => setViewMode("cli")}
              className={`px-2 py-0.5 rounded text-[11px] transition-all flex items-center gap-1 ${
                viewMode === "cli"
                  ? theme === "dark"
                    ? "bg-zinc-800 text-zinc-100 font-medium shadow-sm"
                    : "bg-white text-slate-900 font-semibold shadow-sm border border-slate-200/60"
                  : theme === "dark"
                    ? "text-zinc-500 hover:text-zinc-300"
                    : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Terminal size={11} />
              <span>CLI</span>
            </button>
          </div>

          {/* Command Palette Button */}
          <button
            onClick={() => setCmdOpen(true)}
            className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded border text-xs font-mono transition-colors ${
              theme === "dark"
                ? "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                : "bg-slate-100 border-slate-200/90 text-slate-700 hover:text-slate-950 shadow-sm font-medium"
            }`}
          >
            <Search size={11} />
            <span>Search</span>
            <kbd
              className={`text-[9px] px-1 rounded ${
                theme === "dark"
                  ? "text-zinc-500 bg-zinc-800"
                  : "text-slate-700 bg-slate-200/90 font-bold"
              }`}
            >
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-1.5 rounded border transition-colors ${
              theme === "dark"
                ? "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                : "bg-slate-100 border-slate-200/90 text-slate-700 hover:text-slate-950 shadow-sm"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
          </button>

          {/* Return link */}
          <Link
            href="/"
            className={`flex items-center gap-1 text-xs font-mono transition-colors ml-1 ${
              theme === "dark"
                ? "text-zinc-400 hover:text-zinc-100"
                : "text-slate-600 hover:text-slate-950 font-medium"
            }`}
          >
            <ArrowLeft size={12} />
            <span className="hidden sm:inline">Split</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
