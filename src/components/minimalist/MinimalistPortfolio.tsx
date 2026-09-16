"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

import { ConstellationCanvas } from "./ConstellationCanvas";
import { Header } from "./Header";
import { KeyboardShortcutsBar } from "./KeyboardShortcutsBar";
import { HeroSection } from "./HeroSection";
import { CodeSandbox } from "./CodeSandbox";
import { ProjectsSection } from "./ProjectsSection";
import { ProjectInspectorModal } from "./ProjectInspectorModal";
import { ExperienceSection } from "./ExperienceSection";
import { SkillsSection } from "./SkillsSection";
import { CliTerminal } from "./CliTerminal";
import { CommandPaletteModal } from "./CommandPaletteModal";

import { devProjects } from "@/data/dev";

export function MinimalistPortfolio() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [persona, setPersona] = useState<"code" | "design">("code");
  const [viewMode, setViewMode] = useState<"visual" | "cli">("visual");
  const [cmdOpen, setCmdOpen] = useState(false);
  const [matrixMode, setMatrixMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");

  // Selected project for inspector modal
  const [selectedProject, setSelectedProject] = useState<
    (typeof devProjects)[0] | null
  >(null);

  // Live Addis Ababa clock ticker
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Addis_Ababa",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(now.toLocaleTimeString("en-US", options) + " EAT");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard Shortcuts Handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
        return;
      }

      if (e.key === "Escape") {
        setCmdOpen(false);
        setSelectedProject(null);
        return;
      }

      if (
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        if (e.key === "1") scrollToSection("about");
        if (e.key === "2") scrollToSection("projects");
        if (e.key === "3") scrollToSection("experience");
        if (e.key === "4") scrollToSection("skills");
        if (e.key === "5") scrollToSection("sandbox");
        if (e.key.toLowerCase() === "c")
          setViewMode((m) => (m === "visual" ? "cli" : "visual"));
        if (e.key.toLowerCase() === "t")
          setTheme((t) => (t === "dark" ? "light" : "dark"));
        if (e.key.toLowerCase() === "p")
          setPersona((p) => (p === "code" ? "design" : "code"));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Scroll spy & Scroll to top
  useEffect(() => {
    const sections = [
      "about",
      "sandbox",
      "projects",
      "experience",
      "skills",
      "contact",
    ];
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const togglePersona = () => {
    setPersona((prev) => (prev === "code" ? "design" : "code"));
  };

  // Dynamic theme accents
  const accentText = matrixMode
    ? "text-emerald-400"
    : persona === "code"
      ? "text-blue-400"
      : "text-orange-400";
  const accentBg = matrixMode
    ? "bg-emerald-600"
    : persona === "code"
      ? "bg-blue-600"
      : "bg-orange-500";
  const accentBorder = matrixMode
    ? "border-emerald-500/40"
    : persona === "code"
      ? "border-blue-500/40"
      : "border-orange-500/40";

  const verticalNavItems = [
    { id: "about", label: "01 About" },
    { id: "sandbox", label: "02 Sandbox" },
    { id: "projects", label: "03 Projects" },
    { id: "experience", label: "04 Experience" },
    { id: "skills", label: "05 Stack" },
    { id: "contact", label: "06 Contact" },
  ];

  return (
    <div
      className={`min-h-screen font-sans selection:bg-blue-500/30 transition-colors duration-300 relative ${
        matrixMode
          ? "bg-black text-emerald-400 font-mono"
          : theme === "dark"
            ? "bg-[#050608] text-[#e2e8f0]"
            : "bg-[#f8fafc] text-[#0f172a]"
      }`}
    >
      {/* Background Canvas */}
      <ConstellationCanvas persona={persona} matrixMode={matrixMode} />

      {/* Header Navigation */}
      <Header
        persona={persona}
        setPersona={setPersona}
        viewMode={viewMode}
        setViewMode={setViewMode}
        theme={theme}
        toggleTheme={toggleTheme}
        setCmdOpen={setCmdOpen}
        currentTime={currentTime}
      />

      {/* Vertical Scroll Side Navigation Bar */}
      {viewMode === "visual" && (
        <aside className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3 font-mono text-[11px]">
          {verticalNavItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 text-right transition-all group clickable ${
                  isActive
                    ? `${accentText} font-bold`
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <span
                  className={`h-1.5 rounded-full transition-all ${
                    isActive
                      ? `w-4 ${accentBg}`
                      : "w-1.5 bg-zinc-700 group-hover:bg-zinc-400"
                  }`}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </aside>
      )}

      {/* CLI / Terminal Mode */}
      {viewMode === "cli" ? (
        <CliTerminal
          setViewMode={setViewMode}
          matrixMode={matrixMode}
          setMatrixMode={setMatrixMode}
          accentBg={accentBg}
        />
      ) : (
        /* Visual Mode View */
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 relative z-10 space-y-16">
          {/* Shortcuts Bar */}
          <KeyboardShortcutsBar
            theme={theme}
            accentText={accentText}
            scrollToSection={scrollToSection}
          />

          {/* Hero Section */}
          <HeroSection
            persona={persona}
            theme={theme}
            accentText={accentText}
            accentBg={accentBg}
          />

          {/* Code Sandbox */}
          <CodeSandbox accentText={accentText} accentBg={accentBg} />

          {/* Projects Section */}
          <ProjectsSection
            theme={theme}
            accentText={accentText}
            setSelectedProject={setSelectedProject}
          />

          {/* Experience Section */}
          <ExperienceSection theme={theme} accentText={accentText} />

          {/* Skills Section */}
          <SkillsSection
            persona={persona}
            theme={theme}
            accentText={accentText}
          />

          {/* Contact Section */}
          <section id="contact" className="pt-6">
            <div
              className={`p-6 sm:p-8 rounded-2xl border text-center space-y-4 ${
                theme === "dark"
                  ? "bg-zinc-900/60 border-zinc-800"
                  : "bg-slate-100 border-slate-200"
              }`}
            >
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Let&apos;s Build High-Performance Digital Products
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
                Reach out for full-stack software development roles, system
                architecture consulting, or technical lead contracts.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href="mailto:haileag8@gmail.com"
                  className={`px-4 py-2 rounded-lg text-white font-bold text-xs shadow transition-all clickable ${accentBg}`}
                >
                  haileag8@gmail.com
                </a>
                <a
                  href="https://t.me/Mati_12021"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-200 text-xs font-mono font-semibold clickable"
                >
                  Telegram DM ↗
                </a>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Project Inspector Modal */}
      <ProjectInspectorModal
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        accentText={accentText}
        accentBg={accentBg}
        persona={persona}
      />

      {/* Command Palette Modal */}
      <CommandPaletteModal
        cmdOpen={cmdOpen}
        setCmdOpen={setCmdOpen}
        scrollToSection={scrollToSection}
        togglePersona={togglePersona}
        viewMode={viewMode}
        setViewMode={setViewMode}
        toggleTheme={toggleTheme}
      />

      {/* Footer */}
      <footer
        className={`border-t py-6 text-center text-xs font-mono opacity-60 ${
          theme === "dark" ? "border-zinc-800" : "border-slate-200"
        }`}
      >
        © {new Date().getFullYear()} Hailemariam Agabzie · Advanced Minimalist
        Developer Engine
      </footer>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-6 right-6 p-3 rounded-xl text-white shadow-xl transition-all z-40 clickable ${accentBg}`}
          aria-label="Scroll to top"
        >
          <ChevronUp size={18} />
        </button>
      )}
    </div>
  );
}
