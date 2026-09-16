"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LandingNavbar } from "./LandingNavbar";
import { DevHalf } from "./DevHalf";
import { CreatorHalf } from "./CreatorHalf";

export function LandingPage() {
  const [hoveredHalf, setHoveredHalf] = useState<"dev" | "creator" | null>(
    null,
  );

  return (
    <motion.div
      key="landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 flex flex-col md:flex-row overflow-y-auto overflow-x-hidden"
    >
      <LandingNavbar />

      <DevHalf
        isDimmed={hoveredHalf === "creator"}
        onMouseEnter={() => setHoveredHalf("dev")}
        onMouseLeave={() => setHoveredHalf(null)}
      />

      {/* DIVIDER — diamond shape */}
      <div className="relative md:w-[1px] md:h-auto w-full h-[1px] shrink-0 z-20">
        <div className="absolute inset-0 bg-white/[0.08]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
          animate={{ opacity: 1, scale: 1, rotate: 45 }}
          transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
          className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            className="w-8 h-8 flex items-center justify-center"
            style={{
              background: "rgba(12,12,12,0.92)",
              border: "1px solid rgba(255,255,255,0.13)",
              boxShadow: "0 0 24px rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="text-[8px] font-bold tracking-widest text-white/35 uppercase"
              style={{ transform: "rotate(-45deg)", display: "block" }}
            >
              or
            </span>
          </div>
        </motion.div>
      </div>

      <CreatorHalf
        isDimmed={hoveredHalf === "dev"}
        onMouseEnter={() => setHoveredHalf("creator")}
        onMouseLeave={() => setHoveredHalf(null)}
      />
    </motion.div>
  );
}
