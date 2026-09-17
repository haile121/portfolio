"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MinimalistLoaderProps {
  theme: "dark" | "light";
  onComplete: () => void;
}

export function MinimalistLoader({ theme, onComplete }: MinimalistLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1000; // 1 second smooth loader

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 400); // Allow fade out
        }, 150);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center p-6 select-none font-mono ${
            theme === "dark"
              ? "bg-[#050608] text-zinc-100"
              : "bg-slate-50 text-slate-900"
          }`}
        >
          <div className="w-full max-w-xs space-y-4 text-center">
            {/* Minimal Brand Logo */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-1"
            >
              <div className="text-xs font-bold tracking-widest uppercase">
                HAILEMARIAM AGABZIE
              </div>
              <div
                className={`text-[10px] tracking-wider ${
                  theme === "dark" ? "text-zinc-500" : "text-slate-400"
                }`}
              >
                SYS.INIT // PORTFOLIO RUNTIME
              </div>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="space-y-2">
              <div
                className={`h-1 w-full rounded-full overflow-hidden ${
                  theme === "dark" ? "bg-zinc-800" : "bg-slate-200"
                }`}
              >
                <motion.div
                  className="h-full bg-blue-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono">
                <span
                  className={
                    theme === "dark" ? "text-zinc-500" : "text-slate-500"
                  }
                >
                  INITIALIZING...
                </span>
                <span className="font-bold text-blue-400">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
