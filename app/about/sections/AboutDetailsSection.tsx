"use client";

import { useRef } from "react";
import { useTextReveal } from "@/hooks/useTextReveal";
import { aboutDetails } from "@/lib/data";

const AboutDetailsSection = () => {
  return (
    <section className="mt-5">
      <div className="max-w-2xl mx-auto md:px-5">
        <div className="grid grid-cols-1 gap-5 md:gap-20">
          {aboutDetails.map((detail, index) => {
            const titleRef = useRef<HTMLHeadingElement>(null);
            const textRef = useRef<HTMLParagraphElement>(null);

            useTextReveal({
              ref: titleRef,
              y: 200,
              duration: 1,
              delay: index * 0.1,
            });

            useTextReveal({
              ref: textRef,
              y: 200,
              duration: 1,
              delay: index * 0.1 + 0.2,
              type: "lines",
            });

            return (
              <div
                key={index}
                className="flex flex-col gap-4 md:gap-6 justify-between"
              >
                <div className="overflow-hidden">
                  <h3
                    ref={titleRef}
                    className="font-oswald text-2xl md:text-5xl uppercase tracking-tight"
                  >
                    {detail.title}
                  </h3>
                </div>

                <div className="overflow-hidden uppercase text-sm md:text-base">
                  <p ref={textRef}>{detail.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutDetailsSection;
