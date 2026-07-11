import type { Metadata } from "next";

import ButtonCTA from "@/components/ui/ButtonCTA";
import HeroSection from "./sections/HeroSection";
import ProfileSection from "./sections/ProfileSection";
import MarqueeSection from "./sections/MarqueeSection";
import AboutDetailsSection from "./sections/AboutDetailsSection";
import ExperienceSection from "./sections/ExperienceSection";
import TechStackSection from "./sections/TechStackSection";
import FeaturedWorkSection from "./sections/FeaturedWorkSection";
import CertificatesSection from "./sections/CertificatesSection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to my portfolio website. Explore my work and learn more about me.",
};

const Landing = () => {
  return (
    <div className="mx-5">
      <HeroSection />

      <div className="mt-6 md:mt-14">
        <ProfileSection />
      </div>

      <div className="mt-6 md:mt-14">
        <MarqueeSection />
      </div>

      {/* About Details Section with Z-Axis scrolling */}
      <AboutDetailsSection />

      {/* Experience Section with Inverted Color Theme */}
      <ExperienceSection />

      {/* Tech Stack Section with Scroll Reveal */}
      <TechStackSection />

      <div className="mt-14 md:mt-16">
        <FeaturedWorkSection />
      </div>

      <div className="mt-2 md:mt-10">
        <ButtonCTA link="/work" text="See All My Work" className="md:p-10" />
      </div>

      {/* Certificates Section with Hover Media Reveal */}
      <CertificatesSection />
    </div>
  );
};

export default Landing;

