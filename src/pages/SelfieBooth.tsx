import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PortfolioCarousel } from '@/components/ui/PortfolioCarousel';
import { PhotoStrip } from '@/components/ui/PhotoStrip';
import { Reveal } from '@/components/ui/Reveal';
import { BOOTH_FEATURES, PORTFOLIO_ITEMS } from '@/data/content';

export function SelfieBooth() {
  return (
    <>
      <section className="border-b border-ink-line">
        <div className="container-magnum grid lg:grid-cols-2 gap-16 items-center py-20 sm:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Our Selfie Booth"
              title="Reserve our photo booth for any event."
              description="Whether it's a wedding, birthday, corporate party, and more — we've got you covered with unlimited, DSLR-quality sessions from setup to send-off."
            />
            <Button as="link" to="/book-now" size="lg" className="mt-8">
              Book Now
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </Reveal>
          <Reveal delay={0.1} variant="scale-blur" className="flex justify-center lg:justify-end">
            <PhotoStrip
              rotation={3}
              frames={PORTFOLIO_ITEMS.slice(0, 4).map((item) => ({ src: item.image, alt: item.imageAlt }))}
            />
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28 border-b border-ink-line">
        <div className="container-magnum">
          <Reveal className="flex justify-center">
            <SectionHeading eyebrow="What's included" title="Every booking includes" align="center" className="mb-14" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOOTH_FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.05} variant="scale-blur">
                <div className="h-full p-6 rounded-2xl glass-subtle">
                  <h3 className="font-display text-xl text-porcelain mb-2">{feature.title}</h3>
                  <p className="text-sm text-mist leading-relaxed">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 overflow-hidden">
        <div className="container-magnum">
          <Reveal className="flex justify-center">
            <SectionHeading eyebrow="Portfolio" title="A look at our recent events." align="center" className="mb-12" />
          </Reveal>
          <Reveal variant="scale-blur">
            <PortfolioCarousel items={PORTFOLIO_ITEMS} />
          </Reveal>
        </div>
      </section>
    </>
  );
}

