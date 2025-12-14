import { projects, techStack, aboutDetails, certificates } from "@/lib/data";

export type Project = (typeof projects)[number];
export type TechItem = (typeof techStack)[number];
export type AboutDetail = (typeof aboutDetails)[number];
export type Certificate = (typeof certificates)[number];
