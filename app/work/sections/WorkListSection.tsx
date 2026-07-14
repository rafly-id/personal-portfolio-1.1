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
  const tooltipRef = useRef<HTMLDivElement>(null);

  const xTo = useRef<any>(null);
  const yTo = useRef<any>(null);

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

      // 2. Initialize high-performance cursor tracking
      if (tooltipRef.current) {
        xTo.current = gsap.quickTo(tooltipRef.current, "x", { duration: 0.35, ease: "power3.out" });
        yTo.current = gsap.quickTo(tooltipRef.current, "y", { duration: 0.35, ease: "power3.out" });
      }

      return () => {
        mm.revert();
      };
    },
    { scope: containerRef }
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (xTo.current && yTo.current) {
      xTo.current(e.clientX);
      yTo.current(e.clientY);
    }
  };

  const handleSectionMouseEnter = () => {
    // Fade out and scale down global custom cursor
    const globalCursor = document.querySelector("div[class*='z-9999']");
    if (globalCursor) {
      gsap.to(globalCursor, { scale: 0, opacity: 0, duration: 0.15 });
    }
  };

  const handleSectionMouseLeave = () => {
    // Restore global custom cursor
    const globalCursor = document.querySelector("div[class*='z-9999']");
    if (globalCursor) {
      gsap.to(globalCursor, { scale: 1, opacity: 1, duration: 0.2 });
    }
  };

  const handleCardMouseEnter = () => {
    if (tooltipRef.current) {
      gsap.to(tooltipRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    }
  };

  const handleCardMouseLeave = () => {
    if (tooltipRef.current) {
      gsap.to(tooltipRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power3.out",
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleSectionMouseEnter}
      onMouseLeave={handleSectionMouseLeave}
      className="relative w-full py-16 select-none"
    >
      {/* Dual-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start w-full">
        {/* Left Column (standard speed) */}
        <div className="flex flex-col gap-12 md:gap-24 w-full">
          {leftProjects.map((project, index) => (
            <div
              key={`left-${index}`}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
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
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
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

      {/* Floating Dynamic Tooltip (desktop only) */}
      <div
        ref={tooltipRef}
        className="fixed top-0 left-0 pointer-events-none z-50 hidden md:flex flex-col justify-center items-center rounded-full bg-foreground text-background px-5 py-2.5 shadow-2xl scale-0 opacity-0 transform -translate-x-1/2 -translate-y-1/2 border border-background/10 backdrop-blur-md select-none"
        style={{ willChange: "transform" }}
      >
        <span className="font-sans text-xs tracking-wider text-background/85 font-medium flex items-center gap-1.5 lowercase leading-none">
          view project
        </span>
      </div>
    </div>
  );
};

export default WorkListSection;
