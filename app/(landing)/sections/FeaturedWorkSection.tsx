"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeaturedWorkSection = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  const pinRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      // Desktop layout: pin and horizontal scroll
      mm.add("(min-width: 768px)", () => {
        if (!pinRef.current || !stickyRef.current || !scrollTrackRef.current) return;

        const track = scrollTrackRef.current;
        const sticky = stickyRef.current;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top top",
            end: () => `+=${track.scrollWidth - sticky.offsetWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // Horizontal scroll animation
        tl.to(track, {
          x: () => {
            // Scroll to the end of the scroll track minus sticky container width
            return -(track.scrollWidth - sticky.offsetWidth);
          },
          ease: "none",
        });

        // Background title slow parallax movement
        const bgHeading = sticky.querySelector(".bg-heading");
        if (bgHeading) {
          tl.to(
            bgHeading,
            {
              x: -150,
              ease: "none",
            },
            0
          );
        }
      });

      return () => {
        mm.revert();
      };
    },
    { scope: pinRef }
  );

  return (
    <div ref={pinRef} className="relative w-full overflow-hidden md:overflow-visible my-12 md:my-0">
      {/* Desktop view with horizontal pin scrolling */}
      <div
        ref={stickyRef}
        className="md:sticky md:top-0 md:h-screen md:flex md:flex-col md:justify-center md:overflow-hidden py-16 md:py-0 w-full"
      >
        {/* Giant Outlined Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 md:flex">
          <h2 className="bg-heading font-instrument_serif font-black text-[13vw] tracking-tighter uppercase text-foreground/5 leading-none">
            Selected Work
          </h2>
        </div>

        {/* Mobile Header / Divider */}
        <div className="px-1 md:hidden mb-6 border-b border-foreground/10 pb-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 font-bold">
            [ Featured Work ]
          </span>
        </div>

        {/* Scroll Track */}
        <div
          ref={scrollTrackRef}
          className="relative flex flex-col md:flex-row items-stretch md:items-center gap-8 md:gap-16 px-0 w-full md:w-max z-10"
        >
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="project-card relative w-full md:w-[750px] lg:w-[900px] shrink-0 group flex flex-col justify-between"
            >
              {/* Double-Bezel Enclosure for Landscape Card (Flat / Sharp cornered) */}
              <Link
                href={`/work/${project.slug}`}
                className="block overflow-hidden p-2 md:p-3 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] "
              >
                <div className="relative w-full aspect-video overflow-hidden rounded-[calc(2.5rem-0.5rem)]">
                  {/* Main background image */}
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 900px"
                    className="object-cover grayscale transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  />

                  {/* Centered mini thumbnail preview */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="relative w-[30%] aspect-video p-1 shadow-2xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      <Image
                        src={project.imageSrc}
                        alt={`${project.imageAlt} Thumbnail`}
                        fill
                        sizes="300px"
                        className="object-cover grayscale"
                      />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Title & Metadata */}
              <div className="mt-4 flex flex-col md:flex-row md:items-start justify-between gap-2 px-1">
                <div>
                  <h4 className="font-instrument_serif text-2xl lg:text-3xl font-black uppercase tracking-tight leading-none text-foreground">
                    <Link
                      href={`/work/${project.slug}`}
                      className="hover:font-instrument_serif hover:text-foreground transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    >
                      {project.title}
                    </Link>
                  </h4>
                  <p className="font-sans text-sm md:text-base text-foreground/60 font-light mt-1.5 max-w-xl">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 shrink-0 self-start md:self-auto mt-2 md:mt-0">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 text-[10px] uppercase font-bold tracking-wider text-foreground/75 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorkSection;
