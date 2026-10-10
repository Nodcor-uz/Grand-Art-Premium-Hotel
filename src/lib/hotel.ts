export const HOTEL = {
  name: "Grand Art Premium Hotel",
  short: "Grand Art",
  phone: "+998 95 193 12 22",
  phoneHref: "tel:+998951931222",
  whatsapp: "+998951931222",
  email: "reservations@grandart.uz",
  address: {
    en: "Vosita Vohidova Street 82, Yakkasaray, 100077 Tashkent",
    ru: "ул. Восита Вохидова 82, Яккасарай, 100077 Ташкент",
    uz: "Vosita Vohidov ko‘chasi 82, Yakkasaroy, 100077 Toshkent",
  },
  plusCode: "77X6+4P Tashkent",
  mapsQuery: "Grand Art Premium Hotel, Vosita Vohidova 82, Tashkent",
  mapsEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=69.252%2C41.279%2C69.270%2C41.292&layer=mapnik&marker=41.2855%2C69.2612",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Grand+Art+Premium+Hotel+Vosita+Vohidova+82+Tashkent",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=Grand+Art+Premium+Hotel+Tashkent",
  checkIn: "14:00",
  checkOut: "12:00",
  roomsCount: 29,
  rating: 4.1,
  reviewCount: 141,
  lat: 41.2855,
  lng: 69.2612,
} as const;

export const ROOMS = [
  {
    id: "twin",
    image: "/hotel/twin.jpg",
    price: 550_000,
    beds: "2 × 1",
    guests: 2,
  },
  {
    id: "deluxe",
    image: "/hotel/deluxe.jpg",
    price: 650_000,
    beds: "1 × 2",
    guests: 2,
  },
  {
    id: "triple",
    image: "/hotel/suite.jpg",
    price: 750_000,
    beds: "3",
    guests: 3,
  },
  {
    id: "luxe",
    image: "/hotel/suite.jpg",
    price: 920_000,
    beds: "1 × 2",
    guests: 2,
  },
] as const;

export const GALLERY = [
  { src: "/hotel/facade.jpg", id: "facade", w: 16, h: 9 },
  { src: "/hotel/courtyard-real.png", id: "yard-real", w: 4, h: 3 },
  { src: "/hotel/deluxe.jpg", id: "deluxe", w: 16, h: 9 },
  { src: "/hotel/reception.jpg", id: "reception", w: 16, h: 9 },
  { src: "/hotel/pool.jpg", id: "pool", w: 16, h: 9 },
  { src: "/hotel/breakfast.jpg", id: "breakfast", w: 16, h: 9 },
  { src: "/hotel/twin.jpg", id: "twin", w: 16, h: 9 },
  { src: "/hotel/bathroom.jpg", id: "bath", w: 4, h: 3 },
  { src: "/hotel/courtyard.jpg", id: "yard", w: 16, h: 9 },
  { src: "/hotel/conference.jpg", id: "conf", w: 16, h: 9 },
  { src: "/hotel/suite.jpg", id: "suite", w: 16, h: 9 },
] as const;

export const TRANSFERS = [
  { id: "sedan", pax: 2, usd: 25, car: "Chevrolet Lacetti" },
  { id: "van6", pax: 6, usd: 40, car: "Hyundai Starex" },
  { id: "van8", pax: 8, usd: 50, car: "SsangYong Istana" },
  { id: "bus14", pax: 14, usd: 60, car: "Mitsubishi Rosa" },
] as const;

export const AMENITY_KEYS = [
  "wifi",
  "breakfast",
  "parking",
  "pool",
  "ac",
  "shuttle",
  "restaurant",
  "gym",
  "sauna",
  "desk24",
  "conference",
  "accessible",
] as const;
