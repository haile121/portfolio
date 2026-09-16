"use client";

import { devProjects } from "@/data/dev";

interface ProjectsSectionProps {
  theme: "dark" | "light";
  accentText: string;
  setSelectedProject: (project: (typeof devProjects)[0]) => void;
}

export function ProjectsSection({
  theme,
  accentText,
  setSelectedProject,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="space-y-4 pt-4">
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
        <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-400">
          Selected Engineering Work
        </h2>
        <span className="text-xs font-mono text-zinc-500">
          {devProjects.length} Projects
        </span>
      </div>

      <div className="space-y-3">
        {devProjects.map((project) => (
          <div
            key={project.name}
            onClick={() => setSelectedProject(project)}
            className={`group p-4 rounded-xl border transition-all cursor-pointer clickable ${
              theme === "dark"
                ? "bg-zinc-900/30 border-white/[0.07] hover:border-zinc-700 hover:bg-zinc-900/60"
                : "bg-white border-slate-200 hover:border-slate-400"
            }`}
          >
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[11px] font-mono font-bold ${accentText}`}
                  >
                    [{project.num}]
                  </span>
                  <h3 className="text-base font-bold group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                </div>
                {project.href && (
                  <span className="text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    ↗
                  </span>
                )}
              </div>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  theme === "dark" ? "text-zinc-400" : "text-slate-600"
                }`}
              >
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-300 border border-zinc-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
