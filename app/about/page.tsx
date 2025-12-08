import ScrollVelocity from "@/components/animations/ScrollVelocity";
import TextReveal from "@/components/animations/TextReveal";
import ParallaxImage from "@/components/animations/ParalaxImages";
import CardWork from "@/components/common/CardWork";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGreensock,
  SiFigma,
  SiGit,
  SiNodedotjs,
} from "react-icons/si";

const About = () => {
  const techStack = [
    {
      name: "Next.js",
      icon: <SiNextdotjs className="w-8 h-8 md:w-10 md:h-10" />,
    },
    { name: "React", icon: <SiReact className="w-8 h-8 md:w-10 md:h-10" /> },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-8 h-8 md:w-10 md:h-10" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-8 h-8 md:w-10 md:h-10" />,
    },
    { name: "GSAP", icon: <SiGreensock className="w-8 h-8 md:w-10 md:h-10" /> },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="w-8 h-8 md:w-10 md:h-10" />,
    },
    { name: "Git", icon: <SiGit className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: "Figma", icon: <SiFigma className="w-8 h-8 md:w-10 md:h-10" /> },
  ];

  const aboutDetails = [
    {
      title: "Short description.",
      text: "I started learning programming in 2023, and since then I’ve been passionate about creating minimal, responsive, and smooth user experiences using React and Next.js.",
    },
    {
      title: "What drives me.",
      text: "I love working through logic and problem-solving challenges, especially when turning ideas or designs into something interactive and functional.",
    },
    {
      title: "My approach.",
      text: "I focus on a minimalistic style — clean layouts, efficient structure, and user-first design that feels simple but polished.",
    },
  ];

  const certificates = [
    {
      imageSrc: "/images/sertif-1.jpg",
      imageAlt: "Sertifikat 1",
      title: "Frontend",
      tech: ["html", "css", "javascript"],
      link: "https://rafly-id-awwward.vercel.app/",
    },
    {
      imageSrc: "/images/sertif-2.jpg",
      imageAlt: "Sertifikat 2",
      title: "JavaScript",
      tech: ["javascript"],
      link: "https://rafly-id-awwward.vercel.app/",
    },
    {
      imageSrc: "/images/sertif-3.jpg",
      imageAlt: "Sertifikat 3",
      title: "React",
      tech: ["react"],
      link: "https://rafly-id-awwward.vercel.app/",
    },
  ];

  return (
    <div className="mx-5">
      <div className="uppercase">
        <TextReveal
          text={
            <ScrollVelocity
              texts={["About Me/", "Rafly Adriansyah/"]}
              velocity={50}
              numCopies={10}
            />
          }
          y={160}
          enableSplit={false}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 md:mt-20">
        <div>
          <div className="uppercase font-oswald font-bold text-4xl md:text-7xl mb-5 md:mb-10">
            <TextReveal text="Hi, I’m Rafly." y={150} duration={1} delay={0} />
          </div>
          <div className="text-xl md:text-3xl font-medium">
            <TextReveal
              text="Nice to meet you — I’m a Frontend Developer who enjoys building clean and modern web interfaces."
              y={150}
              duration={1}
              delay={0.2}
            />
          </div>
        </div>
        <div className="w-full h-full">
          <ParallaxImage
            src="/images/profile.png"
            alt="Profile"
            enableReveal={true}
            y={-30}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-5 mt-5">
        {aboutDetails.map((detail, index) => (
          <div key={index} className="flex-1 flex flex-col gap-3 md:gap-5">
            <div className="uppercase font-oswald font-bold text-2xl md:text-4xl">
              <TextReveal text={detail.title} y={100} duration={0.5} />
            </div>
            <div className="text-lg md:text-xl font-medium">
              <TextReveal text={detail.text} y={150} duration={1} delay={0.2} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <div className="uppercase font-oswald font-bold text-2xl md:text-4xl mb-10">
          <TextReveal text="Tech Stack." y={100} duration={0.5} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-8">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3 p-6 border-2 rounded-lg"
            >
              <div>{tech.icon}</div>
              <span className="font-medium text-lg">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="uppercase font-oswald font-bold text-2xl md:text-4xl mb-10 mt-10">
        <TextReveal text="Sertifikat" y={100} duration={0.5} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {certificates.map((cert, index) => (
          <CardWork
            key={index}
            imageSrc={cert.imageSrc}
            imageAlt={cert.imageAlt}
            title={cert.title}
            tech={cert.tech}
            link={cert.link}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
