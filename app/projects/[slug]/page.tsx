import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import ProjectDetailClient from "./ProjectDetailClient";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const pageUrl = `${SITE_CONFIG.siteUrl}/projects/${slug}`;

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Rafly Adriansyah`,
      description: project.description,
      url: pageUrl,
      type: "article",
      images: [{ url: project.imageSrc, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Rafly Adriansyah`,
      description: project.description,
      images: [project.imageSrc],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    url: `${SITE_CONFIG.siteUrl}/projects/${project.slug}`,
    applicationCategory: "WebApplication",
    author: {
      "@type": "Person",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.siteUrl,
    },
    image: new URL(project.imageSrc, SITE_CONFIG.siteUrl).toString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetailClient project={project} />
    </>
  );
}
