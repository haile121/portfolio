"use client";

import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { devSocialLinks } from "../../data/dev";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";

export function DevContact() {
  return (
    <section
      id="contact"
      className="bg-slate text-bg px-8 md:px-16 py-20 md:py-32 relative overflow-hidden dark:bg-surface dark:text-text dark:border-t dark:border-border"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(0,85,255,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 font-inter text-[280px] font-black opacity-[0.04] select-none leading-none">
        {"}"}
      </div>
      <div className="relative z-10">
        {/* Section header — clean 06 with "Get in touch" */}
        <ScrollReveal
          variant="blur-in"
          className="flex items-baseline gap-5 mb-10"
        >
          <span className="font-mono text-xs text-blue min-w-[32px] font-bold">
            06
          </span>
          <h2 className="font-inter text-[clamp(2.2rem,4.5vw,3.8rem)] font-extrabold tracking-tight leading-[1.1] text-white dark:text-text">
            Get in touch
          </h2>
          <div className="flex-1 h-px bg-white/20 dark:bg-border/60" />
        </ScrollReveal>

        {/* Short & Clean Subtitle */}
        <ScrollReveal variant="blur-in" className="mb-10 max-w-xl">
          <p className="text-base text-slate-200 dark:text-text2 leading-relaxed font-sans">
            Have a project in mind or want to discuss technical opportunities?
            Drop a message below or connect directly.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* LEFT: Links — staggered slide-left */}
          <div>
            <ScrollReveal variant="blur-in">
              <div className="text-[11px] font-bold tracking-[0.25em] uppercase opacity-60 mb-8 text-white dark:text-text3">
                Connect Directly
              </div>
            </ScrollReveal>
            <ScrollReveal
              stagger
              staggerDelay={0.1}
              className="flex flex-col gap-0.5"
            >
              {devSocialLinks.map((link) => (
                <ScrollRevealItem
                  variant="slide-left"
                  as="a"
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 border-b border-[rgba(255,255,255,0.15)] dark:border-border text-inherit no-underline relative overflow-hidden transition-all clickable"
                >
                  <span className="absolute bottom-0 left-0 h-px bg-blue w-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                  <span className="text-lg font-bold tracking-tight group-hover:text-blue transition-colors">
                    {link.label}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 opacity-60 group-hover:opacity-100"
                  />
                </ScrollRevealItem>
              ))}
            </ScrollReveal>
          </div>

          {/* RIGHT: Contact Form — scale-up */}
          <ScrollReveal variant="scale-up">
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
