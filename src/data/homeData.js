import {
  Shield,
  Utensils,
  Sparkles,
  Clock,
  Users,
  Zap,
  Wifi,
  PlugZap,
} from 'lucide-react';

export const BRAND_LOGO =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784012843/narennlogo_opx4st.png';

export const HERO_SLIDES = [
  {
    id: 1,
    property: "Narenn Elite",
    badge: "NARENN ELITE",
    title: "Narenn Elite",
    subtitle: "Minimalist Elegance",
    livingType: "Co-Living",
    description: "Premium co-living crafted for focus, privacy, and high-productivity living in the heart of Madhapur.",
    videoUrl: "https://res.cloudinary.com/dmaeijlc/video/upload/v1784010621/01_NARENN_PINNACLE_ttyhib.mp4",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    property: "Narenn's Crown",
    badge: "NARENN'S CROWN",
    title: "Narenn's Crown",
    subtitle: "Refined Comfort",
    livingType: "For Girls",
    description: "A signature safe space curated exclusively for girls - elegant residences with warm community spaces and everyday luxury.",
    videoUrl: "https://res.cloudinary.com/dmaeijlc/video/upload/v1784010621/01_NARENN_PINNACLE_ttyhib.mp4",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    property: "Narenn Pinnacle",
    badge: "NARENN PINNACLE",
    title: "Narenn Pinnacle",
    subtitle: "Upscale Executive",
    livingType: "Co-Living",
    description: "Modern upscale co-living designed for ambitious professionals who want comfort without compromise.",
    videoUrl: "https://res.cloudinary.com/dmaeijlc/video/upload/v1784010621/01_NARENN_PINNACLE_ttyhib.mp4",
    image: "https://res.cloudinary.com/dmaeijlc/video/upload/so_1,w_400,h_250,c_fill,q_auto,f_jpg/v1784010621/01_NARENN_PINNACLE_ttyhib.jpg",
  },
  {
    id: 4,
    property: "Narenn's Supreme",
    badge: "NARENN'S SUPREME",
    title: "Narenn's Supreme",
    subtitle: "Vibrant Living",
    livingType: "Co-Living",
    description: "Spacious co-living residences with high-energy lounges, networking hubs, and Gen-Z energy.",
    videoUrl: "https://res.cloudinary.com/dmaeijlc/video/upload/v1784010621/01_NARENN_PINNACLE_ttyhib.mp4",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80",
  }
];

