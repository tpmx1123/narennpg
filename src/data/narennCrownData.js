import { SITE_URL } from './sitePages';
import {
  PROPERTY_ADDRESS,
  PROPERTY_AMENITIES,
  PROPERTY_HIGHLIGHTS,
  PROPERTY_ROOM_OPTIONS,
  getPropertyListItem,
} from './propertySharedData';

const item = getPropertyListItem('crown');

/** SEO — Narenn Crown */
export const CROWN_PAGE = {
  path: '/properties/narenn-crown/',
  title: "Narenn's Crown | Girls Co-Living in Madhapur",
  description:
    "Narenn's Crown - a safe, refined co-living space for girls in VIP Hills, Madhapur with spacious lounge and dedicated dining.",
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage: item.image.src,
};

export const CROWN = {
  id: 'crown',
  slug: 'narenn-crown',
  page: CROWN_PAGE,
  hero: {
    eyebrow: 'For Girls',
    h1: 'Narenn Crown',
    h1Accent: 'Madhapur',
    lead: 'A safe, refined women-only co-living home in VIP Hills.',
    image: {
      src: item.image.src,
      alt: item.image.alt,
      title: item.image.title,
    },
  },
  audience: 'Women only',
  tagline: 'Refined comfort with a welcoming community',
  intro: [
    item.body,
    'Crown is curated exclusively for women who want privacy, safety and a warm community. Enjoy balanced room options, lounge spaces and the same Narenn standard of meals, WiFi and housekeeping.',
  ],
  address: PROPERTY_ADDRESS,
  highlights: PROPERTY_HIGHLIGHTS,
  amenities: PROPERTY_AMENITIES,
  why: {
    h2: 'Why Choose Narenn Crown',
    body: 'Crown is curated exclusively for women who want safety, comfort and community in equal measure. Secure access, warm common spaces and the full Narenn living standard make it a trusted home in VIP Hills.',
    points: [
      'Women-only residence with biometric security',
      'Warm lounge spaces and a supportive community',
      'Transparent inclusions - meals, WiFi, housekeeping',
      'Central VIP Hills location for work and college',
    ],
  },
  idealFor: {
    h2: 'Ideal For',
    items: [
      { title: 'Working women', description: 'A safe, refined home near Madhapur workplaces.' },
      { title: 'Women students', description: 'Comfortable sharing options with meals included.' },
      { title: 'Families seeking security', description: '24/7 CCTV, biometric access and on-site management.' },
    ],
  },
  rooms: PROPERTY_ROOM_OPTIONS,
  embed: item.embed,
  faqs: [
    {
      question: 'Is Narenn Crown only for women?',
      answer:
        'Yes. Narenn Crown is a women-only co-living residence with secure biometric access and 24/7 CCTV.',
    },
    {
      question: 'What sharing types does Crown offer?',
      answer:
        'Crown offers single through quad sharing rooms. Call us or book a visit to check current availability and pricing.',
    },
    {
      question: 'Where is Narenn Crown located?',
      answer: `Narenn Crown is at ${PROPERTY_ADDRESS}, centrally placed for Madhapur offices and colleges.`,
    },
  ],
};

export const CROWN_CANONICAL = `${SITE_URL}${CROWN_PAGE.path}`;
