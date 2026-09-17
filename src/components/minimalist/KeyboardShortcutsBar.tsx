"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface KeyboardShortcutsBarProps {
  theme: "dark" | "light";
  accentText: string;
  scrollToSection: (id: string) => void;
}

export function KeyboardShortcutsBar({
  theme,
  scrollToSection,
}: KeyboardShortcutsBarProps) {
  const [isFolded, setIsFolded] = useState(true);

  return (
    <div
      className={`p-3 rounded-xl border flex items-center gap-3 text-xs font-mono transition-all duration-300 ease-in-out ${
        isFolded ? "w-fit" : "w-full"
      } ${
        theme === "dark"
          ? "bg-zinc-900/30 border-white/[0.07] text-zinc-400"
          : "bg-white border-slate-200 text-slate-600"
      }`}
    >
      <div className="flex items-center gap-2.5 shrink-0">
        <span
          className={
            theme === "dark"
              ? "font-bold text-zinc-300"
              : "font-extrabold text-slate-900"
          }
        >
          Shortcuts
        </span>

        {isFolded && (
          <button
            onClick={() => setIsFolded(false)}
            className={`flex items-center gap-1.5 text-[11px] transition-colors clickable px-2 py-0.5 rounded border ${
              theme === "dark"
                ? "text-zinc-400 hover:text-blue-400 bg-zinc-800/60 border-zinc-700/60"
                : "text-slate-700 hover:text-blue-600 bg-slate-100 border-slate-200/90 shadow-sm font-semibold"
            }`}
          >
            <span>expand to see shortcuts</span>
            <ChevronRight size={13} />
          </button>
        )}
      </div>

      {!isFolded && (
        <>
          <span
            className={`text-[11px] font-normal hidden md:inline shrink-0 ${
              theme === "dark" ? "text-zinc-500" : "text-slate-500 font-medium"
            }`}
          >
            (click numbers 1–5 or press keys)
          </span>

          <div
            className={`flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pl-2 border-l transition-all duration-300 min-w-0 flex-1 ${
              theme === "dark" ? "border-zinc-800/80" : "border-slate-200"
            }`}
          >
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors clickable flex items-center shrink-0 ${
                theme === "dark"
                  ? "hover:text-blue-400 text-zinc-400"
                  : "hover:text-blue-600 text-slate-700 font-medium"
              }`}
            >
              <kbd
                className={`px-1.5 py-0.5 rounded font-bold border mr-1 ${
                  theme === "dark"
                    ? "bg-zinc-800 text-zinc-300 border-zinc-700"
                    : "bg-slate-200/90 text-slate-900 border-slate-300/90"
                }`}
              >
                1
              </kbd>{" "}
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`transition-colors clickable flex items-center shrink-0 ${
                theme === "dark"
                  ? "hover:text-blue-400 text-zinc-400"
                  : "hover:text-blue-600 text-slate-700 font-medium"
              }`}
            >
              <kbd
                className={`px-1.5 py-0.5 rounded font-bold border mr-1 ${
                  theme === "dark"
                    ? "bg-zinc-800 text-zinc-300 border-zinc-700"
                    : "bg-slate-200/90 text-slate-900 border-slate-300/90"
                }`}
              >
                2
              </kbd>{" "}
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`transition-colors clickable flex items-center shrink-0 ${
                theme === "dark"
                  ? "hover:text-blue-400 text-zinc-400"
                  : "hover:text-blue-600 text-slate-700 font-medium"
              }`}
            >
              <kbd
                className={`px-1.5 py-0.5 rounded font-bold border mr-1 ${
                  theme === "dark"
                    ? "bg-zinc-800 text-zinc-300 border-zinc-700"
                    : "bg-slate-200/90 text-slate-900 border-slate-300/90"
                }`}
              >
                3
              </kbd>{" "}
              Experience
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`transition-colors clickable flex items-center shrink-0 ${
                theme === "dark"
                  ? "hover:text-blue-400 text-zinc-400"
                  : "hover:text-blue-600 text-slate-700 font-medium"
              }`}
            >
              <kbd
                className={`px-1.5 py-0.5 rounded font-bold border mr-1 ${
                  theme === "dark"
                    ? "bg-zinc-800 text-zinc-300 border-zinc-700"
                    : "bg-slate-200/90 text-slate-900 border-slate-300/90"
                }`}
              >
                4
              </kbd>{" "}
              Stack
            </button>
            <button
              onClick={() => scrollToSection("sandbox")}
              className={`transition-colors clickable flex items-center shrink-0 ${
                theme === "dark"
                  ? "hover:text-blue-400 text-zinc-400"
                  : "hover:text-blue-600 text-slate-700 font-medium"
              }`}
            >
              <kbd
                className={`px-1.5 py-0.5 rounded font-bold border mr-1 ${
                  theme === "dark"
                    ? "bg-zinc-800 text-zinc-300 border-zinc-700"
                    : "bg-slate-200/90 text-slate-900 border-slate-300/90"
                }`}
              >
                5
              </kbd>{" "}
              Sandbox
            </button>
          </div>

          <button
            onClick={() => setIsFolded(true)}
            className={`flex items-center gap-1 text-[11px] transition-colors clickable px-2 py-0.5 rounded border shrink-0 ml-auto ${
              theme === "dark"
                ? "text-zinc-500 hover:text-zinc-300 bg-zinc-800/50 border-zinc-700/50"
                : "text-slate-700 hover:text-slate-950 bg-slate-100 border-slate-200/90 shadow-sm font-medium"
            }`}
            aria-label="Fold shortcuts"
          >
            <span>Fold</span>
            <ChevronLeft size={13} />
          </button>
        </>
      )}
    </div>
  );
}
