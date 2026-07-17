export const ANIM_DURATIONS = {
  fast: 0.35,
  standard: 0.6,
  slow: 1.0,
  reveal: 2.0, // Dedicated slow reveal for images
  extended: 2.4, // 1.2× reveal — used for background heading reveals
} as const;

export const ANIM_EASES = {
  entry: "power3.out",
  exit: "power3.inOut",
  hover: "power2.inOut",
  elasticOut: "elastic.out(1, 0.3)",
} as const;

export const ANIM_STAGGERS = {
  fast: 0.03,
  standard: 0.08,
  slow: 0.15,
} as const;
