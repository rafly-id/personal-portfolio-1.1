/**
 * Centralized GSAP plugin registration.
 *
 * Import GSAP and its plugins from this file instead of importing directly
 * from "gsap" or "gsap/ScrollTrigger" in individual component files.
 * This ensures plugins are registered exactly once, regardless of
 * module load order or code-splitting boundaries.
 *
 * Usage:
 *   import { gsap, ScrollTrigger, SplitText } from "@/lib/gsap";
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export { gsap, ScrollTrigger, SplitText };
