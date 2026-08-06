import { SITE_URL } from './sitePages';

export const IT_PAGE = {
  path: '/coliving-for-it-professionals/',
  title: 'Co-Living for IT Professionals in Madhapur | Near Hitech City',
  description:
    'Work-ready co-living for IT professionals in Madhapur, minutes from Hitech City & Financial District. AC rooms, fast WiFi, meals & housekeeping. Book a visit.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage: `${SITE_URL}/images/co-living-for-it-professionals-madhapur-hero.jpg`,
};

export const IT_IMAGES = {
  hero: {
    src: `${SITE_URL}/images/co-living-for-it-professionals-madhapur-hero.jpg`,
    fallback:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp',
    alt: 'IT professional working from a co-living room in Madhapur near Hitech City',
    title: 'Co-living for IT professionals',
  },
  wfh: {
    src: `${SITE_URL}/images/wfh-desk-setup-high-speed-wifi-co-living-madhapur.jpg`,
    fallback:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121459/Narenn-Elite-3-1200x750_ndmzod.webp',
    alt: 'Work from home setup with high-speed WiFi in a Madhapur co-living room',
    title: 'WFH WiFi setup',
  },
  shifts: {
    src: `${SITE_URL}/images/night-shift-friendly-co-living-biometric-no-curfew.jpg`,
    fallback:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121459/Narenn-Elite-6-1200x750_h0uzb7.webp',
    alt: 'Biometric no-curfew entry supporting night shift IT professionals in Madhapur',
    title: 'Night shift friendly access',
  },
  commute: {
    src: `${SITE_URL}/images/commute-hitech-city-mindspace-from-vip-hills.jpg`,
    fallback:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1784114731/image-03-2_ze1iph.webp',
    alt: 'Short commute from VIP Hills co-living to Hitech City and Mindspace offices',
    title: 'Hitech City commute',
  },
};

export const IT_HERO = {
  eyebrow: 'Work-Ready Co-Living',
  h1: 'Co-Living for IT Professionals in Madhapur',
  h1Accent: 'Hyderabad',
  lead:
    'Purpose-built around your commute, your calls and your need for reliable comfort - minutes from Hitech City.',
};

export const IT_INTRO = [
  'For an IT professional, where you live has a direct impact on how well you work and how much of your day is truly yours. Narenn Living offers co-living for IT professionals in Madhapur, purpose-built around your commute, your calls and your need for reliable comfort. From our VIP Hills base you are just 5-10 minutes from Hitech City and Cyber Towers, and 15-20 minutes from Gachibowli and the Financial District - so you swap long, draining commutes for extra time, energy and sleep.',
  'Every room is fully furnished, air-conditioned and served by high-speed WiFi built for video calls and work-from-home. Add three home-style meals a day, daily housekeeping and biometric no-curfew access, and your entire home life is handled - leaving you free to focus on your career.',
];

export const IT_NEEDS = {
  eyebrow: 'Daily Essentials',
  h2: 'Everything a Working Professional Needs',
  h2Accent: 'Needs',
  intro: 'We designed this experience for people whose time and focus matter. Here is what you can count on every single day:',
  bullets: [
    'A fast commute — minutes from Hitech City, Gachibowli and the Financial District',
    'High-speed, reliable WiFi engineered for calls and remote work',
    'Quiet, private single sharing rooms available for deep focus',
    'Three fresh meals a day so you never cook after a long shift',
    'Biometric no-curfew access that fits any work schedule',
    'daily housekeeping and 24/7 security',
  ],
};

export const IT_COMMUTE = {
  eyebrow: 'Location Advantage',
  h2: 'A Commute That Gives Time Back',
  h2Accent: 'Time Back',
  paragraphs: [
    'The difference between a 40-minute commute and a 10-minute one is more than half a working day every week. Our location is our biggest gift to residents. Whether your office is in Hitech City or Gachibowli, you can reach it quickly by bike, cab or company shuttle.',
  ],
  linksLead: 'Explore our dedicated guides to living as a',
  links: [
    { to: '/locations/hitech-city/', label: 'PG near Hitech City' },
    { to: '/locations/gachibowli/', label: 'PG near Gachibowli' },
  ],
  linksTrail: 'to see exactly how connected you will be.',
};

export const IT_WFH = {
  eyebrow: 'Hybrid Ready',
  h2: 'Built for Work-From-Home and Hybrid Schedules',
  h2Accent: 'Hybrid Schedules',
  paragraphs: [
    'Hybrid work is here to stay, and a slow connection or noisy room can wreck a work-from-home day. Our rooms are equipped with strong, stable WiFi, and our',
  ],
  link: { to: '/rooms/single-sharing/', label: 'single sharing rooms' },
  paragraphsAfter: [
    'give you a private, professional setting for uninterrupted calls and focused work. It is an environment that supports both your in-office days and your at-home ones.',
  ],
};

