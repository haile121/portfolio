"use client";

import {
  Palette,
  Sparkles,
  Play,
  PenTool,
  LayoutTemplate,
  TrendingUp,
} from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "../dev/ScrollReveal";
import { creatorServices } from "../../data/creator";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Palette: <Palette size={20} />,
  Sparkles: <Sparkles size={20} />,
  Play: <Play size={20} />,
  PenTool: <PenTool size={20} />,
  LayoutTemplate: <LayoutTemplate size={20} />,
  TrendingUp: <TrendingUp size={20} />,
};

export function CreatorServices() {
  return (
    <section id="services" className="px-8 md:px-16 pb-20 md:pb-32">
      {/* Header — blur-in */}
      <ScrollReveal
        variant="blur-in"
        className="flex items-baseline gap-5 mb-16"
      >
        <span className="font-jetbrains text-xs text-[#f97316] min-w-[40px]">
          02
        </span>
        <h2 className="font-dm-serif text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-[1.1]">
          What I offer
        </h2>
        <div className="flex-1 h-px bg-border" />
      </ScrollReveal>

      {/* Grid — staggered scale-up card entries */}
      <ScrollReveal
        stagger
        staggerDelay={0.12}
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border"
      >
        {creatorServices.map((skill) => {
          const isStrikethrough = (skill as { strikethrough?: boolean })
            .strikethrough;
          return (
            <ScrollRevealItem
              variant="scale-up"
              key={skill.name}
              className={`bg-bg p-8 md:p-10 hover:bg-surface transition-colors duration-300 relative ${
                isStrikethrough ? "opacity-60 hover:opacity-80" : ""
              }`}
            >
              <div
                className={`w-11 h-11 rounded-lg flex items-center justify-center mb-5 ${
                  isStrikethrough
                    ? "bg-[#f97316]/5 text-[#f97316]/50"
                    : "bg-[#f97316]/10 text-[#f97316]"
                }`}
              >
                {SERVICE_ICONS[skill.icon]}
              </div>
              <h3
                className={`text-base font-bold mb-2.5 ${
                  isStrikethrough
                    ? "line-through decoration-[#f97316] decoration-2 text-text3"
                    : "text-text"
                }`}
              >
                {skill.name}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-4 ${
                  isStrikethrough
                    ? "line-through decoration-[#f97316]/70 decoration-2 text-text3"
                    : "text-text2"
                }`}
              >
                {skill.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border border-border tracking-wider ${
                      isStrikethrough
                        ? "line-through decoration-[#f97316]/60 bg-surface/50 text-text3/70"
                        : "bg-surface text-text3"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollRevealItem>
          );
        })}
      </ScrollReveal>
    </section>
  );
}
