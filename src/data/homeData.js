import { Cld, cldImg, cldVideo, cldVideoPoster } from '../utils/cloudinary';

export const AMENITIES = [
  {
    title: 'Gourmet Dining',
    description: 'Chef-prepared meals, thrice daily.',
    image: Cld.tile('v1786002164/M_P09905_1_b5nsjf_ndrpm0.jpg'),
  },
  {
    title: 'Gigabit WiFi',
    description: 'Enterprise-grade seamless connectivity.',
    image: Cld.tile('v1786002158/M_P00138_1_1_bhlykz_qqxinr.jpg'),
  },
  {
    title: 'Housekeeping',
    description: 'Daily professional cleaning.',
    image: Cld.tile('v1786002158/M_P00093_1_vaq4bx_bmn9nv.jpg'),
  },
  {
    title: 'Fitness Studio',
    description: 'Fully equipped modern gym on premise.',
    image: Cld.tile('v1786002157/M_P00049_1_cemcnv_e6dncp.jpg'),
  },
  {
    title: '24/7 Power Backup',
    description: 'Uninterrupted electricity, 24/7.',
    image: Cld.tile('v1786002152/ChatGPT_Image_Aug_5_2026_03_59_02_PM_l6bwrb_m4h8di.png'),
  },
  {
    title: 'Rooftop Terrace',
    description: 'City views for evening relaxation.',
    image: Cld.tile('v1786002157/M_P00038_1_reuqwj_ckjppq.jpg'),
  },
  {
    title: 'Two-Wheeler Parking',
    description: 'Secure on-premise two-wheeler parking.',
    image: Cld.tile('v1786002160/M_P00295_2_1_p3nt4i_yfxy25.jpg'),
  },
  {
    title: 'CCTV',
    description: '24/7 surveillance with live monitoring.',
    image: Cld.tile('v1786002164/M_P09901_1_zsv8ir_wiyeej.jpg'),
  },
  {
    title: 'Lift Service',
    description: 'Convenient elevator access across floors.',
    image: Cld.tile('v1786002163/M_P00360_1_zvm9re_vffkqn.jpg'),
  },
  {
    title: 'Carrom Board',
    description: 'Indoor recreation for downtime.',
    image: Cld.tile('v1786002160/M_P00300_1_erklci_st4e9p.jpg'),
  },
  {
    title: 'Table Tennis',
    description: 'Play TT in our common space.',
    image: Cld.tile('v1786002161/M_P00301_1_vbhlsh_k2i5so.jpg'),
  },
  {
    title: 'Community Events',
    description: 'Curated networking and lifestyle events.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=560&h=360&q=70',
  },
];

export const BRAND_LOGO = Cld.logo('v1786002176/narennlogo_opx4st_h4xfzh.png');

const PROPERTY_VIDEOS = {
  elite: 'v1786013199/Narenn_Elite_Website_1_1_jkfugw.mp4',
  crown: 'v1786013198/Narenn_Crown_Website_1_2_jfmrs4.mp4',
  pinnacle: 'v1786013199/Narenn_Pinacle_Website_1_1_dn44ql.mp4',
  supreme: 'v1786013199/Narenn_Supreme_Website_1_1_rxi7go.mp4',
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
    videoUrl: Cld.cardVideo(PROPERTY_VIDEOS.elite),
    image: Cld.cardPoster(PROPERTY_VIDEOS.elite),
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
    videoUrl: Cld.cardVideo(PROPERTY_VIDEOS.crown),
    image: Cld.cardPoster(PROPERTY_VIDEOS.crown),
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
    videoUrl: Cld.cardVideo(PROPERTY_VIDEOS.pinnacle),
    image: Cld.cardPoster(PROPERTY_VIDEOS.pinnacle),
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
    videoUrl: Cld.cardVideo(PROPERTY_VIDEOS.supreme),
    image: Cld.cardPoster(PROPERTY_VIDEOS.supreme),
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
    image: cldVideoPoster(PROPERTY_VIDEOS.elite, { w: 640, h: 800 }),
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
    image: cldVideoPoster(PROPERTY_VIDEOS.crown, { w: 640, h: 800 }),
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
    image: cldVideoPoster(PROPERTY_VIDEOS.pinnacle, { w: 640, h: 800 }),
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
    image: cldVideoPoster(PROPERTY_VIDEOS.supreme, { w: 640, h: 800 }),
    mapUrl: 'https://maps.app.goo.gl/L4ztDQmid2G76yMt6',
    rating: 4.7,
    reviews: 154,
  },
];

export const HOME_HERO_VIDEO = Cld.heroVideo('v1786002186/Website_NArenn_ep62xg_lqcw1l.mp4');
export const HOME_HERO_POSTER = cldVideoPoster('v1786002186/Website_NArenn_ep62xg_lqcw1l.mp4', {
  w: 1280,
  h: 720,
  so: 0,
});

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

// re-export helpers for home components that build URLs inline
export { cldImg, cldVideo };
