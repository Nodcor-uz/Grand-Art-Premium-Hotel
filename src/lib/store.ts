import { create } from "zustand";
import type { Lang } from "./i18n";
import { setSoundEnabled } from "./audio";

export type Intent = "stay" | "event" | "transfer" | "callback";

type HotelState = {
  lang: Lang;
  sound: boolean;
  intent: Intent;
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  name: string;
  phone: string;
  email: string;
  notes: string;
  transfer: boolean;
  success: boolean;
  lightbox: number | null;
  menuOpen: boolean;
  setLang: (lang: Lang) => void;
  setSound: (on: boolean) => void;
  setIntent: (intent: Intent) => void;
  setRoomId: (id: string) => void;
  setField: (key: keyof HotelState, value: string | number | boolean) => void;
  setSuccess: (v: boolean) => void;
  setLightbox: (i: number | null) => void;
  setMenuOpen: (v: boolean) => void;
  hydrate: () => void;
};

function detectLang(): Lang {
  if (typeof navigator === "undefined") return "uz";
  const n = navigator.language.toLowerCase();
  if (n.startsWith("ru")) return "ru";
  if (n.startsWith("uz")) return "uz";
  if (n.startsWith("en")) return "en";
  return "uz";
}

export const useHotel = create<HotelState>((set, get) => ({
  lang: "uz",
  sound: false,
  intent: "stay",
  roomId: "twin",
  checkIn: "",
  checkOut: "",
  guests: 2,
  name: "",
  phone: "",
  email: "",
  notes: "",
  transfer: false,
  success: false,
  lightbox: null,
  menuOpen: false,
  setLang: (lang) => {
    try {
      localStorage.setItem("ga-lang", lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang;
    set({ lang });
  },
  setSound: (on) => {
    setSoundEnabled(on);
    set({ sound: on });
  },
  setIntent: (intent) => set({ intent }),
  setRoomId: (roomId) => set({ roomId }),
  setField: (key, value) => set({ [key]: value } as Partial<HotelState>),
  setSuccess: (success) => set({ success }),
  setLightbox: (lightbox) => set({ lightbox }),
  setMenuOpen: (menuOpen) => set({ menuOpen }),
  hydrate: () => {
    let lang = detectLang();
    try {
      const stored = localStorage.getItem("ga-lang") as Lang | null;
      if (stored === "uz" || stored === "ru" || stored === "en") lang = stored;
    } catch {
      /* ignore */
    }
    if (get().lang !== lang) {
      document.documentElement.lang = lang;
      set({ lang });
    }
  },
}));
