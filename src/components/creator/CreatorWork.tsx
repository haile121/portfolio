"use client";

export function CreatorWork() {
  return (
    <section id="work" className="px-8 md:px-16 pb-20 md:pb-32">
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
              <div className="font-bold text-sm text-[#0a0a0a]">Pulse App</div>
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
  );
}
