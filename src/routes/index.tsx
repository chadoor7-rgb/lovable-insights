import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, Phone, Send } from "lucide-react";

const CONTACT = {
  phone: "09118031241",
  phoneHref: "tel:+989118031241",
  email: "chadoor7@gmail.com",
  whatsapp: "https://wa.me/989118031241",
  telegram: "https://t.me/gattent",
  instagram1: "https://instagram.com/chadoor_",
  instagram2: "https://instagram.com/chadortent.ir",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "چادردوزی جزیره",
  description:
    "تولید، تعمیر و دوخت انواع چادر مسافرتی و برزنتی در آمل",
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "آمل",
    addressCountry: "IR",
  },
  sameAs: [
    CONTACT.instagram1,
    CONTACT.instagram2,
    CONTACT.telegram,
    CONTACT.whatsapp,
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "چادردوزی جزیره آمل | تولید و تعمیر چادر مسافرتی و برزنتی",
      },
      {
        name: "description",
        content:
          "چادردوزی جزیره در آمل: تولید چادر مسافرتی و برزنتی، تعمیر فنر چادر و ترمیم پارگی. تماس: 09118031241",
      },
      {
        property: "og:title",
        content: "چادردوزی جزیره آمل | تولید و تعمیر چادر مسافرتی",
      },
      {
        property: "og:description",
        content:
          "تولید، تعمیر و دوخت انواع چادر مسافرتی و برزنتی در آمل. تماس، واتساپ و تلگرام.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
  component: HomePage,
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

type SocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

function socialLinks(size: string): SocialLink[] {
  return [
    {
      href: CONTACT.whatsapp,
      label: "واتساپ چادردوزی جزیره",
      icon: <WhatsAppIcon className={size} />,
    },
    {
      href: CONTACT.telegram,
      label: "تلگرام چادردوزی جزیره",
      icon: <Send className={size} />,
    },
    {
      href: CONTACT.instagram1,
      label: "اینستاگرام chadoor_",
      icon: <Instagram className={size} />,
    },
    {
      href: CONTACT.instagram2,
      label: "اینستاگرام chadortent.ir",
      icon: <Instagram className={size} />,
    },
    {
      href: `mailto:${CONTACT.email}`,
      label: "ارسال ایمیل به چادردوزی جزیره",
      icon: <Mail className={size} />,
    },
  ];
}

function HomePage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#fcfbf8] text-gray-900"
    >
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold">
              چادردوزی جزیره
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              تولید و تعمیر چادر مسافرتی و برزنتی در آمل
            </p>
          </div>

          <a
            href={CONTACT.phoneHref}
            className="rounded-xl bg-black px-5 py-3 text-sm font-bold text-white"
          >
            تماس با ما
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold text-gray-600">
            چادردوزی جزیره | آمل
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            تولید، تعمیر و دوخت انواع چادر مسافرتی
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            تولید و تعمیر چادر مسافرتی، چادر برزنتی، ترمیم پارگی،
            تعمیر فنر چادر و خدمات تخصصی چادردوزی در آمل.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={CONTACT.phoneHref}
              className="rounded-xl bg-black px-6 py-3 font-bold text-white"
            >
              تماس برای سفارش
            </a>

            <a
              href="#services"
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-bold"
            >
              مشاهده خدمات
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="border-y bg-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-black">
            خدمات چادردوزی جزیره
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <ServiceCard
              title="تعمیر چادر مسافرتی"
              text="ترمیم پارگی، دوخت و رفع آسیب‌های انواع چادر مسافرتی."
            />

            <ServiceCard
              title="تعمیر فنر چادر"
              text="تعمیر و تعویض فنر چادرهای مسافرتی و رفع مشکل جمع نشدن چادر."
            />

            <ServiceCard
              title="تولید چادر مسافرتی"
              text="طراحی و تولید انواع چادر مسافرتی متناسب با نیاز شما."
            />

            <ServiceCard
              title="تولید چادر برزنتی"
              text="دوخت و تولید چادرهای برزنتی با استفاده از پارچه مناسب."
            />

            <ServiceCard
              title="ترمیم پارگی چادر"
              text="ترمیم پارگی و آسیب‌های پارچه چادر با دوخت تخصصی."
            />

            <ServiceCard
              title="چادردوزی در آمل"
              text="ارائه خدمات تخصصی چادر و برزنت در آمل."
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-gray-100 p-8 md:p-12">
          <h2 className="text-3xl font-black">
            چرا چادردوزی جزیره؟
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            چادردوزی جزیره در آمل با تمرکز بر تولید، تعمیر و
            ترمیم انواع چادر مسافرتی و برزنتی فعالیت می‌کند.
            هدف ما ارائه خدمات با کیفیت و تعمیر اصولی چادر شماست.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl font-black">
            برای تعمیر یا سفارش چادر با ما تماس بگیرید
          </h2>

          <p className="mt-4 text-gray-300">
            چادردوزی جزیره — آمل
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-bold text-black"
            >
              <Phone className="h-5 w-5" />
              {CONTACT.phone}
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3 font-bold text-white"
            >
              <Mail className="h-5 w-5" />
              {CONTACT.email}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {socialLinks("h-6 w-6").map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/25 p-3 text-white transition hover:bg-white hover:text-black"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              واتساپ
            </a>
            <a
              href={CONTACT.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              تلگرام
            </a>
            <a
              href={CONTACT.instagram1}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              اینستاگرام chadoor_
            </a>
            <a
              href={CONTACT.instagram2}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              اینستاگرام chadortent.ir
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
            {socialLinks("h-5 w-5").map((link) => (
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
            © {new Date().getFullYear()} چادردوزی جزیره — تولید و تعمیر چادر مسافرتی
          </p>
        </div>
      </footer>
    </main>
  );
}

function ServiceCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-2xl border bg-[#fcfbf8] p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 leading-7 text-gray-600">{text}</p>
    </article>
  );
}
