"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { certificates } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import { ANIM_DURATIONS, ANIM_EASES, ANIM_STAGGERS } from "@/lib/animation";
import TechBadge from "@/components/ui/TechBadge";

const CertificatesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const portalSizeRef = useRef<{ width: number; height: number } | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const borders = gsap.utils.toArray(".cert-border");
      const textWraps = gsap.utils.toArray(".cert-text-wrap");
      const arrowWraps = gsap.utils.toArray(".cert-arrow-wrap");

      gsap.set(borders, { scaleX: 0 });
      gsap.set(textWraps, { y: 80, opacity: 0 });
      gsap.set(arrowWraps, { scale: 0.8, opacity: 0 });

      const revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      revealTl.to(borders, {
        scaleX: 1,
        stagger: ANIM_STAGGERS.slow,
        duration: ANIM_DURATIONS.slow,
        ease: "power3.inOut",
      })
      .to(
        textWraps,
        {
          y: 0,
          opacity: 1,
          stagger: ANIM_STAGGERS.standard,
          duration: ANIM_DURATIONS.standard,
          ease: ANIM_EASES.entry,
        },
        "-=0.8"
      )
      .to(
        arrowWraps,
        {
          scale: 1,
          opacity: 1,
          stagger: ANIM_STAGGERS.standard,
          duration: ANIM_DURATIONS.standard,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );
    },
    { scope: containerRef }
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    const portal = portalRef.current;
    if (!portal) return;

    if (!portalSizeRef.current) {
      const rect = portal.getBoundingClientRect();
      portalSizeRef.current = { width: rect.width, height: rect.height };
    }

    const { width, height } = portalSizeRef.current;
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    gsap.to(portal, {
      x: e.clientX - halfWidth,
      y: e.clientY - halfHeight,
      duration: ANIM_DURATIONS.fast,
      ease: ANIM_EASES.entry,
      overwrite: "auto",
    });
  };

  const handleMouseEnterRow = (imgSrc: string) => {
    setActiveImage(imgSrc);
    const portal = portalRef.current;
    if (!portal) return;

    // Cache dimensions once on hover enter
    const rect = portal.getBoundingClientRect();
    portalSizeRef.current = { width: rect.width, height: rect.height };

    gsap.to(portal, {
      autoAlpha: 1,
      scale: 1,
      duration: ANIM_DURATIONS.fast,
      ease: ANIM_EASES.entry,
      overwrite: "auto",
    });
  };

  const handleMouseLeaveRow = () => {
    const portal = portalRef.current;
    if (!portal) return;
    gsap.to(portal, {
      autoAlpha: 0,
      scale: 0.75,
      duration: ANIM_DURATIONS.fast,
      ease: ANIM_EASES.entry,
      overwrite: "auto",
    });
  };

  return (
    <section ref={containerRef} onMouseMove={handleMouseMove} className="mt-20 md:mt-32 mb-16 md:mb-24 relative overflow-hidden">
      <SectionHeader title="certificates" index="05" />

      {/* Floating Image Portal (Desktop only) */}
      <div
        ref={portalRef}
        className="pointer-events-none fixed top-0 left-0 z-50 opacity-0 scale-75 select-none hidden md:block"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="relative w-[340px] aspect-4/3 overflow-hidden shadow-2xl">
          {activeImage && (
            <Image
              src={activeImage}
              alt="Certificate Preview"
              fill
              className="object-cover grayscale"
              sizes="340px"
              priority
            />
          )}
        </div>
      </div>

      {/* Certificates List */}
      <div className="max-w-5xl mx-auto px-4 relative">
        {/* Top boundary border */}
        <span className="cert-border absolute top-0 left-0 w-full h-px bg-foreground/10 origin-left" style={{ willChange: "transform" }} />

        {certificates.map((cert, index) => (
          <Link
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleMouseEnterRow(cert.imageSrc)}
            onMouseLeave={handleMouseLeaveRow}
            className="cert-row relative flex flex-col md:flex-row md:items-center justify-between py-5 md:py-8 transition-colors duration-300 group cursor-pointer overflow-hidden"
          >
            {/* Title & Tech stack */}
            <div className="overflow-hidden">
              <div className="cert-text-wrap flex flex-col gap-2" style={{ willChange: "transform, opacity" }}>
                <h3 className="font-instrument_serif text-2xl md:text-4xl uppercase tracking-tight text-foreground/80 group-hover:text-foreground group-hover:pl-2 transition-all duration-300">
                  {cert.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cert.tech.map((t, idx) => (
                    <TechBadge key={idx} tech={t} />
                  ))}
                </div>
              </div>
            </div>

            {/* Link arrow and hover indicators (text only, no arrow icon) */}
            <div className="cert-arrow-wrap flex items-center gap-4 self-end md:self-auto mt-2 md:mt-0" style={{ willChange: "transform, opacity" }}>
              <span className="text-xs uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Certificate
              </span>
            </div>

            {/* Bottom boundary border */}
            <span className="cert-border absolute bottom-0 left-0 w-full h-px bg-foreground/10 origin-left" style={{ willChange: "transform" }} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;

