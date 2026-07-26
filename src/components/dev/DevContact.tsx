"use client";

import { ContactForm } from "./ContactForm";
import { devSocialLinks } from "../../data/dev";

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
        <div className="text-[11px] font-bold tracking-[0.25em] uppercase opacity-50 mb-6">
          Let's work together
        </div>
        <h2 className="font-inter text-[clamp(3rem,6vw,6rem)] font-extrabold tracking-tight leading-[1.05] mb-16">
          Have a project
          <br />
          in <em className="italic">mind?</em>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* LEFT: Links */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.25em] uppercase opacity-40 mb-8">
              Find me on
            </div>
            <div className="flex flex-col gap-0.5">
              {devSocialLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 border-b border-[rgba(255,255,255,0.08)] dark:border-border text-inherit no-underline relative overflow-hidden transition-all clickable"
                >
                  <span className="absolute bottom-0 left-0 h-px bg-blue w-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                  <span className="text-lg font-bold tracking-tight group-hover:text-blue transition-colors">
                    {link.label}
                  </span>
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
