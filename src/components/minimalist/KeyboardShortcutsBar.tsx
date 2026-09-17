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
        <span className="font-bold text-zinc-300">Shortcuts</span>

        {isFolded && (
          <button
            onClick={() => setIsFolded(false)}
            className="flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-blue-400 transition-colors clickable px-2 py-0.5 rounded bg-zinc-800/60 border border-zinc-700/60"
          >
            <span>expand to see shortcuts</span>
            <ChevronRight size={13} />
          </button>
        )}
      </div>

      {!isFolded && (
        <>
          <span className="text-[11px] text-zinc-500 font-normal hidden md:inline shrink-0">
            (click numbers 1–5 or press keys)
          </span>

          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pl-2 border-l border-zinc-800/80 transition-all duration-300 min-w-0 flex-1">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-400 transition-colors clickable flex items-center shrink-0"
            >
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold border border-zinc-700 mr-1">
                1
              </kbd>{" "}
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-blue-400 transition-colors clickable flex items-center shrink-0"
            >
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold border border-zinc-700 mr-1">
                2
              </kbd>{" "}
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="hover:text-blue-400 transition-colors clickable flex items-center shrink-0"
            >
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold border border-zinc-700 mr-1">
                3
              </kbd>{" "}
              Experience
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-blue-400 transition-colors clickable flex items-center shrink-0"
            >
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold border border-zinc-700 mr-1">
                4
              </kbd>{" "}
              Stack
            </button>
            <button
              onClick={() => scrollToSection("sandbox")}
              className="hover:text-blue-400 transition-colors clickable flex items-center shrink-0"
            >
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold border border-zinc-700 mr-1">
                5
              </kbd>{" "}
              Sandbox
            </button>
          </div>

          <button
            onClick={() => setIsFolded(true)}
            className="flex items-center gap-1 text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors clickable px-2 py-0.5 rounded bg-zinc-800/50 border border-zinc-700/50 shrink-0 ml-auto"
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
