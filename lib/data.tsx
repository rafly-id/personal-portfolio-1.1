import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGreensock,
  SiFigma,
  SiGit,
  SiNodedotjs,
  SiJavascript,
  SiGithub,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { getWhatsAppLink } from "@/lib/utils";

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
    href: getWhatsAppLink("Halo Rafly"),
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
    title: "Portfolio 2024",
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
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  { name: "React", icon: SiReact },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  { name: "GSAP", icon: SiGreensock },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Figma", icon: SiFigma },
];

export const aboutDetails = [
  {
    title: "Short description.",
    text: "I started learning programming in 2023 and quickly developed a strong interest in building clean, responsive, and smooth user interfaces using React and Next.js.",
  },
  {
    title: "What drives me.",
    text: "I enjoy solving logical problems and tackling challenges, especially when transforming ideas or designs into interactive, functional, and well-structured web experiences.",
  },
  {
    title: "My approach.",
    text: "I prioritize a minimalistic approach by focusing on clean layouts, efficient code structure, and user-first design that feels simple, modern, and polished.",
  },
];

export const certificates = [
  {
    imageSrc: "/images/sertif-1.jpg",
    imageAlt: "Sertifikat 1",
    title: "Front-End Web Pemula",
    tech: ["html", "css", "javascript"],
    link: "https://www.dicoding.com/certificates/L4PQ5KG62ZO1",
  },
  {
    imageSrc: "/images/sertif-2.jpg",
    imageAlt: "Sertifikat 2",
    title: "Belajar Dasar JavaScript",
    tech: ["javascript"],
    link: "https://www.dicoding.com/certificates/JLX14E6Q6X72",
  },
  {
    imageSrc: "/images/sertif-3.jpg",
    imageAlt: "Sertifikat 3",
    title: "Aplikasi Web React",
    tech: ["react"],
    link: "https://www.dicoding.com/certificates/6RPNYE5R4Z2M",
  },
];
