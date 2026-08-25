import { useEffect, useState } from "react";

export type BusinessSettings = {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  whatsapp: string;
  telegram: string;
  instagram1: string;
  instagram2: string;
};

export const DEFAULT_BUSINESS: BusinessSettings = {
  name: "چادردوزی جزیره",
  tagline: "تولید و تعمیر چادر مسافرتی و برزنتی در آمل",
  phone: "09118031241",
  email: "chadoor7@gmail.com",
  address: "آمل، مازندران",
  hours: "شنبه تا پنجشنبه، ۹ تا ۲۰",
  whatsapp: "https://wa.me/989118031241",
  telegram: "https://t.me/gattent",
  instagram1: "https://instagram.com/chadoor_",
  instagram2: "https://instagram.com/chadortent.ir",
};

const STORAGE_KEY = "business-settings";

export function phoneHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const intl = digits.startsWith("0") ? `+98${digits.slice(1)}` : digits;
  return `tel:${intl}`;
}

export function loadBusinessSettings(): BusinessSettings {
  if (typeof window === "undefined") return DEFAULT_BUSINESS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_BUSINESS;
    return { ...DEFAULT_BUSINESS, ...(JSON.parse(raw) as Partial<BusinessSettings>) };
  } catch {
    return DEFAULT_BUSINESS;
  }
}

export function saveBusinessSettings(value: BusinessSettings) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  window.dispatchEvent(new Event("business-settings-changed"));
}

export function resetBusinessSettings() {
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event("business-settings-changed"));
}

/** Client-side settings; returns defaults during SSR to avoid hydration mismatch. */
export function useBusinessSettings(): BusinessSettings {
  const [settings, setSettings] = useState<BusinessSettings>(DEFAULT_BUSINESS);

  useEffect(() => {
    const sync = () => setSettings(loadBusinessSettings());
    sync();
    window.addEventListener("business-settings-changed", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("business-settings-changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return settings;
}
