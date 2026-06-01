"use client";

import { motion } from "framer-motion";
import { Moon, Sun, ArrowUpRight } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";

export function CreatorPortfolio({
  onNavigate,
}: {
  onNavigate: (p: "landing" | "dev") => void;
}) {
  const { theme, toggleTheme } = useTheme();

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

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      className="fixed inset-0 overflow-y-auto overflow-x-hidden bg-bg text-text scroll-smooth"
    >
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 h-[72px] flex items-center justify-between border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="font-dm-serif text-lg">
          H.A.H {" "}
          <span className="text-[#f97316] font-jetbrains text-sm font-normal">
            / create
          </span>
        </div>
        <ul className="hidden md:flex items-center gap-10">
          {["About", "Work", "Services", "Experience", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#cr-${item.toLowerCase()}`}
                  className="text-[13px] font-semibold tracking-wider text-text2 uppercase relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-[#f97316] after:transition-all hover:text-text transition-colors clickable"
                >
                  {item}
                </a>
              </li>
            ),
          )}
        </ul>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 border border-border2 rounded-full bg-bg2 flex items-center justify-center transition-all hover:border-[#f97316] hover:text-[#f97316] clickable"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => onNavigate("landing")}
            className="text-xs font-semibold tracking-widest uppercase text-text3 border border-border px-4 py-2 rounded transition-colors hover:text-text hover:border-border2 clickable hidden sm:block"
          >
            ← Back
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-end px-8 md:px-16 pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] font-dm-serif text-[clamp(120px,18vw,220px)] font-normal text-transparent pointer-events-none select-none tracking-tight opacity-50 [-webkit-text-stroke:1px_rgba(249,115,22,0.15)]">
          CREATE
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-full text-xs font-semibold tracking-wider text-text2 mb-4 w-fit">
          <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full animate-pulse shadow-[0_0_0_0_rgba(249,115,22,0.4)]" />
          Taking on new clients
        </div>
        <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#f97316] mb-7 flex items-center gap-3 before:w-8 before:h-px before:bg-current">
          UI/UX · Brand · Content
        </div>
        <h1 className="font-dm-serif text-[clamp(3.5rem,7vw,7rem)] leading-[1.02] tracking-tight mb-7 max-w-[900px]">
          Design that{" "}
          <em className="italic text-[#f97316] not-italic">moves</em>
          <br />
          people to <em className="italic text-[#f97316] not-italic">act.</em>
        </h1>
        <p className="text-[17px] text-text2 leading-relaxed max-w-[520px] mb-14">
          I craft visual identities, digital experiences, and content that build
          brands people love. Strategy meets aesthetics — every pixel has a
          purpose.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="#cr-work"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#f97316] text-white rounded-md font-syne text-sm font-bold tracking-wider relative overflow-hidden group hover:-translate-y-px hover:shadow-[0_12px_40px_rgba(249,115,22,0.3)] transition-all clickable"
          >
            <span className="absolute inset-0 bg-white/10 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
            <span className="relative z-10">See My Work</span>
            <ArrowUpRight size={16} className="relative z-10" />
          </a>
          <a
            href="#cr-contact"
            className="inline-flex items-center gap-2.5 px-7 py-[14px] bg-transparent text-text border-[1.5px] border-[#f97316] rounded-md font-syne text-sm font-semibold tracking-wider transition-all hover:bg-[#f97316] hover:text-white clickable"
          >
            Work together
          </a>
        </div>
        <div className="absolute bottom-9 right-8 md:right-16 flex flex-col items-center gap-2 text-text3 text-[11px] tracking-[0.15em] uppercase hidden md:flex">
          <div className="w-px h-12 bg-gradient-to-b from-[#f97316] to-transparent animate-[scrollPulse_2s_ease-in-out_infinite] opacity-30 origin-top" />
          Scroll
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-10 border-y border-border overflow-hidden whitespace-nowrap relative">
        <div className="inline-flex animate-[marquee_20s_linear_infinite]">
          {[1, 2].map((_, idx) => (
            <div key={idx} className="flex">
              {[
                "Brand Identity",
                "UI/UX Design",
                "Motion Design",
                "Content Strategy",
                "Figma",
                "After Effects",
                "Illustrator",
                "Social Media",
                "Copywriting",
              ].map((tech) => (
                <span
                  key={tech + idx}
                  className="font-dm-serif text-[28px] text-text3 px-8 flex items-center gap-4 tracking-tight italic"
                >
                  {tech}{" "}
                  <span className="text-[#f97316] not-italic text-[8px]">
                    ●
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* ABOUT */}
      <motion.section
        id="cr-about"
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
              who lives at the intersection of design, storytelling, and
              strategy. I believe great design is{" "}
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
              {[
                { num: "5+", label: "Years designing" },
                { num: "40+", label: "Brands created" },
                { num: "2M+", label: "Content views" },
                { num: "25+", label: "Happy clients" },
              ].map((stat, i) => (
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
                  {[
                    "Figma",
                    "Illustrator",
                    "After Effects",
                    "Premiere Pro",
                    "Photoshop",
                    "Spline",
                  ].map((tool) => (
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

      {/* PORTFOLIO GRID */}
      <section id="cr-work" className="px-8 md:px-16 pb-20 md:pb-32">
        <div className="flex items-baseline gap-5 mb-16">
          <span className="font-jetbrains text-xs text-[#f97316] min-w-[40px]">
            02
          </span>
          <h2 className="font-dm-serif text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-[1.1]">
            Selected work
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-border">
          {/* Thumb 1 */}
          <div className="bg-bg aspect-[4/3] relative overflow-hidden group clickable">
            <div className="w-full h-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-5">
              <div className="font-dm-serif text-5xl text-white/10 text-center tracking-tight leading-[1.1]">
                NOVA
                <br />
                STUDIO
              </div>
            </div>
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-7 transition-opacity duration-300">
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#f97316] mb-2">
                Brand Identity
              </div>
              <div className="text-[17px] font-bold text-white tracking-tight">
                Nova Studio — Full Brand System
              </div>
            </div>
          </div>

          {/* Thumb 2 */}
          <div className="bg-bg relative overflow-hidden group clickable md:col-span-1 lg:row-span-2 min-h-[400px]">
            <div className="w-full h-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 bg-gradient-to-br from-[#fff8f0] to-[#ffffff] p-8 flex-col gap-4">
              <div className="w-full h-[180px] bg-white rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] flex items-center justify-center flex-col gap-2">
                <div className="w-[60px] h-[60px] bg-[#f97316] rounded-2xl flex items-center justify-center text-white text-2xl">
                  ●
                </div>
                <div className="font-bold text-sm text-[#0a0a0a]">
                  Pulse App
                </div>
                <div className="text-[11px] text-[#9a9a9a]">
                  Analytics Dashboard
                </div>
              </div>
              <div className="flex gap-3 w-full">
                <div className="flex-1 h-20 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.06)]" />
                <div className="flex-1 h-20 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.06)]" />
              </div>
            </div>
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-7 transition-opacity duration-300">
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#f97316] mb-2">
                UI/UX Design
              </div>
              <div className="text-[17px] font-bold text-white tracking-tight">
                Pulse — Analytics SaaS UI
              </div>
            </div>
          </div>

          {/* Thumb 3 */}
          <div className="bg-bg aspect-[4/3] relative overflow-hidden group clickable">
            <div className="w-full h-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 bg-gradient-to-tr from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 200 200" width="160" height="160">
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="rgba(249,115,22,0.3)"
                    strokeWidth="1"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="60"
                    fill="none"
                    stroke="rgba(249,115,22,0.2)"
                    strokeWidth="1"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="40"
                    fill="rgba(249,115,22,0.15)"
                    stroke="rgba(249,115,22,0.4)"
                    strokeWidth="1"
                  />
                  <text
                    x="100"
                    y="106"
                    textAnchor="middle"
                    fontFamily="var(--font-dm-serif)"
                    fontSize="14"
                    fill="rgba(255,255,255,0.8)"
                  >
                    ORBIT
                  </text>
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-7 transition-opacity duration-300">
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#f97316] mb-2">
                Logo Design
              </div>
              <div className="text-[17px] font-bold text-white tracking-tight">
                Orbit — Motion Studio Logo
              </div>
            </div>
          </div>

          {/* Thumb 4 */}
          <div className="bg-bg aspect-[4/3] relative overflow-hidden group clickable">
            <div className="w-full h-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 bg-[#f97316]">
              <div className="text-center font-dm-serif text-[52px] text-white leading-none tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                2.4M
                <br />
                <span className="text-[18px] italic">views</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-7 transition-opacity duration-300">
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#f97316] mb-2">
                Content Creation
              </div>
              <div className="text-[17px] font-bold text-white tracking-tight">
                Social Campaign — Viral Series
              </div>
            </div>
          </div>

          {/* Thumb 5 */}
          <div className="bg-bg aspect-[4/3] relative overflow-hidden group clickable">
            <div className="w-full h-full flex-col items-start justify-end p-7 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 bg-[#0a0a0a] flex">
              <div className="font-jetbrains text-[10px] text-[#f97316]/60 mb-3 tracking-widest">
                ANNUAL REPORT 2024
              </div>
              <div className="font-dm-serif text-2xl text-white/90 leading-[1.2] mb-4">
                Growth
                <br />
                <em className="italic">Beyond</em>
                <br />
                Limits
              </div>
              <div className="h-[2px] bg-gradient-to-r from-[#f97316] to-transparent w-[60%]" />
            </div>
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-7 transition-opacity duration-300">
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#f97316] mb-2">
                Editorial Design
              </div>
              <div className="text-[17px] font-bold text-white tracking-tight">
                Annual Report — Editorial Layout
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <motion.section
        id="cr-services"
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
          {[
            {
              icon: "✦",
              name: "Brand Identity",
              desc: "Complete visual identity systems — logo, typography, color, and guidelines that make your brand unmistakable.",
              tags: ["Logo", "Guidelines", "Typography"],
            },
            {
              icon: "◻",
              name: "UI/UX Design",
              desc: "Wireframes to polished high-fidelity designs and interactive prototypes. User-centered design backed by research.",
              tags: ["Figma", "Prototyping", "Research"],
            },
            {
              icon: "▶",
              name: "Motion & Video",
              desc: "Motion graphics, video editing, and animated content that captures attention and tells your story.",
              tags: ["After Effects", "Premiere", "Spline"],
            },
            {
              icon: "✍",
              name: "Content Strategy",
              desc: "Social media strategy, content calendars, copywriting, and campaign planning that drives real engagement.",
              tags: ["Strategy", "Copy", "Social"],
            },
            {
              icon: "◈",
              name: "Web Design",
              desc: "Beautiful landing pages, marketing sites, and web experiences designed for conversion. I also implement them.",
              tags: ["Webflow", "Next.js", "Framer"],
            },
            {
              icon: "◉",
              name: "Print & Editorial",
              desc: "Pitch decks, reports, brochures, and editorial layouts that look stunning in print and on screen.",
              tags: ["InDesign", "Print", "Editorial"],
            },
          ].map((skill, i) => (
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

      {/* EXPERIENCE */}
      <motion.section
        id="cr-experience"
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
          {[
            {
              date: "2023 — Present",
              role: "Lead UI/UX Designer",
              company: "CreativeFlow Agency · Full-time",
              desc: "Leading design for 10+ client brands simultaneously. Established the agency's design process, built a component library, and grew the design team from 1 to 4 people.",
            },
            {
              date: "2022 — 2023",
              role: "Brand Designer & Content Creator",
              company: "Self-employed · Freelance",
              desc: "Built 15+ brand identities, managed social content for 8 businesses, and grew a personal design account to 40k followers across platforms.",
            },
            {
              date: "2020 — 2022",
              role: "Junior Graphic Designer",
              company: "PrintMedia Studio · Full-time",
              desc: "Designed print and digital materials for 30+ clients. Learned the fundamentals of typography, color theory, and layout under two senior art directors.",
            },
          ].map((exp, i) => (
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
              <p className="text-[15px] text-text2 leading-relaxed">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        className="px-8 md:px-16 pb-20 md:pb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-baseline gap-5 mb-16">
          <span className="font-jetbrains text-xs text-[#f97316] min-w-[40px]">
            05
          </span>
          <h2 className="font-dm-serif text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-[1.1]">
            Client words
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {[
            {
              text: "They didn't just design a logo — they built us an entire identity that our customers immediately connected with. The brand feels both premium and approachable. Exactly what we needed.",
              author: "Amina Tesfaye",
              role: "Founder, Bloom Co.",
              avatar: "AT",
            },
            {
              text: "Our app's user experience went from confusing to intuitive after their UX audit and redesign. Conversion went up 45% in the first month. The attention to detail is extraordinary.",
              author: "Daniel Kebede",
              role: "CEO at NovaTech",
              avatar: "DK",
            },
          ].map((quote, i) => (
            <motion.div
              variants={fadeUpVariant}
              key={quote.author}
              className="bg-bg p-10 md:p-12 hover:bg-surface transition-colors duration-300"
            >
              <span className="block font-dm-serif text-6xl text-[#f97316] leading-[0.6] mb-6">
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

      {/* CONTACT */}
      <section
        id="cr-contact"
        className="bg-bg text-text px-8 md:px-16 py-20 md:pb-32 relative overflow-hidden border-t border-border before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_20%_50%,rgba(249,115,22,0.12),transparent_60%)] before:pointer-events-none"
      >
        <div className="absolute -right-10 top-1/2 -translate-y-1/2 font-dm-serif text-[280px] font-normal opacity-[0.04] select-none leading-none">
          ✦
        </div>
        <div className="max-w-[800px] relative z-10">
          <div className="text-[11px] font-bold tracking-[0.25em] uppercase opacity-50 mb-6 text-text3">
            Let's create together
          </div>
          <h2 className="font-dm-serif text-[clamp(3rem,6vw,6rem)] tracking-tight leading-[1.05] mb-12">
            Ready to build
            <br />
            something{" "}
            <em className="italic text-[#f97316] not-italic">great?</em>
          </h2>
          <div className="flex flex-col gap-0.5">
            {["hello@youcreate.co", "Instagram", "Behance", "Dribbble"].map(
              (link) => (
                <a
                  href="#"
                  key={link}
                  className="group flex items-center justify-between py-6 border-b border-border text-inherit no-underline relative overflow-hidden transition-all clickable"
                >
                  <span className="absolute bottom-0 left-0 h-px bg-[#f97316] w-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                  <span className="text-[22px] font-bold tracking-tight group-hover:text-[#f97316] transition-colors">
                    {link}
                  </span>
                  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              ),
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between border-t border-border bg-bg gap-4 relative z-10">
        <div className="text-[13px] text-text3">
          © 2026 Your Name · Creative Portfolio
        </div>
        <button
          onClick={() => onNavigate("dev")}
          className="text-[13px] text-text3 flex items-center gap-2 hover:text-text transition-colors clickable bg-transparent border-none"
        >
          ← Switch to Dev side
        </button>
      </footer>
    </motion.div>
  );
}
