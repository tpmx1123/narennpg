import { Img } from '../utils/media';

export const AMENITIES = [
  {
    title: 'Gourmet Dining',
    description: 'Chef-prepared meals, thrice daily.',
    image: Img.tile(
      'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/M_P09905_1_b5nsjf.jpg'
    ),
  },
  {
    title: 'Gigabit WiFi',
    description: 'Enterprise-grade seamless connectivity.',
    image: Img.tile(
      'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/M_P00138_1_1_bhlykz.jpg'
    ),
  },
  {
    title: 'Housekeeping',
    description: 'Daily professional cleaning.',
    image: Img.tile(
      'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/M_P00093_1_vaq4bx.jpg'
    ),
  },
  {
    title: 'Fitness Studio',
    description: 'Fully equipped modern gym on premise.',
    image: Img.tile(
      'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/M_P00049_1_cemcnv.jpg'
    ),
  },
  {
    title: '24/7 Power Backup',
    description: 'Uninterrupted electricity, 24/7.',
    image: Img.tile(
      'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/ChatGPT_Image_Aug_5_2026_03_59_02_PM_l6bwrb.png'
    ),
  },
  {
    title: 'Rooftop Terrace',
    description: 'City views for evening relaxation.',
    image: Img.tile(
      'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/M_P00038_1_reuqwj.jpg'
    ),
  },
  {
    title: 'Two-Wheeler Parking',
    description: 'Secure on-premise two-wheeler parking.',
    image: Img.tile(
      'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/M_P00295_2_1_p3nt4i.jpg'
    ),
  },
  {
    title: 'CCTV',
    description: '24/7 surveillance with live monitoring.',
    image: Img.tile(
      'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/M_P09901_1_zsv8ir.jpg'
    ),
  },
  {
    title: 'Lift Service',
    description: 'Convenient elevator access across floors.',
    image: Img.tile(
      'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/M_P00360_1_zvm9re.jpg'
    ),
  },
  {
    title: 'Carrom Board',
    description: 'Indoor recreation for downtime.',
    image: Img.tile(
      'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/M_P00300_1_erklci.jpg'
    ),
  },
  {
    title: 'Table Tennis',
    description: 'Play TT in our common space.',
    image: Img.tile(
      'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/M_P00301_1_vbhlsh.jpg'
    ),
  },
  {
    title: 'Community Events',
    description: 'Curated networking and lifestyle events.',
    image:
      'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/Screenshot%202026-08-08%20171406.png',
  },
];

export const BRAND_LOGO = Img.logo(
  'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/narennlogo_opx4st.png'
);

const DO_IMG = 'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages';

const PROPERTY_VIDEOS = {
  elite: `${DO_IMG}/Narenn%20Elite%20Website.mp4`,
  crown: `${DO_IMG}/Narenn%20Crown%20Website.mp4`,
  pinnacle: `${DO_IMG}/Narenn%20Pinacle%20Website.mp4`,
  supreme: `${DO_IMG}/Narenn%20Supreme%20Website.mp4`,
};

const PROPERTY_POSTERS = {
  elite: Img.cardStill(`${DO_IMG}/ChatGPT_Image_Aug_5_2026_11_55_51_AM_zhi0ly.png`),
  crown: Img.cardStill(`${DO_IMG}/ChatGPT_Image_Aug_5_2026_11_57_36_AM_xwf4ye.png`),
  pinnacle: Img.cardStill(`${DO_IMG}/ChatGPT_Image_Aug_5_2026_01_05_43_PM_c34gr5.png`),
  supreme: Img.cardStill(`${DO_IMG}/ChatGPT_Image_Aug_5_2026_12_57_13_PM_muwbh3.png`),
};

export const HERO_SLIDES = [
  {
    id: 1,
    property: 'Narenn Elite',
    badge: 'NARENN ELITE',
    title: 'Narenn Elite',
    subtitle: 'Minimalist Elegance',
    livingType: 'Co-Living',
    description:
      'Premium co-living crafted for focus, privacy, and high-productivity living in the heart of Madhapur.',
    videoUrl: PROPERTY_VIDEOS.elite,
    image: PROPERTY_POSTERS.elite,
  },
  {
    id: 2,
    property: "Narenn's Crown",
    badge: "NARENN'S CROWN",
    title: "Narenn's Crown",
    subtitle: 'Refined Comfort',
    livingType: 'For Girls',
    description:
      'A signature safe space curated exclusively for girls - elegant residences with warm community spaces and everyday luxury.',
    videoUrl: PROPERTY_VIDEOS.crown,
    image: PROPERTY_POSTERS.crown,
  },
  {
    id: 3,
    property: 'Narenn Pinnacle',
    badge: 'NARENN PINNACLE',
    title: 'Narenn Pinnacle',
    subtitle: 'Upscale Executive',
    livingType: 'Co-Living',
    description:
      'Modern upscale co-living designed for ambitious professionals who want comfort without compromise.',
    videoUrl: PROPERTY_VIDEOS.pinnacle,
    image: PROPERTY_POSTERS.pinnacle,
  },
  {
    id: 4,
    property: "Narenn's Supreme",
    badge: "NARENN'S SUPREME",
    title: "Narenn's Supreme",
    subtitle: 'Vibrant Living',
    livingType: 'Co-Living',
    description:
      'Spacious co-living residences with high-energy lounges, networking hubs, and Gen-Z energy.',
    videoUrl: PROPERTY_VIDEOS.supreme,
    image: PROPERTY_POSTERS.supreme,
  },
];

