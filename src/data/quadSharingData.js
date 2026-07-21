import { SITE_URL } from './sitePages';

/** Confirmed four-sharing rates for the sticky booking card + schema Offers. */
export const QUAD_SHARING_RATES = {
  currency: 'INR',
  monthly: {
    productName: 'Four Sharing — 4 Sharing',
    nonAc: {
      price: 12000,
      schemaName: 'Four Sharing — 4 Sharing (Non-AC)',
    },
    ac: {
      price: 13000,
      schemaName: 'Four Sharing — 4 Sharing (AC)',
    },
    maintenanceNote: '+ ₹3,000 one-time maintenance · electricity billed separately',
  },
  daily: {
    price: 1000,
    productName: 'Four Sharing, Day-Wise',
    schemaName: 'Four Sharing, Day-Wise',
    note: 'Short-stay booking · no long-term commitment',
  },
};

export const QUAD_SHARING_PAGE = {
  path: '/rooms/quad-sharing/',
  title: 'Four Sharing PG Rooms in Madhapur, Hyderabad | Narenn Living',
  description:
    'Budget-friendly 4-sharing AC rooms in Madhapur near Hitech City. Meals, WiFi & housekeeping included. Most economical co-living for students. Book a visit.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage: `${SITE_URL}/images/four-sharing-pg-in-madhapur-budget-room.jpg`,
};

export const QUAD_SHARING_HERO = {
  paragraphs: [
    'If keeping monthly costs as low as possible is the priority — without settling for a grim PG — our four sharing room in Madhapur is built for you. You share a spacious, air-conditioned room with three others and split the cost four ways, which makes it the most economical format at Narenn Living. You still get an AC room, four meals a day, high-speed WiFi, daily housekeeping and full access to every amenity, all included in one low monthly fee.',
    'Set in VIP Hills, Madhapur, four sharing rooms put you minutes from Hitech City, Gachibowli and Kondapur. They are a favourite with students and freshers who want a lively room, a ready-made social circle and the lowest entry into premium co-living.',
  ],
};

export const QUAD_SHARING_BOOKING = {
  roomType: '4 Sharing',
  availabilitySignal: 'Lowest monthly rent — limited inventory',
  trustItems: ['AC', 'Meals', 'WiFi', 'Housekeeping'],
  monthlyProductLabels: {
    ac: 'Four Sharing — 4 Sharing (AC)',
    nonAc: 'Four Sharing — 4 Sharing (Non-AC)',
  },
  monthlyHint: [
    'Want more personal space? See our ',
    { to: '/rooms/triple-sharing/', label: 'triple sharing rooms' },
    '. Explore ',
    { to: '/rooms/', label: 'all room types' },
    '.',
  ],
};

export const QUAD_SHARING_IMAGES = {
  hero: {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121459/Narenn-Elite-6-1200x750_h0uzb7.webp',
    alt: 'Budget four sharing PG room in Madhapur with four beds and AC',
    title: 'Four sharing PG in Madhapur',
  },
  wardrobes: {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121459/Narenn-Elite-3-1200x750_ndmzod.webp',
    alt: 'Individual lockable storage in a four sharing PG room in Madhapur',
    title: 'Individual storage',
  },
  students: {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/ChatGPT-Image-Jun-30-2025-06_48_11-PM-1200x800_kjphte.webp',
    alt: 'Students in a four sharing PG room at Narenn Living Hyderabad',
    title: 'Student four sharing',
  },
  studySpace: {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp',
    alt: 'Study desks and charging points in a four sharing room in Madhapur',
    title: 'Study space',
  },
};

export const QUAD_SHARING_INCLUDES = [
  'An AC room shared by four, with a dedicated bed and mattress each',
  'Personal wardrobe or locker and study area per resident',
  'High-speed WiFi for study and streaming',
  'Four home-style meals a day from our in-house kitchen',
  'Daily housekeeping and fresh linen',
  'Biometric no-curfew access and 24/7 security',
];

export const QUAD_SHARING_WHO = {
  h2: 'Who Four Sharing Is Built For',
  paragraphs: [
    'Four sharing is the format we recommend when the priority is keeping monthly outgo as low as possible without living somewhere grim. If you are out of the room from morning until evening — at college, at the office, at the gym — you are paying for a place to sleep, eat and recharge. Four sharing prices that honestly.',
    'It is also the fastest way into the VIP Hills postcode. The location, the food, the security and the community are identical to what a single-room resident gets. The only thing you trade is floor space, and at this stage of a career or a degree, that is usually the right trade to make.',
  ],
};

export const QUAD_SHARING_SPACE = {
  h2: 'Space That Actually Works for Four',
  points: [
    'A room proportioned for four residents — not three beds with one squeezed in',
    'Four individual beds with quality mattresses and bedding',
    'Separate lockable storage per resident — nobody shares a wardrobe',
    'Individual study space and charging points per resident',
    'Air conditioning, fibre WiFi, daily housekeeping and four meals a day, exactly as in every other format',
  ],
};

export const QUAD_SHARING_FAQS = [
  {
    question: 'How many people share a four sharing room?',
    answer:
      'A four sharing room is shared by four residents, each with a dedicated bed, storage and study space in a fully furnished AC room.',
  },
  {
    question: 'Is four sharing the cheapest option?',
    answer:
      'Yes, four sharing is our most economical room type while still including AC, four daily meals, WiFi, housekeeping and all amenities.',
  },
  {
    question: 'Is a four sharing room good for students?',
    answer:
      'Very much so. Four sharing offers the lowest monthly rent and a built-in social circle, making it popular with students and freshers new to Hyderabad.',
  },
];
