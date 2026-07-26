"use client";

import { ArrowUpRight } from "lucide-react";

export function CreatorHero() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-8 md:px-16 pt-40 pb-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] font-dm-serif text-[clamp(120px,18vw,220px)] font-normal text-transparent pointer-events-none select-none tracking-tight opacity-50 [-webkit-text-stroke:1px_rgba(249,115,22,0.15)]">
        CREATE
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 w-full relative z-10 pt-12 lg:pt-0">
        {/* LEFT CONTENT */}
        <div className="flex-1 w-full max-w-[800px]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-full text-xs font-semibold tracking-wider text-text2 mb-4 w-fit">
            <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full animate-pulse shadow-[0_0_0_0_rgba(249,115,22,0.4)]" />
            Taking on new clients
          </div>
          <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#f97316] mb-7 flex items-center gap-3 before:w-8 before:h-px before:bg-current">
            UI/UX · Brand · Content
          </div>
          <h1 className="font-dm-serif text-[clamp(3.5rem,7vw,7rem)] leading-[1.02] tracking-tight mb-7 max-w-[900px]">
            Design that{" "}
            <em className="italic text-[#f97316] not-italic">moves</em>
            <br />
            people to <em className="italic text-[#f97316] not-italic">act.</em>
          </h1>
          <p className="text-[17px] text-text2 leading-relaxed max-w-[520px] mb-14">
            I craft visual identities, digital experiences, and content that
            build brands people love. Strategy meets aesthetics — every pixel
            has a purpose.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#f97316] text-white rounded-md font-syne text-sm font-bold tracking-wider relative overflow-hidden group hover:-translate-y-px hover:shadow-[0_12px_40px_rgba(249,115,22,0.3)] transition-all clickable"
            >
              <span className="absolute inset-0 bg-white/10 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
              <span className="relative z-10">See My Work</span>
              <ArrowUpRight size={16} className="relative z-10" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-[14px] bg-transparent text-text border-[1.5px] border-[#f97316] rounded-md font-syne text-sm font-semibold tracking-wider transition-all hover:bg-[#f97316] hover:text-white clickable"
            >
              Work together
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full max-w-[280px] lg:max-w-[400px] shrink-0 self-center lg:self-end relative group mb-10 lg:mb-0">
          <div className="absolute -inset-4 border border-[#f97316]/20 rounded-2xl md:rounded-[40px] transform group-hover:-rotate-2 group-hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>
          <div className="absolute -inset-4 border border-[#f97316]/10 rounded-2xl md:rounded-[40px] transform group-hover:rotate-3 group-hover:scale-[1.02] transition-all duration-700 delay-75 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>
          <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-2xl md:rounded-[40px] bg-surface shadow-2xl shadow-[#f97316]/10">
            <img
              src="/HaileSuit.jpg"
              alt="Hailemariam Agabzie"
              className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] grayscale group-hover:grayscale-0"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-9 right-8 md:right-16 flex flex-col items-center gap-2 text-text3 text-[11px] tracking-[0.15em] uppercase hidden md:flex z-20">
        <div className="w-px h-12 bg-gradient-to-b from-[#f97316] to-transparent animate-[scrollPulse_2s_ease-in-out_infinite] opacity-30 origin-top" />
        Scroll
      </div>
    </section>
  );
}
