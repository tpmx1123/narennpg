import { LOCATION_HERO_IMAGE, SITE_URL } from '../sitePages';

const FALLBACK =
  'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/Narenn-Elite-5-scaled_tnhl5p.webp';

export default {
  slug: 'durgam-cheruvu',
  area: 'Durgam Cheruvu',
  keyword: 'PG near Durgam Cheruvu',
  page: {
    path: '/locations/durgam-cheruvu/',
    title: 'PG near Durgam Cheruvu - Lakeside Co-Living | Narenn Living',
    description:
      'Co-living minutes from Durgam Cheruvu metro & cable bridge. Furnished AC rooms, food & WiFi included in Madhapur. Book your visit.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    ogImage: LOCATION_HERO_IMAGE,
  },
  images: {
    hero: {
      src: LOCATION_HERO_IMAGE,
      fallback: LOCATION_HERO_IMAGE,
      alt: 'PG near Durgam Cheruvu, Hyderabad - Narenn Living VIP Hills, Madhapur',
      title: 'PG near Durgam Cheruvu',
    },
    commute: {
      src: `${SITE_URL}/images/durgam-cheruvu-commute-from-madhapur.jpg`,
      fallback: FALLBACK,
      alt: 'Commute route from Narenn Living Madhapur to the Durgam Cheruvu cable bridge and metro',
      title: 'Durgam Cheruvu commute',
    },
  },
  hero: {
    eyebrow: 'VIP Hills · Madhapur',
    h1: 'PG near Durgam Cheruvu',
    h1Accent: 'Lakeside Air, City Convenience',
    lead:
      'A furnished home in VIP Hills, a short ride from the Durgam Cheruvu cable bridge, metro station and lakefront park.',
  },
  intro: {
    paragraphs: [
      {
        text:
          "Durgam Cheruvu itself has almost no PG or co-living stock - the lakefront is ringed by premium gated apartments and serviced flats, not shared housing. A PG near Durgam Cheruvu at Narenn Living gets around that by placing you a few minutes away in VIP Hills, Madhapur, close enough for an evening walk across the cable bridge or a quick ride to the metro station on the Blue Line. You still get a furnished AC room, three home-style meals, fast WiFi and daily housekeeping, without needing to pay lake-view apartment rent to live near the water.",
      },
      {
        text:
          'It works well for residents who want the calm of a lake and a green walking stretch nearby, but still need an affordable, professionally run place to actually live.',
      },
    ],
  },
  commute: {
    eyebrow: 'Commute Times',
    h2: 'PG near Durgam Cheruvu',
    h2Accent: 'Minutes Away',
    intro: 'From Narenn Living in VIP Hills, the lake and its landmarks are practically next door:',
    items: [
      { place: 'Durgam Cheruvu Cable Bridge', time: 'about 5-6 minutes', short: '5-6m' },
      { place: 'Durgam Cheruvu Metro Station', time: 'around 6-7 minutes', short: '6-7m' },
      { place: 'Lakefront walking park', time: 'roughly 6-8 minutes', short: '6-8m' },
      { place: 'Hitec City-side lake entrance', time: 'about 5 minutes', short: '5m' },
      { place: 'Jubilee Hills border (Road 45)', time: 'around 10 minutes', short: '10m' },
      { place: 'Cyber Towers approach', time: 'about 7-8 minutes', short: '7-8m' },
      { place: 'Inorbit Mall', time: 'roughly 9-10 minutes', short: '9-10m' },
    ],
  },
  why: {
    eyebrow: 'Why Madhapur',
    h2: 'Why Base at Narenn Instead of',
    h2Accent: 'Renting at the Lake',
    paragraphs: [
      "There simply is no PG culture directly at Durgam Cheruvu - what's built around the lake is premium high-rise apartments and serviced residences priced for families and senior professionals, not shared accommodation. Trying to rent there independently means either an expensive studio or a long search for a rare shared flat with no management behind it. Narenn Living sidesteps that entirely: you get the lake's morning walks and cable-bridge views a few minutes away, while actually living in a run property with fixed food, WiFi and housekeeping standards. It is the practical way to enjoy Durgam Cheruvu without needing a lakefront apartment budget.",
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
      'A lake nearby is a lovely bonus, but daily life still runs on the basics - and that is where Narenn Living is deliberate. Every room is furnished and air-conditioned, our own kitchen puts out three meals a day, WiFi is fast enough for calls and streaming, and housekeeping is handled by an on-site team rather than left to residents. After an early walk by the cable bridge or a late one along the lakefront, you come back to a room that is already clean and a kitchen that already has dinner ready. See the full',
    ],
    links: [
      { to: '/amenities/', label: 'amenities' },
      { to: '/rooms/', label: 'room options' },
    ],
  },
  audience: {
    eyebrow: 'Who It Fits',
    h2: 'Built for People Working Around',
    h2Accent: 'Durgam Cheruvu',
    paragraphs: [
      'Durgam Cheruvu draws people less for offices and more for the lifestyle it offers alongside a Hitech City or Jubilee Hills commute - a run, a sunset, a quiet coffee. Our residents typically work nearby but choose this stretch deliberately for the change of pace it gives outside office hours, using the metro station for onward trips across the city.',
    ],
    bullets: [
      'IT professionals who want a lake and green space near their commute',
      'Metro commuters using the Durgam Cheruvu Blue Line station daily',
      'Fitness-focused residents who run or walk the lakefront regularly',
      'Anyone priced out of lakeside apartments but wanting the same neighbourhood',
    ],
    links: [{ to: '/coliving-for-it-professionals/', label: 'co-living for IT professionals' }],
  },
  cta: {
    eyebrow: 'Book a Visit',
    h2: 'See the Commute for',
    h2Accent: 'Yourself',
    body: 'Rooms with quick access to the lake and metro do not stay open long. Call 70759 85666 or book a visit to see the room, the food and just how close the Durgam Cheruvu cable bridge really is.',
    link: { to: '/contact-us/', label: 'book a visit' },
  },
  faqs: [
    {
      question: 'How far is Narenn Living from Durgam Cheruvu?',
      answer:
        'Our VIP Hills location is about 5-7 minutes from the Durgam Cheruvu cable bridge and metro station, an easy ride or short walk-and-ride combination.',
    },
    {
      question: 'Is there a PG right at Durgam Cheruvu lake?',
      answer:
        'Not really - the lakefront is mostly premium apartments. Narenn Living gives you the closest well-run PG option, a few minutes from the lake.',
    },
    {
      question: 'Can I use the Durgam Cheruvu metro station from here?',
      answer:
        'Yes, it is about 6-7 minutes away, making it a convenient option for onward travel across Hyderabad on the Blue Line.',
    },
  ],
  maps: {
    eyebrow: 'VIP Hills',
    h2: 'Our',
    h2Accent: 'Properties',
    body: 'Four Narenn Living properties share one VIP Hills address, minutes from the Durgam Cheruvu lake and metro. Same contact for all visits.',
    streetAddress: 'VIP Hills, Road 21, Silicon Valley, Madhapur',
    locality: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500084',
  },
  finalCta: {
    title: 'Ready to Move Near',
    titleAccent: 'Durgam Cheruvu?',
    description: 'Call 70759 85666 to hold a room against your joining date.',
  },
};
