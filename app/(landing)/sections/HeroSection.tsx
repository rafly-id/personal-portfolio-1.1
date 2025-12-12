import TextReveal from "@/components/animations/TextReveal";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5">
      <div className="font-bold font-oswald text-5xl md:text-8xl mt-5 md:mt-10">
        <TextReveal text="RAFLY" y={150} duration={1} delay={0} />
        <TextReveal text="ADRIANSYAH" y={150} duration={1} delay={0.1} />
        <TextReveal text="FRONTEND" y={150} duration={1} delay={0.2} />
        <TextReveal text="DEVELOPER" y={150} duration={1} delay={0.3} />
      </div>
      <div className="flex flex-col justify-end uppercase font-oswald font-light text-sm md:text-lg md:leading-relaxed">
        <TextReveal
          text="Crafting Engaging Web Experiences with Precision and Creativity"
          y={100}
          duration={1}
          delay={0.1}
        />
        <TextReveal
          text="Specializing in React, Next.js, GSAP, and Modern Frontend Technologies"
          y={100}
          duration={1}
          delay={0.2}
        />
        <TextReveal
          text="Let's Build Something Amazing Together!"
          y={100}
          duration={1}
          delay={0.3}
        />
      </div>
    </div>
  );
};

export default HeroSection;
