import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Muhammad Rafly Adriansyah Portfolio",
    short_name: "Rafly Portfolio",
    description:
      "Portfolio pribadi Muhammad Rafly Adriansyah — Web Developer & Software Engineer dengan fokus pada arsitektur web modern, rekayasa perangkat lunak, dan aplikasi performa tinggi.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/images/icon.webp",
        sizes: "192x192 512x512",
        type: "image/webp",
      },
    ],
  };
}
