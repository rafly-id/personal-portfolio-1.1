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
    slug: "movie-app",
    imageSrc: "/images/movie.png",
    imageAlt: "Movie App Preview",
    title: "Movie App",
    tech: ["React", "Vite", "Tailwind CSS", "Appwrite"],
    link: "https://rafly-id-try-movie-app.vercel.app/",
    github: "https://github.com/rafly-id/rafly_id_tryMovieApp",
    featured: true,
    role: "Frontend Developer & UI Designer",
    year: "2023",
    description:
      "A simple React and Vite-based application for searching movies using the TMDB API and displaying a list of trending titles.",
    longDescription:
      "Movie App is a movie search application built using the modern React (v19) and Vite ecosystem. It integrates directly with The Movie Database (TMDB) API to provide real-time search data. Additionally, it utilizes an Appwrite database to store and retrieve search statistics in order to display a curated lineup of currently trending movies.",
    features: [
      "Dynamic movie search by title",
      "Displays a list of the top 5 trending movies with the most searches from the database",
      "Custom debounce feature to prevent excessive API calls while the user is typing",
      "Highly responsive user interface optimized for various screen sizes",
    ],
    challenges:
      "Optimizing API request frequencies during search input changes. Implemented a custom debounce handler that waits for 500ms after the user finishes typing before initiating API calls, reducing unnecessary server load by over 60%.",
  },
  {
    slug: "zentry-app-awwward",
    imageSrc: "/images/zentry.png",
    imageAlt: "Zentry App Preview",
    title: "Zentry App Awwward",
    tech: ["React", "Vite", "GSAP", "Tailwind CSS"],
    link: "https://rafly-id-awwward.vercel.app/",
    github: "https://github.com/rafly-id/rafly_id_awwward",
    featured: true,
    role: "Creative Developer / Motion Designer",
    year: "2024",
    description:
      "An interactive portfolio demo showcasing Awwwards-style visual effects, inspired by the modern design of Zentry.",
    longDescription:
      "This project is an interactive portfolio demonstration that replicates the user experience and visual quality of the award-winning Zentry website. Built with Vite and React (v18), this project highlights the use of the GreenSock Animation Platform (GSAP) to execute complex transition effects and scroll-driven animations without compromising raw performance.",
    features: [
      "Dynamic and advanced scroll-driven animations using GSAP",
      "Highly adaptive responsive design powered by Tailwind CSS",
      "Lightweight page routing without full reloads using React Router",
      "Modular icon interface implementation utilizing React Icons",
    ],
    challenges:
      "Maintaining high performance and steady 60FPS frame rates while executing multiple overlapping video plays and clip-path transitions. Solved by optimizing GPU rendering with hardware acceleration, applying translate3d for transitions, and ensuring strict ScrollTrigger cleanup.",
  },
  {
    slug: "todo-list",
    imageSrc: "/images/noted.png",
    imageAlt: "Todo List Preview",
    title: "Todo List",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://id-camp-todoapps.vercel.app/",
    github: "https://github.com/rafly-id/idCamp_todoapps",
    featured: true,
    role: "Frontend Developer",
    year: "2023",
    description:
      "A clean task management application emphasizing local storage features, built as part of the idCamp training program.",
    longDescription:
      "This Todo List application is developed using pure HTML, CSS, and vanilla JavaScript. Despite its visual simplicity, this project—developed for the idCamp program—focuses heavily on clean code structure and direct DOM manipulation. Its primary feature is the utilization of modern browser local storage, ensuring that task progress is persistent and not lost when the page reloads.",
    features: [
      "Complete functionality to add, delete, and mark tasks as completed",
      "Undo feature to quickly restore accidentally deleted tasks",
      "Automatic and persistent data storage within the browser's localStorage",
      "Responsive interface equipped with intuitive action icons",
    ],
    challenges:
      "Ensuring state updates and deletions seamlessly synchronise with the DOM without relying on modern framework re-renders. Solved by building a simple modular event dispatcher system that updates the state cache and triggers DOM renders cleanly.",
  },
  {
    slug: "onepiece",
    imageSrc: "/images/onepiece.png",
    imageAlt: "OnePiece Website Preview",
    title: "OnePiece",
    tech: ["HTML", "CSS"],
    link: "https://web-client-uas-raflylucky.vercel.app/",
    github: "https://github.com/rafly-id/WebClient-UAS",
    featured: false,
    role: "UI Developer",
    year: "2023",
    description:
      "A static web implementation project featuring a collection of HTML and CSS pages for a university web client practicum assignment.",
    longDescription:
      "The WebClient-UAS project is a final semester exam (UAS) practicum assignment focused on building a static web interface without the use of frameworks. This repository features a multi-page architecture linked via basic navigation. It separates the visual themes for the main page, character profiles, and ship information by utilizing distinct CSS files to maintain code modularity and cleanliness.",
    features: [
      "Separated static multi-page architecture (Index, Characters, and Ship)",
      "Responsive and visually appealing interface built entirely with CSS",
      "Clean, semantic, and highly readable HTML and CSS code structure",
      "Stylesheet splitting (styles.css, karakter-styles.css, ship-styles.css) for better modularity",
    ],
    challenges:
      "Creating a multi-layered characters grid that scales gracefully on extra-wide screens as well as compact mobile screens without losing its composition. Achieved using advanced CSS grid auto-fit configurations.",
  },
  {
    slug: "sejati-dashboard-bp3kp",
    imageSrc: "/images/rtlh.png",
    imageAlt: "SEJATI Application Dashboard Preview",
    title: "SEJATI (Klinik PKP) Dashboard",
    tech: ["React", "TypeScript", "Tailwind CSS", "FSD"],
    link: "https://sejati.krsjawa3.com/",
    github: "https://github.com/balai-p3kp-jawa-3",
    featured: true,
    role: "Frontend Developer Intern",
    year: "2026",
    description:
      "A large-scale modular frontend restructuring of the SEJATI housing data management application for BP3KP Jawa III.",
    longDescription:
      "Developed during my frontend engineering internship, this project involved the complete restructuring of the SEJATI application and the integration of the Sinoman Dashboard for RTLH (Rumah Tidak Layak Huni) management. The primary objective was migrating a monolithic legacy codebase into a highly scalable, modular architecture using Feature-Sliced Design (FSD). It features strict TypeScript typings, optimized rendering pipelines, and high-level data security.",
    features: [
      "Modular frontend architecture utilizing Feature-Sliced Design (FSD)",
      "Role-Based Access Control (RBAC) with Region-lock security measures",
      "Centralized UI utility classes for lightweight visual rendering",
      "Optimized API fetching logic, custom hooks, and state management",
    ],
    challenges:
      "Resolving severe memory leaks, z-index bugs, and double-fetching issues from the legacy code. Solved by implementing clean custom React hooks, optimizing pagination logic, and strictly enforcing TypeScript interfaces to prevent data mismatches, resulting in a zero-defect deployment.",
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
    text: "I started learning programming in 2023 and gradually developed a strong interest in front-end development, focusing on building clean, responsive, and smooth user interfaces using modern tools like React and Next.js.",
  },
  {
    title: "What drives me.",
    text: "I enjoy solving logical problems and facing technical challenges, especially when transforming ideas or visual designs into interactive, functional, and well-structured web experiences that feel intuitive and engaging.",
  },
  {
    title: "My approach.",
    text: "I focus on a minimalistic and user-centered approach by maintaining clean layouts, efficient and readable code structures, and thoughtful design choices that result in simple, modern, and polished interfaces.",
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
