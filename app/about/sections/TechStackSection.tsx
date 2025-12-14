"use client";

import { useRef } from "react";
import { useTextReveal } from "@/hooks/useTextReveal";
import { techStack } from "@/lib/data";

const TechStackSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useTextReveal({
    ref: titleRef,
    y: 150,
    duration: 1,
    delay: 0,
  });

  return (
    <section className="mt-20 md:mt-32">
      <div className="font-oswald text-4xl md:text-6xl uppercase mb-10 text-center overflow-hidden">
        <h2 ref={titleRef}>Tech Stack</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-16 max-w-4xl mx-auto">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <div>
              <tech.icon className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <span className="font-medium text-sm md:text-lg">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
