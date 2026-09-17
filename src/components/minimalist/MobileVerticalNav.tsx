"use client";

import { useState, useRef, useEffect } from "react";
import { Compass, X } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
}

interface MobileVerticalNavProps {
  verticalNavItems: NavItem[];
  activeSection: string;
  scrollToSection: (id: string) => void;
  theme: "dark" | "light";
  accentText: string;
  accentBg: string;
}

export function MobileVerticalNav({
  verticalNavItems,
  activeSection,
  scrollToSection,
  theme,
  accentText,
  accentBg,
}: MobileVerticalNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem =
    verticalNavItems.find((item) => item.id === activeSection) ||
    verticalNavItems[0];

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="xl:hidden fixed bottom-6 left-6 z-40 font-mono text-xs"
    >
      {/* Popover Navigation List */}
      {isOpen && (
        <div
          className={`absolute bottom-full mb-3 left-0 w-48 p-2.5 rounded-2xl border shadow-2xl backdrop-blur-xl transition-all animate-in fade-in slide-in-from-bottom-2 duration-200 ${
            theme === "dark"
              ? "bg-[#090b0e]/95 border-zinc-800 text-zinc-200"
              : "bg-white/95 border-slate-200/90 text-slate-800 shadow-xl"
          }`}
        >
          <div className="flex items-center justify-between pb-2 mb-1 border-b border-border/40 px-2 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
            <span>Sections</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-0.5 rounded hover:bg-zinc-800/50 text-zinc-400"
            >
              <X size={12} />
            </button>
          </div>

          <div className="flex flex-col gap-1">
            {verticalNavItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-left transition-all clickable ${
                    isActive
                      ? `${accentText} font-bold ${
                          theme === "dark" ? "bg-zinc-800/60" : "bg-slate-100"
                        }`
                      : theme === "dark"
                        ? "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive
                        ? accentBg
                        : theme === "dark"
                          ? "bg-zinc-700"
                          : "bg-slate-300"
                    }`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Trigger Pill Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-2 px-3 py-2 rounded-xl border shadow-xl backdrop-blur-md transition-all clickable ${
          theme === "dark"
            ? "bg-zinc-900/90 border-zinc-700/80 text-zinc-200 hover:bg-zinc-800"
            : "bg-white/90 border-slate-200/90 text-slate-800 hover:bg-slate-50 shadow-lg"
        }`}
      >
        <Compass size={15} className={accentText} />
        <span className={`font-bold text-[11px] ${accentText}`}>
          {activeItem.label}
        </span>
      </button>
    </div>
  );
}
