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
      <div
        className={`flex items-center justify-between border-b pb-3 ${
          theme === "dark" ? "border-zinc-800/80" : "border-slate-200"
        }`}
      >
        <h2
          className={`text-sm font-mono uppercase tracking-wider ${
            theme === "dark"
              ? "text-zinc-400 font-bold"
              : "text-slate-700 font-extrabold"
          }`}
        >
          {persona === "code"
            ? "Technical Stack & Toolkit"
            : "Design Capabilities"}
        </h2>
        <span
          className={`text-xs font-mono ${
            theme === "dark" ? "text-zinc-500" : "text-slate-500 font-medium"
          }`}
        >
          {items.length} Focus Areas
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <div
            key={item.name}
            className={`p-4 rounded-xl border font-sans transition-colors ${
              theme === "dark"
                ? "bg-zinc-900/30 border-white/[0.07]"
                : "bg-white border-slate-200/90 shadow-sm"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3
                className={`text-sm font-bold ${
                  theme === "dark" ? "text-zinc-100" : "text-slate-900"
                }`}
              >
                {item.name}
              </h3>
              <span className={`text-[10px] font-mono font-bold ${accentText}`}>
                [0{idx + 1}]
              </span>
            </div>
            <p
              className={`text-xs mb-3 leading-relaxed ${
                theme === "dark" ? "text-zinc-400" : "text-slate-600"
              }`}
            >
              {item.desc}
            </p>
            <div className="flex flex-wrap gap-1 font-mono text-[10px]">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className={`px-2 py-0.5 rounded border transition-colors ${
                    theme === "dark"
                      ? "bg-zinc-800/60 text-zinc-300 border-zinc-700/50"
                      : "bg-slate-100 text-slate-800 border-slate-200/90 font-semibold"
                  }`}
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