export const RESIDENCES = [
  {
    name: 'Narenn Elite',
    tagline: 'Minimalist Elegance',
    livingType: 'Co-Living',
    description:
      'Premium co-living designed for focused living, privacy, and high-productivity workflows.',
    features: ['Co-Living', 'Premium Finish', 'Private Balconies', 'Near Raheja Mindspace'],
    image: PROPERTY_POSTERS.elite,
    mapUrl: 'https://maps.app.goo.gl/DqPwF8JMTihVhMX28',
    rating: 4.9,
    reviews: 124,
  },
  {
    name: "Narenn's Crown",
    tagline: 'Refined Comfort',
    livingType: 'For Girls',
    description:
      'A signature safe space curated exclusively for girls - modern comfort with warm social settings.',
    features: ['For Girls', 'Spacious Lounge', 'Dedicated Dining Room', 'Walk to Metro'],
    image: PROPERTY_POSTERS.crown,
    mapUrl: 'https://maps.app.goo.gl/MBMx1EEn6psPjwUC8',
    rating: 4.8,
    reviews: 98,
  },
  {
    name: 'Narenn Pinnacle',
    tagline: 'Upscale Executive',
    livingType: 'Co-Living',
    description:
      'Modern upscale co-living crafted for ambitious corporate leaders and tech professionals.',
    features: ['Co-Living', 'Rooftop Cafe', 'Mini-Gym inside', 'Quiet Study Zone'],
    image: PROPERTY_POSTERS.pinnacle,
    mapUrl: 'https://maps.app.goo.gl/VcRoEHR2fWrfy3SL7',
    rating: 4.9,
    reviews: 87,
  },
  {
    name: "Narenn's Supreme",
    tagline: 'Vibrant Living',
    livingType: 'Co-Living',
    description:
      'Spacious co-living with high-energy environments, network hubs, and community living.',
    features: ['Co-Living', 'Curated Library', 'Weekly Networking', 'Silicon Valley Area'],
    image: PROPERTY_POSTERS.supreme,
    mapUrl: 'https://maps.app.goo.gl/L4ztDQmid2G76yMt6',
    rating: 4.7,
    reviews: 154,
  },
];

export const HOME_HERO_VIDEO = `${DO_IMG}/Website%20NArenn.mp4`;
export const HOME_HERO_POSTER = Img.wide(
  `${DO_IMG}/ChatGPT-Image-Jun-30-2025-06_48_11-PM-1200x800_kjphte.webp`
);

export const TESTIMONIALS = [
  {
    name: 'Jeevan',
    role: 'Google Review',
    rating: 5,
    quote:
      'I had an excellent experience here. The staff was welcoming, professional, and genuinely focused on customer satisfaction. Honesty, timely service, and high standards stood out — I highly recommend this place for quality and reliability.',
  },
  {
    name: 'Praveen Kumar Reddy Dodda',
    role: 'Google Review · Madhapur',
    rating: 5,
    quote:
      'I’ve been staying in this PG in Madhapur and overall it’s been a really good experience. The place is well-maintained, cleaned daily, and the food is very good compared to most PGs. I’d definitely recommend it for a comfortable, well-managed stay.',
  },
  {
    name: 'Venugopal Reddy Kurapati',
    role: "Google Review · Narenn's Crown",
    rating: 5,
    quote:
      'The Narenn Crown girls PG was amazing in Madhapur — less traffic, good food, parking available, and near Hitech City. My daughter stays here with 24/7 security. I am happy now.',
  },
  {
    name: 'Anu Siddu',
    role: "Google Review · Narenn's Crown",
    rating: 5,
    quote:
      "One of the best and safest PG for women — 24/7 security with CCTV, delicious hygienic food, good ambiance, well-furnished rooms, and a cool balcony view. Housekeeping is excellent, and the terrace garden with gym and carrom is awesome.",
  },
];
