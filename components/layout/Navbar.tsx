"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const isFirstRender = useRef(true);
  const splitRef = useRef<SplitText | null>(null);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Magnetic button hover effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * 0.35,
      y: y * 0.35,
      rotateX: -y * 0.1,
      rotateY: x * 0.1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;
    if (!button) return;
    gsap.to(button, {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  // Menu Toggle Animations
  useGSAP(
    () => {
      const overlay = overlayRef.current;
      const button = buttonRef.current;
      const links = linksRef.current.filter((el): el is HTMLAnchorElement => el !== null);

      if (!overlay || !button) return;

      // Revert any stale SplitText instances before triggering new animations
      if (splitRef.current) {
        splitRef.current.revert();
        splitRef.current = null;
      }

      if (isOpen) {
        isFirstRender.current = false;

        // 1. Hide closed menu button
        gsap.to(button, {
          scale: 0.8,
          opacity: 0,
          duration: 0.4,
          ease: "power3.inOut",
        });

        // 2. Open overlay card
        gsap.fromTo(
          overlay,
          {
            visibility: "visible",
            scale: 0.1,
            opacity: 0,
            borderRadius: "100px",
            transformOrigin: "top right",
          },
          {
            scale: 1,
            opacity: 1,
            borderRadius: "2rem",
            duration: 0.8,
            ease: "power4.out",
          }
        );

        // 3. Stagger links reveal
        if (links.length > 0) {
          // Reset link styles before splitting to ensure visibility
          gsap.set(links, { y: 0, opacity: 1 });

          const split = new SplitText(links, { type: "chars" });
          splitRef.current = split;

          gsap.fromTo(
            split.chars,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.02,
              ease: "power3.out",
              delay: 0.2,
            }
          );
        }
      } else {
        // Skip animating close on the initial page render
        if (isFirstRender.current) {
          gsap.set(overlay, { visibility: "hidden", scale: 0.1, opacity: 0 });
          return;
        }

        // 1. Show closed menu button
        gsap.to(button, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          delay: 0.2,
        });

        // 2. Close overlay card
        gsap.to(overlay, {
          scale: 0.1,
          opacity: 0,
          borderRadius: "100px",
          duration: 0.6,
          ease: "power4.inOut",
          onComplete: () => {
            gsap.set(overlay, { visibility: "hidden" });
          },
        });

        // 3. Animate links out and revert SplitText
        if (links.length > 0) {
          gsap.to(links, {
            y: 30,
            opacity: 0,
            duration: 0.4,
            ease: "power3.in",
            onComplete: () => {
              if (splitRef.current) {
                splitRef.current.revert();
                splitRef.current = null;
              }
              // Reset styles for the next open sequence
              gsap.set(links, { y: 0, opacity: 1 });
            },
          });
        }
      }
    },
    { dependencies: [isOpen], scope: overlayRef }
  );

  const navLinks = [
    { label: "home", href: "/" },
    { label: "projects", href: "/work" },
    { label: "get in touch", href: "/#contact" },
  ];

  return (
    <>
      {/* Floating Header */}
      <div className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-40 pointer-events-none">
        <div className="text-3xl md:text-4xl font-instrument_serif font-semibold mix-blend-difference pointer-events-auto select-none">
          <Link href="/">Rafly.</Link>
        </div>
        <div className="pointer-events-auto">
          <button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-foreground text-background border border-foreground/10 shadow-sm transition-all duration-300 font-sans tracking-wide cursor-pointer select-none group"
          >
            <span className="font-mono text-sm leading-none flex items-center justify-center relative w-6 h-4">
              <span className="absolute left-0 transition-transform duration-300 group-hover:-translate-x-0.5">[</span>
              <span className="dot opacity-0 scale-0 transition-all duration-300 font-sans font-bold group-hover:opacity-100 group-hover:scale-100">•</span>
              <span className="absolute right-0 transition-transform duration-300 group-hover:translate-x-0.5">]</span>
            </span>
            <span className="text-sm font-medium uppercase tracking-widest leading-none">menu</span>
          </button>
        </div>
      </div>

      {/* Backdrop Blur Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-background/20 backdrop-blur-md z-45 transition-opacity duration-700 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Floating Menu Card Overlay (Desktop: Compact Widget 360x480px, Mobile: Full overlay with margins) */}
      <div
        ref={overlayRef}
        className="fixed top-4 bottom-4 left-4 right-4 md:top-5 md:right-5 md:left-auto md:bottom-auto md:w-[360px] md:h-[480px] bg-foreground text-background rounded-[2rem] p-8 flex flex-col justify-between z-50 shadow-2xl overflow-hidden invisible"
      >
        {/* Top Section */}
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-background/50 font-sans font-medium">
            <span className="w-1.5 h-1.5 rounded-full border border-background/50"></span>
            navbar
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-xs uppercase tracking-[0.2em] text-background/70 hover:text-background transition-colors duration-300 font-sans font-medium cursor-pointer"
          >
            close
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4 my-auto text-left">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setIsOpen(false)}
              ref={(el) => {
                linksRef.current[idx] = el;
              }}
              className="text-4xl md:text-5xl font-light font-sans tracking-tight text-background hover:opacity-60 transition-opacity duration-300 lowercase block overflow-hidden py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center w-full mt-auto">
          <div className="font-sans font-semibold text-sm tracking-wider text-background/30 select-none">
            [rafly]
          </div>
          <div className="flex gap-4 text-xs uppercase tracking-wider text-background/50 font-sans font-medium">
            <a
              href="https://www.instagram.com/__rafllyy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background transition-colors duration-300"
            >
              insta
            </a>
            <a
              href="https://github.com/rafly-id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background transition-colors duration-300"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/rafly-adriansyah-35587225b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background transition-colors duration-300"
            >
              linkedin
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
