import { LOCATION_HERO_IMAGE, SITE_URL } from './sitePages';

export const HITECH_CITY_PAGE = {
  path: '/locations/hitech-city/',
  title: 'PG near Hitech City, Hyderabad | 5-10 Min Co-Living | Narenn Living',
  description:
    'Premium PG & co-living just 5-10 minutes from Hitech City. AC rooms, three meals, fast WiFi & housekeeping in Madhapur VIP Hills. Book a free visit at Narenn Living.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage: LOCATION_HERO_IMAGE,
};

export const HITECH_CITY_IMAGES = {
  hero: {
    src: LOCATION_HERO_IMAGE,
    fallback: LOCATION_HERO_IMAGE,
    alt: 'PG near Hitech City, Hyderabad - Narenn Living VIP Hills, Madhapur',
    title: 'PG near Hitech City',
  },
  commute: {
    src: `${SITE_URL}/images/hitech-city-office-commute-from-pg-madhapur.jpg`,
    fallback:
      'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/image-03-2_ze1iph.webp',
    alt: 'Short commute from Narenn Living PG in Madhapur to Hitech City offices',
    title: 'Hitech City commute',
  },
  room: {
    src: `${SITE_URL}/images/it-professional-pg-room-near-hitech-city.jpg`,
    fallback:
      'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/Narenn-Elite-3-1200x750_ndmzod.webp',
    alt: "IT professional's furnished room at a PG near Hitech City, Hyderabad",
    title: 'IT professional room',
  },
  landmarks: {
    src: `${SITE_URL}/images/mindspace-cyber-towers-near-narenn-living.jpg`,
    fallback:
      'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/Narenn-Elite-6-1200x750_h0uzb7.webp',
    alt: 'Mindspace and Cyber Towers offices near Narenn Living co-living in Madhapur',
    title: 'Mindspace and Cyber Towers',
  },
};

export const HITECH_CITY_HERO = {
  eyebrow: 'VIP Hills · Madhapur',
  h1: 'PG near Hitech City',
  h1Accent: 'Live Minutes From Your Office',
  lead:
    'Fully furnished AC rooms, three meals and fast WiFi - just 5-10 minutes from Cyber Towers and Mindspace.',
};

export const HITECH_CITY_INTRO = [
  'If you work in Hitech City, your commute should be measured in minutes, not hours. A PG near Hitech City at Narenn Living puts you just 5-10 minutes from the offices of Cyber Towers, Mindspace and the wider Hitech City IT hub, from our comfortable base in VIP Hills, Madhapur. That means more sleep, less traffic stress and hours of your week handed back to you - all while enjoying a fully furnished AC room, three home-style meals a day, high-speed WiFi and daily housekeeping.',
  'For the thousands of engineers and IT professionals who work in Hitech City, this is the location that makes daily life dramatically easier.',
];

export const HITECH_CITY_COMMUTE = {
  eyebrow: 'Minutes Away',
  h2: 'A Commute You Will Actually Enjoy',
  h2Accent: 'Actually Enjoy',
  intro:
    'Being minutes from your office changes everything about your day. Here is how close you will be to the key Hitech City landmarks:',
  items: [
    { place: 'Cyber Towers', time: 'about 5-7 minutes', short: '5m' },
    { place: 'Mindspace IT Park', time: 'around 7-10 minutes', short: '7m' },
    { place: 'Durgam Cheruvu metro', time: 'under 10 minutes', short: '10m' },
    { place: 'Kondapur', time: 'around 8-10 minutes', short: '8-10m' },
    { place: 'Inorbit Mall', time: 'roughly 10 minutes', short: '10m' },
  ],
};

export const HITECH_CITY_IT = {
  eyebrow: 'Work-Ready',
  h2: 'Built for IT Professionals',
  h2Accent: 'IT Professionals',
  body: 'Our accommodation is designed with the tech workforce in mind. High-speed, reliable WiFi supports work-from-home and video calls, quiet single sharing rooms offer privacy for focus and late calls, and biometric no-curfew access fits any shift or schedule. It is the reason our',
  link: { to: '/coliving-for-it-professionals/', label: 'co-living for IT professionals' },
  trail: 'is such a natural fit for anyone working near Hitech City.',
};

export const HITECH_CITY_COMFORT = {
  eyebrow: 'Daily Ease',
  h2: 'Come Home to Comfort',
  h2Accent: 'Comfort',
  body: 'After a long day at the office, the last thing you want is to cook, clean or fix the WiFi. At Narenn Living, it is all handled. Return to a clean room, a hot home-cooked dinner and a friendly community - everything taken care of, so you can simply relax. Take a look at our full',
  link: { to: '/amenities/', label: 'amenities' },
  trail: 'to see what is included.',
};

