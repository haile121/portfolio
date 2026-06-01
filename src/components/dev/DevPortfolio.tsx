"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Moon,
  Sun,
  ArrowRight,
  ArrowUpRight,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";

/* ─── Contact Form ─── */
type FormStatus = "idle" | "sending" | "success" | "error";

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const subject = encodeURIComponent(`Portfolio: ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
      );
      window.open(
        `mailto:haileag8@gmail.com?subject=${subject}&body=${body}`,
        "_blank",
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputBase =
    "w-full bg-transparent border-b text-[15px] py-3.5 outline-none transition-all duration-300 placeholder:text-current/30";
  const borderIdle = "border-[rgba(255,255,255,0.12)] dark:border-border";
  const borderFocus = "border-blue";

  return (
    <div>
      <div className="text-[11px] font-bold tracking-[0.25em] uppercase opacity-40 mb-8">
        Send a message
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-7">
        <div className="relative">
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            placeholder="Your name"
            className={`${inputBase} ${focused === "name" ? borderFocus : borderIdle}`}
          />
          <div
            className={`absolute bottom-0 left-0 h-px bg-blue transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              focused === "name" ? "w-full" : "w-0"
            }`}
          />
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            placeholder="Your email"
            className={`${inputBase} ${focused === "email" ? borderFocus : borderIdle}`}
          />
          <div
            className={`absolute bottom-0 left-0 h-px bg-blue transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              focused === "email" ? "w-full" : "w-0"
            }`}
          />
        </div>

        <div className="relative">
          <textarea
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
            placeholder="Tell me about your project..."
            className={`${inputBase} resize-none ${
              focused === "message" ? borderFocus : borderIdle
            }`}
          />
          <div
            className={`absolute bottom-0 left-0 h-px bg-blue transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              focused === "message" ? "w-full" : "w-0"
            }`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className={`group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-md font-syne text-sm font-bold tracking-wider transition-all duration-300 clickable mt-2 ${
            status === "success"
              ? "bg-[#10b981] text-white"
              : status === "error"
                ? "bg-[#ef4444] text-white"
                : "bg-blue text-white hover:-translate-y-px hover:shadow-[0_12px_40px_var(--color-glow)]"
          } disabled:opacity-70 disabled:cursor-not-allowed`}
        >
          {status === "idle" && (
            <>
              Send Message
              <Send
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </>
          )}
          {status === "sending" && (
            <>
              Sending...
              <Loader2 size={15} className="animate-spin" />
            </>
          )}
          {status === "success" && (
            <>
              Message sent!
              <CheckCircle size={15} />
            </>
          )}
          {status === "error" && "Something went wrong — try again"}
        </button>
      </form>
    </div>
  );
}

export function DevPortfolio({
  onNavigate,
}: {
  onNavigate: (p: "landing" | "creator") => void;
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
          H.A.H{" "}
          <span className="text-blue font-jetbrains text-sm font-normal">
            / dev
          </span>
        </div>
        <ul className="hidden md:flex items-center gap-10">
          {["About", "Skills", "Experience", "Projects", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#dev-${item.toLowerCase()}`}
                  className="text-[13px] font-semibold tracking-wider text-text2 uppercase relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-blue after:transition-all hover:text-text transition-colors clickable"
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
            className="w-10 h-10 border border-border2 rounded-full bg-bg2 flex items-center justify-center transition-all hover:border-blue hover:text-blue clickable"
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] font-dm-serif text-[clamp(120px,18vw,220px)] font-normal text-transparent pointer-events-none select-none tracking-tight opacity-50 [-webkit-text-stroke:1px_var(--color-border2)]">
          DEV
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-full text-xs font-semibold tracking-wider text-text2 mb-4 w-fit">
          <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse shadow-[0_0_0_0_rgba(16,185,129,0.4)]" />
          Available for projects
        </div>
        <div className="text-xs font-bold tracking-[0.25em] uppercase text-blue mb-7 flex items-center gap-3 before:w-8 before:h-px before:bg-current">
          Full-Stack Developer
        </div>
        <h1 className="font-dm-serif text-[clamp(3.5rem,7vw,7rem)] leading-[1.02] tracking-tight mb-7 max-w-[900px]">
          Crafting <em className="italic text-blue not-italic">precise,</em>
          <br />
          fast & <em className="italic text-blue not-italic">scalable</em> web.
        </h1>
        <p className="text-[17px] text-text2 leading-relaxed max-w-[520px] mb-14">
          I build full-stack products that are fast, accessible, and
          delightfully well-crafted. Currently focused on React, Next.js &
          distributed systems.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="#dev-projects"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-blue text-white rounded-md font-syne text-sm font-bold tracking-wider relative overflow-hidden group hover:-translate-y-px hover:shadow-[0_12px_40px_var(--color-glow)] transition-all clickable"
          >
            <span className="absolute inset-0 bg-white/10 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
            <span className="relative z-10">View Projects</span>
            <ArrowRight size={16} className="relative z-10" />
          </a>
          <a
            href="#dev-contact"
            className="inline-flex items-center gap-2.5 px-7 py-[14px] bg-transparent text-text border-[1.5px] border-border2 rounded-md font-syne text-sm font-semibold tracking-wider transition-all hover:border-text hover:-translate-y-px clickable"
          >
            Get in touch
          </a>
        </div>
        <div className="absolute bottom-9 right-8 md:right-16 flex flex-col items-center gap-2 text-text3 text-[11px] tracking-[0.15em] uppercase hidden md:flex">
          <div className="w-px h-12 bg-gradient-to-b from-text3 to-transparent animate-[scrollPulse_2s_ease-in-out_infinite] opacity-30 origin-top" />
          Scroll
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-10 border-y border-border overflow-hidden whitespace-nowrap relative">
        <div className="inline-flex animate-[marquee_20s_linear_infinite]">
          {[1, 2].map((_, idx) => (
            <div key={idx} className="flex">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "PostgreSQL",
                "Node.js",
                "Tailwind CSS",
                "Docker",
                "AWS",
                "GraphQL",
                "Prisma",
              ].map((tech) => (
                <span
                  key={tech}
                  className="font-dm-serif text-[28px] text-text3 px-8 flex items-center gap-4 tracking-tight italic"
                >
                  {tech}{" "}
                  <span className="text-blue not-italic text-[8px]">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <motion.section
        id="dev-about"
        className="px-8 md:px-16 py-20 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-baseline gap-5 mb-16">
          <span className="font-jetbrains text-xs text-blue min-w-[40px]">
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
                full-stack developer
              </strong>{" "}
              passionate about building digital experiences that don't just work
              — they{" "}
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
              to crafting pixel-perfect interfaces. I believe the best software
              is invisible — it just gets out of the way and lets people do what
              they came to do.
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
                <span className="text-[#34d399]">"Your Name"</span>,<br />
                &nbsp;&nbsp;<span className="text-[#a78bfa]">role</span>:{" "}
                <span className="text-[#34d399]">"Full-Stack Dev"</span>,<br />
                &nbsp;&nbsp;<span className="text-[#a78bfa]">
                  location
                </span>:{" "}
                <span className="text-[#34d399]">"Addis Ababa 🇪🇹"</span>,<br />
                &nbsp;&nbsp;<span className="text-[#a78bfa]">stack</span>: [
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-[#34d399]">"Next.js"</span>,{" "}
                <span className="text-[#34d399]">"TypeScript"</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-[#34d399]">"Tailwind"</span>,{" "}
                <span className="text-[#34d399]">"Node"</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-[#34d399]">"PostgreSQL"</span>
                <br />
                &nbsp;&nbsp;],
                <br />
                &nbsp;&nbsp;<span className="text-[#a78bfa]">
                  available
                </span>: <span className="text-[#10b981]">true</span>,<br />
                &nbsp;&nbsp;<span className="text-[#a78bfa]">
                  hireable
                </span>: <span className="text-[#10b981]">true</span>,<br />
                &nbsp;&nbsp;
                <span className="text-text3">
                  // Let's build something great
                </span>
                <br />
                {"}"}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="dev-skills"
        className="px-8 md:px-16 pb-20 md:pb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-baseline gap-5 mb-16">
          <span className="font-jetbrains text-xs text-blue min-w-[40px]">
            02
          </span>
          <h2 className="font-dm-serif text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-[1.1]">
            Technical skills
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {[
            {
              icon: "⚡",
              name: "Frontend",
              desc: "Building performant, accessible interfaces with modern frameworks and design systems at scale.",
              tags: ["React", "Next.js", "TypeScript", "Tailwind"],
            },
            {
              icon: "🔧",
              name: "Backend",
              desc: "Scalable APIs, microservices, and database design that handle real production workloads.",
              tags: ["Node.js", "PostgreSQL", "Prisma", "GraphQL"],
            },
            {
              icon: "☁️",
              name: "DevOps & Cloud",
              desc: "CI/CD pipelines, containerization, and cloud infrastructure that keeps services running 24/7.",
              tags: ["AWS", "Docker", "GitHub Actions"],
            },
            {
              icon: "🎨",
              name: "UI Engineering",
              desc: "Design systems, component libraries, animations, and the craft of translating design to code perfectly.",
              tags: ["Framer Motion", "Radix UI", "CSS"],
            },
            {
              icon: "🔐",
              name: "Auth & Security",
              desc: "JWT, OAuth, session management, and security best practices baked in from day one.",
              tags: ["NextAuth", "Clerk", "OWASP"],
            },
            {
              icon: "📊",
              name: "Data & Analytics",
              desc: "Metrics, dashboards, and data pipelines that turn raw numbers into actionable insights.",
              tags: ["Vercel Analytics", "Mixpanel", "SQL"],
            },
          ].map((skill, i) => (
            <motion.div
              variants={fadeUpVariant}
              key={skill.name}
              className="bg-bg p-8 md:p-10 hover:bg-surface transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-blue-light flex items-center justify-center mb-5 text-xl">
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
        id="dev-experience"
        className="px-8 md:px-16 pb-20 md:pb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-baseline gap-5 mb-16">
          <span className="font-jetbrains text-xs text-blue min-w-[40px]">
            03
          </span>
          <h2 className="font-dm-serif text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-[1.1]">
            Experience
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="flex flex-col border-l border-border ml-5">
          {[
            {
              date: "Sep 2025 — Present",
              role: "Full-Stack Web Developer",
              company: "Ethiopian Optometric Association · Contract",
              desc: "Develop and maintain web applications supporting digital operations. Design and implement frontend and backend features using modern web technologies, optimizing performance, security, and usability.",
            },
            {
              date: "May 2025 — Present",
              role: "Project Team Lead, Web Developer & UI/UX Designer",
              company: "BiTech Incubation Center",
              desc: "Lead the development of technology projects. Design and develop web applications, coordinate team planning, and deliver innovative solutions through stakeholder collaboration.",
            },
            {
              date: "Jun 2025 — Jun 2026",
              role: "Founder & Community Lead",
              company: "Meta Codz",
              desc: "Founded and led a student technology community fostering collaboration and innovation. Organized trainings, guest lectures, expert interviews, and project showcase events across multidisciplinary teams.",
            },
            {
              date: "2024 — 2025",
              role: "Co-Founder & CTO",
              company: "Code Biruh",
              desc: "Co-founded a tech team focused on software development, mentorship, and community impact. Trained students in programming, led website development for organizations, and directed technical strategy.",
            },
            {
              date: "Oct — Nov 2025",
              role: "Hackathon Organizer",
              company: "Cursor Hackathon · Bahir Dar University",
              desc: "Co-organized an international-scale hackathon, coordinating event planning, participant engagement, judges, university leadership, and community partners.",
            },
            {
              date: "Mar — May 2025",
              role: "Web Development Mentor",
              company: "Eshet Academy",
              desc: "Mentored high school students in a 3-month web development training program. Guided students in building real-world projects including a school website, club registration platform, and staff portal.",
            },
            {
              date: "Jul 2025 — Present",
              role: "Paid Intern → Software Development Intern",
              company: "Askuala Link",
              desc: "Contribute to software development projects, feature implementation, and system improvements. Collaborate with cross-functional teams on testing, debugging, deployment, and technical documentation.",
            },
            {
              date: "Jun 2025 — Aug 2025",
              role: "Backend Developer Intern",
              company: "Hintern Bridge · Alyah Software, Bahir Dar",
              desc: "Developed backend services for an internship-matching platform connecting students with companies. Built scalable APIs and features that streamline internship discovery and talent recruitment.",
            },
            {
              date: "Feb 2025 — Mar 2025",
              role: "Web Development Intern",
              company: "Oasis Infobyte · Remote, India",
              desc: "Engaged in hands-on projects to solve real-world problems through web development. Gained practical experience in building and improving web-based applications in a remote environment.",
            },
          ].map((exp, i) => (
            <motion.div
              variants={fadeUpVariant}
              key={exp.date}
              className="pl-12 pb-14 relative before:absolute before:-left-[5px] before:top-1.5 before:w-[9px] before:h-[9px] before:bg-bg before:border-2 before:border-blue before:rounded-full hover:before:bg-blue before:transition-colors"
            >
              <div className="font-jetbrains text-[11px] text-blue mb-2 tracking-wider">
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

      {/* PROJECTS */}
      <motion.section
        id="dev-projects"
        className="px-8 md:px-16 pb-20 md:pb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-baseline gap-5 mb-16">
          <span className="font-jetbrains text-xs text-blue min-w-[40px]">
            04
          </span>
          <h2 className="font-dm-serif text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-[1.1]">
            Selected projects
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="flex flex-col gap-px bg-border">
          {[
            {
              num: "001 — Featured",
              name: "Ethiopian Optometric Association",
              desc: "Full-stack web application with comprehensive admin management tools and optimized public routing for the organization's digital operations and member services.",
              tags: ["Next.js", "TypeScript", "Full-Stack"],
              isFeatured: true,
            },
            {
              num: "002",
              name: "AlphaX",
              desc: "Bilingual (Amharic/English) learning platform for C++ and web fundamentals — structured lessons, placement tests, quizzes, verified certificates, a live compiler, gamification (XP, streaks, coins), and an AI tutor.",
              tags: ["EdTech", "AI Tutor", "Bilingual"],
            },
            {
              num: "003",
              name: "Tenashi-Ai-Health-Monitor",
              desc: "An AI-powered health monitoring system providing comprehensive insights, health logging, and alerts on vital medical diagnostics.",
              tags: ["AI", "HealthTech", "Python"],
            },
            {
              num: "004",
              name: "LINapNo App",
              desc: "A cross-platform mobile application built with Flutter for streamlined mobile experiences and intuitive user interactions.",
              tags: ["Flutter", "Mobile", "Dart"],
            },
            {
              num: "005",
              name: "Askuala Wiki",
              desc: "A general internal wiki platform for the company, enabling centralized knowledge sharing and documentation across teams.",
              tags: ["Web App", "Wiki", "Internal Tools"],
            },
            {
              num: "006",
              name: "Hintern Bridge",
              desc: "Backend services for an internship-matching platform connecting students with companies, featuring scalable APIs and intelligent matching.",
              tags: ["Node.js", "Backend", "APIs"],
            },
            {
              num: "007",
              name: "Yene Temari",
              desc: "Top 10 Finalist (Innovation for Peace 2025) — an AI-powered tutoring platform with intelligent tutor matching, profile verification, and student progress tracking.",
              tags: ["AI", "EdTech", "Matching"],
            },
          ].map((proj, i) => (
            <motion.a
              variants={fadeUpVariant}
              href="#"
              key={proj.num}
              className={`group flex flex-col md:flex-row md:items-center gap-8 md:gap-10 p-8 md:p-12 lg:p-16 relative overflow-hidden transition-colors duration-300 clickable bg-bg hover:bg-surface`}
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              {proj.isFeatured && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-light to-transparent pointer-events-none" />
              )}
              <div className="flex-1 relative z-10">
                <div className="font-jetbrains text-[11px] text-text3 mb-3">
                  {proj.num}
                </div>
                <h3 className="font-dm-serif text-[clamp(1.5rem,2.5vw,2.2rem)] mb-3 tracking-tight">
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

      {/* TESTIMONIALS */}
      <motion.section
        id="dev-testimonials"
        className="px-8 md:px-16 pb-20 md:pb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-baseline gap-5 mb-16">
          <span className="font-jetbrains text-xs text-blue min-w-[40px]">
            05
          </span>
          <h2 className="font-dm-serif text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-[1.1]">
            What people say
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {[
            {
              text: "Exceptional engineer who brings a rare combination of technical depth and design sensibility. Shipped our most complex feature in record time with zero bugs in production.",
              author: "James Mitchell",
              role: "CTO at TechCo",
              avatar: "JM",
            },
            {
              text: "Working with them transformed how our team thinks about frontend architecture. The codebase is clean, documented, and a joy to work in. Truly senior-level thinking.",
              author: "Sarah Reynolds",
              role: "Product Lead at StartupXYZ",
              avatar: "SR",
            },
          ].map((quote, i) => (
            <motion.div
              variants={fadeUpVariant}
              key={quote.author}
              className="bg-bg p-10 md:p-12 hover:bg-surface transition-colors duration-300"
            >
              <span className="block font-dm-serif text-6xl text-blue leading-[0.6] mb-6">
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
        id="dev-contact"
        className="bg-slate text-bg px-8 md:px-16 py-20 md:py-32 relative overflow-hidden dark:bg-surface dark:text-text dark:border-t dark:border-border"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(0,85,255,0.15),transparent_60%)] pointer-events-none" />
        <div className="absolute -right-10 top-1/2 -translate-y-1/2 font-dm-serif text-[280px] font-normal opacity-[0.04] select-none leading-none">
          {"}"}
        </div>
        <div className="relative z-10">
          <div className="text-[11px] font-bold tracking-[0.25em] uppercase opacity-50 mb-6">
            Let's work together
          </div>
          <h2 className="font-dm-serif text-[clamp(3rem,6vw,6rem)] tracking-tight leading-[1.05] mb-16">
            Have a project
            <br />
            in <em className="italic">mind?</em>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* LEFT: Links */}
            <div>
              <div className="text-[11px] font-bold tracking-[0.25em] uppercase opacity-40 mb-8">
                Find me on
              </div>
              <div className="flex flex-col gap-0.5">
                {[
                  {
                    label: "haileag8@gmail.com",
                    href: "mailto:haileag8@gmail.com",
                  },
                  { label: "GitHub", href: "https://github.com/haile121" },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/hailemariam-agabzie/",
                  },
                  { label: "X (Twitter)", href: "https://x.com/haile_121" },
                  {
                    label: "Telegram Channel",
                    href: "https://t.me/haileDev12X",
                  },
                  { label: "Telegram DM", href: "https://t.me/Mati_12021" },
                ].map((link) => (
                  <a
                    href={link.href}
                    key={link.label}
                    target={
                      link.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-5 border-b border-[rgba(255,255,255,0.08)] dark:border-border text-inherit no-underline relative overflow-hidden transition-all clickable"
                  >
                    <span className="absolute bottom-0 left-0 h-px bg-blue w-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                    <span className="text-lg font-bold tracking-tight group-hover:text-blue transition-colors">
                      {link.label}
                    </span>
                    <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between border-t border-border bg-bg gap-4 relative z-10">
        <div className="text-[13px] text-text3">
          © 2026 Hailemariam Agabzie · Developer Portfolio
        </div>
        <button
          onClick={() => onNavigate("creator")}
          className="text-[13px] text-text3 flex items-center gap-2 hover:text-text transition-colors clickable bg-transparent border-none"
        >
          ← Switch to Creator side
        </button>
      </footer>
    </motion.div>
  );
}
