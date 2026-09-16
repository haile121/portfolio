"use client";

import { ArrowUpRight } from "lucide-react";
import { devProjects } from "../../data/dev";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";
import { useState, useEffect } from "react";

function ProjectImageBackground({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="absolute right-6 md:right-24 top-1/2 -translate-y-1/2 pointer-events-none z-0 overflow-hidden select-none opacity-25 group-hover:opacity-60 transition-opacity duration-500">
      {/* Gradient mask to blend with text area */}
      <div className="absolute -inset-4 bg-gradient-to-r from-bg via-bg/40 to-transparent z-10" />

      {/* Single Fixed Frame containing cycling screenshots */}
      <div className="relative w-[210px] sm:w-[260px] md:w-[320px] aspect-[16/10] rounded-xl overflow-hidden border border-border/80 shadow-2xl bg-surface/80">
        {images.map((imgUrl, idx) => (
          <img
            key={imgUrl}
            src={imgUrl}
            alt={`${name} screenshot ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-in-out ${
              idx === currentIdx
                ? "opacity-100 scale-100 translate-x-0"
                : "opacity-0 scale-105 translate-x-4 pointer-events-none"
            }`}
          />
        ))}

        {/* Small cycle indicator dots at bottom right */}
        {images.length > 1 && (
          <div className="absolute bottom-2 right-3 z-20 flex gap-1">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIdx ? "w-4 bg-blue" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function DevProjects() {
  return (
    <section id="projects" className="px-8 md:px-16 pb-20 md:pb-32">
      {/* Section header — clean 05 */}
      <ScrollReveal
        variant="clip-reveal"
        className="flex items-baseline gap-5 mb-16"
      >
        <span className="font-mono text-xs text-blue min-w-[32px] font-bold">
          04
        </span>
        <h2 className="font-inter text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-tight leading-[1.1]">
          Selected projects
        </h2>
        <div className="flex-1 h-px bg-border" />
      </ScrollReveal>

      {/* Project rows — alternating slide-left/right */}
      <ScrollReveal
        stagger
        staggerDelay={0.12}
        className="flex flex-col gap-px bg-border"
      >
        {devProjects.map((proj, i) => (
          <ScrollRevealItem
            variant={i % 2 === 0 ? "slide-left" : "slide-right"}
            as="a"
            key={proj.num}
            href={proj.href || "#"}
            target={proj.href ? "_blank" : undefined}
            rel={proj.href ? "noopener noreferrer" : undefined}
            className={`group flex flex-col md:flex-row md:items-center gap-8 md:gap-10 p-8 md:p-12 lg:p-16 relative overflow-hidden transition-colors duration-300 clickable bg-bg hover:bg-surface`}
          >
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-20" />

            {proj.isFeatured && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-light to-transparent pointer-events-none z-0" />
            )}

            {/* Smooth cycling background image frame (0 layout expansion) */}
            {proj.images && proj.images.length > 0 && (
              <ProjectImageBackground images={proj.images} name={proj.name} />
            )}

            {/* Content Area (Exact original layout on top) */}
            <div className="flex-1 relative z-10">
              <div className="font-inter text-[11px] text-text3 mb-3 font-semibold tracking-wider">
                {proj.num}
              </div>
              <h3 className="font-inter text-[clamp(1.5rem,2.5vw,2.2rem)] font-bold mb-3 tracking-tight">
                {proj.name}
              </h3>
              <p className="text-[15px] text-text2 leading-relaxed max-w-[600px] mb-5">
                {proj.desc}
              </p>
              <div className="flex gap-2 flex-wrap">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-bold tracking-wider uppercase text-text3 py-1.5 px-3 border border-border rounded-md backdrop-blur-xs bg-bg/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Action Arrow Button (Exact original size & position) */}
            <div className="w-[52px] h-[52px] border border-border rounded-full flex items-center justify-center text-text3 shrink-0 text-xl transition-all duration-300 group-hover:border-blue group-hover:text-blue group-hover:rotate-45 relative z-10 self-start md:self-center bg-bg/80 backdrop-blur-xs">
              <ArrowUpRight size={24} />
            </div>
          </ScrollRevealItem>
        ))}
      </ScrollReveal>
    </section>
  );
}
