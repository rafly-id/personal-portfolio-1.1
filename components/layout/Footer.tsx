"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/lib/gsap";
import { ScrollTrigger } from "@/lib/gsap";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { socialLinks } from "@/lib/data";
import Button from "@/components/ui/button";
import { ANIM_DURATIONS, ANIM_EASES, ANIM_STAGGERS } from "@/lib/animation";
import { useThemeToggle } from "@/hooks/useThemeToggle";
import SectionLabel from "@/components/ui/SectionLabel";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  Github: FaGithub,
  Email: MdEmail,
  Whatsapp: FaWhatsapp,
};

const Footer = () => {
  const pathname = usePathname();
  const footerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  // Dark-mode theme toggle via shared hook (desktop only)
  useThemeToggle({ triggerRef: footerRef, start: "top 40%", end: "bottom center" });

  useGSAP(
    () => {
      if (!footerRef.current) return;

      const columns = footerRef.current.querySelectorAll(".footer-col");
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const { isDesktop } = context.conditions as { isDesktop: boolean };

          // Entrance Animation for Content Columns
          if (columns.length > 0) {
            gsap.fromTo(
              columns,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: ANIM_DURATIONS.standard,
                stagger: ANIM_STAGGERS.slow,
                ease: ANIM_EASES.entry,
                scrollTrigger: {
                  trigger: footerRef.current,
                  start: "top 75%",
                  toggleActions: "play none none none",
                },
              }
            );
          }

          // Staggered reveal for the massive bottom name text (blur only on desktop)
          let splitName: SplitText | null = null;
          let isSplitActive = true;

          const initSplit = async () => {
            await document.fonts.ready;
            if (!isSplitActive || !nameRef.current) return;

            splitName = new SplitText(nameRef.current, {
              type: "chars",
              charsClass: "overflow-visible inline-block px-[0.05em] -mx-[0.05em]"
            });

            gsap.fromTo(
              splitName.chars,
              { yPercent: 105, opacity: 0, filter: isDesktop ? "blur(8px)" : "none" },
              {
                yPercent: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: ANIM_DURATIONS.slow,
                stagger: ANIM_STAGGERS.fast,
                ease: ANIM_EASES.entry,
                scrollTrigger: {
                  trigger: footerRef.current,
                  start: "top 70%",
                  toggleActions: "play none none none",
                },
              }
            );

            ScrollTrigger.refresh();
          };

          initSplit();

          return () => {
            isSplitActive = false;
            splitName?.revert();
          };
        }
      );

      return () => {
        mm.revert();
      };
    },
    { scope: footerRef, dependencies: [pathname] }
  );

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="w-full min-h-dvh flex flex-col justify-between items-center pt-20 pb-6 md:pt-24 md:pb-8 overflow-hidden animate-fade-in"
    >
      {/* Centered upper container */}
      <div className="grow w-full flex items-center justify-center">
        {/* Top content wrapper - constrained to max-w-6xl */}
        <div className="w-full max-w-6xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 py-10">

          {/* Left Column (Bio + Socials Stacked) */}
          <div className="footer-col md:col-span-7 flex flex-col items-start gap-8 text-left">
            <p className="font-instrument_serif italic text-2xl md:text-4xl font-normal text-foreground leading-snug tracking-tight max-w-xl">
              Rafly is a Frontend Developer focused on creating modern web experiences.
            </p>

            <div className="flex flex-col items-start gap-4 w-full">
              <SectionLabel text="[ Follow me ]" variant="text" />
              <div className="flex flex-wrap items-center gap-4">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.name];
                  if (!Icon) return null;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-foreground/15 flex items-center justify-center backdrop-blur-sm text-foreground/75 hover:text-foreground hover:bg-foreground/5 hover:border-foreground/40 hover:scale-105 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer"
                      aria-label={link.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column (Simple CTAs stacked) */}
          <div className="footer-col md:col-span-4 md:col-start-9 flex flex-col items-start md:items-end justify-start md:justify-center text-left md:text-right gap-4">
            <SectionLabel text="[ Contact ]" variant="text" className="md:hidden" />

            {/* CTA */}
            <Button
              href="/CV_Rafly_Adriansyah.pdf"
              text="Download CV"
              variant="outline"
              className="px-8 py-4 text-base font-bold"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>

        </div>
      </div>

      {/* Bottom name wrapper */}
      <div className="w-screen select-none overflow-hidden py-6 md:py-8">
        <h2
          ref={nameRef}
          className="font-instrument_serif text-[clamp(2.75rem,14vw,20rem)] italic font-normal lowercase tracking-tighter text-foreground text-center leading-none w-full will-change-transform whitespace-nowrap py-4"
        >
          rafly adriansyah
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
