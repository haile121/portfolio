"use client";

import { devExperience } from "@/data/dev";

interface ExperienceSectionProps {
  theme: "dark" | "light";
  accentText: string;
}

export function ExperienceSection({
  theme,
  accentText,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="space-y-4 pt-4">
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
          Career Timeline
        </h2>
        <span
          className={`text-xs font-mono ${
            theme === "dark" ? "text-zinc-500" : "text-slate-500 font-medium"
          }`}
        >
          {devExperience.length} Positions
        </span>
      </div>

      <div className="space-y-3">
        {devExperience.map((exp) => (
          <div
            key={exp.role + exp.company}
            className={`p-4 sm:p-5 rounded-xl border transition-all ${
              theme === "dark"
                ? "bg-zinc-900/30 border-white/[0.07]"
                : "bg-white border-slate-200/90 shadow-sm"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5 font-sans">
              <div>
                <span className={`text-base font-bold ${accentText}`}>
                  {exp.role}
                </span>
                <span
                  className={`text-xs font-semibold ml-2 ${
                    theme === "dark"
                      ? "text-zinc-400"
                      : "text-slate-600 font-bold"
                  }`}
                >
                  @ {exp.company}
                </span>
              </div>
              <span
                className={`text-xs font-mono ${
                  theme === "dark"
                    ? "text-zinc-500"
                    : "text-slate-500 font-medium"
                }`}
              >
                {exp.date}
              </span>
            </div>
            {exp.bullets && exp.bullets.length > 0 ? (
              <ul
                className={`text-xs leading-relaxed space-y-1.5 list-disc list-outside pl-4 pt-1 ${
                  theme === "dark" ? "text-zinc-300" : "text-slate-700"
                }`}
              >
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            ) : (
              <p
                className={`text-xs leading-relaxed ${
                  theme === "dark" ? "text-zinc-300" : "text-slate-700"
                }`}
              >
                {exp.desc}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
