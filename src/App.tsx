import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';

// Home is eager-loaded (it's the most common landing page). Every other
// route is code-split so first paint only ships what's needed.
const About = lazy(() => import('@/pages/About').then((m) => ({ default: m.About })));
const BookNow = lazy(() => import('@/pages/BookNow').then((m) => ({ default: m.BookNow })));
const SelfieBooth = lazy(() => import('@/pages/SelfieBooth').then((m) => ({ default: m.SelfieBooth })));
const Rentals = lazy(() => import('@/pages/Rentals').then((m) => ({ default: m.Rentals })));
const FAQ = lazy(() => import('@/pages/FAQ').then((m) => ({ default: m.FAQ })));
const NotFound = lazy(() => import('@/pages/NotFound').then((m) => ({ default: m.NotFound })));

function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div
        className="w-8 h-8 border-2 border-champagne/30 border-t-champagne rounded-full animate-spin"
        role="status"
        aria-label="Loading page"
      />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<RouteFallback />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/book-now"
          element={
            <Suspense fallback={<RouteFallback />}>
              <BookNow />
            </Suspense>
          }
        />
        <Route
          path="/selfie-booth"
          element={
            <Suspense fallback={<RouteFallback />}>
              <SelfieBooth />
            </Suspense>
          }
        />
        <Route
          path="/rentals"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Rentals />
            </Suspense>
          }
        />
        <Route
          path="/faqs"
          element={
            <Suspense fallback={<RouteFallback />}>
              <FAQ />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<RouteFallback />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
