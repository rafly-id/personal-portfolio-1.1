"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const leftCol = sectionRef.current.querySelector(".exp-left");
      const rightCol = sectionRef.current.querySelector(".exp-right");

      // 1. Entry scroll reveal for section text/content
      gsap.set([leftCol, rightCol], { y: 60, opacity: 0 });

      const tlContent = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tlContent.to(leftCol, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })
      .to(
        rightCol,
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // 2. Dynamic Theme Switching (Discrete 0.6s smooth transition, non-scrubbed)
      // Animates `--background` and `--foreground` CSS variables on the root document element.
      // Uses `toggleActions` for robust play/reverse triggers on entry and exit.
      const root = document.documentElement;

      gsap.to(root, {
        "--background": "#1c1a19",
        "--foreground": "#f4f3ef",
        duration: 0.3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", // triggers dark mode when top of section enters viewport
          end: "bottom center", // triggers light mode when bottom of section leaves viewport
          toggleActions: "play reverse play reverse", // play on enter, reverse on leave, play on enterBack, reverse on leaveBack
          invalidateOnRefresh: true,
        },
      });

      return () => {
        // Safe cleanup: remove custom style overrides on documentElement unmount
        root.style.removeProperty("--background");
        root.style.removeProperty("--foreground");
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-full text-foreground py-24 md:py-36 overflow-hidden z-10 relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start w-full px-4 md:px-10 max-w-6xl mx-auto">

        {/* Left Column: Sticky-like info */}
        <div className="exp-left md:col-span-5 text-left md:sticky md:top-24 flex flex-col justify-center">
          <span className="w-fit text-[10px] uppercase tracking-[0.2em] font-medium text-foreground/50 border border-foreground/10 rounded-full px-3.5 py-1">
            [ My Experience ]
          </span>
          <h2 className="font-instrument_serif text-5xl md:text-7xl font-light italic text-foreground mt-6 mb-3 capitalize leading-none tracking-tight">
            {experiences[0].company}
          </h2>
          <h3 className="font-sans text-lg md:text-xl font-medium text-foreground/85 mb-6 flex items-center gap-2">
            <Briefcase size={18} className="text-foreground/40" />
            {experiences[0].role}
          </h3>

          <div className="flex flex-col gap-3 font-mono text-xs text-foreground/55 border-l-2 border-foreground/15 pl-4 py-1">
            <span className="flex items-center gap-2">
              <Calendar size={14} className="text-foreground/45" />
              {experiences[0].period}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-foreground/45" />
              {experiences[0].location}
            </span>
          </div>
        </div>

        {/* Right Column: Achievements & Contributions */}
        <div className="exp-right md:col-span-7 space-y-6">
          <p className="font-sans text-base md:text-lg font-light text-foreground/75 leading-relaxed">
            {experiences[0].description}
          </p>

          {/* Double-Bezel Card Enclosure (adapts to light/dark themes dynamically) */}
          <div className="bg-foreground/2 border border-foreground/10 rounded-4xl p-1.5 transition-all duration-500 hover:border-foreground/20">
            <div className="bg-foreground/1 rounded-[calc(2rem-0.375rem)] p-6 md:p-8 space-y-5">
              <ul className="space-y-4 font-sans text-sm md:text-base font-light text-foreground/70 list-none">
                {experiences[0].bullets.map((bullet, idx) => (
                  <li key={idx} className="leading-relaxed flex items-start gap-3">
                    <span className="text-foreground/45 font-mono text-xs mt-1">0{idx + 1}.</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-foreground/10 flex flex-wrap gap-2">
                {experiences[0].tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-[10px] uppercase font-mono tracking-wider text-foreground/50 border border-foreground/10 bg-foreground/2 rounded-full hover:text-foreground/80 hover:border-foreground/35 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
