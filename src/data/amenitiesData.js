import { SITE_URL } from './sitePages';

export const AMENITIES_PAGE = {
  path: '/amenities/',
  title: 'PG Amenities in Madhapur, Hyderabad | Narenn Living Co-Living',
  description:
    'AC rooms, four meals a day, high-speed WiFi, housekeeping, laundry, security & terrace. See all amenities included at Narenn Living co-living in Madhapur.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage: `${SITE_URL}/images/pg-amenities-in-madhapur-narenn-living-hero.jpg`,
};

export const AMENITIES_HERO = {
  eyebrow: 'PG Amenities in Madhapur',
  h1: 'Amenities at Narenn Living',
  h1Accent: 'Everything Included in One Fee',
};

export const AMENITIES_INTRO = [
  'The difference between a house and a home is in the details, and at Narenn Living those details are built in from day one. Our PG amenities in Madhapur are designed to cover every part of daily life, so residents never have to worry about furniture, cooking, cleaning or connectivity. From air-conditioned rooms and four fresh meals a day to high-speed WiFi, daily housekeeping and round-the-clock security, everything comes bundled into one simple, transparent monthly fee.',
  'Below is a closer look at the amenities that make Narenn Living one of the most comfortable co-living addresses in West Hyderabad.',
];

export const AMENITIES_IMAGES = {
  hero: {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp',
    alt: 'PG amenities in Madhapur including AC rooms, WiFi, housekeeping and meals',
    title: 'PG amenities in Madhapur',
  },
  housekeeping: {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121459/Narenn-Elite-6-1200x750_h0uzb7.webp',
    alt: 'Daily housekeeping service in a PG room in Madhapur, Hyderabad',
    title: 'Daily housekeeping',
  },
  wifi: {
    src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a0?auto=format&fit=crop&w=1200&q=80',
    alt: 'High-speed fibre WiFi and power backup at Narenn Living co-living in Madhapur',
    title: 'WiFi and power backup',
  },
  dining: {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Dining hall and common lounge area at Narenn Living co-living in Hyderabad',
    title: 'Dining hall and lounge',
  },
  lounge: {
    src: 'https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&w=800&q=80',
    alt: 'Social lounge and common area at Narenn Living co-living in Madhapur',
    title: 'The Social Lounge',
  },
  rooftop: {
    src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80',
    alt: 'Rooftop terrace with city views at Narenn Living co-living in Hyderabad',
    title: 'Rooftop Skydeck',
  },
  utilities: {
    src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80',
    alt: 'RO drinking water, hot water and lift access at a PG in Madhapur',
    title: 'Core utilities',
  },
};

export const AMENITIES_FEATURES = [
  {
    icon: 'bed',
    h2: 'Comfortable, Fully Furnished Rooms',
    h2Accent: 'Rooms',
    description:
      'Every room arrives move-in ready with a quality bed and mattress, personal wardrobe, study desk and air-conditioning. You bring your bags; we handle everything else. Whether you choose a single, double or triple room, comfort is engineered into the space.',
    link: { to: '/rooms/', label: 'room options', prefix: 'Explore our ', suffix: ' to find your fit.' },
  },
  {
    icon: 'meals',
    h2: 'Four Home-Style Meals a Day',
    h2Accent: 'Meals a Day',
    description:
      'Our in-house kitchen is the heart of Narenn Living. We serve four freshly cooked meals daily - breakfast, lunch, evening snacks and dinner - with a rotating menu of South Indian and North Indian favourites. It is one of the most loved parts of living here.',
    link: { to: '/food/', label: 'food menu', prefix: 'See what is on our ', suffix: '.' },
  },
  {
    icon: 'wifi',
    h2: 'High-Speed WiFi Throughout',
    h2Accent: 'WiFi Throughout',
    imageKey: 'wifi',
    description:
      'Reliable internet is non-negotiable for work-from-home professionals and students attending online classes. We provide strong, high-speed WiFi across all our properties so you can work, study and stream without interruption.',
  },
  {
    icon: 'housekeeping',
    h2: 'Daily Housekeeping and Laundry Support',
    h2Accent: 'Laundry Support',
    imageKey: 'housekeeping',
    description:
      'A clean space makes for a clear mind. Our housekeeping team cleans rooms and common areas daily and refreshes linen regularly, while laundry support keeps the chore of washing off your plate. It is the kind of everyday convenience that quietly makes life better.',
  },
  {
    icon: 'security',
    h2: 'Safety and Security You Can Rely On',
    h2Accent: 'You Can Rely On',
    description:
      'Peace of mind is an amenity too. Every property features 24/7 CCTV surveillance, biometric no-curfew access and on-site management, so residents and their families feel secure at all hours. Your independence is respected, and your safety is never compromised.',
  },
  {
    icon: 'community',
    h2: 'Community Spaces and Terrace',
    h2Accent: 'Terrace',
    description:
      'Beyond the rooms, Narenn Living offers inviting common areas and terrace spaces where residents relax, socialise and celebrate. These are the backdrop for our vibrant events calendar - from festival nights to birthday parties.',
    link: {
      to: '/events/',
      label: 'community events',
      prefix: 'Discover the ',
      suffix: ' that bring our properties to life.',
    },
  },
];

