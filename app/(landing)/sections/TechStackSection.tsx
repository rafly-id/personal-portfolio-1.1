"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { techStack } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const TechStackSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Grouping logic for bento categories
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

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const title = sectionRef.current.querySelector(".tech-title");
      const cards = gsap.utils.toArray(".tech-card");
      const items = gsap.utils.toArray(".tech-item");

      // Set initial states to prevent visual flash on load
      gsap.set(title, { y: 80, opacity: 0 });
      gsap.set(cards, { y: 50, opacity: 0, scale: 0.95 });
      gsap.set(items, { scale: 0.7, opacity: 0 });

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
      )
      .to(
        items,
        {
          scale: 1,
          opacity: 1,
          stagger: 0.03,
          duration: 0.6,
          ease: "back.out(1.5)",
        },
        "-=0.6"
      );
    },
    { scope: sectionRef }
  );

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

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {categories.map((cat, catIdx) => (
          <div
            key={catIdx}
            className="bg-foreground/[0.02] dark:bg-white/[0.02] border border-foreground/10 dark:border-white/10 rounded-[2rem] p-1.5 tech-card"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="bg-foreground/[0.01] dark:bg-white/[0.01] rounded-[calc(2rem-0.375rem)] p-6 md:p-8 h-full flex flex-col justify-start">
              <h3 className="font-instrument_serif text-2xl md:text-3xl text-foreground/80 tracking-tight capitalize mb-8 border-b border-foreground/10 pb-2">
                {cat.title}
              </h3>
              
              <div className="grid grid-cols-3 gap-6 md:gap-8">
                {cat.items.map((tech, techIdx) => (
                  <div
                    key={techIdx}
                    className="tech-item flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-110 cursor-default"
                    style={{ willChange: "transform, opacity" }}
                  >
                    <div className="p-4 bg-foreground/5 rounded-2xl border border-foreground/10 flex items-center justify-center shadow-sm">
                      <tech.icon className="w-8 h-8 text-foreground/80 hover:text-foreground transition-colors duration-300" />
                    </div>
                    <span className="text-[10px] md:text-xs uppercase tracking-wider font-light text-foreground/60 text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
