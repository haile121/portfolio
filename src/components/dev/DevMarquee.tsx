"use client";

import { landingDevSkills } from "../../data/landing";
import {
  ReactLogo,
  NextjsLogo,
  TypescriptLogo,
  JavascriptLogo,
  NodejsLogo,
  FlutterLogo,
  PythonLogo,
  CppLogo,
  DartLogo,
  ExpressLogo,
  NuxtLogo,
  PrismaLogo,
  BetterAuthLogo,
  JWTLogo,
  OAuthLogo,
  VercelLogo,
  RailwayLogo,
  AWSLogo,
  PostgresLogo,
  TailwindLogo,
  DockerLogo,
  MongodbLogo,
} from "./DevMarqueeLogos";

// Row 1: 100% Real Company Tech Stack Logos (Raw floating SVGs without box containers)
const rowLogos = [
  { name: "React", component: <ReactLogo /> },
  { name: "Next.js", component: <NextjsLogo /> },
  { name: "TypeScript", component: <TypescriptLogo /> },
  { name: "JavaScript", component: <JavascriptLogo /> },
  { name: "Node.js", component: <NodejsLogo /> },
  { name: "MongoDB", component: <MongodbLogo /> },
  { name: "Flutter", component: <FlutterLogo /> },
  { name: "Python", component: <PythonLogo /> },
  { name: "C++", component: <CppLogo /> },
  { name: "Dart", component: <DartLogo /> },
  { name: "Express.js", component: <ExpressLogo /> },
  { name: "Nuxt.js", component: <NuxtLogo /> },
  { name: "Prisma", component: <PrismaLogo /> },
  { name: "Better Auth", component: <BetterAuthLogo /> },
  { name: "JWT", component: <JWTLogo /> },
  { name: "OAuth", component: <OAuthLogo /> },
  { name: "Vercel", component: <VercelLogo /> },
  { name: "Railway", component: <RailwayLogo /> },
  { name: "AWS", component: <AWSLogo /> },
  { name: "PostgreSQL", component: <PostgresLogo /> },
  { name: "Tailwind CSS", component: <TailwindLogo /> },
  { name: "Docker", component: <DockerLogo /> },
];

export function DevMarquee() {
  return (
    <div className="py-8 border-y border-border overflow-hidden whitespace-nowrap relative space-y-6 bg-surface/30">
      {/* ROW 1: Left to Right (RAW FLOATING SVG LOGOS ONLY, NO BOXES) */}
      <div className="flex overflow-hidden select-none py-1">
        <div className="flex shrink-0 animate-[marquee-reverse_28s_linear_infinite] items-center gap-9">
          {[...rowLogos, ...rowLogos, ...rowLogos].map((item, idx) => (
            <div
              key={`logo-${item.name}-${idx}`}
              title={item.name}
              className="flex items-center justify-center shrink-0 transform hover:scale-125 transition-transform duration-300 cursor-pointer text-text hover:text-blue"
            >
              {item.component}
            </div>
          ))}
        </div>
      </div>

      {/* ROW 2: Right to Left (Full Dev Half Split View Stacks) */}
      <div className="flex overflow-hidden select-none pt-1">
        <div className="flex shrink-0 animate-[marquee_30s_linear_infinite] items-center gap-8">
          {[...landingDevSkills, ...landingDevSkills, ...landingDevSkills].map(
            (tech, idx) => (
              <span
                key={`text-${tech}-${idx}`}
                className="font-mono text-[22px] md:text-[26px] font-black text-text3/80 flex items-center gap-4 tracking-tight uppercase"
              >
                <span>{tech}</span>
                <span className="text-blue not-italic text-xs">◆</span>
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
