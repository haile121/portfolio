"use client";

import { useEffect, useRef } from "react";

interface WaveCanvasProps {
  /** RGB string e.g. "0,85,255" or "249,115,22" */
  accentRgb: string;
}

export function WaveCanvas({ accentRgb }: WaveCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let t = 0;
    const COLS = 20;
    const ROWS = 13;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      // Store logical size on element for draw loop
      canvas.dataset.w = String(w);
      canvas.dataset.h = String(h);
    };
    resize();

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    const tick = () => {
      t += 0.006; // slower = smoother
      const W = parseFloat(canvas.dataset.w || "0") || canvas.offsetWidth;
      const H = parseFloat(canvas.dataset.h || "0") || canvas.offsetHeight;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const cw = W / COLS;
      const ch = H / ROWS;

      ctx.clearRect(0, 0, W, H);

      // Pre-compute every grid point's displaced position
      const pts: [number, number, number][][] = [];
      for (let row = 0; row <= ROWS; row++) {
        pts[row] = [];
        for (let col = 0; col <= COLS; col++) {
          const bx = col * cw;
          const by = row * ch;
          const dx = bx - mx;
          const dy = by - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const inf = Math.max(0, 1 - dist / 220);

          // Smooth slow wave: two sine waves combined
          const wave =
            Math.sin(col * 0.45 + t + row * 0.25) * 5 +
            Math.sin(col * 0.9 + t * 0.6 + row * 0.6) * 2;

          const ripple = inf * 18;
          const nx = bx !== mx ? dx / dist : 0;
          const ny = by !== my ? dy / dist : 0;

          const x = bx + wave - ripple * nx;
          const y = by + wave * 0.55 - ripple * ny;
          const alpha = 0.045 + inf * 0.12;

          pts[row][col] = [x, y, alpha];
        }
      }

      ctx.lineWidth = 0.6;

      // Horizontal lines — batch per-row for perf
      for (let row = 0; row <= ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const [x1, y1, a1] = pts[row][col];
          const [x2, y2, a2] = pts[row][col + 1];
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = `rgba(${accentRgb},${(a1 + a2) * 0.5})`;
          ctx.stroke();
        }
      }

      // Vertical lines
      for (let col = 0; col <= COLS; col++) {
        for (let row = 0; row < ROWS; row++) {
          const [x1, y1, a1] = pts[row][col];
          const [x2, y2, a2] = pts[row + 1][col];
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = `rgba(${accentRgb},${(a1 + a2) * 0.5})`;
          ctx.stroke();
        }
      }

      // Intersection dots
      for (let row = 0; row <= ROWS; row++) {
        for (let col = 0; col <= COLS; col++) {
          const [x, y, a] = pts[row][col];
          ctx.beginPath();
          ctx.arc(x, y, 1.3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${accentRgb},${Math.min(0.5, a * 2.8)})`;
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [accentRgb]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ imageRendering: "pixelated" }}
    />
  );
}
