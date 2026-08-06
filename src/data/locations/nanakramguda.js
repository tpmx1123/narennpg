import { LOCATION_HERO_IMAGE, SITE_URL } from '../sitePages';

const FALLBACK =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp';

export default {
  slug: 'nanakramguda',
  area: 'Nanakramguda',
  keyword: 'PG near Nanakramguda',
  page: {
    path: '/locations/nanakramguda/',
    title: 'PG near Nanakramguda, Hyderabad | Narenn Living',
    description:
      'Furnished co-living a short commute from Nanakramguda & the Financial District. AC rooms, meals & WiFi included. Book a free visit.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    ogImage: LOCATION_HERO_IMAGE,
  },
  images: {
    hero: {
      src: LOCATION_HERO_IMAGE,
      fallback: LOCATION_HERO_IMAGE,
      alt: 'PG near Nanakramguda, Hyderabad - Narenn Living VIP Hills, Madhapur',
      title: 'PG near Nanakramguda',
    },
    commute: {
      src: `${SITE_URL}/images/nanakramguda-commute-from-madhapur.jpg`,
      fallback: FALLBACK,
      alt: 'Commute route from Narenn Living Madhapur to Nanakramguda and ISB Hyderabad',
      title: 'Nanakramguda commute',
    },
  },
  hero: {
    eyebrow: 'VIP Hills · Madhapur',
    h1: 'PG near Nanakramguda',
    h1Accent: 'An Established Base for a Growing Address',
    lead:
      'A furnished home in VIP Hills, about 18-20 minutes from Nanakramguda, ISB Hyderabad and Sattva Knowledge City.',
  },
  intro: {
    paragraphs: [
      {
        text:
          "Nanakramguda has grown quickly around ISB, Sattva Knowledge City and a stretch of the Financial District, but the housing around it has not caught up - most options are premium new-build apartments with little in the way of an established PG market. A PG near Nanakramguda at Narenn Living offers a more grounded alternative: a comfortable, furnished home in VIP Hills, Madhapur, about 18-20 minutes away, with a furnished AC room, three home-style meals a day, fast WiFi and daily housekeeping included. Rather than paying premium rent in a still-developing pocket, you get an established neighbourhood with restaurants, clinics and a genuine social life.",
      },
      {
        text:
          'For students, researchers and professionals commuting to Nanakramguda daily, that trade of a slightly longer ride for a properly settled home is usually the better one.',
      },
    ],
  },
  commute: {
    eyebrow: 'Commute Times',
    h2: 'PG near Nanakramguda',
    h2Accent: 'Minutes Away',
    intro: 'From Narenn Living in VIP Hills, the Nanakramguda stretch runs at a steady 17-22 minutes:',
    items: [
      { place: 'Nanakramguda main junction', time: 'about 18 minutes', short: '18m' },
      { place: 'Indian School of Business (ISB)', time: 'around 19-20 minutes', short: '19-20m' },
      { place: 'Financial District core', time: 'roughly 19 minutes', short: '19m' },
      { place: 'Sattva Knowledge City', time: 'about 18-19 minutes', short: '18-19m' },
      { place: 'Wipro Campus', time: 'around 17 minutes', short: '17m' },
      { place: 'Narsingi Road', time: 'roughly 20-22 minutes', short: '20-22m' },
      { place: 'Gopanpally junction', time: 'about 20 minutes', short: '20m' },
    ],
  },
  why: {
    eyebrow: 'Why Madhapur',
    h2: 'Why Base at Narenn Instead of',
    h2Accent: 'Near Nanakramguda',
    paragraphs: [
      "Housing right around Nanakramguda is dominated by recently built, premium apartment complexes catering to ISB faculty, senior executives and long-term corporate tenants - not the kind of market that supports affordable shared PG living. What limited shared housing does exist is often overpriced simply for the ISB or Financial District address. Basing yourself at Narenn Living in VIP Hills instead gives you an established, well-run property with a fixed monthly fee, while Nanakramguda itself stays a consistent 18-20 minutes away - close enough for daily classes or meetings, far enough to actually have a life beyond the campus gates.",
    ],
    links: [
      { to: '/locations/madhapur/', label: 'PG in Madhapur' },
      { to: '/locations/financial-district/', label: 'PG near Financial District' },
    ],
  },
  standard: {
    eyebrow: 'The Narenn Standard',
    h2: 'Rooms, Food, WiFi and',
    h2Accent: 'Daily Care',
    paragraphs: [
      'A commute to Nanakramguda is worth little if home life is unpredictable, which is why Narenn Living keeps the essentials fixed and reliable. Every room is furnished and air-conditioned, our own kitchen serves three home-style meals a day, WiFi is fast enough for coursework, research calls or client meetings, and housekeeping is handled daily by an on-site team. It means whether your day runs long at ISB or the Financial District, the room, the food and the WiFi are exactly as you left them. See our full',
    ],
    links: [
      { to: '/amenities/', label: 'amenities' },
      { to: '/rooms/', label: 'room options' },
    ],
  },
  audience: {
    eyebrow: 'Who It Fits',
    h2: 'Built for People Working Around',
    h2Accent: 'Nanakramguda',
    paragraphs: [
      'Nanakramguda draws a distinct mix compared to the rest of the IT corridor - ISB students and visiting faculty, Sattva Knowledge City tenants, and Financial District professionals whose offices spill over into this stretch. Our residents heading there value a settled home base over living inside a still-developing campus pocket with little to do after hours.',
    ],
    bullets: [
      'ISB Hyderabad students and short-term visiting faculty',
      'Professionals at Sattva Knowledge City and nearby campuses',
      'Financial District employees whose offices extend into Nanakramguda',
      'Anyone wanting an established Madhapur base near a developing IT pocket',
    ],
    links: [{ to: '/coliving-for-it-professionals/', label: 'co-living for IT professionals' }],
  },
  cta: {
    eyebrow: 'Book a Visit',
    h2: 'See the Commute for',
    h2Accent: 'Yourself',
    body: 'Rooms suited to a Nanakramguda commute are limited, especially around ISB term dates and joining season. Call 70759 85666 or book a visit to see the room, the food and the ride to Nanakramguda for yourself.',
    link: { to: '/contact-us/', label: 'book a visit' },
  },
  faqs: [
    {
      question: 'How far is Narenn Living from Nanakramguda?',
      answer:
        'Our VIP Hills location is about 18-20 minutes from Nanakramguda, ISB Hyderabad and Sattva Knowledge City, a genuine but manageable daily commute.',
    },
    {
      question: 'Is this suitable for ISB students or visiting faculty?',
      answer:
        'Yes. Many residents commuting to ISB and nearby campuses prefer an established Madhapur base over the limited, expensive options right around Nanakramguda.',
    },
    {
      question: 'Is there affordable PG accommodation near Nanakramguda itself?',
      answer:
        'Not much - the area is largely premium new-build apartments. A PG near Nanakramguda in Madhapur offers a more affordable, well-managed alternative.',
    },
  ],
  maps: {
    eyebrow: 'VIP Hills',
    h2: 'Our',
    h2Accent: 'Properties',
    body: 'Four Narenn Living properties share one VIP Hills address, about 18-20 minutes from Nanakramguda. Same contact for all visits.',
    streetAddress: 'VIP Hills, Road 21, Silicon Valley, Madhapur',
    locality: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500084',
  },
  finalCta: {
    title: 'Ready to Move Near',
    titleAccent: 'Nanakramguda?',
    description: 'Call 70759 85666 to hold a room against your joining date.',
  },
};
