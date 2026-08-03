import { LOCATION_HERO_IMAGE, SITE_URL } from './sitePages';

export const KONDAPUR_PAGE = {
  path: '/locations/kondapur/',
  title: 'PG near Kondapur, Hyderabad - 10 Min Away | Narenn Living',
  description:
    'Premium PG & co-living 8-10 minutes from Kondapur. AC rooms with food, WiFi & housekeeping in Madhapur VIP Hills. Book a free visit today.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage: LOCATION_HERO_IMAGE,
};

export const KONDAPUR_IMAGES = {
  hero: {
    src: LOCATION_HERO_IMAGE,
    fallback: LOCATION_HERO_IMAGE,
    alt: 'PG near Kondapur, Hyderabad - Narenn Living VIP Hills, Madhapur',
    title: 'PG near Kondapur',
  },
  commute: {
    src: `${SITE_URL}/images/kondapur-commute-from-madhapur-vip-hills.jpg`,
    fallback:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1784114731/image-03-2_ze1iph.webp',
    alt: 'Short commute from Narenn Living Madhapur to Kondapur and Botanical Garden Road',
    title: 'Kondapur commute',
  },
  room: {
    src: `${SITE_URL}/images/furnished-pg-room-near-kondapur-hyderabad.jpg`,
    fallback:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121459/Narenn-Elite-3-1200x750_ndmzod.webp',
    alt: 'Furnished AC room at a PG near Kondapur, Hyderabad',
    title: 'Kondapur professional room',
  },
  landmarks: {
    src: `${SITE_URL}/images/botanical-garden-kondapur-near-narenn-living.jpg`,
    fallback:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121459/Narenn-Elite-6-1200x750_h0uzb7.webp',
    alt: 'Botanical Garden Road and Kondapur landmarks near Narenn Living Madhapur',
    title: 'Kondapur landmarks',
  },
};

export const KONDAPUR_HERO = {
  eyebrow: 'VIP Hills - Madhapur',
  h1: 'PG near Kondapur',
  h1Accent: 'Comfort Minutes from Home and Office',
  lead:
    'Fully furnished AC rooms, four meals and fast WiFi - just 8-10 minutes from Kondapur’s offices, clinics and Botanical Garden Road.',
};

export const KONDAPUR_INTRO = [
  'Kondapur sits between Hitech City and Gachibowli - a stretch of Botanical Garden Road, Kothaguda Junction and mid-rise IT campuses where product teams, hospitals and coaching institutes share the same corridor. A PG near Kondapur at Narenn Living puts you 8-10 minutes from that stretch, from our base in VIP Hills, Madhapur: a furnished AC room, four home-style meals, fibre WiFi and daily housekeeping, without living inside Kondapur’s denser residential blocks.',
  'If your week is split between Ascendas, client sites off Botanical Garden Road and the odd meeting in Hitech City, this is the address that keeps every hop short.',
];

export const KONDAPUR_COMMUTE = {
  eyebrow: 'Minutes Away',
  h2: 'How Close You Are to Kondapur',
  h2Accent: 'to Kondapur',
  intro:
    'From VIP Hills, these are the Kondapur-side places our residents actually ride to - not midnight Google Maps times:',
  items: [
    { place: 'Botanical Garden Road (Kondapur)', time: 'about 8-10 minutes', short: '8-10m' },
    { place: 'Kothaguda Junction', time: 'around 10-12 minutes', short: '10-12m' },
    { place: 'Ascendas IT Park', time: 'roughly 10-12 minutes', short: '10-12m' },
    { place: 'AIG Hospitals / Kondapur clinics', time: 'about 10-12 minutes', short: '10-12m' },
    { place: 'Hafeezpet', time: 'around 12-15 minutes', short: '12-15m' },
    { place: 'Hitech City / Cyber Towers', time: 'about 5-8 minutes', short: '5-8m' },
    { place: 'Inorbit Mall', time: 'under 10 minutes', short: '10m' },
  ],
};

export const KONDAPUR_WHY = {
  eyebrow: 'Better Base',
  h2: 'Why Base in Madhapur Instead of Inside Kondapur',
  h2Accent: 'Inside Kondapur',
  paragraphs: [
    'Living inside Kondapur sounds convenient until you add up what most standalone PGs there actually offer: older apartment stock, shared kitchens that shut early, WiFi that drops on VPN calls, and landlords who treat food as an afterthought. Rents sit high for the square footage, deposits stick, and you still end up cabbing to Hitech City for half your meetings.',
    'Narenn Living in VIP Hills flips that trade. You stay 8-10 minutes from Kondapur’s main stretch, keep a true Madhapur lifestyle - cafes, malls, metro links - and one all-inclusive fee covers room, meals, housekeeping and security. Read our',
  ],
  madhapurLink: { to: '/locations/madhapur/', label: 'PG in Madhapur' },
  mid: 'guide, and if your office drifts toward Cyber Towers more than Botanical Garden Road, our',
  siblingLink: { to: '/locations/hitech-city/', label: 'PG near Hitech City' },
  trail: 'page shows how short that hop already is from the same home.',
};

