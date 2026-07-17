"use client";

import { useRef } from "react";
import CardWork from "@/components/feature/CardWork";
import { projects } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Project } from "@/types";

const WorkListSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  // Distribute projects into left and right columns (asymmetric list)
  const leftProjects = projects.filter((_, idx) => idx % 2 === 0);
  const rightProjects = projects.filter((_, idx) => idx % 2 !== 0);

  useGSAP(
    () => {
      // Parallax Racing Columns (Desktop only)
      const mm = gsap.matchMedia();

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
      {/* Mobile: single-column sequential list */}
      <div className="flex flex-col gap-12 w-full md:hidden">
        {projects.map((project, index) => (
          <CardWork
            key={`mobile-${index}`}
            slug={project.slug}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            title={project.title}
            tech={project.tech}
          />
        ))}
      </div>

      {/* Desktop: asymmetric dual-column grid with parallax */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-24 items-start w-full">
        {/* Left Column (standard speed) */}
        <div className="flex flex-col gap-24 w-full">
          {leftProjects.map((project, index) => (
            <CardWork
              key={`left-${index}`}
              slug={project.slug}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              title={project.title}
              tech={project.tech}
            />
          ))}
        </div>

        {/* Right Column (asymmetrical parallax speed) */}
        <div
          ref={rightColumnRef}
          className="flex flex-col gap-24 w-full md:mt-24"
        >
          {rightProjects.map((project, index) => (
            <CardWork
              key={`right-${index}`}
              slug={project.slug}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              title={project.title}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkListSection;
