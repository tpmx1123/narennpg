import { LOCATION_HERO_IMAGE, SITE_URL } from '../sitePages';

const FALLBACK =
  'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/Narenn-Elite-5-scaled_tnhl5p.webp';

export default {
  slug: 'mindspace',
  area: 'Mindspace',
  keyword: 'PG near Mindspace',
  page: {
    path: '/locations/mindspace/',
    title: 'PG near Mindspace, Hyderabad — 10 Min | Narenn Living',
    description:
      'Furnished PG & co-living under 10 minutes from Mindspace IT Park. AC rooms, three meals, WiFi & housekeeping. Book a free visit today.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    ogImage: LOCATION_HERO_IMAGE,
  },
  images: {
    hero: {
      src: LOCATION_HERO_IMAGE,
      fallback: LOCATION_HERO_IMAGE,
      alt: 'PG near Mindspace, Hyderabad - Narenn Living VIP Hills, Madhapur',
      title: 'PG near Mindspace',
    },
    commute: {
      src: `${SITE_URL}/images/mindspace-commute-from-madhapur.jpg`,
      fallback: FALLBACK,
      alt: 'Commute route from Narenn Living Madhapur to Raheja Mindspace and Mindspace Gigaplex',
      title: 'Mindspace commute',
    },
  },
  hero: {
    eyebrow: 'VIP Hills · Madhapur',
    h1: 'PG near Mindspace',
    h1Accent: 'Under Ten Minutes to Your Desk',
    lead:
      'A furnished AC room in VIP Hills, under 10 minutes from Raheja Mindspace, Gigaplex and Cyber Gateway.',
  },
  intro: {
    paragraphs: [
      {
        text:
          "Mindspace employs one of the largest single office populations in Hyderabad, and the PG buildings that ring the park have grown crowded and pricey to match. A PG near Mindspace at Narenn Living gives you a calmer alternative just under 10 minutes away in VIP Hills, Madhapur, without the queues, thin walls and inflated bed rates common right outside the Gigaplex gate. You still get a fully furnished AC room, three home-style meals a day, fast WiFi and daily housekeeping, in a property built and run as one address rather than stitched together from converted flats.",
      },
      {
        text:
          'For engineers, analysts and support staff walking into Mindspace every morning, that short extra distance buys noticeably better rooms, food and daily service.',
      },
    ],
  },
  commute: {
    eyebrow: 'Commute Times',
    h2: 'PG near Mindspace',
    h2Accent: 'Under Ten Minutes',
    intro: 'From Narenn Living in VIP Hills, every major Mindspace landmark is a quick ride:',
    items: [
      { place: 'Raheja Mindspace main gate', time: 'about 7-8 minutes', short: '7-8m' },
      { place: 'Mindspace Gigaplex', time: 'around 8-9 minutes', short: '8-9m' },
      { place: 'Cyber Gateway', time: 'roughly 6-7 minutes', short: '6-7m' },
      { place: 'Inorbit Mall', time: 'about 8 minutes', short: '8m' },
      { place: 'Image Gardens', time: 'around 9 minutes', short: '9m' },
      { place: 'Vanenburg IT Park', time: 'roughly 9-10 minutes', short: '9-10m' },
      { place: 'Hitec City metro station', time: 'about 8 minutes', short: '8m' },
    ],
  },
  why: {
    eyebrow: 'Why Madhapur',
    h2: 'Why Base at Narenn Instead of',
    h2Accent: 'Right Outside Mindspace',
    paragraphs: [
      "PGs pressed right up against Mindspace exist mainly to fill beds for the largest possible office crowd, and it shows in cramped rooms, shared kitchens under constant strain, and management that is often absent beyond rent collection day. Rates there rarely reflect the actual room quality, only the convenience of a five-minute walk. Narenn Living trades a handful of extra minutes for a real difference: a property built for shared living from the start, an in-house kitchen serving fixed meal times, and daily housekeeping - all while keeping Mindspace itself comfortably under ten minutes away.",
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
      'Working inside a campus as large as Mindspace usually means long hours and back-to-back calls, which makes what happens at home even more important. Every Narenn Living room is furnished and air-conditioned, three home-style meals come from our own kitchen daily, WiFi is fast enough for video calls and VPN work, and housekeeping is managed by an on-site team. None of it depends on you having energy left after a Mindspace workday - it simply runs on its own schedule. Take a look at our full',
    ],
    links: [
      { to: '/amenities/', label: 'amenities' },
      { to: '/rooms/', label: 'room options' },
    ],
  },
  audience: {
    eyebrow: 'Who It Fits',
    h2: 'Built for People Working Around',
    h2Accent: 'Mindspace',
    paragraphs: [
      'Mindspace houses a wide spread of global IT and BPO companies across the Raheja Mindspace and Gigaplex towers, which means our residents heading there range from software engineers to voice-process staff on rotating shifts. What they share is a need for a short, reliable commute and a home base that does not add friction to an already long workday.',
    ],
    bullets: [
      'Software engineers and QA staff across Mindspace towers',
      'BPO and voice-process employees on night and rotational shifts',
      'Freshers placed at Mindspace campuses straight out of college',
      'Hybrid workers needing fast WiFi at home on remote days',
    ],
    links: [{ to: '/coliving-for-it-professionals/', label: 'co-living for IT professionals' }],
  },
  cta: {
    eyebrow: 'Book a Visit',
    h2: 'See the Commute for',
    h2Accent: 'Yourself',
    body: 'Rooms with a sub-ten-minute Mindspace commute go fast, especially in joining season. Call 70759 85666 or book a visit to see the room, the food and the ride to Mindspace for yourself.',
    link: { to: '/contact-us/', label: 'book a visit' },
  },
  faqs: [
    {
      question: 'How far is Narenn Living from Mindspace?',
      answer:
        'Our VIP Hills location is under 10 minutes from Raheja Mindspace, Gigaplex and Cyber Gateway, an easy daily commute by bike, cab or shuttle.',
    },
    {
      question: 'Is this cheaper than PGs right outside Mindspace?',
      answer:
        'Often, yes, for noticeably better rooms and food. The PGs pressed against Mindspace charge for proximity, not quality or management.',
    },
    {
      question: 'Do you support night shift employees working at Mindspace?',
      answer:
        'Yes. We offer biometric no-curfew access and try to room night-shift residents together so daytime sleep is not disrupted.',
    },
  ],
  maps: {
    eyebrow: 'VIP Hills',
    h2: 'Our',
    h2Accent: 'Properties',
    body: 'Four Narenn Living properties share one VIP Hills address, under 10 minutes from Mindspace. Same contact for all visits.',
    streetAddress: 'VIP Hills, Road 21, Silicon Valley, Madhapur',
    locality: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500084',
  },
  finalCta: {
    title: 'Ready to Move Near',
    titleAccent: 'Mindspace?',
    description: 'Call 70759 85666 to hold a room against your joining date.',
  },
};
