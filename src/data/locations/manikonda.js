import { SITE_URL } from '../sitePages';

const FALLBACK =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp';

export default {
  slug: 'manikonda',
  area: 'Manikonda',
  keyword: 'PG near Manikonda',
  page: {
    path: '/locations/manikonda/',
    title: 'PG near Manikonda, Hyderabad | Narenn Living',
    description:
      'Comfortable co-living a short commute from Manikonda. Furnished AC rooms, meals, WiFi & housekeeping in VIP Hills, Madhapur. Book a visit.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    ogImage: `${SITE_URL}/images/pg-near-manikonda-hyderabad-hero.jpg`,
  },
  images: {
    hero: {
      src: `${SITE_URL}/images/pg-near-manikonda-hyderabad-hero.jpg`,
      fallback: FALLBACK,
      alt: 'PG near Manikonda, Hyderabad - Narenn Living VIP Hills, Madhapur',
      title: 'PG near Manikonda',
    },
    commute: {
      src: `${SITE_URL}/images/manikonda-puppalaguda-commute-from-madhapur.jpg`,
      fallback: FALLBACK,
      alt: 'Commute route from Madhapur to Manikonda and Puppalaguda via Gachibowli',
      title: 'Manikonda commute',
    },
  },
  hero: {
    eyebrow: 'VIP Hills · Madhapur',
    h1: 'PG near Manikonda',
    h1Accent: 'Close to Manikonda, Puppalaguda and ORR',
    lead:
      'A fully managed home in VIP Hills, Madhapur, with easy access to Manikonda, Puppalaguda and the ORR entry near Gachibowli.',
  },
  intro: {
    paragraphs: [
      {
        text:
          "Manikonda has grown into one of Hyderabad's busiest residential and IT pockets, spilling south from Gachibowli towards Puppalaguda and the Outer Ring Road. A PG near Manikonda at Narenn Living gives you a comfortable, fully managed home in VIP Hills, Madhapur - close enough for a daily commute to Manikonda and Puppalaguda offices, yet placed in an established neighbourhood with far more to offer than Manikonda's still-developing streets. You get a furnished AC room, four home-style meals a day, fast WiFi and daily housekeeping, with Gachibowli itself only a few minutes closer still.",
      },
      {
        text:
          "It's a practical base for anyone working around Manikonda, the AP Police Headquarters side or studying at a nearby college, who wants Madhapur's amenities without adding much to the commute.",
      },
    ],
  },
  commute: {
    eyebrow: 'Commute Times',
    h2: 'PG near Manikonda',
    h2Accent: 'Key Distances',
    intro: 'From VIP Hills, Manikonda and its surrounding pockets are a manageable ride through Gachibowli:',
    items: [
      { place: 'Manikonda Junction', short: '20m', time: 'about 20-22 minutes' },
      { place: 'Puppalaguda', short: '22m', time: 'around 22-25 minutes' },
      { place: 'AP Police Headquarters', short: '20m', time: 'roughly 20 minutes' },
      { place: 'ORR entry near Narsingi', short: '25m', time: 'about 25 minutes' },
      { place: 'Gachibowli Junction', short: '15m', time: 'around 15 minutes' },
      { place: 'Kokapet Road', short: '22-24m', time: 'roughly 22-24 minutes' },
    ],
  },
  why: {
    eyebrow: 'Why Madhapur',
    h2: 'Why Base at Narenn Instead of',
    h2Accent: 'Inside Manikonda',
    paragraphs: [
      "Manikonda and Puppalaguda are still filling in - new towers going up alongside older colonies, without the density of restaurants, gyms and services that an established area like Madhapur already has. Basing yourself in VIP Hills instead means you get an easy ride down through Gachibowli to Manikonda each day, and come home to a neighbourhood that already has all of that sorted.",
      "It also means you're not locked in if your office moves. Plenty of people who work near the AP Police Headquarters or along the ORR side end up shifting projects toward Gachibowli or Nanakramguda within a year or two, and from Madhapur that change costs you nothing - the commute barely shifts either way.",
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
      "Every Narenn Living room comes fully furnished and air-conditioned, with fibre WiFi steady enough for both video calls and long study sessions, and four home-style meals a day so neither a student's timetable nor a professional's late meeting means skipping dinner. Housekeeping, laundry support and biometric no-curfew access are handled daily, so the ride to Manikonda doesn't come with extra chores tacked onto either end of it.",
    ],
    links: [
      { to: '/rooms/', label: 'room options' },
      { to: '/amenities/', label: 'amenities' },
    ],
  },
  audience: {
    eyebrow: 'Who It Fits',
    h2: 'A Mixed Base for Manikonda',
    h2Accent: 'and Gachibowli',
    paragraphs: [
      "Manikonda draws a mix of residents - IT professionals working at offices along the Gachibowli-Manikonda stretch or near the AP Police Headquarters side, and students at the colleges scattered through Puppalaguda and Narsingi. Both groups end up making a similar calculation: a slightly longer ride from Madhapur versus a shorter one from inside an area that's still building out its everyday infrastructure. For most, the ride through Gachibowli is a fair trade for landing in a neighbourhood that already has the restaurants, gyms, clinics and community that Manikonda is still growing into.",
    ],
    bullets: [
      'IT professionals working around Manikonda, Puppalaguda and the ORR side',
      'Students at colleges scattered through Puppalaguda and Narsingi',
      'Anyone splitting time between Manikonda and Gachibowli offices',
      'Residents who prefer an established neighbourhood over a still-developing one',
    ],
    links: [
      { to: '/coliving-for-it-professionals/', label: 'co-living for IT professionals' },
      { to: '/pg-for-students/', label: 'PG for students' },
    ],
  },
  cta: {
    eyebrow: 'Book a Visit',
    h2: 'See the Manikonda Commute',
    h2Accent: 'For Yourself',
    body:
      "Manikonda and Puppalaguda are growing fast, but so is demand for a well-run PG on that side of the city - book early if you can. Call 70759 85666 or message us on WhatsApp to check current availability and schedule a free visit. We'll walk you through the room, the food and the actual ride down through Gachibowli to Manikonda before you commit to anything. If you're joining a new office or college on a fixed date, tell us and we'll try to hold a room against it.",
    link: { to: '/contact-us/', label: 'book a visit' },
  },
  faqs: [
    {
      question: 'How far is Narenn Living from Manikonda?',
      answer:
        'Our VIP Hills base in Madhapur is about 20-22 minutes from Manikonda Junction and a little further to Puppalaguda, via Gachibowli.',
    },
    {
      question: 'Is Madhapur a good base for Manikonda and Gachibowli both?',
      answer:
        'Yes. Gachibowli sits roughly midway on the route, so residents working anywhere along that stretch - Manikonda, Puppalaguda or Gachibowli itself - use a similar commute.',
    },
    {
      question: 'What is included in a PG near Manikonda at Narenn Living?',
      answer:
        'A furnished AC room, four meals a day, fast WiFi, daily housekeeping and laundry support, all for one monthly fee.',
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
    titleAccent: 'Manikonda Commute',
    description:
      'See how manageable the ride from Madhapur to Manikonda feels before you decide. Call 70759 85666 or WhatsApp us for a free visit.',
  },
};
