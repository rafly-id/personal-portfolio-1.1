import type { Metadata } from "next";

import Title from "@/components/ui/Title";
import ProjectListSection from "./sections/ProjectListSection";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my projects in detail.",
};

const Projects = () => {
  return (
    <div className="mx-5 mt-35">
      <Title text="all projects" showLine={false} className="text-[clamp(2.5rem,10vw,4.5rem)] md:text-[clamp(6rem,14vw,10rem)]" />
      <ProjectListSection />
    </div>
  );
};

export default Projects;
