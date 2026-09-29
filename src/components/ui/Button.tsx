import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  icon = false,
  href,
  external = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const reduced = useReducedMotion();

  const base =
    "inline-flex items-center gap-2 font-medium rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg cursor-pointer";

  const variants = {
    primary:
      "bg-accent text-bg hover:bg-accent-hover border border-transparent",
    secondary:
      "bg-transparent text-primary border border-border hover:border-accent hover:text-accent",
    ghost:
      "bg-transparent text-secondary hover:text-primary border border-transparent",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {children}
      {icon && (
        <motion.span
          animate={reduced ? {} : { x: 0 }}
          whileHover={reduced ? {} : { x: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <ArrowRight size={16} strokeWidth={2} />
        </motion.span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        aria-label={typeof children === "string" ? children : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
