"use client";

import {
  Zap,
  Wrench,
  Cloud,
  Paintbrush,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { devSkillsBox } from "../../data/dev";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";

const SKILL_ICONS: Record<string, React.ReactNode> = {
  "Frontend Development": <Zap size={20} />,
  "Backend & Systems": <Wrench size={20} />,
  "DevOps & Cloud": <Cloud size={20} />,
  "UI Engineering": <Paintbrush size={20} />,
  "Auth & Security": <ShieldCheck size={20} />,
  "AI & Data Workflows": <BarChart3 size={20} />,
};

export function DevSkills() {
  return (
    <section id="skills" className="px-8 md:px-16 pb-20 md:pb-32">
      {/* Section header — clean 02 */}
      <ScrollReveal
        variant="slide-left"
        className="flex items-baseline gap-5 mb-16"
      >
        <span className="font-mono text-xs text-blue min-w-[32px] font-bold">
          02
        </span>
        <h2 className="font-inter text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-tight leading-[1.1]">
          Technical skills
        </h2>
        <div className="flex-1 h-px bg-border" />
      </ScrollReveal>

      {/* Skill cards — stagger with alternating slide-left / slide-right */}
      <ScrollReveal
        stagger
        staggerDelay={0.1}
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border"
      >
        {devSkillsBox.map((skill, i) => (
          <ScrollRevealItem
            variant={i % 2 === 0 ? "slide-left" : "slide-right"}
            key={skill.name}
            className="bg-bg p-8 md:p-10 hover:bg-surface transition-colors duration-300"
          >
            <div className="w-11 h-11 rounded-lg bg-blue-light text-blue flex items-center justify-center mb-5">
              {SKILL_ICONS[skill.name] || <Zap size={20} />}
            </div>
            <h3 className="text-base font-bold mb-2.5 text-text">
              {skill.name}
            </h3>
            <p className="text-sm text-text2 leading-relaxed mb-4">
              {skill.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-bold tracking-wider uppercase text-text3 py-1.5 px-3 border border-border rounded-md backdrop-blur-xs bg-bg/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </ScrollRevealItem>
        ))}
      </ScrollReveal>
    </section>
  );
}
