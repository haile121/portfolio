"use client";

import { Trophy, Award, ArrowUpRight } from "lucide-react";
import { devRecognitions } from "../../data/dev";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";

export function DevRecognitions() {
  return (
    <section id="recognitions" className="px-8 md:px-16 pb-20 md:pb-32">
      {/* Section header — clean section 04 */}
      <ScrollReveal
        variant="slide-right"
        className="flex items-baseline gap-5 mb-16"
      >
        <span className="font-mono text-xs text-blue min-w-[32px] font-bold">
          05
        </span>
        <h2 className="font-inter text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-tight leading-[1.1]">
          Recognitions & Certificates
        </h2>
        <div className="flex-1 h-px bg-border" />
      </ScrollReveal>

      {/* Modern Minimal Grid */}
      <ScrollReveal
        stagger
        staggerDelay={0.08}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border"
      >
        {devRecognitions.map((cert, index) => (
          <ScrollRevealItem
            variant="scale-up"
            key={cert.title}
            className="group relative bg-bg p-7 md:p-8 hover:bg-surface transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top metadata row */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[11px] font-bold text-text3 group-hover:text-blue transition-colors">
                [{String(index + 1).padStart(2, "0")}]
              </span>
              <div className="w-8 h-8 rounded-full border border-border bg-surface flex items-center justify-center text-text3 group-hover:border-blue/50 group-hover:text-blue transition-all">
                <Award size={14} />
              </div>
            </div>

            {/* Main info */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-text tracking-tight group-hover:text-blue transition-colors leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs font-mono text-text3 font-medium">
                {cert.issuer}
              </p>
            </div>

            {/* Subtle hairline hover accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </ScrollRevealItem>
        ))}
      </ScrollReveal>
    </section>
  );
}