export const HITECH_CITY_VALUE = {
  eyebrow: 'All-Inclusive',
  h2: 'Better Value Than Renting Nearby',
  h2Accent: 'Renting Nearby',
  body: 'Flats close to Hitech City command premium rents, plus deposits, brokerage and the cost of furnishing and running a home. Narenn Living gives you a fully managed, all-inclusive alternative for one clear monthly fee, right in the same sought-after area. Explore our',
  link: { to: '/rooms/single-sharing/', label: 'single sharing rooms' },
  trail: 'to compare and see the value for yourself.',
  altLink: { to: '/rooms/', label: 'room options' },
};

export const HITECH_CITY_MADHAPUR = {
  eyebrow: 'Neighbourhood',
  h2: 'The Convenience of Madhapur',
  h2Accent: 'Madhapur',
  body: 'Beyond your commute, our VIP Hills location gives you the best of Madhapur - cafes, restaurants, shopping and nightlife, all close by. Read our',
  link: { to: '/locations/madhapur/', label: 'PG in Madhapur' },
  trail: 'location guide to see just how much is on your doorstep when you live with Narenn Living.',
};

export const HITECH_CITY_BOOK = {
  eyebrow: 'See It Yourself',
  h2: 'Book Your Visit',
  body: 'See how much easier life gets when your office is minutes away. Call 70759 85666 or book a visit, and let Narenn Living give you back the hours you have been losing to your commute near Hitech City.',
};

export const HITECH_CITY_COSTED = {
  eyebrow: 'Real Maths',
  h2: 'The Ten-Minute Commute, Costed Out',
  h2Accent: 'Costed Out',
  paragraphs: [
    'From VIP Hills to Hitech City is a 5 to 10 minute reach. Most PGs marketed as near Hitech City are 30 to 45 minutes out in traffic - a claim that survives on Google Maps at 11 PM and collapses at 9 AM.',
    'Run the numbers on the difference. Forty minutes each way is eighty minutes a day, roughly 330 hours a year, plus a cab or fuel bill on every single trip. Against that, the rent gap between a distant PG and a VIP Hills address is small - and you are buying back your mornings, your gym time and your evenings with it.',
  ],
};

export const HITECH_CITY_RESIDENTS = {
  eyebrow: 'Our Community',
  h2: 'Who Our Hitech City Residents Are',
  h2Accent: 'Residents Are',
  bullets: [
    'Engineers and developers at Hitech City product and services companies',
    'Consultants and analysts at Mindspace, Raheja and DLF',
    'Support and operations professionals on US and EU shift patterns',
    'Freshers in their first month in Hyderabad, still learning the city',
    'Hybrid workers who need a quiet room and reliable WiFi on WFH days',
  ],
};

export const HITECH_CITY_TIMINGS = {
  eyebrow: 'Shift Friendly',
  h2: 'Built for IT Timings',
  h2Accent: 'IT Timings',
  paragraphs: [
    'Biometric access with no curfew, because your shift decides your timing and not a gate rule. Night-shift residents matched with each other so daytime sleep is not a daily battle. Kitchen timings that accommodate off-cycle meals. Housekeeping that works around a sleeping resident rather than through them.',
    'Add fibre WiFi provisioned for video calls and VPNs, and power backup so an outage does not cost you a client meeting. None of it is exotic - it is just what a PG in the middle of an IT corridor should always have been.',
  ],
};

export const HITECH_CITY_JOINING = {
  h2: 'Book Against Your Joining Date',
  h2Accent: 'Joining Date',
  body: 'Hitech City PG inventory is the fastest-moving in Hyderabad, and it moves on a predictable cycle - rooms open around month-end and are taken within days. Joining seasons compress that further. If you have a confirmed start date at a Hitech City company, call 70759 85666 now rather than the week you land. We will hold a room against your date. The alternative is arriving in a new city, in a hotel, viewing whatever happens to be left - which is how people end up in a PG they regret for a year.',
};

export const HITECH_CITY_PROPERTIES = {
  eyebrow: 'VIP Hills',
  h2: 'Our Properties',
  h2Accent: 'Properties',
  body: 'All four Narenn Living properties - Narenn Elite, Narenn Crown, Narenn Pinnacle and Narenn Supreme - are in VIP Hills, Madhapur, minutes from Hitech City.',
  streetAddress: 'VIP Hills, Road 21, Silicon Valley, Madhapur',
  locality: 'Hyderabad',
  region: 'Telangana',
  postalCode: '500084',
};

export const HITECH_CITY_FAQ_HEADING = {
  eyebrow: 'FAQ',
  h2: 'Frequently Asked Questions',
  h2Accent: 'Questions',
};

export const HITECH_CITY_FAQS = [
  {
    question: 'How far is Narenn Living from Hitech City?',
    answer:
      'Our VIP Hills location is just 5-10 minutes from the Hitech City IT hub, including Cyber Towers and Mindspace.',
  },
  {
    question: 'Is this a good PG for people working in Hitech City?',
    answer:
      'Yes. With a short commute, fast WiFi, quiet rooms and no-curfew access, it is ideal for IT professionals working in and around Hitech City.',
  },
  {
    question: 'What is included in the stay?',
    answer:
      'A furnished AC room, three home-style meals a day, high-speed WiFi, daily housekeeping, security and community amenities - all in one monthly fee.',
  },
];
