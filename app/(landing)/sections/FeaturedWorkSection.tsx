"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "@/components/global/TransitionLink";
import { projects } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeaturedWorkSection = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      // Set initial states to prevent FOUC / flash
      gsap.set([".bg-heading", ".mobile-header", ".project-card"], {
        clipPath: "inset(100% 0% 0% 0%)",
        autoAlpha: 0,
      });

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

          // Reveal background title
          gsap.fromTo(
            bgHeading,
            {
              clipPath: "inset(100% 0% 0% 0%)",
              autoAlpha: 0,
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              autoAlpha: 1,
              duration: 1.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // Project cards reveal
        const cards = Array.from(sticky.querySelectorAll(".project-card"));
        cards.forEach((card, idx) => {
          if (idx === 0) {
            // First card reveals vertically when the section enters
            gsap.fromTo(
              card,
              {
                clipPath: "inset(100% 0% 0% 0%)",
                autoAlpha: 0,
              },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                autoAlpha: 1,
                duration: 1.4,
                delay: 0.2, // small delay after title reveal starts
                ease: "power3.out",
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 80%",
                  toggleActions: "play none none none",
                },
              }
            );
          } else {
            // Subsequent cards reveal horizontally as they enter the screen
            gsap.fromTo(
              card,
              {
                clipPath: "inset(100% 0% 0% 0%)",
                autoAlpha: 0,
              },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                autoAlpha: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  containerAnimation: tl,
                  start: "left 85%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        });
      });

      // Mobile layout: vertical stacked cards
      mm.add("(max-width: 767px)", () => {
        if (!pinRef.current) return;

        const mobileHeader = pinRef.current.querySelector(".mobile-header");
        if (mobileHeader) {
          gsap.fromTo(
            mobileHeader,
            {
              clipPath: "inset(100% 0% 0% 0%)",
              autoAlpha: 0,
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              autoAlpha: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        const cards = Array.from(pinRef.current.querySelectorAll(".project-card"));
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            {
              clipPath: "inset(100% 0% 0% 0%)",
              autoAlpha: 0,
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              autoAlpha: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      });

      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full relative select-none"
    >
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
          <div className="mobile-header px-1 md:hidden mb-6 border-b border-foreground/10 pb-2">
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
                data-cursor="view"
                data-cursor-text="view project"
                className="project-card relative w-full md:w-[750px] lg:w-[900px] shrink-0 group flex flex-col justify-between"
              >
                {/* Flat / Sharp cornered Image Card */}
                <Link
                  href={`/work/${project.slug}`}
                  className="block overflow-hidden p-2 md:p-3 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  <div className="relative w-full aspect-video overflow-hidden rounded-4xl shadow-[inset_0_1px_2.5px_rgba(0,0,0,0.08)]">
                    {/* Scale wrapper that transition-scales on hover to avoid GSAP layout triggers */}
                    <div className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]">
                      {/* Main background image */}
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 900px"
                        className="object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                      />
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
                        className="px-2.5 py-0.5 text-[10px] uppercase font-bold tracking-wider text-foreground/75 rounded-full border border-foreground/10"
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

    </section>
  );
};

export default FeaturedWorkSection;
