import { LOCATION_HERO_IMAGE, SITE_URL } from '../sitePages';

const FALLBACK =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp';

export default {
  slug: 'kothaguda',
  area: 'Kothaguda',
  keyword: 'PG near Kothaguda',
  page: {
    path: '/locations/kothaguda/',
    title: 'PG near Kothaguda, Hyderabad | Co-Living | Narenn Living',
    description:
      'Premium PG & co-living minutes from Kothaguda junction. AC rooms, four meals, WiFi & housekeeping in Madhapur. Book a visit today.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    ogImage: LOCATION_HERO_IMAGE,
  },
  images: {
    hero: {
      src: LOCATION_HERO_IMAGE,
      fallback: LOCATION_HERO_IMAGE,
      alt: 'PG near Kothaguda, Hyderabad - Narenn Living VIP Hills, Madhapur',
      title: 'PG near Kothaguda',
    },
    commute: {
      src: `${SITE_URL}/images/kothaguda-junction-commute-from-madhapur.jpg`,
      fallback: FALLBACK,
      alt: 'Commute route from Madhapur to Kothaguda Junction and Botanical Garden Road',
      title: 'Kothaguda commute',
    },
  },
  hero: {
    eyebrow: 'VIP Hills · Madhapur',
    h1: 'PG near Kothaguda',
    h1Accent: 'Minutes From Kothaguda Junction',
    lead:
      'A fully managed home in VIP Hills, Madhapur, just minutes from the Kothaguda junction, Botanical Garden Road and the Clearview tech park.',
  },
  intro: {
    paragraphs: [
      {
        text:
          "Kothaguda sits at the western edge of Hyderabad's IT corridor, where Botanical Garden Road, the Kothaguda flyover and a cluster of tech parks meet the daily traffic of the Hitech City stretch. A PG near Kothaguda at Narenn Living puts you close to all of it without asking you to live inside the junction itself - our VIP Hills address in Madhapur is a short, mostly signal-free ride from Kothaguda Junction, Clearview and the offices along Botanical Garden Road. You get a furnished AC room, four home-style meals a day, fast WiFi and daily housekeeping, in a neighbourhood that has far more going on after 7 PM than Kothaguda does.",
      },
      {
        text:
          "It suits engineers who want the short commute without giving up Madhapur's restaurants, gyms and social life once the workday ends.",
      },
    ],
  },
  commute: {
    eyebrow: 'Commute Times',
    h2: 'PG near Kothaguda',
    h2Accent: 'Key Distances',
    intro:
      'From VIP Hills, the Kothaguda stretch and its surrounding tech parks are a quick, mostly uncomplicated ride:',
    items: [
      { place: 'Kothaguda Junction', short: '10m', time: 'about 10-12 minutes' },
      { place: 'Botanical Garden Road', short: '8m', time: 'around 8-10 minutes' },
      { place: 'Clearview IT Park', short: '10m', time: 'roughly 10 minutes' },
      { place: 'Kothaguda flyover', short: '12m', time: 'about 12 minutes' },
      { place: 'Kondapur X Roads', short: '10-12m', time: 'around 10-12 minutes' },
      { place: 'Chandanagar Road junction', short: '15m', time: 'roughly 15 minutes' },
    ],
  },
  why: {
    eyebrow: 'Why Madhapur',
    h2: 'Why Base at Narenn Instead of',
    h2Accent: 'Inside Kothaguda',
    paragraphs: [
      'Kothaguda itself is mostly office parks and through-traffic - there is very little to do there once you clock out. Basing yourself in Madhapur instead means you get the same short ride to work every morning, but come home to an actual neighbourhood: sit-down restaurants, cafes, gyms, pharmacies and a running co-living community, all inside VIP Hills or a five-minute walk from it.',
      'Residents who work off Botanical Garden Road or at Clearview make the Kothaguda run daily by bike or cab without it eating into their morning, and most say the traffic is lighter than the Hitech City stretch itself since it avoids the worst signal near Cyber Towers.',
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
      "Every room at Narenn Living is fully furnished and air-conditioned, with fibre WiFi built for video calls and remote work days, plus a proper desk for anyone splitting time between office and WFH. Four meals a day come out of our own kitchen, so a quick commute doesn't get undone by an hour of cooking after work. Daily housekeeping, laundry support and biometric no-curfew access mean your evening starts the moment you walk in, whatever time that is.",
    ],
    links: [
      { to: '/rooms/', label: 'room options' },
      { to: '/amenities/', label: 'amenities' },
    ],
  },
  audience: {
    eyebrow: 'Who It Fits',
    h2: 'Built for the Kothaguda-Hitech City',
    h2Accent: 'Corridor',
    paragraphs: [
      "Kothaguda pulls a specific kind of resident - engineers and product teams at the tech parks along Botanical Garden Road, plus a fair number of people who split their week between Kothaguda and the Hitech City core just a few minutes further in. Both are an easy, similar-length ride from VIP Hills, so a change of office rarely means a change of commute. It works well if you want a short, predictable ride to a specific office park rather than a long one to the centre of the IT corridor, and if you'd rather spend your evenings in Madhapur's restaurants and cafes than in Kothaguda's quieter office-park streets.",
    ],
    bullets: [
      'Engineers and QA teams at Clearview and Botanical Garden Road offices',
      'Product and support staff working the Kothaguda-Hitech City stretch',
      'Professionals who want a short ride without living inside an office park',
      'Hybrid workers needing fast WiFi on split office/WFH weeks',
    ],
    links: [{ to: '/coliving-for-it-professionals/', label: 'co-living for IT professionals' }],
  },
  cta: {
    eyebrow: 'Book a Visit',
    h2: 'See the Kothaguda Commute',
    h2Accent: 'For Yourself',
    body:
      "Rooms near the Kothaguda stretch move quickly once a new hiring cycle starts, and ours are no exception. Call 70759 85666 or message us on WhatsApp to check what's open this month and book a free visit - we'll show you the room, the kitchen and the actual ride to Kothaguda Junction before you decide anything. If you're relocating for a new role, tell us your joining date and we'll try to hold a room against it, rather than have you searching the week you land.",
    link: { to: '/contact-us/', label: 'book a visit' },
  },
  faqs: [
    {
      question: 'How far is Narenn Living from Kothaguda Junction?',
      answer:
        'Our VIP Hills location in Madhapur is about 10-12 minutes from Kothaguda Junction and the offices along Botanical Garden Road, a short daily ride by bike or cab.',
    },
    {
      question: 'Is a PG near Kothaguda better than one right at the junction?',
      answer:
        'For most people, yes. Kothaguda itself has little beyond office parks, while a short ride away in Madhapur you get restaurants, gyms and a full co-living community alongside the same easy commute.',
    },
    {
      question: 'Can I switch offices between Kothaguda and Hitech City without moving?',
      answer:
        'Yes. Both are within a similar short ride from VIP Hills, so residents who change teams or offices along that stretch keep the same commute.',
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
    titleAccent: 'Kothaguda Commute',
    description:
      'See how easy the ride from Madhapur to Kothaguda feels before you decide. Call 70759 85666 or WhatsApp us to schedule a free visit.',
  },
};
