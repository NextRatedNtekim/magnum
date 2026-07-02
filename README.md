<<<<<<< HEAD
# Magnum Photobooth Events & Rentals

Production-ready marketing site for Magnum Photobooth Events & Rentals — Toronto's premium
DSLR photo booth and event rental company.

## Stack

- **Vite + React 19 + TypeScript** — SPA, no server required
- **React Router v7** — client-side routing across 6 pages
- **Tailwind CSS v4** — token-based design system (see `src/index.css`)
- **Framer Motion** — scroll reveals, respects `prefers-reduced-motion`
- **EmailJS** — client-side form delivery, no backend needed
- **Lucide React** — icon set

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your EmailJS keys
npm run dev
```

Open http://localhost:5173.

## Connecting the Book Now form to email

The form at `/book-now` uses [EmailJS](https://www.emailjs.com) so submissions land in your
inbox without a custom backend.

1. Create a free EmailJS account and an **Email Service** (Gmail works well) — copy the
   **Service ID**.
2. Create an **Email Template**. Use these variable names in the template body so they map
   to the form fields (see `src/lib/emailjs.ts` if you rename anything):
   `first_name`, `last_name`, `email`, `phone`, `event_date`, `event_time`, `event_type`,
   `event_location`, `hear_about_us`, `setup_time`, `start_time`, `end_time`, `max_budget`,
   `details`. Copy the **Template ID**.
3. Under **Account → General**, copy your **Public Key**.
4. Put all three into `.env.local`:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```
5. Restart the dev server. Until these are set, the form validates normally but shows a
   friendly error on submit instead of failing silently.

The form also has a hidden honeypot field (`companyWebsite`) for basic spam protection —
no CAPTCHA needed for this volume of traffic.

## Swapping in real photos

Every image in the site is a branded `PlaceholderImage` component
(`src/components/ui/PlaceholderImage.tsx`) so the layout looks intentional even before
real photography is uploaded. To swap one in:

```tsx
// before
<PlaceholderImage label="Wedding, Toronto" aspect="4/5" className="rounded-xl" />

// after
<img src="/images/wedding-toronto.jpg" alt="Bride and groom at a wedding reception photo booth" className="rounded-xl aspect-[4/5] object-cover" />
```

Keep the same `aspect` ratio as the placeholder to avoid layout shift. Portfolio and rental
copy lives in `src/data/content.ts` — update captions/categories there.

## Project structure

```
src/
  components/
    layout/     Header, Footer, Layout (route shell)
    ui/         Button, PhotoStrip (signature motif), Accordion, Reveal, etc.
    forms/      BookingForm + accessible Field wrapper
  pages/        One file per route
  data/         content.ts — all site copy, nav, FAQs, rentals, event types
  lib/          emailjs.ts (send logic), validation.ts (form rules)
  types/        Shared TypeScript types
```

Routes: `/`, `/about`, `/book-now`, `/selfie-booth`, `/rentals`, `/faqs`, plus a 404 catch-all.
All non-home routes are code-split with `React.lazy` for a lighter first load.

## FAQ content

The brief marked FAQ content as "to be provided." Starter placeholder Q&A (booking lead
time, service area, space requirements, deposits, print customization) live in
`src/data/content.ts` under `FAQ_ITEMS` — replace with the real answers before launch.

## Deployment

This is a static SPA — deploy the `dist/` folder anywhere (Netlify, Vercel, Cloudflare
Pages, S3 + CloudFront). Because routing happens client-side, the host needs a fallback
rule so refreshing `/rentals` doesn't 404:

- **Netlify**: `public/_redirects` is already included.
- **Vercel**: `vercel.json` is already included.
- **Other static hosts**: configure a catch-all rewrite to `/index.html`.

```bash
npm run build      # outputs to dist/
npm run preview    # sanity-check the production build locally
```

Before going live, update:
- `magnumeventrentals@gmail.com` references if the contact email changes
- Instagram handle/link in `src/components/layout/Footer.tsx`
- `og-image.jpg` referenced in `index.html` (add a real 1200×630 image to `public/`)
- Canonical/OG URLs in `index.html` if the domain differs from `magnumphotobooth.com`
=======
# magnum
>>>>>>> 49e13ba2983049e33383039aea60657f867bd9f4
