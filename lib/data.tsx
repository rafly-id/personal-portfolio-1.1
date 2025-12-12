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

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rafly-adriansyah-35587225b/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/__rafllyy/",
  },
  {
    name: "Github",
    href: "https://github.com/rafly-id",
  },
  {
    name: "Email",
    href: "mailto:muhr0417@gmail.com",
  },
  {
    name: "Whatsapp",
    href: `https://wa.me/6285974111131?text=${encodeURIComponent(
      "Halo Rafly "
    )}`,
  },
];

export const projects = [
  {
    imageSrc: "/images/project-1.png",
    imageAlt: "Project 1",
    title: "Movie App",
    tech: ["react", "tailwindcss"],
    link: "https://rafly-id-try-movie-app.vercel.app/",
    github: "https://github.com/rafly-id/rafly_id_tryMovieApp",
    featured: true,
  },
  {
    imageSrc: "/images/project-2.png",
    imageAlt: "Project 2",
    title: "Zentry App Awwward",
    tech: ["react", "gsap", "tailwindcss"],
    link: "https://rafly-id-awwward.vercel.app/",
    github: "https://github.com/rafly-id/rafly_id_awwward",
    featured: true,
  },
  {
    imageSrc: "/images/project-3.png",
    imageAlt: "Project 3",
    title: "Portofolio 2024",
    tech: ["react", "gsap", "tailwindcss"],
    link: "https://raf-personal-portfolio.vercel.app/",
    github: "https://github.com/rafly-id/personal-portfolio",
    featured: false,
  },
  {
    imageSrc: "/images/project-4.png",
    imageAlt: "Project 4",
    title: "Todo List",
    tech: ["html", "css", "javascript"],
    link: "https://id-camp-todoapps.vercel.app/",
    github: "https://github.com/rafly-id/idCamp_todoapps",
    featured: false,
  },
  {
    imageSrc: "/images/project-5.png",
    imageAlt: "Project 5",
    title: "OnePiece",
    tech: ["html", "css"],
    link: "https://web-client-uas-raflylucky.vercel.app/",
    github: "https://github.com/rafly-id/WebClient-UAS",
    featured: false,
  },
];

export const techStack = [
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

export const aboutDetails = [
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

export const certificates = [
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
