import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

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
            href="tel:01391001119"
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
              href="tel:01391001119"
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
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl font-black">
            برای تعمیر یا سفارش چادر با ما تماس بگیرید
          </h2>

          <p className="mt-4 text-gray-300">
            چادردوزی جزیره — آمل
          </p>

          <a
            href="tel:01391001119"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3 font-bold text-black"
          >
            01391001119
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} چادردوزی جزیره — تولید و تعمیر چادر مسافرتی
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
