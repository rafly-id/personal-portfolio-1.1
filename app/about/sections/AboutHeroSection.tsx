import ScrollVelocity from "@/components/animations/ScrollVelocity";
import TextReveal from "@/components/animations/TextReveal";
import ParallaxImage from "@/components/animations/ParalaxImages";

const AboutHeroSection = () => {
  return (
    <>
      <div className="uppercase">
        <TextReveal
          text={
            <ScrollVelocity
              texts={["About Me/", "Rafly Adriansyah/"]}
              velocity={50}
              numCopies={10}
            />
          }
          y={160}
          enableSplit={false}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 md:mt-20">
        <div>
          <div className="uppercase font-oswald font-bold text-4xl md:text-7xl mb-5 md:mb-10">
            <TextReveal text="Hi, I’m Rafly." y={150} duration={1} delay={0} />
          </div>
          <div className="text-xl md:text-3xl font-light">
            <TextReveal
              text="Nice to meet you — I’m a Frontend Developer who enjoys building clean and modern web interfaces."
              y={150}
              duration={1}
              delay={0.2}
            />
          </div>
        </div>
        <div className="w-full h-full">
          <ParallaxImage
            src="/images/profile.png"
            alt="Profile"
            enableReveal={true}
            y={-30}
          />
        </div>
      </div>
    </>
  );
};

export default AboutHeroSection;
