/** Confirmed four-sharing rates for the sticky booking card + schema Offers. */
export const QUAD_SHARING_RATES = {
  currency: 'INR',
  monthly: {
    productName: 'Four Sharing - 4 Sharing',
    nonAc: {
      price: 12000,
      schemaName: 'Four Sharing - 4 Sharing (Non-AC)',
    },
    ac: {
      price: 13000,
      schemaName: 'Four Sharing - 4 Sharing (AC)',
    },
    maintenanceNote: 'One-time maintenance applies · electricity billed separately',
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
  ogImage: 'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002158/M_P00064_1_xrjutj_sqqtbt.jpg',
};

export const QUAD_SHARING_HERO = {
  paragraphs: [
    'If keeping monthly costs as low as possible is the priority — without settling for a grim PG — our four sharing room in Madhapur is built for you. You share a spacious, air-conditioned room with three others and split the cost four ways, which makes it the most economical format at Narenn Living. You still get an AC room, three meals a day, high-speed WiFi, daily housekeeping and full access to every amenity, all included in one low monthly fee.',
    'Set in VIP Hills, Madhapur, four sharing rooms put you minutes from Hitech City, Gachibowli and Kondapur. They are a favourite with students and freshers who want a lively room, a ready-made social circle and the lowest entry into premium co-living.',
  ],
};

export const QUAD_SHARING_BOOKING = {
  roomType: '4 Sharing',
  availabilitySignal: 'Lowest monthly rent - limited inventory',
  trustItems: ['AC', 'Meals', 'WiFi', 'Housekeeping'],
  monthlyProductLabels: {
    ac: 'Four Sharing - 4 Sharing (AC)',
    nonAc: 'Four Sharing - 4 Sharing (Non-AC)',
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
    src: 'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002158/M_P00064_1_xrjutj_sqqtbt.jpg',
    alt: 'Hero image of a four sharing room',
    title: 'Four sharing room - hero',
  },
  wardrobes: {
    src: 'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002162/M_P00355_1_t0hd6k_wlz0ax.jpg',
    alt: 'Storage/wardrobe area in a four sharing room',
    title: 'Four sharing room - storage',
  },
  students: {
    src: 'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002158/M_P00072_1_gkmydq_xevg54.jpg',
    alt: 'Room interior view in a four sharing room',
    title: 'Four sharing room - interior view',
  },
  studySpace: {
    src: 'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002158/M_P00060_1_mwxgvh_rcpygn.jpg',
    alt: 'Room interior detail in a four sharing room',
    title: 'Four sharing room - interior',
  },
};

export const QUAD_SHARING_INCLUDES = [
  'An AC room shared by four, with a dedicated bed and ortho mattress each',
  'Personal wardrobe or locker per resident',
  'High-speed WiFi for study and streaming',
  'Three home-style meals a day from our in-house kitchen',
  'Daily housekeeping and fresh linen',
  'Biometric no-curfew access and 24/7 security',
];

export const QUAD_SHARING_WHO = {
  h2: 'Who Four Sharing Is Built For',
  paragraphs: [
    'Four sharing is the format we recommend when the priority is keeping monthly outgo as low as possible without living somewhere grim. If you are out of the room from morning until evening - at college, at the office, at the gym - you are paying for a place to sleep, eat and recharge. Four sharing prices that honestly.',
    'It is also the fastest way into the VIP Hills postcode. The location, the food, the security and the community are identical to what a single-room resident gets. The only thing you trade is floor space, and at this stage of a career or a degree, that is usually the right trade to make.',
  ],
};

export const QUAD_SHARING_SPACE = {
  h2: 'Space That Actually Works for Four',
  points: [
    'A room proportioned for four residents - not three beds with one squeezed in',
    'Four individual beds with ortho mattresses and bedding',
    'Separate lockable storage per resident - nobody shares a wardrobe',
    'Charging points per resident',
    'Air conditioning, fibre WiFi, daily housekeeping and three meals a day, exactly as in every other format',
  ],
};

export const QUAD_SHARING_FAQS = [
  {
    question: 'How many people share a four sharing room?',
    answer:
      'A four sharing room is shared by four residents, each with a dedicated bed, storage in a fully furnished AC room.',
  },
  {
    question: 'Is four sharing the cheapest option?',
    answer:
      'Yes, four sharing is our most economical room type while still including AC, three daily meals, WiFi, housekeeping and all amenities.',
  },
  {
    question: 'Is a four sharing room good for students?',
    answer:
      'Very much so. Four sharing offers the lowest monthly rent and a built-in social circle, making it popular with students and freshers new to Hyderabad.',
  },
];
