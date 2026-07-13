/**
 * Privacy Policy page for Magnum Photobooth Events & Rentals
 * Matches the site's dark (#050505) + gold accent visual identity.
 * Drop into your Next.js app as e.g. app/privacy-policy/page.tsx
 */

type Block =
  | { type: "p"; text: string }
  | { type: "p-strong-lead"; lead: string; text: string }
  | { type: "subhead"; text: string }
  | { type: "ul"; items: string[] };

type Section = {
  title: string;
  blocks: Block[];
};

const sections: Section[] = [
  {
    title: "Information We Collect",
    blocks: [
      {
        type: "p",
        text: "We may collect information you voluntarily provide, such as your name, email address, phone number, booking requests, or messages submitted through contact forms. We may also automatically collect technical information such as your IP address, browser type, device information, pages visited, and cookies.",
      },
      { type: "subhead", text: "Photos, Videos, and Images" },
      {
        type: "p",
        text: 'Because our services involve photobooth rentals and photography, we may also collect and process images, photos, videos, and GIFs ("Photo Content") captured at events using our photobooths. This may include:',
      },
      {
        type: "ul",
        items: [
          "Photos and videos of event guests captured through our photobooth equipment",
          "Digital copies retained on our systems, cloud storage, or booth hardware",
          "Content shared with the event host, client, or guests via text, email, gallery link, or social media sharing features",
        ],
      },
      {
        type: "p-strong-lead",
        lead: "How we use Photo Content:",
        text: "",
      },
      {
        type: "ul",
        items: [
          "To deliver prints, digital copies, or online galleries to the client and/or event guests, as agreed in the booking",
          "To operate booth features such as filters, overlays, or sharing tools",
        ],
      },
      {
        type: "p-strong-lead",
        lead: "We do not use guest images for promotional or marketing materials.",
        text: "Photo Content captured at your event is used solely to deliver your booking (e.g., prints, digital copies, and galleries) and is not used on our website, portfolio, social media, or any other promotional materials without separate, explicit consent from the individual(s) pictured.",
      },
      {
        type: "p-strong-lead",
        lead: "Your choices regarding Photo Content:",
        text: "",
      },
      {
        type: "ul",
        items: [
          "Guests may decline to use the photobooth at any time",
          "Event hosts/clients should inform their guests that a photobooth will be in use at the event",
        ],
      },
      {
        type: "p-strong-lead",
        lead: "Retention of Photo Content:",
        text: "Photo Content is retained for 60 days after the event, unless a longer period is needed to deliver galleries or as agreed with the client, after which it may be deleted from our active systems, except where retained for legal, marketing (with consent), or archival purposes as described above.",
      },
    ],
  },
  {
    title: "How We Use Information",
    blocks: [
      {
        type: "p",
        text: "We use collected information to respond to inquiries, process bookings or requests, deliver photobooth services and Photo Content, improve the website, maintain security, and comply with legal obligations.",
      },
    ],
  },
  {
    title: "Cookies",
    blocks: [
      {
        type: "p",
        text: "The website may use cookies and similar technologies to improve functionality and analyze website traffic. You can manage cookies through your browser settings.",
      },
    ],
  },
  {
    title: "Third-Party Services",
    blocks: [
      {
        type: "p",
        text: "The website may use third-party services such as hosting providers, analytics tools, maps, payment providers, and photo-sharing or cloud storage platforms. Those services have their own privacy policies.",
      },
    ],
  },
  {
    title: "Data Security",
    blocks: [
      {
        type: "p",
        text: "Reasonable technical and organizational measures are used to protect personal information and Photo Content. However, no online transmission or storage system can be guaranteed to be completely secure.",
      },
    ],
  },
  {
    title: "Data Retention",
    blocks: [
      {
        type: "p",
        text: "Personal information is retained only as long as necessary for the purposes described in this policy or as required by law. See the Photo Content section above for image-specific retention details.",
      },
    ],
  },
  {
    title: "Your Rights",
    blocks: [
      {
        type: "p",
        text: "Depending on applicable law, you may have the right to access, correct, update, or request deletion of your personal information, including Photo Content.",
      },
    ],
  },
  {
    title: "Children's Privacy",
    blocks: [
      {
        type: "p",
        text: "The website and our photobooth services are not intended for children under 13 to independently engage with (e.g., submitting forms or bookings), and we do not knowingly collect personal information directly from children in that manner. Photos of minors may be captured at events where a photobooth is present with parental/guardian awareness through the event host. As noted above, we do not use guest images for promotional or marketing materials; parents or guardians may contact us with any questions or requests regarding a minor's image.",
      },
    ],
  },
  {
    title: "Changes",
    blocks: [
      {
        type: "p",
        text: "This Privacy Policy may be updated from time to time. Continued use of the website or our services after updates constitutes acceptance of the revised policy.",
      },
    ],
  },
  {
    title: "Contact",
    blocks: [
      {
        type: "p",
        text: "For questions regarding this Privacy Policy, including requests to access, correct, or delete your information or Photo Content, please contact us at:",
      },
      {
        type: "p",
        text: "Magnum Photobooth Events & Rentals \u2014 magnumeventrentals@gmail.com",
      },
    ],
  },
];

function SectionBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "subhead":
      return (
        <h3 className="text-sm font-semibold text-white/90 mt-2">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="flex flex-col gap-2 pl-1">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span
                aria-hidden
                className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#c9a227]/70"
              />
              <span className="text-[15px] leading-relaxed text-neutral-400">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );
    case "p-strong-lead":
      return (
        <p className="text-[15px] leading-relaxed text-neutral-400">
          <span className="font-medium text-neutral-200">{block.lead}</span>
          {block.text ? " " + block.text : null}
        </p>
      );
    case "p":
    default:
      return (
        <p className="text-[15px] leading-relaxed text-neutral-400">
          {block.text}
        </p>
      );
  }
}

export function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#050505] text-neutral-300 selection:bg-[#c9a227] selection:text-black">
      {/* Ambient top glow, echoes the flash of a camera */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 h-[420px] opacity-[0.10]"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, #c9a227 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 py-20 sm:py-28">
        {/* Back link */}
        <a
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-[#c9a227] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] rounded-sm"
        >
          <span
            aria-hidden
            className="transition-transform group-hover:-translate-x-0.5"
          >
            &larr;
          </span>
          Back to Magnum Photobooth
        </a>

        {/* Header */}
        <header className="mt-10 border-b border-white/10 pb-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#c9a227]">
            Magnum Photobooth Events &amp; Rentals
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-neutral-500">
            Effective Date: July 10, 2026
          </p>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-neutral-400">
            This Privacy Policy explains how Magnum Photobooth (&ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and protects
            information when you use our website and photobooth services.
          </p>
        </header>

        {/* Sections */}
        <div className="mt-12 divide-y divide-white/5">
          {sections.map((section, i) => (
            <section
              key={section.title}
              className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-[140px_1fr] sm:gap-8"
            >
              <div className="flex items-start gap-3 sm:block">
                <span className="font-serif text-sm text-[#c9a227]/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-base font-medium text-white sm:mt-2">
                  {section.title}
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                {section.blocks.map((block, bi) => (
                  <SectionBlock key={bi} block={block} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-8 text-xs text-neutral-600">
          <p>
            &copy; {new Date().getFullYear()} Magnum Photobooth Events &amp;
            Rentals. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
