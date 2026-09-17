"use client";

import { devStats } from "../../data/dev";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";

export function DevAbout() {
  return (
    <section id="about" className="px-8 md:px-16 py-20 md:py-32">
      {/* Section Header — clean 01 */}
      <ScrollReveal
        variant="clip-reveal"
        className="flex items-baseline gap-5 mb-16"
      >
        <span className="font-mono text-xs text-blue min-w-[32px] font-bold">
          01
        </span>
        <h2 className="font-inter text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-tight leading-[1.1]">
          About me
        </h2>
        <div className="flex-1 h-px bg-border" />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          {/* Text — blur-in */}
          <ScrollReveal variant="blur-in">
            <p className="text-[17px] leading-[1.85] text-text2 mb-5">
              I'm a{" "}
              <strong className="text-text font-semibold">
                full-stack developer
              </strong>{" "}
              passionate about building digital experiences that don't just work
              , they{" "}
              <span className="relative inline-block z-0 after:absolute after:bottom-0.5 after:-inset-x-1 after:h-1.5 after:bg-blue-dim after:-z-10 after:rounded-sm">
                feel remarkable
              </span>
              . I obsess over performance, accessibility, and the tiny details
              that separate good from great.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="blur-in" delay={0.15}>
            <p className="text-[17px] leading-[1.85] text-text2 mb-5">
              My work spans from architecting{" "}
              <strong className="text-text font-semibold">
                scalable backend systems
              </strong>{" "}
              to crafting pixel-perfect interfaces. I believe the best software
              is invisible, it just gets out of the way and lets people do what
              they came to do.
            </p>
          </ScrollReveal>

          {/* Stats grid — staggered scale-up */}
          <ScrollReveal
            stagger
            staggerDelay={0.1}
            className="grid grid-cols-2 gap-px bg-border border border-border mt-12 w-full"
          >
            {devStats.map((stat) => (
              <ScrollRevealItem
                variant="scale-up"
                key={stat.label}
                className="bg-bg p-6 md:p-7"
              >
                <div className="font-inter text-4xl md:text-5xl font-extrabold text-text tracking-tight leading-none">
                  {stat.num}
                </div>
                <div className="text-[11px] md:text-xs text-text3 font-semibold tracking-wider uppercase mt-2">
                  {stat.label}
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>

        {/* Code block — slide-right */}
        <ScrollReveal variant="slide-right" className="relative w-full">
          <div className="bg-surface border border-border rounded-lg p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue to-[#7c3aed]" />
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="font-jetbrains text-xs text-text3 ml-auto">
                ~/portfolio/hailemariam.json
              </span>
            </div>
            <div className="font-jetbrains text-xs md:text-[13px] leading-loose text-text2 overflow-x-auto">
              <span className="text-blue">const</span>{" "}
              <span className="text-[#a78bfa]">hailemariam</span> = {"{"} <br />
              &nbsp;&nbsp;<span className="text-[#a78bfa]">name</span>:{" "}
              <span className="text-[#34d399]">"Hailemariam Agabzie"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-[#a78bfa]">role</span>:{" "}
              <span className="text-[#34d399]">"Full-Stack Developer"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-[#a78bfa]">
                experience
              </span>: <span className="text-[#34d399]">"3+ Years"</span>,<br />
              &nbsp;&nbsp;<span className="text-[#a78bfa]">stack</span>: [
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#34d399]">"MERN"</span>,{" "}
              <span className="text-[#34d399]">"PERN"</span>,{" "}
              <span className="text-[#34d399]">"T3"</span>,{" "}
              <span className="text-[#34d399]">"JavaScript"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#34d399]">"TypeScript"</span>,{" "}
              <span className="text-[#34d399]">"Next.js"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#34d399]">"React"</span>,{" "}
              <span className="text-[#34d399]">"React Native"</span>,{" "}
              <span className="text-[#34d399]">"Flutter"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#34d399]">"Python"</span>,{" "}
              <span className="text-[#34d399]">"AI Integration"</span>,{" "}
              <span className="text-[#34d399]">"C++"</span>,{" "}
              <span className="text-[#34d399]">"Dart"</span>
              <br />
              &nbsp;&nbsp;],
              <br />
              &nbsp;&nbsp;
              <span className="text-[#a78bfa]">availableForWork</span>:{" "}
              <span className="text-[#10b981]">true</span>
              <br />
              {"}"}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
