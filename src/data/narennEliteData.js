import { SITE_URL } from './sitePages';
import {
  PROPERTY_ADDRESS,
  PROPERTY_AMENITIES,
  PROPERTY_HIGHLIGHTS,
  PROPERTY_ROOM_OPTIONS,
  getPropertyListItem,
} from './propertySharedData';

const item = getPropertyListItem('elite');

/** SEO — Narenn Elite */
export const ELITE_PAGE = {
  path: '/properties/narenn-elite/',
  title: 'Narenn Elite | Premium Co-Living in Madhapur',
  description:
    'Narenn Elite - Minimlistic co-living in VIP Hills, Madhapur with premium desks, private balconies and proximity to Raheja Mindspace.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp',
};

export const ELITE = {
  id: 'elite',
  slug: 'narenn-elite',
  page: ELITE_PAGE,
  hero: {
    eyebrow: 'Minimalist Elegance',
    h1: 'Narenn Elite',
    h1Accent: 'Madhapur',
    lead: 'A premium co-living space for men and women in VIP Hills.',
    image: {
      src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp',
      alt: 'Narenn Elite co-living property in VIP Hills, Madhapur',
      title: 'Narenn Elite',
    },
  },
  audience: 'Men & Women',
  tagline: 'Focused living with polished comfort',
  intro: [
    item.body,
    'Choose from well-appointed 1 to 4 sharing rooms with AC options, all minutes from Hitech City, Cyber Towers and Gachibowli. Elite is ideal if you want a calm, refined home base without sacrificing community.',
  ],
  address: PROPERTY_ADDRESS,
  highlights: PROPERTY_HIGHLIGHTS,
  amenities: PROPERTY_AMENITIES,
  why: {
    h2: 'Why Choose Narenn Elite',
    body: 'Elite is built for residents who want a polished, calm home close to work. Thoughtful room layouts, a quiet community rhythm and VIP Hills connectivity make it a favourite for professionals who value focus without isolation.',
    points: [
      'Refined interiors suited to focused living',
      'Balanced privacy with a welcoming community',
      'Minutes from Raheja Mindspace and Hitech City',
      'Same Narenn meals, WiFi, cleaning and security standard',
    ],
  },
  idealFor: {
    h2: 'Ideal For',
    items: [
      { title: 'IT professionals', description: 'A polished base near Madhapur offices and tech parks.' },
      { title: 'Students & freshers', description: 'Move-in ready rooms with meals and WiFi included.' },
      { title: 'Anyone seeking calm', description: 'A quieter setting without giving up community.' },
    ],
  },
  rooms: PROPERTY_ROOM_OPTIONS,
  embed: item.embed,
  faqs: [
    {
      question: 'Who can stay at Narenn Elite?',
      answer:
        'Narenn Elite is a premium co-living residence designed for both men and women - students, freshers and IT professionals.',
    },
    {
      question: 'What room options are available at Elite?',
      answer:
        'Elite offers single, double, triple and quad sharing rooms with furnished AC options. Availability changes - book a visit to see what is open.',
    },
    {
      question: 'Where is Narenn Elite located?',
      answer: `Narenn Elite is at ${PROPERTY_ADDRESS}, near Hitech City and Raheja Mindspace.`,
    },
  ],
};

export const ELITE_CANONICAL = `${SITE_URL}${ELITE_PAGE.path}`;
