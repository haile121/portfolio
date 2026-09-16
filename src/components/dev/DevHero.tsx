"use client";

import { ArrowRight, FileText } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";

export function DevHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: text moves slower, image moves faster
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const bgTextY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  // Fade + blur on scroll exit
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] font-inter text-[clamp(120px,18vw,220px)] font-black text-transparent pointer-events-none select-none tracking-tight opacity-40 [-webkit-text-stroke:1px_var(--color-border2)]"
      >
        DEV
      </motion.div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-8 w-full relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          style={{ y: textY }}
          className="flex-1 w-full max-w-[760px]"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-wide text-emerald-400 mb-3.5 w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="animate-pulse">Available for projects</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-blue mb-3.5"
          >
            Full-Stack Engineer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter text-[clamp(2.4rem,4.8vw,4.8rem)] font-extrabold leading-[1.08] tracking-tight mb-4 max-w-[800px]"
          >
            Crafting <em className="italic text-blue not-italic">precise,</em>
            <br />
            fast & <em className="italic text-blue not-italic">scalable</em> web
            & apps<span className="text-blue">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16px] md:text-[17px] text-text2 leading-relaxed max-w-[540px] mb-7"
          >
            I enjoy turning ambitious ideas into software people actually use.
            From polished interfaces to the systems running behind them, I build
            products that feel simple, even when the engineering isn't.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3.5 flex-wrap"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-blue text-white rounded-md font-inter text-sm font-bold tracking-wider relative overflow-hidden group hover:-translate-y-px hover:shadow-[0_12px_40px_var(--color-glow)] transition-all clickable"
            >
              <span className="absolute inset-0 bg-white/10 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
              <span className="relative z-10">View Projects</span>
              <ArrowRight size={16} className="relative z-10" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-[13px] bg-transparent text-text border-[1.5px] border-border2 rounded-md font-inter text-sm font-semibold tracking-wider transition-all hover:border-text hover:-translate-y-px clickable"
            >
              Get in touch
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("CV will be opened. (PDF file placeholder)");
              }}
              className="inline-flex items-center gap-2 px-5 py-[13px] bg-surface text-text border border-border rounded-md font-inter text-sm font-semibold tracking-wider transition-all hover:bg-surface2 hover:border-blue/40 hover:-translate-y-px clickable"
            >
              <FileText size={16} className="text-blue" />
              <span>View CV</span>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE WITH CAMERA LENS ZOOM HUD & ANIMATION */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[210px] lg:max-w-[280px] shrink-0 self-center relative group mb-6 lg:mb-0"
        >
          {/* Subtle outer decorative rings */}
          <div className="absolute -inset-3 border border-blue/20 rounded-2xl md:rounded-[24px] transform group-hover:-rotate-2 group-hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>
          <div className="absolute -inset-3 border border-blue/10 rounded-2xl md:rounded-[24px] transform group-hover:rotate-3 group-hover:scale-[1.02] transition-all duration-700 delay-75 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>

          <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-2xl md:rounded-[24px] bg-surface shadow-2xl shadow-blue/10 border border-border/80">
            {/* Image with Camera Zoom In / Zoom Out Loop Animation */}
            <motion.img
              src="/HaileSuit.jpg"
              alt="Hailemariam Agabzie"
              animate={{
                scale: [1, 1.2, 1],
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
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                REC 4K
              </span>
              <span className="bg-black/50 px-1.5 py-0.5 rounded border border-white/10 backdrop-blur-xs text-blue">
                f/2.8 · 70-200mm
              </span>
            </div>

            {/* Corner Viewfinder Crosshair Ticks */}
            <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-blue z-20 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none" />
            <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-blue z-20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-blue z-20 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-blue z-20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 pointer-events-none" />

            {/* Bottom Camera Lens Zoom Scale Bar (70mm -> 200mm) */}
            <div className="absolute bottom-2.5 inset-x-3 z-20 bg-black/60 backdrop-blur-md rounded-lg p-2 border border-white/15 text-white/90 select-none pointer-events-none flex flex-col gap-1">
              <div className="flex items-center justify-between text-[9px] font-mono font-bold tracking-wider text-text3">
                <span className="text-white/70">70mm</span>
                <span>100mm</span>
                <span>135mm</span>
                <span className="text-blue">200mm</span>
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
                  className="absolute top-0 bottom-0 w-2 bg-blue rounded-full shadow-[0_0_8px_#0055ff]"
                />
              </div>
            </div>

            {/* Subtle scanline & lens flare overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.04),rgba(0,255,0,0.02),rgba(0,0,255,0.04))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-25 z-15" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 right-8 md:right-16 flex flex-col items-center gap-2 text-text3 text-[11px] tracking-[0.15em] uppercase hidden md:flex z-20">
        <div className="w-px h-10 bg-gradient-to-b from-text3 to-transparent animate-[scrollPulse_2s_ease-in-out_infinite] opacity-30 origin-top" />
        Scroll
      </div>
    </section>
  );
}
