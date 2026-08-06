import { SITE_URL } from './sitePages';

export const FAQ_PAGE = {
  path: '/faq/',
  title: 'Narenn Living FAQ | Co-Living & PG in Madhapur, Hyderabad',
  description:
    'Answers about rooms, food, pricing, safety, location & booking at Narenn Living co-living in Madhapur. Everything you need to know before you move in.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage: `${SITE_URL}/images/narenn-living-faq-co-living-madhapur.jpg`,
};

export const FAQ_IMAGES = {
  hero: {
    src: `${SITE_URL}/images/narenn-living-faq-co-living-madhapur.jpg`,
    fallback:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1784114731/image-03-2_ze1iph.webp',
    alt: 'Frequently asked questions about co-living and PG at Narenn Living Madhapur',
    title: 'Narenn Living FAQ',
  },
  pricing: {
    src: `${SITE_URL}/images/pg-rent-deposit-terms-madhapur.jpg`,
    fallback:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1785919949/M_P00337_1_xcyssw.jpg',
    alt: 'Transparent rent and deposit terms for a PG in Madhapur, Hyderabad',
    title: 'Pricing and deposits',
  },
  talkBg: {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784195917/image-13-2_xarwah.webp',
    alt: 'Narenn Living terrace community space in Madhapur',
    title: 'Talk to Narenn Living',
  },
};

export const FAQ_HERO = {
  eyebrow: 'Clear Answers',
  h1: 'Frequently Asked Questions',
  h1Accent: 'Narenn Living',
  lead: 'covering rooms, food, pricing, safety, location and booking.',
};

export const FAQ_INTRO = [
  'Choosing where to live is a big decision, and it is natural to have questions. We have gathered the most common questions about life at Narenn Living into one place, covering rooms, food, pricing, safety, location and booking. If you do not find what you are looking for here, our team is always happy to help - just call 70759 85666 or book a visit.',
  'This Narenn Living FAQ is designed to give you a clear, honest picture of what to expect before you move in.',
];

export const FAQ_CATEGORIES = [
  {
    eyebrow: 'Day to Day',
    navLabel: 'Rooms',
    h2: 'Rooms and Living',
    h2Accent: 'Living',
    intro: 'Common questions about our rooms and day-to-day living:',
    items: [
      {
        question: 'What room types are available?',
        answer:
          'Single, double, triple and four sharing, all fully furnished and air-conditioned.',
        link: { to: '/rooms/', label: 'See our room options' },
      },
      {
        question: 'Is everything furnished?',
        answer:
          'Yes, every room includes a bed, ortho mattress, wardrobe and AC.',
      },
      {
        question: 'Is there a curfew?',
        answer:
          'No. We offer biometric no-curfew access so your schedule stays your own.',
      },
      {
        question: 'How is cleaning handled?',
        answer:
          'Daily housekeeping keeps rooms and common areas spotless, with regular linen changes.',
      },
    ],
  },
  {
    eyebrow: 'Included Daily',
    navLabel: 'Food',
    h2: 'Food and Amenities',
    h2Accent: 'Amenities',
    intro: 'What is included when it comes to meals and facilities:',
    items: [
      {
        question: 'How many meals are provided?',
        answer:
          'Three a day: breakfast, lunch and dinner, cooked fresh in-house. Evening snacks are served separately and are not counted as a meal.',
        link: { to: '/food/', label: 'See our food menu' },
      },
      {
        question: 'Is WiFi included?',
        answer:
          'Yes, high-speed WiFi is provided throughout, ideal for work and study.',
      },
      {
        question: 'What else is included?',
        answer:
          'Security, terrace and common areas, and community events.',
        link: { to: '/amenities/', label: 'Explore all amenities' },
      },
      {
        question: 'Are there hidden charges?',
        answer: 'No. One transparent monthly fee covers everything.',
      },
    ],
  },
  {
    eyebrow: 'Peace of Mind',
    navLabel: 'Safety',
    h2: 'Safety and Security',
    h2Accent: 'Security',
    intro: 'Reassurance for residents and parents alike:',
    items: [
      {
        question: 'Is Narenn Living safe?',
        answer:
          'Yes. Every property has 24/7 CCTV, biometric access and on-site management.',
      },
      {
        question: 'Is it suitable for students?',
        answer:
          'Very much so. Our PG for students is safe, homely and study-friendly.',
        link: { to: '/pg-for-students/', label: 'Explore our PG for students' },
      },
      {
        question: 'Who manages the property?',
        answer:
          'Professional, on-site staff from the Narenn Group are present to help at all times.',
      },
    ],
  },
  {
    eyebrow: 'Getting Around',
    navLabel: 'Location',
    h2: 'Location and Commute',
    h2Accent: 'Commute',
    intro: 'Where we are and how connected you will be:',
    items: [
      {
        question: 'Where is Narenn Living?',
        answer: 'In VIP Hills, Madhapur, Hyderabad.',
        link: { to: '/locations/madhapur/', label: 'Read our Madhapur location guide' },
      },
      {
        question: 'How far is Hitech City?',
        answer: 'About 5-10 minutes.',
      },
      {
        question: 'What about Gachibowli and the Financial District?',
        answer: 'Roughly 15-20 minutes away.',
      },
    ],
  },
  {
    eyebrow: 'Next Steps',
    navLabel: 'Pricing',
    h2: 'Pricing and Booking',
    h2Accent: 'Booking',
    intro: 'How to move forward when you are ready:',
    items: [
      {
        question: 'How is pricing structured?',
        answer:
          'A single all-inclusive monthly fee covering room, meals, WiFi, housekeeping, security and amenities.',
      },
      {
        question: 'How do I book?',
        answer:
          'Call 70759 85666 or book a visit, tour the property, choose your room and reserve it.',
        link: { to: '/contact-us/', label: 'Book a visit' },
      },
      {
        question: 'Can I visit first?',
        answer:
          'Yes, we encourage a free visit before booking so you can see everything in person.',
      },
    ],
  },
];

