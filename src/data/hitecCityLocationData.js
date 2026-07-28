import { SITE_URL } from './sitePages';

export const HITEC_CITY_PAGE = {
  path: '/locations/hitec-city/',
  title: 'PG near Hitec City, Hyderabad | Co-Living 5 Min Away',
  description:
    'Premium PG & co-living 5–7 minutes from Hitec City. AC rooms, four meals, WiFi & housekeeping from VIP Hills Madhapur. Book your free visit today.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage: `${SITE_URL}/images/pg-near-hitec-city-hyderabad-hero.jpg`,
};

export const HITEC_CITY_IMAGES = {
  hero: {
    src: `${SITE_URL}/images/pg-near-hitec-city-hyderabad-hero.jpg`,
    fallback:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp',
    alt: 'PG near Hitec City, Hyderabad — Narenn Living VIP Hills, Madhapur',
    title: 'PG near Hitec City',
  },
  commute: {
    src: `${SITE_URL}/images/hitec-city-metro-commute-from-madhapur.jpg`,
    fallback:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1784114731/image-03-2_ze1iph.webp',
    alt: 'Short commute from Narenn Living Madhapur to Hitec City metro and campuses',
    title: 'Hitec City commute',
  },
  room: {
    src: `${SITE_URL}/images/furnished-pg-room-near-hitec-city-hyderabad.jpg`,
    fallback:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121459/Narenn-Elite-3-1200x750_ndmzod.webp',
    alt: 'Furnished AC room at a PG near Hitec City, Hyderabad',
    title: 'Hitec City professional room',
  },
  landmarks: {
    src: `${SITE_URL}/images/cyber-pearl-hitec-city-near-narenn-living.jpg`,
    fallback:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121459/Narenn-Elite-6-1200x750_h0uzb7.webp',
    alt: 'Cyber Pearl and Hitec City campuses near Narenn Living Madhapur',
    title: 'Hitec City landmarks',
  },
};

export const HITEC_CITY_HERO = {
  eyebrow: 'VIP Hills · Madhapur',
  h1: 'PG near Hitec City',
  h1Accent: 'Five Minutes From Your Campus Gate',
  lead:
    'Fully furnished AC rooms, four meals and fast WiFi — just 5–7 minutes from Hitec City metro, Cyber Pearl and the Silicon Valley Road campuses.',
};

export const HITEC_CITY_INTRO = [
  'Hitec City is the name most people type into Google Maps when they mean the Madhapur IT spine — the metro station, Cyber Pearl, the towers along Silicon Valley Road and the lake-side offices that define western Hyderabad’s workday. A PG near Hitec City at Narenn Living puts you 5–7 minutes from that gate, from VIP Hills, Madhapur: a furnished AC room, four home-style meals, fibre WiFi and daily housekeeping, without renting a flat in the towers that crowd the station exit.',
  'If your badge is scanned somewhere between Hitec City metro and Cyber Pearl, this is the commute that feels like a neighbourhood hop, not a corridor crawl.',
];

export const HITEC_CITY_COMMUTE = {
  eyebrow: 'Minutes Away',
  h2: 'How Close You Are to Hitec City',
  h2Accent: 'to Hitec City',
  intro:
    'These are the Hitec City landmarks our residents ride to from VIP Hills — peak-hour realism, not 11 PM map times:',
  items: [
    { place: 'Hitec City metro station', time: 'about 5–7 minutes', short: '5m' },
    { place: 'Cyber Pearl', time: 'around 5–6 minutes', short: '5m' },
    { place: 'Silicon Valley Road campuses', time: 'about 6–8 minutes', short: '6m' },
    { place: 'Durgam Cheruvu metro', time: 'under 10 minutes', short: '10m' },
    { place: 'Raheja Mindspace (Hitec edge)', time: 'around 7–10 minutes', short: '7m' },
    { place: 'Inorbit Mall', time: 'roughly 8–10 minutes', short: '8m' },
    { place: 'Raidurg metro / IKEA approach', time: 'about 12–15 minutes', short: '12m' },
  ],
};

export const HITEC_CITY_WHY = {
  eyebrow: 'Better Base',
  h2: 'Why Base in Madhapur Instead of Inside Hitec City',
  h2Accent: 'Inside Hitec City',
  paragraphs: [
    '“Living next to Hitec City” usually means a high-rise share, a broker fee, and a kitchen you never use because you are too tired after the office. Tower flats near the metro price like hospitality and still leave you cooking, cleaning and chasing WiFi. Converted PGs in the same radius often cut corners on food and sleep — the two things a Hitec City shift actually depends on.',
    'Narenn Living keeps you 5–7 minutes from Hitec City metro while you live in a purpose-run VIP Hills building: meals, housekeeping, fibre WiFi and no-curfew access in one fee. Read our',
  ],
  madhapurLink: { to: '/locations/madhapur/', label: 'PG in Madhapur' },
  mid: 'guide. If your week also pulls toward Botanical Garden Road, our',
  siblingLink: { to: '/locations/kondapur/', label: 'PG near Kondapur' },
  trail: 'page shows how that second hop stays short from the same home.',
};

