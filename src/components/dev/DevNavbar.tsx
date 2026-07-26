"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../layout/ThemeProvider";
import { devNavLinks } from "../../data/dev";

export function DevNavbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 h-[72px] flex items-center justify-between border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="font-inter font-bold text-lg">
        H.A.H{" "}
        <span className="text-blue font-inter text-sm font-normal opacity-60">
          / dev
        </span>
      </div>
      <ul className="hidden md:flex items-center gap-10">
        {devNavLinks.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-[13px] font-semibold tracking-wider text-text2 uppercase relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-blue after:transition-all hover:text-text transition-colors clickable"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="w-10 h-10 border border-border2 rounded-full bg-bg2 flex items-center justify-center transition-all hover:border-blue hover:text-blue clickable"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <Link
          href="/"
          className="text-xs font-semibold tracking-widest uppercase text-text3 border border-border px-4 py-2 rounded transition-colors hover:text-text hover:border-border2 clickable hidden sm:block"
        >
          ← Back
        </Link>
      </div>
    </nav>
  );
}
