"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { socialLinks } from "@/lib/data";
import Button from "@/components/ui/button";
import { ANIM_DURATIONS, ANIM_EASES, ANIM_STAGGERS } from "@/lib/animation";

gsap.registerPlugin(ScrollTrigger, SplitText);

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  Github: FaGithub,
  Email: MdEmail,
  Whatsapp: FaWhatsapp,
};

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;

      const columns = footerRef.current.querySelectorAll(".footer-col");
      const root = document.documentElement;

      // 1. Dynamic Theme Switching
      gsap.to(root, {
        "--background": "#1c1a19",
        "--foreground": "#f4f3ef",
        duration: ANIM_DURATIONS.fast,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 40%",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true,
        },
      });

      // 2. Entrance Animation for Content Columns
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

      // 3. Staggered reveal for the massive bottom name text
      if (nameRef.current) {
        const splitName = new SplitText(nameRef.current, {
          type: "chars",
          charsClass: "overflow-visible inline-block px-[0.05em] -mx-[0.05em]"
        });

        gsap.fromTo(
          splitName.chars,
          { yPercent: 105, opacity: 0, filter: "blur(8px)" },
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

        return () => {
          splitName.revert();
          root.style.removeProperty("--background");
          root.style.removeProperty("--foreground");
        };
      }

      return () => {
        root.style.removeProperty("--background");
        root.style.removeProperty("--foreground");
      };
    },
    { scope: footerRef }
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
            <p className="font-sans text-xl md:text-3xl font-semibold text-foreground leading-snug tracking-tight max-w-xl">
              Rafly is a <span className="font-instrument_serif italic text-2xl md:text-4xl font-normal">Frontend Developer</span> focused on creating <span className="font-instrument_serif italic text-2xl md:text-4xl font-normal">modern web experiences</span>.
            </p>

            <div className="flex flex-col items-start gap-4 w-full">
              <span className="font-mono text-xs text-foreground/45 uppercase tracking-widest">[ Follow me ]</span>
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
            <span className="font-mono text-xs text-foreground/45 uppercase tracking-widest md:hidden">[ Contact ]</span>

            {/* CTA 1 */}
            <Button
              href={socialLinks.find((l) => l.name === "Whatsapp")?.href || "#"}
              text="Call Rafly"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            />

            {/* CTA 2 */}
            <Button
              href="/CV_Rafly_Adriansyah.pdf"
              text="Download CV"
              variant="outline"
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
          className="font-instrument_serif text-[clamp(4.5rem,14vw,20rem)] italic font-normal lowercase tracking-tighter text-foreground text-center leading-none w-full will-change-transform whitespace-nowrap py-4"
        >
          rafly adriansyah
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
