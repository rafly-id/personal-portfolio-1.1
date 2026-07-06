"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { certificates } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const CertificatesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string>("");

  useGSAP(
    () => {
      if (!portalRef.current || !containerRef.current) return;

      const portal = portalRef.current;
      const container = containerRef.current;

      // Reveal animation setup
      const title = container.querySelector(".cert-title");
      const borders = gsap.utils.toArray(".cert-border");
      const textWraps = gsap.utils.toArray(".cert-text-wrap");
      const arrowWraps = gsap.utils.toArray(".cert-arrow-wrap");

      gsap.set(title, { y: 100, opacity: 0 });
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

      revealTl.to(title, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })
      .to(
        borders,
        {
          scaleX: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power3.inOut",
        },
        "-=0.4"
      )
      .to(
        textWraps,
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .to(
        arrowWraps,
        {
          scale: 1,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );

      // Mouse-Following Floating Image Portal Logic (Desktop only)
      const rect = portal.getBoundingClientRect();
      const halfWidth = rect.width / 2;
      const halfHeight = rect.height / 2;

      const xTo = gsap.quickTo(portal, "x", { duration: 0.4, ease: "power3.out" });
      const yTo = gsap.quickTo(portal, "y", { duration: 0.4, ease: "power3.out" });

      const handleMouseMove = (e: MouseEvent) => {
        xTo(e.clientX - halfWidth);
        yTo(e.clientY - halfHeight);
      };

      const handleMouseEnterRow = (imgSrc: string) => {
        setActiveImage(imgSrc);
        gsap.to(portal, {
          autoAlpha: 1,
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
        });
      };

      const handleMouseLeaveRow = () => {
        gsap.to(portal, {
          autoAlpha: 0,
          scale: 0.75,
          duration: 0.4,
          ease: "power3.out",
        });
      };

      container.addEventListener("mousemove", handleMouseMove);

      const rows = gsap.utils.toArray(".cert-row") as HTMLElement[];
      rows.forEach((row) => {
        const imgSrc = row.getAttribute("data-image") || "";
        row.addEventListener("mouseenter", () => handleMouseEnterRow(imgSrc));
        row.addEventListener("mouseleave", handleMouseLeaveRow);
      });

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        rows.forEach((row) => {
          row.removeEventListener("mouseenter", () => {});
          row.removeEventListener("mouseleave", () => {});
        });
      };
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="mt-20 md:mt-32 mb-24 relative overflow-hidden">
      {/* Scroll reveal title */}
      <div className="flex justify-center text-center mb-16 overflow-hidden">
        <div className="text-5xl font-bold uppercase font-instrument_serif">
          <h2 className="cert-title" style={{ willChange: "transform, opacity" }}>
            certificates
          </h2>
        </div>
      </div>

      {/* Floating Image Portal (Desktop only) */}
      <div
        ref={portalRef}
        className="pointer-events-none fixed top-0 left-0 z-50 opacity-0 scale-75 select-none hidden md:block"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="relative w-[340px] aspect-[4/3] overflow-hidden shadow-2xl">
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
        <span className="cert-border absolute top-0 left-0 w-full h-[1px] bg-foreground/10 origin-left" style={{ willChange: "transform" }} />

        {certificates.map((cert, index) => (
          <Link
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            data-image={cert.imageSrc}
            className="cert-row relative flex flex-col md:flex-row md:items-center justify-between py-8 transition-colors duration-300 group cursor-pointer overflow-hidden"
          >
            {/* Title & Tech stack (with mask reveal container) */}
            <div className="overflow-hidden">
              <div className="cert-text-wrap flex flex-col gap-2" style={{ willChange: "transform, opacity" }}>
                <h3 className="font-instrument_serif text-2xl md:text-4xl uppercase tracking-tight text-foreground/80 group-hover:text-foreground group-hover:pl-2 transition-all duration-300">
                  {cert.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cert.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 text-[9px] uppercase tracking-widest font-bold text-foreground/50 rounded-full bg-foreground/5 border border-foreground/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Link arrow and hover indicators */}
            <div className="cert-arrow-wrap flex items-center gap-4 self-end md:self-auto mt-4 md:mt-0" style={{ willChange: "transform, opacity" }}>
              <span className="text-xs uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:inline">
                View Certificate
              </span>
              <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                <span className="text-sm font-semibold tracking-tighter transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  ↗
                </span>
              </div>
            </div>

            {/* Bottom boundary border */}
            <span className="cert-border absolute bottom-0 left-0 w-full h-[1px] bg-foreground/10 origin-left" style={{ willChange: "transform" }} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
