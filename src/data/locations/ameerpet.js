import { SITE_URL } from '../sitePages';

const FALLBACK =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp';

export default {
  slug: 'ameerpet',
  area: 'Ameerpet',
  keyword: 'PG near Ameerpet',
  page: {
    path: '/locations/ameerpet/',
    title: 'PG near Ameerpet, Hyderabad | Narenn Living',
    description:
      "Co-living connected to Ameerpet's coaching hub via metro. Furnished AC rooms, meals & WiFi in Madhapur. Book a free visit today.",
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    ogImage: `${SITE_URL}/images/pg-near-ameerpet-hyderabad-hero.jpg`,
  },
  images: {
    hero: {
      src: `${SITE_URL}/images/pg-near-ameerpet-hyderabad-hero.jpg`,
      fallback: FALLBACK,
      alt: 'PG near Ameerpet, Hyderabad - Narenn Living VIP Hills, Madhapur',
      title: 'PG near Ameerpet',
    },
    commute: {
      src: `${SITE_URL}/images/ameerpet-metro-commute-from-madhapur.jpg`,
      fallback: FALLBACK,
      alt: "Metro commute route from Madhapur to Ameerpet's coaching institutes",
      title: 'Ameerpet commute',
    },
  },
  hero: {
    eyebrow: 'VIP Hills · Madhapur',
    h1: 'PG near Ameerpet',
    h1Accent: "Metro-Linked to Hyderabad's Coaching Hub",
    lead:
      "A fully managed home in VIP Hills, Madhapur, a direct Metro ride from Ameerpet's coaching institutes and interchange station.",
  },
  intro: {
    paragraphs: [
      {
        text:
          "Ameerpet is where half of Hyderabad seems to go for coaching classes, certifications and competitive exam prep, packed along RTC X Roads and the lanes around SR Nagar. A PG near Ameerpet at Narenn Living gives students a comfortable, fully managed home in VIP Hills, Madhapur, linked to the Ameerpet Metro interchange by a direct Blue Line ride - no changing autos, no navigating the coaching-lane crowds to find a room. You get a furnished AC room, four home-style meals a day, fast WiFi and daily housekeeping, in a neighbourhood calmer than Ameerpet's packed institute lanes.",
      },
      {
        text:
          "It's built for students who need to be at class on time but would rather live somewhere with actual space to breathe once the day is done.",
      },
    ],
  },
  commute: {
    eyebrow: 'Commute Times',
    h2: 'PG near Ameerpet',
    h2Accent: 'Key Distances',
    intro: 'The Ameerpet run is a straightforward Metro ride from our nearest station:',
    items: [
      { place: 'Durgam Cheruvu Metro (nearest station)', short: '8m', time: 'about 8-10 minutes' },
      { place: 'Ameerpet Metro interchange', short: '20m', time: 'roughly 20-22 minutes by Metro' },
      { place: 'SR Nagar coaching lane', short: '22m', time: 'around 22-25 minutes' },
      { place: 'RTC X Roads', short: '25m', time: 'roughly 25 minutes' },
      { place: 'Punjagutta', short: '15m', time: 'about 15-18 minutes' },
      { place: 'Ameerpet (by road)', short: '25m', time: 'around 25-30 minutes' },
    ],
  },
  why: {
    eyebrow: 'Why Madhapur',
    h2: 'Why Base at Narenn Instead of',
    h2Accent: 'Inside Ameerpet',
    paragraphs: [
      "Ameerpet's coaching lanes are built for one thing - back-to-back classes - and student housing packed into that stretch tends to reflect it: small rooms, thin walls, little beyond the institutes themselves. Basing yourself in Madhapur instead gets you the same direct Metro ride to class, but a home base with an actual restaurant scene, gyms, parks and a mixed co-living community rather than a block of exam-focused strangers.",
      "It also means your living situation doesn't have to change if your coaching schedule does - whether you're prepping for banking exams, group discussions, or a software certification, the ride to Ameerpet stays the same.",
    ],
    links: [
      { to: '/locations/madhapur/', label: 'PG in Madhapur' },
      { to: '/locations/begumpet/', label: 'PG near Begumpet' },
    ],
  },
  standard: {
    eyebrow: 'The Narenn Standard',
    h2: 'Rooms, Food, WiFi and',
    h2Accent: 'Daily Care',
    paragraphs: [
      'Every room at Narenn Living is fully furnished and air-conditioned, with a proper desk for study sessions and fibre WiFi steady enough for recorded lectures and mock tests alike. Four home-style meals a day mean you are not choosing between attending an evening class and cooking dinner. Daily housekeeping and laundry support are handled for you, and biometric no-curfew access respects that exam season does not run on a fixed clock.',
    ],
    links: [
      { to: '/rooms/', label: 'room options' },
      { to: '/amenities/', label: 'amenities' },
    ],
  },
  audience: {
    eyebrow: 'Who It Fits',
    h2: 'Built for Students Heading',
    h2Accent: 'to Ameerpet',
    paragraphs: [
      "This location is built primarily around students commuting to Ameerpet's coaching institutes - for competitive exams, banking and government job prep, spoken English, or software certifications clustered around SR Nagar and RTC X Roads. Rather than squeezing into a room near the institute lanes themselves, you get a short Metro ride each way and a home base with real space, better food and a community that isn't defined entirely by the next test date. It also suits students whose coaching runs alongside a college course elsewhere in the city, since the Metro connects onward easily from Ameerpet.",
    ],
    bullets: [
      'Students preparing for competitive, banking or government exams at Ameerpet institutes',
      'Those attending software certification or spoken English courses around SR Nagar',
      'Students who want a Metro-connected base rather than a room inside the coaching lanes',
      'Anyone combining Ameerpet coaching with a college course elsewhere in the city',
    ],
    links: [{ to: '/pg-for-students/', label: 'PG for students' }],
  },
  cta: {
    eyebrow: 'Book a Visit',
    h2: 'Secure Your Room Before',
    h2Accent: 'Your Batch Starts',
    body:
      "If you're joining a course at Ameerpet, don't leave finding a place to live until the week classes start. Call 70759 85666 or message us on WhatsApp to check current availability and book a free visit - we'll show you the room, the food and the Metro ride to Ameerpet in person. Batches fill quickly around coaching admission seasons, and so do our rooms at the same time, so it's worth locking one in as soon as you've confirmed your course.",
    link: { to: '/contact-us/', label: 'book a visit' },
  },
  faqs: [
    {
      question: 'How do I get from Narenn Living to Ameerpet?',
      answer:
        'By Metro - about 8-10 minutes to our nearest station, Durgam Cheruvu, then a direct Blue Line ride to the Ameerpet interchange, roughly 20-22 minutes.',
    },
    {
      question: 'Is this PG suitable for students attending Ameerpet coaching classes?',
      answer:
        'Yes, it is built specifically for that - a Metro-connected base with study-friendly rooms, four meals a day and no-curfew access around class timings.',
    },
    {
      question: 'What if my coaching institute is nearer Begumpet instead?',
      answer:
        'Our PG near Begumpet page covers that shorter, slightly different commute if your classes are on that side of the city.',
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
    titleAccent: 'Ameerpet Coaching Commute',
    description:
      "See the room and time the Metro ride to Ameerpet before your batch starts. Call 70759 85666 or WhatsApp us for a free visit.",
  },
};
