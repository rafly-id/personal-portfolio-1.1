"use client";

import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import Onboarding from "../feature/Onboarding";
import { ANIM_DURATIONS } from "@/lib/animation";
import { THEME_COLORS } from "@/lib/config";

export type TransitionStatus = "loading" | "exiting" | "entering" | "idle";

interface TransitionContextType {
  status: TransitionStatus;
  navigate: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  status: "loading",
  navigate: () => {},
});

export const useTransition = () => useContext(TransitionContext);

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<TransitionStatus>("loading");
  const router = useRouter();
  const pathname = usePathname();

  const targetHref = useRef<string | null>(null);
  const isHashScroll = useRef<boolean>(false);
  const curtainColorRef = useRef<string>(THEME_COLORS.dark);

  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOnboardingExitStart = () => {
    setStatus("exiting");
  };

  const handleOnboardingFinish = () => {
    setStatus("idle");
  };

  const navigate = (href: string) => {
    if (status !== "idle") return;

    targetHref.current = href;

    const currentUrl = new URL(window.location.href);
    const targetUrl = new URL(href, window.location.href);

    const isSamePageHash = targetUrl.pathname === currentUrl.pathname && targetUrl.hash !== "";
    const isSamePageNoHash = targetUrl.pathname === currentUrl.pathname && targetUrl.hash === "";

    if (isSamePageHash) {
      isHashScroll.current = true;
      setStatus("exiting");
    } else if (isSamePageNoHash) {
      // Exact same path clicked: Bypass transition curtain completely
      window.scrollTo({ top: 0, behavior: "smooth" });
      targetHref.current = null;
    } else {
      isHashScroll.current = false;
      setStatus("exiting");
    }
  };

  // Detect pathname change to trigger the enter transition
  useEffect(() => {
    if (status === "exiting" && !isHashScroll.current && targetHref.current) {
      const targetUrl = new URL(targetHref.current, window.location.href);
      if (pathname === targetUrl.pathname) {
        if (targetUrl.hash) {
          const hash = targetUrl.hash.replace("#", "");
          // Wait a tiny frame for the new page layout to hydrate
          setTimeout(() => {
            const targetEl = document.getElementById(hash);
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: "auto" });
            }
            setStatus("entering");
          }, 100);
        } else {
          setStatus("entering");
        }
      }
    }
  }, [pathname, status]);

  // GSAP animation for transition exit and enter
  useGSAP(
    () => {
      if (status === "loading") return;

      if (status === "exiting") {
        // If targetHref is null, we are exiting from the onboarding screen, not a page transition.
        if (!targetHref.current) return;

        // Dynamic curtain theme coloring — read the data-theme attribute set by useThemeToggle
        // instead of fragile string-matching on computed CSS values.
        const isDark = document.documentElement.dataset.theme === "dark";
        curtainColorRef.current = isDark ? THEME_COLORS.light : THEME_COLORS.dark;

        document.body.style.overflow = "hidden";

        const tl = gsap.timeline({
          onComplete: () => {
            if (isHashScroll.current && targetHref.current) {
              const hash = targetHref.current.split("#")[1];
              const targetEl = document.getElementById(hash);
              if (targetEl) {
                targetEl.scrollIntoView({ behavior: "auto" });
              }
              setStatus("entering");
            } else if (targetHref.current) {
              const targetUrl = new URL(targetHref.current, window.location.href);
              if (targetUrl.pathname === pathname) {
                window.scrollTo({ top: 0, behavior: "auto" });
                setStatus("entering");
              } else {
                router.push(targetHref.current);
              }
            }
          },
        });

        if (pathRef.current) {
          gsap.set(containerRef.current, { visibility: "visible", pointerEvents: "auto" });
          gsap.set(pathRef.current, {
            fill: curtainColorRef.current,
            attr: { d: "M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z" },
          });

          tl.to(pathRef.current, {
            attr: { d: "M 0 0 L 100 0 L 100 50 Q 50 120 0 50 Z" },
            duration: ANIM_DURATIONS.standard,
            ease: "power2.in",
          }).to(pathRef.current, {
            attr: { d: "M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z" },
            duration: ANIM_DURATIONS.standard,
            ease: "power2.out",
          });
        }
      } else if (status === "entering") {
        const tl = gsap.timeline({
          onComplete: () => {
            document.body.style.overflow = "";
            setStatus("idle");
            targetHref.current = null;
            isHashScroll.current = false;
            gsap.set(containerRef.current, { visibility: "hidden", pointerEvents: "none" });
          },
        });

        if (pathRef.current) {
          gsap.set(containerRef.current, { visibility: "visible", pointerEvents: "auto" });
          gsap.set(pathRef.current, { fill: curtainColorRef.current });

          tl.to(pathRef.current, {
            attr: { d: "M 0 0 L 100 0 L 100 50 Q 50 -20 0 50 Z" },
            duration: ANIM_DURATIONS.standard,
            ease: "power2.in",
          }).to(pathRef.current, {
            attr: { d: "M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z" },
            duration: ANIM_DURATIONS.standard,
            ease: "power2.out",
          });
        }
      } else if (status === "idle") {
        // Ensure everything is completely hidden and mouse interactions are transparent
        gsap.set(containerRef.current, { visibility: "hidden", pointerEvents: "none" });
      }
    },
    { dependencies: [status], scope: containerRef }
  );

  return (
    <TransitionContext.Provider value={{ status, navigate }}>
      {/* Onboarding component handles the loading to exiting state change on first mount */}
      {status === "loading" || (status === "exiting" && !targetHref.current) ? (
        <Onboarding
          onExitStart={handleOnboardingExitStart}
          onFinish={handleOnboardingFinish}
        />
      ) : null}

      {/* Render children as long as initial onboarding is not active */}
      {status !== "loading" && children}

      {/* Transition SVG Curtain Overlay */}
      {status !== "loading" && (
        <div
          ref={containerRef}
          className="fixed inset-0 z-99999 flex items-center justify-center overflow-hidden bg-transparent select-none pointer-events-none"
          style={{ visibility: "hidden" }}
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              style={{ fill: THEME_COLORS.dark }}
              d="M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z"
            />
          </svg>
        </div>
      )}
    </TransitionContext.Provider>
  );
}
