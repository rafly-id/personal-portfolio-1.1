import type { Metadata } from "next";

import ButtonCTA from "@/components/ui/ButtonCTA";
import HeroSection from "./sections/HeroSection";
import ProfileSection from "./sections/ProfileSection";
import MarqueeSection from "./sections/MarqueeSection";
import FeaturedWorkSection from "./sections/FeaturedWorkSection";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my portfolio website. Explore my work and learn more about me.",
};

const Landing = () => {
  return (
    <div className="mx-5">
      <HeroSection />
      <ProfileSection />
      <MarqueeSection />
      <ButtonCTA link="/about" text="Learn More About Me" className="md:p-10" />
      <FeaturedWorkSection />
      <ButtonCTA link="/work" text="See All My Work" className="md:p-10" />
    </div>
  );
};

export default Landing;
