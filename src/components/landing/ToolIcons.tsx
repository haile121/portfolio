import React from "react";

export function FigmaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 57" fill="none">
      <path
        d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z"
        fill="#1ABCFE"
      />
      <path
        d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
        fill="#0ACF83"
      />
      <path
        d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
        fill="#FF7262"
      />
      <path
        d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
        fill="#F24E1E"
      />
      <path
        d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
        fill="#A259FF"
      />
    </svg>
  );
}

export function AeIcon({ size = 18 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded bg-[#00005b] border border-[#9999ff]/50 flex items-center justify-center font-bold font-mono text-[9px] text-[#9999ff] leading-none shrink-0 select-none"
      title="Adobe After Effects"
    >
      Ae
    </div>
  );
}

export function AiIcon({ size = 18 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded bg-[#330000] border border-[#ff9a00]/50 flex items-center justify-center font-bold font-mono text-[9px] text-[#ff9a00] leading-none shrink-0 select-none"
      title="Adobe Illustrator"
    >
      Ai
    </div>
  );
}

export function PrIcon({ size = 18 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded bg-[#00005b] border border-[#ea77ff]/50 flex items-center justify-center font-bold font-mono text-[9px] text-[#ea77ff] leading-none shrink-0 select-none"
      title="Adobe Premiere Pro"
    >
      Pr
    </div>
  );
}

export function PsIcon({ size = 18 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded bg-[#001e36] border border-[#31a8ff]/50 flex items-center justify-center font-bold font-mono text-[9px] text-[#31a8ff] leading-none shrink-0 select-none"
      title="Adobe Photoshop"
    >
      Ps
    </div>
  );
}

export function NotionIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <title>Notion</title>
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l11.023-.746c.326 0 .047-.326-.047-.373L15.86 1.734c-.466-.373-.98-.606-2.285-.513L3.107 2.06c-.466.047-.56.28-.373.466l1.725 1.682zm.746 3.73v13.518c0 .84.373 1.166 1.306 1.119l12.75-.84c.933-.047 1.166-.606 1.166-1.446V6.953c0-.653-.28-.933-.886-.886l-13.447.886c-.653.047-.889.373-.889.985zm12.33 1.306c.093.42 0 .84-.42.886l-.7.093v9.88l1.353-.093c.42 0 .56.326.466.746-.093.373-.42.42-.98.466l-3.962.28c-.466.047-.653-.186-.653-.606V11.23l-3.543 8.39-1.259.093-3.078-7.97v7.506l1.4.186c.42.047.466.373.42.793-.047.373-.373.42-.886.466l-3.683.233c-.42 0-.606-.233-.513-.606.047-.42.28-.793.793-.84l.84-.093V9.098l-1.026-.14c-.42-.047-.466-.373-.42-.746.047-.42.326-.466.84-.513l3.823-.28 3.543 8.623 3.357-8.623 3.497-.233z" />
    </svg>
  );
}

export function CapCutIcon({ size = 18 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded bg-black border border-white/20 flex items-center justify-center text-white shrink-0 select-none"
      title="CapCut"
    >
      <svg
        width={size - 4}
        height={size - 4}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path d="M6 6L18 18M6 18L18 6" />
      </svg>
    </div>
  );
}

export function FilmoraIcon({ size = 18 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center font-extrabold text-[10px] text-white leading-none shrink-0 select-none shadow-sm"
      title="Wondershare Filmora"
    >
      Fi
    </div>
  );
}

export function CanvaIcon({ size = 18 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full bg-gradient-to-tr from-[#00c4cc] to-[#7d2ae8] flex items-center justify-center font-serif font-bold text-[10px] text-white leading-none shrink-0 select-none shadow-sm"
      title="Canva"
    >
      C
    </div>
  );
}

export function LoomIcon({ size = 18 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded bg-[#625df5] flex items-center justify-center font-bold text-[10px] text-white leading-none shrink-0 select-none"
      title="Loom"
    >
      <svg
        width={size - 6}
        height={size - 6}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    </div>
  );
}
