"use client";

import Title from "@/components/ui/Title";
import { techStack } from "@/lib/data";

const TechStackSection = () => {
  return (
    <section className="mt-20 md:mt-32">
      <div className="flex justify-center text-center mb-10">
        <Title text="tech stack" />
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-16 max-w-5xl mx-auto">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <div>
              <tech.icon className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <span className="text-sm uppercase">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
