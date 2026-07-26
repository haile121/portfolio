"use client";

import { creatorMarqueeItems } from "../../data/creator";

export function CreatorMarquee() {
  return (
    <div className="py-10 border-y border-border overflow-hidden whitespace-nowrap relative">
      <div className="inline-flex animate-[marquee_20s_linear_infinite]">
        {[1, 2].map((_, idx) => (
          <div key={idx} className="flex">
            {creatorMarqueeItems.map((tech) => (
              <span
                key={tech + idx}
                className="font-dm-serif text-[28px] text-text3 px-8 flex items-center gap-4 tracking-tight italic"
              >
                {tech}{" "}
                <span className="text-[#f97316] not-italic text-[8px]">●</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
