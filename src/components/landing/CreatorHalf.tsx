"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowUpRight, Palette } from "lucide-react";
import { landingCreatorSkills } from "../../data/landing";
import { WaveCanvas } from "./WaveCanvas";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.45 },
  },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ORANGE = "#f97316";
const O = "249,115,22";

export function CreatorHalf() {
  const panelRef = useRef<HTMLAnchorElement>(null);
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!panelRef.current) return;
      const rect = panelRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      panelRef.current.style.setProperty("--glow-x", `${x}%`);
      panelRef.current.style.setProperty("--glow-y", `${y}%`);
    },
    [],
  );

  return (
    <Link
      ref={panelRef}
      href="/creator"
      onMouseMove={handleMouseMove}
      className="group relative flex-1 flex flex-col justify-between p-8 pt-28 md:p-16 md:pt-32 overflow-hidden cursor-none clickable transition-colors duration-500"
      style={{
        background: "var(--panel-creator-bg)",
      }}
    >
      {/* Deep radial gradient layers */}
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background: `radial-gradient(ellipse 80% 80% at 80% 90%, rgba(${O},0.16) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 10%, rgba(${O},0.07) 0%, transparent 60%)`,
        }}
      />

      {/* Animated flowing net canvas — reacts to mouse */}
      <WaveCanvas accentRgb={O} />

      {/* Cursor-following soft glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(ellipse 45% 45% at var(--glow-x, 70%) var(--glow-y, 70%), rgba(${O},0.1) 0%, transparent 70%)`,
        }}
      />

      {/* Floating brand kit card — xl only */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.7, ease: "easeOut" }}
        className="absolute top-[10%] right-[4%] hidden xl:block pointer-events-none"
        style={{ animation: "float 8s ease-in-out infinite 1s" }}
      >
        <div
          className="rounded-xl border border-border/50 overflow-hidden"
          style={{
            background: "var(--bg2)",
            opacity: 0.85,
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
          }}
        >
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/40">
            <Palette size={10} style={{ color: ORANGE, opacity: 0.8 }} />
            <span className="text-[9px] font-semibold tracking-wider text-text3 uppercase">
              Brand Kit
            </span>
          </div>
          <div className="px-4 py-3 space-y-2 min-w-[150px]">
            <div className="flex items-center gap-1.5">
              <div
                className="w-6 h-6 rounded border border-border/30"
                style={{ background: ORANGE }}
              />
              <div className="w-6 h-6 rounded border border-border/30 bg-amber-400" />
              <div className="w-6 h-6 rounded border border-border/30 bg-text" />
              <div className="w-6 h-6 rounded border border-border/30 bg-surface" />
            </div>
            <div className="flex gap-1">
              <div
                className="flex-1 h-1 rounded-full"
                style={{ background: ORANGE, opacity: 0.9 }}
              />
              <div className="flex-1 h-1 rounded-full bg-amber-400/80" />
              <div className="flex-1 h-1 rounded-full bg-border" />
            </div>
            <p className="font-jetbrains text-[9px] text-text3 tracking-wider">
              Inter · Syne · DM Serif
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col justify-end flex-1 mt-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div
            className="flex items-center gap-2 mb-2"
            style={{ color: `${ORANGE}cc` }}
          >
            <Palette size={14} strokeWidth={2.5} />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase mt-0.5">
              Creator
            </span>
          </div>
          <p className="text-[10px] font-jetbrains uppercase tracking-widest text-text3/70 ml-6">
            — Art meets psychology
          </p>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="font-dm-serif text-[clamp(2.6rem,4.5vw,5rem)] leading-[1.04] tracking-tight mb-6 text-text"
        >
          Crafting{" "}
          <span className="italic" style={{ color: ORANGE }}>
            <TypeAnimation
              sequence={[
                "stories",
                2000,
                "brands",
                2000,
                "visuals",
                2000,
                "identities",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
          <br />
          <span className="text-text3">that resonate.</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-[14px] text-text2 leading-relaxed max-w-[340px] mb-8 font-inter"
        >
          Visual creator and UI/UX designer building brands, crafting
          experiences and telling stories that resonate and convert.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-2 mb-10"
        >
          {landingCreatorSkills.slice(0, 6).map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-semibold tracking-wider px-3 py-1.5 rounded-md text-text2 border border-border transition-all duration-200 bg-surface"
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLSpanElement;
                el.style.borderColor = `${ORANGE}99`;
                el.style.color = `${ORANGE}`;
                el.style.background = `rgba(${O},0.08)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLSpanElement;
                el.style.borderColor = "";
                el.style.color = "";
                el.style.background = "";
              }}
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <div
            className="relative overflow-hidden inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg font-syne text-[13px] font-semibold tracking-wide text-white transition-all duration-300 group clickable shadow-lg border border-transparent"
            style={{ background: ORANGE }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                `0 0 32px rgba(${O},0.6)`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
            }}
          >
            <div className="absolute inset-0 bg-bg2 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0" />
            <div className="relative z-10 flex items-center gap-2.5 transition-colors duration-300 group-hover:text-[#c2410c]">
              <span>View Creative Work</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(to right, transparent, rgba(${O},0.4), transparent)`,
        }}
      />
    </Link>
  );
}
