import type { Metadata } from "next";

import Title from "@/components/ui/Title";
import WorkListSection from "./sections/WorkListSection";

export const metadata: Metadata = {
  title: "Work",
  description: "Explore my projects and professional work in detail.",
};

const Work = () => {
  return (
    <div className="mx-5 mt-35">
      <Title text="Work" className="text-[clamp(3.5rem,14vw,6rem)] md:text-[clamp(6rem,14vw,10rem)]" />
      <WorkListSection />
    </div>
  );
};

export default Work;
