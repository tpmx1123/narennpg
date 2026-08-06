import { LOCATION_HERO_IMAGE, SITE_URL } from './sitePages';

export const GACHIBOWLI_PAGE = {
  path: '/locations/gachibowli/',
  title: 'PG near Gachibowli, Hyderabad | Co-Living & Furnished Rooms',
  description:
    'Premium PG & co-living a short commute from Gachibowli & Financial District. AC rooms, three meals, WiFi & housekeeping in Madhapur. Book a free visit at Narenn Living.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage: LOCATION_HERO_IMAGE,
};

export const GACHIBOWLI_IMAGES = {
  hero: {
    src: LOCATION_HERO_IMAGE,
    fallback: LOCATION_HERO_IMAGE,
    alt: 'PG near Gachibowli, Hyderabad - Narenn Living VIP Hills, Madhapur',
    title: 'PG near Gachibowli',
  },
  commute: {
    src: `${SITE_URL}/images/gachibowli-financial-district-commute-from-madhapur.jpg`,
    fallback:
      'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002155/image-03-2_ze1iph_g3llre.webp',
    alt: 'Commute route from Madhapur to Gachibowli and the Financial District',
    title: 'Gachibowli commute',
  },
  room: {
    src: `${SITE_URL}/images/furnished-pg-room-for-gachibowli-professionals.jpg`,
    fallback:
      'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002175/Narenn-Elite-3-1200x750_ndmzod_ivw7jd.webp',
    alt: 'Furnished PG room in Madhapur for professionals working in Gachibowli',
    title: 'Gachibowli professional room',
  },
  landmarks: {
    src: `${SITE_URL}/images/nanakramguda-financial-district-near-narenn-living.jpg`,
    fallback:
      'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002175/Narenn-Elite-6-1200x750_h0uzb7_vfb7fy.webp',
    alt: 'Nanakramguda and Financial District offices near Narenn Living Madhapur',
    title: 'Financial District',
  },
};

export const GACHIBOWLI_HERO = {
  eyebrow: 'Financial District Commute',
  h1: 'PG near Gachibowli',
  h1Accent: 'Comfortable Co-Living, Short Commute',
  lead:
    'A fully managed home in VIP Hills, Madhapur - about 15-20 minutes from Gachibowli and the Financial District.',
};

export const GACHIBOWLI_INTRO = [
  "Gachibowli and the Financial District are among Hyderabad's biggest employment hubs, home to global companies, banks and IT majors. A PG near Gachibowli at Narenn Living gives you a comfortable, fully managed home just 15-20 minutes away, in the upscale VIP Hills area of Madhapur. You get a furnished AC room, three home-style meals a day, high-speed WiFi and daily housekeeping - a calm, well-run base from which to take on your workday in Gachibowli or the Financial District.",
  "It is the ideal setup for professionals who want the buzz of Gachibowli's workplaces with the comfort and convenience of living in Madhapur.",
];

export const GACHIBOWLI_CONNECTED = {
  eyebrow: 'Commute Times',
  h2: 'Well Connected to Gachibowli',
  h2Accent: 'Gachibowli',
  intro: 'From our VIP Hills location, the key Gachibowli destinations are an easy commute:',
  items: [
    { place: 'Gachibowli central', time: 'about 15-20 minutes', short: '15m' },
    { place: 'Financial District', time: 'roughly 18-20 minutes', short: '18m' },
    { place: 'DLF Cyber City', time: 'around 15 minutes', short: '15m' },
    { place: 'Nanakramguda', time: 'about 18 minutes', short: '18m' },
    { place: 'University of Hyderabad', time: 'roughly 15-18 minutes', short: '15-18m' },
  ],
};

export const GACHIBOWLI_WHY_MADHAPUR = {
  eyebrow: 'Best of Both',
  h2: 'Why Base in Madhapur Instead of Gachibowli',
  h2Accent: 'Instead of Gachibowli',
  body: "Living in Madhapur while working in Gachibowli gives you the best of both worlds. Madhapur offers a livelier social scene, more cafes and restaurants, better value co-living and quick access to both the Gachibowli and Hitech City corridors - useful if your projects or office ever shift between the two. Our residents make the Gachibowli commute daily by bike, cab and shuttle without a second thought. Read our",
  link: { to: '/locations/madhapur/', label: 'PG in Madhapur' },
  trail: 'to see everything the area offers.',
};

export const GACHIBOWLI_PROFESSIONALS = {
  eyebrow: 'IT Ready',
  h2: 'Designed for Professionals',
  h2Accent: 'Professionals',
  bodyBefore: 'Whether you are an experienced engineer or a fresher starting your first role in Gachibowli, our',
  link: { to: '/coliving-for-it-professionals/', label: 'co-living for IT professionals' },
  bodyAfter:
    'is built around your needs - reliable WiFi for remote work, quiet rooms for focus, three meals so you never cook after work, and no-curfew access for any schedule.',
};

export const GACHIBOWLI_AMENITIES = {
  eyebrow: 'Hassle-Free',
  h2: 'Everything Handled, Every Day',
  h2Accent: 'Every Day',
  body: 'Cleaning, meals, WiFi, security and maintenance are all managed by our on-site team, so your home life runs itself while you focus on your career. It is the kind of hassle-free living that makes settling into a demanding job so much easier. See all that is included in our',
  link: { to: '/amenities/', label: 'amenities' },
  trail: '.',
};

