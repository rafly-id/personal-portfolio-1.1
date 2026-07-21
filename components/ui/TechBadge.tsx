import { cn } from "@/lib/utils";

interface TechBadgeProps {
  tech: string;
  className?: string;
}

/**
 * Unified tech-stack pill badge.
 * Replaces the repeated inline badge patterns across FeaturedProjectsSection,
 * ProjectDetailClient, CertificatesSection, and ExperienceSection.
 */
export default function TechBadge({ tech, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "px-2.5 py-0.5 text-[10px] uppercase font-bold tracking-wider text-foreground/70 rounded-full border border-foreground/10 bg-foreground/3",
        className
      )}
    >
      {tech}
    </span>
  );
}
