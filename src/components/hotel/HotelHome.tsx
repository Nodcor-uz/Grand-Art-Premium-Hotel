import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Menu,
  Phone,
  Volume2,
  VolumeX,
  X,
  MapPin,
  Clock3,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import { AMENITY_KEYS, GALLERY, HOTEL, ROOMS, TRANSFERS } from "@/lib/hotel";
import { copy as i18n, LANGS as langs } from "@/lib/i18n";
import { useHotel } from "@/lib/store";
import { cn, formatUzs, nightsBetween, todayISO, waLink } from "@/lib/utils";
import { playClick, playHover, playSuccess } from "@/lib/audio";
import { amenityIcons } from "@/components/hotel/icons";

function useCopy() {
  const lang = useHotel((s) => s.lang);
  return i18n[lang];
}

function CourtyardMount() {
  const [Scene, setScene] = useState<null | React.ComponentType>(null);
  useEffect(() => {
    let live = true;
    import("@/components/hotel/Scene3D")
      .then((m) => {
        if (live) setScene(() => m.default);
      })
      .catch(() => {
        /* keep photo fallback */
      });
    return () => {
      live = false;
    };
  }, []);
  if (!Scene) {
    return (
      <img
        src="/hotel/courtyard.jpg"
        alt=""
        className="h-full w-full object-cover"
      />
    );
  }
  return <Scene />;
}

