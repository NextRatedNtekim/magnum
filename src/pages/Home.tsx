import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PhotoStrip } from '@/components/ui/PhotoStrip';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PortfolioCarousel } from '@/components/ui/PortfolioCarousel';
import { Reveal } from '@/components/ui/Reveal';
import { AnimatedHeadline } from '@/components/ui/AnimatedHeadline';
import { Parallax } from '@/components/ui/Parallax';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { TiltImage } from '@/components/ui/TiltImage';
import { PhotoMarquee } from '@/components/ui/PhotoMarquee';
import { BOOTH_FEATURES, PORTFOLIO_ITEMS, RENTAL_CATEGORIES, SITE } from '@/data/content';

export function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-line">
        <HeroBackground src={SITE.heroImage} alt={SITE.heroImageAlt} />
        <div className="relative container-magnum grid lg:grid-cols-2 gap-16 items-center py-20 sm:py-28">
          <div className="flex flex-col gap-6">
            <motion.span
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow text-champagne flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              {SITE.city}&rsquo;s Premium Photo Booth Co.
            </motion.span>

            <AnimatedHeadline
              as="h1"
              className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-porcelain text-balance"
              segments={[
                { text: 'Bold, unforgettable moments \u2014' },
                { text: 'captured.', italic: true },
              ]}
            />

            <motion.p
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-lg text-mist max-w-lg leading-relaxed"
            >
              High-resolution DSLR imaging, modern premium booth designs, and dedicated on-site
              attendants. Sophistication and fun, captured at every event.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.68 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button as="link" to="/book-now" size="lg">
                Book Now
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button as="link" to="/selfie-booth" variant="outline" size="lg">
                See the booth
              </Button>
            </motion.div>
          </div>

          <Parallax className="flex justify-center lg:justify-end" range={28}>
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.94 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <PhotoStrip
                rotation={-3}
                frames={PORTFOLIO_ITEMS.slice(0, 3).map((item) => ({ src: item.image, alt: item.imageAlt }))}
              />
            </motion.div>
          </Parallax>
        </div>
      </section>

      {/* See it in action — continuous horizontal photo marquee */}
      <section className="py-16 sm:py-20 border-b border-ink-line overflow-hidden">
        <Reveal className="container-magnum mb-10 text-center flex flex-col items-center">
          <span className="eyebrow text-champagne mb-3">See it in action</span>
          <h2 className="font-display text-3xl sm:text-4xl text-porcelain text-balance max-w-xl">
            A glimpse from real Magnum events.
          </h2>
        </Reveal>
        <Reveal variant="scale-blur">
          <PhotoMarquee
            images={[...PORTFOLIO_ITEMS, ...RENTAL_CATEGORIES].map((item) => ({
              src: item.image,
              alt: item.imageAlt,
            }))}
          />
        </Reveal>
      </section>

      {/* About teaser */}
      <section className="py-20 sm:py-28 border-b border-ink-line">
        <div className="container-magnum grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
          <Reveal variant="scale-blur" className="glass rounded-2xl overflow-hidden w-full max-w-md">
            <TiltImage src={SITE.aboutImage} alt={SITE.aboutImageAlt} aspect="4/5" width={700} />
          </Reveal>
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
          <Reveal className="flex justify-center">
            <SectionHeading
              eyebrow="Our Selfie Booth"
              title="Everything you need for a seamless photo experience."
              align="center"
              className="mb-14"
            />
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
          <Reveal className="flex justify-center">
            <SectionHeading
              eyebrow="Portfolio"
              title="Moments from real Magnum events."
              align="center"
              className="mb-12"
            />
          </Reveal>
          <Reveal variant="scale-blur">
            <PortfolioCarousel items={PORTFOLIO_ITEMS} />
          </Reveal>
        </div>
      </section>

      {/* Rentals teaser */}
      <section className="py-20 sm:py-28 border-b border-ink-line">
        <div className="container-magnum">
          <Reveal>
            <SectionHeading
              eyebrow="Rentals"
              title="Backdrops, flower walls, chairs & tables."
              description="Elevate your event setup beyond the booth with our full rental collection."
              className="mb-12"
            />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RENTAL_CATEGORIES.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 0.05} variant="scale-blur">
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
          <Reveal variant="scale-blur">
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
          </Reveal>
        </div>
      </section>
    </>
  );
}
