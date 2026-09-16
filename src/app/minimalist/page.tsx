import { Metadata } from "next";
import { MinimalistPortfolio } from "@/components/minimalist/MinimalistPortfolio";

export const metadata: Metadata = {
  title: "Hailemariam Agabzie — Minimalist Portfolio",
  description:
    "Full-Stack Engineer & Designer building modern web applications, AI platforms, and digital products.",
};

export default function MinimalistPage() {
  return <MinimalistPortfolio />;
}
