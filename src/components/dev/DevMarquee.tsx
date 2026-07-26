"use client";

import { devSkillsBar } from "../../data/dev";

export function DevMarquee() {
  return (
    <div className="py-10 border-y border-border overflow-hidden whitespace-nowrap relative">
      <div className="inline-flex animate-[marquee_20s_linear_infinite]">
        {[1, 2].map((_, idx) => (
          <div key={idx} className="flex">
            {devSkillsBar.map((tech) => (
              <span
                key={tech + idx}
                className="font-inter text-[28px] font-bold text-text3 px-8 flex items-center gap-4 tracking-tight"
              >
                {tech}{" "}
                <span className="text-blue not-italic text-[8px]">●</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
