"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LandingPage } from "@/components/landing/LandingPage";
import { DevPortfolio } from "@/components/dev/DevPortfolio";
import { CreatorPortfolio } from "@/components/creator/CreatorPortfolio";

export type PageState = "landing" | "dev" | "creator";

export default function Home() {
  const [page, setPage] = useState<PageState>("landing");

  return (
    <main className="w-full min-h-screen relative overflow-hidden bg-bg">
      <AnimatePresence mode="wait">
        {page === "landing" && (
          <LandingPage key="landing" onNavigate={setPage} />
        )}
        {page === "dev" && <DevPortfolio key="dev" onNavigate={setPage} />}
        {page === "creator" && (
          <CreatorPortfolio key="creator" onNavigate={setPage} />
        )}
      </AnimatePresence>
    </main>
  );
}
