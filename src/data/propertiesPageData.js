import { SITE_URL } from './sitePages';

export const PROPERTIES_PAGE = {
  path: '/properties/',
  title: 'Our Co-Living Properties in Madhapur | Elite, Crown, Pinnacle, Supreme',
  description:
    "Explore Narenn Living's four premium co-living properties in VIP Hills, Madhapur — Elite, Crown, Pinnacle & Supreme. AC rooms, meals & WiFi included. Book a visit.",
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage: `${SITE_URL}/images/co-living-properties-in-madhapur-vip-hills-hero.jpg`,
};

export const PROPERTIES_IMAGES = {
  hero: {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1785405044/Gemini_Generated_Image_shjp3lshjp3lshjp_bbugon.png',
    fallback:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1784114731/image-03-2_ze1iph.webp',
    alt: 'Narenn Living branded lobby entrance in VIP Hills, Madhapur, Hyderabad',
    title: 'Co-living properties in Madhapur',
  },
};

export const PROPERTIES_HERO = {
  eyebrow: 'Our Properties',
  h1: 'Our Co-Living Properties in VIP Hills,',
  lead:
    'Four premium homes in Madhapur — Elite, Crown, Pinnacle and Supreme — one standard of comfort, service and location.',
};

export const PROPERTIES_INTRO = [
  'Narenn Living operates four premium co-living properties in Madhapur — Narenn Elite, Narenn Crown, Narenn Pinnacle and Narenn Supreme — all located in the sought-after VIP Hills neighbourhood, minutes from Hitech City and Gachibowli. Each property upholds the same high standard of comfort, cleanliness and service, while offering its own character and room mix, so residents can choose the setting and sharing type that suits them best.',
  'Whether you are a student, a fresher or an experienced IT professional, there is a Narenn property and a room that fits your budget and lifestyle. Here is a closer look at what unites them and what makes each special.',
];

export const PROPERTIES_STANDARD = {
  h2: 'One Standard Across All Four',
  intro:
    'We believe your experience should never depend on which door you walk through. We maintain zero quality gap between our buildings. Whether you choose Elite or Supreme, you are guaranteed the same high-standard in-house kitchen, rigorous biometric access protocols, and premium maintenance cycles.',
  cards: [
    {
      icon: 'UtensilsCrossed',
      title: 'Uniform Dining',
      description: 'The same expert chefs prepare home-style meals for all residents.',
    },
    {
      icon: 'Fingerprint',
      title: 'Unified Security',
      description: 'Standardized biometric and CCTV security across all properties.',
    },
    {
      icon: 'Sparkles',
      title: 'Standard Care',
      description: 'Identical housekeeping schedules and maintenance standards.',
    },
  ],
};

export const PROPERTIES_LIST = [
  {
    id: 'elite',
    name: 'Narenn Elite',
    h2: 'Narenn Elite',
    body: 'Narenn Elite offers refined, comfortable co-living for residents who want premium living in the heart of VIP Hills. With well-appointed rooms and a welcoming community, it is a favourite among professionals seeking a polished home base close to work.',
    href: '/properties/narenn-elite/',
    linkLabel: 'Explore Narenn Elite',
    image: {
      src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
      alt: 'Narenn Elite co-living property in VIP Hills, Madhapur',
      title: 'Narenn Elite',
    },
    embed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.747655302217!2d78.3866209733195!3d17.45031290099292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91307d159c0b%3A0x3394282ae6894e3b!2sNarenn%20Elite!5e1!3m2!1sen!2sin!4v1784698160831!5m2!1sen!2sin',
  },
  {
    id: 'crown',
    name: 'Narenn Crown',
    h2: 'Narenn Crown',
    body: 'Narenn Crown combines comfort and value in a lively, well-managed setting. Its balanced room mix and strong community spirit make it a great choice for both students and young professionals looking for the right blend of privacy and companionship.',
    href: '/properties/narenn-crown/',
    linkLabel: 'Explore Narenn Crown',
    image: {
      src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      alt: 'Narenn Crown co-living property in VIP Hills, Madhapur',
      title: 'Narenn Crown',
    },
    embed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.750759530206!2d78.3866913733195!3d17.45010570099894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913cdfef04ff%3A0x7e276b137cb5a4ff!2sNARENN%20CROWN!5e1!3m2!1sen!2sin!4v1784698247790!5m2!1sen!2sin',
  },
  {
    id: 'pinnacle',
    name: 'Narenn Pinnacle',
    h2: 'Narenn Pinnacle',
    body: 'Narenn Pinnacle stands for elevated living — spacious, thoughtfully designed rooms and a calm, focused atmosphere. It appeals to residents who want a peaceful environment for work and study without sacrificing the warmth of community.',
    href: '/properties/narenn-pinnacle/',
    linkLabel: 'Explore Narenn Pinnacle',
    image: {
      src: 'https://res.cloudinary.com/dmaeijlc/video/upload/so_1,w_1200,h_750,c_fill,q_auto,f_jpg/v1784010621/01_NARENN_PINNACLE_ttyhib.jpg',
      alt: 'Narenn Pinnacle co-living property in VIP Hills, Madhapur',
      title: 'Narenn Pinnacle',
    },
    embed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5461.517776966263!2d78.3863690733195!3d17.449563101014633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9176c8e5fe6b%3A0x41740ec5839a2c86!2sNarenn%20Pinnacle!5e1!3m2!1sen!2sin!4v1784698313513!5m2!1sen!2sin',
  },
  {
    id: 'supreme',
    name: 'Narenn Supreme',
    h2: 'Narenn Supreme',
    body: 'Narenn Supreme rounds out our portfolio with dependable comfort and a friendly, social vibe. It is a popular pick for those who value an active community and easy access to everything Madhapur has to offer.',
    href: '/properties/narenn-supreme/',
    linkLabel: 'Explore Narenn Supreme',
    image: {
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      alt: 'Narenn Supreme co-living property in VIP Hills, Madhapur',
      title: 'Narenn Supreme',
    },
    embed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.7349189041884!2d78.38644297331955!3d17.451163000968403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91002b249dfd%3A0xb665d4f74aeb262!2sNarenn%20Supreme!5e1!3m2!1sen!2sin!4v1784698218183!5m2!1sen!2sin',
  },
];

