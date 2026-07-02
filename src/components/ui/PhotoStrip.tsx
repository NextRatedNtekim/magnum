import { PlaceholderImage } from './PlaceholderImage';

interface PhotoStripProps {
  className?: string;
  rotation?: number;
  frameLabels?: string[];
}

/**
 * The site's signature visual: a die-cut photo-booth strip, tilted like
 * one pulled fresh from the printer. Reused (with restraint) in the
 * hero, portfolio, and testimonial-style moments — never as filler.
 */
export function PhotoStrip({
  className = '',
  rotation = -4,
  frameLabels = ['01', '02', '03'],
}: PhotoStripProps) {
  return (
    <div
      className={`bg-porcelain p-3 pb-8 rounded-sm shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] w-fit ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="flex flex-col gap-2">
        {frameLabels.map((label) => (
          <PlaceholderImage key={label} aspect="4/3" className="w-44 sm:w-52" label={label} />
        ))}
      </div>
      <p className="eyebrow text-charcoal/75 text-center pt-3">Magnum Photobooth</p>
    </div>
  );
}
