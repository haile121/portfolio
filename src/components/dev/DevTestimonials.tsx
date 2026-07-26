"use client";

import { motion } from "framer-motion";
import { devTestimonials } from "../../data/dev";

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

export function DevTestimonials() {
  return (
    <motion.section
      id="testimonials"
      className="px-8 md:px-16 pb-20 md:pb-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-baseline gap-5 mb-16">
        <span className="font-inter text-xs text-blue min-w-[40px] font-semibold">
          05
        </span>
        <h2 className="font-inter text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-tight leading-[1.1]">
          What people say
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {devTestimonials.map((quote, i) => (
          <motion.div
            variants={fadeUpVariant}
            key={quote.author}
            className="bg-bg p-10 md:p-12 hover:bg-surface transition-colors duration-300"
          >
            <span className="block font-inter text-6xl font-black text-blue leading-[0.6] mb-6">
              "
            </span>
            <p className="text-base leading-[1.8] text-text2 mb-7 italic">
              "{quote.text}"
            </p>
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-[15px] font-bold text-text2">
                {quote.avatar}
              </div>
              <div>
                <div className="text-sm font-bold text-text">
                  {quote.author}
                </div>
                <div className="text-xs text-text3 mt-0.5">{quote.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