export const PROPERTIES_LOCATION = {
  h2: 'All Perfectly Located in VIP Hills',
  body: 'Centrally located in Madhapur, our properties put you minutes away from the biggest IT parks, malls, and transit links while tucked away in a premium residential pocket.',
  cta: {
    label: 'view our neighborhood guide',
    to: '/locations/madhapur/',
  },
};

export const PROPERTIES_FIND = {
  h2: 'Find Your Property',
  body: 'The best way to choose is to visit and feel the difference between them. Tell us your budget, preferred sharing type and workplace or college, and we will recommend the ideal property and room.',
  backgroundImage:
    'https://res.cloudinary.com/dmaeijlc/image/upload/v1784114731/image-03-2_ze1iph.webp',
};

export const PROPERTIES_UNIFORM = {
  h2: 'One Standard Across All Four',
  paragraphs: [
    'Narenn Elite, Narenn Crown, Narenn Pinnacle and Narenn Supreme have their own character and their own room mix. What they do not have is a quality gap. The same in-house kitchen serves all four. The same housekeeping protocol runs in all four. The same biometric no-curfew access, the same CCTV and security cover, the same fibre WiFi, the same power backup, the same VIP Hills location.',
    'That matters more than it sounds. It means choosing between our properties is a question of budget and preference, not a question of risk. There is no unlucky building to accidentally end up in.',
  ],
};

export const PROPERTIES_CHOOSE = {
  h2: 'How to Choose Between Them',
  bullets: [
    'Start with your sharing format — single, double or triple — and see which properties currently have it open',
    'Then consider your budget band; pricing varies modestly between properties',
    "Then consider your specific office; all four are in VIP Hills, but a few minutes' difference matters if you walk",
    'Visit at least two before deciding — most people know within five minutes which one feels right',
    'Ask us honestly which one we would put a friend in. We will tell you.',
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    alt: 'Planning checklist, notebook and phone while choosing a Narenn Living co-living property in Madhapur',
    title: 'How to choose between Narenn properties',
  },
};

export const PROPERTIES_BUILT = {
  h2: 'Built, Not Rented',
  body: 'Unlike many co-living operators who lease existing apartment buildings and "repurpose" them, the Narenn Group built and owns every one of these buildings from the ground up. This architectural control allows for superior cross-ventilation, specialized plumbing designed for high occupancy, and maintenance schedules that aren\'t at the mercy of a third-party landlord.',
};

export const PROPERTIES_VISIT = {
  h2: 'Which Property Should You Visit First?',
  body: "We often advise residents to trust their initial reaction to the building's aesthetic. If you're still unsure, give us a call! Our team knows the nuances of each property and can provide a recommendation based on your lifestyle, commute, and personality.",
  primaryCta: 'Get on a Showcase Tour',
  secondaryCta: 'WhatsApp Us Now',
};

export const PROPERTIES_FAQS = [
  {
    question: 'How many properties does Narenn Living have?',
    answer:
      'Narenn Living operates four premium co-living properties in VIP Hills, Madhapur — Narenn Elite, Narenn Crown, Narenn Pinnacle and Narenn Supreme.',
  },
  {
    question: 'Do all properties offer the same amenities?',
    answer:
      'Yes. All four properties maintain the same standard of furnished AC rooms, four daily meals, WiFi, housekeeping, security and community events.',
  },
  {
    question: 'How do I choose the right property?',
    answer:
      'Share your budget, preferred sharing type and workplace or college with our team, and we will recommend the property and room that fits you best. Booking a visit is the easiest way to decide.',
  },
];
