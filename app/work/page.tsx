import type { Metadata } from "next";

import Title from "@/components/ui/Title";
import WorkListSection from "./sections/WorkListSection";

export const metadata: Metadata = {
  title: "Work",
  description: "Explore my projects and professional work in detail.",
};

const Work = () => {
  return (
    <div className="mx-5 mt-25">
      <Title text="Work" className="text-7xl md:text-9xl" />
      <WorkListSection />
    </div>
  );
};

export default Work;
