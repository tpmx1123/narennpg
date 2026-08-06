import { SITE_URL } from './sitePages';

export const STUDENTS_PAGE = {
  path: '/pg-for-students/',
  title: 'PG for Students in Madhapur, Hyderabad | Safe & Homely',
  description:
    'Safe, homely PG for students in Madhapur with AC rooms, three meals a day, WiFi & study-friendly spaces. Trusted by parents. Book a free visit at Narenn Living.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage: `${SITE_URL}/images/pg-for-students-in-hyderabad-madhapur-hero.jpg`,
};

export const STUDENTS_IMAGES = {
  hero: {
    src: `${SITE_URL}/images/pg-for-students-in-hyderabad-madhapur-hero.jpg`,
    fallback:
      'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002153/ChatGPT-Image-Jun-30-2025-06_48_11-PM-1200x800_kjphte_b9o6aa.webp',
    alt: 'Students at a PG for students in Hyderabad - Narenn Living Madhapur',
    title: 'PG for students in Hyderabad',
  },
  study: {
    src: `${SITE_URL}/images/student-study-desk-pg-room-hyderabad.jpg`,
    fallback:
      'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002175/Narenn-Elite-3-1200x750_ndmzod_ivw7jd.webp',
    alt: 'Student PG room in Madhapur, Hyderabad',
    title: 'Student PG room',
  },
  parents: {
    src: `${SITE_URL}/images/parents-visiting-student-pg-madhapur-safety.jpg`,
    fallback:
      'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002155/image-03-2_ze1iph_g3llre.webp',
    alt: 'Parents touring a safe student PG in Madhapur, Hyderabad',
    title: 'Parent site visit',
  },
  safety: {
    src: `${SITE_URL}/images/cctv-security-student-pg-hyderabad.jpg`,
    fallback:
      'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002175/Narenn-Elite-6-1200x750_h0uzb7_vfb7fy.webp',
    alt: 'CCTV security and verified entry at a student PG in Hyderabad',
    title: 'CCTV security',
  },
};

export const STUDENTS_HERO = {
  eyebrow: 'Student Accommodation',
  h1: 'PG for Students in Madhapur',
  h1Accent: 'Safe & Homely',
  lead:
    'A second home for students - AC rooms, three meals, WiFi and a community parents trust.',
};

export const STUDENTS_INTRO = [
  'Moving away from home for studies is a big step - for students and parents alike. Narenn Living offers a PG for students in Madhapur that feels like a second home: safe, well-managed, and genuinely comfortable. With AC rooms, three home-style meals a day, high-speed WiFi and daily housekeeping, students have everything they need to focus on their goals, while parents get the peace of mind that comes from a professionally run, secure property.',
  'Our VIP Hills location keeps students close to coaching centres, cafes, transport and the vibrant energy of Madhapur, while our supportive community makes settling in easy from day one.',
];

export const STUDENTS_TRUST = {
  eyebrow: 'Parent Peace of Mind',
  h2: 'Why Parents Trust Narenn Living',
  h2Accent: null,
  intro:
    'When families choose a PG, safety and reliability come first. Here is what reassures parents about sending their children to Narenn Living:',
  bullets: [
    {
      icon: 'Shield',
      title: '24/7 CCTV & biometric access',
      body: 'Security and verified entry at every property',
    },
    {
      icon: 'Users',
      title: 'On-site management',
      body: 'Professional, responsive staff when you need them',
    },
    {
      icon: 'UtensilsCrossed',
      title: 'Three home-style meals',
      body: 'Nutritious food from our own kitchen every day',
    },
    {
      icon: 'Sparkles',
      title: 'Daily housekeeping',
      body: 'Clean, hygienic rooms as standard',
    },
    {
      icon: 'HeartHandshake',
      title: 'Study-friendly community',
      body: 'A wholesome environment built for focus',
    },
  ],
};

export const STUDENTS_STUDY = {
  eyebrow: 'Focus First',
  h2: 'A Study-Friendly Environment',
  h2Accent: 'Environment',
  paragraphs: [
    'Every room comes with high-speed WiFi, so students can attend online classes and prepare for exams without fighting for bandwidth. The calm, well-maintained setting helps students stay focused, while quiet hours and clean common areas support good study habits. Our economical',
  ],
  link: { to: '/rooms/triple-sharing/', label: 'triple sharing rooms' },
  paragraphsAfter: [
    'are especially popular with students who want great value and a built-in group of study companions.',
  ],
};

export const STUDENTS_FOOD = {
  eyebrow: 'Fuel for Study',
  h2: 'Nutritious Food That Fuels Learning',
  h2Accent: 'Fuels Learning',
  paragraphs: [
    'Good food matters even more when you are studying hard. Our in-house kitchen serves three fresh, balanced meals a day - breakfast, lunch and dinner - so students eat well without spending on takeout or skipping meals.',
  ],
  linkLead: 'Take a look at our',
  link: { to: '/food/', label: 'homely food menu' },
  linkTrail: 'to see the kind of home-cooked variety students enjoy every day.',
};

export const STUDENTS_COMMUNITY = {
  eyebrow: 'Belong Here',
  h2: 'A Community That Feels Like Family',
  h2Accent: 'Like Family',
  paragraphs: [
    'For a student new to Hyderabad, the right community can make all the difference. At Narenn Living, students quickly find friends, study partners and a support system through shared spaces and regular events. Festival celebrations, birthday parties and casual get-togethers turn a PG into a home.',
  ],
  linkLead: 'Explore our',
  link: { to: '/events/', label: 'community events' },
  linkTrail: 'to see the lively side of student life here.',
};

