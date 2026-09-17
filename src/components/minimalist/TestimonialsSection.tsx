"use client";

import { MessageSquareQuote } from "lucide-react";
import { devTestimonials } from "@/data/dev";
import { creatorTestimonials } from "@/data/creator";

interface TestimonialsSectionProps {
  persona: "code" | "design";
  theme: "dark" | "light";
  accentText: string;
}

export function TestimonialsSection({
  persona,
  theme,
  accentText,
}: TestimonialsSectionProps) {
  const testimonials =
    persona === "code" ? devTestimonials : creatorTestimonials;

  return (
    <section id="testimonials" className="space-y-4 pt-4">
      <div
        className={`flex items-center justify-between border-b pb-3 ${
          theme === "dark" ? "border-zinc-800/80" : "border-slate-200"
        }`}
      >
        <div className="flex items-center gap-2">
          <MessageSquareQuote size={16} className={accentText} />
          <h2
            className={`text-sm font-mono uppercase tracking-wider ${
              theme === "dark"
                ? "text-zinc-400 font-bold"
                : "text-slate-700 font-extrabold"
            }`}
          >
            Endorsements & Testimonials
          </h2>
        </div>
        <span
          className={`text-xs font-mono ${
            theme === "dark" ? "text-zinc-500" : "text-slate-500 font-medium"
          }`}
        >
          {testimonials.length} Reviews
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, idx) => {
          const imgPath = (t as { image?: string }).image;
          const avatarText = (t as { avatar?: string }).avatar || "HA";

          return (
            <div
              key={t.author + idx}
              className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                theme === "dark"
                  ? "bg-zinc-900/30 border-white/[0.07] hover:border-zinc-700/80"
                  : "bg-white border-slate-200/90 hover:border-slate-300 shadow-sm"
              }`}
            >
              <p
                className={`text-xs leading-relaxed italic mb-4 ${
                  theme === "dark"
                    ? "text-zinc-300"
                    : "text-slate-700 font-medium"
                }`}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              <div
                className={`flex items-center gap-3 pt-3 border-t mt-auto ${
                  theme === "dark" ? "border-zinc-800/40" : "border-slate-200"
                }`}
              >
                {imgPath ? (
                  <img
                    src={imgPath}
                    alt={t.author}
                    className={`w-8 h-8 rounded-full object-cover border grayscale hover:grayscale-0 transition-all shrink-0 ${
                      theme === "dark"
                        ? "border-zinc-700/80"
                        : "border-slate-300"
                    }`}
                  />
                ) : (
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                      theme === "dark"
                        ? "bg-zinc-800 border-zinc-700 text-zinc-300"
                        : "bg-slate-100 border-slate-300 text-slate-800"
                    }`}
                  >
                    {avatarText}
                  </div>
                )}
                <div className="min-w-0">
                  <div
                    className={`text-xs font-bold truncate tracking-tight ${
                      theme === "dark" ? "text-zinc-100" : "text-slate-900"
                    }`}
                  >
                    {t.author}
                  </div>
                  <div
                    className={`text-[10px] font-mono line-clamp-1 ${
                      theme === "dark"
                        ? "text-zinc-500"
                        : "text-slate-500 font-medium"
                    }`}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