export const FAQ_STILL_HELP = {
  eyebrow: 'Need More',
  h2: 'Still Have Questions?',
  h2Accent: 'Questions?',
  body: 'If your question is not answered here, we would love to help directly. Call or WhatsApp 70759 85666, or book a free visit and ask us anything in person. At Narenn Living, we believe in complete transparency and are always glad to help you make the right choice.',
};

export const FAQ_STILL_ASK = {
  eyebrow: 'Ask Directly',
  h2: 'Still Have a Question?',
  h2Accent: 'Question?',
  paragraphs: [
    'This page covers what we get asked most, but no FAQ page has ever covered the one question that actually matters to a specific person on a specific joining date with a specific budget.',
    'Call or WhatsApp 70759 85666 and ask. A real person picks up, evenings and weekends included. We would rather answer a hard question now than have you find out the answer in month three.',
  ],
};

export const FAQ_WISH = {
  eyebrow: 'Ask These Too',
  h2: 'The Questions We Wish More People Asked',
  h2Accent: 'Asked',
  items: [
    {
      question: 'What exactly is deducted from my deposit, and is that written down before I pay?',
      answer:
        'Yes. Deductions are limited to what your written agreement lists before you pay - typically unpaid dues or documented damage beyond normal wear. We do not invent exit painting charges or surprise furniture costs at move-out.',
    },
    {
      question: 'What is the notice period, and what happens if I leave early?',
      answer:
        'The notice period is stated in your agreement before you commit. If you leave early, the same written terms apply - so you know the outcome in advance rather than negotiating it on your last day.',
    },
    {
      question: 'Is the kitchen run in-house or outsourced to a caterer?',
      answer:
        'In-house. Breakfast, lunch and dinner are cooked fresh on site by our kitchen team — not delivered by an outside caterer.',
    },
    {
      question: 'How long did the last maintenance request in this building take to close?',
      answer:
        'Anything affecting water, power, safety or air conditioning gets a same-day response. Everything else follows a 24-hour standard. Our maintenance staff are on our own payroll, so there is no contractor queue to wait on.',
    },
    {
      question: 'Can I speak to a resident who has lived here for more than a year?',
      answer:
        'Yes. On a site visit we are happy to introduce you to long-stay residents when they are around, so you hear how day-to-day life actually feels - not only our tour script.',
    },
    {
      question: 'Is the WiFi actually good enough for a video call at 9 PM, when everyone is home?',
      answer:
        'High-speed WiFi is included throughout for work and study. The honest test is to join a call from the common areas or your room during a visit at peak evening hours - we encourage that before you decide.',
    },
  ],
};

export const FAQ_COMPLAINTS = {
  eyebrow: 'Accountability',
  h2: 'How We Handle Complaints',
  h2Accent: 'Complaints',
  paragraphs: [
    'Every place gets things wrong sometimes. What separates a good PG from a bad one is what happens in the twenty-four hours afterwards. Anything affecting water, power, safety or air conditioning gets a same-day response. Everything else carries a 24-hour standard.',
    'Our maintenance staff are on our own payroll, so there is no contractor to chase and no approval chain to wait on. If something is not resolved, escalate it to us directly on 70759 85666 rather than letting it sit.',
  ],
};

export const FAQ_DEPOSITS = {
  eyebrow: 'Transparent Terms',
  h2: 'How Pricing and Deposits Work',
  h2Accent: 'Work',
  paragraphs: [
    'One monthly figure covers the fully furnished AC room, three meals a day, WiFi, daily housekeeping, RO water, hot water, power backup, security and every community event. Electricity is billed transparently against actual usage - that is the only variable line.',
    'The deposit is modest, refundable and governed by a written agreement that states the notice period and the deduction policy before you pay. No brokerage, no furniture cost, no internet installation charge, no exit painting deduction invented at the last minute.',
  ],
};

export const FAQ_ACCORDION_HEADING = {
  eyebrow: 'FAQ',
  h2: 'Frequently Asked Questions',
  h2Accent: 'Questions',
};

export const FAQ_ACCORDION = [
  {
    question: 'What is included in the monthly fee?',
    answer:
      'A single all-inclusive fee covers your furnished AC room, three meals a day, WiFi, housekeeping, security and all amenities - with no hidden charges.',
  },
  {
    question: 'Is there a curfew at Narenn Living?',
    answer:
      'No. We provide biometric no-curfew access so residents can come and go on their own schedule.',
  },
  {
    question: 'How do I book a room?',
    answer:
      'Call or WhatsApp 70759 85666, or book a free visit through our contact page to tour the property and reserve your room.',
  },
];

/** Flat list of all Q&As for FAQPage schema */
export function getAllFaqEntities() {
  const fromCategories = FAQ_CATEGORIES.flatMap((cat) =>
    cat.items.map((item) => ({
      question: item.question,
      answer: item.answer,
    }))
  );
  const fromWish = FAQ_WISH.items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));
  return [...fromCategories, ...fromWish, ...FAQ_ACCORDION];
}
