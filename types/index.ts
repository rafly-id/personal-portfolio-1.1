import { IconType } from "react-icons";

export interface SocialLink {
  name: string;
  href: string;
}

export interface Project {
  slug: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  tech: string[];
  link: string;
  github: string;
  featured: boolean;
  role: string;
  year: string;
  description: string;
  longDescription?: string;
  features?: string[];
  challenges?: string;
}

export interface TechItem {
  name: string;
  icon: IconType;
}

export interface AboutDetail {
  title: string;
  text: string;
}

export interface Certificate {
  imageSrc: string;
  imageAlt: string;
  title: string;
  tech: string[];
  link: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  tech: string[];
}

