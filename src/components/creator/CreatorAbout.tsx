"use client";

import {
  Palette,
  Sparkles,
  Play,
  PenTool,
  TrendingUp,
  LayoutTemplate,
} from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "../dev/ScrollReveal";
import { creatorStats, creatorToolBox } from "../../data/creator";

export function CreatorAbout() {
  return (
    <section id="about" className="px-8 md:px-16 py-20 md:py-32">
      {/* Section Header — clip-reveal */}
      <ScrollReveal
        variant="clip-reveal"
        className="flex items-baseline gap-5 mb-16"
      >
        <span className="font-jetbrains text-xs text-[#f97316] min-w-[40px]">
          01
        </span>
        <h2 className="font-dm-serif text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-[1.1]">
          About me
        </h2>
        <div className="flex-1 h-px bg-border" />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <ScrollReveal variant="blur-in">
            <p className="text-[17px] leading-[1.85] text-text2 mb-5">
              I'm a{" "}
              <strong className="text-text font-semibold">
                Senior Content Writer & Creator
              </strong>{" "}
              who lives at the intersection of strategic writing, brand
              storytelling, and digital media. I believe compelling content is{" "}
              <span className="relative inline-block z-0 after:absolute after:bottom-0.5 after:-inset-x-1 after:h-1.5 after:bg-[rgba(249,115,22,0.12)] after:-z-10 after:rounded-sm">
                never decorative text
              </span>{" "}
              — it's clarity engineered to convert.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="blur-in" delay={0.15}>
            <p className="text-[17px] leading-[1.85] text-text2 mb-5">
              From crafting high-impact brand messaging and editorial pieces to
              building{" "}
              <strong className="text-text font-semibold">
                multi-platform content strategies
              </strong>{" "}
              that earn millions of views, I turn audience attention into
              long-term brand equity.
            </p>
          </ScrollReveal>

          {/* Stats grid — staggered scale-up */}
          <ScrollReveal
            stagger
            staggerDelay={0.1}
            className="grid grid-cols-2 gap-px bg-border border border-border mt-12 w-full"
          >
            {creatorStats.map((stat) => (
              <ScrollRevealItem
                variant="scale-up"
                key={stat.label}
                className="bg-bg p-6 md:p-7"
              >
                <div className="font-dm-serif text-4xl md:text-5xl text-text tracking-tight leading-none">
                  {stat.num}
                </div>
                <div className="text-[11px] md:text-xs text-text3 font-semibold tracking-wider uppercase mt-2">
                  {stat.label}
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>

        {/* Right tools panel — slide-left */}
        <ScrollReveal variant="slide-left" className="relative w-full">
          <div
            className="bg-surface border border-border rounded-lg p-6 md:p-8 relative overflow-hidden h-full flex flex-col justify-between"
            style={{
              background: "var(--surface)",
              borderTop: "3px solid #f97316",
            }}
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-bg rounded-lg p-5 text-center flex flex-col items-center justify-center gap-2">
                <PenTool size={24} className="text-[#f97316]" />
                <div className="text-[11px] font-bold tracking-wider uppercase text-text3">
                  Content
                </div>
              </div>
              <div className="bg-bg rounded-lg p-5 text-center flex flex-col items-center justify-center gap-2">
                <TrendingUp size={24} className="text-[#f97316]" />
                <div className="text-[11px] font-bold tracking-wider uppercase text-text3">
                  Strategy
                </div>
              </div>
              <div className="bg-bg rounded-lg p-5 text-center flex flex-col items-center justify-center gap-2">
                <Palette size={24} className="text-[#f97316]" />
                <div className="text-[11px] font-bold tracking-wider uppercase text-text3">
                  Graphics
                </div>
              </div>
              <div className="bg-bg rounded-lg p-5 text-center flex flex-col items-center justify-center gap-2">
                <LayoutTemplate size={24} className="text-[#f97316]" />
                <div className="text-[11px] font-bold tracking-wider uppercase text-text3">
                  UI/UX
                </div>
              </div>
            </div>
            <div className="bg-bg rounded-lg p-5">
              <div className="text-xs font-bold tracking-wider uppercase text-text3 mb-3">
                Tools I use
              </div>
              <div className="flex gap-2 flex-wrap">
                {creatorToolBox.map((tool) => (
                  <span
                    key={tool}
                    className="text-[11px] font-semibold px-2.5 py-1 bg-surface text-text2 rounded-full border border-border tracking-wider"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
