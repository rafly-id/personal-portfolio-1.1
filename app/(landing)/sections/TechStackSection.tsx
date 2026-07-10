"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import { techStack } from "@/lib/data";

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

      const title = sectionRef.current.querySelector(".tech-title");
      const cards = gsap.utils.toArray(".tech-card");

      // Set initial states to prevent visual flash
      gsap.set(title, { y: 80, opacity: 0 });
      gsap.set(cards, { y: 50, opacity: 0, scale: 0.98 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.to(title, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })
      .to(
        cards,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );
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
          duration: 0.6,
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
                  stagger: 0.05,
                  duration: 0.5,
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
          duration: 0.5,
          ease: "power3.inOut",
          overwrite: "auto",
        });
      });
    },
    { dependencies: [activeIndex], scope: sectionRef }
  );

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="mt-20 md:mt-32 py-10 overflow-hidden">
      {/* Title */}
      <div className="flex justify-center text-center mb-16 overflow-hidden">
        <div className="text-5xl font-bold uppercase font-instrument_serif">
          <h2 className="tech-title" style={{ willChange: "transform, opacity" }}>
            tech stack
          </h2>
        </div>
      </div>

      {/* Accordion Stack */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto px-4">
        {categories.map((cat, catIdx) => {
          const isOpen = activeIndex === catIdx;
          const numStr = `0${catIdx + 1} /`;

          return (
            <div
              key={catIdx}
              className="bg-foreground/[0.02] border border-foreground/10 rounded-[2rem] p-1.5 tech-card transition-all duration-500 hover:border-special/20"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="bg-foreground/[0.01] rounded-[calc(2rem-0.375rem)] p-6 md:p-8 h-full flex flex-col justify-start">
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
                    <h3 className="font-instrument_serif text-2xl md:text-3xl lg:text-4xl text-foreground/80 group-hover/btn:text-special transition-colors duration-300 capitalize">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Circular Chevron Wrapper */}
                  <div className="accordion-chevron w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center bg-foreground/[0.02] text-foreground/60 transition-all duration-500 group-hover/btn:scale-105 group-hover/btn:border-special/30 group-hover/btn:text-special">
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
                          className="tech-item flex flex-col items-center justify-center p-3 rounded-2xl hover:bg-foreground/[0.02] transition-all duration-300 group/item cursor-default"
                          style={{ willChange: "transform, opacity" }}
                        >
                          <div className="p-3">
                            <tech.icon
                              className="w-9 h-9 md:w-10 md:h-10 text-foreground/30 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/item:scale-110 group-hover/item:text-special"
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
