import { SITE_URL } from './sitePages';

export const CONTACT_PAGE = {
  path: '/contact-us/',
  title: 'Contact Narenn Living | Book a PG Visit in Madhapur, Hyderabad',
  description:
    'Book a free visit to Narenn Living co-living in VIP Hills, Madhapur. Call 70759 85666 for AC rooms, meals & WiFi near Hitech City. Enquire about availability today.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  ogImage: `${SITE_URL}/images/book-a-pg-in-madhapur-contact-narenn-living.jpg`,
};

export const CONTACT_IMAGES = {
  hero: {
    src: `${SITE_URL}/images/book-a-pg-in-madhapur-contact-narenn-living.jpg`,
    fallback:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1784114731/image-03-2_ze1iph.webp',
    alt: 'Book a PG in Madhapur - Narenn Living reception and enquiry desk',
    title: 'Contact Narenn Living',
  },
  visit: {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1785931048/M_P00021_1_jrrqj3.jpg',
    fallback:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1785931048/M_P00021_1_jrrqj3.jpg',
    alt: 'Hallway interior during a free site visit at Narenn Living PG in Madhapur',
    title: 'Free site visit',
  },
  map: {
    src: `${SITE_URL}/images/narenn-living-location-map-madhapur-hyderabad.jpg`,
    alt: 'Map of Narenn Living location in VIP Hills, Madhapur, Hyderabad',
    title: 'Narenn Living location map',
  },
};

export const CONTACT_MAPS = [
  {
    name: 'Narenn Elite',
    href: '/properties/narenn-elite/',
    embed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.747655302217!2d78.3866209733195!3d17.45031290099292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91307d159c0b%3A0x3394282ae6894e3b!2sNarenn%20Elite!5e1!3m2!1sen!2sin!4v1784698160831!5m2!1sen!2sin',
  },
  {
    name: 'Narenn Crown',
    href: '/properties/narenn-crown/',
    embed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.750759530206!2d78.3866913733195!3d17.45010570099894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913cdfef04ff%3A0x7e276b137cb5a4ff!2sNARENN%20CROWN!5e1!3m2!1sen!2sin!4v1784698247790!5m2!1sen!2sin',
  },
  {
    name: 'Narenn Pinnacle',
    href: '/properties/narenn-pinnacle/',
    embed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5461.517776966263!2d78.3863690733195!3d17.449563101014633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9176c8e5fe6b%3A0x41740ec5839a2c86!2sNarenn%20Pinnacle!5e1!3m2!1sen!2sin!4v1784698313513!5m2!1sen!2sin',
  },
  {
    name: 'Narenn Supreme',
    href: '/properties/narenn-supreme/',
    embed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.7349189041884!2d78.38644297331955!3d17.451163000968403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91002b249dfd%3A0xb665d4f74aeb262!2sNarenn%20Supreme!5e1!3m2!1sen!2sin!4v1784698218183!5m2!1sen!2sin',
  },
];

export const CONTACT_HERO = {
  eyebrow: 'Get in Touch',
  h1: 'Contact Narenn Living',
  h1Accent: 'Book Your Free Visit in Madhapur',
  lead: 'Ready to find your new home in Hyderabad? The easiest way to book a PG in Madhapur is to get in touch and arrange a free visit.',
};

export const CONTACT_INTRO = [
  'Come see the rooms, meet our team, taste the food and picture yourself here - no obligation, just a warm welcome. Our properties are located in VIP Hills, Madhapur, minutes from Hitech City, Gachibowli and Kondapur, and our team is ready to help you find the perfect room.',
  'Whether you are a student, a fresher or an experienced professional, we will help you choose the right property and sharing type for your budget and lifestyle.',
];

export const CONTACT_REACH = {
  eyebrow: 'Simple Steps',
  h2: 'How to Reach Us',
  h2Accent: 'Reach Us',
  intro: 'Getting in touch is simple. Pick whichever way is easiest for you:',
  methods: [
    {
      icon: 'Phone',
      title: 'Call or WhatsApp',
      body: '70759 85666 - a real person picks up, including evenings and weekends.',
      actions: [
        { type: 'call', label: 'Call' },
        { type: 'whatsapp', label: 'WhatsApp' },
      ],
    },
    {
      icon: 'MapPin',
      title: 'Visit us',
      body: 'VIP Hills, Madhapur, Hyderabad - minutes from Hitech City.',
      actions: [{ type: 'location', label: 'Location' }],
    },
    {
      icon: 'CalendarCheck',
      title: 'Book a free visit',
      body: 'Request a visit through this page and we will confirm a convenient time.',
      actions: [{ type: 'book', label: 'Book Visit' }],
    },
    {
      icon: 'MessageCircle',
      title: 'Ask anything',
      body: 'Availability, pricing, rooms, food or amenities - we answer openly.',
      actions: [{ type: 'whatsapp', label: 'Ask Us' }],
    },
  ],
};

export const CONTACT_VISIT = {
  eyebrow: 'See for Yourself',
  h2: 'Book a Free Visit',
  h2Accent: 'Free Visit',
  body: 'Seeing is believing. A short visit tells you more than any photo or description ever could - the cleanliness of the rooms, the taste of the food, the warmth of the community. We encourage every prospective resident, and their parents, to visit before deciding. Browse our room options first so you know what to look for, then come see them in person.',
  link: { to: '/rooms/', label: 'view room options' },
};

