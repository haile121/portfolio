"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { devProjects } from "../../data/dev";

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

export function DevProjects() {
  return (
    <motion.section
      id="projects"
      className="px-8 md:px-16 pb-20 md:pb-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-baseline gap-5 mb-16">
        <span className="font-inter text-xs text-blue min-w-[40px] font-semibold">
          04
        </span>
        <h2 className="font-inter text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-tight leading-[1.1]">          Selected projects
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="flex flex-col gap-px bg-border">
        {devProjects.map((proj, i) => (
          <motion.a
            variants={fadeUpVariant}
            href={proj.href || "#"}
            target={proj.href ? "_blank" : undefined}
            rel={proj.href ? "noopener noreferrer" : undefined}
            key={proj.num}
            className={`group flex flex-col md:flex-row md:items-center gap-8 md:gap-10 p-8 md:p-12 lg:p-16 relative overflow-hidden transition-colors duration-300 clickable bg-bg hover:bg-surface`}
          >
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            {proj.isFeatured && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-light to-transparent pointer-events-none" />
            )}
            <div className="flex-1 relative z-10">
              <div className="font-inter text-[11px] text-text3 mb-3 font-semibold tracking-wider">
                {proj.num}
              </div>
              <h3 className="font-inter text-[clamp(1.5rem,2.5vw,2.2rem)] font-bold mb-3 tracking-tight">
                {proj.name}
              </h3>
              <p className="text-[15px] text-text2 leading-relaxed max-w-[600px] mb-5">
                {proj.desc}
              </p>
              <div className="flex gap-2 flex-wrap">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-bold tracking-wider uppercase text-text3 py-1.5 px-3 border border-border rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-[52px] h-[52px] border border-border rounded-full flex items-center justify-center text-text3 shrink-0 text-xl transition-all duration-300 group-hover:border-blue group-hover:text-blue group-hover:rotate-45 relative z-10 self-start md:self-center">
              <ArrowUpRight size={24} />
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
