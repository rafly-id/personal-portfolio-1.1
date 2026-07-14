"use client";

import { useRef } from "react";
import CardWork from "@/components/feature/CardWork";
import { projects } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Project } from "@/types";

gsap.registerPlugin(ScrollTrigger);

const WorkListSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  // Distribute projects into left and right columns (asymmetric list)
  const leftProjects = projects.filter((_, idx) => idx % 2 === 0);
  const rightProjects = projects.filter((_, idx) => idx % 2 !== 0);

  useGSAP(
    () => {
      // 1. Parallax Racing Columns (Desktop only)
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        if (!rightColumnRef.current || !containerRef.current) return;

        gsap.fromTo(
          rightColumnRef.current,
          { y: 120 },
          {
            y: -120,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
              invalidateOnRefresh: true,
            },
          }
        );
      });



      return () => {
        mm.revert();
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full py-16 select-none"
    >
      {/* Dual-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start w-full">
        {/* Left Column (standard speed) */}
        <div className="flex flex-col gap-12 md:gap-24 w-full">
          {leftProjects.map((project, index) => (
            <div
              key={`left-${index}`}
              className="w-full"
            >
              <CardWork
                slug={project.slug}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                title={project.title}
                tech={project.tech}
                link={project.link}
                github={project.github}
              />
            </div>
          ))}
        </div>

        {/* Right Column (asymmetrical parallax speed) */}
        <div
          ref={rightColumnRef}
          className="flex flex-col gap-12 md:gap-24 w-full md:mt-24"
        >
          {rightProjects.map((project, index) => (
            <div
              key={`right-${index}`}
              className="w-full"
            >
              <CardWork
                slug={project.slug}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                title={project.title}
                tech={project.tech}
                link={project.link}
                github={project.github}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default WorkListSection;