export const IT_RECHARGE = {
  eyebrow: 'After Hours',
  h2: 'Recharge After Work',
  h2Accent: 'After Work',
  paragraphs: [
    'Life is not all work, and Narenn Living is built for the recharge too. Come home to a clean room, a hot dinner and a community of like-minded professionals. Unwind on the terrace, join a weekend get-together, or simply enjoy a quiet evening knowing everything is taken care of.',
  ],
  link: { to: '/amenities/', label: 'work-ready amenities' },
  linkLead: 'See all the',
  linkTrail: 'that make life here comfortable.',
};

export const IT_INCLUSIVE = {
  eyebrow: 'One Fee',
  h2: 'Simple, All-Inclusive Living',
  h2Accent: 'Living',
  paragraphs: [
    'No furniture to buy, no cook or maid to manage, no internet bills to chase, no brokerage to pay. One transparent monthly fee covers your room, meals, WiFi, housekeeping, security and amenities. For a busy professional, that simplicity is priceless - it removes the mental load of running a household so you can put your energy where it counts.',
  ],
};

export const IT_BOOK = {
  eyebrow: 'Next Step',
  h2: 'Book Your Visit',
  h2Accent: 'Visit',
  body: 'See for yourself why so many engineers and IT professionals make Narenn Living their Hyderabad home. Call 70759 85666 or book a visit, and we will show you the rooms, the food and the fast-commute location that could give you back hours of your week.',
};

export const IT_SHIFTS = {
  eyebrow: 'Shift Friendly',
  h2: 'Built Around Shifts, Not Against Them',
  h2Accent: 'Against Them',
  paragraphs: [
    'Most PGs are designed as though everyone works nine to six. IT does not work that way. There are 2 AM releases, on-call rotations, US-hours support shifts, EU-hours standups, and the fortnight before a go-live when you barely see daylight.',
    'So we removed every rule that punishes that. Biometric access with no curfew means your shift decides your timing. Night-shift residents are matched with each other so daytime sleep is not a battle. The kitchen accommodates off-cycle meal timings. Housekeeping works around a sleeping resident rather than through them. None of this is a special favour - it is just what an IT-corridor co-living should have been doing all along.',
  ],
};

export const IT_INFRA = {
  eyebrow: 'Work Calls',
  h2: 'Infrastructure That Holds Up on a Work Call',
  h2Accent: 'Work Call',
  bullets: [
    'Fibre WiFi provisioned for video calls, VPN tunnels and large repository pulls, with backup connectivity',
    'Power backup, so an outage does not cost you a client meeting',
    'Strong fibre WiFi in every room - built for video calls and VPNs',
    'Multiple charging points in the room and at the bedside',
    'Quiet common areas usable as breakout space when your room feels small',
  ],
};

export const IT_MATHS = {
  eyebrow: 'Location ROI',
  h2: 'The Commute Maths',
  h2Accent: 'Maths',
  paragraphs: [
    'From VIP Hills, Madhapur: Hitech City, Mindspace, Raheja and Cyber Towers are a 5 to 10 minute reach. Kondapur and Durgam Cheruvu are a similar distance. Gachibowli, Nanakramguda and the Financial District land around 20 minutes.',
    'Compare that against a PG in a cheaper suburb with a 45-minute one-way commute. That is ninety minutes a day, roughly 375 hours a year, plus the cab or fuel cost of every one of those trips. The rent you saved is gone by month four and the time never comes back. Location is the highest-return line item in your monthly budget, and it is the one people cut first.',
  ],
};

export const IT_FAQ_HEADING = {
  eyebrow: 'FAQ',
  h2: 'Frequently Asked Questions',
  h2Accent: 'Questions',
};

export const IT_FAQS = [
  {
    question: 'How far is Narenn Living from Hitech City for daily commute?',
    answer:
      'Our VIP Hills location is roughly 5-10 minutes from Hitech City and Cyber Towers, and 15-20 minutes from Gachibowli and the Financial District.',
  },
  {
    question: 'Is the WiFi good enough for work-from-home?',
    answer:
      'Yes. We provide high-speed, reliable WiFi designed to handle video calls, large downloads and remote work without interruption.',
  },
  {
    question: 'Do you have rooms suited to professionals who take late calls?',
    answer:
      'Our private single sharing rooms are ideal for professionals who need quiet and privacy, and our biometric no-curfew access fits any work schedule.',
  },
];

export const IT_FINAL_CTA = {
  title: 'Ready for work-ready co-living?',
  titleAccent: 'co-living?',
  body: 'Book a free visit and see how minutes from Hitech City change your week — rooms, WiFi, meals and no-curfew access included.',
};
