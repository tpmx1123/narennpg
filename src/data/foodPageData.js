import { SITE_URL } from './sitePages';

export const FOOD_PAGE = {
  path: '/food/',
  title: 'Food at Narenn Living | Premium Co-Living Dining',
  description:
    'Experience home-style dining with four fresh meals a day at Narenn Living. Premium co-living with in-house kitchens.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage: `${SITE_URL}/images/food-at-narenn-living-hero.jpg`,
};

export const FOOD_HERO = {
  eyebrow: 'In-House Kitchen',
  h1: 'Home-Style Food at Narenn Living',
  h1Accent: 'Four Fresh Meals a Day',
  paragraphs: [
    'Ask anyone who has lived in a PG what makes or breaks the experience, and the answer is almost always the food. At Narenn Living, we treat PG food in Madhapur as a priority, not an afterthought. Our in-house kitchen serves four freshly cooked meals every day - breakfast, lunch, evening snacks and dinner - prepared in a clean, hygienic kitchen by cooks who take pride in their work. The result is food that tastes like home, so you never have to depend on takeout or skip a meal because you are too busy.',
    'For students and professionals new to Hyderabad, reliable, tasty, nutritious food is one of the biggest reasons they choose - and stay at - Narenn Living.',
  ],
  image:
    'https://res.cloudinary.com/dmaeijlc/image/upload/v1785926966/M_P09882_1_zeo7ft.jpg',
  alt: 'Professional chefs preparing fresh meals in the Narenn Living in-house kitchen',
};

export const FOOD_MEALS = [
  {
    key: 'breakfast',
    title: 'Breakfast',
    description:
      'Freshly prepared South and North Indian classics to kickstart your morning productivity.',
  },
  {
    key: 'lunch',
    title: 'Lunch',
    description:
      'A balanced, wholesome midday meal featuring variety and traditional flavours.',
  },
  {
    key: 'snacks',
    title: 'Snacks',
    description:
      'Perfect evening accompaniments with tea or coffee to bridge the gap till dinner.',
  },
  {
    key: 'dinner',
    title: 'Dinner',
    description:
      "Lighter yet soul-satisfying meals that help you wind down into a restful night's sleep.",
  },
];

export const FOOD_HOME = {
  h2: 'A Menu That Feels Like Home',
  paragraphs: [
    'We believe that food is more than just calories; it is comfort. That is why our menu is curated to evoke the nostalgia of your mother’s kitchen. No heavy commercial spices, just honest cooking.',
    'Every ingredient is sourced fresh, every dish is tasted by our quality manager, and every recipe is refined based on resident feedback. We do not just feed you; we nourish you.',
  ],
  image:
    'https://res.cloudinary.com/dmaeijlc/image/upload/v1785926297/M_P09866_1_anlo2u.jpg',
  alt: 'Home-style Indian food served on a warm dining table at Narenn Living',
};


export const FOOD_HYGIENE = {
  h2: 'Hygiene You Can Trust',
  intro:
    'Safety and cleanliness are our non-negotiables. From raw ingredient storage to final meal plating, we follow strict protocols. Our kitchens are sanitised repeatedly through the day.',
  points: [
    'Daily deep cleaning of all kitchen surfaces',
    'Filtered RO water used for all cooking and washing',
    'Trained culinary staff and an open-kitchen mindset',
  ],
  image:
    'https://res.cloudinary.com/dmaeijlc/image/upload/v1785928264/M_P09857_1_ppkmpv.jpg',
  alt: 'Clean kitchen counter and hygiene-focused food prep area at Narenn Living',
};

export const FOOD_SAVINGS = {
  h2: 'Food That Saves You Money',
  intro:
    "Ordering in every day isn't just unhealthy; it's a financial drain. With Narenn Living, premium meals are included in your rent, saving you significant monthly costs.",
  tagline: 'Smart Living, Smarter Savings',
  savings: 'Meals Included',
  label: 'No Extra Food Budget',
  note: '*Four home-style meals a day are part of your stay — no daily ordering needed',
  image:
    'https://res.cloudinary.com/dmaeijlc/image/upload/v1784631361/wmremove-transformed_7_uubsmx.png',
  alt: 'Home-style Indian meal with dal, rice, curry and roti at Narenn Living',
};

export const FOOD_FUEL = {  
  h2: 'Fuel for Work and Study',
  paragraphs: [
    'Whether you are prepping for exams or handling late-night client calls, our nutrition-focused meals keep your brain sharp. We avoid overly heavy oils and excessive sugars.',
    'Strategic protein-rich breakfasts and brain-boosting snacks help you avoid the mid-afternoon slump that bad PG food often causes.',
  ],
  image:
    'https://res.cloudinary.com/dmaeijlc/image/upload/v1784199448/image-27_y9go5p.webp',
  alt: 'Healthy breakfast with work laptop at Narenn Living co-living dining area',
};

export const FOOD_EDITORIAL = {
  h2: 'Why We Refuse to Outsource the Kitchen',
  quote:
    'Many PGs outsource their catering to save costs. We do not. We manage our own kitchen staff, source our own produce, and control every variable. Why? Because you cannot outsource care.',
  attribution: 'The Management Team, Narenn Living',
  image:
    'https://res.cloudinary.com/dmaeijlc/image/upload/v1785926966/M_P09882_1_zeo7ft.jpg',
  alt: 'Narenn Living in-house kitchen team preparing fresh meals together',
};

export const FOOD_VARIETY = {
  h2: 'Variety, Not the Same Week on Repeat',
  intro:
    'We cycle our menus monthly so residents are not trapped in the same repetitive loop. Our variety includes:',
  items: [
    'Weekly special biryanis and pulaos',
    'Continental breakfast options once a week',
    'Traditional festive feasts for holidays',
    'Desserts and fresh fruits included',
  ],
  image:
    'https://res.cloudinary.com/dmaeijlc/image/upload/v1785929076/M_P09865_1_u709q3.jpg',
  alt: 'Traditional Indian thali showing food variety at Narenn Living',
};

export const FOOD_INSPECTION = {
  h2: 'Hygiene You Can Walk In and Inspect',
  body:
    'Transparency is at our core. We invite every prospective resident and their parents to walk into our kitchens and inspect our storage areas, refrigerators and prep zones. We have nothing to hide because we cook for you like we cook for ourselves.',
};

export const FOOD_SPECIAL = {
  h2: 'Special Requirements and Off-Cycle Timings',
  body:
    'We understand the life of IT shift workers. If your schedule does not align with standard meal times, talk to us. We provide packed meals and off-cycle heating facilities so you do not miss a nutritious dinner.',
};

export const FOOD_FAQS = [
  {
    question: 'Is food included in the monthly rent?',
    answer:
      'Yes, all four fresh meals a day are part of the standard co-living package at Narenn Living. There are no hidden daily meal charges.',
  },
  {
    question: 'Can I request a specific diet?',
    answer:
      'We maintain a diverse menu and can accommodate basic medical dietary requirements, such as non-spicy or low-salt meals, if shared in advance.',
  },
  {
    question: 'What are the meal timings?',
    answer:
      'Breakfast usually runs from 7:30–9:30 AM, lunch from 12:30–2:30 PM, snacks in the evening, and dinner from 8:00–10:00 PM. Timings may vary slightly by property.',
  },
];
