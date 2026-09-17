"use client";

import { useState } from "react";
import { Mail, Copy, Check, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon, TelegramIcon, XIcon } from "./Icons";
import { devProjects } from "@/data/dev";

interface HeroSectionProps {
  persona: "code" | "design";
  theme: "dark" | "light";
  accentText: string;
  accentBg: string;
}

export function HeroSection({
  persona,
  theme,
  accentText,
  accentBg,
}: HeroSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedConfig, setCopiedConfig] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("haileag8@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyConfig = () => {
    const configData = JSON.stringify(
      {
        developer: "Hailemariam Agabzie",
        activePersona: persona,
        title:
          persona === "code"
            ? "Full-Stack Software Engineer"
            : "UI/UX & Product Designer",
        location: "Addis Ababa, Ethiopia",
        experienceYears: 3,
        projectsCount: devProjects.length,
        primaryStack:
          persona === "code"
            ? ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"]
            : [
                "Figma",
                "UI/UX",
                "Design Systems",
                "Prototyping",
                "Framer Motion",
              ],
        contact: {
          email: "haileag8@gmail.com",
          github: "https://github.com/haile121",
          linkedin: "https://www.linkedin.com/in/hailemariam-agabzie/",
          telegram: "https://t.me/Mati_12021",
          x: "https://x.com/haile_121",
        },
      },
      null,
      2,
    );
    navigator.clipboard.writeText(configData);
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2000);
  };

  return (
    <section id="about" className="space-y-6 pt-2">
      {/* Editorial Header */}
      <div className="space-y-3">
        {/* Subtle Location & Status text line */}
        <div className="text-xs font-mono text-zinc-500 tracking-wide">
          Addis Ababa, Ethiopia — Available for full-stack engineering & design
          projects.
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Hailemariam Agabzie
        </h1>

        {/* Role Subtitle */}
        <p
          className={`text-base sm:text-lg font-mono font-medium ${accentText} flex flex-wrap items-center gap-1.5`}
        >
          {persona === "code" ? (
            <>
              <span>Full-Stack Engineer ·</span>
              <span className="opacity-65 text-xs sm:text-sm text-zinc-400 blur-[0.2px] font-normal tracking-wide">
                Systems, Web, App, AI
              </span>
            </>
          ) : (
            <>
              <span>Creator & Senior Content Writer ·</span>
              <span className="opacity-65 text-xs sm:text-sm text-zinc-400 blur-[0.2px] font-normal tracking-wide">
                Strategy, Copy, Visuals, UI/UX
              </span>
            </>
          )}
        </p>

        {/* Human Bio (Modern, Professional & Client-Attracting) */}
        <p
          className={`text-xs sm:text-sm leading-relaxed max-w-3xl pt-1 ${
            theme === "dark" ? "text-zinc-300" : "text-slate-600"
          }`}
        >
          {persona === "code"
            ? "Full-Stack Software Engineer with 3+ years of experience engineering high-performance web systems, resilient backend APIs, and AI integrations. I bridge technical architecture with real business outcome—delivering clean, maintainable code, rapid product execution, and seamless user experiences that founders and clients trust to scale."
            : "Strategic Content Writer & Product Designer with 3+ years of experience turning raw ideas into high-converting digital platforms, brand positioning systems, and engaging editorial copy. I craft compelling visual identities and clear messaging that captivates audiences, establishes market authority, and drives measurable client growth."}
        </p>

        {/* Clean Actions: Mail, Copy Email, Icon-only GitHub, LinkedIn, Telegram & X, hailemariam.json */}
        <div className="flex flex-wrap items-center gap-2.5 pt-3 text-xs font-mono">
          <a
            href="mailto:haileag8@gmail.com"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700/80 font-bold transition-all shadow-sm clickable"
          >
            <Mail size={14} />
            <span>haileag8@gmail.com</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-zinc-100 transition-colors clickable"
          >
            {copiedEmail ? (
              <Check size={14} className="text-emerald-400" />
            ) : (
              <Copy size={14} />
            )}
            <span>{copiedEmail ? "Copied" : "Copy Email"}</span>
          </button>

          {/* Minimal View CV button */}
          <a
            href="/HAILEMARIAM_AGABZIE_HAILU_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors clickable font-mono text-xs font-semibold"
          >
            <FileText size={14} className="text-zinc-400" />
            <span>View CV ↗</span>
          </a>

          {/* Icon-Only GitHub */}
          <a
            href="https://github.com/haile121"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors clickable flex items-center justify-center"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={16} />
          </a>

          {/* Icon-Only LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hailemariam-agabzie/"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors clickable flex items-center justify-center"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={16} />
          </a>

          {/* Icon-Only Telegram */}
          <a
            href="https://t.me/Mati_12021"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors clickable flex items-center justify-center"
            title="Telegram Account"
            aria-label="Telegram Account"
          >
            <TelegramIcon size={16} />
          </a>

          {/* Icon-Only X (Twitter) */}
          <a
            href="https://x.com/haile_121"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors clickable flex items-center justify-center"
            title="X (Twitter) Account"
            aria-label="X Account"
          >
            <XIcon size={16} />
          </a>

          {/* hailemariam.json button */}
          <button
            onClick={handleCopyConfig}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-zinc-800/80 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 transition-colors clickable"
          >
            <FileText size={14} />
            <span>{copiedConfig ? "Copied!" : "hailemariam.json"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
