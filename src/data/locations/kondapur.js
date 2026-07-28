import { SITE_URL } from '../sitePages';

const FALLBACK =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp';

export default {
  slug: 'kondapur',
  area: 'Kondapur',
  keyword: 'PG near Kondapur',
  page: {
    path: '/locations/kondapur/',
    title: 'PG near Kondapur, Hyderabad - 10 Min Away | Narenn Living',
    description:
      'Premium PG & co-living 8-10 minutes from Kondapur. AC rooms with food, WiFi & housekeeping in Madhapur VIP Hills. Book a free visit today.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    ogImage: `${SITE_URL}/images/pg-near-kondapur-hyderabad-hero.jpg`,
  },
  images: {
    hero: {
      src: `${SITE_URL}/images/pg-near-kondapur-hyderabad-hero.jpg`,
      fallback: FALLBACK,
      alt: 'PG near Kondapur, Hyderabad - Narenn Living VIP Hills, Madhapur',
      title: 'PG near Kondapur',
    },
    commute: {
      src: `${SITE_URL}/images/kondapur-commute-from-madhapur.jpg`,
      fallback: FALLBACK,
      alt: 'Commute route from Narenn Living Madhapur to Kondapur main road and Botanical Garden',
      title: 'Kondapur commute',
    },
  },
  hero: {
    eyebrow: 'VIP Hills · Madhapur',
    h1: 'PG near Kondapur',
    h1Accent: 'Comfort Minutes from Home and Office',
    lead:
      'A fully managed home in VIP Hills, just 8-10 minutes from Kondapur X Roads and the Botanical Garden stretch.',
  },
  intro: {
    paragraphs: [
      {
        text:
          "Kondapur's own rental market is tight, noisy and built mostly out of converted independent houses - fine for a lease, not so fine for daily comfort. A PG near Kondapur at Narenn Living solves that by putting you in VIP Hills, Madhapur, just 8-10 minutes from Kondapur X Roads, Botanical Garden Road and the IT offices along that stretch. You get a proper furnished AC room, four home-style meals a day, fast WiFi and daily housekeeping - the kind of standardised, well-run setup that is hard to find inside Kondapur itself.",
      },
      {
        text:
          "For anyone working at the IT parks and mid-size offices dotted along Kondapur's main road, this short commute buys a noticeably better place to live without adding real travel time to the day.",
      },
    ],
  },
  commute: {
    eyebrow: 'Commute Times',
    h2: 'PG near Kondapur',
    h2Accent: 'Key Distances',
    intro: 'From Narenn Living in VIP Hills, the Kondapur stretch is a short, predictable ride:',
    items: [
      { place: 'Kondapur X Roads', time: 'about 8-10 minutes', short: '8-10m' },
      { place: 'Botanical Garden Road', time: 'roughly 10-12 minutes', short: '10-12m' },
      { place: 'Kothaguda Junction', time: 'around 9-10 minutes', short: '9-10m' },
      { place: 'Kothaguda IT Park', time: 'about 10 minutes', short: '10m' },
      { place: 'Hitec City west edge (Cyber Pearl)', time: 'around 5-6 minutes', short: '5-6m' },
      { place: 'Inorbit Mall', time: 'roughly 6-8 minutes', short: '6-8m' },
      { place: 'Nallagandla', time: 'about 15-18 minutes', short: '15-18m' },
    ],
  },
  why: {
    eyebrow: 'Why Madhapur',
    h2: 'Why Base at Narenn Instead of',
    h2Accent: 'Inside Kondapur',
    paragraphs: [
      "Kondapur's PG scene grew fast to soak up IT demand, and it shows: most beds sit inside repurposed 2BHKs and independent houses never designed for shared living, parking is a daily fight, and food is usually outsourced with no real quality control. Rents per bed are often as high as VIP Hills, without the property management, security or common spaces to justify it. Basing yourself at Narenn Living instead gives you a purpose-run building with a fixed monthly fee, an in-house kitchen you can actually walk into, and a commute to Kondapur that stays under ten minutes regardless of which company along that stretch you work for.",
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
      'If you have already lived in a Kondapur PG, you know the pattern - a landlord who visits once a month, WiFi that drops during a call, and food that changes cooks every few weeks. Narenn Living runs the opposite way: our own kitchen serves four meals a day on a fixed schedule, fibre WiFi is provisioned for video calls and VPNs, and housekeeping and laundry are handled daily rather than left to residents. Every room is furnished, AC-fitted and maintained by an on-site team you can actually reach, so the basics of daily life stay sorted while your Kondapur commute stays short. Compare our',
    ],
    links: [
      { to: '/rooms/', label: 'room options' },
      { to: '/amenities/', label: 'amenities' },
    ],
  },
  audience: {
    eyebrow: 'Who It Fits',
    h2: 'Built for People Working Around',
    h2Accent: 'Kondapur',
    paragraphs: [
      'Kondapur hosts a mix of mid-size IT companies, BPOs and back-office units, plus overflow staff from the bigger Hitech City campuses next door. Our residents commuting into that stretch range from first-jobbers to five-year professionals who have simply grown tired of Kondapur\'s bed-and-breakfast PG standard. A short, predictable ride each morning matters more to them than shaving off the last two kilometres.',
    ],
    bullets: [
      'Software and support staff at Kondapur IT parks and business centres',
      'BPO and back-office employees on rotating shift schedules',
      'Engineers who split projects between Kondapur and Hitech City',
      'Professionals upgrading out of cramped Kondapur PGs',
    ],
    links: [{ to: '/coliving-for-it-professionals/', label: 'co-living for IT professionals' }],
  },
  cta: {
    eyebrow: 'Book a Visit',
    h2: 'See the Commute for',
    h2Accent: 'Yourself',
    body: 'Rooms suited for a Kondapur commute move quickly, especially around month-end joining dates. Call 70759 85666 or book a visit and see the room, the kitchen and the ten-minute ride to Kondapur before you decide anything.',
    link: { to: '/contact-us/', label: 'book a visit' },
  },
  faqs: [
    {
      question: 'How far is Narenn Living from Kondapur?',
      answer:
        'Our VIP Hills location is about 8-10 minutes from Kondapur X Roads and the Botanical Garden stretch, an easy daily ride by bike or cab.',
    },
    {
      question: 'Is this a good PG near Kondapur for IT employees?',
      answer:
        'Yes. It suits anyone working at Kondapur IT parks who wants a shorter commute than most Kondapur PGs plus better rooms, food and management.',
    },
    {
      question: 'Why not just rent a PG inside Kondapur?',
      answer:
        'Kondapur PGs are mostly converted houses with inconsistent food and management. Narenn Living offers a purpose-run property in VIP Hills, only minutes further.',
    },
  ],
  maps: {
    eyebrow: 'VIP Hills',
    h2: 'Our',
    h2Accent: 'Properties',
    body: 'Four Narenn Living properties share one VIP Hills address, around 8-10 minutes from Kondapur. Same contact for all visits.',
    streetAddress: 'VIP Hills, Road 21, Silicon Valley, Madhapur',
    locality: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500084',
  },
  finalCta: {
    title: 'Ready to Move Near',
    titleAccent: 'Kondapur?',
    description: 'Call 70759 85666 to hold a room against your joining date.',
  },
};
