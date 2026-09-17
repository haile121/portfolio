"use client";

import { useEffect, useRef } from "react";

interface ConstellationCanvasProps {
  persona: "code" | "design";
  matrixMode: boolean;
}

export function ConstellationCanvas({
  persona,
  matrixMode,
}: ConstellationCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Pure Binary & Clean Developer Code Characters Matrix
    const matrixChars = "0101010101010101{}/<>[]!=$%#@*+-~";
    const fontSize = 13;
    const columns = Math.floor(width / fontSize) + 1;
    const drops: number[] = new Array(columns).fill(1);

    // Constellation Particles Variables
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];
    const particleCount = Math.min(Math.floor(width / 25), 45);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let lastMatrixTime = 0;

    const render = (time: number) => {
      if (matrixMode) {
        // Slow down matrix rain frames slightly for cinematic retro feel
        if (time - lastMatrixTime > 33) {
          ctx.fillStyle = "rgba(5, 6, 8, 0.15)";
          ctx.fillRect(0, 0, width, height);

          ctx.font = `${fontSize}px monospace`;

          for (let i = 0; i < drops.length; i++) {
            const char =
              matrixChars[Math.floor(Math.random() * matrixChars.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            // Bright green head character, slightly darker trail
            ctx.fillStyle =
              drops[i] * fontSize > height * 0.8 ? "#34d399" : "#10b981";
            ctx.fillText(char, x, y);

            if (y > height && Math.random() > 0.975) {
              drops[i] = 0;
            }
            drops[i]++;
          }
          lastMatrixTime = time;
        }
      } else {
        // Standard Constellation Network
        ctx.clearRect(0, 0, width, height);

        const dotColor = persona === "code" ? "59, 130, 246" : "249, 115, 22";

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${dotColor}, 0.3)`;
          ctx.fill();

          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = `rgba(${dotColor}, ${1 - dist / 140})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [persona, matrixMode]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${
        matrixMode ? "opacity-90" : "opacity-40"
      }`}
    />
  );
}
