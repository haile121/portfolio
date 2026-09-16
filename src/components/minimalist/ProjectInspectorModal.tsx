"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { devProjects } from "@/data/dev";

interface ProjectInspectorModalProps {
  selectedProject: (typeof devProjects)[0] | null;
  setSelectedProject: (project: (typeof devProjects)[0] | null) => void;
  accentText: string;
  accentBg: string;
  persona: "code" | "design";
}

export function ProjectInspectorModal({
  selectedProject,
  setSelectedProject,
  accentText,
  accentBg,
  persona,
}: ProjectInspectorModalProps) {
  return (
    <AnimatePresence>
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-2xl rounded-2xl border border-zinc-800 bg-[#0c0e12] p-6 text-zinc-100 shadow-2xl space-y-5 font-sans"
          >
            <div className="flex items-start justify-between border-b border-zinc-800/80 pb-4">
              <div>
                <span
                  className={`text-xs font-mono font-bold uppercase tracking-widest ${accentText}`}
                >
                  Architecture Inspector // {selectedProject.num}
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-white mt-1">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white transition-colors clickable"
                aria-label="Close Inspector"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase">
                System Overview
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedProject.desc}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase">
                Tech Stack & Infrastructure
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-mono px-3 py-1 rounded border font-bold ${
                      persona === "code"
                        ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                        : "bg-orange-500/10 text-orange-400 border-orange-500/20"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-800/80">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg text-xs font-mono font-bold text-zinc-400 hover:text-white"
              >
                Close
              </button>

              {selectedProject.href && (
                <a
                  href={selectedProject.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-white font-bold text-xs shadow clickable ${accentBg}`}
                >
                  <span>Launch Live App</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
