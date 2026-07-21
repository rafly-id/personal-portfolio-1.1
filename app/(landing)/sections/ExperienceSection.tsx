"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";
import { ANIM_DURATIONS, ANIM_EASES } from "@/lib/animation";
import { useThemeToggle } from "@/hooks/useThemeToggle";
import BezelCard from "@/components/ui/BezelCard";
import TechBadge from "@/components/ui/TechBadge";
import SectionLabel from "@/components/ui/SectionLabel";
import Title from "@/components/ui/Title";

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Dark-mode theme toggle via shared hook (desktop only)
  useThemeToggle({ triggerRef: sectionRef });

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const leftCol = sectionRef.current.querySelector(".exp-left");
      const rightCol = sectionRef.current.querySelector(".exp-right");

      // Entry scroll reveal for section text/content
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
        duration: ANIM_DURATIONS.standard,
        ease: ANIM_EASES.entry,
      })
      .to(
        rightCol,
        {
          y: 0,
          opacity: 1,
          duration: ANIM_DURATIONS.slow,
          ease: ANIM_EASES.entry,
        },
        "-=0.5"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-full text-foreground py-16 md:py-36 overflow-hidden z-10 relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start w-full px-4 md:px-10 max-w-6xl mx-auto">

        {/* Left Column: Sticky-like info */}
        <div className="exp-left md:col-span-5 text-left md:sticky md:top-24 flex flex-col justify-center">
          {/* Mobile Title */}
          <div className="md:hidden w-full mb-2">
            <Title text="Experience" index="02" />
          </div>
          <SectionLabel text="[ My Experience ]" className="hidden md:inline-block" />
          <h2 className="font-instrument_serif text-5xl md:text-7xl font-light italic text-foreground mt-6 mb-3 capitalize leading-none tracking-tight">
            {experiences[0].company}
          </h2>
          <h3 className="font-sans text-lg md:text-xl font-medium text-foreground/85 mb-4 md:mb-6 flex items-center gap-2">
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

          {/* Double-Bezel Card Enclosure */}
          <BezelCard innerClassName="space-y-5">
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
                <TechBadge key={idx} tech={tech} />
              ))}
            </div>
          </BezelCard>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
