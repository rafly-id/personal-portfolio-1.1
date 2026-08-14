import type { Metadata } from "next";

import Title from "@/components/ui/Title";
import ProjectListSection from "./sections/ProjectListSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore frontend development, web application, and UI/UX design projects built by Muhammad Rafly Adriansyah.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Rafly Adriansyah",
    description:
      "Explore frontend development, web application, and UI/UX design projects built by Muhammad Rafly Adriansyah.",
    url: "https://rafly-id.vercel.app/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Rafly Adriansyah",
    description:
      "Explore frontend development, web application, and UI/UX design projects built by Muhammad Rafly Adriansyah.",
  },
};

const Projects = () => {
  return (
    <div className="px-4 md:px-10 mt-24 md:mt-35">
      <Title text="all projects" showLine={false} className="text-[clamp(2.25rem,9vw,4.5rem)] md:text-[clamp(6rem,14vw,10rem)] w-full flex justify-center items-center " />
      <ProjectListSection />
    </div>
  );
};

export default Projects;
