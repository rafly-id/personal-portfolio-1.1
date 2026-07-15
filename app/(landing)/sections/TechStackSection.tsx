"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import { techStack } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import { ANIM_DURATIONS, ANIM_EASES, ANIM_STAGGERS } from "@/lib/animation";

gsap.registerPlugin(ScrollTrigger);

const TechStackSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  // Grouping logic for categories
  const categories = [
    {
      title: "Core Languages",
      items: techStack.filter((tech) =>
        ["HTML5", "CSS3", "JavaScript", "TypeScript"].includes(tech.name)
      ),
    },
    {
      title: "Frameworks & Libraries",
      items: techStack.filter((tech) =>
        ["Next.js", "React", "Tailwind CSS", "GSAP", "Node.js"].includes(tech.name)
      ),
    },
    {
      title: "Tools & Workspace",
      items: techStack.filter((tech) =>
        ["Git", "GitHub", "Figma"].includes(tech.name)
      ),
    },
  ];

  // Entry Scroll Animation
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const cards = gsap.utils.toArray(".tech-card");

      // Set initial states to prevent visual flash
      gsap.set(cards, { y: 50, opacity: 0, scale: 0.98 });

      gsap.to(cards, {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: ANIM_STAGGERS.slow,
        duration: ANIM_DURATIONS.standard,
        ease: ANIM_EASES.entry,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  // Accordion Expand/Collapse Animation
  useGSAP(
    () => {
      const contents = gsap.utils.toArray<HTMLElement>(".accordion-content");
      const chevrons = gsap.utils.toArray<HTMLElement>(".accordion-chevron");

      contents.forEach((content, idx) => {
        const isOpen = idx === activeIndex;

        // Animate height
        gsap.to(content, {
          height: isOpen ? "auto" : 0,
          duration: ANIM_DURATIONS.standard,
          ease: "power4.inOut",
          overwrite: "auto",
          onStart: () => {
            if (isOpen) {
              const items = content.querySelectorAll(".tech-item");
              gsap.fromTo(
                items,
                { scale: 0.8, opacity: 0, y: 15 },
                {
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  stagger: ANIM_STAGGERS.fast,
                  duration: ANIM_DURATIONS.standard,
                  ease: "back.out(1.2)",
                  overwrite: "auto",
                }
              );
            }
          },
        });

        // Animate chevron rotation
        gsap.to(chevrons[idx], {
          rotate: isOpen ? 180 : 0,
          duration: ANIM_DURATIONS.standard,
          ease: "power3.inOut",
          overwrite: "auto",
        });
      });
    },
    { dependencies: [activeIndex], scope: sectionRef }
  );

  const handleToggle = (index: number) => {
    if (activeIndex === index) return;
    setActiveIndex(index);
  };

  return (
    <section ref={sectionRef} className="mt-20 md:mt-32 py-10 overflow-hidden">
      <SectionHeader title="tech stack" />


      {/* Accordion Stack */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto px-4">
        {categories.map((cat, catIdx) => {
          const isOpen = activeIndex === catIdx;
          const numStr = `0${catIdx + 1} /`;

          return (
            <div
              key={catIdx}
              className="bg-foreground/2 border border-foreground/10 rounded-4xl p-1.5 tech-card transition-all duration-500 hover:border-foreground/20"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="bg-foreground/1 rounded-[calc(2rem-0.375rem)] p-6 md:p-8 h-full flex flex-col justify-start">
                {/* Header Toggle */}
                <button
                  onClick={() => handleToggle(catIdx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group/btn cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="font-mono text-sm md:text-base text-foreground/40 tracking-wider">
                      {numStr}
                    </span>
                    <h3 className="font-instrument_serif text-2xl md:text-3xl lg:text-4xl text-foreground/80 group-hover/btn:text-foreground transition-colors duration-300 capitalize">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Circular Chevron Wrapper */}
                  <div className="accordion-chevron w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center bg-foreground/2 text-foreground/60 transition-all duration-500 group-hover/btn:scale-105 group-hover/btn:border-foreground/30 group-hover/btn:text-foreground">
                    <ChevronDown size={18} strokeWidth={1.5} />
                  </div>
                </button>

                {/* Animated Content Panel */}
                <div
                  className="accordion-content overflow-hidden"
                  style={{ height: catIdx === 0 ? "auto" : 0 }}
                >
                  <div className="pt-8 md:pt-10">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-8">
                      {cat.items.map((tech, techIdx) => (
                        <div
                          key={techIdx}
                          className="tech-item flex flex-col items-center justify-center p-3 rounded-2xl hover:bg-foreground/2 transition-all duration-300 group/item cursor-default"
                          style={{ willChange: "transform, opacity" }}
                        >
                          <div className="p-3">
                            <tech.icon
                              className="w-9 h-9 md:w-10 md:h-10 text-foreground/30 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/item:scale-110 group-hover/item:text-foreground"
                            />
                          </div>
                          <span className="mt-2 text-[9px] md:text-xs uppercase tracking-widest font-mono text-foreground/50 transition-colors duration-300 group-hover/item:text-foreground/80 text-center">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStackSection;
