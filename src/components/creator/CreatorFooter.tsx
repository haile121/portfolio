"use client";

import Link from "next/link";

export function CreatorFooter() {
  return (
    <footer className="px-8 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between border-t border-border bg-bg gap-4 relative z-10">
      <div className="text-[13px] text-text3">
        © 2026 Hailemariam Agabzie · Creative Portfolio
      </div>
      <Link
        href="/dev"
        className="text-[13px] text-text3 flex items-center gap-2 hover:text-text transition-colors clickable bg-transparent border-none"
      >
        ← Switch to Dev side
      </Link>
    </footer>
  );
}
