import type { Metadata } from "next";

import ButtonCTA from "@/components/ui/ButtonCTA";
import HeroSection from "./sections/HeroSection";
import ProfileSection from "./sections/ProfileSection";
import MarqueeSection from "./sections/MarqueeSection";
import FeaturedWorkSection from "./sections/FeaturedWorkSection";

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

      <div className="mt-4 md:mt-6">
        <ButtonCTA
          link="/about"
          text="More About Me"
          className="px-5 md:p-10"
        />
      </div>

      <div className="mt-14 md:mt-16">
        <FeaturedWorkSection />
      </div>

      <div className="mt-2 md:mt-10">
        <ButtonCTA link="/work" text="See All My Work" className="md:p-10" />
      </div>
    </div>
  );
};

export default Landing;
