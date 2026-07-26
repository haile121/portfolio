"use client";

import { motion } from "framer-motion";
import { devRecognitions } from "../../data/dev";

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

export function DevRecognitions() {
  return (
    <motion.section
      id="recognitions"
      className="px-8 md:px-16 pb-20 md:pb-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-baseline gap-5 mb-16">
        <span className="font-inter text-xs text-blue min-w-[40px] font-semibold">
          03.5
        </span>
        <h2 className="font-inter text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-tight leading-[1.1]">
          Recognitions & Certificates
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-border pt-10 mt-[-20px]">
        {devRecognitions.map((cert, i) => (
          <motion.div
            variants={fadeUpVariant}
            key={cert.title}
            className="bg-surface border border-border p-6 rounded-lg hover:border-blue transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-blue-light text-blue flex items-center justify-center mb-4 text-lg">
              🏆
            </div>
            <h3 className="text-[17px] font-bold text-text mb-2 group-hover:text-blue transition-colors">
              {cert.title}
            </h3>
            <p className="text-sm text-text2 font-medium">{cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
