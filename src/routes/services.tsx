import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, Send } from "lucide-react";

import { DEFAULT_BUSINESS, phoneHref } from "@/lib/business-settings";

const CONTACT = {
  phone: DEFAULT_BUSINESS.phone,
  phoneHref: phoneHref(DEFAULT_BUSINESS.phone),
  email: DEFAULT_BUSINESS.email,
  whatsapp: DEFAULT_BUSINESS.whatsapp,
  telegram: DEFAULT_BUSINESS.telegram,
  instagram1: DEFAULT_BUSINESS.instagram1,
  instagram2: DEFAULT_BUSINESS.instagram2,
};

const SERVICES = [
  {
    slug: "tent-repair",
    title: "تعمیر چادر مسافرتی",
    description: "ترمیم پارگی، دوخت و رفع آسیب‌های انواع چادر مسافرتی.",
  },
  {
    slug: "spring-repair",
    title: "تعمیر فنر چادر",
    description: "تعمیر و تعویض فنر چادرهای مسافرتی و رفع مشکل جمع نشدن چادر.",
  },
  {
    slug: "tent-production",
    title: "تولید چادر مسافرتی",
    description: "طراحی و تولید انواع چادر مسافرتی متناسب با نیاز شما.",
  },
  {
    slug: "canvas-production",
    title: "تولید چادر برزنتی",
    description: "دوخت و تولید چادرهای برزنتی با استفاده از پارچه مناسب.",
  },
  {
    slug: "tear-repair",
    title: "ترمیم پارگی چادر",
    description: "ترمیم پارگی و آسیب‌های پارچه چادر با دوخت تخصصی.",
  },
  {
    slug: "amol",
    title: "چادردوزی در آمل",
    description: "ارائه خدمات تخصصی چادر و برزنت در آمل.",
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "خدمات چادردوزی جزیره | تولید و تعمیر چادر در آمل",
      },
      {
        name: "description",
        content:
          "خدمات چادردوزی جزیره در آمل: تعمیر چادر مسافرتی، تعمیر فنر چادر، تولید چادر مسافرتی و برزنتی، ترمیم پارگی.",
      },
      {
        property: "og:title",
        content: "خدمات چادردوزی جزیره | تولید و تعمیر چادر در آمل",
      },
      {
        property: "og:description",
        content:
          "خدمات چادردوزی جزیره در آمل: تعمیر چادر مسافرتی، تعمیر فنر چادر، تولید چادر مسافرتی و برزنتی.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.86 1.22 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.02h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.19 8.19 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23z" />
    </svg>
  );
}

function ServicesPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#fcfbf8] text-gray-900">
      <Header />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-black md:text-4xl">
          خدمات چادردوزی جزیره
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          تولید، تعمیر و ترمیم انواع چادر مسافرتی و برزنتی در آمل.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.slug}
              className="rounded-2xl border bg-white p-6"
            >
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="mt-3 leading-7 text-gray-600">
                {service.description}
              </p>
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="mt-4 inline-block rounded-xl bg-black px-5 py-2 text-sm font-bold text-white"
              >
                جزئیات خدمت
              </Link>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="block">
          <h1 className="text-2xl font-bold">چادردوزی جزیره</h1>
          <p className="mt-1 text-sm text-gray-600">
            تولید و تعمیر چادر مسافرتی و برزنتی در آمل
          </p>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/settings"
            className="rounded-xl border px-4 py-3 text-sm font-bold text-gray-700"
          >
            تنظیمات کسب‌وکار
          </Link>
          <a
            href={CONTACT.phoneHref}
            className="rounded-xl bg-black px-5 py-3 text-sm font-bold text-white"
          >
            تماس با ما
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center text-sm text-gray-500">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 font-bold text-gray-900"
          >
            <Phone className="h-4 w-4" />
            {CONTACT.phone}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 text-gray-700"
          >
            <Mail className="h-4 w-4" />
            {CONTACT.email}
          </a>
        </div>

        <div className="flex items-center justify-center gap-2">
          {[
            {
              href: CONTACT.whatsapp,
              label: "واتساپ چادردوزی جزیره",
              icon: <WhatsAppIcon className="h-5 w-5" />,
            },
            {
              href: CONTACT.telegram,
              label: "تلگرام چادردوزی جزیره",
              icon: <Send className="h-5 w-5" />,
            },
            {
              href: CONTACT.instagram1,
              label: "اینستاگرام chadoor_",
              icon: <Instagram className="h-5 w-5" />,
            },
            {
              href: CONTACT.instagram2,
              label: "اینستاگرام chadortent.ir",
              icon: <Instagram className="h-5 w-5" />,
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-200 p-2 text-gray-700 transition hover:bg-black hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p>
          © {new Date().getFullYear()} چادردوزی جزیره — تولید و تعمیر چادر
          مسافرتی
        </p>
      </div>
    </footer>
  );
}
