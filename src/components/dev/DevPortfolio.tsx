"use client";

import { DevNavbar } from "./DevNavbar";
import { DevHero } from "./DevHero";
import { DevMarquee } from "./DevMarquee";
import { DevAbout } from "./DevAbout";
import { DevSkills } from "./DevSkills";
import { DevExperience } from "./DevExperience";
import { DevRecognitions } from "./DevRecognitions";
import { DevProjects } from "./DevProjects";
import { DevTestimonials } from "./DevTestimonials";
import { DevContact } from "./DevContact";
import { DevFooter } from "./DevFooter";

export function DevPortfolio() {
  return (
    <div className="w-full bg-bg text-text scroll-smooth">
      <DevNavbar />
      <DevHero />
      <DevMarquee />
      <DevAbout />
      <DevSkills />
      <DevExperience />
      <DevProjects />
      <DevRecognitions />
      <DevTestimonials />
      <DevContact />
      <DevFooter />
    </div>
  );
}
