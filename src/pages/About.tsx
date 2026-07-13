import { ArrowRight, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TiltImage } from '@/components/ui/TiltImage';
import { Reveal } from '@/components/ui/Reveal';
import { AnimatedHeadline } from '@/components/ui/AnimatedHeadline';
import { SITE, DIFFERENTIATORS, BOOTH_COMPARISON, PORTFOLIO_ITEMS, RENTAL_CATEGORIES } from '@/data/content';

export function About() {
  const heroImage = PORTFOLIO_ITEMS[0];
  const differentImage = RENTAL_CATEGORIES.find((r) => r.id === 'flower-walls')!;
  const comparisonImage = PORTFOLIO_ITEMS.find((p) => p.id === 'p2')!;

  return (
    <>
      {/* Hero intro */}
      <section className="border-b border-ink-line overflow-hidden">
        <div className="container-magnum grid lg:grid-cols-2 gap-14 items-center py-20 sm:py-28">
          <div>
            <span className="eyebrow text-champagne">About Us</span>
            <AnimatedHeadline
              as="h1"
              className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-porcelain text-balance mt-4 mb-6"
              segments={[{ text: 'The story behind the' }, { text: 'booth.', italic: true }]}
            />
            <p className="text-lg text-mist max-w-lg leading-relaxed mb-8">
              A premium photo booth experience built from a real gap we saw — luxurious, professional,
              and genuinely unforgettable.
            </p>
            <Button as="link" to="/book-now" size="lg">
              Book Now
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </div>
          <Reveal variant="scale-blur" className="glass rounded-2xl overflow-hidden w-full">
            <TiltImage src={heroImage.image} alt={heroImage.imageAlt} aspect="5/4" width={900} />
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 sm:py-28 border-b border-ink-line overflow-hidden">
        <div className="container-magnum grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
          <Reveal className="glass rounded-2xl overflow-hidden w-full max-w-md">
            <TiltImage src={SITE.aboutImage} alt={SITE.aboutImageAlt} aspect="4/5" width={700} />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-5">
            <span className="eyebrow text-champagne">Our Story</span>
            <h2 className="font-display text-3xl sm:text-4xl text-porcelain text-balance">
              We Started Magnum Because We Knew Photo Booths Could Be Better
            </h2>
            <div className="flex flex-col gap-4 text-mist leading-relaxed">
              <p>
                We&rsquo;re {SITE.founders}, founders of {SITE.fullName}.
              </p>
              <p>
                After attending countless weddings, corporate events, and celebrations, we noticed
                the same pattern: blurry photos, outdated booth designs, and attendants who did
                little to elevate the guest experience. Photo booths often felt like an afterthought
                instead of a memorable part of the event.
              </p>
              <p>
                We believed there was a better way. So we created Magnum with one goal in mind—to
                deliver a premium photo booth experience that combines stunning DSLR-quality
                photography, elegant modern booth designs, and exceptional customer service. Every
                detail is thoughtfully curated to complement your event, engage your guests, and
                create keepsakes they&rsquo;ll cherish long after the celebration ends.
              </p>
              <p>
                At Magnum, we don&rsquo;t just provide a photo booth—we create an experience that
                feels as sophisticated, seamless, and unforgettable as your event itself.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 sm:py-28 border-b border-ink-line overflow-hidden">
        <div className="container-magnum grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
          <Reveal className="flex flex-col gap-8 order-2 lg:order-1">
            <div>
              <span className="eyebrow text-champagne">What Makes Us Different</span>
              <h2 className="font-display text-3xl sm:text-4xl text-porcelain text-balance mt-4">
                Every detail engineered for the moment.
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              {DIFFERENTIATORS.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06} variant="scale-blur" className="flex gap-4">
                  <div className="shrink-0 w-9 h-9 rounded-full glass-champagne flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-ink" strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-porcelain mb-1">{item.title}</h3>
                    <p className="text-sm text-mist leading-relaxed">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal
            variant="scale-blur"
            delay={0.1}
            className="glass rounded-2xl overflow-hidden w-full order-1 lg:order-2"
          >
            <TiltImage src={differentImage.image} alt={differentImage.imageAlt} aspect="4/5" width={700} />
          </Reveal>
        </div>
      </section>

      {/* The DSLR Difference */}
      <section className="py-20 sm:py-28 border-b border-ink-line overflow-hidden">
        <div className="container-magnum">
          <Reveal className="flex justify-center mb-14">
            <SectionHeading
              eyebrow="The DSLR Difference"
              title="Not all photo booths are built the same."
              align="center"
            />
          </Reveal>
          <div className="grid lg:grid-cols-[1fr_1fr_0.9fr] gap-6 items-stretch">
            <Reveal variant="scale-blur" className="glass-subtle rounded-2xl p-8 flex flex-col gap-5">
              <p className="eyebrow text-mist">{BOOTH_COMPARISON.basic.label}</p>
              <ul className="flex flex-col gap-4">
                {BOOTH_COMPARISON.basic.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-mist">
                    <X className="w-4 h-4 text-mist/70 shrink-0 mt-0.5" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="scale-blur" delay={0.1} className="glass-champagne rounded-2xl p-8 flex flex-col gap-5">
              <p className="eyebrow text-ink">{BOOTH_COMPARISON.magnum.label}</p>
              <ul className="flex flex-col gap-4">
                {BOOTH_COMPARISON.magnum.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-ink font-medium">
                    <Check className="w-4 h-4 text-ink shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              variant="scale-blur"
              delay={0.2}
              className="glass rounded-2xl overflow-hidden hidden lg:block"
            >
              <TiltImage src={comparisonImage.image} alt={comparisonImage.imageAlt} aspect="3/4" width={600} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 sm:py-32">
        <div className="container-magnum">
          <Reveal variant="scale-blur">
            <div className="glass rounded-[2.5rem] px-6 sm:px-16 py-16 sm:py-20 text-center flex flex-col items-center gap-6">
              <h2 className="font-display text-4xl sm:text-5xl text-porcelain text-balance max-w-2xl">
                Ready to bring Magnum to your event?
              </h2>
              <Button as="link" to="/book-now" size="lg">
                Book Now
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