export const HITEC_CITY_STANDARD = {
  eyebrow: 'The Narenn Standard',
  h2: 'Rooms, Food, WiFi and Everything Handled',
  h2Accent: 'Everything Handled',
  body: 'Hitec City days are long enough without adding chores. Every Narenn room ships with AC, a desk and chair, and storage that lasts a full joining cycle. Four meals come from our kitchen. Fibre WiFi is sized for video calls and VPNs. Housekeeping and laundry run daily. Biometric entry with no curfew fits US and EU shift patterns common around Hitec City campuses. Compare our',
  roomsLink: { to: '/rooms/', label: 'room options' },
  mid: 'and full',
  amenitiesLink: { to: '/amenities/', label: 'amenities' },
  trail: 'list before you sign anything near the metro.',
};

export const HITEC_CITY_AUDIENCE = {
  eyebrow: 'Who It Fits',
  h2: 'Who Benefits Most from a PG near Hitec City',
  h2Accent: 'near Hitec City',
  intro:
    'This page is for people whose week is literally Hitec City-shaped — not for anyone who only drives past the metro once a month:',
  bullets: [
    'Engineers and analysts whose office is a short walk from Hitec City metro',
    'Teams based in Cyber Pearl and Silicon Valley Road towers',
    'Consultants who use the Blue Line for client hops across the city',
    'Night-shift and hybrid workers who need quiet sleep and reliable WiFi',
    'Freshers joining Hitec City companies who want a held room before day one',
  ],
  bodyBefore: 'For a deeper look at shift-friendly living, read our',
  itLink: { to: '/coliving-for-it-professionals/', label: 'co-living for IT professionals' },
  bodyMid: 'guide. Students who need the same base with parent-friendly checks can start at',
  studentsLink: { to: '/pg-for-students/', label: 'PG for students' },
  bodyAfter: '.',
};

export const HITEC_CITY_BOOK = {
  eyebrow: 'See It Yourself',
  h2: 'Book Your Visit',
  body: 'Hitec City joining seasons empty VIP Hills rooms within days of month-end. Call 70759 85666 or book a visit now and we will hold a room against your start date — better than landing in a hotel and taking whatever is left near the metro.',
};

export const HITEC_CITY_PROPERTIES = {
  eyebrow: 'VIP Hills',
  h2: 'Our Properties',
  h2Accent: 'Properties',
  body: 'All four Narenn Living properties — Narenn Elite, Narenn Crown, Narenn Pinnacle and Narenn Supreme — are in VIP Hills, Madhapur, 5–7 minutes from Hitec City.',
  streetAddress: 'VIP Hills, Road 21, Silicon Valley, Madhapur',
  locality: 'Hyderabad',
  region: 'Telangana',
  postalCode: '500084',
};

export const HITEC_CITY_FAQ_HEADING = {
  eyebrow: 'FAQ',
  h2: 'Frequently Asked Questions',
  h2Accent: 'Questions',
};

export const HITEC_CITY_FAQS = [
  {
    question: 'How far is Narenn Living from Hitec City?',
    answer:
      'Our VIP Hills location in Madhapur is about 5–7 minutes from Hitec City metro, Cyber Pearl and the Silicon Valley Road campuses, depending on traffic.',
  },
  {
    question: 'Is this a good PG near Hitec City for metro and office commuters?',
    answer:
      'Yes. You stay minutes from Hitec City metro and major campuses, with fibre WiFi, quiet rooms, four meals and no-curfew access — without paying tower-flat rents at the station exit.',
  },
  {
    question: 'What is included in a PG near Hitec City at Narenn Living?',
    answer:
      'A furnished AC room, four home-style meals a day, high-speed WiFi, daily housekeeping, laundry support, biometric security and community amenities — all in one monthly fee.',
  },
];

export const HITEC_CITY_FINAL_CTA = {
  title: 'Ready for a',
  titleAccent: '5–7 Minute Commute?',
  description:
    'Call 70759 85666 or WhatsApp us to schedule a free visit. We will show you the room, the kitchen and how close Hitec City feels from VIP Hills.',
};
