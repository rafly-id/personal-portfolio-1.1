import type { Metadata } from "next";

import HeroSection from "./sections/HeroSection";
import ProfileSection from "./sections/ProfileSection";
import MarqueeSection from "./sections/MarqueeSection";
import AboutDetailsSection from "./sections/AboutDetailsSection";
import ExperienceSection from "./sections/ExperienceSection";
import TechStackSection from "./sections/TechStackSection";
import FeaturedProjectsSection from "./sections/FeaturedProjectsSection";
import CertificatesSection from "./sections/CertificatesSection";

export const metadata: Metadata = {
  description:
    "Personal portfolio of Muhammad Rafly Adriansyah — a Software Engineer & Web Developer specializing in modern React, Next.js, TypeScript, and high-performance web applications.",
  alternates: {
    canonical: "/",
  },
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
        <FeaturedProjectsSection />
      </div>

      {/* Certificates Section with Hover Media Reveal */}
      <CertificatesSection />
    </div>
  );
};

export default Landing;

