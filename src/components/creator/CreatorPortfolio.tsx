"use client";

import { CreatorNavbar } from "./CreatorNavbar";
import { CreatorHero } from "./CreatorHero";
import { CreatorMarquee } from "./CreatorMarquee";
import { CreatorAbout } from "./CreatorAbout";
import { CreatorWork } from "./CreatorWork";
import { CreatorServices } from "./CreatorServices";
import { CreatorExperience } from "./CreatorExperience";
import { CreatorTestimonials } from "./CreatorTestimonials";
import { CreatorContact } from "./CreatorContact";
import { CreatorFooter } from "./CreatorFooter";

export function CreatorPortfolio() {
  return (
    <div className="w-full bg-bg text-text scroll-smooth">
      <CreatorNavbar />
      <CreatorHero />
      <CreatorMarquee />
      <CreatorAbout />
      <CreatorWork />
      <CreatorServices />
      <CreatorExperience />
      <CreatorTestimonials />
      <CreatorContact />
      <CreatorFooter />
    </div>
  );
}
