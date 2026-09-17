"use client";

import { ArrowUpRight, FileText } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";

export function CreatorHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax calculations: text shifts up slowly, image shifts down slightly
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const bgTextY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  // Fade out + blur on exit scroll
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const blurValue = useTransform(scrollYProgress, [0, 0.7], [0, 12]);
  const filter = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <section
      ref={sectionRef}
      className="min-h-[90vh] flex flex-col justify-center px-8 md:px-16 pt-24 pb-16 relative overflow-hidden"
    >
      <motion.div
        style={{ y: bgTextY, opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] font-dm-serif text-[clamp(120px,18vw,220px)] font-normal text-transparent pointer-events-none select-none tracking-tight opacity-50 [-webkit-text-stroke:1px_rgba(249,115,22,0.15)]"
      >
        CREATE
      </motion.div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-8 w-full relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          style={{ y: textY }}
          className="flex-1 w-full max-w-[760px]"
        >
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface border border-border rounded-full text-xs font-semibold tracking-wider text-text2 mb-3.5 w-fit"
          >
            <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full animate-pulse shadow-[0_0_0_0_rgba(249,115,22,0.4)]" />
            Taking on new clients
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-[#f97316] mb-3.5 flex items-center gap-3 before:w-8 before:h-px before:bg-current"
          >
            Content Strategy · Senior Writing · Visual Design
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-dm-serif text-[clamp(3rem,5.6vw,5.5rem)] leading-[1.05] tracking-tight mb-5 max-w-[850px]"
          >
            Stories that{" "}
            <em className="italic text-[#f97316] not-italic">resonate.</em>
            <br />
            Content that{" "}
            <em className="italic text-[#f97316] not-italic">converts.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16px] md:text-[17px] text-text2 leading-relaxed max-w-[540px] mb-7"
          >
            Senior Content Writer & Content Creator crafting high-impact brand
            messaging, multimedia visual designs, and digital campaigns
            engineered to turn audience attention into lasting engagement.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3.5 flex-wrap"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#f97316] text-white rounded-md font-syne text-sm font-bold tracking-wider relative overflow-hidden group hover:-translate-y-px hover:shadow-[0_12px_40px_rgba(249,115,22,0.3)] transition-all clickable"
            >
              <span className="absolute inset-0 bg-white/10 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
              <span className="relative z-10">See My Work</span>
              <ArrowUpRight size={16} className="relative z-10" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-[13px] bg-transparent text-text border-[1.5px] border-[#f97316] rounded-md font-syne text-sm font-semibold tracking-wider transition-all hover:bg-[#f97316] hover:text-white clickable"
            >
              Work together
            </a>
            <a
              href="/creator_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-[13px] bg-surface text-text border border-border rounded-md font-syne text-sm font-semibold tracking-wider transition-all hover:bg-surface2 hover:border-[#f97316]/40 hover:-translate-y-px clickable"
            >
              <FileText size={16} className="text-[#f97316]" />
              <span>View CV</span>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE WITH CAMERA LENS ZOOM HUD & ANIMATION */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.88, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[210px] lg:max-w-[290px] shrink-0 self-center relative group mb-10 lg:mb-0"
        >
          {/* Subtle outer decorative rings */}
          <div className="absolute -inset-3 border border-[#f97316]/20 rounded-2xl md:rounded-[24px] transform group-hover:rotate-2 group-hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>
          <div className="absolute -inset-3 border border-[#f97316]/10 rounded-2xl md:rounded-[24px] transform group-hover:-rotate-3 group-hover:scale-[1.02] transition-all duration-700 delay-75 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>

          <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-2xl md:rounded-[24px] bg-surface shadow-2xl shadow-[#f97316]/10 border border-border/80">
            {/* Image with Camera Zoom In / Zoom Out Loop Animation */}
            <motion.img
              src="/HaileSuit.jpg"
              alt="Hailemariam Agabzie"
              animate={{
                scale: [1, 1.22, 1],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700"
            />

            {/* Top Viewfinder HUD Bar */}
            <div className="absolute top-2.5 inset-x-3 flex items-center justify-between z-20 font-mono text-[9px] font-bold text-white/80 drop-shadow-md select-none pointer-events-none">
              <span className="bg-black/50 px-1.5 py-0.5 rounded border border-white/10 backdrop-blur-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
                CAM · 4K 60FPS
              </span>
              <span className="bg-black/50 px-1.5 py-0.5 rounded border border-white/10 backdrop-blur-xs text-[#f97316]">
                f/2.8 · 70-200mm
              </span>
            </div>

            {/* Corner Viewfinder Crosshair Ticks */}
            <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-[#f97316] z-20 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none" />
            <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-[#f97316] z-20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-[#f97316] z-20 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-[#f97316] z-20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 pointer-events-none" />

            {/* Bottom Camera Lens Zoom Scale Bar (70mm -> 200mm) */}
            <div className="absolute bottom-2.5 inset-x-3 z-20 bg-black/60 backdrop-blur-md rounded-lg p-2 border border-white/15 text-white/90 select-none pointer-events-none flex flex-col gap-1">
              <div className="flex items-center justify-between text-[9px] font-mono font-bold tracking-wider text-text3">
                <span className="text-white/70">70mm</span>
                <span>100mm</span>
                <span>135mm</span>
                <span className="text-[#f97316]">200mm</span>
              </div>

              {/* Zoom Scale Track & Moving Indicator Dot */}
              <div className="relative w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  animate={{
                    left: ["0%", "85%", "0%"],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 bottom-0 w-2 bg-[#f97316] rounded-full shadow-[0_0_8px_#f97316]"
                />
              </div>
            </div>

            {/* Soft Warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#f97316]/5 via-transparent to-transparent pointer-events-none opacity-40 z-15" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-9 right-8 md:right-16 flex flex-col items-center gap-2 text-text3 text-[11px] tracking-[0.15em] uppercase hidden md:flex z-20">
        <div className="w-px h-12 bg-gradient-to-b from-[#f97316] to-transparent animate-[scrollPulse_2s_ease-in-out_infinite] opacity-30 origin-top" />
        Scroll
      </div>
    </section>
  );
}
