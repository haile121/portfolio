"use client";

import { motion } from "framer-motion";
import { creatorStats, creatorToolBox } from "../../data/creator";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export function CreatorAbout() {
  return (
    <motion.section
      id="about"
      className="px-8 md:px-16 py-20 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-baseline gap-5 mb-16">
        <span className="font-jetbrains text-xs text-[#f97316] min-w-[40px]">
          01
        </span>
        <h2 className="font-dm-serif text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-[1.1]">
          About me
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <p className="text-[17px] leading-[1.85] text-text2 mb-5">
            I'm a{" "}
            <strong className="text-text font-semibold">
              multidisciplinary creator
            </strong>{" "}
            who lives at the intersection of design, storytelling, and strategy.
            I believe great design is{" "}
            <span className="relative inline-block z-0 after:absolute after:bottom-0.5 after:-inset-x-1 after:h-1.5 after:bg-[rgba(249,115,22,0.12)] after:-z-10 after:rounded-sm">
              never decoration
            </span>{" "}
            — it's communication made visual.
          </p>
          <p className="text-[17px] leading-[1.85] text-text2 mb-5">
            From building brand identities from scratch to designing{" "}
            <strong className="text-text font-semibold">
              intuitive product interfaces
            </strong>{" "}
            to creating content that earns millions of impressions, I bring a
            holistic creative eye to every project.
          </p>
          <div className="grid grid-cols-2 gap-px bg-border border border-border mt-12 w-full">
            {creatorStats.map((stat, i) => (
              <motion.div
                variants={fadeUpVariant}
                key={stat.label}
                className="bg-bg p-6 md:p-7"
              >
                <div className="font-dm-serif text-4xl md:text-5xl text-text tracking-tight leading-none">
                  {stat.num}
                </div>
                <div className="text-[11px] md:text-xs text-text3 font-semibold tracking-wider uppercase mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div variants={fadeUpVariant} className="relative w-full">
          <div
            className="bg-surface border border-border rounded-lg p-6 md:p-8 relative overflow-hidden h-full flex flex-col justify-between"
            style={{
              background: "var(--surface)",
              borderTop: "3px solid #f97316",
            }}
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-bg rounded-lg p-5 text-center flex flex-col items-center justify-center">
                <div className="text-2xl mb-1 text-text">🎨</div>
                <div className="text-[11px] font-bold tracking-wider uppercase text-text3">
                  UI/UX
                </div>
              </div>
              <div className="bg-bg rounded-lg p-5 text-center flex flex-col items-center justify-center">
                <div className="text-2xl mb-1 text-text">✦</div>
                <div className="text-[11px] font-bold tracking-wider uppercase text-text3">
                  Branding
                </div>
              </div>
              <div className="bg-bg rounded-lg p-5 text-center flex flex-col items-center justify-center">
                <div className="text-2xl mb-1 text-text">▶</div>
                <div className="text-[11px] font-bold tracking-wider uppercase text-text3">
                  Motion
                </div>
              </div>
              <div className="bg-bg rounded-lg p-5 text-center flex flex-col items-center justify-center">
                <div className="text-2xl mb-1 text-text">✍</div>
                <div className="text-[11px] font-bold tracking-wider uppercase text-text3">
                  Content
                </div>
              </div>
            </div>
            <div className="bg-bg rounded-lg p-5">
              <div className="text-xs font-bold tracking-wider uppercase text-text3 mb-3">
                Tools I use
              </div>
              <div className="flex gap-2 flex-wrap">
                {creatorToolBox.map((tool) => (
                  <span
                    key={tool}
                    className="text-[11px] font-semibold px-2.5 py-1 bg-surface text-text2 rounded-full border border-border tracking-wider"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
