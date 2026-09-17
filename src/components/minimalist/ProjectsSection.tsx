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
      <div
        className={`flex items-center justify-between border-b pb-3 ${
          theme === "dark" ? "border-zinc-800/80" : "border-slate-200"
        }`}
      >
        <h2
          className={`text-sm font-mono uppercase tracking-wider ${
            theme === "dark"
              ? "text-zinc-400 font-bold"
              : "text-slate-700 font-extrabold"
          }`}
        >
          Selected Engineering Work
        </h2>
        <span
          className={`text-xs font-mono ${
            theme === "dark" ? "text-zinc-500" : "text-slate-500 font-medium"
          }`}
        >
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
                : "bg-white border-slate-200/90 hover:border-slate-400 hover:shadow-md"
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
                  <h3
                    className={`text-base font-bold transition-colors ${
                      theme === "dark"
                        ? "text-zinc-100 group-hover:text-blue-400"
                        : "text-slate-900 group-hover:text-blue-600"
                    }`}
                  >
                    {project.name}
                  </h3>
                </div>
                {project.href && (
                  <span
                    className={`text-[11px] font-mono transition-colors ${
                      theme === "dark"
                        ? "text-zinc-500 group-hover:text-zinc-300"
                        : "text-slate-400 group-hover:text-slate-700 font-medium"
                    }`}
                  >
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
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                      theme === "dark"
                        ? "bg-zinc-800/60 text-zinc-300 border-zinc-700/50"
                        : "bg-slate-100 text-slate-800 border-slate-200/90 font-semibold"
                    }`}
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
