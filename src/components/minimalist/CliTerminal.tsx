"use client";

import { useState, useRef, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { devProjects, devExperience, devSkillsBox } from "@/data/dev";

interface CliTerminalProps {
  setViewMode: (mode: "visual" | "cli") => void;
  matrixMode: boolean;
  setMatrixMode: React.Dispatch<React.SetStateAction<boolean>>;
  accentBg: string;
}

export function CliTerminal({
  setViewMode,
  matrixMode,
  setMatrixMode,
  accentBg,
}: CliTerminalProps) {
  const [cliInput, setCliInput] = useState("");
  const [cliHistory, setCliHistory] = useState<
    Array<{ type: "input" | "output"; text: string | React.ReactNode }>
  >([
    {
      type: "output",
      text: (
        <div className="space-y-1 text-xs">
          <p className="text-emerald-400 font-bold">
            Hailemariam Agabzie CLI Engine [v2.4.0-release]
          </p>
          <p className="text-zinc-400">
            Type <span className="text-blue-400 font-bold">help</span> or{" "}
            <span className="text-emerald-400 font-bold">matrix</span> for
            secret cyberpunk mode.
          </p>
        </div>
      ),
    },
  ]);

  const cliBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cliBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [cliHistory]);

  const processCliCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    const newHistory = [
      ...cliHistory,
      { type: "input" as const, text: `hailemariam@portfolio ~ $ ${cmdStr}` },
    ];

    if (cleanCmd === "clear") {
      setCliHistory([]);
      return;
    }

    if (cleanCmd === "matrix") {
      setMatrixMode((prev) => !prev);
      setCliHistory([
        ...newHistory,
        {
          type: "output",
          text: (
            <p className="text-emerald-400 font-mono font-bold">
              CYBERPUNK MATRIX MODE TOGGLED!
            </p>
          ),
        },
      ]);
      return;
    }

    let output: React.ReactNode = null;

    switch (cleanCmd) {
      case "help":
        output = (
          <div className="space-y-1 text-xs text-zinc-300">
            <p className="text-emerald-400 font-bold">Available Commands:</p>
            <p>
              <span className="text-blue-400 font-mono w-28 inline-block">
                cat bio
              </span>{" "}
              - View bio & engineering vision
            </p>
            <p>
              <span className="text-blue-400 font-mono w-28 inline-block">
                ls projects
              </span>{" "}
              - List all production projects
            </p>
            <p>
              <span className="text-blue-400 font-mono w-28 inline-block">
                cat experience
              </span>{" "}
              - View full-stack career timeline
            </p>
            <p>
              <span className="text-blue-400 font-mono w-28 inline-block">
                cat skills
              </span>{" "}
              - View engineering & design stack
            </p>
            <p>
              <span className="text-blue-400 font-mono w-28 inline-block">
                contact
              </span>{" "}
              - Direct contact channels
            </p>
            <p>
              <span className="text-emerald-400 font-mono w-28 inline-block">
                matrix
              </span>{" "}
              - Secret Cyberpunk Mode
            </p>
            <p>
              <span className="text-blue-400 font-mono w-28 inline-block">
                mode visual
              </span>{" "}
              - Return to Visual mode
            </p>
            <p>
              <span className="text-blue-400 font-mono w-28 inline-block">
                clear
              </span>{" "}
              - Clear terminal screen
            </p>
          </div>
        );
        break;

      case "cat bio":
        output = (
          <div className="space-y-2 text-xs text-zinc-300 max-w-xl leading-relaxed">
            <p className="text-blue-400 font-bold">HAILMARIAM AGABZIE — BIO:</p>
            <p>
              Full-Stack Software Engineer & UI/UX Craftsman with 4+ years
              experience shipping web apps, microservices, and AI tools used by
              1,600+ users. Co-founded developer communities (Meta Codz, Code
              Biruh) and organized international hackathons.
            </p>
          </div>
        );
        break;

      case "ls projects":
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-emerald-400 font-bold">
              PRODUCTION PROJECTS ({devProjects.length}):
            </p>
            {devProjects.map((p) => (
              <div
                key={p.name}
                className="border-b border-zinc-800/60 pb-1.5 pt-1"
              >
                <div className="flex items-center justify-between text-zinc-200">
                  <span className="font-bold text-blue-400">
                    {p.num} — {p.name}
                  </span>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      Live App <ExternalLink size={10} />
                    </a>
                  )}
                </div>
                <p className="text-zinc-400 text-[11px]">{p.desc}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "cat experience":
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-purple-400 font-bold font-mono">
              CAREER TIMELINE ({devExperience.length} positions):
            </p>
            {devExperience.slice(0, 5).map((exp) => (
              <div
                key={exp.role + exp.company}
                className="border-l-2 border-purple-500/50 pl-3 py-1 text-zinc-300"
              >
                <div className="font-bold text-zinc-100">
                  {exp.role}{" "}
                  <span className="text-purple-400">@ {exp.company}</span>
                </div>
                <div className="text-[10px] text-zinc-500 font-mono">
                  {exp.date}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case "cat skills":
        output = (
          <div className="space-y-2 text-xs text-zinc-300">
            <p className="text-amber-400 font-bold font-mono">
              TECHNICAL & CREATIVE TOOLKIT:
            </p>
            {devSkillsBox.map((s) => (
              <div key={s.name} className="text-zinc-300">
                <span className="text-amber-400 font-bold">{s.name}:</span>{" "}
                {s.tags.join(", ")}
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs text-zinc-300 font-mono">
            <p className="text-emerald-400 font-bold">CONTACT DIRECTORY:</p>
            <p>Email: haileag8@gmail.com</p>
            <p>GitHub: github.com/haile121</p>
            <p>LinkedIn: linkedin.com/in/hailemariam-agabzie</p>
            <p>Telegram: t.me/Mati_12021</p>
          </div>
        );
        break;

      case "mode visual":
        setViewMode("visual");
        return;

      default:
        output = (
          <p className="text-red-400 text-xs font-mono">
            Command not recognized: &quot;{cmdStr}&quot;. Type{" "}
            <span className="text-blue-400 font-bold">help</span> for commands.
          </p>
        );
    }

    setCliHistory([...newHistory, { type: "output", text: output }]);
  };

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cliInput.trim()) return;
    processCliCommand(cliInput);
    setCliInput("");
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 relative z-10">
      <div className="rounded-xl border border-zinc-800 bg-[#090b0e] shadow-2xl overflow-hidden font-mono">
        <div className="px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-bold text-zinc-300">
              hailemariam@portfolio:~
            </span>
          </div>
          <div className="text-[11px] text-zinc-500 hidden sm:block">
            Type &quot;mode visual&quot; or press &quot;C&quot; to exit
          </div>
        </div>

        <div className="p-4 sm:p-6 space-y-4 max-h-[65vh] overflow-y-auto">
          {cliHistory.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.type === "input" ? (
                <div className="text-xs text-emerald-400 font-bold">
                  {item.text}
                </div>
              ) : (
                <div>{item.text}</div>
              )}
            </div>
          ))}
          <div ref={cliBottomRef} />
        </div>

        <div className="px-4 py-2 bg-zinc-900/50 border-t border-zinc-800/80 flex flex-wrap gap-2 text-[11px]">
          <span className="text-zinc-500 font-bold py-1">Quick Run:</span>
          {[
            "cat bio",
            "ls projects",
            "cat experience",
            "cat skills",
            "contact",
            "matrix",
            "clear",
          ].map((cmd) => (
            <button
              key={cmd}
              onClick={() => processCliCommand(cmd)}
              className="px-2.5 py-1 rounded bg-zinc-800/80 hover:bg-zinc-700 text-blue-400 border border-zinc-700/60 transition-colors clickable"
            >
              {cmd}
            </button>
          ))}
        </div>

        <form
          onSubmit={handleCliSubmit}
          className="p-3 bg-zinc-900/90 border-t border-zinc-800 flex items-center gap-2"
        >
          <span className="text-emerald-400 text-xs font-bold pl-2">$</span>
          <input
            type="text"
            value={cliInput}
            onChange={(e) => setCliInput(e.target.value)}
            placeholder="Type command (e.g. 'help', 'ls projects', 'matrix')..."
            className="flex-1 bg-transparent text-xs text-zinc-100 focus:outline-none font-mono"
            autoFocus
          />
          <button
            type="submit"
            className={`px-3 py-1 rounded text-white text-xs font-bold ${accentBg}`}
          >
            Exec
          </button>
        </form>
      </div>
    </main>
  );
}
