"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { getWhatsAppLink } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const whatsappLink = getWhatsAppLink("Halo Rafly");

  useGSAP(
    () => {
      if (!footerRef.current) return;

      const columns = footerRef.current.querySelectorAll(".footer-col");
      const root = document.documentElement;

      // 1. Dynamic Theme Switching
      gsap.to(root, {
        "--background": "#1c1a19",
        "--foreground": "#f4f3ef",
        duration: 0.4,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
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
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
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
            duration: 1.0,
            stagger: 0.03,
            ease: "power4.out",
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
      className="w-full min-h-[100dvh] flex flex-col justify-between items-center pt-20 pb-6 md:pt-24 md:pb-8 overflow-hidden animate-fade-in"
    >
      {/* Centered upper container */}
      <div className="flex-grow w-full flex items-center justify-center">
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
                <a
                  href="https://www.linkedin.com/in/rafly-adriansyah-35587225b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-foreground/15 flex items-center justify-center backdrop-blur-sm text-foreground/75 hover:text-foreground hover:bg-foreground/5 hover:border-foreground/40 hover:scale-105 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>

                <a
                  href="https://www.instagram.com/__rafllyy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-foreground/15 flex items-center justify-center backdrop-blur-sm text-foreground/75 hover:text-foreground hover:bg-foreground/5 hover:border-foreground/40 hover:scale-105 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="https://github.com/rafly-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-foreground/15 flex items-center justify-center backdrop-blur-sm text-foreground/75 hover:text-foreground hover:bg-foreground/5 hover:border-foreground/40 hover:scale-105 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="mailto:muhr0417@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-foreground/15 flex items-center justify-center backdrop-blur-sm text-foreground/75 hover:text-foreground hover:bg-foreground/5 hover:border-foreground/40 hover:scale-105 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer"
                  aria-label="Email"
                >
                  <MdEmail size={20} />
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-foreground/15 flex items-center justify-center backdrop-blur-sm text-foreground/75 hover:text-foreground hover:bg-foreground/5 hover:border-foreground/40 hover:scale-105 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Simple CTAs stacked) */}
          <div className="footer-col md:col-span-4 md:col-start-9 flex flex-col items-start md:items-end justify-start md:justify-center text-left md:text-right gap-4">
            <span className="font-mono text-xs text-foreground/45 uppercase tracking-widest md:hidden">[ Contact ]</span>

            {/* CTA 1 */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/15 backdrop-blur-sm text-foreground/80 hover:text-foreground hover:bg-foreground/5 hover:border-foreground/40 hover:scale-105 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] font-sans text-sm font-semibold cursor-pointer"
            >
              <span>Call Rafly</span>
              <ArrowUpRight size={16} className="text-foreground/75 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* CTA 2 */}
            <a
              href="/CV_Rafly_Adriansyah.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/15 backdrop-blur-sm text-foreground/80 hover:text-foreground hover:bg-foreground/5 hover:border-foreground/40 hover:scale-105 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] font-sans text-sm font-semibold cursor-pointer"
            >
              <span>Download CV</span>
              <ArrowUpRight size={16} className="text-foreground/75 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
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
