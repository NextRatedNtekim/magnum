interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';
  const titleColor = light ? 'text-ink' : 'text-porcelain';
  const descColor = light ? 'text-charcoal/70' : 'text-mist';

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignment} ${className}`}>
      {eyebrow && <span className="eyebrow text-champagne">{eyebrow}</span>}
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-medium text-balance ${titleColor}`}>
        {title}
      </h2>
      {description && <p className={`text-base sm:text-lg leading-relaxed ${descColor}`}>{description}</p>}
    </div>
  );
}
