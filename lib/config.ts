export const SITE_CONFIG = {
  name: "Muhammad Rafly Adriansyah",
  title: "Rafly Adriansyah Portfolio",
  description:
    "Portfolio pribadi Muhammad Rafly Adriansyah — seorang Web Developer & Software Engineer yang berpengalaman dalam pengembangan aplikasi web modern, arsitektur perangkat lunak, dan sistem performa tinggi.",
  siteUrl: "https://rafly-id.vercel.app",
} as const;

/**
 * The two theme color values used throughout the site.
 * Dark is the background color of the dark theme, Light is the background color of the light theme.
 * These are referenced in GSAP animations, SVG fills, and Tailwind arbitrary values.
 */
export const THEME_COLORS = {
  dark: "#1c1a19",
  light: "#f4f3ef",
} as const;

/**
 * Lenis smooth-scroll easing function (Expo Out).
 * Extracted from SmoothScroll.tsx where it was defined inline.
 */
export const LENIS_EASING = (t: number): number =>
  Math.min(1, 1.001 - Math.pow(2, -10 * t));

