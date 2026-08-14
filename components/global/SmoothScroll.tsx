"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { LENIS_EASING } from "@/lib/config";
import "lenis/dist/lenis.css";

interface LenisContextType {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextType>({ lenis: null });

export const useLenis = () => useContext(LenisContext);

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Respect prefers-reduced-motion OS accessibility settings
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const instance = new Lenis({
      duration: 1.2,
      easing: LENIS_EASING,
      smoothWheel: true,
    });

    lenisRef.current = instance;
    setLenis(instance);

    // Sync Lenis scroll with ScrollTrigger updates
    instance.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Synchronize Lenis RAF loop with GSAP Ticker for smooth scrub animations
    const handleTicker = (time: number) => {
      instance.raf(time * 1000);
    };

    gsap.ticker.add(handleTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(handleTicker);
      instance.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  // Reset scroll to top on pathname changes or scroll to hash if present
  useEffect(() => {
    if (lenisRef.current) {
      if (window.location.hash) {
        const hash = window.location.hash;
        lenisRef.current.scrollTo(hash, { immediate: true });
      } else {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname]);

  return (
    <LenisContext.Provider value={{ lenis }}>{children}</LenisContext.Provider>
  );
};

export default SmoothScroll;
