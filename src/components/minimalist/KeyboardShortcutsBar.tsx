"use client";

interface KeyboardShortcutsBarProps {
  theme: "dark" | "light";
  accentText: string;
  scrollToSection: (id: string) => void;
}

export function KeyboardShortcutsBar({
  theme,
  scrollToSection,
}: KeyboardShortcutsBarProps) {
  return (
    <div
      className={`p-3 rounded-xl border flex flex-wrap items-center justify-between gap-3 text-xs font-mono ${
        theme === "dark"
          ? "bg-zinc-900/30 border-white/[0.07] text-zinc-400"
          : "bg-white border-slate-200 text-slate-600"
      }`}
    >
      <div className="flex items-center gap-1.5">
        <span className="font-bold text-zinc-300">Shortcuts:</span>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => scrollToSection("about")}
          className="hover:text-blue-400 transition-colors"
        >
          <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold border border-zinc-700 mr-1">
            1
          </kbd>{" "}
          About
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="hover:text-blue-400 transition-colors"
        >
          <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold border border-zinc-700 mr-1">
            2
          </kbd>{" "}
          Projects
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className="hover:text-blue-400 transition-colors"
        >
          <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold border border-zinc-700 mr-1">
            3
          </kbd>{" "}
          Experience
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="hover:text-blue-400 transition-colors"
        >
          <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold border border-zinc-700 mr-1">
            4
          </kbd>{" "}
          Stack
        </button>
        <button
          onClick={() => scrollToSection("sandbox")}
          className="hover:text-blue-400 transition-colors"
        >
          <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold border border-zinc-700 mr-1">
            5
          </kbd>{" "}
          Sandbox
        </button>
      </div>
    </div>
  );
}
