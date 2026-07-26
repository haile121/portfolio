"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowUpRight, Terminal, Code2 } from "lucide-react";
import { landingDevSkills } from "../../data/landing";
import { WaveCanvas } from "./WaveCanvas";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function DevHalf() {
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
      href="/dev"
      onMouseMove={handleMouseMove}
      className="group relative flex-1 flex flex-col justify-between p-8 pt-28 md:p-16 md:pt-32 overflow-hidden cursor-none clickable transition-colors duration-500"
      style={{ background: "var(--panel-dev-bg)" }}
    >
      {/* Deep radial gradient layers */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 20% 90%, rgba(0,85,255,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 10%, rgba(100,150,255,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Animated flowing net canvas — reacts to mouse */}
      <WaveCanvas accentRgb="0,85,255" />

      {/* Cursor-following soft glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(ellipse 45% 45% at var(--glow-x, 30%) var(--glow-y, 70%), rgba(0,85,255,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Floating terminal card — xl only */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
        className="absolute top-[10%] right-[4%] hidden xl:block pointer-events-none"
        style={{ animation: "float 7s ease-in-out infinite" }}
      >
        <div
          className="rounded-xl border border-border/50 overflow-hidden"
          style={{
            background: "var(--bg2)",
            opacity: 0.85,
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
          }}
        >
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/40">
            <div className="w-2 h-2 rounded-full bg-red-500/70" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
            <Terminal size={9} className="ml-1.5 text-text3/50" />
          </div>
          <div className="px-4 py-2.5 font-jetbrains text-[9.5px] leading-[1.8] min-w-[190px]">
            <p>
              <span className="text-blue/80">const</span>{" "}
              <span className="text-text font-medium">dev</span>{" "}
              <span className="text-text3">= {"{"}</span>
            </p>
            <p className="pl-3">
              <span className="text-[#059669] dark:text-emerald-400">name</span>
              <span className="text-text3">: </span>
              <span className="text-[#d97706] dark:text-amber-300">
                &quot;Hailemariam&quot;
              </span>
            </p>
            <p className="pl-3">
              <span className="text-[#059669] dark:text-emerald-400">
                builds
              </span>
              <span className="text-text3">: [</span>
              <span className="text-[#d97706] dark:text-amber-300">
                &quot;Web&quot;
              </span>
              <span className="text-text3">, </span>
              <span className="text-[#d97706] dark:text-amber-300">
                &quot;Mobile&quot;
              </span>
              <span className="text-text3">, </span>
              <span className="text-[#d97706] dark:text-amber-300">
                &quot;ERP&quot;
              </span>
              <span className="text-text3">]</span>
            </p>
            <p className="pl-3">
              <span className="text-[#059669] dark:text-emerald-400">open</span>
              <span className="text-text3">: </span>
              <span className="text-blue">true</span>
            </p>
            <p>
              <span className="text-text3">{"}"}</span>
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
          <div className="flex items-center gap-2 mb-2 text-blue/80">
            <Code2 size={14} strokeWidth={2.5} />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase mt-0.5">
              Developer
            </span>
          </div>
          <p className="text-[10px] font-jetbrains uppercase tracking-widest text-text3/70 ml-6">
            // Logic meets architecture
          </p>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="font-dm-serif text-[clamp(2.6rem,4.5vw,5rem)] leading-[1.04] tracking-tight mb-6 text-text"
        >
          Building{" "}
          <span className="text-blue italic">
            <TypeAnimation
              sequence={[
                "the web",
                2000,
                "products",
                2000,
                "systems",
                2000,
                "platforms",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
          <br />
          <span className="text-text3">that scale.</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-[14px] text-text2 leading-relaxed max-w-[340px] mb-8 font-inter"
        >
          Full-stack engineer crafting scalable, performant digital products;
          from pixel-perfect UIs to robust backend systems.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-2 mb-10"
        >
          {landingDevSkills.map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-semibold tracking-wider px-3 py-1.5 rounded-md text-text2 border border-border transition-all duration-200 hover:border-blue/60 hover:text-blue hover:bg-blue/5 bg-surface"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="relative overflow-hidden inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-blue font-syne text-[13px] font-semibold tracking-wide text-white transition-all duration-300 group shadow-lg shadow-blue/20 clickable hover:shadow-blue/40 border border-transparent">
            <div className="absolute inset-0 bg-bg2 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0" />
            <div className="relative z-10 flex items-center gap-2.5 transition-colors duration-300 group-hover:text-blue">
              <span>View Dev Portfolio</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/40 to-transparent" />
    </Link>
  );
}
