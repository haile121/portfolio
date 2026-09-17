"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MinimalistLoaderProps {
  theme: "dark" | "light";
  onComplete: () => void;
}

export function MinimalistLoader({ theme, onComplete }: MinimalistLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1400; // Elegant, smooth 1.4s progress curve

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            onCompleteRef.current();
          }, 550); // Allow smooth curtain fade-out
        }, 250); // Comfortable hold at 100%
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.99, filter: "blur(6px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed inset-0 z-[100] flex items-center justify-center p-6 select-none ${
            theme === "dark" ? "bg-[#050608]" : "bg-slate-50"
          }`}
        >
          {/* Ultra-Minimal Text-Free Center Line */}
          <div className="w-40 sm:w-48 relative">
            <div
              className={`h-[2px] w-full rounded-full overflow-hidden ${
                theme === "dark" ? "bg-zinc-800/80" : "bg-slate-200"
              }`}
            >
              <motion.div
                className="h-full bg-blue-500 rounded-full transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
