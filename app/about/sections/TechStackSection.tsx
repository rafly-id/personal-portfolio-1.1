import TextReveal from "@/components/animations/TextReveal";
import { techStack } from "@/lib/data";

const TechStackSection = () => {
  return (
    <div className="mt-20 md:mt-32">
      <div className="font-oswald text-4xl md:text-6xl uppercase mb-10 text-center">
        <TextReveal text="Tech Stack" y={100} duration={1} delay={0} />
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3"
          >
            <div>
              {tech.icon}
            </div>
            <span className="font-medium text-sm md:text-lg">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackSection;
