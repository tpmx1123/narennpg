import { SITE_URL } from './sitePages';

export const FOUNDER_PAGE = {
  path: '/narenn-founder/',
  title: "Founder's Note | Narenn Living - Building for Every Boy and Girl in Hyderabad",
  description:
    'Read a personal letter from Narendranath Chaganla about the vision behind Narenn Living: a commitment to premium co-living standards, safety, and dignity for students and professionals in Hyderabad.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage: `${SITE_URL}/images/narendranath-chaganla-founder-narenn-living.jpg`,
};

export const FOUNDER_INTRO = {
  eyebrow: 'A Letter from the Founder',
  h1: "Founder's Note - Building Narenn for Every Boy and Girl Who Calls",
  h1Accent: 'Hyderabad',
  h1Suffix: 'Home.',
  paragraphs: [
    'Throughout my two decades in Indian real estate and hospitality, I have observed a persistent neglect in how students and young professionals are housed. Arriving in a new city like Hyderabad should be the start of an inspiring chapter, yet too often it begins with a compromise on safety, comfort, and basic dignity.',
    'I founded Narenn Living because I believe that your living space is the foundation upon which you build your future. It shouldn\'t just be a place to sleep; it should be a sanctuary that mirrors the care and security of home.',
  ],
  experience: {
    h2: 'Built on Years in Real Estate and Hospitality',
    body: 'Having spent years developing properties and managing hospitality services, I realized that the co-living sector lacked the professional oversight it desperately needed. Narenn Living is the culmination of those years of experience - applying institutional standards to a personal living experience.',
  },
  founder: {
    name: 'Narendranath Chaganla',
    role: 'Founder, Narenn Living',
    image:
      'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002156/image-Picsart-AiImageEnhancer_epd6hh_ql5gr3.png',
    alt: 'Narendranath Chaganla, Founder of Narenn Living',
    title: 'Narendranath Chaganla, Founder',
  },
};

export const FOUNDER_PILLARS = {
  eyebrow: 'The Pillars',
  h2: 'What We Stand For',
  items: [
    {
      key: 'safety',
      icon: 'shield',
      title: 'Safety First',
      description: 'Multi-tier security as a baseline protocol for all.',
    },
    {
      key: 'hospitality',
      icon: 'concierge',
      title: 'Hospitality',
      description: 'Attentive service that anticipates resident needs.',
    },
    {
      key: 'equality',
      icon: 'scale',
      title: 'Equality',
      description: 'Equal quality standards for both boys and girls.',
    },
    {
      key: 'trust',
      icon: 'eye',
      title: 'Trust',
      description: 'Zero hidden costs and absolute transparency.',
    },
    {
      key: 'community',
      icon: 'users',
      title: 'Community',
      description: 'Fostering connections that enrich city life.',
    },
  ],
};

export const FOUNDER_PROMISE = {
  eyebrow: 'The Narenn Promise',
  quote:
    'Whether it is a boy\'s wing or a girl\'s wing, the quality of sleep, the hygiene of the food, and the promptness of service remain',
  quoteAccent: 'non-negotiable.',
};

export const FOUNDER_AUDIENCE = {
  h2: 'Who We Serve',
  intro:
    'We provide specialized, high-standard living quarters tailored to the unique needs of our residents.',
  cards: [
    {
      key: 'boys',
      title: 'For Boys',
      description: 'Disciplined, high-energy environments focusing on focus and growth.',
      cta: 'Explore Spaces',
      href: '/properties/',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC_2qeNeEuzyBC0HC2ZNGAjDstNpT1DtmmHLY0TCoDr-4QYgMmvhpIAbtQBlnTteISFENr7IFUwXzHBfO6Lm9d3RA0uJ9iQHGS_-dCGuIlbHMggqiT7f5sdQXG-a0Qbjkv6fs29D4W9caPnrlp-9SjFxGciIEmp2b2IoXvQSnnDFL0pszG0S7rd2WVJSNYkC03Wo6KoVLIh0HO_d_9iTbBt-jKHLV0g3BPvVBHgFgQwzewpgJLAD_zRGidOgrWwBxmTP44wJ4sObmI',
      alt: 'Boys co-living spaces at Narenn Living in Hyderabad',
    },
    {
      key: 'girls',
      title: 'For Girls',
      description: 'Ultra-secure, comforting, and aesthetic spaces designed for peace of mind.',
      cta: 'Explore Spaces',
      href: '/properties/',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD8x_B9B0fkn9w3SV_3CbBHlilOvJFVb_X3PqoFRbrtOmCO2pSsL8QmT_eundKpujeA5eEAkL2rC2VJT8w4quJoygOShYE3ES7XUamjpzscWKb27dv8i1PHlCTF-MYzSR-KmdRDURnxyqUFATpUpwghjGULNRJGxLznG5Nu1CLa5iB7a0hOgT0drld57oRXbkQiU0V95OCT6vzNGrPNANSAgD9HopFeAd1iG8RZOF5B9RId7x3RsFDk7m88_qYfSrI91v11n40YG1w',
      alt: 'Girls co-living spaces at Narenn Living in Hyderabad',
    },
  ],
};

export const FOUNDER_CLOSING = {
  paragraphs: [
    'Nareen is still young, and were building it the right way - steadily, carefully, with the same values our family has always run properties on. I\'m grateful to everyone who chooses to make Nareen home, even if just for a season of their life. We don\'t take that trust lightly.',
    'Welcome to Nareen. Welcome home.',
  ],
  signature: {
    image:
      'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002154/f51c22a1-fcd7-429f-95dc-dcc512f1285a_x6ybxo_rdu5bg.png',
    alt: 'Narendranath Chaganla signature',
    name: 'Narendranath Chaganla',
    role: 'Founder & CEO, Narenn Living',
    location: 'Hyderabad, India',
  },
};