export const KONDAPUR_STANDARD = {
  eyebrow: 'The Narenn Standard',
  h2: 'Rooms, Food, WiFi and Everything Handled',
  h2Accent: 'Everything Handled',
  body: 'Every Narenn room is furnished with an AC, a proper desk and chair, and storage that survives a year of IT life. Four home-style meals come from our kitchen - not a dabba that arrives cold. Fibre WiFi is provisioned for video calls and VPNs; daily housekeeping and laundry support keep the week running; biometric access with no curfew fits Kondapur shift patterns and late client calls. Explore our',
  roomsLink: { to: '/rooms/', label: 'room options' },
  mid: 'and full',
  amenitiesLink: { to: '/amenities/', label: 'amenities' },
  trail: 'list to see exactly what sits inside the monthly fee.',
};

export const KONDAPUR_AUDIENCE = {
  eyebrow: 'Who It Fits',
  h2: 'Who Benefits Most from a PG near Kondapur',
  h2Accent: 'near Kondapur',
  intro:
    'This location is not for everyone in western Hyderabad - it is for people whose week actually orbits Kondapur and the Madhapur-Hitech seam:',
  bullets: [
    'Engineers and analysts at Ascendas and nearby Kondapur campuses',
    'Consultants who bounce between Botanical Garden Road clients and Hitech City',
    'Healthcare and support staff around AIG and Kondapur clinic clusters',
    'Freshers who want a managed home before they learn Hyderabad’s traffic',
    'Students and coaching-bound residents who need quiet rooms and fixed meals',
  ],
  bodyBefore: 'If your role is pure IT corridor living, start with our',
  itLink: { to: '/coliving-for-it-professionals/', label: 'co-living for IT professionals' },
  bodyMid: 'page. If parents are choosing for a student, see',
  studentsLink: { to: '/pg-for-students/', label: 'PG for students' },
  bodyAfter: '- same VIP Hills base, different priorities.',
};

export const KONDAPUR_BOOK = {
  eyebrow: 'See It Yourself',
  h2: 'Book Your Visit',
  body: 'Kondapur-side rooms at Narenn move quickly around month-end and joining seasons. Call 70759 85666 or book a visit now, and we will hold a room against your start date rather than leaving you to scramble in a hotel the week you land. Availability near Botanical Garden Road does not wait.',
};

export const KONDAPUR_PROPERTIES = {
  eyebrow: 'VIP Hills',
  h2: 'Our Properties',
  h2Accent: 'Properties',
  body: 'All four Narenn Living properties - Narenn Elite, Narenn Crown, Narenn Pinnacle and Narenn Supreme - are in VIP Hills, Madhapur, 8-10 minutes from Kondapur.',
  streetAddress: 'VIP Hills, Road 21, Silicon Valley, Madhapur',
  locality: 'Hyderabad',
  region: 'Telangana',
  postalCode: '500084',
};

export const KONDAPUR_FAQ_HEADING = {
  eyebrow: 'FAQ',
  h2: 'Frequently Asked Questions',
  h2Accent: 'Questions',
};

export const KONDAPUR_FAQS = [
  {
    question: 'How far is Narenn Living from Kondapur?',
    answer:
      'Our VIP Hills base in Madhapur is about 8-10 minutes from Botanical Garden Road and central Kondapur, with Kothaguda and Ascendas typically 10-12 minutes depending on traffic.',
  },
  {
    question: 'Is a PG near Kondapur at Narenn better than living inside Kondapur?',
    answer:
      'For most professionals, yes. You keep an 8-10 minute commute to Kondapur while getting managed meals, fibre WiFi, housekeeping and a stronger Madhapur lifestyle - without older apartment PG stock or high flat deposits.',
  },
  {
    question: 'What is included if I choose a PG near Kondapur with Narenn Living?',
    answer:
      'A furnished AC room, four home-style meals a day, high-speed WiFi, daily housekeeping, laundry support, biometric security and community amenities - all in one monthly fee.',
  },
];

export const KONDAPUR_FINAL_CTA = {
  title: 'Ready for an',
  titleAccent: '8-10 Minute Commute?',
  description:
    'Call 70759 85666 or WhatsApp us to schedule a free visit. We will show you the room, the kitchen and how quick Kondapur feels from VIP Hills.',
};
