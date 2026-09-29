import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import type { Project } from "../data/portfolio";
import { fadeUp } from "../lib/animations";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

// ─── Category accent colors ───────────────────────────────
const categoryColors: Record<string, string> = {
  "Enterprise Web App": "text-blue-400",
  "AI-Powered Healthcare Platform": "text-emerald-400",
  "Point of Sale System": "text-orange-400",
  "Frontend Application": "text-cyan-400",
  "Web Design": "text-pink-400",
  "Web Application": "text-violet-400",
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const accentColor = categoryColors[project.category] ?? "text-accent";

  return (
    <motion.article
      variants={fadeUp}
      className={`group relative rounded-2xl border border-border bg-surface hover:border-accent/40 transition-all duration-300 overflow-hidden ${
        featured ? "p-7 md:p-8" : "p-6"
      }`}
      aria-label={`Project: ${project.title}`}
    >
      {/* Subtle hover glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top left, var(--color-accent) 0%, transparent 60%)",
          opacity: 0,
        }}
      />

      {/* Category badge */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <span className={`text-xs font-semibold tracking-wider uppercase ${accentColor}`}>
          {project.category}
        </span>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title} live`}
            className="text-subtle hover:text-accent transition-colors duration-200"
          >
            <ExternalLink size={15} strokeWidth={1.8} />
          </a>
        )}
      </div>

      {/* Title */}
      <h3
        className={`font-bold text-primary group-hover:text-accent transition-colors duration-200 mb-3 ${
          featured ? "text-xl md:text-2xl" : "text-lg"
        }`}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-secondary text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Features */}
      {featured && project.features.length > 0 && (
        <ul className="space-y-1.5 mb-5">
          {project.features.map((feature, i) => (
            <li key={i} className="flex gap-2 text-xs text-secondary">
              <span className="text-accent mt-0.5">▸</span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Technologies */}
      {project.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg bg-bg border border-border text-subtle"
            >
              <Layers size={10} strokeWidth={2} />
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}
