/**
 * Centralized design-system configuration.
 * Single source of truth for values that are used across multiple files.
 */

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
