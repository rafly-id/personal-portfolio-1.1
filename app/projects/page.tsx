import type { Metadata } from "next";

import Title from "@/components/ui/Title";
import ProjectListSection from "./sections/ProjectListSection";
import { SITE_CONFIG } from "@/lib/config";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore web development, software engineering, and full-stack application projects built by Muhammad Rafly Adriansyah.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Rafly Adriansyah",
    description:
      "Explore web development, software engineering, and full-stack application projects built by Muhammad Rafly Adriansyah.",
    url: `${SITE_CONFIG.siteUrl}/projects`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Rafly Adriansyah",
    description:
      "Explore web development, software engineering, and full-stack application projects built by Muhammad Rafly Adriansyah.",
  },
};

const Projects = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects | Rafly Adriansyah",
    description:
      "Explore web development, software engineering, and full-stack application projects built by Muhammad Rafly Adriansyah.",
    url: `${SITE_CONFIG.siteUrl}/projects`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((p, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: p.title,
        url: `${SITE_CONFIG.siteUrl}/projects/${p.slug}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="px-4 md:px-10 mt-24 md:mt-35">
        <Title
          text="all projects"
          showLine={false}
          className="text-[clamp(2.25rem,9vw,4.5rem)] md:text-[clamp(6rem,14vw,10rem)] w-full flex justify-center items-center "
        />
        <ProjectListSection />
      </div>
    </>
  );
};

export default Projects;

