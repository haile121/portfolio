"use client";

import { motion } from "framer-motion";

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

export function DevAbout() {
  return (
    <motion.section
      id="about"
      className="px-8 md:px-16 py-20 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-baseline gap-5 mb-16">
        <span className="font-inter text-xs text-blue min-w-[40px] font-semibold">
          01
        </span>
        <h2 className="font-inter text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-tight leading-[1.1]">
          About me
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <p className="text-[17px] leading-[1.85] text-text2 mb-5">
            I'm a{" "}
            <strong className="text-text font-semibold">
              full-stack developer
            </strong>{" "}
            passionate about building digital experiences that don't just work ,
            they{" "}
            <span className="relative inline-block z-0 after:absolute after:bottom-0.5 after:-inset-x-1 after:h-1.5 after:bg-blue-dim after:-z-10 after:rounded-sm">
              feel remarkable
            </span>
            . I obsess over performance, accessibility, and the tiny details
            that separate good from great.
          </p>
          <p className="text-[17px] leading-[1.85] text-text2 mb-5">
            My work spans from architecting{" "}
            <strong className="text-text font-semibold">
              scalable backend systems
            </strong>{" "}
            to crafting pixel-perfect interfaces. I believe the best software is
            invisible, it just gets out of the way and lets people do what they
            came to do.
          </p>
          <div className="grid grid-cols-2 gap-px bg-border border border-border mt-12 w-full">
            {[
              { num: "4+", label: "Years experience" },
              { num: "30+", label: "Projects shipped" },
              { num: "12+", label: "Happy clients" },
              { num: "∞", label: "Cups of coffee" },
            ].map((stat, i) => (
              <motion.div
                variants={fadeUpVariant}
                key={stat.label}
                className="bg-bg p-6 md:p-7"
              >
                <div className="font-inter text-4xl md:text-5xl font-extrabold text-text tracking-tight leading-none">
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
          <div className="bg-surface border border-border rounded-lg p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue to-[#7c3aed]" />
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="font-jetbrains text-xs text-text3 ml-auto">
                ~/portfolio/me.ts
              </span>
            </div>
            <div className="font-jetbrains text-xs md:text-[13px] leading-loose text-text2 overflow-x-auto">
              <span className="text-blue">const</span>{" "}
              <span className="text-[#a78bfa]">me</span> = {"{"} <br />
              &nbsp;&nbsp;<span className="text-[#a78bfa]">name</span>:{" "}
              <span className="text-[#34d399]">"Hailemariam Agabzie"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-[#a78bfa]">role</span>:{" "}
              <span className="text-[#34d399]">"Full-Stack Dev"</span>,<br />
              &nbsp;&nbsp;<span className="text-[#a78bfa]">location</span>:{" "}
              <span className="text-[#34d399]">"Addis Ababa 🇪🇹"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-[#a78bfa]">stack</span>: [
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#34d399]">"React"</span>,{" "}
              <span className="text-[#34d399]">"Next.js"</span>,{" "}
              <span className="text-[#34d399]">"TypeScript"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#34d399]">"Node.js"</span>,{" "}
              <span className="text-[#34d399]">"PostgreSQL"</span>,{" "}
              <span className="text-[#34d399]">"Tailwind CSS"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#34d399]">"Docker"</span>,{" "}
              <span className="text-[#34d399]">"AWS"</span>,{" "}
              <span className="text-[#34d399]">"GraphQL"</span>,{" "}
              <span className="text-[#34d399]">"Prisma"</span>
              <br />
              &nbsp;&nbsp;],
              <br />
              &nbsp;&nbsp;<span className="text-[#a78bfa]">
                available
              </span>: <span className="text-[#10b981]">true</span>,
              <br />
              &nbsp;&nbsp;<span className="text-[#a78bfa]">hireable</span>:{" "}
              <span className="text-[#10b981]">true</span>,
              <br />
              &nbsp;&nbsp;
              <span className="text-text3">// Let's build something great</span>
              <br />
              {"}"}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
