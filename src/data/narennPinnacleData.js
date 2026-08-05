import { SITE_URL } from './sitePages';
import {
  PROPERTY_ADDRESS,
  PROPERTY_AMENITIES,
  PROPERTY_HIGHLIGHTS,
  PROPERTY_ROOM_OPTIONS,
  getPropertyListItem,
} from './propertySharedData';

const item = getPropertyListItem('pinnacle');

/** SEO — Narenn Pinnacle */
export const PINNACLE_PAGE = {
  path: '/properties/narenn-pinnacle/',
  title: 'Narenn Pinnacle | Upscale Co-Living Madhapur',
  description:
    'Narenn Pinnacle - upscale executive co-living in Madhapur with rooftop café, mini-gym and quiet study zones near Hitech City.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage:
    'https://res.cloudinary.com/dmaeijlc/image/upload/v1785915351/ChatGPT_Image_Aug_5_2026_01_05_43_PM_c34gr5.png',
};

export const PINNACLE = {
  id: 'pinnacle',
  slug: 'narenn-pinnacle',
  page: PINNACLE_PAGE,
  hero: {
    eyebrow: 'Upscale Executive',
    h1: 'Narenn Pinnacle',
    h1Accent: 'Madhapur',
    lead: 'A modern space crafted for high-performance living.',
    image: {
      src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1785915351/ChatGPT_Image_Aug_5_2026_01_05_43_PM_c34gr5.png',
      alt: item.image.alt,
      title: item.image.title,
    },
  },
  audience: 'Students & professionals',
  tagline: 'Elevated living for ambitious residents',
  intro: [
    item.body,
    'Pinnacle blends premium finishes with quiet focus zones and community warmth. It is a strong fit if you want an upscale co-living environment close to Hitech City and the Financial District.',
  ],
  address: PROPERTY_ADDRESS,
  highlights: PROPERTY_HIGHLIGHTS,
  amenities: PROPERTY_AMENITIES,
  why: {
    h2: 'Why Choose Narenn Pinnacle',
    body: 'Pinnacle is for residents who want elevated everyday living — premium finishes, calm focus spaces and an upscale atmosphere, without losing the warmth of co-living community.',
    points: [
      'Upscale interiors and thoughtfully designed rooms',
      'A peaceful environment for work and study',
      'Close to Hitech City and the Financial District',
      'Full Narenn standard of food, WiFi and security',
    ],
  },
  idealFor: {
    h2: 'Ideal For',
    items: [
      { title: 'Ambitious professionals', description: 'An elevated base for high-performance living.' },
      { title: 'Students who need focus', description: 'Quiet spaces without sacrificing community.' },
      { title: 'Residents upgrading lifestyle', description: 'Premium co-living without landlord hassles.' },
    ],
  },
  rooms: PROPERTY_ROOM_OPTIONS,
  embed: item.embed,
  faqs: [
    {
      question: 'What makes Narenn Pinnacle different?',
      answer:
        'Pinnacle emphasises upscale interiors, calm focus spaces and an elevated everyday experience - while keeping the same Narenn meals, WiFi, housekeeping and security standard.',
    },
    {
      question: 'Are meals included at Pinnacle?',
      answer:
        'Yes. Four home-style meals a day from our in-house kitchen are part of the Narenn Living experience across all four properties.',
    },
    {
      question: 'Where is Narenn Pinnacle located?',
      answer: `Narenn Pinnacle is at ${PROPERTY_ADDRESS}.`,
    },
  ],
};

export const PINNACLE_CANONICAL = `${SITE_URL}${PINNACLE_PAGE.path}`;
