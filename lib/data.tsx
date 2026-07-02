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
    imageSrc: "/images/project-1.png",
    imageAlt: "Movie App Preview",
    title: "Movie App",
    tech: ["React", "Tailwind CSS"],
    link: "https://rafly-id-try-movie-app.vercel.app/",
    github: "https://github.com/rafly-id/rafly_id_tryMovieApp",
    featured: true,
    role: "Frontend Developer & UI Designer",
    year: "2023",
    description: "A sleek movie database application displaying trending titles, details, and search capabilities, powered by TMDB API.",
    longDescription: "Movie App is a dynamic movie exploration platform built to provide users with an engaging and fluid movie browsing experience. By connecting to the TMDB API, it displays trending movies, popular television shows, detailed cast lists, ratings, and trailers. The primary focus of this project was to master asynchronous state management, search debounce handling, and clean, responsive UI layouts.",
    features: [
      "Real-time search with dynamic query debouncing",
      "Dynamic details modal with cast members, runtime, and trailers",
      "Curated rows for trending movies, high-rated shows, and genre sections",
      "Fully responsive fluid grid optimized for mobile and desktop displays"
    ],
    challenges: "Optimizing API request frequencies during search input changes. Implemented a custom debounce handler that waits for 500ms after the user finishes typing before initiating API calls, reducing unnecessary server load by over 60%."
  },
  {
    slug: "zentry-app-awwward",
    imageSrc: "/images/project-2.png",
    imageAlt: "Zentry App Preview",
    title: "Zentry App Awwward",
    tech: ["React", "GSAP", "Tailwind CSS"],
    link: "https://rafly-id-awwward.vercel.app/",
    github: "https://github.com/rafly-id/rafly_id_awwward",
    featured: true,
    role: "Creative Developer / Motion Designer",
    year: "2024",
    description: "An award-winning caliber interactive website replicating Zentry's rich-motion user experience with GSAP and React.",
    longDescription: "This project is a high-fidelity replica and homage to the award-winning Zentry website. Crafted using React and GreenSock Animation Platform (GSAP), it features complex scroll-driven animations, floating multi-layered cards, customized cursor tracking, and video mask transitions. It showcases advanced front-end capabilities in combining raw performance with cutting-edge visual aesthetics.",
    features: [
      "Video mask clipping and path morphing effects using SVG curves",
      "Fluid page-fold scroll pinning and immersive web narrative layouts",
      "Bento-grid masonry cards with magnetic tilt responses on cursor hover",
      "Integrated audio cues and volume state synchronizations"
    ],
    challenges: "Maintaining high performance and steady 60FPS frame rates while executing multiple overlapping video plays and clip-path transitions. Solved by optimizing GPU rendering with hardware acceleration, applying translate3d for transitions, and ensuring strict ScrollTrigger cleanup."
  },
  {
    slug: "portfolio-previous-version",
    imageSrc: "/images/project-3.png",
    imageAlt: "Previous Portfolio Preview",
    title: "Portfolio Previous Version",
    tech: ["React", "GSAP", "Tailwind CSS"],
    link: "https://raf-personal-portfolio.vercel.app/",
    github: "https://github.com/rafly-id/personal-portfolio",
    featured: false,
    role: "Frontend Developer & UI/UX Designer",
    year: "2024",
    description: "The previous iteration of my personal portfolio showcasing experimental GSAP scroll animations and minimalist layouts.",
    longDescription: "A showcase of earlier design concepts and interactive systems, this portfolio version highlights a darker, high-contrast look. It served as a sandbox for implementing custom magnetic button animations, screen-wipe transitions, and staggered text effects. It established the baseline for my current aesthetic direction.",
    features: [
      "Magnetic link hover effects that pull toward the cursor",
      "Staggered text introductions utilizing SplitText split configurations",
      "Clean dark mode contrast layout highlighting personal bio elements",
      "Responsive section navigation transitions and interactive layout grids"
    ],
    challenges: "Designing intuitive navigation for both desktop mouse cursors and mobile touch screens without losing the interactive feel. Implemented cross-device event handlers to bypass desktop-only effects on mobile viewports."
  },
  {
    slug: "todo-list",
    imageSrc: "/images/project-4.png",
    imageAlt: "Todo List Preview",
    title: "Todo List",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://id-camp-todoapps.vercel.app/",
    github: "https://github.com/rafly-id/idCamp_todoapps",
    featured: true,
    role: "Frontend Developer",
    year: "2023",
    description: "A clean, performant task management app emphasizing local storage and pure modern JavaScript DOM manipulation.",
    longDescription: "Developed during the IDCamp training program, this Todo List application is a study in clean software design and DOM performance. Using pure vanilla JavaScript, CSS variables, and HTML5 semantic structure, it features full CRUD operations, category filtering, search, and local storage state persistence. It prioritizes accessibility and fast, lightweight load times.",
    features: [
      "Complete task lifecycle management (create, read, update, delete)",
      "State preservation across browser restarts using localStorage",
      "Dynamic filtering tabs for active, pending, and completed tasks",
      "Smooth CSS list transitions and custom checkmark animations"
    ],
    challenges: "Ensuring state updates and deletions seamlessly synchronise with the DOM without relying on modern framework re-renders. Solved by building a simple modular event dispatcher system that updates the state cache and triggers DOM renders cleanly."
  },
  {
    slug: "onepiece",
    imageSrc: "/images/project-5.png",
    imageAlt: "OnePiece Website Preview",
    title: "OnePiece",
    tech: ["HTML", "CSS"],
    link: "https://web-client-uas-raflylucky.vercel.app/",
    github: "https://github.com/rafly-id/WebClient-UAS",
    featured: false,
    role: "UI Developer",
    year: "2023",
    description: "A fan-created responsive landing page celebrating the legendary anime, built with clean semantic HTML and CSS.",
    longDescription: "OnePiece is a visually expressive fan website focusing on high-impact layouts, custom animations, and typography designed to match the high-energy world of the series. Created with semantic HTML5 elements and modern CSS grids/flexbox, this project emphasizes responsive layout structuring and fluid grid design without framework dependencies.",
    features: [
      "Fully responsive grid layouts designed entirely from scratch",
      "Elegant custom hover transitions and character preview zoom cards",
      "Semantic HTML outline for improved readability and accessibility",
      "Embedded theme background visual assets and stylized anime cards"
    ],
    challenges: "Creating a multi-layered characters grid that scales gracefully on extra-wide screens as well as compact mobile screens without losing its composition. Achieved using advanced CSS grid auto-fit configurations."
  },
  {
    slug: "portfolio-latest",
    imageSrc: "/images/project-6.png",
    imageAlt: "Latest Portfolio Preview",
    title: "Portofolio Latest",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "GSAP"],
    link: "https://rafly-id.vercel.app/",
    github: "https://github.com/rafly-id/personal-portfolio-1.1",
    featured: false,
    role: "Lead Architect & UI Engineer",
    year: "2026",
    description: "The current modern portfolio website built using Next.js 15, React 19, Tailwind CSS v4, and GSAP.",
    longDescription: "This very portfolio represents my current engineering and creative philosophy. Built on Next.js, it leverages React Server Components, Tailwind CSS v4's dynamic color values, and complex GSAP animation pipelines. Featuring cursor tracking, smooth scroll hooks, and fluid typography, it provides a high-performance visual journal of my journey as a developer.",
    features: [
      "Built on Next.js 15 App Router and React 19 concurrent features",
      "Fluid scrolling dynamics using Lenis smooth scroll integrations",
      "Interactive customized mouse tracker following the user dynamically",
      "High-end custom animations with GSAP ScrollTrigger and text split tools"
    ],
    challenges: "Integrating heavy scroll animations with Next.js client-side page transitions and custom loaders without creating scroll jank or memory leaks. Solved by writing clean cleanup functions within useGSAP hooks."
  }
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
