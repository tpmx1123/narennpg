import { LOCATION_HERO_IMAGE, SITE_URL } from '../sitePages';

const FALLBACK =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp';

export default {
  slug: 'jubilee-hills',
  area: 'Jubilee Hills',
  keyword: 'PG near Jubilee Hills',
  page: {
    path: '/locations/jubilee-hills/',
    title: 'PG near Jubilee Hills, Hyderabad | Narenn Living',
    description:
      'Premium co-living 15 minutes from Jubilee Hills. AC rooms, homely food, WiFi & housekeeping in one monthly fee. Book a free visit.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    ogImage: LOCATION_HERO_IMAGE,
  },
  images: {
    hero: {
      src: LOCATION_HERO_IMAGE,
      fallback: LOCATION_HERO_IMAGE,
      alt: 'PG near Jubilee Hills, Hyderabad - Narenn Living VIP Hills, Madhapur',
      title: 'PG near Jubilee Hills',
    },
    commute: {
      src: `${SITE_URL}/images/jubilee-hills-commute-from-madhapur.jpg`,
      fallback: FALLBACK,
      alt: 'Commute route from Narenn Living Madhapur to Jubilee Hills Check Post and Road No. 36',
      title: 'Jubilee Hills commute',
    },
  },
  hero: {
    eyebrow: 'VIP Hills · Madhapur',
    h1: 'PG near Jubilee Hills',
    h1Accent: 'A Real Home, Fifteen Minutes Out',
    lead:
      'A fully managed room in VIP Hills, about 15 minutes from Jubilee Hills Check Post, Road No. 36 and Film Nagar.',
  },
  intro: {
    paragraphs: [
      {
        text:
          "Jubilee Hills is one of Hyderabad's most expensive residential addresses, built around private bungalows, celebrity homes and luxury apartments - there is effectively no PG or co-living market inside it. A PG near Jubilee Hills at Narenn Living solves this the sensible way: a comfortable, furnished home in VIP Hills, Madhapur, about 15 minutes from the Check Post, Road No. 36 and Film Nagar. You get an AC room, three home-style meals a day, fast WiFi and daily housekeeping for a fraction of what any shared arrangement inside Jubilee Hills would realistically cost, if you could even find one.",
      },
      {
        text:
          "For people working at offices, studios or clinics around Jubilee Hills, this is the closest thing to genuinely affordable, professionally managed shared housing near the area.",
      },
    ],
  },
  commute: {
    eyebrow: 'Commute Times',
    h2: 'PG near Jubilee Hills',
    h2Accent: 'The Commute',
    intro: 'From Narenn Living in VIP Hills, the main Jubilee Hills landmarks sit at a steady 15-18 minutes:',
    items: [
      { place: 'Jubilee Hills Check Post', time: 'about 15 minutes', short: '15m' },
      { place: 'Road No. 36', time: 'around 16 minutes', short: '16m' },
      { place: 'Peddamma Gudi Temple', time: 'roughly 15-17 minutes', short: '15-17m' },
      { place: 'Film Nagar', time: 'about 17-18 minutes', short: '17-18m' },
      { place: 'KBR National Park', time: 'around 14-15 minutes', short: '14-15m' },
      { place: 'Road No. 45 / GVK One area', time: 'roughly 16-18 minutes', short: '16-18m' },
      { place: 'Jubilee Hills Y junction', time: 'about 15 minutes', short: '15m' },
    ],
  },
  why: {
    eyebrow: 'Why Madhapur',
    h2: 'Why Base at Narenn Instead of',
    h2Accent: 'Inside Jubilee Hills',
    paragraphs: [
      "There is no meaningful PG or co-living inventory inside Jubilee Hills - it is a market of independent bungalows and premium flats, priced for owners and long-term luxury tenants, not shared living. Anyone trying to find a shared room there ends up paying luxury-area rent for a cramped, informal arrangement with no food or housekeeping support. Basing yourself at Narenn Living in VIP Hills instead means a genuinely furnished, professionally managed room at a fraction of the cost, with Jubilee Hills still only 15 minutes away for work, gyms, clinics or a evening out on Road No. 36.",
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
      "Anyone commuting from a Jubilee Hills-adjacent job knows that late meetings, shoots or client calls are common, and coming home to a chore list is the last thing you want. At Narenn Living, every room is furnished and air-conditioned, three home-style meals come from our own kitchen on a fixed daily schedule, WiFi is fast enough for calls and streaming, and housekeeping is handled for you. It turns a 15-minute Jubilee Hills commute into a genuinely comfortable daily routine rather than one more thing to manage. Explore our",
    ],
    links: [
      { to: '/amenities/', label: 'amenities' },
      { to: '/rooms/', label: 'room options' },
    ],
  },
  audience: {
    eyebrow: 'Who It Fits',
    h2: 'Built for People Working Around',
    h2Accent: 'Jubilee Hills',
    paragraphs: [
      "Jubilee Hills is home to media houses, film production offices, boutique agencies, high-end clinics and salons, plus a wide spread of restaurants and retail. Our residents commuting there tend to work in creative, hospitality or healthcare roles rather than the IT-heavy crowd found closer to Hitech City, and value the mix of affordability at home with easy access to a premium neighbourhood for work.",
    ],
    bullets: [
      'Media, film and production staff working around Film Nagar',
      'Hospitality, retail and salon professionals on Jubilee Hills high streets',
      'Clinic and healthcare staff at Jubilee Hills hospitals and practices',
      'Young professionals who want Jubilee Hills access without Jubilee Hills rent',
    ],
    links: [{ to: '/coliving-for-it-professionals/', label: 'co-living for IT professionals' }],
  },
  cta: {
    eyebrow: 'Book a Visit',
    h2: 'See the Commute for',
    h2Accent: 'Yourself',
    body: 'Affordable rooms with easy Jubilee Hills access are limited and fill quickly. Call 70759 85666 or book a visit to see the room, the food and the 15-minute ride before you commit to anything.',
    link: { to: '/contact-us/', label: 'book a visit' },
  },
  faqs: [
    {
      question: 'How far is Narenn Living from Jubilee Hills?',
      answer:
        'Our VIP Hills location is about 15 minutes from the Jubilee Hills Check Post and Road No. 36, a manageable daily commute by bike or cab.',
    },
    {
      question: 'Is there PG accommodation inside Jubilee Hills itself?',
      answer:
        'Practically none. Jubilee Hills is dominated by bungalows and premium apartments, so a PG near Jubilee Hills in Madhapur is the realistic, affordable option.',
    },
    {
      question: 'Is this a good option for people working in media or hospitality?',
      answer:
        'Yes. Many residents work at Film Nagar production houses or Jubilee Hills restaurants, salons and clinics, and value the short, predictable commute.',
    },
  ],
  maps: {
    eyebrow: 'VIP Hills',
    h2: 'Our',
    h2Accent: 'Properties',
    body: 'Four Narenn Living properties share one VIP Hills address, about 15 minutes from Jubilee Hills. Same contact for all visits.',
    streetAddress: 'VIP Hills, Road 21, Silicon Valley, Madhapur',
    locality: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500084',
  },
  finalCta: {
    title: 'Ready to Move Near',
    titleAccent: 'Jubilee Hills?',
    description: 'Call 70759 85666 to hold a room against your joining date.',
  },
};
