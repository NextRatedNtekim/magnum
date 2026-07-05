interface MarqueeImage {
  src: string;
  alt: string;
}

interface PhotoMarqueeProps {
  images: MarqueeImage[];
  className?: string;
}

/**
 * A continuous, seamlessly-looping strip of photos — the site's take on
 * the "See It In Action" horizontal scroll gallery. The image list is
 * duplicated once so the CSS animation can loop from 0% to -50% with no
 * visible seam. Pauses on hover/focus for accessibility and so people
 * can actually look at a photo.
 */
export function PhotoMarquee({ images, className = '' }: PhotoMarqueeProps) {
  const track = [...images, ...images];

  return (
    <div
      className={`relative w-full overflow-hidden marquee-mask ${className}`}
      role="region"
      aria-label="Gallery of past events, scrolling automatically"
    >
      <div className="marquee-track flex w-max gap-5" tabIndex={0}>
        {track.map((img, i) => (
          <div
            key={i}
            className="glass rounded-2xl overflow-hidden shrink-0 w-56 sm:w-72"
            style={{ aspectRatio: '4/5' }}
            aria-hidden={i >= images.length}
          >
            <img
              src={`${img.src}?auto=format&fit=crop&q=75&w=500`}
              alt={i < images.length ? img.alt : ''}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
