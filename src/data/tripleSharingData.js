import { SITE_URL } from './sitePages';

/** Confirmed triple-sharing rates for the sticky booking card + schema Offers. */
export const TRIPLE_SHARING_RATES = {
  currency: 'INR',
  monthly: {
    productName: 'Triple Sharing — 3 Sharing',
    nonAc: {
      price: 16000,
      schemaName: 'Triple Sharing — 3 Sharing (Non-AC)',
    },
    ac: {
      price: 17200,
      schemaName: 'Triple Sharing — 3 Sharing (AC)',
    },
    maintenanceNote: '+ ₹3,000 one-time maintenance · electricity billed separately',
  },
  daily: {
    price: 1200,
    productName: 'Triple Sharing, Day-Wise',
    schemaName: 'Triple Sharing, Day-Wise',
    note: 'Short-stay booking · no long-term commitment',
  },
};

export const TRIPLE_SHARING_PAGE = {
  path: '/rooms/triple-sharing/',
  title: 'Triple Sharing PG Rooms in Madhapur, Hyderabad | Narenn Living',
  description:
    'Affordable 3-sharing AC rooms in Madhapur near Hitech City. Meals, WiFi & housekeeping included. Best value co-living for students & freshers. Book a visit.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage: `${SITE_URL}/images/triple-sharing-pg-in-madhapur-affordable-room.jpg`,
};

export const TRIPLE_SHARING_HERO = {
  paragraphs: [
    'If you want premium co-living at the friendliest price, our triple sharing room in Madhapur is the answer. You share a spacious, air-conditioned room with two others and split the cost three ways — which makes it the most economical option at Narenn Living without cutting a single corner on comfort. You still get an AC room, four meals a day, high-speed WiFi, daily housekeeping and full access to every amenity, all included in one low monthly fee.',
    'Set in VIP Hills, Madhapur, triple rooms put you minutes from Hitech City, Gachibowli and Kondapur, and are especially popular with students and freshers who want great value and a ready-made social circle.',
  ],
};

export const TRIPLE_SHARING_BOOKING = {
  roomType: '3 Sharing',
  availabilitySignal: 'Best value — fills fast at term start',
  trustItems: ['AC', 'Meals', 'WiFi', 'Housekeeping'],
  monthlyProductLabels: {
    ac: 'Triple Sharing — 3 Sharing (AC)',
    nonAc: 'Triple Sharing — 3 Sharing (Non-AC)',
  },
  monthlyHint: [
    'Want more personal space? See our ',
    { to: '/rooms/double-sharing/', label: 'double sharing rooms' },
    '. Explore ',
    { to: '/rooms/', label: 'all room types' },
    '.',
  ],
};

export const TRIPLE_SHARING_IMAGES = {
  hero: {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121459/Narenn-Elite-3-1200x750_ndmzod.webp',
    alt: 'Affordable triple sharing PG room in Madhapur with three beds and AC',
    title: 'Triple sharing PG in Madhapur',
  },
  wardrobes: {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121459/Narenn-Elite-6-1200x750_h0uzb7.webp',
    alt: 'Three individual lockable wardrobes in a triple sharing PG room in Madhapur',
    title: 'Individual wardrobes',
  },
  students: {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/ChatGPT-Image-Jun-30-2025-06_48_11-PM-1200x800_kjphte.webp',
    alt: 'Students in a triple sharing PG room at Narenn Living Hyderabad',
    title: 'Student triple sharing',
  },
  studySpace: {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp',
    alt: 'Individual study space and charging points in a triple sharing room in Madhapur',
    title: 'Study space',
  },
};

export const TRIPLE_SHARING_INCLUDES = [
  'An AC room shared by three, with a dedicated bed and mattress each',
  'Personal wardrobe and study area per resident',
  'High-speed WiFi for study and streaming',
  'Four home-style meals a day from our in-house kitchen',
  'Daily housekeeping and fresh linen',
  'Biometric no-curfew access and 24/7 security',
];

export const TRIPLE_SHARING_WHO = {
  h2: 'Who Triple Sharing Is Built For',
  paragraphs: [
    'Triple sharing is the format we recommend to students, first-year freshers and anyone whose priority right now is keeping monthly outgo low without living somewhere grim. If you are out of the room from nine in the morning until eight at night — at college, at the office, at the gym — you are paying for a place to sleep, eat and recharge. Triple sharing prices that honestly.',
    'It is also the fastest way into the VIP Hills postcode. The location, the food, the security and the community are identical to what a single-room resident gets. The only thing you trade is floor space, and at this stage of a career or a degree, that is usually the right trade to make.',
  ],
};

export const TRIPLE_SHARING_SPACE = {
  h2: 'Space That Actually Works for Three',
  points: [
    'A larger room proportioned for three residents — not a double with a bed squeezed in',
    'Three individual beds with quality mattresses and bedding',
    'Three separate lockable wardrobes — nobody shares storage',
    'Individual study space and charging points per resident',
    'Air conditioning, fibre WiFi, daily housekeeping and four meals a day, exactly as in every other format',
  ],
};

export const TRIPLE_SHARING_FAQS = [
  {
    question: 'How many people share a triple room?',
    answer:
      'A triple sharing room is shared by three residents, each with a dedicated bed, wardrobe and study space in a fully furnished AC room.',
  },
  {
    question: 'Is triple sharing the cheapest option?',
    answer:
      'Yes, triple sharing is our most economical room type while still including AC, four daily meals, WiFi, housekeeping and all amenities.',
  },
  {
    question: 'Is a triple room good for students?',
    answer:
      'Very much so. Triple sharing offers the best value and a built-in social circle, making it a favourite among students and freshers new to Hyderabad.',
  },
];