export const CONTACT_SITE_VISIT = {
  eyebrow: 'On the Tour',
  h2: 'What Happens on a Site Visit',
  h2Accent: 'Site Visit',
  bullets: [
    'We show you the exact room you would move into - not a sample room, not a photograph',
    'You eat what the residents are eating that day, from our kitchen',
    'You talk to current residents without our staff standing in the room',
    'You see the kitchen, the terrace, the common areas and the security setup',
    'You get the pricing, the deposit terms, the notice period and the refund policy in writing',
    'You leave. We do not close on the spot, and we do not chase you with pressure calls.',
  ],
};

export const CONTACT_ASK = {
  eyebrow: 'Be Prepared',
  h2: 'What to Ask About',
  h2Accent: 'Ask About',
  body: 'When you contact us, feel free to ask about anything that matters to you - current availability in single, double or triple sharing, the all-inclusive monthly fee, our four home-style meals, WiFi speed, security arrangements or community events. We believe in complete transparency, and our team will answer every question openly.',
  links: [
    { to: '/amenities/', label: 'amenities' },
    { to: '/food/', label: 'food menu' },
  ],
};

export const CONTACT_QUESTIONS = {
  eyebrow: 'No Awkward Silence',
  h2: 'Bring Your Questions - Including the Awkward Ones',
  h2Accent: 'Awkward Ones',
  paragraphs: [
    'Ask us what the deposit deduction policy actually is. Ask what happens if you leave in month two. Ask what the food is like in week seven, not week one. Ask how long the last maintenance request took to close. Ask to speak to a resident who has been here over a year.',
    'A place that flinches at those questions is telling you something. We would rather you ask them now than discover the answers later.',
  ],
};

export const CONTACT_MOVE = {
  eyebrow: 'After You Decide',
  h2: 'Move In With Ease',
  h2Accent: 'With Ease',
  body: 'Once you choose your room, moving in is effortless. Everything is furnished and ready - you simply bring your bags and settle in. Our on-site team helps you get comfortable from the first day, and our community makes sure you feel at home fast.',
  link: { to: '/properties/', label: 'our properties' },
};

export const CONTACT_PHONE = {
  eyebrow: 'Talk to Us',
  h2: 'Reach Us',
  h2Accent: 'Us',
  paragraphs: [
    'Call or WhatsApp 70759 85666 - a real person picks up, including evenings and weekends. Tell us your joining date, your budget, your preferred sharing format and whether you want a student or working-professional plan, and we will come back with what is actually available rather than a brochure.',
    'All four properties are in VIP Hills, Madhapur, Hyderabad - minutes from Hitech City, Mindspace, Kondapur and Durgam Cheruvu, and around twenty minutes from Gachibowli and the Financial District.',
  ],
};

export const CONTACT_OUTSIDE = {
  eyebrow: 'Relocating Soon',
  h2: 'Enquiring from Outside Hyderabad?',
  h2Accent: 'Outside Hyderabad?',
  paragraphs: [
    'If you have not moved yet, you do not need to fly in to decide. Call or WhatsApp 70759 85666 and we will send you a video walkthrough of the actual rooms currently available, the current menu, the pricing and the written agreement terms - before you commit to anything.',
    'We can also hold a room against a confirmed joining date. Most people relocating to Hyderabad lose their first fortnight to hotel bills and panic-viewing while jetlagged. One phone call three weeks out removes the entire problem.',
  ],
};

export const CONTACT_ADDRESS = {
  eyebrow: 'VIP Hills',
  h2: 'Our Address',
  h2Accent: 'Address',
  body: 'All four Narenn Living properties - Narenn Elite, Narenn Crown, Narenn Pinnacle and Narenn Supreme - are located in VIP Hills, Madhapur, Hyderabad. We are 5 to 10 minutes from Hitech City, Mindspace, Raheja and Cyber Towers, a similar distance from Kondapur and Durgam Cheruvu, and around 20 minutes from Gachibowli, Nanakramguda and the Financial District. Inorbit Mall and Sarath City Capital Mall are a short ride away.',
  link: { to: '/locations/madhapur/', label: 'our location' },
  streetAddress: 'VIP Hills, Road 21, Silicon Valley, Madhapur',
  locality: 'Hyderabad',
  region: 'Telangana',
  postalCode: '500084',
};

export const CONTACT_URGENCY = {
  eyebrow: 'Act Early',
  h2: 'Do Not Wait - Rooms Fill Fast',
  h2Accent: 'Fill Fast',
  body: 'Our most popular sharing types, especially double and triple rooms, fill quickly at the start of every month. If you have found what you are looking for, the smart move is to visit and reserve your room early. Call 70759 85666 today, and let Narenn Living be your home in Hyderabad.',
};

export const CONTACT_FAQ_HEADING = {
  eyebrow: 'FAQ',
  h2: 'Frequently Asked Questions',
  h2Accent: 'Questions',
};

export const CONTACT_FAQS = [
  {
    question: 'How do I book a room at Narenn Living?',
    answer:
      'Simply call or WhatsApp 70759 85666, or book a free visit through our contact page. Our team will help you choose a room and complete the booking.',
  },
  {
    question: 'Can I visit before booking?',
    answer:
      'Yes, we strongly encourage a free visit so you can tour the rooms, meet the team and taste the food before you decide.',
  },
  {
    question: 'Where exactly is Narenn Living located?',
    answer:
      'Our four properties are in VIP Hills, Madhapur, Hyderabad - just minutes from Hitech City, Gachibowli and Kondapur.',
  },
];
