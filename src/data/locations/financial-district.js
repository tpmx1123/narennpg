import { SITE_URL } from '../sitePages';

const FALLBACK =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp';

export default {
  slug: 'financial-district',
  area: 'Financial District',
  keyword: 'PG near Financial District',
  page: {
    path: '/locations/financial-district/',
    title: 'PG near Financial District, Hyderabad | Narenn Living',
    description:
      'Co-living a short commute from the Financial District. Furnished AC rooms, four meals, WiFi & housekeeping in Madhapur. Book a visit.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    ogImage: `${SITE_URL}/images/pg-near-financial-district-hyderabad-hero.jpg`,
  },
  images: {
    hero: {
      src: `${SITE_URL}/images/pg-near-financial-district-hyderabad-hero.jpg`,
      fallback: FALLBACK,
      alt: 'PG near Financial District, Hyderabad - Narenn Living VIP Hills, Madhapur',
      title: 'PG near Financial District',
    },
    commute: {
      src: `${SITE_URL}/images/financial-district-commute-from-madhapur.jpg`,
      fallback: FALLBACK,
      alt: 'Commute route from Narenn Living Madhapur to the Financial District and DLF Cyber City',
      title: 'Financial District commute',
    },
  },
  hero: {
    eyebrow: 'VIP Hills · Madhapur',
    h1: 'PG near Financial District',
    h1Accent: 'A Real Home for a Real Commute',
    lead:
      'A furnished home in VIP Hills, about 18-20 minutes from the Financial District, DLF Cyber City and Salarpuria Knowledge City.',
  },
  intro: {
    paragraphs: [
      {
        text:
          "The Financial District is still a growing address - most housing right around it is new-build gated apartments and serviced flats priced like premium rentals, with almost no established PG market to fall back on. A PG near Financial District at Narenn Living takes a different, more honest approach: a genuinely comfortable, furnished home in VIP Hills, Madhapur, about 18-20 minutes from DLF Cyber City, Salarpuria Knowledge City and the Wipro campus. You get an AC room, four home-style meals a day, fast WiFi and daily housekeeping, in an area that already has restaurants, clinics, a metro line and an actual social life outside office hours.",
      },
      {
        text:
          'For Financial District employees tired of construction dust and half-built infrastructure right around their office, that trade of twenty minutes for a proper neighbourhood is often the better deal.',
      },
    ],
  },
  commute: {
    eyebrow: 'Commute Times',
    h2: 'PG near Financial District',
    h2Accent: 'The Real Commute',
    intro: 'From Narenn Living in VIP Hills, the Financial District corridor runs like this:',
    items: [
      { place: 'Financial District main junction', time: 'about 18-20 minutes', short: '18-20m' },
      { place: 'DLF Cyber City', time: 'around 18 minutes', short: '18m' },
      { place: 'Salarpuria Sattva Knowledge City', time: 'roughly 19 minutes', short: '19m' },
      { place: 'Wipro Campus, Gachibowli', time: 'about 17-18 minutes', short: '17-18m' },
      { place: 'Indian School of Business (ISB)', time: 'around 20 minutes', short: '20m' },
      { place: 'Nanakramguda office towers', time: 'roughly 19 minutes', short: '19m' },
      { place: 'Kokapet junction', time: 'about 20-22 minutes', short: '20-22m' },
    ],
  },
  why: {
    eyebrow: 'Why Madhapur',
    h2: 'Why Base at Narenn Instead of',
    h2Accent: 'Near the Financial District',
    paragraphs: [
      "Housing directly around the Financial District is dominated by newly built gated communities and serviced apartments, priced to match a premium business address rather than a shared-living budget. There is essentially no mature PG ecosystem yet, and what does exist is often carved into unfinished buildings still surrounded by construction. Basing yourself at Narenn Living in VIP Hills instead means an established, run property with restaurants, gyms and a metro line nearby, while the Financial District itself stays inside a consistent 18-20 minute reach - a genuine commute, but one that comes with somewhere worth coming home to.",
    ],
    links: [
      { to: '/locations/madhapur/', label: 'PG in Madhapur' },
      { to: '/locations/gachibowli/', label: 'PG near Gachibowli' },
    ],
  },
  standard: {
    eyebrow: 'The Narenn Standard',
    h2: 'Rooms, Food, WiFi and',
    h2Accent: 'Daily Care',
    paragraphs: [
      'A twenty-minute commute is easier to accept when the room at the end of it is properly looked after. Every Narenn Living room is furnished and air-conditioned, our own kitchen serves four home-style meals a day, WiFi is fast enough for demanding client calls, and housekeeping and laundry run on a daily schedule handled by an on-site team. It matters more here than most places, since Financial District days tend to run long and unpredictable, and you want the basics at home to require zero thought. See our full',
    ],
    links: [
      { to: '/amenities/', label: 'amenities' },
      { to: '/rooms/', label: 'room options' },
    ],
  },
  audience: {
    eyebrow: 'Who It Fits',
    h2: 'Built for People Working Around',
    h2Accent: 'the Financial District',
    paragraphs: [
      'The Financial District is home to banks, consulting firms, global capability centres and law offices, drawing a professional crowd that is often slightly senior and used to demanding hours. Our residents commuting there value an established Madhapur base with restaurants, gyms and a social scene, over living in a still-developing pocket that empties out after office hours.',
    ],
    bullets: [
      'Banking, consulting and GCC employees at DLF Cyber City and Knowledge City',
      'Legal and finance professionals working long, unpredictable hours',
      'Analysts who want an established neighbourhood, not a construction zone',
      'Professionals who split time between the Financial District and Gachibowli',
    ],
    links: [{ to: '/coliving-for-it-professionals/', label: 'co-living for IT professionals' }],
  },
  cta: {
    eyebrow: 'Book a Visit',
    h2: 'See the Commute for',
    h2Accent: 'Yourself',
    body: 'Rooms suited to a Financial District commute are limited and go quickly, especially around joining season. Call 70759 85666 or book a visit to see the room, the food and the commute honestly before deciding.',
    link: { to: '/contact-us/', label: 'book a visit' },
  },
  faqs: [
    {
      question: 'How far is Narenn Living from the Financial District?',
      answer:
        'Our VIP Hills location is about 18-20 minutes from DLF Cyber City and the wider Financial District, a genuine but manageable daily commute.',
    },
    {
      question: 'Is there PG accommodation directly in the Financial District?',
      answer:
        'Very little established stock exists yet. Most housing there is new-build apartments, so a PG near the Financial District in Madhapur is usually the better option.',
    },
    {
      question: 'Why live in Madhapur instead of closer to the Financial District?',
      answer:
        'Madhapur already has restaurants, gyms, clinics and a metro line, while the Financial District is still developing. Twenty minutes buys a much fuller life outside work.',
    },
  ],
  maps: {
    eyebrow: 'VIP Hills',
    h2: 'Our',
    h2Accent: 'Properties',
    body: 'Four Narenn Living properties share one VIP Hills address, about 18-20 minutes from the Financial District. Same contact for all visits.',
    streetAddress: 'VIP Hills, Road 21, Silicon Valley, Madhapur',
    locality: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500084',
  },
  finalCta: {
    title: 'Ready to Move Near',
    titleAccent: 'the Financial District?',
    description: 'Call 70759 85666 to hold a room against your joining date.',
  },
};
