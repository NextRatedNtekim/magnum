import { Button } from '@/components/ui/Button';

export function NotFound() {
  return (
    <section className="py-32 sm:py-40">
      <div className="container-magnum text-center flex flex-col items-center gap-6">
        <span className="eyebrow text-champagne">404</span>
        <h1 className="font-display text-4xl sm:text-5xl text-porcelain">This page didn&rsquo;t make the cut.</h1>
        <p className="text-mist max-w-md">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
        </p>
        <Button as="link" to="/" size="lg" className="mt-2">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
