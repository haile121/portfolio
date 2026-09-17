import type { Metadata } from "next";
import {
  DM_Serif_Display,
  Syne,
  JetBrains_Mono,
  Inter,
} from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
});
const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
});
const jetBrainsMono = JetBrains_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
});
const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hailemariam Portfolio — Developer & Creator",
  description:
    "Full-stack software engineer building high-performance web systems, AI platforms, and digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSerif.variable} ${syne.variable} ${jetBrainsMono.variable} ${inter.variable}`}
    >
      <body className="font-syne bg-bg text-text min-h-screen overflow-x-hidden antialiased transition-colors duration-400">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
