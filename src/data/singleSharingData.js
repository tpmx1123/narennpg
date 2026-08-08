/** Confirmed single-sharing rates for the sticky booking card + schema Offers. */
export const SINGLE_SHARING_RATES = {
  currency: 'INR',
  monthly: {
    small: {
      id: 'small',
      label: 'Small Room',
      price: 30000,
      productName: 'Single Sharing - Small Room (1 Sharing)',
      schemaName: 'Single Sharing - Small Room',
    },
    standard: {
      id: 'standard',
      label: 'Standard Room',
      nonAc: {
        price: 34000,
        schemaName: 'Single Sharing - Standard Room (Non-AC)',
      },
      ac: {
        price: 36000,
        schemaName: 'Single Sharing - Standard Room (AC)',
      },
    },
    maintenanceNote: 'One-time maintenance applies · electricity billed separately',
  },
  daily: {
    price: 2500,
    productName: 'Single Sharing, Day-Wise',
    schemaName: 'Single Sharing, Day-Wise',
    note: 'Short-stay booking · no long-term commitment',
  },
};

/** Display-only share-and-save hint — not part of this page's Offer schema. */
export const SINGLE_SHARING_SHARE_SAVE = {
  monthlyPerPerson: 17000,
};

export const SINGLE_SHARING_PAGE = {
  path: '/rooms/single-sharing/',
  title: 'Single Sharing PG Rooms in Madhapur, Hyderabad | Narenn Living',
  description:
    'Private single occupancy AC rooms in Madhapur near Hitech City. Meals, WiFi, housekeeping & security included. Ideal for working professionals. Book a visit.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage: 'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/M_P00016_1_irxbq9.jpg',
};

export const SINGLE_SHARING_HERO = {
  paragraphs: [
    'For anyone who values privacy, focus and quiet, a single sharing room in Madhapur at Narenn Living is the ideal choice. You get a fully furnished, air-conditioned room entirely to yourself - no room-mates, no compromises - in a professionally managed property in VIP Hills, just minutes from Hitech City and Gachibowli. It is the closest thing to your own apartment, without any of the cost, hassle or loneliness of renting a flat.',
    'Single occupancy is especially popular with working professionals who take late calls, travel often, or simply want their own space to unwind after a long day. Everything you need is already here and included in one monthly fee.',
  ],
};

/** Availability copy stays qualitative — no fabricated room counts. */
export const SINGLE_SHARING_BOOKING = {
  availabilitySignal: 'Limited inventory - reserves fastest',
  ctaLabel: 'Book This Room',
  trustItems: ['AC', 'Meals', 'WiFi', 'Housekeeping'],
};

export const SINGLE_SHARING_IMAGES = {
  hero: {
    src: 'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/M_P00016_1_irxbq9.jpg',
    alt: 'Bed area in a single sharing room',
    title: 'Single sharing room - bed',
  },
  bathroom: {
    src: 'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/M_P00337_1_xcyssw.jpg',
    alt: 'Alternate view of the room in a single sharing PG',
    title: 'Single sharing room - alternate view',
  },
  wardrobe: {
    src: 'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/M_P00128_1_zkwdpx.jpg',
    alt: 'Wardrobe and storage area in a single sharing room',
    title: 'Single sharing room - wardrobe',
  },
  workDesk: {
    src: 'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/M_P00012_1_t5x15w.jpg',
    alt: 'Room interior detail in a single sharing room',
    title: 'Single sharing room - interior',
  },
};

export const SINGLE_SHARING_INCLUDES = [
  'A spacious AC room for one, with a quality bed and ortho mattress',
  'Personal wardrobe',
  'High-speed WiFi ideal for work-from-home and video calls',
  'Three home-style meals a day from our in-house kitchen',
  'Daily housekeeping and fresh linen',
  'Biometric no-curfew access and 24/7 CCTV security',
];

export const SINGLE_SHARING_WHY = {
  h2: 'Why Professionals Choose a Single Room',
  body: 'When your work demands concentration or unusual hours, sharing a room can be difficult. A single room gives you full control of your environment - quiet when you need to focus, privacy when you take calls, and space that is entirely yours. Our co-living for IT professionals is built precisely for this, pairing private rooms with a fast-commute location and reliable, high-speed internet.',
};

export const SINGLE_SHARING_PRIVACY = {
  h2: 'Privacy Without Isolation',
  first: [
    'Choosing a single room does not mean living alone. You still enjoy the full Narenn Living community - shared lounges, a lively events calendar and neighbours who quickly become friends. You get the best of both worlds: a private retreat to call your own, and a warm community whenever you want it.',
  ],
};

export const SINGLE_SHARING_COMPARISON = {
  h2: 'Single Sharing vs Renting a 1BHK in Madhapur',
  intro:
    'This is the comparison most people run badly, because they compare rent to rent and stop there. Run it properly and a 1BHK in Madhapur or Kondapur is rarely the cheaper choice.',
  points: [
    '1BHK rent plus a six to ten month deposit, versus our single room rent plus a modest refundable deposit',
    'Furniture, appliances, AC, curtains and kitchen setup - a large one-time hit you never take with us',
    'Broadband connection, installation and monthly bill - included here',
    'A cook and a maid, or cooking yourself after a ten-hour day - we serve three meals a day',
    'Society maintenance, water charges and brokerage - none of it applies',
    'Lock-in periods and exit painting deductions - replaced by a clear written agreement',
  ],
};

export const SINGLE_SHARING_FAQS = [
  {
    question: 'Is a single sharing room fully private?',
    answer:
      'Yes. A single sharing room is occupied by one resident only, giving you complete privacy in a fully furnished, air-conditioned room.',
  },
  {
    question: 'Are single rooms good for work-from-home?',
    answer:
      'They are ideal. With high-speed WiFi and a quiet, private space, single rooms suit remote work and frequent video calls perfectly.',
  },
  {
    question: 'Do single room residents get meals too?',
    answer:
      'Yes, all residents including single room occupants receive three home-style meals a day from our in-house kitchen.',
  },
];
