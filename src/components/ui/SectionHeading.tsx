interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