export const AMENITIES_DAILY = {
  eyebrow: 'Honest Priorities',
  h2: 'Amenities You Use Daily vs Amenities That Look Good in Photos',
  h2Accent: 'Look Good in Photos',
  paragraphs: [
    'Plenty of co-living brands advertise a games room nobody enters after week two. We would rather over-invest in the five things you touch every single day: the bed, the bathroom, the WiFi, the food and the cleaning.',
    'That is where our money goes. The mattress is a real mattress. The hot water works at 6 AM when everyone wants it, not just at noon. The WiFi holds a video call. The room is cleaned daily, not when someone complains. Everything else is a bonus on top of a foundation that actually works.',
  ],
};

export const AMENITIES_FULL_LIST = {
  h2: 'The Full List of Inclusions',
  h2Accent: 'Inclusions',
  intro: 'Here is everything that comes standard with your stay at Narenn Living:',
};

export const AMENITIES_FULL_LIST_ITEMS = [
  'Fully furnished AC rooms with bed, wardrobe and study desk',
  'Four home-style meals a day from our in-house kitchen',
  'High-speed WiFi across the property',
  'Daily housekeeping and regular linen changes',
  'Laundry support',
  '24/7 CCTV security and biometric no-curfew access',
  'On-site professional management',
  'Terrace and common areas for relaxation and events',
  'A calendar of community events and festival celebrations',
];

export const AMENITIES_MAINTENANCE = {
  h2: 'Maintenance That Actually Responds',
  h2Accent: 'Actually Responds',
};

export const AMENITIES_MAINTENANCE_POINTS = [
  'In-house maintenance staff on our own payroll - not a contractor with their own priorities',
  'Same-day response for anything affecting water, power, safety or AC',
  '24-hour response standard on all other requests',
  'Preventive servicing schedules for AC units, water systems and generators',
  'A staff team you can find in the building, not a ticket queue',
];

export const AMENITIES_DONT_OFFER = {
  h2: "What We Deliberately Don't Offer",
  h2Accent: "Don't Offer",
  paragraphs: [
    'We do not have a swimming pool, a cinema room or a rooftop infinity anything. Those features exist mainly to justify a rent increase and to look good in a listing photograph.',
    'We would rather spend that money on the mattress you sleep on, the hot water at 6 AM, the WiFi at 9 PM, the food on your plate four times a day, and the housekeeper who shows up daily whether or not you complained. Those are the things that decide whether you are still here in year two. Everything else is decoration.',
  ],
};

export const AMENITIES_SPACES = {
  h2: 'Common Spaces That Get Used',
  h2Accent: 'Get Used',
  paragraphs: [
    'A dining hall where residents actually sit together instead of carrying a plate back to their room. Lounges for a break, a chat or a change of scenery when your room gets small. And the terrace - the single most used space in every one of our properties, where birthdays, festival nights, movie screenings and cricket-match watch parties happen through the year.',
    'Common space only earns its rent if people use it. Ours does, and that is mostly because there is always something happening on it.',
  ],
  items: [
    { key: 'dining', title: 'Dining Hall & Lounge' },
    { key: 'rooftop', title: 'Rooftop Skydeck' },
    { key: 'lounge', title: 'The Social Lounge' },
  ],
};

export const AMENITIES_FAQS = [
  {
    question: 'Are meals included in the amenities?',
    answer:
      'Yes, four home-style meals a day - breakfast, lunch, evening snacks and dinner - are included and prepared fresh in our in-house kitchen.',
  },
  {
    question: 'Is there any extra charge for WiFi or housekeeping?',
    answer:
      'No. WiFi, daily housekeeping, laundry support, security and all amenities are included in one transparent monthly fee with no hidden charges.',
  },
  {
    question: 'Do all properties have the same amenities?',
    answer:
      'Yes. All four Narenn Living properties in VIP Hills, Madhapur maintain the same high standard of amenities and service.',
  },
];