export const STUDENTS_INCLUDED = {
  eyebrow: 'Transparent Pricing',
  h2: 'Everything Included, One Simple Fee',
  h2Accent: null,
  paragraphs: [
    'Parents appreciate the transparency of our all-inclusive pricing. Rent, meals, WiFi, housekeeping, security and amenities are bundled into one clear monthly payment, with no hidden charges or surprise costs.',
  ],
  chips: ['Room', 'Meals', 'WiFi', 'Housekeeping', 'Security'],
  linkLead: 'See all our',
  link: { to: '/amenities/', label: 'student amenities' },
  linkTrail: 'to understand exactly what is included in a student stay.',
};

export const STUDENTS_BOOK = {
  eyebrow: 'Visit Together',
  h2: 'Book a Visit With Your Family',
  h2Accent: 'Your Family',
  body: 'We warmly welcome students and their parents to visit, tour the property, meet our team and taste the food before deciding. Seeing the safety, cleanliness and warmth in person is the best reassurance of all. Call 70759 85666 or book a free visit, and let Narenn Living become your home away from home in Hyderabad.',
};

export const STUDENTS_APPROVE = {
  eyebrow: 'Both Sides Covered',
  h2: 'Why Parents Approve of Narenn Living',
  h2Accent: 'Approve',
  paragraphs: [
    'Most student accommodation decisions in India are made by two people who want different things. The student wants freedom and WiFi. The parent wants to know their child is eating properly and is safe. A good PG has to satisfy both without lying to either.',
    'So we invite parents on the visit and we answer their questions directly. They see the kitchen. They meet the staff. They see the biometric entry, the CCTV coverage, the separate accommodation for women, the 24x7 security. And they get a phone number that a real person picks up. That combination is why a student\'s parent signs off, and it is why we get referrals from families rather than from ads.',
  ],
  bullets: [
    'Separate, secure accommodation for women with dedicated floors and verified entry',
    'Biometric access with CCTV coverage across entries, corridors and common areas',
    'Three home-style meals a day from our own kitchen - not instant noodles at 11 PM',
    'A written agreement with transparent fees and a clear refund policy',
    'A staff team parents can call directly, not a ticketing system',
  ],
};

export const STUDENTS_SUPPORTS = {
  eyebrow: 'Exam Ready',
  h2: 'A Place That Supports Studying',
  paragraphs: [
    'Every room includes charging points and fibre WiFi that holds up during an online class or a submission deadline. Common lounges give you somewhere to go when your room gets claustrophobic during exam week.',
    'Power backup means a load-shedding evening does not cost you a submission. And there is no curfew, so a late library session or an evening batch does not turn into an argument at the gate.',
  ],
  features: [
    { icon: 'Monitor', title: 'Charging points', body: 'Power where you need it for classes and deadlines' },
    { icon: 'Wifi', title: 'Fibre WiFi', body: 'Holds up for calls and submissions' },
    { icon: 'Sofa', title: 'Common lounges', body: 'Space to breathe during exam week' },
    { icon: 'Zap', title: 'Power backup', body: 'Load-shedding will not cost a submission' },
    { icon: 'Moon', title: 'No curfew', body: 'Late library or evening batch stays easy' },
  ],
};

export const STUDENTS_BUDGETS = {
  eyebrow: 'Clear Numbers',
  h2: 'Student Budgets, Honestly Handled',
  paragraphs: [
    'Triple sharing is our most affordable format and it is where most students start. It includes exactly the same food, the same housekeeping, the same security and the same VIP Hills location as every other room in the building - the only difference is floor space.',
    'Once you compare it against a shared flat with a deposit, furniture, internet, a cook, a maid and utilities, the maths usually settles itself. Call 70759 85666 and we will walk you and your parents through the actual numbers with nothing hidden.',
  ],
  compare: {
    leftTitle: 'Narenn triple sharing',
    leftItems: ['Room + meals + WiFi', 'Housekeeping & security', 'VIP Hills location', 'One clear monthly fee'],
    rightTitle: 'Typical shared flat',
    rightItems: ['Deposit + furniture', 'Internet & utilities', 'Cook / maid costs', 'Multiple bills to chase'],
  },
};

export const STUDENTS_FAQ_HEADING = {
  eyebrow: 'FAQ',
  h2: 'Frequently Asked Questions',
  h2Accent: 'Questions',
};

export const STUDENTS_FAQS = [
  {
    question: 'Is Narenn Living safe for students?',
    answer:
      'Yes. Every property has 24/7 CCTV security, biometric access and on-site management, making it a safe, trusted choice for students and their families.',
  },
  {
    question: 'What food is provided for students?',
    answer:
      'Students receive three home-style meals a day - breakfast, lunch and dinner - freshly prepared in our own in-house kitchen.',
  },
  {
    question: 'Which room type is best for students?',
    answer:
      'Triple sharing rooms are the most popular with students, offering the best value and a ready-made group of friends and study companions.',
  },
];

export const STUDENTS_FINAL_CTA = {
  title: 'Ready for a safer, homelier PG?',
  titleAccent: 'homelier PG?',
  body: 'Bring your family for a free visit - see the rooms, taste the food and meet the team before you decide.',
};
