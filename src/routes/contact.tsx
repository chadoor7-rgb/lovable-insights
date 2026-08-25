import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone, Send } from "lucide-react";

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

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "تماس با چادردوزی جزیره | آمل",
      },
      {
        name: "description",
        content:
          "تماس با چادردوزی جزیره در آمل. شماره تماس، واتساپ، تلگرام، اینستاگرام و آدرس.",
      },
      {
        property: "og:title",
        content: "تماس با چادردوزی جزیره | آمل",
      },
      {
        property: "og:description",
        content:
          "تماس با چادردوزی جزیره در آمل. شماره تماس، واتساپ، تلگرام، اینستاگرام و آدرس.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
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

function ContactPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#fcfbf8] text-gray-900">
      <Header />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-black md:text-4xl">
          تماس با چادردوزی جزیره
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          برای سفارش، مشاوره و سوالات از طریق راه‌های زیر با ما در تماس
          باشید.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-bold">راه‌های ارتباطی</h2>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a
                  href={CONTACT.phoneHref}
                  className="font-bold hover:underline"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:underline"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{DEFAULT_BUSINESS.address}</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                {
                  href: CONTACT.whatsapp,
                  label: "واتساپ",
                  icon: <WhatsAppIcon className="h-5 w-5" />,
                },
                {
                  href: CONTACT.telegram,
                  label: "تلگرام",
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
                {
                  href: `mailto:${CONTACT.email}`,
                  label: "ایمیل",
                  icon: <Mail className="h-5 w-5" />,
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  title={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-bold transition hover:bg-black hover:text-white"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-bold">موقعیت روی نقشه</h2>
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                title="موقعیت چادردوزی جزیره"
                src="https://www.openstreetmap.org/export/embed.html?bbox=52.25%2C36.35%2C52.45%2C36.55&layer=mapnik&marker=36.45%2C52.35"
                className="h-full w-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-sm text-gray-600">
              {DEFAULT_BUSINESS.address}
            </p>
          </div>
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
