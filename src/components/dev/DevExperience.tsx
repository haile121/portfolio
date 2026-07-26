"use client";

import { motion } from "framer-motion";
import { devExperience } from "../../data/dev";

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

export function DevExperience() {
  return (
    <motion.section
      id="experience"
      className="px-8 md:px-16 pb-20 md:pb-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-baseline gap-5 mb-16">
        <span className="font-inter text-xs text-blue min-w-[40px] font-semibold">
          03
        </span>
        <h2 className="font-inter text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-tight leading-[1.1]">
          Experience
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="flex flex-col border-l border-border ml-5">
        {devExperience.map((exp, i) => (
          <motion.div
            variants={fadeUpVariant}
            key={exp.date}
            className="pl-12 pb-14 relative before:absolute before:-left-[5px] before:top-1.5 before:w-[9px] before:h-[9px] before:bg-bg before:border-2 before:border-blue before:rounded-full hover:before:bg-blue before:transition-colors"
          >
            <div className="font-inter text-[11px] text-blue mb-2 tracking-wider font-semibold">
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
