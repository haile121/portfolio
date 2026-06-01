"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";

interface LandingPageProps {
  onNavigate: (page: "dev" | "creator") => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      key="landing"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 flex flex-col md:flex-row overflow-y-auto overflow-x-hidden bg-bg"
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 md:px-16 md:py-7 flex items-center justify-between pointer-events-none">
        <div className="font-dm-serif text-xl tracking-tight pointer-events-auto">
          H.A.H
        </div>
        <div className="flex items-center gap-5 pointer-events-auto">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 border border-border2 rounded-full bg-bg2 flex items-center justify-center transition-all hover:border-blue hover:text-blue clickable"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      {/* DEV HALF */}
      <div
        onClick={() => onNavigate("dev")}
        className="group relative flex-1 flex flex-col justify-end p-8 md:p-16 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:flex-[1.08] cursor-none clickable before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:pointer-events-none before:bg-[radial-gradient(ellipse_at_30%_80%,rgba(0,85,255,0.08)_0%,transparent_60%)]"
      >
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(var(--color-text)_1px,transparent_1px),linear-gradient(90deg,var(--color-text)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none transition-opacity duration-400 group-hover:opacity-10 dark:opacity-5 dark:group-hover:opacity-10" />

        <div className="absolute top-[15%] right-[10%] font-jetbrains text-[11px] leading-loose text-text3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none whitespace-pre hidden md:block">
          <span className="text-blue">const</span> developer = {"{\n"}
          {"  "}
          <span className="text-[#10b981]">name</span>:{" "}
          <span className="text-[#f59e0b]">"Hailemariam Agabzie"</span>,{"\n"}
          {"  "}
          <span className="text-[#10b981]">stack</span>: [
          <span className="text-[#f59e0b]">"React"</span>,{" "}
          <span className="text-[#f59e0b]">"Next.js"</span>,{"\n"}
          {"    "}
          <span className="text-[#f59e0b]">"Node.js"</span>,{" "}
          <span className="text-[#f59e0b]">"Express JS"</span>,{"\n"}
          {"    "}
          <span className="text-[#f59e0b]">"MySQL"</span>,{" "}
          <span className="text-[#f59e0b]">"PostgreSQL"</span>],{"\n"}
          {"  "}
          <span className="text-[#10b981]">available</span>:{" "}
          <span className="text-blue">true</span>
          {"\n"}
          {"}"}
        </div>

        <div className="relative z-10">
          <div className="text-[11px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-text3 mb-6 flex items-center gap-3 before:content-[''] before:w-7 before:h-[1px] before:bg-text3 drop-shadow-sm">
            Developer me
          </div>
          <h2 className="font-dm-serif text-[clamp(3rem,5vw,5.5rem)] leading-[1.05] tracking-tight mb-5">
            Building the
            <br />
            <em className="italic text-blue not-italic">web of tomorrow</em>
          </h2>

          <div className="flex flex-wrap gap-2 mb-8">
            {["React", "Next.js", "TypeScript", "Node", "Postgres"].map(
              (skill) => (
                <span
                  key={skill}
                  className="text-[11px] font-semibold tracking-wider px-3 py-1.5 rounded-full bg-surface text-text2 border border-border transition-all duration-200 group-hover:border-border2 hover:!bg-blue-light hover:!text-blue hover:!border-blue"
                >
                  {skill}
                </span>
              ),
            )}
          </div>

          <p className="text-[15px] text-text2 leading-relaxed max-w-[340px] mb-10">
            Full-stack engineer crafting scalable, performant digital products —
            from pixel-perfect UIs to robust backend systems.
          </p>

          <button className="inline-flex items-center gap-3 px-7 py-3.5 border-[1.5px] border-blue rounded-md font-syne text-[14px] font-semibold tracking-wider text-blue bg-transparent transition-all duration-300 relative overflow-hidden group/btn hover:text-white clickable">
            <span className="absolute inset-0 bg-blue -translate-x-[101%] group-hover/btn:translate-x-0 transition-transform duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
            <span className="relative z-10">View Dev Portfolio</span>
            <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="relative md:w-px md:h-auto w-full h-px bg-border2 shrink-0 z-10 flex items-center justify-center">
        <div className="absolute md:-rotate-90 bg-bg px-2 py-4 md:px-4 md:py-2 text-[10px] font-bold tracking-[0.25em] text-text3">
          OR
        </div>
      </div>

      {/* CREATOR HALF */}
      <div
        onClick={() => onNavigate("creator")}
        className="group relative flex-1 flex flex-col justify-end p-8 md:p-16 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:flex-[1.08] cursor-none clickable before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:pointer-events-none before:bg-[radial-gradient(ellipse_at_70%_80%,rgba(255,140,50,0.07)_0%,transparent_60%)]"
      >
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,var(--color-text)_1.5px,transparent_1.5px)] bg-[size:32px_32px] pointer-events-none transition-opacity duration-400 group-hover:opacity-[0.08] dark:opacity-10 dark:group-hover:opacity-15" />

        <div className="absolute top-[12%] left-[8%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pointer-events-none hidden md:block">
          <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
            <rect
              x="0"
              y="0"
              width="56"
              height="56"
              rx="4"
              fill="#f97316"
              opacity="0.15"
            />
            <rect
              x="64"
              y="0"
              width="56"
              height="24"
              rx="4"
              fill="#f97316"
              opacity="0.1"
            />
            <rect
              x="64"
              y="32"
              width="56"
              height="24"
              rx="4"
              fill="#f97316"
              opacity="0.07"
            />
            <rect
              x="0"
              y="64"
              width="120"
              height="36"
              rx="4"
              fill="#f97316"
              opacity="0.06"
            />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="text-[11px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-text3 mb-6 flex items-center gap-3 before:content-[''] before:w-7 before:h-[1px] before:bg-text3 drop-shadow-sm">
            Creator me
          </div>
          <h2 className="font-dm-serif text-[clamp(3rem,5vw,5.5rem)] leading-[1.05] tracking-tight mb-5 text-text">
            Visual stories &<br />
            <em className="italic text-[#f97316] not-italic">brand identity</em>
          </h2>

          <div className="flex flex-wrap gap-2 mb-8">
            {["UI/UX", "Brand Design", "Motion", "Content", "Figma"].map(
              (skill) => (
                <span
                  key={skill}
                  className="text-[11px] font-semibold tracking-wider px-3 py-1.5 rounded-full bg-surface text-text2 border border-border transition-all duration-200 group-hover:border-border2 hover:!bg-[#f97316]/10 hover:!text-[#f97316] hover:!border-[#f97316]"
                >
                  {skill}
                </span>
              ),
            )}
          </div>

          <p className="text-[15px] text-text2 leading-relaxed max-w-[340px] mb-10">
            Visual creator and UI/UX designer building brands, crafting
            experiences and telling stories that resonate and convert.
          </p>

          <button className="inline-flex items-center gap-3 px-7 py-3.5 border-[1.5px] border-[#f97316] rounded-md font-syne text-[14px] font-semibold tracking-wider text-[#f97316] bg-transparent transition-all duration-300 relative overflow-hidden group/btn hover:text-white clickable">
            <span className="absolute inset-0 bg-[#f97316] -translate-x-[101%] group-hover/btn:translate-x-0 transition-transform duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
            <span className="relative z-10">View Creative Work</span>
            <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