export const RESIDENCES = [
  {
    name: "Narenn Elite",
    tagline: "Minimalist Elegance",
    livingType: "Co-Living",
    description: "Premium co-living designed for focused living, privacy, and high-productivity workflows.",
    features: ["Co-Living", "Premium Desks", "Private Balconies", "Near Raheja Mindspace"],
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 124
  },
  {
    name: "Narenn's Crown",
    tagline: "Refined Comfort",
    livingType: "For Girls",
    description: "A signature safe space curated exclusively for girls - modern comfort with warm social settings.",
    features: ["For Girls", "Spacious Lounge", "Dedicated Dining Room", "Walk to Metro"],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 98
  },
  {
    name: "Narenn Pinnacle",
    tagline: "Upscale Executive",
    livingType: "Co-Living",
    description: "Modern upscale co-living crafted for ambitious corporate leaders and tech professionals.",
    features: ["Co-Living", "Rooftop Cafe", "Mini-Gym inside", "Quiet Study Zone"],
    image: "https://res.cloudinary.com/dmaeijlc/video/upload/so_1,w_800,h_500,c_fill,q_auto,f_jpg/v1784010621/01_NARENN_PINNACLE_ttyhib.jpg",
    rating: 4.9,
    reviews: 87
  },
  {
    name: "Narenn's Supreme",
    tagline: "Vibrant Living",
    livingType: "Co-Living",
    description: "Spacious co-living with high-energy environments, network hubs, and community living.",
    features: ["Co-Living", "Curated Library", "Weekly Networking", "Silicon Valley Area"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 154
  }
];

export const AMENITIES = [
  {
    title: "Premium Furnished Rooms",
    description: "Plush orthopaedic mattresses, bespoke workstations, expansive custom wardrobes, and ambient designer lighting.",
    icon: Sparkles,
  },
  {
    title: "Chef-Prepared Meals",
    description: "Delectable, nutritious, and hygienic meals prepared by master chefs, served hot thrice daily in standard dining.",
    icon: Utensils,
  },
  {
    title: "Daily Housekeeping",
    description: "Professional daily housekeeping, room sanitization, and seamless in-house laundry management.",
    icon: Clock,
  },
  {
    title: "Fitness & Wellness",
    description: "State-of-the-art in-house gym setup, curated wellness sessions, yoga zones, and stress-buster recreation areas.",
    icon: Zap,
  },
  {
    title: "Community Spaces",
    description: "Breathtaking sky decks, private movie lounges, collaborative co-working lobbies, and networking spaces.",
    icon: Users,
  },
  {
    title: "24/7 Security Shield",
    description: "Smart biometric entry, comprehensive high-definition CCTV coverage, round-the-clock wardens, and visitor validation.",
    icon: Shield,
  },
  {
    title: "High-Speed Wi-Fi",
    description: "Enterprise-grade fiber connectivity across rooms and common areas for uninterrupted work, streaming, and video calls.",
    icon: Wifi,
  },
  {
    title: "Power Backup",
    description: "Fully managed backup power so lights, cooling, and Wi-Fi stay online even during outages — zero downtime living.",
    icon: PlugZap,
  }
];

export const ROOM_OCCUPANCIES = {
  "Private Room": {
    price: "₹36,000",
    note: "AC & Maintenance Included",
    description: "Designed for individuals who value complete privacy, focus, and quiet personal reflection. The ultimate sanctuary for high-achievers.",
    perks: [
      "Dedicated spacious king/queen bedroom",
      "Full executive workstation setup",
      "In-room smart LED TV & mini-fridge",
      "Private attached luxury washroom",
      "Individual climate control options",
      "High-speed fiber-to-the-room connection"
    ],
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"
  },
  "2 Sharing": {
    price: "₹21,500",
    note: "AC variant / Non-AC at ₹20,000",
    description: "Balanced living with personal space and friendly companionship. Perfect for friends or classmates who want a structured social vibe.",
    perks: [
      "Twin beds with customized privacy separators",
      "Independent individual study desks",
      "Dual-wardrobe storage setup",
      "Attached spacious modern bathroom",
      "Shared Smart TV and seating area",
      "Biweekly dedicated linen change"
    ],
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"
  },
  "3 Sharing": {
    price: "₹17,200",
    note: "AC variant / Non-AC at ₹16,000",
    description: "Comfortable shared living designed for collaboration, cost efficiency, and vibrant camaraderie without compromising on utilities.",
    perks: [
      "Three custom-built beds with storage drawers",
      "Individual study compartments",
      "Triple-door modern modular wardrobe",
      "Spacious clean attached bathroom",
      "High capacity climate cooling setup",
      "Curated standard roommate matching"
    ],
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
  },
  "4 Sharing": {
    price: "₹14,500",
    note: "AC variant / Non-AC at ₹13,500",
    description: "Maximize your networking and savings. Highly popular amongst college students seeking standard luxury on a budget.",
    perks: [
      "Bespoke capsule-style bunk bedding",
      "Dedicated study tables and chairs",
      "Secure keycard individual lockers",
      "Clean luxury shared washroom facilities",
      "Central air conditioning system",
      "All-inclusive utilities bundle"
    ],
    image: "https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&w=800&q=80"
  }
};

export const TESTIMONIALS = [
  {
    name: "Rahul Reddy",
    role: "Software Engineer at Salesforce",
    date: "May 22, 2026",
    rating: 5,
    quote: "The rooms are clean, spacious, and extremely well-maintained. The gourmet food quality and professional on-site management team make Narenn Living feel exactly like a premium home.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Ananya Sharma",
    role: "UX Designer at Microsoft · Narenn's Crown",
    date: "Jan 12, 2026",
    rating: 5,
    quote: "Narenn's Crown is thoughtfully run and feels genuinely safe. As a residence for girls, the privacy and community balance is exactly what I needed in Madhapur.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Siddharth Kumar",
    role: "Data Analyst at Deloitte",
    date: "April 02, 2025",
    rating: 5,
    quote: "What stood out immediately was the premium comfort and hospitality. Fast Wi-Fi, zero power backup failures, and a very structured and welcoming environment.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Priya Verma",
    role: "Chartered Accountant",
    date: "May 13, 2025",
    rating: 5,
    quote: "Warm atmosphere, chef-curated food menu, and zero maintenance stress. Narenn Living offers a perfect equilibrium of active privacy and vibrant community interaction.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    title: "Premium Dining Area",
    alt: "Homely dining space at Narenn Living co-living in Madhapur",
  },
  {
    url: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Suite Bedroom",
    alt: "Fully furnished AC room with bed, wardrobe and study desk at Narenn Living Madhapur",
  },
  {
    url: "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&w=800&q=80",
    title: "Dynamic Coworking Zone",
    alt: "Work-ready common space at Narenn Living co-living in Hyderabad",
  },
  {
    url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
    title: "Rooftop Sky Deck",
    alt: "Residents at a terrace community event at Narenn Living co-living in Hyderabad",
  },
  {
    url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    title: "Modern In-house Fitness Center",
    alt: "In-house fitness area at Narenn Living Madhapur",
  },
  {
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    title: "Bespoke Study Lounges",
    alt: "Study lounge for students and professionals at Narenn Living Madhapur",
  },
];