export const GACHIBOWLI_VALUE = {
  eyebrow: 'All-Inclusive',
  h2: 'Great Value, Prime Location',
  h2Accent: 'Prime Location',
  body: 'Compared with renting a flat near Gachibowli - with its rent, deposits, brokerage and furnishing costs - Narenn Living offers a simpler, often more economical path: one all-inclusive monthly fee for a fully managed home in a prime Madhapur location. Explore our',
  link: { to: '/rooms/', label: 'room options' },
  trail: 'to find the sharing type that suits your budget.',
};

export const GACHIBOWLI_BOOK = {
  eyebrow: 'Free Visit',
  h2: 'Book Your Visit',
  body: 'Discover how comfortable working in Gachibowli can be when you come home to Narenn Living. Call 70759 85666 or book a visit, and let us show you the rooms, the food and the location that make the commute more than worth it.',
};

export const GACHIBOWLI_WORK_LIVING = {
  eyebrow: 'Lifestyle Trade',
  h2: 'Gachibowli Work, Madhapur Living',
  h2Accent: 'Madhapur Living',
  paragraphs: [
    'Gachibowli, Nanakramguda and the Financial District are roughly twenty minutes from VIP Hills. That is a real commute rather than a marketing one, and for many people it is the better trade.',
    "Madhapur gives you an ecosystem Gachibowli's newer pockets are still building - established restaurants, gyms, clinics, pharmacies, malls, metro links and a genuine co-living community. You work in Gachibowli and you live somewhere that has a life outside office hours. Plenty of our residents made that choice deliberately after a year of living next to their office and realising there was nothing else there.",
  ],
};

export const GACHIBOWLI_WHO = {
  eyebrow: 'Who Lives Here',
  h2: 'Who Commutes from Narenn to Gachibowli',
  h2Accent: 'to Gachibowli',
  items: [
    'Analysts and associates in the Financial District and Nanakramguda',
    'Professionals at Gachibowli campuses and tech parks',
    'Students at nearby universities and coaching institutes',
    'Consultants who split time between Gachibowli and Hitech City clients',
  ],
};

export const GACHIBOWLI_TWENTY = {
  eyebrow: 'What You Gain',
  h2: 'What You Get for the Twenty Minutes',
  h2Accent: 'Twenty Minutes',
  paragraphs: [
    'Fully furnished AC rooms, three meals a day from our own kitchen, fibre WiFi, daily housekeeping, biometric no-curfew access, power backup, security and a terrace community that runs events through the year.',
    'And the flexibility that matters most in an IT career: if your next role is in Hitech City, Mindspace or Kondapur instead, your commute gets shorter rather than forcing you to move again. Call 70759 85666 and we will show you the room and let you eat what the residents are eating that day.',
  ],
};

export const GACHIBOWLI_HONEST = {
  eyebrow: 'Honest Take',
  h2: 'When Gachibowli Itself Is the Better Choice',
  h2Accent: 'Better Choice',
  paragraphs: [
    'Being straight with you: if your office is deep in Nanakramguda or the Financial District and you genuinely never leave that radius, living closer to it will save you twenty minutes each way. That is a real argument and we are not going to pretend otherwise.',
    "The counter-argument is what those twenty minutes buy. Madhapur has the restaurants, the gyms, the clinics, the malls, the metro links and the co-living community that Gachibowli's newer pockets are still assembling. A lot of our residents made that trade knowingly after a year of living next to their office and finding there was nothing to walk to on a Saturday.",
  ],
};

export const GACHIBOWLI_MAPS = {
  eyebrow: 'VIP Hills',
  h2: 'Our Address',
  h2Accent: 'Address',
  body: 'All four Narenn Living properties - Narenn Elite, Narenn Crown, Narenn Pinnacle and Narenn Supreme - are located in VIP Hills, Madhapur, Hyderabad. We are around 15-20 minutes from Gachibowli, Nanakramguda and the Financial District, and 5-10 minutes from Hitech City.',
  streetAddress: 'VIP Hills, Road 21, Silicon Valley, Madhapur',
  locality: 'Hyderabad',
  region: 'Telangana',
  postalCode: '500084',
};

export const GACHIBOWLI_FINAL_CTA = {
  title: 'Book Your Visit',
  titleAccent: 'Gachibowli Commute',
  description:
    'See how comfortable the Madhapur-to-Gachibowli commute feels when you come home to Narenn Living. Call 70759 85666 or WhatsApp us to schedule a free visit.',
};

export const GACHIBOWLI_FAQS = [
  {
    question: 'How far is Narenn Living from Gachibowli?',
    answer:
      'Our VIP Hills location is about 15-20 minutes from Gachibowli and the Financial District, an easy daily commute by bike, cab or shuttle.',
  },
  {
    question: 'Is the commute from Madhapur to Gachibowli manageable?',
    answer:
      'Yes. Many of our residents commute to Gachibowli and the Financial District daily, and it is comparable to peak-hour travel within Gachibowli itself.',
  },
  {
    question: 'Does living in Madhapur work if I switch between Gachibowli and Hitech City?',
    answer:
      'It is ideal for exactly that. Both corridors stay within a short commute from our Madhapur base, so you never need to relocate mid-project.',
  },
];
