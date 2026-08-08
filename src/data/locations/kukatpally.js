import { LOCATION_HERO_IMAGE, SITE_URL } from '../sitePages';

const FALLBACK =
  'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/Narenn-Elite-5-scaled_tnhl5p.webp';

export default {
  slug: 'kukatpally',
  area: 'Kukatpally',
  keyword: 'PG near Kukatpally',
  page: {
    path: '/locations/kukatpally/',
    title: 'PG near Kukatpally, Hyderabad | Co-Living | Narenn Living',
    description:
      'Premium PG & co-living a short ride from Kukatpally & KPHB. AC rooms, three meals, WiFi & housekeeping in Madhapur. Book a visit.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    ogImage: LOCATION_HERO_IMAGE,
  },
  images: {
    hero: {
      src: LOCATION_HERO_IMAGE,
      fallback: LOCATION_HERO_IMAGE,
      alt: 'PG near Kukatpally, Hyderabad - Narenn Living VIP Hills, Madhapur',
      title: 'PG near Kukatpally',
    },
    commute: {
      src: `${SITE_URL}/images/kukatpally-kphb-commute-from-madhapur.jpg`,
      fallback: FALLBACK,
      alt: 'Commute route from Madhapur to Kukatpally, KPHB and the JNTU Metro stretch',
      title: 'Kukatpally commute',
    },
  },
  hero: {
    eyebrow: 'VIP Hills · Madhapur',
    h1: 'PG near Kukatpally',
    h1Accent: 'Close to KPHB, JNTU and the Red Line',
    lead:
      'A fully managed home in VIP Hills, Madhapur, with an easy reach to Kukatpally, KPHB and the JNTU Metro stretch.',
  },
  intro: {
    paragraphs: [
      {
        text:
          "Kukatpally and KPHB form one of Hyderabad's busiest student and residential belts, anchored by JNTU and a string of coaching centres and Metro stations along the Red Line. A PG near Kukatpally at Narenn Living gives you a comfortable, fully managed home in VIP Hills, Madhapur - a manageable ride from KPHB and JNTU, in a neighbourhood with a more settled IT and co-living crowd than the busier Kukatpally stretch itself. You get a furnished AC room, three home-style meals a day, fast WiFi and daily housekeeping, whether you're heading to class at JNTU or an office further down the corridor.",
      },
      {
        text:
          'It suits students who want a quieter base outside the KPHB crowd and IT professionals who occasionally cross over to that side of the city for work.',
      },
    ],
  },
  commute: {
    eyebrow: 'Commute Times',
    h2: 'PG near Kukatpally',
    h2Accent: 'Key Distances',
    intro: 'From VIP Hills, the Kukatpally-KPHB belt is a fairly direct ride:',
    items: [
      { place: 'KPHB Colony', short: '25m', time: 'about 25-28 minutes' },
      { place: 'JNTU Metro', short: '28m', time: 'around 28-30 minutes' },
      { place: 'Kukatpally Housing Board X Roads', short: '27m', time: 'roughly 27 minutes' },
      { place: 'Forum Sujana Mall', short: '26m', time: 'about 26-28 minutes' },
      { place: 'Balanagar', short: '22m', time: 'around 22-24 minutes' },
      { place: 'Miyapur X Roads', short: '32m', time: 'roughly 32-35 minutes' },
    ],
  },
  why: {
    eyebrow: 'Why Madhapur',
    h2: 'Why Base at Narenn Instead of',
    h2Accent: 'Inside Kukatpally',
    paragraphs: [
      'Kukatpally and KPHB are dense, busy and full of student housing, which is convenient if you never leave the area but can mean noisy streets and PGs packed close together. Basing yourself in Madhapur instead gets you the same kind of daily reach to JNTU and KPHB, but a calmer neighbourhood to actually live in - more spread out, with an established restaurant and cafe scene and a co-living community that mixes students with working professionals rather than being almost entirely one or the other.',
      "It also keeps your options open: several of our residents started out attending classes near JNTU and later took up internships or jobs along the Hitech City-Madhapur stretch, and didn't have to move to make that shift.",
    ],
    links: [
      { to: '/locations/madhapur/', label: 'PG in Madhapur' },
      { to: '/locations/miyapur/', label: 'PG near Miyapur' },
    ],
  },
  standard: {
    eyebrow: 'The Narenn Standard',
    h2: 'Rooms, Food, WiFi and',
    h2Accent: 'Daily Care',
    paragraphs: [
      'Every room at Narenn Living is fully furnished and air-conditioned, with fibre WiFi solid enough for both lecture streams and late-night work calls, and three home-style meals a day so students skip the mess-food routine and professionals skip cooking after a long day. daily housekeeping and biometric no-curfew access mean neither a college timetable nor a shift schedule has to work around a fixed gate time.',
    ],
    links: [
      { to: '/rooms/', label: 'room options' },
      { to: '/amenities/', label: 'amenities' },
    ],
  },
  audience: {
    eyebrow: 'Who It Fits',
    h2: 'A Base for Students and Professionals',
    h2Accent: 'Near Kukatpally',
    paragraphs: [
      'Kukatpally and KPHB pull a genuine mix of residents our way - students commuting to JNTU or nearby coaching centres, and IT professionals whose offices sit somewhere between Kukatpally and the Madhapur-Hitech City core. Both find the ride from VIP Hills manageable enough for a daily routine, without needing to live inside the busier KPHB stretch itself. If you are a student who wants a calmer base with a mixed community rather than an all-student block, or a professional whose work occasionally takes you toward Kukatpally, this location tends to fit well.',
    ],
    bullets: [
      'Students commuting to JNTU or coaching centres around KPHB',
      'IT professionals whose offices sit between Kukatpally and the Madhapur corridor',
      'Anyone who prefers a mixed student-and-professional community over an all-student block',
      "Residents who value Madhapur's calmer streets over the busier KPHB stretch",
    ],
    links: [
      { to: '/pg-for-students/', label: 'PG for students' },
      { to: '/coliving-for-it-professionals/', label: 'co-living for IT professionals' },
    ],
  },
  cta: {
    eyebrow: 'Book a Visit',
    h2: 'See the Kukatpally Commute',
    h2Accent: 'For Yourself',
    body:
      "Whether you're settling in for a semester near JNTU or starting a new job somewhere along the Kukatpally-Madhapur stretch, it helps to see the room and time the actual ride before committing. Call 70759 85666 or message us on WhatsApp to check what's available and book a free visit - we'll walk you through the meals, the WiFi and a realistic estimate of your daily commute to KPHB. Rooms fill up quickly around admission and hiring seasons, so it's worth locking one in early rather than searching last-minute.",
    link: { to: '/contact-us/', label: 'book a visit' },
  },
  faqs: [
    {
      question: 'How far is Narenn Living from Kukatpally and KPHB?',
      answer:
        'Our VIP Hills base is about 25-28 minutes from KPHB and the JNTU Metro stretch, a manageable daily ride by bike, cab or Metro.',
    },
    {
      question: 'Is this PG near Kukatpally suitable for students?',
      answer:
        'Yes. It is popular with students commuting to JNTU and nearby coaching centres who want a calmer, mixed-community base outside the busier KPHB stretch itself.',
    },
    {
      question: 'Can IT professionals working near Kukatpally stay here too?',
      answer:
        'Absolutely - a number of our residents work at offices between Kukatpally and the Madhapur-Hitech City corridor and find the commute equally workable.',
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
    titleAccent: 'Kukatpally Commute',
    description:
      'See the room and check the ride to KPHB and JNTU for yourself. Call 70759 85666 or WhatsApp us for a free visit.',
  },
};
