import { SITE_URL } from './sitePages';

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
    maintenanceNote: '+ ₹3,000 one-time maintenance · electricity billed separately',
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
  ogImage: `${SITE_URL}/images/double-sharing-pg-in-madhapur-twin-room.jpg`,
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
    ac: 'Double Sharing — 2 Sharing (AC)',
    nonAc: 'Double Sharing — 2 Sharing (Non-AC)',
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
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/ChatGPT-Image-Jun-30-2025-06_48_11-PM-1200x800_kjphte.webp',
    alt: 'Double sharing PG room in Madhapur with two single beds and individual wardrobes',
    title: 'Double sharing PG in Madhapur',
  },
  studyDesks: {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121459/Narenn-Elite-3-1200x750_ndmzod.webp',
    alt: 'Two separate study desks and chairs in a double sharing room at Narenn Living',
    title: 'Individual study desks',
  },
  roommates: {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp',
    alt: 'Roommates in a double sharing co-living room in Madhapur, Hyderabad',
    title: 'Roommate matching',
  },
  wardrobes: {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121459/Narenn-Elite-6-1200x750_h0uzb7.webp',
    alt: 'Two individual lockable wardrobes in a double sharing PG room in Madhapur',
    title: 'Lockable wardrobes',
  },
};

export const DOUBLE_SHARING_INCLUDES = [
  'An AC room shared by two, with a personal bed and mattress for each',
  'Individual wardrobe and study desk per resident',
  'High-speed WiFi for work and online classes',
  'Four home-style meals a day from our in-house kitchen',
  'Daily housekeeping and fresh linen',
  'Biometric no-curfew access and round-the-clock security',
];

export const DOUBLE_SHARING_ROOMMATE_MATCHING = {
  h2: "We Match Roommates — We Don't Assign Them Randomly",
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
    'Versus a single room - you save meaningfully every month and still get your own bed, wardrobe and desk',
    'Versus sharing a 2BHK in Madhapur - add rent, a large deposit, furniture, appliances, AC, internet, a cook, a maid, utilities and brokerage, and a shared flat routinely costs more than double sharing here, with none of the meals, cleaning or security included',
    'Versus triple sharing - a modest premium buys noticeably more personal space and a quieter room to work in',
  ],
};

export const DOUBLE_SHARING_IDENTICAL = {
  h2: 'Everything Else Is Identical',
  paragraphs: [
    'Choosing double sharing does not downgrade anything else about your stay. The same in-house kitchen serving four daily meals. The same daily housekeeping and weekly deep clean. The same biometric no-curfew access. The same terrace events. The same fibre WiFi. The same VIP Hills address minutes from Hitech City, Mindspace and Kondapur.',
    'The only variable is how many people sleep in your room. Everything that determines whether you actually enjoy living somewhere stays exactly the same.',
  ],
};

export const DOUBLE_SHARING_FALLBACK = {
  h2: "What Happens If It Doesn't Work Out",
  paragraphs: [
    'Sometimes a match just does not click, and no amount of profiling catches it in advance. Tell us. We will move you to another room subject to availability, and we will not turn it into a negotiation or make you justify yourself.',
    'That policy exists because the alternative is worse for everyone. A resident quietly enduring a bad pairing does not renew, and they do not tell you why — they just leave. We would rather move you across the corridor than lose you across the city.',
  ],
};

export const DOUBLE_SHARING_FAQS = [
  {
    question: 'How many people share a double room?',
    answer:
      'A double sharing room is shared by two residents, each with their own bed, wardrobe and study desk in a fully furnished AC room.',
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
