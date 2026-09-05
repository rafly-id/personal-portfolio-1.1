# Personal Portfolio 1.1

[![Next.js](https://img.shields.io/badge/Next.js-16.0.10-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green?style=flat-square&logo=greensock)](https://gsap.com/)
[![Bun](https://img.shields.io/badge/Runtime-Bun-f9f1e7?style=flat-square&logo=bun)](https://bun.sh/)

A high-performance, minimalist personal portfolio website showcasing the projects, work experience, and developer journey of **Muhammad Rafly Adriansyah**. Engineered using the Next.js 16 App Router, React 19, Tailwind CSS v4, and interactive GSAP animations.

## Key Features

- **Next.js 16 (App Router):** Fast, production-ready routing structure, static generation, and optimized metadata headers.
- **SEO & JSON-LD Structured Data:** Full technical SEO architecture featuring JSON-LD `@graph` (Person & WebSite schemas), dynamic XML sitemap generation for project routes, custom `robots.txt`, Web App Manifest, and OpenGraph / Twitter metadata cards.
- **GSAP & Lenis Integration:** Custom page loader transitions, text animations, parallax effects, and smooth inertia scrolling.
- **Tailwind CSS v4:** Future-proof utility-first styling with native CSS variables.
- **Interactive Cursor:** A canvas-free HTML cursor that dynamically reacts to interactive UI elements.
- **Structured Data Layer:** Centralized portfolio data repository for quick updates across projects, experiences, and certificates.

---

## Tech Stack & Core Libraries

- **Framework:** Next.js `^16.0.10` (App Router)
- **Library:** React `^19.2.3`
- **Language:** TypeScript `^5`
- **Style:** Tailwind CSS `^4` (with PostCSS configurations)
- **Animation:** GSAP `^3.13.0` & `@gsap/react` `^2.1.2`
- **Scroller:** Lenis `^1.3.16`
- **Icons:** Lucide React & React Icons
- **Fonts:** DM Sans & Instrument Serif (Google Fonts)

---

## Getting Started

Follow these steps to run the portfolio website locally.

### Prerequisites

You need **Bun** installed on your system. Alternatively, you can use **Node.js** with npm, pnpm, or yarn.

### 1. Clone the repository

```bash
git clone https://github.com/rafly-id/personal-portfolio.git
cd personal-portfolio
```

### 2. Install dependencies

Using Bun (Recommended):
```bash
bun install
```

*Or use fallback package managers:*
```bash
npm install
# or
pnpm install
# or
yarn install
```

### 3. Start the development server

Using Bun (Recommended):
```bash
bun dev
```

*Or use fallback scripts:*
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

The application will launch on [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
bun run build
bun run start
```

---

## Project Structure

The project follows a modular, scalable architecture. Key components and features are decoupled to maintain code clarity.

```
.
├── app/                      # Next.js App Router root
│   ├── (landing)/            # Main homepage route group
│   │   ├── page.tsx          # Homepage index page
│   │   └── sections/         # Segmented home sections
│   │       ├── HeroSection   # Immersive introduction & heading
│   │       ├── AboutDetails  # Biography & approach values
│   │       ├── Experience    # Career timeline & intern achievements
│   │       ├── FeaturedWork  # Filtered showcased projects
│   │       ├── TechStack     # Visual skills grid
│   │       └── Certificates  # Credentials & certifications
│   ├── work/                 # Work route directory
│   │   ├── page.tsx          # Master work portfolio listing page
│   │   └── [slug]/           # Dynamic project details and case studies
│   ├── layout.tsx            # Global layout wrapper, fonts, metadata & JSON-LD schema markup
│   ├── manifest.ts           # Web application manifest configuration
│   ├── opengraph-image.tsx   # Dynamic OpenGraph social preview image generator
│   ├── robots.ts             # Dynamic robots.txt routing rule engine
│   ├── sitemap.ts            # Dynamic XML sitemap generator (Includes dynamic project routes)
│   └── template.tsx          # Page transition wrapper
├── components/               # UI and Layout Components
│   ├── feature/              # Feature-specific blocks (e.g., Work cards, onboarding screen)
│   ├── global/               # Cross-cutting concerns (e.g., Cursor, smooth scroll wrappers)
│   ├── layout/               # General layouts (Navbar, Footer)
│   └── ui/                   # Reusable atomic UI elements (Buttons, Typography headers)
├── hooks/                    # Custom interactive React hooks
├── lib/                      # Configuration, animations, and datasets
│   ├── animation.ts          # GSAP animation timeline templates
│   ├── config.ts             # Project details configuration constants
│   ├── data.tsx              # Master portfolio data (Projects, experiences, etc.)
│   ├── gsap.ts               # Core GSAP registrations and setups
│   └── utils.ts              # Tailwind merger and formatting helpers
├── public/                   # Static files, certificate screenshots, and custom assets
└── styles/                   # Style definitions
    └── globals.css           # Global stylesheet importing Tailwind CSS v4 variables
```

## Project Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `dev` | `bun --bun next dev` | Runs the development server inside the Bun environment |
| `build` | `bun --bun next build` | Compiles the Next.js application for production |
| `start` | `bun --bun next start` | Runs the built Next.js application in production mode |
| `lint` | `bun --bun next lint` | Runs ESLint to check code syntax and rules compliance |

---

## Contact & Socials

- **Author:** Muhammad Rafly Adriansyah
- **Role:** Web Developer & Software Engineer
- **Email:** [muhr0417@gmail.com](mailto:muhr0417@gmail.com)
- **LinkedIn:** [Rafly Adriansyah](https://www.linkedin.com/in/rafly-adriansyah-35587225b/)
- **GitHub:** [@rafly-id](https://github.com/rafly-id)
- **Instagram:** [@\_\_rafllyy](https://www.instagram.com/__rafllyy/)
- **WhatsApp:** [Message me](https://wa.me/628123456789) *(Dynamic WhatsApp Link generated on site)*
