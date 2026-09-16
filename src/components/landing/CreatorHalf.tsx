"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { landingCreatorSkills } from "../../data/landing";
import {
  FigmaIcon,
  AeIcon,
  AiIcon,
  PrIcon,
  PsIcon,
  CapCutIcon,
  FilmoraIcon,
  NotionIcon,
  CanvaIcon,
  LoomIcon,
} from "./ToolIcons";

interface CreatorHalfProps {
  isDimmed?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function CreatorHalf({
  isDimmed = false,
  onMouseEnter,
  onMouseLeave,
}: CreatorHalfProps) {
  return (
    <Link
      href="/creator"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group relative flex-1 flex flex-col justify-between p-6 pt-16 md:p-10 md:pt-20 transition-all duration-500 overflow-hidden clickable panel-transition border-l border-border/50 ${
        isDimmed
          ? "opacity-35 filter blur-[0.6px] scale-[0.99]"
          : "opacity-100 scale-100"
      }`}
      style={{
        background: "var(--panel-creator-bg)",
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
        <div className="flex items-center gap-2 text-xs font-mono text-orange-500 font-bold uppercase tracking-widest">
          <span>02</span>
          <span className="text-text3">//</span>
          <span>Creative Studio</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 space-y-4 my-auto py-3">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text leading-[1.1]">
          Content Strategy <br />
          <span className="text-orange-500 font-serif italic font-normal">
            & Brand Design
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-text2 max-w-md font-sans leading-relaxed">
          Crafting high-impact digital content, strategic brand stories, and
          intuitive visual product experiences built to connect with human
          audiences.
        </p>

        {/* Strategic Skills Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1 text-xs font-mono">
          {landingCreatorSkills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-0.5 rounded border border-border bg-surface text-text2 group-hover:border-orange-500/50 group-hover:text-orange-500 transition-colors text-[11px]"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Tool Logos Row - Icons Only */}
        <div className="flex items-center gap-2 pt-2 text-text3">
          <span className="text-[10px] font-mono text-text3 mr-1">Stack:</span>
          <div className="flex items-center gap-2 flex-wrap">
            <FigmaIcon size={18} />
            <AeIcon size={18} />
            <AiIcon size={18} />
            <PrIcon size={18} />
            <PsIcon size={18} />
            <CapCutIcon size={18} />
            <FilmoraIcon size={18} />
            <CanvaIcon size={18} />
            <LoomIcon size={18} />
            <NotionIcon size={18} />
          </div>
        </div>
      </div>

      {/* Bottom CTA Action Button */}
      <div className="relative z-10 pt-3 flex items-center justify-between border-t border-border">
        <span className="text-xs font-mono text-text3 group-hover:text-text transition-colors">
          Explore Design, Branding & Content
        </span>
        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-border bg-surface group-hover:bg-orange-500 group-hover:border-orange-500 text-xs font-mono font-bold text-text group-hover:text-white transition-all shadow-sm">
          <span>Enter Studio</span>
          <ArrowUpRight
            size={13}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </div>
      </div>
    </Link>
  );
}
