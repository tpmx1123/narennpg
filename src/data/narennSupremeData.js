import { SITE_URL } from './sitePages';
import {
  PROPERTY_ADDRESS,
  PROPERTY_AMENITIES,
  PROPERTY_HIGHLIGHTS,
  PROPERTY_ROOM_OPTIONS,
  getPropertyListItem,
} from './propertySharedData';

const item = getPropertyListItem('supreme');

/** SEO — Narenn Supreme */
export const SUPREME_PAGE = {
  path: '/properties/narenn-supreme/',
  title: "Narenn's Supreme | Vibrant Co-Living Madhapur",
  description:
    "Narenn's Supreme - vibrant co-living in Silicon Valley, Madhapur with networking hubs and community events near IT parks.",
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage:
    'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002153/ChatGPT_Image_Aug_5_2026_12_57_13_PM_muwbh3_oqlip7.png',
};

export const SUPREME = {
  id: 'supreme',
  slug: 'narenn-supreme',
  page: SUPREME_PAGE,
  hero: {
    eyebrow: 'Vibrant Living',
    h1: 'Narenn Supreme',
    h1Accent: 'Madhapur',
    lead: 'Dependable comfort with a friendly, social vibe.',
    image: {
      src: 'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002153/ChatGPT_Image_Aug_5_2026_12_57_13_PM_muwbh3_oqlip7.png',
      alt: item.image.alt,
      title: item.image.title,
    },
  },
  audience: 'Community-focused residents',
  tagline: 'Active community, easy Madhapur access',
  intro: [
    item.body,
    'Supreme suits residents who want companionship, events and a lively atmosphere - with the same furnished rooms, meals, WiFi and security you get across every Narenn property.',
  ],
  address: PROPERTY_ADDRESS,
  highlights: PROPERTY_HIGHLIGHTS,
  amenities: PROPERTY_AMENITIES,
  why: {
    h2: 'Why Choose Narenn Supreme',
    body: 'Supreme is the social pick - dependable comfort with a friendly vibe, easy community connection and the same complete Narenn inclusions across meals, WiFi, housekeeping and security.',
    points: [
      'Lively community with events and shared spaces',
      'Easy access to Madhapur work and lifestyle hubs',
      'Dependable room comfort and daily services',
      'One transparent standard shared with all Narenn homes',
    ],
  },
  idealFor: {
    h2: 'Ideal For',
    items: [
      { title: 'Social residents', description: 'People who thrive on community and connection.' },
      { title: 'Young professionals', description: 'A friendly home near IT parks and transit.' },
      { title: 'Anyone new to the city', description: 'An easy way to settle into Madhapur life.' },
    ],
  },
  rooms: PROPERTY_ROOM_OPTIONS,
  embed: item.embed,
  faqs: [
    {
      question: 'Is Narenn Supreme more social?',
      answer:
        'Supreme is known for a friendly, social vibe and easy community connection, while still offering quiet furnished rooms for rest and work.',
    },
    {
      question: 'Do all properties share the same amenities?',
      answer:
        'Yes. Meals, WiFi, housekeeping, biometric access and CCTV follow the same Narenn standard at Elite, Crown, Pinnacle and Supreme.',
    },
    {
      question: 'Where is Narenn Supreme located?',
      answer: `Narenn Supreme is at ${PROPERTY_ADDRESS}.`,
    },
  ],
};

export const SUPREME_CANONICAL = `${SITE_URL}${SUPREME_PAGE.path}`;
