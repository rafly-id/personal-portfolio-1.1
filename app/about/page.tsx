import type { Metadata } from "next";

import AboutHeroSection from "./sections/AboutHeroSection";
import AboutDetailsSection from "./sections/AboutDetailsSection";
import TechStackSection from "./sections/TechStackSection";
import CertificatesSection from "./sections/CertificatesSection";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about me, my skills, experience, and the technologies I work with.",
};

const About = () => {
  return (
    <div className="mx-5">
      <AboutHeroSection />
      <AboutDetailsSection />
      <TechStackSection />
      <CertificatesSection />
    </div>
  );
};

export default About;
