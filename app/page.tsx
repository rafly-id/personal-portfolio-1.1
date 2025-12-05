import TextReveal from "@/components/animations/TextReveal";
import ParallaxImage from "@/components/animations/ParalaxImages";
import ScrollVelocity from "@/components/animations/ScrollVelocity";
import CardWork from "../components/common/CardWork";
import ButtonCTA from "@/components/common/ButtonCTA";

const Landing = () => {
  return (
    <div className="mx-5">

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
            text="Specializing in React, Next.js, and Modern Frontend Technologies"
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

      <div className="w-full h-auto object-cover">
        <ParallaxImage
          src="/images/profile-5.png"
          alt="Profile"
          enableReveal={true}
        />
      </div>
      <div className="uppercase mt-5 md:mt-10">
        <ScrollVelocity
          texts={["Rafly Adriansyah", "Frontend Developer"]}
          velocity={50}
          numCopies={6}
        />
      </div>
      <ButtonCTA link="/about" text="Learn More About Me" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <CardWork
          imageSrc="/images/project-1.png"
          imageAlt="Project 1"
          title="Movie App"
          tech={["react", "tailwindcss"]}
          link="https://rafly-id-try-movie-app.vercel.app/"
          github="https://github.com/rafly-id/rafly_id_tryMovieApp"
        />
        <CardWork
          imageSrc="/images/project-2.png"
          imageAlt="Project 2"
          title="Zentry App Awwward"
          tech={["react", "gsap", "tailwindcss"]}
          link="https://rafly-id-awwward.vercel.app/"
          github="https://github.com/rafly-id/rafly_id_awwward"
        />
      </div>
      <ButtonCTA link="/work" text="See All My Work" />
    </div>
  );
};

export default Landing;
