import ButtonCTA from "@/components/common/ButtonCTA";
import HeroSection from "./sections/HeroSection";
import ProfileSection from "./sections/ProfileSection";
import MarqueeSection from "./sections/MarqueeSection";
import FeaturedWorkSection from "./sections/FeaturedWorkSection";

const Landing = () => {
  return (
    <div className="mx-5">
      <HeroSection />
      <ProfileSection />
      <MarqueeSection />
      <ButtonCTA link="/about" text="Learn More About Me" />
      <FeaturedWorkSection />
      <ButtonCTA link="/work" text="See All My Work" />
    </div>
  );
};

export default Landing;
