import CardWork from "@/components/feature/CardWork";
import { projects } from "@/lib/data";

const WorkListSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {projects.map((project, index) => (
        <CardWork
          key={index}
          imageSrc={project.imageSrc}
          imageAlt={project.imageAlt}
          title={project.title}
          tech={project.tech}
          link={project.link}
          github={project.github}
        />
      ))}
    </div>
  );
};

export default WorkListSection;
