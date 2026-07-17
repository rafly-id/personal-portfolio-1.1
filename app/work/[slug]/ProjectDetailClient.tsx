"use client";

import { useRef } from "react";
import Link from "@/components/global/TransitionLink";
import { projects } from "@/lib/data";
import { Project } from "@/types";
import { useTextReveal } from "@/hooks/useTextReveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Button from "@/components/ui/button";
import TextSwap from "@/components/ui/TextSwap";
import TechBadge from "@/components/ui/TechBadge";
import SectionLabel from "@/components/ui/SectionLabel";

interface ProjectDetailClientProps {
  project: Project;
}

const ProjectDetailClient = ({ project }: ProjectDetailClientProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const summaryRef = useRef<HTMLParagraphElement>(null);
  const backLinkRef = useRef<HTMLAnchorElement>(null);
  const nextLinkRef = useRef<HTMLAnchorElement>(null);

  // Find next project for the footer loop
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  useTextReveal({
    ref: titleRef,
    y: 120,
    duration: 0.8,
    delay: 0,
  });

  useTextReveal({
    ref: summaryRef,
    y: 80,
    duration: 0.8,
    delay: 0.1,
  });

  return (
    <div className="min-h-screen pt-24 px-5 md:px-12 lg:px-24 bg-background text-foreground">
      {/* Navigation and Back button */}
      <div className="mb-10">
        <Link
          ref={backLinkRef}
          href="/work"
          className="inline-flex items-center gap-2 group text-sm font-bold uppercase font-sans tracking-widest text-foreground/60 hover:text-foreground transition-colors duration-300"
        >
          <TextSwap text="Back to Work" triggerRef={backLinkRef} />
        </Link>
      </div>

      {/* Header Info */}
      <div className="max-w-6xl mb-12">
        <div className="mb-4">
          <SectionLabel text="[ Project Deep Dive ]" />
        </div>
        <h1
          ref={titleRef}
          className="font-instrument_serif font-black text-5xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.9] overflow-hidden mb-6"
        >
          {project.title}
        </h1>
        <p
          ref={summaryRef}
          className="font-sans text-lg md:text-2xl text-foreground/75 font-light max-w-4xl leading-relaxed overflow-hidden"
        >
          {project.description}
        </p>
      </div>

      {/* Double-Bezel Hero Image Enclosure */}
      <div className="w-full h-[350px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-[2.5rem] bg-secondary/30 border border-foreground/5 p-2 md:p-4 mb-12 md:mb-20">
        <ParallaxImage
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          priority
          containerClassName="w-full h-full rounded-[calc(2.5rem-0.5rem)]"
          className="object-cover grayscale"
          sizes="100vw"
          y={30}
          enableReveal
        />
      </div>

      {/* Editorial Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-20 border-b border-foreground/10">
        {/* Left Column: Metadata & CTAs */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28 lg:h-fit">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="border-b border-foreground/10 pb-5">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-bold mb-2">
                Role
              </span>
              <span className="block font-instrument_serif text-lg uppercase font-bold text-foreground">
                {project.role}
              </span>
            </div>

            <div className="border-b border-foreground/10 pb-5">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-bold mb-2">
                Year
              </span>
              <span className="block font-instrument_serif text-lg uppercase font-bold text-foreground">
                {project.year}
              </span>
            </div>
          </div>

          <div className="border-b border-foreground/10 pb-5">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-bold mb-2">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((t, idx) => (
                <TechBadge key={idx} tech={t} />
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 pt-4">
            <Button
              href={project.link}
              text="Visit Live Site"
              variant="solid"
              className="flex-1"
              target="_blank"
              rel="noopener noreferrer"
            />

            {project.github && (
              <Button
                href={project.github}
                text="Source Code"
                variant="outline"
                className="flex-1"
                target="_blank"
                rel="noopener noreferrer"
              />
            )}
          </div>
        </div>

        {/* Right Column: Narrative Details */}
        <div className="lg:col-span-7 space-y-10 md:space-y-12">
          {/* Overview */}
          <div>
            <h2 className="font-instrument_serif text-xl font-bold uppercase tracking-widest mb-4 text-foreground/90">
              [ Overview ]
            </h2>
            <p className="font-sans text-lg text-foreground/80 leading-relaxed font-light whitespace-pre-line">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h2 className="font-instrument_serif text-xl font-bold uppercase tracking-widest mb-5 text-foreground/90">
                [ Key Features ]
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-foreground/30 mt-1.5 text-[10px]">■</span>
                    <span className="font-sans text-lg text-foreground/80 font-light leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges */}
          {project.challenges && (
            <div>
              <h2 className="font-instrument_serif text-xl font-bold uppercase tracking-widest mb-4 text-foreground/90">
                [ Engineering Challenge ]
              </h2>
              <p className="font-sans text-lg text-foreground/80 leading-relaxed font-light">
                {project.challenges}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Loop Footer: Next Project teaser */}
      <div className="pt-20 pb-28 text-center">
        <span className="block text-[10px] uppercase tracking-[0.25em] text-foreground/50 font-bold mb-4">
          Up Next
        </span>
        <Link ref={nextLinkRef} href={`/work/${nextProject.slug}`} className="group inline-block">
          <h2 className="font-instrument_serif font-black text-4xl md:text-7xl uppercase tracking-tighter transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] text-foreground group-hover:scale-105 group-hover:font-instrument_serif">
            <TextSwap text={nextProject.title} triggerRef={nextLinkRef} />
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetailClient;
