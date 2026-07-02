import { Camera } from 'lucide-react';

interface PlaceholderImageProps {
  label?: string;
  className?: string;
  /** Aspect ratio, e.g. "4/6", "1/1", "16/9" */
  aspect?: string;
}

/**
 * Stand-in for real photography. Swap for an <img> once assets are
 * supplied — keeping the same aspect ratio prevents layout shift (CLS).
 */
export function PlaceholderImage({ label, className = '', aspect = '4/5' }: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-ink-raised border border-ink-line ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={label ? `Placeholder image: ${label}` : 'Placeholder image'}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(198,161,91,0.06) 10px, rgba(198,161,91,0.06) 11px)',
        }}
      />
      <div className="relative flex flex-col items-center gap-2 text-mist px-4 text-center">
        <Camera className="w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
        {label && <span className="eyebrow text-[10px] leading-snug">{label}</span>}
      </div>
    </div>
  );
}
