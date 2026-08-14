"use client";

import { RefObject } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ANIM_DURATIONS, ANIM_EASES } from "@/lib/animation";
import { THEME_COLORS } from "@/lib/config";

interface UseThemeToggleOptions {
  triggerRef: RefObject<HTMLElement | null>;
  start?: string;
  end?: string;
}

/**
 * Toggles the site's dark/light theme by animating the --background and
 * --foreground CSS variables on document.documentElement via ScrollTrigger.
 *
 * Also sets a `data-theme="dark"` attribute on <html> so that other components
 * (e.g. TransitionProvider curtain) can read the current theme without
 * resorting to fragile string-matching on computed CSS values.
 *
 * Only runs on desktop (>= 768px) to avoid affecting mobile layouts.
 */
export function useThemeToggle({
  triggerRef,
  start = "top 40%",
  end = "bottom center",
}: UseThemeToggleOptions) {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (!triggerRef.current) return;

      const root = document.documentElement;
      const mm = gsap.matchMedia();

      mm.add("all", () => {
        gsap.to(root, {
          "--background": THEME_COLORS.dark,
          "--foreground": THEME_COLORS.light,
          duration: ANIM_DURATIONS.fast,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: triggerRef.current,
            start,
            end,
            toggleActions: "play reverse play reverse",
            invalidateOnRefresh: true,
            onEnter: () => {
              root.dataset.theme = "dark";
            },
            onLeave: () => {
              delete root.dataset.theme;
            },
            onEnterBack: () => {
              root.dataset.theme = "dark";
            },
            onLeaveBack: () => {
              delete root.dataset.theme;
            },
          },
        });

        return () => {
          root.style.removeProperty("--background");
          root.style.removeProperty("--foreground");
          delete root.dataset.theme;
        };
      });

      return () => {
        mm.revert();
        root.style.removeProperty("--background");
        root.style.removeProperty("--foreground");
        delete root.dataset.theme;
      };
    },
    { scope: triggerRef, dependencies: [start, end, pathname] }
  );
}
