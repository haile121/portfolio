"use client";

import { ArrowUpRight } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "../dev/ScrollReveal";
import { creatorContactLinks } from "../../data/creator";

export function CreatorContact() {
  return (
    <section
      id="contact"
      className="bg-bg text-text px-8 md:px-16 py-20 md:pb-32 relative overflow-hidden border-t border-border before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_20%_50%,rgba(249,115,22,0.12),transparent_60%)] before:pointer-events-none"
    >
      {/* Decorative background word */}
      <div className="absolute -right-8 top-1/2 -translate-y-1/2 font-dm-serif text-[200px] font-normal opacity-[0.03] select-none leading-none tracking-tight pointer-events-none">
        CREATE
      </div>
      <div className="max-w-[800px] relative z-10">
        <ScrollReveal variant="clip-reveal">
          <div className="text-[11px] font-bold tracking-[0.25em] uppercase opacity-50 mb-6 text-text3">
            Let's create together
          </div>
          <h2 className="font-dm-serif text-[clamp(3rem,6vw,6rem)] tracking-tight leading-[1.05] mb-12">
            Ready to build
            <br />
            something{" "}
            <em className="italic text-[#f97316] not-italic">great?</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal
          stagger
          staggerDelay={0.1}
          className="flex flex-col gap-0.5"
        >
          {creatorContactLinks.map((link) => (
            <ScrollRevealItem
              variant="fade-up"
              key={link}
              className="group flex items-center justify-between py-6 border-b border-border text-inherit no-underline relative overflow-hidden transition-all clickable"
            >
              <span className="absolute bottom-0 left-0 h-px bg-[#f97316] w-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
              <span className="text-[22px] font-bold tracking-tight group-hover:text-[#f97316] transition-colors">
                {link}
              </span>
              <ArrowUpRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 opacity-60 group-hover:opacity-100 group-hover:text-[#f97316]"
              />
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
