"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Code,
  Briefcase,
  Layers,
  Zap,
  Terminal,
  Sun,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface CommandPaletteModalProps {
  cmdOpen: boolean;
  setCmdOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
  togglePersona: () => void;
  viewMode: "visual" | "cli";
  setViewMode: (mode: "visual" | "cli") => void;
  toggleTheme: () => void;
}

export function CommandPaletteModal({
  cmdOpen,
  setCmdOpen,
  scrollToSection,
  togglePersona,
  viewMode,
  setViewMode,
  toggleTheme,
}: CommandPaletteModalProps) {
  const [cmdSearch, setCmdSearch] = useState("");

  const executeCmd = (action: () => void) => {
    action();
    setCmdOpen(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("haileag8@gmail.com");
  };

  return (
    <AnimatePresence>
      {cmdOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="w-full max-w-xl rounded-2xl border border-zinc-800 bg-[#0d0f14] shadow-2xl overflow-hidden font-sans"
          >
            <div className="p-3 border-b border-zinc-800 flex items-center gap-3">
              <Search size={16} className="text-zinc-400 ml-2" />
              <input
                type="text"
                value={cmdSearch}
                onChange={(e) => setCmdSearch(e.target.value)}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent text-sm text-zinc-100 focus:outline-none"
                autoFocus
              />
              <kbd className="px-2 py-0.5 text-[10px] font-mono text-zinc-400 bg-zinc-800 rounded border border-zinc-700">
                ESC
              </kbd>
            </div>

            <div className="p-2 max-h-72 overflow-y-auto space-y-1 text-xs font-mono">
              <button
                onClick={() => executeCmd(() => scrollToSection("projects"))}
                className="w-full text-left p-2.5 rounded-lg text-zinc-300 hover:bg-blue-600 hover:text-white flex items-center justify-between transition-colors clickable"
              >
                <span className="flex items-center gap-2">
                  <Code size={14} /> Jump to Projects
                </span>
                <kbd className="px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded text-[10px]">
                  P
                </kbd>
              </button>

              <button
                onClick={() => executeCmd(() => scrollToSection("experience"))}
                className="w-full text-left p-2.5 rounded-lg text-zinc-300 hover:bg-blue-600 hover:text-white flex items-center justify-between transition-colors clickable"
              >
                <span className="flex items-center gap-2">
                  <Briefcase size={14} /> Jump to Experience
                </span>
                <kbd className="px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded text-[10px]">
                  E
                </kbd>
              </button>

              <button
                onClick={() => executeCmd(() => scrollToSection("skills"))}
                className="w-full text-left p-2.5 rounded-lg text-zinc-300 hover:bg-blue-600 hover:text-white flex items-center justify-between transition-colors clickable"
              >
                <span className="flex items-center gap-2">
                  <Layers size={14} /> Jump to Skills
                </span>
                <kbd className="px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded text-[10px]">
                  S
                </kbd>
              </button>

              <button
                onClick={() => executeCmd(togglePersona)}
                className="w-full text-left p-2.5 rounded-lg text-zinc-300 hover:bg-blue-600 hover:text-white flex items-center justify-between transition-colors clickable"
              >
                <span className="flex items-center gap-2">
                  <Zap size={14} /> Switch Persona (Code / Design)
                </span>
                <kbd className="px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded text-[10px]">
                  P
                </kbd>
              </button>

              <button
                onClick={() =>
                  executeCmd(() =>
                    setViewMode(viewMode === "visual" ? "cli" : "visual"),
                  )
                }
                className="w-full text-left p-2.5 rounded-lg text-zinc-300 hover:bg-blue-600 hover:text-white flex items-center justify-between transition-colors clickable"
              >
                <span className="flex items-center gap-2">
                  <Terminal size={14} /> Toggle Visual / CLI Mode
                </span>
                <kbd className="px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded text-[10px]">
                  C
                </kbd>
              </button>

              <button
                onClick={() => executeCmd(toggleTheme)}
                className="w-full text-left p-2.5 rounded-lg text-zinc-300 hover:bg-blue-600 hover:text-white flex items-center justify-between transition-colors clickable"
              >
                <span className="flex items-center gap-2">
                  <Sun size={14} /> Toggle Dark / Light Theme
                </span>
                <kbd className="px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded text-[10px]">
                  T
                </kbd>
              </button>

              <button
                onClick={() => executeCmd(handleCopyEmail)}
                className="w-full text-left p-2.5 rounded-lg text-zinc-300 hover:bg-blue-600 hover:text-white flex items-center justify-between transition-colors clickable"
              >
                <span className="flex items-center gap-2">
                  <Mail size={14} /> Copy Email (haileag8@gmail.com)
                </span>
                <kbd className="px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded text-[10px]">
                  @
                </kbd>
              </button>

              <a
                href="https://github.com/haile121"
                target="_blank"
                rel="noreferrer"
                className="w-full text-left p-2.5 rounded-lg text-zinc-300 hover:bg-blue-600 hover:text-white flex items-center justify-between transition-colors block clickable"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon size={14} /> Open GitHub Profile
                </span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
