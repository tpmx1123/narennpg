/** Confirmed double-sharing rates for the sticky booking card + schema Offers. */
export const DOUBLE_SHARING_RATES = {
  currency: 'INR',
  monthly: {
    productName: 'Double Sharing - 2 Sharing',
    nonAc: {
      price: 20000,
      schemaName: 'Double Sharing - 2 Sharing (Non-AC)',
    },
    ac: {
      price: 21500,
      schemaName: 'Double Sharing - 2 Sharing (AC)',
    },
    maintenanceNote: 'One-time maintenance applies · electricity billed separately',
  },
  daily: {
    price: 1400,
    productName: 'Double Sharing, Day-Wise',
    schemaName: 'Double Sharing, Day-Wise',
    note: 'Short-stay booking · no long-term commitment',
  },
};

export const DOUBLE_SHARING_PAGE = {
  path: '/rooms/double-sharing/',
  title: 'Double Sharing PG Rooms in Madhapur, Hyderabad | Narenn Living',
  description:
    'Comfortable 2-sharing AC rooms in Madhapur near Hitech City. Meals, WiFi & housekeeping included. Perfect balance of privacy & company. Book a free visit today.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage: 'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002160/M_P00210_2_tgzf4c_fimpkh.jpg',
};

export const DOUBLE_SHARING_HERO = {
  paragraphs: [
    'Our double sharing room in Madhapur is the most popular choice at Narenn Living, and for good reason: it strikes the perfect balance between privacy and companionship. You share a spacious, air-conditioned room with just one room-mate - enough company to make the space lively and the cost easy, enough room to still feel like your own. It is the sweet spot that suits students and young professionals alike.',
    'Situated in VIP Hills, Madhapur, your double room places you minutes from Hitech City, Gachibowli and Kondapur, with everything you need for daily life already taken care of and included in one monthly fee.',
  ],
};

export const DOUBLE_SHARING_BOOKING = {
  roomType: '2 Sharing',
  availabilitySignal: 'Most in-demand format - fills first every month',
  trustItems: ['AC', 'Meals', 'WiFi', 'Housekeeping'],
  monthlyProductLabels: {
    ac: 'Double Sharing - 2 Sharing (AC)',
    nonAc: 'Double Sharing - 2 Sharing (Non-AC)',
  },
  monthlyHint: [
    'Want more privacy? See our ',
    { to: '/rooms/single-sharing/', label: 'single sharing rooms' },
    '. Prefer a livelier setup? Explore ',
    { to: '/rooms/triple-sharing/', label: 'triple sharing rooms' },
    '.',
  ],
};

export const DOUBLE_SHARING_IMAGES = {
  hero: {
    src: 'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002160/M_P00210_2_tgzf4c_fimpkh.jpg',
    alt: 'Hero image of a double sharing room',
    title: 'Double sharing room - hero',
  },
  studyDesks: {
    src: 'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002158/M_P00072_1_gkmydq_xevg54.jpg',
    alt: 'Room interior detail in a double sharing room',
    title: 'Double sharing room - interior',
  },
  roommates: {
    src: 'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002157/M_P00014_1_x7k9z0_rcbhsf.jpg',
    alt: 'Room view in a double sharing room',
    title: 'Double sharing room - room view',
  },
  wardrobes: {
    src: 'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002159/M_P00166_1_gxa8lp_xsm3ty.jpg',
    alt: 'Wardrobe area in a double sharing room',
    title: 'Double sharing room - wardrobes',
  },
};

export const DOUBLE_SHARING_INCLUDES = [
  'An AC room shared by two, with a personal bed and ortho mattress for each',
  'Individual wardrobe per resident',
  'High-speed WiFi for work and online classes',
  'Three home-style meals a day from our in-house kitchen',
  'Daily housekeeping and fresh linen',
  'Biometric no-curfew access and round-the-clock security',
];

export const DOUBLE_SHARING_ROOMMATE_MATCHING = {
  h2: "We Match Roommates - We Don't Assign Them Randomly",
  intro:
    'A bad roommate can ruin an otherwise excellent PG, so we treat matching as a process rather than a spreadsheet coincidence. Before allocation we look at your profession, your shift pattern, your sleep timings, your food preference and your general lifestyle. A night-shift engineer does not get paired with someone on a 9 AM standup. A student does not get paired with someone who codes until 2 AM.',
  outro:
    'And if a pairing genuinely is not working, tell us. We will move you, subject to availability, without turning it into a negotiation.',
  points: [
    'Matched by profession and company shift pattern',
    'Matched by sleep and work timings',
    'Matched by food preference and lifestyle',
    'Room change available if the match is not working',
  ],
};

export const DOUBLE_SHARING_COST_CASE = {
  h2: 'The Cost Case for Double Sharing',
  points: [
    'Versus a single room - you save meaningfully every month and still get your own bed and wardrobe',
    'Versus sharing a 2BHK in Madhapur - add rent, a large deposit, furniture, appliances, AC, internet, a cook, a maid, utilities and brokerage, and a shared flat routinely costs more than double sharing here, with none of the meals, cleaning or security included',
    'Versus triple sharing - a modest premium buys noticeably more personal space and a quieter room to work in',
  ],
};

export const DOUBLE_SHARING_IDENTICAL = {
  h2: 'Everything Else Is Identical',
  paragraphs: [
    'Choosing double sharing does not downgrade anything else about your stay. The same in-house kitchen serving three daily meals. The same daily housekeeping and weekly deep clean. The same biometric no-curfew access. The same terrace events. The same fibre WiFi. The same VIP Hills address minutes from Hitech City, Mindspace and Kondapur.',
    'The only variable is how many people sleep in your room. Everything that determines whether you actually enjoy living somewhere stays exactly the same.',
  ],
};

export const DOUBLE_SHARING_FALLBACK = {
  h2: "What Happens If It Doesn't Work Out",
  paragraphs: [
    'Sometimes a match just does not click, and no amount of profiling catches it in advance. Tell us. We will move you to another room subject to availability, and we will not turn it into a negotiation or make you justify yourself.',
    'That policy exists because the alternative is worse for everyone. A resident quietly enduring a bad pairing does not renew, and they do not tell you why - they just leave. We would rather move you across the corridor than lose you across the city.',
  ],
};

export const DOUBLE_SHARING_FAQS = [
  {
    question: 'How many people share a double room?',
    answer:
      'A double sharing room is shared by two residents, each with their own bed, wardrobe and AC in a fully furnished AC room.',
  },
  {
    question: 'Can I choose my room-mate?',
    answer:
      'Yes, if you are moving in with a friend we can accommodate you together. Otherwise, we thoughtfully match room-mates within our community.',
  },
  {
    question: 'Is double sharing cheaper than a single room?',
    answer:
      'Yes. Because the room is shared, double sharing costs less than a single room while still including AC, meals, WiFi, housekeeping and all amenities.',
  },
];
