import { i as __toESM, n as __exportAll } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { t as create } from "../_libs/zustand.mjs";
import { C as AirVent, S as ArrowUpRight, _ as Coffee, a as Volume2, b as ChevronLeft, c as Star, d as Plane, f as Phone, g as ConciergeBell, h as Dumbbell, i as VolumeX, l as SquareParking, m as MapPin, n as Wifi, o as UtensilsCrossed, p as Menu, r as Waves, t as X, u as Presentation, v as Clock3, w as Accessibility, x as Bath, y as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-cr-yQEoe.js
var routes_cr_yQEoe_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HOTEL = {
	name: "Grand Art Premium Hotel",
	short: "Grand Art",
	phone: "+998 95 193 12 22",
	phoneHref: "tel:+998951931222",
	whatsapp: "+998951931222",
	email: "reservations@grandart.uz",
	address: {
		en: "Vosita Vohidova Street 82, Yakkasaray, 100077 Tashkent",
		ru: "ул. Восита Вохидова 82, Яккасарай, 100077 Ташкент",
		uz: "Vosita Vohidov ko‘chasi 82, Yakkasaroy, 100077 Toshkent"
	},
	plusCode: "77X6+4P Tashkent",
	mapsQuery: "Grand Art Premium Hotel, Vosita Vohidova 82, Tashkent",
	mapsEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=69.252%2C41.279%2C69.270%2C41.292&layer=mapnik&marker=41.2855%2C69.2612",
	mapsLink: "https://www.google.com/maps/search/?api=1&query=Grand+Art+Premium+Hotel+Vosita+Vohidova+82+Tashkent",
	directions: "https://www.google.com/maps/dir/?api=1&destination=Grand+Art+Premium+Hotel+Tashkent",
	checkIn: "14:00",
	checkOut: "12:00",
	roomsCount: 29,
	rating: 4.1,
	reviewCount: 141,
	lat: 41.2855,
	lng: 69.2612
};
var ROOMS = [
	{
		id: "twin",
		image: "/hotel/twin.jpg",
		price: 55e4,
		beds: "2 × 1",
		guests: 2
	},
	{
		id: "deluxe",
		image: "/hotel/deluxe.jpg",
		price: 65e4,
		beds: "1 × 2",
		guests: 2
	},
	{
		id: "triple",
		image: "/hotel/suite.jpg",
		price: 75e4,
		beds: "3",
		guests: 3
	},
	{
		id: "luxe",
		image: "/hotel/suite.jpg",
		price: 92e4,
		beds: "1 × 2",
		guests: 2
	}
];
var GALLERY = [
	{
		src: "/hotel/facade.jpg",
		id: "facade",
		w: 16,
		h: 9
	},
	{
		src: "/hotel/courtyard-real.png",
		id: "yard-real",
		w: 4,
		h: 3
	},
	{
		src: "/hotel/deluxe.jpg",
		id: "deluxe",
		w: 16,
		h: 9
	},
	{
		src: "/hotel/reception.jpg",
		id: "reception",
		w: 16,
		h: 9
	},
	{
		src: "/hotel/pool.jpg",
		id: "pool",
		w: 16,
		h: 9
	},
	{
		src: "/hotel/breakfast.jpg",
		id: "breakfast",
		w: 16,
		h: 9
	},
	{
		src: "/hotel/twin.jpg",
		id: "twin",
		w: 16,
		h: 9
	},
	{
		src: "/hotel/bathroom.jpg",
		id: "bath",
		w: 4,
		h: 3
	},
	{
		src: "/hotel/courtyard.jpg",
		id: "yard",
		w: 16,
		h: 9
	},
	{
		src: "/hotel/conference.jpg",
		id: "conf",
		w: 16,
		h: 9
	},
	{
		src: "/hotel/suite.jpg",
		id: "suite",
		w: 16,
		h: 9
	}
];
var TRANSFERS = [
	{
		id: "sedan",
		pax: 2,
		usd: 25,
		car: "Chevrolet Lacetti"
	},
	{
		id: "van6",
		pax: 6,
		usd: 40,
		car: "Hyundai Starex"
	},
	{
		id: "van8",
		pax: 8,
		usd: 50,
		car: "SsangYong Istana"
	},
	{
		id: "bus14",
		pax: 14,
		usd: 60,
		car: "Mitsubishi Rosa"
	}
];
var AMENITY_KEYS = [
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
	"accessible"
];
var LANGS = [
	{
		id: "uz",
		label: "O‘z"
	},
	{
		id: "ru",
		label: "Рус"
	},
	{
		id: "en",
		label: "En"
	}
];
var copy = {
	en: {
		metaTitle: "Grand Art Premium Hotel · Tashkent",
		metaDesc: "Boutique hotel in Yakkasaray, Tashkent. Quiet courtyard, outdoor pool, breakfast included. Direct rates from 550,000 UZS. Vosita Vohidova 82.",
		nav: {
			stay: "Stay",
			rooms: "Rooms",
			gallery: "Gallery",
			tour: "3D courtyard",
			dining: "Dining",
			events: "Events",
			reviews: "Guests",
			location: "Location",
			book: "Book"
		},
		hero: {
			kicker: "Art Hotels Group · Tashkent",
			titleA: "Grand",
			titleB: "Art",
			titleC: "Premium",
			lead: "A quiet cream-stone house in Yakkasaray — courtyard garden, seasonal pool, and rooms that feel like a private atelier.",
			cta: "Reserve a night",
			cta2: "Look around",
			from: "Direct rate from",
			vs: "OTAs from 828,000 UZS — book here and keep the difference.",
			ticker: [
				"Yakkasaray",
				"Free breakfast",
				"Courtyard pool",
				"24h desk",
				"Art Hotels Group"
			]
		},
		booking: {
			title: "Request a stay",
			subtitle: "We reply on WhatsApp in minutes. Breakfast is included.",
			checkIn: "Check-in",
			checkOut: "Check-out",
			guests: "Guests",
			room: "Room",
			name: "Full name",
			phone: "Phone or WhatsApp",
			email: "Email",
			notes: "Notes · late arrival, extra bed, diet",
			transfer: "Airport / station transfer",
			submit: "Send request",
			whatsapp: "WhatsApp",
			call: "Call reception",
			nights: "nights",
			total: "Estimated total",
			included: "Breakfast included · free cancellation until 14:00 the day before",
			successTitle: "Request received",
			successBody: "Thank you. We opened WhatsApp with your dates so reception can confirm the room. You can also call +998 95 193 12 22.",
			error: "Please fill name, phone, and dates.",
			close: "Close",
			guestsN: (n) => `${n} guest${n > 1 ? "s" : ""}`,
			pickRoom: "Choose a room",
			event: "Event / conference",
			stay: "Stay",
			transferOnly: "Transfer only",
			callback: "Call me back"
		},
		rooms: {
			kicker: "01 — Rooms",
			title: "Twenty-nine quiet rooms",
			lead: "Classic interiors, air-conditioning, satellite TV, kettle, and a bathroom with toiletries. Breakfast is in the rate.",
			perNight: "per night",
			guests: "guests",
			select: "Select",
			includes: "Breakfast · Wi-Fi · AC · daily housekeeping",
			twin: {
				name: "Twin",
				desc: "Two beds, courtyard or street quiet. Ideal for friends and colleagues."
			},
			deluxe: {
				name: "Deluxe",
				desc: "King bed, tufted headboard, LED cove ceiling, writing desk."
			},
			triple: {
				name: "Triple",
				desc: "Spacious room for families. Extra bed on request."
			},
			luxe: {
				name: "Luxe suite",
				desc: "Sitting area, king bed, the quietest corner of the house."
			}
		},
		amen: {
			kicker: "02 — The house",
			title: "What is waiting downstairs",
			wifi: "Free high-speed Wi-Fi",
			breakfast: "Buffet breakfast",
			parking: "Free parking",
			pool: "Courtyard pool (seasonal)",
			ac: "Air-conditioning",
			shuttle: "Airport shuttle",
			restaurant: "Restaurant & 24h bar",
			gym: "Gym",
			sauna: "Sauna",
			desk24: "Reception 24/7",
			conference: "Halls for 30 and 70",
			accessible: "Accessible rooms"
		},
		tour: {
			kicker: "03 — Courtyard",
			title: "Walk the inner garden",
			lead: "Drag to orbit the cream courtyards, the lawn, and the pool. This is the quiet the reviews mention.",
			hint: "Drag · scroll to zoom"
		},
		gallery: {
			kicker: "04 — Gallery",
			title: "The house in light",
			all: "All",
			rooms: "Rooms",
			house: "House",
			dining: "Dining",
			close: "Close"
		},
		dining: {
			kicker: "05 — Morning",
			title: "Breakfast is part of the stay",
			lead: "Buffet from 07:00 — non, fruit, eggs, tea. The restaurant and bar stay open around the clock for late arrivals."
		},
		events: {
			kicker: "06 — Gather",
			title: "Two halls, one courtyard",
			lead: "A boardroom for 30 and a hall for 70, with coffee service and a quiet garden for breaks. Ask for a day-rate.",
			cta: "Plan an event"
		},
		reviews: {
			kicker: "07 — Guests",
			title: "People come back for the desk",
			rating: "Google rating",
			items: [
				{
					name: "Zary D.",
					from: "Germany",
					text: "First trip to Asia. The whole team was kind and polite. I stayed nineteen nights and felt looked after."
				},
				{
					name: "Andrzej S.",
					from: "Poland",
					text: "Second stay this year. Reception speaks English and Russian — essential when you land late."
				},
				{
					name: "Karine T.",
					from: "Russia",
					text: "Kamil, Nurmuhammad, Kamron, Allohberdi, and manager Sardor made the stay. Breakfast was varied and good."
				},
				{
					name: "Ryad S.",
					from: "France",
					text: "Large rooms, firm comfortable beds. A quiet street, a short walk to Kosmonavtlar metro."
				}
			]
		},
		location: {
			kicker: "08 — Yakkasaray",
			title: "A silent street, ten minutes from the city",
			lead: "Between the railway station and the airport, a walk from Kosmonavtlar metro, Mirabad bazaar, and the Museum of Applied Arts.",
			metro: "Kosmonavtlar metro · 10 min walk",
			airport: "Tashkent Airport · 15–20 min",
			station: "Railway station · 10 min",
			nearby: [
				"Amir Temur Square",
				"Museum of Applied Arts",
				"Mirabad Bazaar",
				"Humo Arena"
			],
			directions: "Open in Maps",
			plus: "Plus code"
		},
		transfer: {
			kicker: "09 — Arrive",
			title: "We meet you at the gate",
			lead: "Sedan, van, or coach — priced one-way. Add it to your stay request.",
			pax: "up to",
			usd: "USD one way"
		},
		contact: {
			kicker: "10 — Reception",
			title: "Write, call, or walk in",
			hours: "Desk open 24 hours",
			address: "Address",
			phone: "Phone",
			email: "Email"
		},
		footer: {
			copy: "Grand Art Premium Hotel · Art Hotels Group",
			rights: "Direct booking. Best available rate.",
			soundOn: "Sound on",
			soundOff: "Sound off"
		},
		sound: {
			on: "Sound",
			off: "Muted"
		},
		waStay: (p) => `Hello Grand Art Premium Hotel. I would like to book:\nName: ${p.name}\nRoom: ${p.room}\nCheck-in: ${p.checkIn}\nCheck-out: ${p.checkOut}\nGuests: ${p.guests}\nEstimate: ${p.total}\n${p.notes ? "Notes: " + p.notes : ""}`
	},
	ru: {
		metaTitle: "Grand Art Premium Hotel · Ташкент",
		metaDesc: "Бутик-отель в Яккасарае, Ташкент. Тихий двор, бассейн, завтрак включён. Прямые цены от 550 000 сум. Восита Вохидова 82.",
		nav: {
			stay: "Отель",
			rooms: "Номера",
			gallery: "Галерея",
			tour: "3D двор",
			dining: "Завтрак",
			events: "События",
			reviews: "Гости",
			location: "Как добраться",
			book: "Бронь"
		},
		hero: {
			kicker: "Art Hotels Group · Ташкент",
			titleA: "Grand",
			titleB: "Art",
			titleC: "Premium",
			lead: "Тихий кремовый дом в Яккасарае — сад во дворе, сезонный бассейн и номера как частный ателье.",
			cta: "Забронировать",
			cta2: "Осмотреть двор",
			from: "Прямой тариф от",
			vs: "На агрегаторах от 828 000 сум — бронируйте здесь и оставьте разницу себе.",
			ticker: [
				"Яккасарай",
				"Завтрак включён",
				"Бассейн во дворе",
				"Ресепшен 24/7",
				"Art Hotels Group"
			]
		},
		booking: {
			title: "Заявка на проживание",
			subtitle: "Отвечаем в WhatsApp за минуты. Завтрак включён.",
			checkIn: "Заезд",
			checkOut: "Выезд",
			guests: "Гости",
			room: "Номер",
			name: "Имя и фамилия",
			phone: "Телефон или WhatsApp",
			email: "Email",
			notes: "Пожелания · поздний заезд, доп. кровать, питание",
			transfer: "Трансфер из аэропорта / с вокзала",
			submit: "Отправить заявку",
			whatsapp: "WhatsApp",
			call: "Позвонить на ресепшен",
			nights: "ночей",
			total: "Ориентир по сумме",
			included: "Завтрак включён · бесплатная отмена до 14:00 накануне",
			successTitle: "Заявка принята",
			successBody: "Спасибо. Мы открыли WhatsApp с вашими датами — ресепшен подтвердит номер. Можно позвонить: +998 95 193 12 22.",
			error: "Укажите имя, телефон и даты.",
			close: "Закрыть",
			guestsN: (n) => `${n} ${n === 1 ? "гость" : n < 5 ? "гостя" : "гостей"}`,
			pickRoom: "Выберите номер",
			event: "Мероприятие",
			stay: "Проживание",
			transferOnly: "Только трансфер",
			callback: "Перезвоните мне"
		},
		rooms: {
			kicker: "01 — Номера",
			title: "Двадцать девять тихих комнат",
			lead: "Классический интерьер, кондиционер, спутниковое ТВ, чайник и санузел с косметикой. Завтрак в цене.",
			perNight: "за ночь",
			guests: "гостей",
			select: "Выбрать",
			includes: "Завтрак · Wi-Fi · кондиционер · ежедневная уборка",
			twin: {
				name: "Твин",
				desc: "Две кровати, тихо во двор или на улицу. Для коллег и друзей."
			},
			deluxe: {
				name: "Делюкс",
				desc: "Кровать king, каретная спинка, потолок с LED, письменный стол."
			},
			triple: {
				name: "Трипл",
				desc: "Просторный номер для семьи. Доп. кровать по запросу."
			},
			luxe: {
				name: "Люкс",
				desc: "Зона отдыха, кровать king, самый тихий угол дома."
			}
		},
		amen: {
			kicker: "02 — Дом",
			title: "Что ждёт на территории",
			wifi: "Бесплатный быстрый Wi-Fi",
			breakfast: "Завтрак «шведский стол»",
			parking: "Бесплатная парковка",
			pool: "Бассейн во дворе (сезон)",
			ac: "Кондиционер",
			shuttle: "Трансфер в аэропорт",
			restaurant: "Ресторан и бар 24/7",
			gym: "Тренажёрный зал",
			sauna: "Сауна",
			desk24: "Ресепшен 24/7",
			conference: "Залы на 30 и 70 человек",
			accessible: "Доступная среда"
		},
		tour: {
			kicker: "03 — Двор",
			title: "Прогулка по внутреннему саду",
			lead: "Покрутите сцену: кремовые фасады, газон и бассейн. Та самая тишина из отзывов.",
			hint: "Перетащите · колёсико — масштаб"
		},
		gallery: {
			kicker: "04 — Галерея",
			title: "Дом в свете",
			all: "Все",
			rooms: "Номера",
			house: "Дом",
			dining: "Кухня",
			close: "Закрыть"
		},
		dining: {
			kicker: "05 — Утро",
			title: "Завтрак входит в проживание",
			lead: "Шведский стол с 07:00 — нон, фрукты, яйца, чай. Ресторан и бар работают круглосуточно для поздних заездов."
		},
		events: {
			kicker: "06 — Собрать",
			title: "Два зала и один двор",
			lead: "Переговорная на 30 и зал на 70, кофе-брейки и сад для пауз. Запросите дневной тариф.",
			cta: "Спланировать событие"
		},
		reviews: {
			kicker: "07 — Гости",
			title: "Возвращаются из‑за ресепшена",
			rating: "Оценка Google",
			items: [
				{
					name: "Zary D.",
					from: "Германия",
					text: "Первая поездка в Азию. Вся команда вежлива. Девятнадцать ночей — и чувство, что о тебе заботятся."
				},
				{
					name: "Andrzej S.",
					from: "Польша",
					text: "Второй раз за год. На ресепшене говорят по-английски и по-русски — это важно, если прилетаешь поздно."
				},
				{
					name: "Karine T.",
					from: "Россия",
					text: "Камиль, Нурмухаммад, Камрон, Аллохберди и директор Сардор. Завтрак разнообразный и вкусный."
				},
				{
					name: "Ryad S.",
					from: "Франция",
					text: "Большие номера, жёсткий удобный матрас. Тихая улица, до метро «Космонавтлар» недалеко."
				}
			]
		},
		location: {
			kicker: "08 — Яккасарай",
			title: "Тихая улица, десять минут до города",
			lead: "Между вокзалом и аэропортом, пешком до метро «Космонавтлар», Мирабадского базара и Музея прикладного искусства.",
			metro: "Метро Космонавтлар · 10 мин пешком",
			airport: "Аэропорт Ташкента · 15–20 мин",
			station: "Вокзал · 10 мин",
			nearby: [
				"Площадь Амира Темура",
				"Музей прикладного искусства",
				"Мирабадский базар",
				"Humo Arena"
			],
			directions: "Открыть карту",
			plus: "Plus-код"
		},
		transfer: {
			kicker: "09 — Приезд",
			title: "Встретим у трапа",
			lead: "Седан, минивэн или автобус — цена в одну сторону. Добавьте к заявке.",
			pax: "до",
			usd: "USD в одну сторону"
		},
		contact: {
			kicker: "10 — Ресепшен",
			title: "Напишите, позвоните или зайдите",
			hours: "Стойка работает 24 часа",
			address: "Адрес",
			phone: "Телефон",
			email: "Почта"
		},
		footer: {
			copy: "Grand Art Premium Hotel · Art Hotels Group",
			rights: "Прямое бронирование. Лучшая цена.",
			soundOn: "Звук включён",
			soundOff: "Звук выключен"
		},
		sound: {
			on: "Звук",
			off: "Тихо"
		},
		waStay: (p) => `Здравствуйте, Grand Art Premium Hotel. Хочу забронировать:\nИмя: ${p.name}\nНомер: ${p.room}\nЗаезд: ${p.checkIn}\nВыезд: ${p.checkOut}\nГости: ${p.guests}\nОриентир: ${p.total}\n${p.notes ? "Пожелания: " + p.notes : ""}`
	},
	uz: {
		metaTitle: "Grand Art Premium Hotel · Toshkent",
		metaDesc: "Yakkasaroydagi boutique mehmonxona. Hovli, basseyn, nonushta narxga kiritilgan. To‘g‘ridan-to‘g‘ri tarif 550 000 so‘mdan. Vosita Vohidov 82.",
		nav: {
			stay: "Mehmonxona",
			rooms: "Xonalar",
			gallery: "Galereya",
			tour: "3D hovli",
			dining: "Nonushta",
			events: "Tadbirlar",
			reviews: "Mehmonlar",
			location: "Manzil",
			book: "Band qilish"
		},
		hero: {
			kicker: "Art Hotels Group · Toshkent",
			titleA: "Grand",
			titleB: "Art",
			titleC: "Premium",
			lead: "Yakkasaroydagi sokin krem-tosh uy — hovlidagi bog‘, mavsumiy basseyn va xonalar xuddi shaxsiy atel’e.",
			cta: "Tunni band qilish",
			cta2: "Hovlini ko‘rish",
			from: "To‘g‘ridan-to‘g‘ri tarif",
			vs: "Aggregatorlarda 828 000 so‘mdan — shu yerda bron qiling, farq sizda qoladi.",
			ticker: [
				"Yakkasaroy",
				"Bepul nonushta",
				"Hovli hovuzi",
				"Qabulxona 24/7",
				"Art Hotels Group"
			]
		},
		booking: {
			title: "Yashash so‘rovi",
			subtitle: "WhatsApp orqali daqiqalarda javob beramiz. Nonushta kiritilgan.",
			checkIn: "Kirish",
			checkOut: "Chiqish",
			guests: "Mehmonlar",
			room: "Xona",
			name: "Ism familiya",
			phone: "Telefon yoki WhatsApp",
			email: "Email",
			notes: "Izoh · kech kelish, qo‘shimcha karavot, ovqat",
			transfer: "Aeroport / vokzal transferi",
			submit: "So‘rov yuborish",
			whatsapp: "WhatsApp",
			call: "Qabulxonaga qo‘ng‘iroq",
			nights: "tun",
			total: "Taxminiy summa",
			included: "Nonushta kiritilgan · oldingi kun 14:00 gacha bepul bekor qilish",
			successTitle: "So‘rov qabul qilindi",
			successBody: "Rahmat. Sanalaringiz bilan WhatsApp ochildi — qabulxona xonani tasdiqlaydi. Qo‘ng‘iroq: +998 95 193 12 22.",
			error: "Ism, telefon va sanalarni kiriting.",
			close: "Yopish",
			guestsN: (n) => `${n} mehmon`,
			pickRoom: "Xonani tanlang",
			event: "Tadbir / konferensiya",
			stay: "Yashash",
			transferOnly: "Faqat transfer",
			callback: "Qayta qo‘ng‘iroq"
		},
		rooms: {
			kicker: "01 — Xonalar",
			title: "Yigirma to‘qqiz sokin xona",
			lead: "Klassik interyer, konditsioner, sun’iy yo‘ldosh TV, choynak va hammom. Nonushta narxga kiritilgan.",
			perNight: "bir tun",
			guests: "mehmon",
			select: "Tanlash",
			includes: "Nonushta · Wi-Fi · konditsioner · kundalik tozalash",
			twin: {
				name: "Twin",
				desc: "Ikki karavot, hovli yoki sokin ko‘cha. Do‘stlar va hamkasblar uchun."
			},
			deluxe: {
				name: "Deluxe",
				desc: "King karavot, qatlamli bosh taxtasi, LED shift, yozuv stoli."
			},
			triple: {
				name: "Triple",
				desc: "Oilalar uchun keng xona. Qo‘shimcha karavot so‘rov bo‘yicha."
			},
			luxe: {
				name: "Luxe",
				desc: "O‘tirish zonasi, king karavot, uyning eng sokin burchagi."
			}
		},
		amen: {
			kicker: "02 — Uy",
			title: "Hududda nima kutadi",
			wifi: "Bepul tez Wi-Fi",
			breakfast: "Shved stoli nonushtasi",
			parking: "Bepul parking",
			pool: "Hovlidagi basseyn (mavsumiy)",
			ac: "Konditsioner",
			shuttle: "Aeroport transferi",
			restaurant: "Restoran va 24 soat bar",
			gym: "Sport zal",
			sauna: "Sauna",
			desk24: "Qabulxona 24/7",
			conference: "30 va 70 kishilik zallar",
			accessible: "Qulay kirish"
		},
		tour: {
			kicker: "03 — Hovli",
			title: "Ichki bog‘ bo‘ylab",
			lead: "Sahna aylantiring: krem fasadlar, maysazor va basseyn. Sharhlardagi o‘sha sukunat.",
			hint: "Sudrab ko‘ring · masshtab — scroll"
		},
		gallery: {
			kicker: "04 — Galereya",
			title: "Yorug‘likdagi uy",
			all: "Barchasi",
			rooms: "Xonalar",
			house: "Uy",
			dining: "Oshxona",
			close: "Yopish"
		},
		dining: {
			kicker: "05 — Tong",
			title: "Nonushta yashashga kiritilgan",
			lead: "07:00 dan shved stoli — non, meva, tuxum, choy. Kech kelganlar uchun restoran va bar kechayu kunduz ochiq."
		},
		events: {
			kicker: "06 — Yig‘in",
			title: "Ikki zal, bitta hovli",
			lead: "30 kishilik muzokara va 70 kishilik zal, kofe-breyk va tanaffus uchun bog‘. Kunlik tarif so‘rang.",
			cta: "Tadbir rejalash"
		},
		reviews: {
			kicker: "07 — Mehmonlar",
			title: "Qabulxona uchun qaytib kelishadi",
			rating: "Google bahosi",
			items: [
				{
					name: "Zary D.",
					from: "Germaniya",
					text: "Osiyoga birinchi safar. Jamoa mehribon. O‘n to‘qqiz tun — g‘amxo‘rlik sezildi."
				},
				{
					name: "Andrzej S.",
					from: "Polsha",
					text: "Bu yil ikkinchi marta. Qabulxonada ingliz va rus tillari — kech qo‘nganda muhim."
				},
				{
					name: "Karine T.",
					from: "Rossiya",
					text: "Komil, Nurmuhammad, Kamron, Allohberdi va direktor Sardor. Nonushta turli va mazali."
				},
				{
					name: "Ryad S.",
					from: "Fransiya",
					text: "Keng xonalar, qulay qattiq matras. Sokin ko‘cha, Kosmonavtlar metrosiga yaqin."
				}
			]
		},
		location: {
			kicker: "08 — Yakkasaroy",
			title: "Sokin ko‘cha, shaharga o‘n daqiqa",
			lead: "Vokzal va aeroport o‘rtasida, Kosmonavtlar metrosi, Mirobod bozori va Amaliy san’at muzeyiga piyoda.",
			metro: "Kosmonavtlar metro · 10 daqiqa piyoda",
			airport: "Toshkent aeroporti · 15–20 daqiqa",
			station: "Vokzal · 10 daqiqa",
			nearby: [
				"Amir Temur maydoni",
				"Amaliy san’at muzeyi",
				"Mirobod bozori",
				"Humo Arena"
			],
			directions: "Xaritada ochish",
			plus: "Plus-kod"
		},
		transfer: {
			kicker: "09 — Yetib kelish",
			title: "Sizni darvozada kutib olamiz",
			lead: "Sedan, miniven yoki avtobus — bir tomonga narx. So‘rovga qo‘shing.",
			pax: "gacha",
			usd: "USD bir tomonga"
		},
		contact: {
			kicker: "10 — Qabulxona",
			title: "Yozing, qo‘ng‘iroq qiling yoki kiring",
			hours: "Stol 24 soat ochiq",
			address: "Manzil",
			phone: "Telefon",
			email: "Email"
		},
		footer: {
			copy: "Grand Art Premium Hotel · Art Hotels Group",
			rights: "To‘g‘ridan-to‘g‘ri bron. Eng yaxshi tarif.",
			soundOn: "Ovoz yoqilgan",
			soundOff: "Ovoz o‘chirilgan"
		},
		sound: {
			on: "Ovoz",
			off: "Jimsiz"
		},
		waStay: (p) => `Assalomu alaykum, Grand Art Premium Hotel. Band qilmoqchiman:\nIsm: ${p.name}\nXona: ${p.room}\nKirish: ${p.checkIn}\nChiqish: ${p.checkOut}\nMehmonlar: ${p.guests}\nTaxmin: ${p.total}\n${p.notes ? "Izoh: " + p.notes : ""}`
	}
};
var ctx = null;
var ambientNodes = null;
var enabled = false;
function audioContext() {
	if (typeof window === "undefined") return null;
	const AC = window.AudioContext || window.webkitAudioContext;
	if (!AC) return null;
	if (!ctx) ctx = new AC();
	if (ctx.state === "suspended") ctx.resume();
	return ctx;
}
function setSoundEnabled(on) {
	enabled = on;
	if (on) startAmbient();
	else stopAmbient();
}
function tone(c, freq, type, start, dur, gain = .04) {
	const o = c.createOscillator();
	const g = c.createGain();
	o.type = type;
	o.frequency.setValueAtTime(freq, start);
	g.gain.setValueAtTime(gain, start);
	g.gain.exponentialRampToValueAtTime(1e-4, start + dur);
	o.connect(g).connect(c.destination);
	o.start(start);
	o.stop(start + dur + .02);
}
function playClick() {
	if (!enabled) return;
	const c = audioContext();
	if (!c) return;
	tone(c, 740, "triangle", c.currentTime, .07, .03);
}
function playHover() {
	if (!enabled) return;
	const c = audioContext();
	if (!c) return;
	tone(c, 520, "sine", c.currentTime, .05, .012);
}
function playSuccess() {
	if (!enabled) return;
	const c = audioContext();
	if (!c) return;
	const t = c.currentTime;
	tone(c, 523.25, "sine", t, .18, .05);
	tone(c, 659.25, "sine", t + .1, .18, .045);
	tone(c, 783.99, "triangle", t + .2, .32, .05);
}
function startAmbient() {
	if (!enabled) return;
	const c = audioContext();
	if (!c || ambientNodes) return;
	const master = c.createGain();
	master.gain.value = .025;
	master.connect(c.destination);
	const filter = c.createBiquadFilter();
	filter.type = "lowpass";
	filter.frequency.value = 420;
	filter.connect(master);
	const o1 = c.createOscillator();
	o1.type = "sine";
	o1.frequency.value = 110;
	const o2 = c.createOscillator();
	o2.type = "sine";
	o2.frequency.value = 164.8;
	const lfo = c.createOscillator();
	lfo.frequency.value = .07;
	const lfoGain = c.createGain();
	lfoGain.gain.value = 12;
	lfo.connect(lfoGain).connect(filter.frequency);
	o1.connect(filter);
	o2.connect(filter);
	o1.start();
	o2.start();
	lfo.start();
	ambientNodes = { stop() {
		try {
			o1.stop();
			o2.stop();
			lfo.stop();
		} catch {}
		master.disconnect();
	} };
}
function stopAmbient() {
	ambientNodes?.stop();
	ambientNodes = null;
}
function detectLang() {
	if (typeof navigator === "undefined") return "uz";
	const n = navigator.language.toLowerCase();
	if (n.startsWith("ru")) return "ru";
	if (n.startsWith("uz")) return "uz";
	if (n.startsWith("en")) return "en";
	return "uz";
}
var useHotel = create((set, get) => ({
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
		} catch {}
		document.documentElement.lang = lang;
		set({ lang });
	},
	setSound: (on) => {
		setSoundEnabled(on);
		set({ sound: on });
	},
	setIntent: (intent) => set({ intent }),
	setRoomId: (roomId) => set({ roomId }),
	setField: (key, value) => set({ [key]: value }),
	setSuccess: (success) => set({ success }),
	setLightbox: (lightbox) => set({ lightbox }),
	setMenuOpen: (menuOpen) => set({ menuOpen }),
	hydrate: () => {
		let lang = detectLang();
		try {
			const stored = localStorage.getItem("ga-lang");
			if (stored === "uz" || stored === "ru" || stored === "en") lang = stored;
		} catch {}
		if (get().lang !== lang) {
			document.documentElement.lang = lang;
			set({ lang });
		}
	}
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatUzs(value, _lang) {
	return `${Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} UZS`;
}
function nightsBetween(start, end) {
	if (!start || !end) return 0;
	const a = /* @__PURE__ */ new Date(start + "T12:00:00");
	const b = /* @__PURE__ */ new Date(end + "T12:00:00");
	const days = Math.round((b.getTime() - a.getTime()) / 864e5);
	return Math.max(0, days);
}
function todayISO(offset = 0) {
	const d = /* @__PURE__ */ new Date();
	d.setDate(d.getDate() + offset);
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function waLink(phone, text) {
	return `https://wa.me/${phone.replace(/[^\d]/g, "")}?text=${encodeURIComponent(text)}`;
}
var amenityIcons = {
	wifi: Wifi,
	breakfast: Coffee,
	parking: SquareParking,
	pool: Waves,
	ac: AirVent,
	shuttle: Plane,
	restaurant: UtensilsCrossed,
	gym: Dumbbell,
	sauna: Bath,
	desk24: ConciergeBell,
	conference: Presentation,
	accessible: Accessibility
};
function useCopy() {
	return copy[useHotel((s) => s.lang)];
}
function CourtyardMount() {
	const [Scene, setScene] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let live = true;
		import("./Scene3D-Da54OWZm.mjs").then((m) => {
			if (live) setScene(() => m.default);
		}).catch(() => {});
		return () => {
			live = false;
		};
	}, []);
	if (!Scene) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/hotel/courtyard.jpg",
		alt: "",
		className: "h-full w-full object-cover"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, {});
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
		["#location", t.nav.location]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-baseline gap-2",
					onMouseEnter: playHover,
					onClick: playClick,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl tracking-tight text-cream sm:text-2xl",
						children: "Grand"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl italic text-burgundy sm:text-2xl",
						children: "Art"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 text-sm text-stone md:flex",
					children: links.map(([href, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						className: "transition-colors duration-150 hover:text-cream",
						onMouseEnter: playHover,
						children: label
					}, href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex rounded-full border border-line p-0.5",
							children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									playClick();
									setLang(l.id);
								},
								className: cn("min-h-9 rounded-full px-2.5 text-xs tracking-wide transition-colors duration-150", lang === l.id ? "bg-cream text-ink" : "text-stone hover:text-cream"),
								"aria-pressed": lang === l.id,
								children: l.label
							}, l.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": sound ? t.sound.on : t.sound.off,
							onClick: () => {
								setSound(!sound);
								if (!sound) playClick();
							},
							className: "grid size-10 place-items-center rounded-full border border-line text-cream transition-transform duration-150 active:scale-[0.96]",
							children: sound ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#book",
							onClick: playClick,
							className: "hidden min-h-10 items-center rounded-full bg-burgundy px-4 text-sm font-medium text-cream transition-colors duration-150 hover:bg-burgundy-2 sm:inline-flex",
							children: t.nav.book
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-10 place-items-center rounded-full border border-line md:hidden",
							onClick: () => setMenuOpen(!menuOpen),
							"aria-label": "Menu",
							children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
						})
					]
				})
			]
		}), menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line bg-ink px-4 py-4 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [links.map(([href, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href,
					className: "min-h-11 rounded-md px-2 py-2 text-cream",
					onClick: () => setMenuOpen(false),
					children: label
				}, href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#book",
					className: "min-h-11 rounded-md bg-burgundy px-3 py-2 text-center text-cream",
					onClick: () => setMenuOpen(false),
					children: t.nav.book
				})]
			})
		}) : null]
	});
}
function BookingForm() {
	const t = useCopy();
	const lang = useHotel((s) => s.lang);
	const s = useHotel();
	const room = ROOMS.find((r) => r.id === s.roomId) ?? ROOMS[0];
	const nights = nightsBetween(s.checkIn, s.checkOut);
	const total = nights * room.price + (s.transfer ? 32e4 : 0);
	const roomName = t.rooms[room.id].name;
	const [error, setError] = (0, import_react.useState)("");
	function onSubmit(e) {
		e.preventDefault();
		if (!s.name.trim() || !s.phone.trim() || !s.checkIn || !s.checkOut) {
			playClick();
			setError(t.booking.error);
			return;
		}
		setError("");
		const text = copy[lang].waStay({
			name: s.name,
			room: roomName,
			checkIn: s.checkIn,
			checkOut: s.checkOut,
			guests: String(s.guests),
			total: formatUzs(total || room.price, lang),
			notes: [
				s.notes,
				s.transfer ? "Transfer: yes" : "",
				s.intent !== "stay" ? `Intent: ${s.intent}` : ""
			].filter(Boolean).join(" · ")
		});
		try {
			const payload = {
				at: (/* @__PURE__ */ new Date()).toISOString(),
				name: s.name,
				phone: s.phone,
				email: s.email,
				room: s.roomId,
				checkIn: s.checkIn,
				checkOut: s.checkOut,
				guests: s.guests,
				transfer: s.transfer,
				intent: s.intent
			};
			const prev = JSON.parse(localStorage.getItem("ga-requests") || "[]");
			localStorage.setItem("ga-requests", JSON.stringify([payload, ...prev].slice(0, 20)));
		} catch {}
		playSuccess();
		s.setSuccess(true);
		window.open(waLink(HOTEL.whatsapp, text), "_blank", "noopener,noreferrer");
	}
	const field = "min-h-11 w-full rounded-md border border-line bg-ink-2 px-3 text-sm text-cream outline-none transition-[box-shadow] duration-150 placeholder:text-muted focus:shadow-[0_0_0_1px_#c4b5a0]";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-3 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-xs text-muted",
				children: [t.booking.checkIn, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "date",
					required: true,
					min: todayISO(),
					value: s.checkIn,
					onChange: (e) => s.setField("checkIn", e.target.value),
					className: field
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-xs text-muted",
				children: [t.booking.checkOut, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "date",
					required: true,
					min: s.checkIn || todayISO(1),
					value: s.checkOut,
					onChange: (e) => s.setField("checkOut", e.target.value),
					className: field
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-xs text-muted",
				children: [t.booking.room, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: s.roomId,
					onChange: (e) => s.setRoomId(e.target.value),
					className: field,
					children: ROOMS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
						value: r.id,
						children: [
							t.rooms[r.id].name,
							" · ",
							formatUzs(r.price, lang)
						]
					}, r.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-xs text-muted",
				children: [t.booking.guests, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: s.guests,
					onChange: (e) => s.setField("guests", Number(e.target.value)),
					className: field,
					children: [
						1,
						2,
						3,
						4,
						5
					].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: n,
						children: t.booking.guestsN(n)
					}, n))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-xs text-muted sm:col-span-2",
				children: [t.booking.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					value: s.name,
					onChange: (e) => s.setField("name", e.target.value),
					className: field,
					autoComplete: "name"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-xs text-muted",
				children: [t.booking.phone, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					value: s.phone,
					onChange: (e) => s.setField("phone", e.target.value),
					className: field,
					inputMode: "tel",
					autoComplete: "tel",
					placeholder: "+998"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-xs text-muted",
				children: [t.booking.email, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "email",
					value: s.email,
					onChange: (e) => s.setField("email", e.target.value),
					className: field,
					autoComplete: "email"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-xs text-muted sm:col-span-2",
				children: [t.booking.notes, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: s.notes,
					onChange: (e) => s.setField("notes", e.target.value),
					rows: 3,
					className: cn(field, "min-h-20 py-2")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex min-h-11 items-center gap-3 text-sm text-cream sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: s.transfer,
					onChange: (e) => s.setField("transfer", e.target.checked),
					className: "size-4 accent-burgundy"
				}), t.booking.transfer]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: t.booking.total
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-display text-2xl font-medium tabular-nums text-cream",
							children: formatUzs(total || room.price, lang)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [nights > 0 ? `${nights} ${t.booking.nights} · ` : null, t.booking.included]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-burgundy",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "min-h-12 rounded-full bg-burgundy text-sm font-medium text-cream transition-transform duration-150 hover:bg-burgundy-2 active:scale-[0.96]",
						children: t.booking.submit
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: HOTEL.phoneHref,
							className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line text-sm text-cream",
							onClick: playClick,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), t.booking.call]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: waLink(HOTEL.whatsapp, "Hello Grand Art Premium Hotel"),
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line text-sm text-cream",
							onClick: playClick,
							children: [t.booking.whatsapp, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						})]
					})
				]
			})
		]
	});
}
function HotelHome() {
	const t = useCopy();
	const lang = useHotel((s) => s.lang);
	const hydrate = useHotel((s) => s.hydrate);
	const setRoomId = useHotel((s) => s.setRoomId);
	const lightbox = useHotel((s) => s.lightbox);
	const setLightbox = useHotel((s) => s.setLightbox);
	const success = useHotel((s) => s.success);
	const setSuccess = useHotel((s) => s.setSuccess);
	const [filter, setFilter] = (0, import_react.useState)("all");
	(0, import_react.useEffect)(() => {
		hydrate();
		const store = useHotel.getState();
		if (!store.checkIn) store.setField("checkIn", todayISO());
		if (!store.checkOut) store.setField("checkOut", todayISO(1));
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if (lightbox === null) return;
			if (e.key === "Escape") setLightbox(null);
			if (e.key === "ArrowRight") setLightbox((lightbox + 1) % GALLERY.length);
			if (e.key === "ArrowLeft") setLightbox((lightbox - 1 + GALLERY.length) % GALLERY.length);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [lightbox, setLightbox]);
	const gallery = (0, import_react.useMemo)(() => {
		if (filter === "rooms") return GALLERY.filter((g) => [
			"deluxe",
			"twin",
			"suite",
			"bath"
		].includes(g.id));
		if (filter === "house") return GALLERY.filter((g) => [
			"facade",
			"yard-real",
			"yard",
			"pool",
			"reception",
			"conf"
		].includes(g.id));
		if (filter === "dining") return GALLERY.filter((g) => g.id === "breakfast");
		return GALLERY;
	}, [filter]);
	const addr = HOTEL.address[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "relative bg-ink text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify({
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
						addressCountry: "UZ"
					},
					starRating: {
						"@type": "Rating",
						ratingValue: "3"
					},
					aggregateRating: {
						"@type": "AggregateRating",
						ratingValue: HOTEL.rating,
						reviewCount: HOTEL.reviewCount
					},
					priceRange: "UZS 550000+",
					amenityFeature: AMENITY_KEYS.map((name) => ({
						"@type": "LocationFeatureSpecification",
						name
					})),
					checkinTime: "14:00",
					checkoutTime: "12:00"
				}) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grain",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[100dvh] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						className: "absolute inset-0 h-full w-full object-cover",
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						poster: "/hotel/facade.jpg",
						preload: "metadata",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: "/hotel/hero.mp4",
							type: "video/mp4"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/25" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-4 pb-28 pt-28 sm:px-6 sm:pb-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "reveal text-xs tracking-[0.28em] text-stone uppercase",
								children: t.hero.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "reveal reveal-d1 mt-4 font-display text-[18vw] leading-[0.85] tracking-tight sm:text-8xl md:text-9xl",
								children: [
									t.hero.titleA,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "text-burgundy not-italic sm:italic",
										children: t.hero.titleB
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[0.55em] text-cream-2",
										children: t.hero.titleC
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "reveal reveal-d2 mt-6 max-w-xl text-base text-cream-2 sm:text-lg",
								children: t.hero.lead
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "reveal reveal-d3 mt-8 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#book",
									onClick: playClick,
									className: "inline-flex min-h-12 items-center rounded-full bg-burgundy px-6 text-sm font-medium text-cream transition-transform duration-150 hover:bg-burgundy-2 active:scale-[0.96]",
									children: t.hero.cta
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#tour",
									onClick: playClick,
									className: "inline-flex min-h-12 items-center rounded-full border border-line-strong px-6 text-sm text-cream",
									children: t.hero.cta2
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "reveal reveal-d4 mt-8 text-sm text-stone",
								children: [
									t.hero.from,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums text-cream",
										children: formatUzs(55e4, lang)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block max-w-md text-muted",
										children: t.hero.vs
									})
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden border-y border-line py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "marquee text-xs tracking-[0.22em] text-stone uppercase",
					children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex gap-10",
						children: t.hero.ticker.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item }, item))
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "rooms",
				className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.22em] text-burgundy uppercase",
						children: t.rooms.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-2xl font-display text-4xl sm:text-6xl",
						children: t.rooms.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-stone",
						children: t.rooms.lead
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-5 md:grid-cols-2",
						children: ROOMS.map((room, i) => {
							const copyRoom = t.rooms[room.id];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: cn("overflow-hidden rounded-xl bg-ink-2 shadow-[var(--shadow-lift)]", i === 0 ? "md:col-span-2 md:grid md:grid-cols-2" : ""),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: room.image,
									alt: copyRoom.name,
									className: "h-64 w-full object-cover md:h-full"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col justify-between p-6 sm:p-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl",
											children: copyRoom.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-stone",
											children: copyRoom.desc
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-xs text-muted",
											children: t.rooms.includes
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex items-end justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-3xl tabular-nums",
											children: formatUzs(room.price, lang)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted",
											children: t.rooms.perNight
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#book",
											onClick: () => {
												playClick();
												setRoomId(room.id);
											},
											className: "inline-flex min-h-11 items-center rounded-full bg-cream px-5 text-sm font-medium text-ink transition-transform duration-150 active:scale-[0.96]",
											children: t.rooms.select
										})]
									})]
								})]
							}, room.id);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-line bg-ink-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.22em] text-burgundy uppercase",
							children: t.amen.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl sm:text-5xl",
							children: t.amen.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
							children: AMENITY_KEYS.map((key) => {
								const Icon = amenityIcons[key];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex min-h-20 items-center gap-3 rounded-lg border border-line px-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-4 shrink-0 text-burgundy",
										strokeWidth: 1.6
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-cream-2",
										children: t.amen[key]
									})]
								}, key);
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "tour",
				className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.22em] text-burgundy uppercase",
							children: t.tour.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl sm:text-5xl",
							children: t.tour.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-stone",
							children: t.tour.lead
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: t.tour.hint
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 h-[420px] overflow-hidden rounded-xl bg-ink-3 sm:h-[520px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourtyardMount, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "gallery",
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.22em] text-burgundy uppercase",
						children: t.gallery.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl sm:text-5xl",
						children: t.gallery.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: [
							"all",
							"rooms",
							"house",
							"dining"
						].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								playClick();
								setFilter(id);
							},
							className: cn("min-h-10 rounded-full px-4 text-sm", filter === id ? "bg-cream text-ink" : "border border-line text-stone"),
							children: t.gallery[id]
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "gallery-grid mt-8",
						children: gallery.map((item) => {
							const idx = GALLERY.findIndex((g) => g.src === item.src);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
								className: "overflow-hidden rounded-lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "block h-full w-full",
									onClick: () => {
										playClick();
										setLightbox(idx);
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.src,
										alt: "",
										className: "h-56 w-full object-cover transition-transform duration-500 hover:scale-[1.03] sm:h-64"
									})
								})
							}, item.src + item.id);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						className: "absolute inset-0 h-full w-full object-cover opacity-50",
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						poster: "/hotel/courtyard.jpg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: "/hotel/courtyard.mp4",
							type: "video/mp4"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto grid max-w-6xl gap-10 px-4 py-24 sm:grid-cols-2 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.22em] text-burgundy uppercase",
								children: t.dining.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-4xl sm:text-5xl",
								children: t.dining.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-cream-2",
								children: t.dining.lead
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.22em] text-burgundy uppercase",
								children: t.events.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-4xl sm:text-5xl",
								children: t.events.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-cream-2",
								children: t.events.lead
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#book",
								onClick: playClick,
								className: "mt-6 inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 text-sm",
								children: t.events.cta
							})
						] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.22em] text-burgundy uppercase",
						children: t.reviews.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl sm:text-5xl",
							children: t.reviews.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-sm text-stone",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-burgundy text-burgundy" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-cream",
									children: HOTEL.rating
								}),
								"· ",
								HOTEL.reviewCount,
								" · ",
								t.reviews.rating
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 md:grid-cols-2",
						children: t.reviews.items.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "rounded-xl border border-line p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-cream-2",
								children: r.text
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
								className: "mt-4 text-sm text-muted",
								children: [
									r.name,
									" · ",
									r.from
								]
							})]
						}, r.name))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "location",
				className: "border-y border-line bg-ink-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-2 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.22em] text-burgundy uppercase",
							children: t.location.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl sm:text-5xl",
							children: t.location.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-stone",
							children: t.location.lead
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 space-y-2 text-sm text-cream-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-burgundy" }),
										" ",
										addr
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-4 text-burgundy" }),
										" ",
										t.location.metro
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t.location.airport }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t.location.station })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: t.location.nearby.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-line px-3 py-1.5 text-xs text-stone",
								children: n
							}, n))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: HOTEL.directions,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-cream px-5 text-sm font-medium text-ink",
							children: [t.location.directions, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs text-muted",
							children: [
								t.location.plus,
								": ",
								HOTEL.plusCode
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "map",
							src: HOTEL.mapsEmbed,
							className: "h-[360px] w-full border-0 grayscale contrast-125 sm:h-full min-h-[360px]",
							loading: "lazy"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.22em] text-burgundy uppercase",
						children: t.transfer.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl sm:text-5xl",
						children: t.transfer.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-stone",
						children: t.transfer.lead
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
						children: TRANSFERS.map((tr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-line p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl",
									children: tr.car
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm text-muted",
									children: [
										t.transfer.pax,
										" ",
										tr.pax
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 font-display text-3xl tabular-nums",
									children: ["$", tr.usd]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: t.transfer.usd
								})
							]
						}, tr.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "book",
				className: "border-t border-line bg-ink-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.22em] text-burgundy uppercase",
							children: t.contact.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl sm:text-5xl",
							children: t.booking.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-stone",
							children: t.booking.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs text-muted",
									children: t.contact.address
								}), addr] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs text-muted",
									children: t.contact.phone
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: HOTEL.phoneHref,
									className: "text-cream underline-offset-4 hover:underline",
									children: HOTEL.phone
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs text-muted",
									children: t.contact.hours
								}), "14:00 — 12:00"] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/hotel/reception.jpg",
							alt: "",
							className: "mt-8 hidden h-56 w-full rounded-xl object-cover lg:block"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-line bg-ink p-5 sm:p-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, {})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line pb-24 sm:pb-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.footer.copy }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.footer.rights })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#book",
				onClick: playClick,
				className: "fixed bottom-4 left-4 right-4 z-40 flex min-h-12 items-center justify-between rounded-full bg-burgundy px-5 text-sm font-medium text-cream shadow-[var(--shadow-lift)] sm:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.nav.book }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums",
					children: formatUzs(55e4, lang)
				})]
			}),
			lightbox !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-[60] flex items-center justify-center bg-ink/92 p-4",
				onClick: () => setLightbox(null),
				role: "dialog",
				"aria-modal": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-line text-cream",
						onClick: () => setLightbox(null),
						"aria-label": t.gallery.close,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "absolute left-3 grid size-11 place-items-center rounded-full border border-line text-cream sm:left-6",
						onClick: (e) => {
							e.stopPropagation();
							setLightbox((lightbox - 1 + GALLERY.length) % GALLERY.length);
						},
						"aria-label": "prev",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: GALLERY[lightbox].src,
						alt: "",
						className: "max-h-[82dvh] max-w-full rounded-lg object-contain",
						onClick: (e) => e.stopPropagation()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "absolute right-3 grid size-11 place-items-center rounded-full border border-line text-cream sm:right-6",
						onClick: (e) => {
							e.stopPropagation();
							setLightbox((lightbox + 1) % GALLERY.length);
						},
						"aria-label": "next",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
					})
				]
			}) : null,
			success ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-[70] grid place-items-center bg-ink/80 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md rounded-xl border border-line bg-ink-2 p-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl",
							children: t.booking.successTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-stone",
							children: t.booking.successBody
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "mt-6 min-h-11 rounded-full bg-cream px-6 text-sm font-medium text-ink",
							onClick: () => setSuccess(false),
							children: t.booking.close
						})
					]
				})
			}) : null
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HotelHome, {});
}
//#endregion
export { Home as component, routes_cr_yQEoe_exports as t };
