"use client";

import { motion } from "framer-motion";
import { creatorServices } from "../../data/creator";

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

export function CreatorServices() {
  return (
    <motion.section
      id="services"
      className="px-8 md:px-16 pb-20 md:pb-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-baseline gap-5 mb-16">
        <span className="font-jetbrains text-xs text-[#f97316] min-w-[40px]">
          03
        </span>
        <h2 className="font-dm-serif text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-[1.1]">
          What I offer
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {creatorServices.map((skill, i) => (
          <motion.div
            variants={fadeUpVariant}
            key={skill.name}
            className="bg-bg p-8 md:p-10 hover:bg-surface transition-colors duration-300"
          >
            <div className="w-11 h-11 rounded-lg bg-[#f97316]/10 text-[#f97316] flex items-center justify-center mb-5 text-xl">
              {skill.icon}
            </div>
            <h3 className="text-base font-bold mb-2.5 text-text">
              {skill.name}
            </h3>
            <p className="text-sm text-text2 leading-relaxed mb-4">
              {skill.desc}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold px-2.5 py-1 bg-surface text-text3 rounded-full border border-border tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
