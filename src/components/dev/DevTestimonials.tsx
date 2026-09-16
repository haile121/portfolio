"use client";

import { devTestimonials } from "../../data/dev";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";
import { Star, Quote } from "lucide-react";

export function DevTestimonials() {
  return (
    <section
      id="testimonials"
      className="px-6 md:px-16 py-16 md:py-28 overflow-hidden"
    >
      {/* Section Header */}
      <ScrollReveal
        variant="blur-in"
        className="flex items-baseline gap-5 mb-20"
      >
        <span className="font-mono text-xs text-blue min-w-[32px] font-bold">
          06
        </span>
        <div className="flex-1 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-inter text-[clamp(2.2rem,4.5vw,3.8rem)] font-extrabold tracking-tight leading-[1.1]">
              Testimonials
            </h2>
          </div>
          <p className="text-xs text-text3 font-mono max-w-sm leading-relaxed">
            Direct endorsements from organization leaders, presidents & CEOs.
          </p>
        </div>
      </ScrollReveal>

      {/* Testimonials Grid */}
      <ScrollReveal
        stagger
        staggerDelay={0.15}
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 pt-6 pb-8"
      >
        {devTestimonials.map((quote) => (
          <ScrollRevealItem
            variant="fade-up"
            key={quote.author}
            className="group relative"
          >
            {/* Modern Graphic Quote Icon Anchored directly on Card Border Line */}
            <div className="absolute -top-5 -left-3 z-20 pointer-events-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
              <Quote size={40} className="testimonial-quote-icon-dev" />
            </div>

            {/* Asymmetric Shaped Card Container — Responsive for Day / Night */}
            <div className="relative testimonial-card border rounded-tl-[36px] rounded-tr-[16px] rounded-bl-[20px] rounded-br-[44px] p-7 sm:p-9 pt-10 flex flex-col justify-between min-h-[340px] transition-transform duration-300 group-hover:-translate-y-1">
              {/* Top-Right Floating Circular Headshot Avatar */}
              <div className="absolute -top-6 right-6 z-30">
                {quote.image ? (
                  <img
                    src={quote.image}
                    alt={quote.author}
                    className="w-20 h-20 sm:w-22 sm:h-22 rounded-full object-cover border-[4px] testimonial-avatar shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[4px] testimonial-avatar flex items-center justify-center text-lg font-bold shadow-2xl font-mono">
                    {quote.avatar}
                  </div>
                )}
              </div>

              {/* Message First */}
              <p className="text-[14px] sm:text-[15px] leading-relaxed testimonial-text font-sans mt-3 mb-6 pr-16">
                "{quote.text}"
              </p>

              {/* Author Details: Full Name & Full Title */}
              <div className="mb-6 border-t testimonial-divider pt-4">
                <h3 className="text-base sm:text-lg font-bold tracking-tight testimonial-author-name font-inter">
                  {quote.author}
                </h3>
                <p className="text-xs testimonial-author-role font-sans font-medium mt-1 leading-relaxed">
                  {quote.role}
                </p>
              </div>

              {/* Bottom Rating Pill Badge with 5 Stars */}
              <div>
                <div className="inline-flex items-center gap-1 px-3.5 py-1.5 testimonial-rating-pill font-extrabold text-xs rounded-full shadow-lg transition-transform duration-300 group-hover:scale-105">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill="currentColor"
                      className="text-current"
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollRevealItem>
        ))}
      </ScrollReveal>
    </section>
  );
}
