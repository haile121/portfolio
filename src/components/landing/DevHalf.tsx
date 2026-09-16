"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { landingDevSkills } from "../../data/landing";

interface DevHalfProps {
  isDimmed?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function DevHalf({
  isDimmed = false,
  onMouseEnter,
  onMouseLeave,
}: DevHalfProps) {
  return (
    <Link
      href="/dev"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group relative flex-1 flex flex-col justify-between p-6 pt-16 md:p-10 md:pt-20 transition-all duration-500 overflow-hidden clickable panel-transition border-r border-border/50 ${
        isDimmed
          ? "opacity-35 filter blur-[0.6px] scale-[0.99]"
          : "opacity-100 scale-100"
      }`}
      style={{
        background: "var(--panel-dev-bg)",
      }}
    >
      {/* Hairline subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--text) 1px, transparent 1px), linear-gradient(to bottom, var(--text) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top Section Header */}
      <div className="relative z-10 space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-blue font-bold uppercase tracking-widest">
          <span>01</span>
          <span className="text-text3">//</span>
          <span>Developer Engine</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 space-y-4 my-auto py-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text leading-[1.1]">
          Software Engineering <br />
          <span className="text-blue font-serif italic font-normal">
            & Systems Architecture
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-text2 max-w-md font-sans leading-relaxed">
          Architecting resilient web & mobile applications, engineering robust
          APIs, and transforming complex logic into clean, performant software.
        </p>

        {/* Monospaced Skill Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1 text-xs font-mono">
          {landingDevSkills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-0.5 rounded border border-border bg-surface text-text2 group-hover:border-blue/50 group-hover:text-blue transition-colors text-[11px]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom CTA Action Button */}
      <div className="relative z-10 pt-3 flex items-center justify-between border-t border-border">
        <span className="text-xs font-mono text-text3 group-hover:text-text transition-colors">
          Explore Code & Architecture
        </span>
        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-border bg-surface group-hover:bg-blue group-hover:border-blue text-xs font-mono font-bold text-text group-hover:text-white transition-all shadow-sm">
          <span>Enter Engine</span>
          <ArrowUpRight
            size={13}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </div>
      </div>
    </Link>
  );
}
