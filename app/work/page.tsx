import type { Metadata } from "next";

import Title from "@/components/ui/Title";
import WorkListSection from "./sections/WorkListSection";

export const metadata: Metadata = {
  title: "Work",
  description: "Explore my projects and professional work in detail.",
};

const Work = () => {
  return (
    <div className="mx-5 mt-50">
      <Title text="Work" />
      <WorkListSection />
    </div>
  );
};

export default Work;
