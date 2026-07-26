"use client";

import Link from "next/link";

export function DevFooter() {
  return (
    <footer className="px-8 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between border-t border-border bg-bg gap-4 relative z-10">
      <div className="text-[13px] text-text3">
        © 2026 Hailemariam Agabzie · Developer Portfolio
      </div>
      <Link
        href="/creator"
        className="text-[13px] text-text3 flex items-center gap-2 hover:text-text transition-colors clickable bg-transparent border-none"
      >
        ← Switch to Creator side
      </Link>
    </footer>
  );
}
