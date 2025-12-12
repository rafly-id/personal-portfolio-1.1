import CardWork from "@/components/common/CardWork";
import { projects } from "@/lib/data";

const FeaturedWorkSection = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {featuredProjects.map((project, index) => (
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

export default FeaturedWorkSection;
