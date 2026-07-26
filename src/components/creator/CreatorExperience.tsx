"use client";

import { motion } from "framer-motion";
import { creatorExperience } from "../../data/creator";

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

export function CreatorExperience() {
  return (
    <motion.section
      id="experience"
      className="px-8 md:px-16 pb-20 md:pb-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-baseline gap-5 mb-16">
        <span className="font-jetbrains text-xs text-[#f97316] min-w-[40px]">
          04
        </span>
        <h2 className="font-dm-serif text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-[1.1]">
          Experience
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="flex flex-col border-l border-border ml-5">
        {creatorExperience.map((exp, i) => (
          <motion.div
            variants={fadeUpVariant}
            key={exp.date}
            className="pl-12 pb-14 relative before:absolute before:-left-[5px] before:top-1.5 before:w-[9px] before:h-[9px] before:bg-bg before:border-2 before:border-[#f97316] before:rounded-full hover:before:bg-[#f97316] before:transition-colors"
          >
            <div className="font-jetbrains text-[11px] text-[#f97316] mb-2 tracking-wider">
              {exp.date}
            </div>
            <div className="text-[19px] font-bold mb-1 text-text">
              {exp.role}
            </div>
            <div className="text-sm text-text2 font-medium mb-4">
              {exp.company}
            </div>
            <p className="text-[15px] text-text2 leading-relaxed">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
