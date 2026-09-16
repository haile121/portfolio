"use client";

import { devExperience, devCommunity, ExperienceItem } from "../../data/dev";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";

function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  return (
    <>
      <div className="font-inter text-[11px] text-blue mb-2 tracking-wider font-semibold">
        {exp.date}
      </div>
      <div className="text-[19px] font-bold mb-1 text-text">{exp.role}</div>
      <div className="text-sm text-text2 font-medium mb-4">{exp.company}</div>
      {exp.bullets && exp.bullets.length > 0 ? (
        <ul className="space-y-2 text-[14px] text-text2 leading-relaxed list-disc list-inside marker:text-blue">
          {exp.bullets.map((b, i) => (
            <li key={i} className="pl-1">
              {b}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[15px] text-text2 leading-relaxed">{exp.desc}</p>
      )}
    </>
  );
}

export function DevExperience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="px-8 md:px-16 pb-20 md:pb-32">
      {/* Section header — clean 03 */}
      <ScrollReveal
        variant="blur-in"
        className="flex items-baseline gap-5 mb-16"
      >
        <span className="font-mono text-xs text-blue min-w-[32px] font-bold">
          03
        </span>
        <h2 className="font-inter text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-tight leading-[1.1]">
          Experience
        </h2>
        <div className="flex-1 h-px bg-border" />
      </ScrollReveal>

      {/* Work Experience Timeline */}
      <div ref={timelineRef} className="relative ml-5">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute left-0 top-0 bottom-0 w-px bg-blue"
        />

        <ScrollReveal
          stagger
          staggerDelay={0.15}
          as="div"
          className="flex flex-col"
        >
          {devExperience.map((exp) => (
            <ScrollRevealItem
              variant="fade-up"
              key={exp.date + exp.role}
              className="pl-12 pb-14 relative before:absolute before:-left-[5px] before:top-1.5 before:w-[9px] before:h-[9px] before:bg-bg before:border-2 before:border-blue before:rounded-full hover:before:bg-blue before:transition-colors"
            >
              <ExperienceCard exp={exp} />
            </ScrollRevealItem>
          ))}
        </ScrollReveal>

        {/* Community Impact & Extracurricular Leadership Header */}
        <ScrollReveal
          variant="fade-up"
          className="mt-12 mb-10 pt-8 border-t border-border flex items-baseline gap-4"
        >
          <h3 className="font-inter text-xl md:text-2xl font-bold tracking-tight text-text">
            Community Impact & Leadership
          </h3>
          <span className="text-xs font-mono text-blue font-semibold">
            Extracurricular
          </span>
        </ScrollReveal>

        {/* Community Impact Timeline */}
        <ScrollReveal
          stagger
          staggerDelay={0.15}
          as="div"
          className="flex flex-col"
        >
          {devCommunity.map((comm) => (
            <ScrollRevealItem
              variant="fade-up"
              key={comm.date + comm.role}
              className="pl-12 pb-12 relative before:absolute before:-left-[5px] before:top-1.5 before:w-[9px] before:h-[9px] before:bg-bg before:border-2 before:border-blue before:rounded-full hover:before:bg-blue before:transition-colors"
            >
              <ExperienceCard exp={comm} />
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
