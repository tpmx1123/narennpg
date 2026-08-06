import { LOCATION_HERO_IMAGE, SITE_URL } from '../sitePages';

const FALLBACK =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp';

export default {
  slug: 'nallagandla',
  area: 'Nallagandla',
  keyword: 'PG near Nallagandla',
  page: {
    path: '/locations/nallagandla/',
    title: 'PG near Nallagandla, Hyderabad | Co-Living | Narenn Living',
    description:
      'Premium PG & co-living within reach of Nallagandla. AC rooms, three meals, WiFi & housekeeping in Madhapur. Book a free visit today.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    ogImage: LOCATION_HERO_IMAGE,
  },
  images: {
    hero: {
      src: LOCATION_HERO_IMAGE,
      fallback: LOCATION_HERO_IMAGE,
      alt: 'PG near Nallagandla, Hyderabad - Narenn Living VIP Hills, Madhapur',
      title: 'PG near Nallagandla',
    },
    commute: {
      src: `${SITE_URL}/images/nallagandla-tellapur-commute-from-madhapur.jpg`,
      fallback: FALLBACK,
      alt: 'Commute route from Madhapur to Nallagandla, Tellapur and the ISB approach road',
      title: 'Nallagandla commute',
    },
  },
  hero: {
    eyebrow: 'VIP Hills · Madhapur',
    h1: 'PG near Nallagandla',
    h1Accent: 'A Longer Ride, an Honest One',
    lead:
      'A fully managed home in VIP Hills, Madhapur - roughly 25-35 minutes from Nallagandla, Tellapur and the ISB approach road.',
  },
  intro: {
    paragraphs: [
      {
        text:
          "Nallagandla and the stretch past Gopanpally toward Tellapur and Lingampally have become a popular, more affordable pocket of west Hyderabad, but they sit a genuine 25 to 35 minutes from the Madhapur-Hitech City core depending on traffic. A PG near Nallagandla at Narenn Living is upfront about that: our VIP Hills address is not the closest option to Nallagandla itself, but it puts you in an established, well-connected neighbourhood with a furnished AC room, three home-style meals a day, fast WiFi and daily housekeeping - and a commute that's honest rather than optimistic.",
      },
      {
        text:
          "It suits people who work near Nallagandla or the ISB road but would rather live somewhere with an actual social life than save fifteen minutes each way.",
      },
    ],
  },
  commute: {
    eyebrow: 'Commute Times',
    h2: 'PG near Nallagandla',
    h2Accent: 'Key Distances',
    intro: 'Being straightforward about the ride - here is what to expect from VIP Hills to the Nallagandla side:',
    items: [
      { place: 'Nallagandla X Roads', short: '28m', time: 'about 28-30 minutes' },
      { place: 'Tellapur', short: '25m', time: 'around 25-28 minutes' },
      { place: 'ISB approach road', short: '20m', time: 'roughly 20-22 minutes' },
      { place: 'Lingampally Railway Station', short: '32m', time: 'about 32-35 minutes' },
      { place: 'Gopanpally', short: '24m', time: 'around 24-26 minutes' },
      { place: 'Financial District (via Gachibowli)', short: '18m', time: 'roughly 18-20 minutes' },
    ],
  },
  why: {
    eyebrow: 'Why Madhapur',
    h2: 'Why Base at Narenn Instead of',
    h2Accent: 'Inside Nallagandla',
    paragraphs: [
      "We're not going to pretend Nallagandla is a short ride from VIP Hills - it isn't. If your office or college is right there and you never leave that radius, a PG based closer to Tellapur or Gopanpally will save you real time, and that's a fair reason to choose one.",
      "What Madhapur buys you instead is everything Nallagandla's still-forming stretch doesn't yet have in the same density: established restaurants, gyms, clinics, malls, metro access and a lived-in co-living community that's been running for years rather than months. A number of our residents work off the ISB road or near Nallagandla and made the trade deliberately, after weighing a shorter commute against a neighbourhood with genuinely more to do outside work hours.",
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
      "Every room at Narenn Living is fully furnished and air-conditioned, with fibre WiFi reliable enough for daily video calls even after a longer commute home. Three home-style meals a day come from our own kitchen, so a 30-minute ride doesn't turn into an hour once you add cooking on either end. Housekeeping and biometric no-curfew access are handled every day, which matters more, not less, when your commute already takes a bite out of your evening.",
    ],
    links: [
      { to: '/rooms/', label: 'room options' },
      { to: '/amenities/', label: 'amenities' },
    ],
  },
  audience: {
    eyebrow: 'Who It Fits',
    h2: 'For Nallagandla Professionals Who Want',
    h2Accent: 'Madhapur Life',
    paragraphs: [
      "This is a deliberate choice, not a default one - it fits IT professionals working near Nallagandla, Tellapur or the ISB road who have already weighed a shorter commute against a livelier base and picked the base. Most have either tried a PG closer to their office and found little to do once they got home, or simply prioritise Madhapur's restaurants, gyms and community over saving fifteen to twenty minutes a day. If your priority is purely the shortest possible ride to Nallagandla, we'd rather say so upfront than oversell the distance.",
    ],
    bullets: [
      "IT professionals near Nallagandla, Tellapur or the ISB road who value a livelier base",
      'Anyone who has tried a closer PG and missed having somewhere to go in the evening',
      "Professionals open to a 25-35 minute ride in exchange for Madhapur's restaurants and metro access",
      'Residents who may shift roles toward Gachibowli or the Financial District later',
    ],
    links: [{ to: '/coliving-for-it-professionals/', label: 'co-living for IT professionals' }],
  },
  cta: {
    eyebrow: 'Book a Visit',
    h2: 'Nallagandla, the Honest Version',
    h2Accent: 'of the Commute',
    body:
      "If you've decided the ride is worth it, the next step is seeing the room and the actual commute for yourself. Call 70759 85666 or message us on WhatsApp to check availability and book a free visit - we'll show you the kitchen, a sample day's meals and time the drive toward Nallagandla with you. Rooms in VIP Hills fill up fastest around the start of each month, so if you're weighing this against a closer option, it's worth deciding sooner rather than later.",
    link: { to: '/contact-us/', label: 'book a visit' },
  },
  faqs: [
    {
      question: 'How far is Narenn Living from Nallagandla?',
      answer:
        "Honestly, it's a genuine commute - about 25-35 minutes from VIP Hills to Nallagandla and the Tellapur side, depending on traffic and time of day.",
    },
    {
      question: "Why choose a PG near Nallagandla that isn't the closest option?",
      answer:
        "Because Madhapur offers restaurants, gyms, clinics and a longer-established co-living community that the Nallagandla stretch is still building out - many residents find that trade worth the extra travel time.",
    },
    {
      question: 'Is there a closer option with the same commute philosophy?',
      answer:
        'Yes - our PG near Gachibowli sits roughly midway and may suit better if your office is closer to that end of the stretch.',
    },
  ],
  maps: {
    eyebrow: 'VIP Hills',
    h2: 'Our',
    h2Accent: 'Properties',
    body: 'Four Narenn Living properties share one VIP Hills address. Same contact for all visits.',
    streetAddress: 'VIP Hills, Road 21, Silicon Valley, Madhapur',
    locality: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500084',
  },
  finalCta: {
    title: 'Book Your Visit',
    titleAccent: 'Nallagandla, Honestly',
    description:
      'Come see the room, the food and the real commute time to Nallagandla before you decide. Call 70759 85666 or WhatsApp us for a free visit.',
  },
};
