import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PhotoStrip } from '@/components/ui/PhotoStrip';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { PortfolioCarousel } from '@/components/ui/PortfolioCarousel';
import { Reveal } from '@/components/ui/Reveal';
import { BOOTH_FEATURES, PORTFOLIO_ITEMS, RENTAL_CATEGORIES, SITE } from '@/data/content';

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-line">
        <div className="container-magnum grid lg:grid-cols-2 gap-16 items-center py-20 sm:py-28">
          <div className="flex flex-col gap-6">
            <span className="eyebrow text-champagne flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              {SITE.city}&rsquo;s Premium Photo Booth Co.
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-porcelain text-balance">
              Bold, unforgettable moments &mdash; <span className="italic text-champagne">captured.</span>
            </h1>
            <p className="text-lg text-mist max-w-lg leading-relaxed">
              High-resolution DSLR imaging, modern premium booth designs, and dedicated on-site
              attendants. Sophistication and fun, captured at every event.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button as="link" to="/book-now" size="lg">
                Book Now
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button as="link" to="/selfie-booth" variant="outline" size="lg">
                See the booth
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PhotoStrip rotation={-3} />
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20 sm:py-28 border-b border-ink-line">
        <div className="container-magnum grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
          <div className="glass rounded-2xl overflow-hidden w-full max-w-md">
            <PlaceholderImage label="Theodora & Anthony, founders" aspect="4/5" />
          </div>
          <Reveal>
            <SectionHeading
              eyebrow="Who we are"
              title="Elevating the photo booth experience to a whole new level."
              description={`We're ${SITE.founders}, the founders of ${SITE.fullName}. After attending countless events with low-quality photo booths and outdated setups, we knew there had to be a better way — so we built one.`}
            />
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 text-champagne font-medium hover:gap-3 transition-all duration-200"
            >
              Read our story <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Booth features */}
      <section className="py-20 sm:py-28 border-b border-ink-line">
        <div className="container-magnum">
          <SectionHeading
            eyebrow="Our Selfie Booth"
            title="Everything you need for a seamless photo experience."
            align="center"
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOOTH_FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.05}>
                <div className="h-full p-6 rounded-2xl glass-subtle">
                  <h3 className="font-display text-xl text-porcelain mb-2">{feature.title}</h3>
                  <p className="text-sm text-mist leading-relaxed">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button as="link" to="/selfie-booth" variant="outline">
              Explore the full experience
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="py-20 sm:py-28 border-b border-ink-line overflow-hidden">
        <div className="container-magnum">
          <SectionHeading
            eyebrow="Portfolio"
            title="Moments from real Magnum events."
            align="center"
            className="mb-12"
          />
          <PortfolioCarousel items={PORTFOLIO_ITEMS} />
        </div>
      </section>

      {/* Rentals teaser */}
      <section className="py-20 sm:py-28 border-b border-ink-line">
        <div className="container-magnum">
          <SectionHeading
            eyebrow="Rentals"
            title="Backdrops, flower walls, chairs & tables."
            description="Elevate your event setup beyond the booth with our full rental collection."
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RENTAL_CATEGORIES.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 0.05}>
                <Link
                  to="/rentals"
                  className="group block h-full p-6 rounded-2xl glass-subtle glass-hover"
                >
                  <h3 className="font-display text-lg text-porcelain mb-2 group-hover:text-champagne transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-mist leading-relaxed">{cat.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="container-magnum">
          <div className="glass rounded-[2.5rem] px-6 sm:px-16 py-16 sm:py-20 text-center flex flex-col items-center gap-6">
            <h2 className="font-display text-4xl sm:text-5xl text-porcelain text-balance max-w-2xl">
              Let&rsquo;s make your event <span className="italic text-champagne">unforgettable.</span>
            </h2>
            <p className="text-mist max-w-lg">
              Weddings, corporate events, birthdays, and more — tell us about your event and we&rsquo;ll send
              you a custom quote.
            </p>
            <Button as="link" to="/book-now" size="lg">
              Get your quote
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
