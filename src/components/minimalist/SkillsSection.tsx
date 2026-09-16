"use client";

import { devSkillsBox } from "@/data/dev";
import { creatorServices } from "@/data/creator";

interface SkillsSectionProps {
  persona: "code" | "design";
  theme: "dark" | "light";
  accentText: string;
}

export function SkillsSection({
  persona,
  theme,
  accentText,
}: SkillsSectionProps) {
  const items = persona === "code" ? devSkillsBox : creatorServices;

  return (
    <section id="skills" className="space-y-4 pt-4">
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
        <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-400">
          {persona === "code"
            ? "Technical Stack & Toolkit"
            : "Design Capabilities"}
        </h2>
        <span className="text-xs font-mono text-zinc-500">
          {items.length} Focus Areas
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <div
            key={item.name}
            className={`p-4 rounded-xl border font-sans ${
              theme === "dark"
                ? "bg-zinc-900/30 border-white/[0.07]"
                : "bg-white border-slate-200"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold">{item.name}</h3>
              <span className={`text-[10px] font-mono font-bold ${accentText}`}>
                [0{idx + 1}]
              </span>
            </div>
            <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
              {item.desc}
            </p>
            <div className="flex flex-wrap gap-1 font-mono text-[10px]">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-300 border border-zinc-700/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
