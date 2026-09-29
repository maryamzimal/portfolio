import type { ComponentType } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import { socialLinks } from "../../data/portfolio";

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  Linkedin: FaLinkedin,
  Mail: FaEnvelope,
  Github: FaGithub,
};

interface SocialLinksProps {
  className?: string;
  size?: number;
}

export function SocialLinks({ className = "", size = 18 }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        if (!Icon) return null;
        return (
          <a
            key={link.platform}
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : undefined}
            rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={link.platform}
            className="text-secondary hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}
