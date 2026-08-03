import { SITE_URL } from '../sitePages';

const FALLBACK =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp';

export default {
  slug: 'raidurg',
  area: 'Raidurg',
  keyword: 'PG near Raidurg',
  page: {
    path: '/locations/raidurg/',
    title: 'PG near Raidurg, Hyderabad | Co-Living | Narenn Living',
    description:
      'Premium PG & co-living minutes from Raidurg metro & offices. AC rooms, food, WiFi & housekeeping in VIP Hills, Madhapur. Book a visit.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    ogImage: `${SITE_URL}/images/pg-near-raidurg-hyderabad-hero.jpg`,
  },
  images: {
    hero: {
      src: `${SITE_URL}/images/pg-near-raidurg-hyderabad-hero.jpg`,
      fallback: FALLBACK,
      alt: 'PG near Raidurg, Hyderabad - Narenn Living VIP Hills, Madhapur',
      title: 'PG near Raidurg',
    },
    commute: {
      src: `${SITE_URL}/images/raidurg-commute-from-madhapur.jpg`,
      fallback: FALLBACK,
      alt: 'Commute route from Narenn Living Madhapur to Raidurg metro station and Knowledge City',
      title: 'Raidurg commute',
    },
  },
  hero: {
    eyebrow: 'VIP Hills · Madhapur',
    h1: 'PG near Raidurg',
    h1Accent: 'Metro-Close, Office-Ready',
    lead: 'A furnished home in VIP Hills, minutes from Raidurg metro station, IKEA and Knowledge City.',
  },
  intro: {
    paragraphs: [
      {
        text:
          "Raidurg grew up around the metro terminus and a cluster of large campuses, which means most nearby housing is high-rise gated communities and serviced apartments rather than an established PG market. A PG near Raidurg at Narenn Living fills that gap with a genuinely furnished, professionally managed home in VIP Hills, Madhapur, a short ride from the Raidurg metro station, IKEA Hyderabad and Knowledge City. You get an AC room, four home-style meals a day, fast WiFi and daily housekeeping, plus the added flexibility of a Blue Line metro station close by for the rest of the city.",
      },
      {
        text:
          'It suits professionals at Raidurg-area campuses who want both a short commute and metro access, without paying gated-community rent for a shared room.',
      },
    ],
  },
  commute: {
    eyebrow: 'Commute Times',
    h2: 'PG near Raidurg',
    h2Accent: 'Metro Minutes',
    intro: 'From Narenn Living in VIP Hills, Raidurg and its landmarks are a short, direct ride:',
    items: [
      { place: 'Raidurg Metro Station', time: 'about 8-9 minutes', short: '8-9m' },
      { place: 'IKEA Hyderabad', time: 'around 9-10 minutes', short: '9-10m' },
      { place: 'Knowledge City', time: 'roughly 9 minutes', short: '9m' },
      { place: 'Q City Mall', time: 'about 8 minutes', short: '8m' },
      { place: 'Wipro Circle', time: 'around 7-8 minutes', short: '7-8m' },
      { place: 'Amazon / Cognizant campuses, Knowledge City', time: 'roughly 9-10 minutes', short: '9-10m' },
      { place: 'Gachibowli ORR entry', time: 'about 10 minutes', short: '10m' },
    ],
  },
  why: {
    eyebrow: 'Why Madhapur',
    h2: 'Why Base at Narenn Instead of',
    h2Accent: 'Near Raidurg',
    paragraphs: [
      "Raidurg was built out around IT campuses and the metro line, so most of what is available nearby is large gated apartment complexes and serviced residences - fine for a family, expensive and impractical for a single working professional wanting a shared room. There is very little genuine PG stock in the immediate area. Narenn Living gives you a purpose-run alternative in VIP Hills instead: a fixed monthly fee, an in-house kitchen, and daily housekeeping, all while keeping Raidurg's metro station and offices inside a 7-10 minute reach - often quicker than navigating a large gated campus internally.",
    ],
    links: [
      { to: '/locations/madhapur/', label: 'PG in Madhapur' },
      { to: '/locations/hitech-city/', label: 'PG near Hitech City' },
    ],
  },
  standard: {
    eyebrow: 'The Narenn Standard',
    h2: 'Rooms, Food, WiFi and',
    h2Accent: 'Daily Care',
    paragraphs: [
      'Having a metro station close by is genuinely useful only if the home you return to is equally dependable. Every Narenn Living room is furnished and air-conditioned, four home-style meals are prepared daily by our own kitchen, WiFi is fast and stable for calls and streaming, and housekeeping and laundry are handled by an on-site team on a fixed schedule. Whether you commute to Raidurg by bike or take the metro from the station nearby, the room and the food are exactly where you left them. Explore our full',
    ],
    links: [
      { to: '/amenities/', label: 'amenities' },
      { to: '/rooms/', label: 'room options' },
    ],
  },
  audience: {
    eyebrow: 'Who It Fits',
    h2: 'Built for People Working Around',
    h2Accent: 'Raidurg',
    paragraphs: [
      'Raidurg is anchored by large technology and e-commerce campuses in and around Knowledge City, plus retail landmarks like IKEA and Q City that draw weekend footfall too. Our residents commuting here are mostly campus employees who value the metro as a backup option and want a shared home that does not require living inside a gated high-rise budget.',
    ],
    bullets: [
      'Employees at Knowledge City technology and e-commerce campuses',
      'Metro commuters using the Raidurg Blue Line terminus regularly',
      'Retail and hospitality staff at IKEA and Q City Mall',
      'Professionals who want campus proximity without gated-apartment costs',
    ],
    links: [{ to: '/coliving-for-it-professionals/', label: 'co-living for IT professionals' }],
  },
  cta: {
    eyebrow: 'Book a Visit',
    h2: 'See the Commute for',
    h2Accent: 'Yourself',
    body: 'Rooms with quick Raidurg and metro access are limited and go early each cycle. Call 70759 85666 or book a visit to see the room, the food and the ride to Raidurg for yourself.',
    link: { to: '/contact-us/', label: 'book a visit' },
  },
  faqs: [
    {
      question: 'How far is Narenn Living from Raidurg?',
      answer:
        'Our VIP Hills location is about 7-10 minutes from the Raidurg metro station, IKEA Hyderabad and Knowledge City, an easy daily ride.',
    },
    {
      question: 'Can I use the Raidurg metro from Narenn Living?',
      answer:
        'Yes, the Raidurg Blue Line terminus is around 8-9 minutes away, giving you a useful backup option for onward travel across the city.',
    },
    {
      question: 'Is there PG accommodation right at Raidurg?',
      answer:
        'Very little - the area is mostly gated apartments and serviced residences. Narenn Living in VIP Hills is the closest well-run PG alternative.',
    },
  ],
  maps: {
    eyebrow: 'VIP Hills',
    h2: 'Our',
    h2Accent: 'Properties',
    body: 'Four Narenn Living properties share one VIP Hills address, minutes from Raidurg metro and offices. Same contact for all visits.',
    streetAddress: 'VIP Hills, Road 21, Silicon Valley, Madhapur',
    locality: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500084',
  },
  finalCta: {
    title: 'Ready to Move Near',
    titleAccent: 'Raidurg?',
    description: 'Call 70759 85666 to hold a room against your joining date.',
  },
};
