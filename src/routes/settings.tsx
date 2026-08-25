import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  DEFAULT_BUSINESS,
  loadBusinessSettings,
  resetBusinessSettings,
  saveBusinessSettings,
  type BusinessSettings,
} from "@/lib/business-settings";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "تنظیمات کسب‌وکار | چادردوزی جزیره" },
      {
        name: "description",
        content:
          "ویرایش اطلاعات کسب‌وکار چادردوزی جزیره: نام، شماره تماس، ایمیل، آدرس، ساعت کاری و شبکه‌های اجتماعی.",
      },
      { property: "og:title", content: "تنظیمات کسب‌وکار | چادردوزی جزیره" },
      {
        property: "og:description",
        content: "پنل ویرایش اطلاعات تماس و شبکه‌های اجتماعی چادردوزی جزیره.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SettingsPage,
});

const FIELDS: { key: keyof BusinessSettings; label: string; type?: string; multiline?: boolean }[] = [
  { key: "name", label: "نام کسب‌وکار" },
  { key: "tagline", label: "شعار / توضیح کوتاه", multiline: true },
  { key: "phone", label: "شماره تماس", type: "tel" },
  { key: "email", label: "ایمیل", type: "email" },
  { key: "address", label: "آدرس", multiline: true },
  { key: "hours", label: "ساعت کاری" },
  { key: "whatsapp", label: "لینک واتساپ", type: "url" },
  { key: "telegram", label: "لینک تلگرام", type: "url" },
  { key: "instagram1", label: "اینستاگرام (۱)", type: "url" },
  { key: "instagram2", label: "اینستاگرام (۲)", type: "url" },
];

function SettingsPage() {
  const [form, setForm] = useState<BusinessSettings>(DEFAULT_BUSINESS);

  useEffect(() => {
    setForm(loadBusinessSettings());
  }, []);

  const update = (key: keyof BusinessSettings, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <main dir="rtl" className="min-h-screen bg-[#fcfbf8] text-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link to="/" className="text-sm text-gray-600 hover:underline">
          ← بازگشت به صفحه اصلی
        </Link>

        <h1 className="mt-4 text-2xl font-bold">تنظیمات کسب‌وکار</h1>
        <p className="mt-2 text-sm text-gray-600">
          اطلاعات تماس و شبکه‌های اجتماعی را اینجا ویرایش کنید. تغییرات روی این
          مرورگر ذخیره می‌شود.
        </p>

        <form
          className="mt-8 space-y-5 rounded-2xl border bg-white p-6"
          onSubmit={(e) => {
            e.preventDefault();
            saveBusinessSettings(form);
            toast.success("تنظیمات ذخیره شد");
          }}
        >
          {FIELDS.map((field) => (
            <div key={field.key} className="space-y-2">
              <Label htmlFor={field.key}>{field.label}</Label>
              {field.multiline ? (
                <Textarea
                  id={field.key}
                  dir="auto"
                  rows={2}
                  value={form[field.key]}
                  onChange={(e) => update(field.key, e.target.value)}
                />
              ) : (
                <Input
                  id={field.key}
                  dir="auto"
                  type={field.type ?? "text"}
                  value={form[field.key]}
                  onChange={(e) => update(field.key, e.target.value)}
                />
              )}
            </div>
          ))}

          <div className="flex flex-wrap gap-3 pt-2">
            <Button type="submit">ذخیره تنظیمات</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                resetBusinessSettings();
                setForm(DEFAULT_BUSINESS);
                toast.success("تنظیمات به حالت پیش‌فرض برگشت");
              }}
            >
              بازگردانی پیش‌فرض
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
