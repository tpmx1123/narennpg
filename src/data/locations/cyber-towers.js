import { LOCATION_HERO_IMAGE, SITE_URL } from '../sitePages';

const FALLBACK =
  'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002175/Narenn-Elite-5-scaled_tnhl5p_uftsbq.webp';

export default {
  slug: 'cyber-towers',
  area: 'Cyber Towers',
  keyword: 'PG near Cyber Towers',
  page: {
    path: '/locations/cyber-towers/',
    title: 'PG near Cyber Towers, Hyderabad | Narenn Living',
    description:
      'Premium co-living 5–7 minutes from Cyber Towers. AC rooms, food, fast WiFi & housekeeping in Madhapur. Book your free visit.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    ogImage: LOCATION_HERO_IMAGE,
  },
  images: {
    hero: {
      src: LOCATION_HERO_IMAGE,
      fallback: LOCATION_HERO_IMAGE,
      alt: 'PG near Cyber Towers, Hyderabad - Narenn Living VIP Hills, Madhapur',
      title: 'PG near Cyber Towers',
    },
    commute: {
      src: `${SITE_URL}/images/cyber-towers-commute-from-madhapur.jpg`,
      fallback: FALLBACK,
      alt: 'Commute route from Narenn Living Madhapur to Cyber Towers and Cyber Pearl',
      title: 'Cyber Towers commute',
    },
  },
  hero: {
    eyebrow: 'VIP Hills · Madhapur',
    h1: 'PG near Cyber Towers',
    h1Accent: 'Five Minutes From Your Desk',
    lead: 'A furnished AC room in VIP Hills, just 5-7 minutes from Cyber Towers and Cyber Pearl.',
  },
  intro: {
    paragraphs: [
      {
        text:
          "Cyber Towers sits at the heart of the Hitech City IT corridor, and being genuinely close to it - not close on a map, close in traffic - is what separates a livable commute from a daily grind. A PG near Cyber Towers at Narenn Living puts you 5-7 minutes away in VIP Hills, Madhapur, one of the shortest real commutes to this landmark building. That distance comes with a fully furnished AC room, three home-style meals a day, fast WiFi and daily housekeeping, so the short ride is matched by a genuinely comfortable place to come back to.",
      },
      {
        text:
          'For anyone whose badge swipes in at Cyber Towers or one of the surrounding office blocks, this is about as close and as comfortable as a commute gets in Hyderabad.',
      },
    ],
  },
  commute: {
    eyebrow: 'Commute Times',
    h2: 'PG near Cyber Towers',
    h2Accent: 'Five Minutes Out',
    intro: 'From Narenn Living in VIP Hills, Cyber Towers and its neighbours are barely a ride away:',
    items: [
      { place: 'Cyber Towers main entrance', time: 'about 5 minutes', short: '5m' },
      { place: 'Cyber Pearl', time: 'around 5-6 minutes', short: '5-6m' },
      { place: 'Hitec City metro/MMTS station', time: 'roughly 6 minutes', short: '6m' },
      { place: 'HITEX Exhibition Centre', time: 'about 7 minutes', short: '7m' },
      { place: 'Krishe Sapphire / NSL Arena', time: 'around 6-7 minutes', short: '6-7m' },
      { place: 'Wipro Circle, Hitech City', time: 'roughly 7 minutes', short: '7m' },
      { place: 'Durgam Cheruvu Cable Bridge', time: 'about 8 minutes', short: '8m' },
    ],
  },
  why: {
    eyebrow: 'Why Madhapur',
    h2: 'Why Base at Narenn Instead of',
    h2Accent: 'Renting Right There',
    paragraphs: [
      "The handful of PGs directly beside Cyber Towers charge some of the steepest per-bed rates in the city precisely because of that five-minute walk, often for rooms carved out of old flats with no real common facilities. A short ride further into VIP Hills gets you a purpose-run property instead - our own kitchen, daily housekeeping, and a fixed monthly fee that does not climb every renewal simply because of proximity. Cyber Towers still stays inside a 5-7 minute reach, so you are not really trading commute time, only trading an inflated address premium for better rooms and service.",
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
      "A five-minute commute is worth little if the room you come back to is poorly kept. At Narenn Living, every room is furnished and air-conditioned, three home-style meals are served daily from our own kitchen, WiFi is fast and stable enough for back-to-back calls, and housekeeping is handled by an on-site team rather than left for the weekend. It means the time you save on the Cyber Towers commute actually gets spent resting, not catching up on chores. Explore our full",
    ],
    links: [
      { to: '/amenities/', label: 'amenities' },
      { to: '/rooms/', label: 'room options' },
    ],
  },
  audience: {
    eyebrow: 'Who It Fits',
    h2: 'Built for People Working Around',
    h2Accent: 'Cyber Towers',
    paragraphs: [
      'Cyber Towers and Cyber Pearl house a dense mix of established IT companies, consulting firms and outsourcing units, drawing everyone from senior engineers to first-year analysts. Our residents on this commute tend to prize predictability above everything - a five-minute ride they never need to think about, whatever the weather or the traffic elsewhere in the city.',
    ],
    bullets: [
      'Senior engineers and team leads at Cyber Towers companies',
      'Analysts and consultants working across Cyber Pearl offices',
      'Professionals who want the shortest reliable commute in Hitech City',
      'Residents who value predictability over chasing the absolute cheapest rent',
    ],
    links: [{ to: '/coliving-for-it-professionals/', label: 'co-living for IT professionals' }],
  },
  cta: {
    eyebrow: 'Book a Visit',
    h2: 'See the Commute for',
    h2Accent: 'Yourself',
    body: 'Rooms with a five-minute Cyber Towers commute are the first to be booked each cycle. Call 70759 85666 or book a visit and time the ride yourself before deciding.',
    link: { to: '/contact-us/', label: 'book a visit' },
  },
  faqs: [
    {
      question: 'How far is Narenn Living from Cyber Towers?',
      answer:
        'Our VIP Hills location is about 5-7 minutes from Cyber Towers and Cyber Pearl, among the shortest real commutes to this landmark in Hyderabad.',
    },
    {
      question: 'Is it worth paying more to live right beside Cyber Towers?',
      answer:
        'Usually not. Those PGs charge a proximity premium for smaller, less-managed rooms. A few extra minutes from VIP Hills gets you far better value.',
    },
    {
      question: 'What is included in the monthly fee?',
      answer:
        'A furnished AC room, three home-style meals a day, high-speed WiFi, daily housekeeping, security and community amenities - all in one fee.',
    },
  ],
  maps: {
    eyebrow: 'VIP Hills',
    h2: 'Our',
    h2Accent: 'Properties',
    body: 'Four Narenn Living properties share one VIP Hills address, just 5-7 minutes from Cyber Towers. Same contact for all visits.',
    streetAddress: 'VIP Hills, Road 21, Silicon Valley, Madhapur',
    locality: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500084',
  },
  finalCta: {
    title: 'Ready to Move Near',
    titleAccent: 'Cyber Towers?',
    description: 'Call 70759 85666 to hold a room against your joining date.',
  },
};
