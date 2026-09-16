"use client";

// Shared portfolio logo — matches landing page style
export function PortfolioLogo({
  variant = "dev",
}: {
  variant?: "dev" | "creator";
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-baseline font-syne text-[20px] font-bold tracking-tighter leading-none select-none">
        <span className="text-text">H</span>
        <span className="text-text3 text-[18px]">A</span>
        <span
          className={variant === "creator" ? "text-[#f97316]" : "text-blue"}
        >
          .
        </span>
      </div>
      <span className="font-dm-serif text-[14px] tracking-tight text-text ml-1 border-l border-border pl-2.5 opacity-70">
        {variant === "dev" ? (
          <>
            dev<span className="text-blue opacity-60"></span>
          </>
        ) : (
          <>
            create<span className="text-[#f97316] opacity-60"></span>
          </>
        )}
      </span>
    </div>
  );
}
