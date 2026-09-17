"use client";

import { useState } from "react";
import { Terminal, Play, ChevronDown, ChevronUp } from "lucide-react";
import { devProjects, devSkillsBox } from "@/data/dev";

interface CodeSandboxProps {
  accentText: string;
  accentBg: string;
}

export function CodeSandbox({ accentText, accentBg }: CodeSandboxProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [sandboxCode, setSandboxCode] = useState("haile.getProjects()");
  const [sandboxResult, setSandboxResult] = useState<string>(
    '// Select a preset command above and click "Run" to test runtime.',
  );

  const runSandboxCode = (preset?: string) => {
    const codeToRun = preset || sandboxCode;
    setSandboxCode(codeToRun);

    if (codeToRun.includes("getProjects")) {
      setSandboxResult(JSON.stringify(devProjects.slice(0, 3), null, 2));
    } else if (codeToRun.includes("getSkills")) {
      setSandboxResult(JSON.stringify(devSkillsBox, null, 2));
    } else if (codeToRun.includes("hire")) {
      setSandboxResult(
        JSON.stringify(
          {
            status: "AVAILABLE_FOR_HIRE",
            email: "haileag8@gmail.com",
            roles: [
              "Senior Fullstack Engineer",
              "Tech Lead",
              "Contract Architect",
            ],
            telegram: "https://t.me/Mati_12021",
          },
          null,
          2,
        ),
      );
    } else {
      setSandboxResult(
        JSON.stringify(
          {
            executed: codeToRun,
            result: "Success (Output rendered safely)",
            timestamp: new Date().toISOString(),
          },
          null,
          2,
        ),
      );
    }
  };

  return (
    <section id="sandbox" className="space-y-3 pt-2">
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
        <div className="flex items-center gap-2">
          <Terminal size={16} className={accentText} />
          <h2 className="text-sm font-bold font-mono uppercase tracking-wider">
            Interactive Live TypeScript Sandbox
          </h2>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="text-zinc-500 hidden sm:inline">
            Try live runtime queries
          </span>
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors clickable"
          >
            <span>{isExpanded ? "Fold Sandbox" : "Expand Sandbox"}</span>
            {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="rounded-xl border border-zinc-800 bg-[#090b0e] p-4 font-mono text-xs space-y-3 shadow-xl transition-all duration-300">
          {/* Presets - Uniform Colors */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-zinc-500 font-bold">Query Presets:</span>
            <button
              onClick={() => runSandboxCode("haile.getProjects()")}
              className="px-2.5 py-1 rounded bg-zinc-800/90 text-blue-400 border border-zinc-700/80 hover:bg-zinc-700 transition-colors clickable"
            >
              haile.getProjects()
            </button>
            <button
              onClick={() => runSandboxCode("haile.getSkills()")}
              className="px-2.5 py-1 rounded bg-zinc-800/90 text-blue-400 border border-zinc-700/80 hover:bg-zinc-700 transition-colors clickable"
            >
              haile.getSkills()
            </button>
            <button
              onClick={() => runSandboxCode("haile.hire()")}
              className="px-2.5 py-1 rounded bg-zinc-800/90 text-blue-400 border border-zinc-700/80 hover:bg-zinc-700 transition-colors clickable"
            >
              haile.hire()
            </button>
          </div>

          {/* Code Input & Run */}
          <div className="flex items-center gap-2 bg-zinc-900/90 p-2 rounded-lg border border-zinc-800">
            <span className="text-blue-400 font-bold">&gt;</span>
            <input
              type="text"
              value={sandboxCode}
              onChange={(e) => setSandboxCode(e.target.value)}
              className="flex-1 bg-transparent text-zinc-200 focus:outline-none font-mono text-xs"
            />
            <button
              onClick={() => runSandboxCode()}
              className="px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700 font-bold text-xs flex items-center gap-1 clickable transition-colors"
            >
              <Play size={12} />
              <span>Run</span>
            </button>
          </div>

          {/* Sandbox Output Window */}
          <div className="p-3 rounded-lg bg-black/60 border border-zinc-800/80 max-h-48 overflow-y-auto text-zinc-300 font-mono text-[11px] whitespace-pre">
            {sandboxResult}
          </div>
        </div>
      )}
    </section>
  );
}
