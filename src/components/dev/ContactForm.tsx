"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const subject = encodeURIComponent(`Portfolio: ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
      );
      window.open(
        `mailto:haileag8@gmail.com?subject=${subject}&body=${body}`,
        "_blank",
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputBase =
    "w-full bg-transparent border-b text-[15px] py-3.5 outline-none transition-all duration-300 placeholder:text-current/30";
  const borderIdle = "border-[rgba(255,255,255,0.12)] dark:border-border";
  const borderFocus = "border-blue";

  return (
    <div>
      <div className="text-[11px] font-bold tracking-[0.25em] uppercase opacity-40 mb-8">
        Send a message
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-7">
        <div className="relative">
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            placeholder="Your name"
            className={`${inputBase} ${focused === "name" ? borderFocus : borderIdle}`}
          />
          <div
            className={`absolute bottom-0 left-0 h-px bg-blue transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              focused === "name" ? "w-full" : "w-0"
            }`}
          />
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            placeholder="Your email"
            className={`${inputBase} ${focused === "email" ? borderFocus : borderIdle}`}
          />
          <div
            className={`absolute bottom-0 left-0 h-px bg-blue transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              focused === "email" ? "w-full" : "w-0"
            }`}
          />
        </div>

        <div className="relative">
          <textarea
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
            placeholder="Tell me about your project..."
            className={`${inputBase} resize-none ${
              focused === "message" ? borderFocus : borderIdle
            }`}
          />
          <div
            className={`absolute bottom-0 left-0 h-px bg-blue transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              focused === "message" ? "w-full" : "w-0"
            }`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className={`group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-md font-inter text-sm font-bold tracking-wider transition-all duration-300 clickable mt-2 ${
            status === "success"
              ? "bg-[#10b981] text-white"
              : status === "error"
                ? "bg-[#ef4444] text-white"
                : "bg-blue text-white hover:-translate-y-px hover:shadow-[0_12px_40px_var(--color-glow)]"
          } disabled:opacity-70 disabled:cursor-not-allowed`}
        >
          {status === "idle" && (
            <>
              Send Message
              <Send
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </>
          )}
          {status === "sending" && (
            <>
              Sending...
              <Loader2 size={15} className="animate-spin" />
            </>
          )}
          {status === "success" && (
            <>
              Message sent!
              <CheckCircle size={15} />
            </>
          )}
          {status === "error" && "Something went wrong — try again"}
        </button>
      </form>
    </div>
  );
}
