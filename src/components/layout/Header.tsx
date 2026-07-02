import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, BOOK_NOW_ITEM, SITE } from '@/data/content';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  // Close the mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium tracking-wide transition-colors duration-200 ${
      isActive ? 'text-champagne' : 'text-porcelain/85 hover:text-champagne'
    }`;

  return (
    <header className="sticky top-0 z-50 pt-3 sm:pt-4 pb-2">
      <div className="container-magnum">
        {/* Floating Liquid Glass navbar pill */}
        <div className="glass-nav rounded-full px-4 sm:px-6 h-16 flex items-center justify-between">
          <NavLink to="/" className="font-display text-lg sm:text-xl text-porcelain tracking-tight pl-1">
            Magnum <span className="text-champagne italic">Photobooth</span>
          </NavLink>

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClasses}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button as="link" to={BOOK_NOW_ITEM.path} size="md">
              Book Now
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-porcelain rounded-full hover:bg-white/5 transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Floating Liquid Glass dropdown panel */}
        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden glass-nav rounded-3xl mt-2 px-5 py-6 flex flex-col gap-1 origin-top"
            >
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `py-3 text-base font-medium border-b border-white/8 ${
                      isActive ? 'text-champagne' : 'text-porcelain/90'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button as="link" to={BOOK_NOW_ITEM.path} className="mt-5 w-full">
                Book Now
              </Button>
              <a href={`mailto:${SITE.email}`} className="mt-4 text-sm text-mist text-center">
                {SITE.email}
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