function Header() {
  const t = useCopy();
  const lang = useHotel((s) => s.lang);
  const setLang = useHotel((s) => s.setLang);
  const sound = useHotel((s) => s.sound);
  const setSound = useHotel((s) => s.setSound);
  const menuOpen = useHotel((s) => s.menuOpen);
  const setMenuOpen = useHotel((s) => s.setMenuOpen);

  const links = [
    ["#rooms", t.nav.rooms],
    ["#gallery", t.nav.gallery],
    ["#tour", t.nav.tour],
    ["#location", t.nav.location],
  ] as const;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6">
        <a href="#top" className="flex items-baseline gap-2" onMouseEnter={playHover} onClick={playClick}>
          <span className="font-display text-xl tracking-tight text-cream sm:text-2xl">Grand</span>
          <span className="font-display text-xl italic text-burgundy sm:text-2xl">Art</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-stone md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="transition-colors duration-150 hover:text-cream" onMouseEnter={playHover}>
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex rounded-full border border-line p-0.5">
            {langs.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => {
                  playClick();
                  setLang(l.id);
                }}
                className={cn(
                  "min-h-9 rounded-full px-2.5 text-xs tracking-wide transition-colors duration-150",
                  lang === l.id ? "bg-cream text-ink" : "text-stone hover:text-cream",
                )}
                aria-pressed={lang === l.id}
              >
                {l.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label={sound ? t.sound.on : t.sound.off}
            onClick={() => {
              setSound(!sound);
              if (!sound) playClick();
            }}
            className="grid size-10 place-items-center rounded-full border border-line text-cream transition-transform duration-150 active:scale-[0.96]"
          >
            {sound ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
          </button>
          <a
            href="#book"
            onClick={playClick}
            className="hidden min-h-10 items-center rounded-full bg-burgundy px-4 text-sm font-medium text-cream transition-colors duration-150 hover:bg-burgundy-2 sm:inline-flex"
          >
            {t.nav.book}
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-line md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {menuOpen ? (
        <div className="border-t border-line bg-ink px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="min-h-11 rounded-md px-2 py-2 text-cream"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a href="#book" className="min-h-11 rounded-md bg-burgundy px-3 py-2 text-center text-cream" onClick={() => setMenuOpen(false)}>
              {t.nav.book}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function BookingForm() {
  const t = useCopy();
  const lang = useHotel((s) => s.lang);
  const s = useHotel();
  const room = ROOMS.find((r) => r.id === s.roomId) ?? ROOMS[0];
  const nights = nightsBetween(s.checkIn, s.checkOut);
  const total = nights * room.price + (s.transfer ? 320_000 : 0);
  const roomName = t.rooms[room.id as "twin" | "deluxe" | "triple" | "luxe"].name;

  const [error, setError] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!s.name.trim() || !s.phone.trim() || !s.checkIn || !s.checkOut) {
      playClick();
      setError(t.booking.error);
      return;
    }
    setError("");
    const text = i18n[lang].waStay({
      name: s.name,
      room: roomName,
      checkIn: s.checkIn,
      checkOut: s.checkOut,
      guests: String(s.guests),
      total: formatUzs(total || room.price, lang),
      notes: [s.notes, s.transfer ? "Transfer: yes" : "", s.intent !== "stay" ? `Intent: ${s.intent}` : ""]
        .filter(Boolean)
        .join(" · "),
    });
    try {
      const payload = {
        at: new Date().toISOString(),
        ...{
          name: s.name,
          phone: s.phone,
          email: s.email,
          room: s.roomId,
          checkIn: s.checkIn,
          checkOut: s.checkOut,
          guests: s.guests,
          transfer: s.transfer,
          intent: s.intent,
        },
      };
      const prev = JSON.parse(localStorage.getItem("ga-requests") || "[]") as unknown[];
      localStorage.setItem("ga-requests", JSON.stringify([payload, ...prev].slice(0, 20)));
    } catch {
      /* ignore */
    }
    playSuccess();
    s.setSuccess(true);
    window.open(waLink(HOTEL.whatsapp, text), "_blank", "noopener,noreferrer");
  }

  const field =
    "min-h-11 w-full rounded-md border border-line bg-ink-2 px-3 text-sm text-cream outline-none transition-[box-shadow] duration-150 placeholder:text-muted focus:shadow-[0_0_0_1px_#c4b5a0]";

  return (
    <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2">
      <label className="grid gap-1 text-xs text-muted">
        {t.booking.checkIn}
        <input
          type="date"
          required
          min={todayISO()}
          value={s.checkIn}
          onChange={(e) => s.setField("checkIn", e.target.value)}
          className={field}
        />
      </label>
      <label className="grid gap-1 text-xs text-muted">
        {t.booking.checkOut}
        <input
          type="date"
          required
          min={s.checkIn || todayISO(1)}
          value={s.checkOut}
          onChange={(e) => s.setField("checkOut", e.target.value)}
          className={field}
        />
      </label>
      <label className="grid gap-1 text-xs text-muted">
        {t.booking.room}
        <select
          value={s.roomId}
          onChange={(e) => s.setRoomId(e.target.value)}
          className={field}
        >
          {ROOMS.map((r) => (
            <option key={r.id} value={r.id}>
              {t.rooms[r.id as "twin" | "deluxe" | "triple" | "luxe"].name} · {formatUzs(r.price, lang)}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-xs text-muted">
        {t.booking.guests}
        <select
          value={s.guests}
          onChange={(e) => s.setField("guests", Number(e.target.value))}
          className={field}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {t.booking.guestsN(n)}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-xs text-muted sm:col-span-2">
        {t.booking.name}
        <input
          required
          value={s.name}
          onChange={(e) => s.setField("name", e.target.value)}
          className={field}
          autoComplete="name"
        />
      </label>
      <label className="grid gap-1 text-xs text-muted">
        {t.booking.phone}
        <input
          required
          value={s.phone}
          onChange={(e) => s.setField("phone", e.target.value)}
          className={field}
          inputMode="tel"
          autoComplete="tel"
          placeholder="+998"
        />
      </label>
      <label className="grid gap-1 text-xs text-muted">
        {t.booking.email}
        <input
          type="email"
          value={s.email}
          onChange={(e) => s.setField("email", e.target.value)}
          className={field}
          autoComplete="email"
        />
      </label>
      <label className="grid gap-1 text-xs text-muted sm:col-span-2">
        {t.booking.notes}
        <textarea
          value={s.notes}
          onChange={(e) => s.setField("notes", e.target.value)}
          rows={3}
          className={cn(field, "min-h-20 py-2")}
        />
      </label>
      <label className="flex min-h-11 items-center gap-3 text-sm text-cream sm:col-span-2">
        <input
          type="checkbox"
          checked={s.transfer}
          onChange={(e) => s.setField("transfer", e.target.checked)}
          className="size-4 accent-burgundy"
        />
        {t.booking.transfer}
      </label>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <div className="flex items-end justify-between text-sm">
          <span className="text-muted">{t.booking.total}</span>
          <strong className="font-display text-2xl font-medium tabular-nums text-cream">
            {formatUzs(total || room.price, lang)}
          </strong>
        </div>
        <p className="text-xs text-muted">
          {nights > 0 ? `${nights} ${t.booking.nights} · ` : null}
          {t.booking.included}
        </p>
        {error ? <p className="text-sm text-burgundy">{error}</p> : null}
        <button
          type="submit"
          className="min-h-12 rounded-full bg-burgundy text-sm font-medium text-cream transition-transform duration-150 hover:bg-burgundy-2 active:scale-[0.96]"
        >
          {t.booking.submit}
        </button>
        <div className="grid grid-cols-2 gap-2">
          <a
            href={HOTEL.phoneHref}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line text-sm text-cream"
            onClick={playClick}
          >
            <Phone className="size-4" />
            {t.booking.call}
          </a>
          <a
            href={waLink(HOTEL.whatsapp, "Hello Grand Art Premium Hotel")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line text-sm text-cream"
            onClick={playClick}
          >
            {t.booking.whatsapp}
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </form>
  );
}

export function HotelHome() {
  const t = useCopy();
  const lang = useHotel((s) => s.lang);
  const hydrate = useHotel((s) => s.hydrate);
  const setRoomId = useHotel((s) => s.setRoomId);
  const lightbox = useHotel((s) => s.lightbox);
  const setLightbox = useHotel((s) => s.setLightbox);
  const success = useHotel((s) => s.success);
  const setSuccess = useHotel((s) => s.setSuccess);
  const [filter, setFilter] = useState<"all" | "rooms" | "house" | "dining">("all");

  useEffect(() => {
    hydrate();
    const store = useHotel.getState();
    if (!store.checkIn) store.setField("checkIn", todayISO());
    if (!store.checkOut) store.setField("checkOut", todayISO(1));
  }, [hydrate]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((lightbox + 1) % GALLERY.length);
      if (e.key === "ArrowLeft") setLightbox((lightbox - 1 + GALLERY.length) % GALLERY.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, setLightbox]);

  const gallery = useMemo(() => {
    if (filter === "rooms") return GALLERY.filter((g) => ["deluxe", "twin", "suite", "bath"].includes(g.id));
    if (filter === "house") return GALLERY.filter((g) => ["facade", "yard-real", "yard", "pool", "reception", "conf"].includes(g.id));
    if (filter === "dining") return GALLERY.filter((g) => g.id === "breakfast");
    return GALLERY;
  }, [filter]);

  const addr = HOTEL.address[lang];

  return (
    <div id="top" className="relative bg-ink text-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            name: "Grand Art Premium Hotel",
            image: ["https://grandart.uz/hotel/facade.jpg"],
            telephone: "+998951931222",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Vosita Vohidova 82",
              addressLocality: "Tashkent",
              addressRegion: "Yakkasaray",
              postalCode: "100077",
              addressCountry: "UZ",
            },
            starRating: { "@type": "Rating", ratingValue: "3" },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: HOTEL.rating,
              reviewCount: HOTEL.reviewCount,
            },
            priceRange: "UZS 550000+",
            amenityFeature: AMENITY_KEYS.map((name) => ({
              "@type": "LocationFeatureSpecification",
              name,
            })),
            checkinTime: "14:00",
            checkoutTime: "12:00",
          }),
        }}
      />
      <div className="grain" aria-hidden="true" />
      <Header />

      <section className="relative min-h-[100dvh] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hotel/facade.jpg"
          preload="metadata"
        >
          <source src="/hotel/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/25" />
        <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-4 pb-28 pt-28 sm:px-6 sm:pb-24">
          <p className="reveal text-xs tracking-[0.28em] text-stone uppercase">{t.hero.kicker}</p>
          <h1 className="reveal reveal-d1 mt-4 font-display text-[18vw] leading-[0.85] tracking-tight sm:text-8xl md:text-9xl">
            {t.hero.titleA}{" "}
            <em className="text-burgundy not-italic sm:italic">{t.hero.titleB}</em>
            <span className="block text-[0.55em] text-cream-2">{t.hero.titleC}</span>
          </h1>
          <p className="reveal reveal-d2 mt-6 max-w-xl text-base text-cream-2 sm:text-lg">{t.hero.lead}</p>
          <div className="reveal reveal-d3 mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#book"
              onClick={playClick}
              className="inline-flex min-h-12 items-center rounded-full bg-burgundy px-6 text-sm font-medium text-cream transition-transform duration-150 hover:bg-burgundy-2 active:scale-[0.96]"
            >
              {t.hero.cta}
            </a>
            <a
              href="#tour"
              onClick={playClick}
              className="inline-flex min-h-12 items-center rounded-full border border-line-strong px-6 text-sm text-cream"
            >
              {t.hero.cta2}
            </a>
          </div>
          <p className="reveal reveal-d4 mt-8 text-sm text-stone">
            {t.hero.from}{" "}
            <span className="tabular-nums text-cream">{formatUzs(550000, lang)}</span>
            <span className="mt-1 block max-w-md text-muted">{t.hero.vs}</span>
          </p>
        </div>
      </section>

      <div className="overflow-hidden border-y border-line py-3">
        <div className="marquee text-xs tracking-[0.22em] text-stone uppercase">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex gap-10">
              {t.hero.ticker.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section id="rooms" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="text-xs tracking-[0.22em] text-burgundy uppercase">{t.rooms.kicker}</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl sm:text-6xl">{t.rooms.title}</h2>
        <p className="mt-4 max-w-xl text-stone">{t.rooms.lead}</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {ROOMS.map((room, i) => {
            const copyRoom = t.rooms[room.id as "twin" | "deluxe" | "triple" | "luxe"];
            return (
              <article
                key={room.id}
                className={cn(
                  "overflow-hidden rounded-xl bg-ink-2 shadow-[var(--shadow-lift)]",
                  i === 0 ? "md:col-span-2 md:grid md:grid-cols-2" : "",
                )}
              >
                <img src={room.image} alt={copyRoom.name} className="h-64 w-full object-cover md:h-full" />
                <div className="flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <h3 className="font-display text-3xl">{copyRoom.name}</h3>
                    <p className="mt-2 text-sm text-stone">{copyRoom.desc}</p>
                    <p className="mt-4 text-xs text-muted">{t.rooms.includes}</p>
                  </div>
                  <div className="mt-6 flex items-end justify-between gap-4">
                    <div>
                      <p className="font-display text-3xl tabular-nums">{formatUzs(room.price, lang)}</p>
                      <p className="text-xs text-muted">{t.rooms.perNight}</p>
                    </div>
                    <a
                      href="#book"
                      onClick={() => {
                        playClick();
                        setRoomId(room.id);
                      }}
                      className="inline-flex min-h-11 items-center rounded-full bg-cream px-5 text-sm font-medium text-ink transition-transform duration-150 active:scale-[0.96]"
                    >
                      {t.rooms.select}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs tracking-[0.22em] text-burgundy uppercase">{t.amen.kicker}</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">{t.amen.title}</h2>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {AMENITY_KEYS.map((key) => {
              const Icon = amenityIcons[key];
              return (
                <li key={key} className="flex min-h-20 items-center gap-3 rounded-lg border border-line px-4">
                  <Icon className="size-4 shrink-0 text-burgundy" strokeWidth={1.6} />
                  <span className="text-sm text-cream-2">{t.amen[key]}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="tour" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs tracking-[0.22em] text-burgundy uppercase">{t.tour.kicker}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">{t.tour.title}</h2>
            <p className="mt-3 max-w-xl text-stone">{t.tour.lead}</p>
          </div>
          <p className="text-xs text-muted">{t.tour.hint}</p>
        </div>
        <div className="mt-8 h-[420px] overflow-hidden rounded-xl bg-ink-3 sm:h-[520px]">
          <CourtyardMount />
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs tracking-[0.22em] text-burgundy uppercase">{t.gallery.kicker}</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">{t.gallery.title}</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {(["all", "rooms", "house", "dining"] as const).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => {
                playClick();
                setFilter(id);
              }}
              className={cn(
                "min-h-10 rounded-full px-4 text-sm",
                filter === id ? "bg-cream text-ink" : "border border-line text-stone",
              )}
            >
              {t.gallery[id]}
            </button>
          ))}
        </div>
        <div className="gallery-grid mt-8">
          {gallery.map((item) => {
            const idx = GALLERY.findIndex((g) => g.src === item.src);
            return (
              <figure key={item.src + item.id} className="overflow-hidden rounded-lg">
                <button
                  type="button"
                  className="block h-full w-full"
                  onClick={() => {
                    playClick();
                    setLightbox(idx);
                  }}
                >
                  <img src={item.src} alt="" className="h-56 w-full object-cover transition-transform duration-500 hover:scale-[1.03] sm:h-64" />
                </button>
              </figure>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover opacity-50" autoPlay muted loop playsInline poster="/hotel/courtyard.jpg">
          <source src="/hotel/courtyard.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-24 sm:grid-cols-2 sm:px-6">
          <div>
            <p className="text-xs tracking-[0.22em] text-burgundy uppercase">{t.dining.kicker}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">{t.dining.title}</h2>
            <p className="mt-4 max-w-md text-cream-2">{t.dining.lead}</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.22em] text-burgundy uppercase">{t.events.kicker}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">{t.events.title}</h2>
            <p className="mt-4 max-w-md text-cream-2">{t.events.lead}</p>
            <a href="#book" onClick={playClick} className="mt-6 inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 text-sm">
              {t.events.cta}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs tracking-[0.22em] text-burgundy uppercase">{t.reviews.kicker}</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl sm:text-5xl">{t.reviews.title}</h2>
          <p className="flex items-center gap-2 text-sm text-stone">
            <Star className="size-4 fill-burgundy text-burgundy" />
            <span className="tabular-nums text-cream">{HOTEL.rating}</span>
            · {HOTEL.reviewCount} · {t.reviews.rating}
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {t.reviews.items.map((r) => (
            <blockquote key={r.name} className="rounded-xl border border-line p-6">
              <p className="text-cream-2">{r.text}</p>
              <footer className="mt-4 text-sm text-muted">
                {r.name} · {r.from}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="location" className="border-y border-line bg-ink-2">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-2 sm:px-6">
          <div>
            <p className="text-xs tracking-[0.22em] text-burgundy uppercase">{t.location.kicker}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">{t.location.title}</h2>
            <p className="mt-4 text-stone">{t.location.lead}</p>
            <ul className="mt-6 space-y-2 text-sm text-cream-2">
              <li className="flex items-center gap-2"><MapPin className="size-4 text-burgundy" /> {addr}</li>
              <li className="flex items-center gap-2"><Clock3 className="size-4 text-burgundy" /> {t.location.metro}</li>
              <li>{t.location.airport}</li>
              <li>{t.location.station}</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {t.location.nearby.map((n) => (
                <span key={n} className="rounded-full border border-line px-3 py-1.5 text-xs text-stone">
                  {n}
                </span>
              ))}
            </div>
            <a
              href={HOTEL.directions}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-cream px-5 text-sm font-medium text-ink"
            >
              {t.location.directions}
              <ArrowUpRight className="size-4" />
            </a>
            <p className="mt-3 text-xs text-muted">
              {t.location.plus}: {HOTEL.plusCode}
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <iframe
              title="map"
              src={HOTEL.mapsEmbed}
              className="h-[360px] w-full border-0 grayscale contrast-125 sm:h-full min-h-[360px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs tracking-[0.22em] text-burgundy uppercase">{t.transfer.kicker}</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">{t.transfer.title}</h2>
        <p className="mt-4 max-w-xl text-stone">{t.transfer.lead}</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TRANSFERS.map((tr) => (
            <article key={tr.id} className="rounded-xl border border-line p-5">
              <p className="font-display text-2xl">{tr.car}</p>
              <p className="mt-2 text-sm text-muted">
                {t.transfer.pax} {tr.pax}
              </p>
              <p className="mt-4 font-display text-3xl tabular-nums">${tr.usd}</p>
              <p className="text-xs text-muted">{t.transfer.usd}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="book" className="border-t border-line bg-ink-2">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs tracking-[0.22em] text-burgundy uppercase">{t.contact.kicker}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">{t.booking.title}</h2>
            <p className="mt-4 text-stone">{t.booking.subtitle}</p>
            <div className="mt-8 space-y-4 text-sm">
              <p>
                <span className="block text-xs text-muted">{t.contact.address}</span>
                {addr}
              </p>
              <p>
                <span className="block text-xs text-muted">{t.contact.phone}</span>
                <a href={HOTEL.phoneHref} className="text-cream underline-offset-4 hover:underline">
                  {HOTEL.phone}
                </a>
              </p>
              <p>
                <span className="block text-xs text-muted">{t.contact.hours}</span>
                14:00 — 12:00
              </p>
            </div>
            <img src="/hotel/reception.jpg" alt="" className="mt-8 hidden h-56 w-full rounded-xl object-cover lg:block" />
          </div>
          <div className="rounded-xl border border-line bg-ink p-5 sm:p-7">
            <BookingForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-line pb-24 sm:pb-0">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>{t.footer.copy}</p>
          <p>{t.footer.rights}</p>
        </div>
      </footer>

      <a
        href="#book"
        onClick={playClick}
        className="fixed bottom-4 left-4 right-4 z-40 flex min-h-12 items-center justify-between rounded-full bg-burgundy px-5 text-sm font-medium text-cream shadow-[var(--shadow-lift)] sm:hidden"
      >
        <span>{t.nav.book}</span>
        <span className="tabular-nums">{formatUzs(550000, lang)}</span>
      </a>

      {lightbox !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/92 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-line text-cream"
            onClick={() => setLightbox(null)}
            aria-label={t.gallery.close}
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            className="absolute left-3 grid size-11 place-items-center rounded-full border border-line text-cream sm:left-6"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + GALLERY.length) % GALLERY.length);
            }}
            aria-label="prev"
          >
            <ChevronLeft className="size-5" />
          </button>
          <img
            src={GALLERY[lightbox].src}
            alt=""
            className="max-h-[82dvh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="absolute right-3 grid size-11 place-items-center rounded-full border border-line text-cream sm:right-6"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % GALLERY.length);
            }}
            aria-label="next"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      ) : null}

      {success ? (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-ink/80 p-4">
          <div className="w-full max-w-md rounded-xl border border-line bg-ink-2 p-8 text-center">
            <h3 className="font-display text-3xl">{t.booking.successTitle}</h3>
            <p className="mt-3 text-sm text-stone">{t.booking.successBody}</p>
            <button
              type="button"
              className="mt-6 min-h-11 rounded-full bg-cream px-6 text-sm font-medium text-ink"
              onClick={() => setSuccess(false)}
            >
              {t.booking.close}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
