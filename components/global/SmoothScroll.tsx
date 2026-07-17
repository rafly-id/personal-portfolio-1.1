"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { ScrollTrigger } from "@/lib/gsap";
import { LENIS_EASING } from "@/lib/config";
import "lenis/dist/lenis.css";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: LENIS_EASING,
    });

    lenisRef.current = lenis;

    // Sync Lenis scroll with ScrollTrigger updates
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
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

  return <>{children}</>;
};

export default SmoothScroll;
