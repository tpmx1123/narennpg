import { LOCATION_HERO_IMAGE, SITE_URL } from '../sitePages';

const FALLBACK =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp';

export default {
  slug: 'miyapur',
  area: 'Miyapur',
  keyword: 'PG near Miyapur',
  page: {
    path: '/locations/miyapur/',
    title: 'PG near Miyapur, Hyderabad | Narenn Living',
    description:
      'Furnished co-living connected to Miyapur via metro. AC rooms, meals, WiFi & housekeeping in VIP Hills, Madhapur. Book a free visit.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    ogImage: LOCATION_HERO_IMAGE,
  },
  images: {
    hero: {
      src: LOCATION_HERO_IMAGE,
      fallback: LOCATION_HERO_IMAGE,
      alt: 'PG near Miyapur, Hyderabad - Narenn Living VIP Hills, Madhapur',
      title: 'PG near Miyapur',
    },
    commute: {
      src: `${SITE_URL}/images/miyapur-metro-commute-from-madhapur.jpg`,
      fallback: FALLBACK,
      alt: 'Metro commute route from Madhapur to Miyapur via Durgam Cheruvu and Ameerpet',
      title: 'Miyapur commute',
    },
  },
  hero: {
    eyebrow: 'VIP Hills · Madhapur',
    h1: 'PG near Miyapur',
    h1Accent: 'Connected by Metro, Minutes from Madhapur',
    lead:
      'A fully managed home in VIP Hills, Madhapur, linked to Miyapur by a direct Metro ride via Durgam Cheruvu and Ameerpet.',
  },
  intro: {
    paragraphs: [
      {
        text:
          "Miyapur anchors the northern end of the Red Line, and for anyone working there without wanting to live at that end of the city, the Metro changes the equation entirely. A PG near Miyapur at Narenn Living puts you in VIP Hills, Madhapur - a short ride from Durgam Cheruvu, our nearest Metro station, with a direct Blue Line to Ameerpet and an interchange onto the Red Line straight to Miyapur. You still get a furnished AC room, four home-style meals a day, fast WiFi and daily housekeeping, with the Metro doing the heavy lifting on the commute itself.",
      },
      {
        text:
          "It works well for residents who'd rather read or scroll through a Metro ride than sit in traffic, and who want Madhapur's restaurants and community waiting at the other end.",
      },
    ],
  },
  commute: {
    eyebrow: 'Commute Times',
    h2: 'PG near Miyapur',
    h2Accent: 'Key Distances',
    intro: "The Miyapur commute runs mostly on rails rather than roads - here's how it breaks down from VIP Hills:",
    items: [
      { place: 'Durgam Cheruvu Metro (nearest station)', short: '8m', time: 'about 8-10 minutes' },
      { place: 'Ameerpet interchange', short: '20m', time: 'roughly 20 minutes by Metro' },
      { place: 'Miyapur Metro terminus', short: '45m', time: 'around 45-50 minutes door to door' },
      { place: 'JNTU Metro', short: '40m', time: 'about 40 minutes by Metro' },
      { place: 'KPHB Colony', short: '40m', time: 'roughly 40-45 minutes' },
      { place: 'Miyapur X Roads (by road)', short: '35m', time: 'around 35-40 minutes' },
    ],
  },
  why: {
    eyebrow: 'Why Madhapur',
    h2: 'Why Base at Narenn Instead of',
    h2Accent: 'Inside Miyapur',
    paragraphs: [
      "Miyapur by road can take well over 40 minutes in peak traffic, which is why most of our residents who work there use the Metro instead - it's slower in a straight line but far more predictable, and you can work or scroll through it rather than watch a meter or a fuel gauge. Basing yourself in Madhapur rather than near Miyapur itself also means you're living in an area with an established restaurant and gym scene, rather than the more residential, spread-out stretch around the terminus.",
      "It's a genuine trade-off worth being upfront about: Miyapur is not a short ride from VIP Hills either by road or rail. What you gain is a predictable Metro commute plus a neighbourhood with far more going on after work.",
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
      "Every room is fully furnished and air-conditioned, with fibre WiFi strong enough to take a call before you leave for the Metro or right after you're back. Four home-style meals a day mean a 45-minute door-to-door commute doesn't also cost you an hour in the kitchen at either end. Daily housekeeping, laundry support and biometric no-curfew access fit around Metro timings and shift schedules alike, without a fixed gate time forcing your hand.",
    ],
    links: [
      { to: '/rooms/', label: 'room options' },
      { to: '/amenities/', label: 'amenities' },
    ],
  },
  audience: {
    eyebrow: 'Who It Fits',
    h2: 'Built for Metro Commuters',
    h2Accent: 'to Miyapur',
    paragraphs: [
      'This is a good fit for IT professionals working at Miyapur, JNTU or along the KPHB stretch who would rather commute by Metro than fight Miyapur road traffic twice a day, and who want to come home to an established neighbourhood rather than the newer developments near the terminus. It particularly suits people early in a Metro-based routine - the Durgam Cheruvu to Ameerpet to Miyapur run becomes second nature within a couple of weeks, and residents often use the ride itself to catch up on calls, reading or admin that is harder to fit in otherwise.',
    ],
    bullets: [
      'IT professionals at Miyapur, JNTU or the KPHB stretch who prefer Metro over road traffic',
      'Residents who use commute time productively rather than driving themselves',
      "Anyone who wants Madhapur's restaurants and community at the other end of the ride",
      'Professionals open to a Metro-based routine rather than a short direct drive',
    ],
    links: [{ to: '/coliving-for-it-professionals/', label: 'co-living for IT professionals' }],
  },
  cta: {
    eyebrow: 'Book a Visit',
    h2: 'Time the Miyapur Commute',
    h2Accent: 'For Yourself',
    body:
      "If a Metro-based commute to Miyapur sounds workable, the best way to know for sure is to time it yourself. Call 70759 85666 or message us on WhatsApp to book a free visit - we'll show you the room, a typical day's meals, and the walk to Durgam Cheruvu station so you can judge the ride firsthand. Rooms close to a Metro-connected base like ours don't stay open long, particularly during hiring season, so it's worth checking availability before you finalise anything.",
    link: { to: '/contact-us/', label: 'book a visit' },
  },
  faqs: [
    {
      question: 'How do I commute from Narenn Living to Miyapur?',
      answer:
        "By Metro - it's about 8-10 minutes to our nearest station, Durgam Cheruvu, then a Blue Line ride to Ameerpet and a Red Line interchange on to Miyapur, roughly 45-50 minutes door to door.",
    },
    {
      question: 'Is Miyapur too far from Madhapur for a daily commute?',
      answer:
        "By road it's a genuine 35-40 minutes minimum; most residents working at Miyapur prefer the Metro route for its predictability, even though it isn't shorter in a straight line.",
    },
    {
      question: "What if my office is closer to the Blue Line's southern stretch?",
      answer:
        'Our PG near Hitech City page covers that shorter commute if your office sits nearer Hitech City or Raidurg instead of Miyapur.',
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
    titleAccent: 'Miyapur, by Metro',
    description:
      'See the room and time the Metro ride to Miyapur for yourself. Call 70759 85666 or WhatsApp us to schedule a free visit.',
  },
};
