import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Wifi, 
  Utensils, 
  Sparkles, 
  Clock, 
  MapPin, 
  Users, 
  Tv, 
  Calendar, 
  ChevronRight, 
  ChevronLeft, 
  Phone, 
  Menu, 
  X, 
  Star, 
  CheckCircle2, 
  Zap,
  Map,
  Compass,
  ArrowRight,
  Send,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Hero video slider slides data
const HERO_SLIDES = [
  {
    id: 1,
    badge: "LUXURY & CONVENIENCE",
    title: "Premium Co-Living",
    subtitle: "For Ambitious People",
    description: "Luxury co-living spaces in Madhapur, Hyderabad — thoughtfully designed for students, young professionals, and modern urban lifestyles.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-interior-design-32943-large.mp4",
  },
  {
    id: 2,
    badge: "WORK-LIFE INTEGRATION",
    title: "Designed Around You",
    subtitle: "Effortless Modern Living",
    description: "From chef-prepared gourmet meals to daily professional housekeeping and high-speed Wi-Fi, experience a curated lifestyle built for success.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-man-working-on-his-laptop-at-home-40097-large.mp4",
  },
  {
    id: 3,
    badge: "GEN-Z RESIDENCES",
    title: "Vibrant Community",
    subtitle: "Connect & Grow Together",
    description: "More than just a PG. Connect with like-minded ambitious peers, network at exclusive community events, and enjoy stunning rooftop lounge spaces.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-happy-friends-talking-and-having-fun-at-home-40101-large.mp4",
  }
];

// Properties/Residences data
const RESIDENCES = [
  {
    name: "Narenn Elite",
    tagline: "Minimalist Elegance",
    description: "Minimal, elegant spaces designed for focused living, privacy, and high-productivity workflows.",
    features: ["Co-ed Living", "Premium Desks", "Private Balconies", "Near Raheja Mindspace"],
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 124
  },
  {
    name: "Narenn's Supreme",
    tagline: "Community Centric",
    description: "A balanced blend of modern comfort, vibrant social settings, and standard premium luxury.",
    features: ["Spacious Lounge", "Interactive Gaming", "Dedicated Dining Room", "Walk to Metro"],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 98
  },
  {
    name: "Narenn Pinnacle",
    tagline: "Upscale Executive",
    description: "Modern upscale living crafted specifically for ambitious corporate leaders and tech professionals.",
    features: ["Rooftop Cafe", "Mini-Gym inside", "Smart-Lock Entries", "Quiet Study Zone"],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 87
  },
  {
    name: "Narenn Grand",
    tagline: "Vibrant Energy",
    description: "Spacious community-driven residences with high-energy environments and network hubs.",
    features: ["Amphitheatre Lounge", "Curated Library", "Weekly Networking", "Silicon Valley Area"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 154
  }
];

// Why Choose Us / Amenities
const AMENITIES = [
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
  }
];

// Room Occupancy Tabs Data
const ROOM_OCCUPANCIES = {
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

// Testimonials data
const TESTIMONIALS = [
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
    role: "UX Designer at Microsoft",
    date: "Jan 12, 2026",
    rating: 5,
    quote: "Hands down the best co-living experience in Madhapur. The hygiene standards are impeccable, and the calm workspace lounge is a blessing for remote professionals.",
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

// Gallery Images
const GALLERY_IMAGES = [
  { url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80", title: "Premium Dining Area" },
  { url: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&q=80", title: "Luxury Suite Bedroom" },
  { url: "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&w=800&q=80", title: "Dynamic Coworking Zone" },
  { url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80", title: "Rooftop Sky Deck" },
  { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80", title: "Modern In-house Fitness Center" },
  { url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80", title: "Bespoke Study Lounges" }
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState("Private Room");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    property: 'Narenn Elite',
    roomType: 'Private Room',
    visitDate: ''
  });

  // Video autoplay cycling
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Listen to window scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setBookingSubmitted(true);
    }, 800);
  };

  const resetBookingForm = () => {
    setBookingSubmitted(false);
    setBookingModalOpen(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      property: 'Narenn Elite',
      roomType: 'Private Room',
      visitDate: ''
    });
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal font-sans flex flex-col selection:bg-brand-gold/20 selection:text-brand-gold-dark">
      
      {/* -------------------- HEADER / NAVBAR -------------------- */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-cream/80 backdrop-blur-md border-b border-brand-cream-dark/50 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-brand-gold bg-brand-cream flex items-center justify-center font-display font-bold text-brand-gold text-lg tracking-wide group-hover:bg-brand-gold group-hover:text-brand-cream transition-all duration-300">
              N
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-widest text-brand-charcoal block leading-none">NARENN</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-gold block mt-1">LIVING</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-display text-sm font-semibold tracking-wide text-brand-charcoal-light">
            <a href="#about" className="hover:text-brand-gold transition-colors duration-200">About Us</a>
            <a href="#properties" className="hover:text-brand-gold transition-colors duration-200">Our Properties</a>
            <a href="#amenities" className="hover:text-brand-gold transition-colors duration-200">Amenities</a>
            <a href="#pricing" className="hover:text-brand-gold transition-colors duration-200">Pricing</a>
            <a href="#dining" className="hover:text-brand-gold transition-colors duration-200">Food</a>
            <a href="#neighborhood" className="hover:text-brand-gold transition-colors duration-200">Location</a>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://wa.me/917075985666" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 border border-brand-cream-dark hover:border-brand-gold/50 rounded-full bg-brand-cream text-brand-charcoal-light hover:text-brand-gold transition-all duration-300"
              title="Chat with Us"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="px-6 py-2.5 rounded-full bg-brand-gold text-brand-cream font-display font-bold text-sm tracking-wide shadow-md hover:bg-brand-gold-dark transition-all duration-300"
            >
              Book a Visit
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden p-2 text-brand-charcoal hover:text-brand-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-cream border-b border-brand-cream-dark/50"
            >
              <div className="px-6 py-6 flex flex-col gap-4 font-display font-semibold tracking-wide">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-gold py-2 border-b border-brand-cream-dark/30">About Us</a>
                <a href="#properties" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-gold py-2 border-b border-brand-cream-dark/30">Our Properties</a>
                <a href="#amenities" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-gold py-2 border-b border-brand-cream-dark/30">Amenities</a>
                <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-gold py-2 border-b border-brand-cream-dark/30">Pricing</a>
                <a href="#dining" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-gold py-2 border-b border-brand-cream-dark/30">Food</a>
                <a href="#neighborhood" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-gold py-2">Location</a>
                <div className="flex gap-4 mt-4 pt-4 border-t border-brand-cream-dark/50">
                  <a 
                    href="https://wa.me/917075985666" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-full border border-brand-gold text-brand-gold font-display font-bold text-center text-sm"
                  >
                    WhatsApp Us
                  </a>
                  <button 
                    onClick={() => { setMobileMenuOpen(false); setBookingModalOpen(true); }}
                    className="flex-1 py-3 rounded-full bg-brand-gold text-brand-cream font-display font-bold text-center text-sm shadow-md"
                  >
                    Book a Visit
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* -------------------- HERO SECTION WITH VIDEO SLIDER -------------------- */}
      <section className="relative h-[100vh] w-full overflow-hidden bg-brand-cream-dark">
        {/* Carousel Transition */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Loop Video */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
            >
              <source src={HERO_SLIDES[activeSlide].videoUrl} type="video/mp4" />
            </video>
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-cream via-brand-charcoal/10 to-brand-charcoal/50" />
            <div className="absolute inset-0 bg-brand-cream-dark/10 backdrop-blur-[1px]" />
          </motion.div>
        </AnimatePresence>

        {/* Floating Controls */}
        <div className="absolute bottom-10 right-6 md:right-12 z-20 flex items-center gap-4">
          <button 
            onClick={handlePrevSlide}
            className="w-12 h-12 rounded-full border border-brand-cream/40 bg-brand-cream/15 text-brand-cream hover:bg-brand-gold hover:border-brand-gold hover:text-brand-cream flex items-center justify-center backdrop-blur-sm transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={handleNextSlide}
            className="w-12 h-12 rounded-full border border-brand-cream/40 bg-brand-cream/15 text-brand-cream hover:bg-brand-gold hover:border-brand-gold hover:text-brand-cream flex items-center justify-center backdrop-blur-sm transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-6 md:left-12 z-20 flex items-center gap-3">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(idx)}
              className="relative h-2 rounded-full transition-all duration-500 overflow-hidden"
              style={{ width: activeSlide === idx ? '64px' : '12px', backgroundColor: activeSlide === idx ? '#9E7A44' : 'rgba(250, 248, 244, 0.4)' }}
            >
              {activeSlide === idx && (
                <motion.div 
                  initial={{ left: '-100%' }}
                  animate={{ left: '0%' }}
                  transition={{ duration: 8, ease: "linear" }}
                  className="absolute top-0 bottom-0 left-0 right-0 bg-brand-gold-dark rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Slide Text & Content */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full pt-20">
            <div className="max-w-3xl">
              {/* Badge */}
              <motion.span 
                key={`badge-${activeSlide}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-cream/90 backdrop-blur-md text-[11px] font-bold tracking-[0.25em] text-brand-gold-dark mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                {HERO_SLIDES[activeSlide].badge}
              </motion.span>

              {/* Title & Subtitle */}
              <motion.h1 
                key={`title-${activeSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl sm:text-6xl md:text-7.5xl font-display font-bold text-brand-cream tracking-tight leading-[1.08] mb-4 drop-shadow-sm"
              >
                {HERO_SLIDES[activeSlide].title} <br />
                <span className="text-brand-gold-light italic font-medium">{HERO_SLIDES[activeSlide].subtitle}</span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                key={`desc-${activeSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-brand-cream/90 text-md sm:text-lg max-w-xl font-normal leading-relaxed mb-8 drop-shadow-sm"
              >
                {HERO_SLIDES[activeSlide].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                key={`cta-${activeSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap items-center gap-4"
              >
                <button 
                  onClick={() => setBookingModalOpen(true)}
                  className="px-8 py-4 rounded-full bg-brand-gold text-brand-cream hover:bg-brand-gold-dark font-display font-bold text-sm tracking-wider shadow-lg transition-all duration-300 flex items-center gap-2 group"
                >
                  Schedule a Visit 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="#properties"
                  className="px-8 py-4 rounded-full border border-brand-cream/50 bg-brand-cream/5 text-brand-cream hover:bg-brand-cream hover:text-brand-charcoal font-display font-bold text-sm tracking-wider backdrop-blur-sm transition-all duration-300"
                >
                  Explore Residences
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- BANNER / KEY HIGHLIGHTS -------------------- */}
      <section className="bg-brand-cream-dark/60 border-y border-brand-cream-dark/80 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { label: "Fully Furnished", detail: "Designer Rooms" },
              { label: "Chef-Curated Meals", detail: "Thrice Daily" },
              { label: "High-Speed Wi-Fi", detail: "Enterprise Grade" },
              { label: "24/7 Smart Security", detail: "Biometric Access" },
              { label: "Daily Housekeeping", detail: "Laundry Included" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-2 border-r border-brand-cream-dark/80 last:border-none">
                <span className="font-display font-bold text-sm text-brand-charcoal leading-none block">{item.label}</span>
                <span className="font-sans text-[11px] uppercase tracking-widest text-brand-gold mt-1.5 font-semibold block">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- JOURNEY / STATISTICS SECTION -------------------- */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase mb-3 block">OUR JOURNEY</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-brand-charcoal tracking-tight leading-[1.15] mb-6">
            Building Trust. <br />
            Delivering <span className="text-brand-gold italic font-medium">Premium Living.</span>
          </h2>
          <p className="text-brand-charcoal-light text-md leading-relaxed mb-8 max-w-2xl">
            From our inception to becoming the premier trusted destination for high-end co-living, our journey is defined by growth, trust, and absolute excellence. Located in the heart of Madhapur, we combine exquisite spatial design, state-of-the-art security, and warm community values.
          </p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="px-6 py-3 rounded-full border border-brand-gold text-brand-gold font-display font-bold text-sm tracking-wide hover:bg-brand-gold hover:text-brand-cream transition-all duration-300"
            >
              Know More About Us
            </button>
            <a 
              href="tel:+917075985666" 
              className="flex items-center gap-2 text-brand-charcoal-light font-display font-bold text-sm hover:text-brand-gold transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              +91 70759 85666
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {[
            { metric: "25+", label: "Years of Legacy", desc: "Trust in real estate" },
            { metric: "500+", label: "Happy Residents", desc: "Thriving community" },
            { metric: "4", label: "Premium Residences", desc: "Top Madhapur locations" },
            { metric: "4.9/5", label: "Google Rating", desc: "Verified stellar reviews" }
          ].map((stat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-brand-cream-dark/40 border border-brand-cream-dark/60 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
              <span className="text-3xl sm:text-4.5xl font-display font-bold text-brand-gold leading-none block">{stat.metric}</span>
              <div className="mt-4">
                <span className="font-display font-bold text-sm text-brand-charcoal block leading-tight">{stat.label}</span>
                <span className="font-sans text-[11px] text-brand-charcoal-light block mt-1">{stat.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------- BANNER: PROPERTIES HEADING -------------------- */}
      <section className="bg-brand-gold/5 py-12 border-y border-brand-gold/15 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-2">OUR RESIDENCES</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal tracking-tight">Four Properties. One Standard of Excellence.</h2>
          <p className="text-brand-charcoal-light text-sm max-w-xl mx-auto mt-2">Strategically located in Madhapur, each property offers a unique sanctuary tailored to your lifestyle requirements.</p>
        </div>
      </section>

      {/* -------------------- RESIDENCES GRID -------------------- */}
      <section id="properties" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESIDENCES.map((res, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -8 }}
              className="rounded-3xl overflow-hidden bg-brand-cream border border-brand-cream-dark/60 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden group">
                <img 
                  src={res.image} 
                  alt={res.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 right-4 bg-brand-cream/90 backdrop-blur-sm px-3 py-1 rounded-full border border-brand-gold/20 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                  <span className="font-display font-bold text-xs text-brand-charcoal">{res.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-brand-gold bg-brand-cream/15 backdrop-blur-sm px-2.5 py-1 rounded-md border border-brand-cream/20 text-brand-cream block">
                    {res.tagline}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-bold text-brand-charcoal mb-2">{res.name}</h3>
                  <p className="text-brand-charcoal-light text-sm leading-relaxed mb-4">{res.description}</p>
                  
                  {/* Custom perks */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {res.features.map((feat, idx) => (
                      <span key={idx} className="text-[10px] font-semibold text-brand-charcoal-light bg-brand-cream-dark/30 px-2 py-0.5 rounded-full border border-brand-cream-dark/50">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, property: res.name }));
                    setBookingModalOpen(true);
                  }}
                  className="w-full py-3 rounded-full border border-brand-cream-dark hover:border-brand-gold hover:bg-brand-gold/5 text-brand-charcoal font-display font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Inquire Now
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* -------------------- WHY CHOOSE US (AMENITIES) -------------------- */}
      <section id="amenities" className="py-24 bg-brand-cream-dark/20 border-y border-brand-cream-dark/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">WHY CHOOSE US</span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-brand-charcoal tracking-tight leading-tight">
              Designed Around Your <br />
              <span className="text-brand-gold italic font-medium">Everyday Comfort.</span>
            </h2>
            <p className="text-brand-charcoal-light text-sm mt-4">
              Curated luxury co-living amenities designed to automate your daily routines so you can focus on building your legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AMENITIES.map((am, index) => {
              const IconComp = am.icon;
              return (
                <div 
                  key={index} 
                  className="p-8 rounded-3xl bg-brand-cream border border-brand-cream-dark/50 shadow-sm hover:shadow-md transition-shadow duration-300 flex gap-6"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-brand-charcoal mb-2">{am.title}</h3>
                    <p className="text-brand-charcoal-light text-sm leading-relaxed">{am.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------- CHOOSE YOUR SPACE (INTERACTIVE CALCULATOR) -------------------- */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">ROOM OPTIONS</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-brand-charcoal tracking-tight leading-tight">
            Find Your <span className="text-brand-gold italic font-medium">Perfect Space.</span>
          </h2>
          <p className="text-brand-charcoal-light text-sm mt-4">
            Designed for privacy, comfort, productivity, and modern flexible budgets.
          </p>
        </div>

        {/* Dynamic selector block */}
        <div className="rounded-3xl border border-brand-cream-dark/80 bg-brand-cream p-6 md:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Controls list (Col 4) */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            <span className="font-display text-[11px] font-bold uppercase tracking-widest text-brand-gold mb-2 block">SELECT OCCUPANCY:</span>
            {Object.keys(ROOM_OCCUPANCIES).map((roomKey) => (
              <button
                key={roomKey}
                onClick={() => setSelectedRoom(roomKey)}
                className={`w-full text-left p-4.5 rounded-2xl font-display font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-between border ${
                  selectedRoom === roomKey 
                    ? 'bg-brand-gold text-brand-cream border-brand-gold shadow-md' 
                    : 'bg-brand-cream-dark/20 text-brand-charcoal border-brand-cream-dark/40 hover:bg-brand-cream-dark/45'
                }`}
              >
                <span>{roomKey}</span>
                <span className={`text-[11px] font-sans px-2.5 py-0.5 rounded-full ${
                  selectedRoom === roomKey 
                    ? 'bg-brand-cream/20 text-brand-cream' 
                    : 'bg-brand-cream-dark/40 text-brand-charcoal-light'
                }`}>
                  {ROOM_OCCUPANCIES[roomKey].price}/mo
                </span>
              </button>
            ))}
          </div>

          {/* Details screen (Col 8) */}
          <div className="lg:col-span-8 bg-brand-cream-dark/15 border border-brand-cream-dark/30 rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[420px]">
            
            {/* Left part: details */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold block mb-1">
                  {ROOM_OCCUPANCIES[selectedRoom].note}
                </span>
                <h3 className="text-2xl font-display font-bold text-brand-charcoal mb-3">{selectedRoom}</h3>
                <p className="text-brand-charcoal-light text-sm leading-relaxed mb-6">
                  {ROOM_OCCUPANCIES[selectedRoom].description}
                </p>

                <div className="space-y-2.5">
                  {ROOM_OCCUPANCIES[selectedRoom].perks.map((perk, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-sm text-brand-charcoal-light">
                      <CheckCircle2 className="w-4.5 h-4.5 text-brand-gold shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & trigger */}
              <div className="mt-8 pt-6 border-t border-brand-cream-dark/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-brand-charcoal-light font-semibold uppercase tracking-widest block leading-none mb-1">STARTING FROM</span>
                  <span className="text-3xl font-display font-extrabold text-brand-charcoal leading-none block">{ROOM_OCCUPANCIES[selectedRoom].price}<span className="text-xs font-semibold text-brand-charcoal-light"> / month</span></span>
                </div>
                <button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, roomType: selectedRoom }));
                    setBookingModalOpen(true);
                  }}
                  className="px-6 py-3.5 rounded-full bg-brand-charcoal hover:bg-brand-gold text-brand-cream font-display font-bold text-xs tracking-wider transition-colors duration-300"
                >
                  ENQUIRE NOW
                </button>
              </div>
            </div>

            {/* Right part: photo */}
            <div className="h-full min-h-[250px] md:min-h-0 rounded-2xl overflow-hidden border border-brand-cream-dark/40 shadow-inner relative group">
              <img 
                src={ROOM_OCCUPANCIES[selectedRoom].image} 
                alt={selectedRoom}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 to-transparent" />
            </div>

          </div>
        </div>
      </section>

      {/* -------------------- FOOD & DINING SECTION -------------------- */}
      <section id="dining" className="py-24 bg-brand-cream-dark/20 border-y border-brand-cream-dark/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">NARENN DINING</span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-brand-charcoal tracking-tight leading-[1.12]">
              Fresh Meals. <br />
              Healthy living starts <br />
              with <span className="text-brand-gold italic font-medium">good food.</span>
            </h2>
            <p className="text-brand-charcoal-light text-sm leading-relaxed">
              We understand that healthy and hygienic food is critical. Enjoy a diverse, nutritious, and chef-prepared menu served hot thrice daily. From local Hyderabadi specials to balanced continental items, dining at Narenn is a culinary delight.
            </p>
            
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-display font-bold text-sm text-brand-charcoal block">Chef-Prepared Hygienic Cooking</span>
                  <span className="text-brand-charcoal-light text-xs">Meals cooked in a fully commercial automated kitchen by professional staff.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-display font-bold text-sm text-brand-charcoal block">Diverse Nutrition & Thrice-Daily Service</span>
                  <span className="text-brand-charcoal-light text-xs">Thoroughly designed cyclical menu catering to balanced protein, carb, and fiber ratios.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-display font-bold text-sm text-brand-charcoal block">Premium Dining Infrastructure</span>
                  <span className="text-brand-charcoal-light text-xs">Exquisitely styled central dining rooms featuring high-end sanitization protocols.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-12 gap-4">
            <div className="col-span-8 rounded-3xl overflow-hidden border border-brand-cream-dark/60 h-80 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" 
                alt="Chef preparing meals"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-4 rounded-3xl overflow-hidden border border-brand-cream-dark/60 h-80 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80" 
                alt="Nutritious food spread"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-4 rounded-3xl overflow-hidden border border-brand-cream-dark/60 h-64 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" 
                alt="Tasty breakfast options"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-8 rounded-3xl overflow-hidden border border-brand-cream-dark/60 h-64 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80" 
                alt="Co-living dining hall vibe"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      {/* -------------------- GLIMPSE OF ELEGANCE (GALLERY) -------------------- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">GALLERY Showcase</span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-brand-charcoal tracking-tight">A Glimpse of Elegance</h2>
          </div>
          <button 
            onClick={() => setBookingModalOpen(true)}
            className="text-brand-gold font-display font-bold text-sm tracking-wider hover:text-brand-gold-dark flex items-center gap-1.5 transition-colors mt-4 md:mt-0"
          >
            <span>VIEW FULL PROPERTY TOUR</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className="group rounded-3xl overflow-hidden border border-brand-cream-dark/50 relative h-72 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-brand-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-display font-bold text-lg text-brand-cream block">{img.title}</span>
                <span className="font-sans text-[11px] uppercase tracking-widest text-brand-gold-light mt-1 block">Narenn Living Premium Co-Living</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------- SAFETY & SECURITY FEATURE SECTION -------------------- */}
      <section className="py-24 bg-brand-gold/5 border-y border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">SAFETY & SECURITY</span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-brand-charcoal tracking-tight leading-tight">
              Every Precaution. <br />
              <span className="text-brand-gold italic font-medium">Every Single Day.</span>
            </h2>
            <p className="text-brand-charcoal-light text-sm leading-relaxed">
              Peace of mind is the ultimate luxury. Our multi-layered, state-of-the-art security protocols ensure that you can focus entirely on your professional goals and comfort, while we handle your complete safety.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                { title: "Biometric Entry", desc: "Secured facial recognition or high-precision fingerprint scan checks at gates." },
                { title: "24/7 HD CCTV Monitoring", desc: "Comprehensive HD recording coverage of all common zones, lobbies, and parameters." },
                { title: "On-site Resident Warden", desc: "Professional, responsive managers available 24/7 for support and crisis control." },
                { title: "Strict Visitor Controls", desc: "Double OTP verification log checks for all visitor registrations via our custom app." }
              ].map((sec, idx) => (
                <div key={idx} className="p-5 bg-brand-cream border border-brand-cream-dark/60 rounded-2xl shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold mb-3">
                    {idx + 1}
                  </div>
                  <h4 className="font-display font-bold text-sm text-brand-charcoal mb-1">{sec.title}</h4>
                  <p className="text-brand-charcoal-light text-xs leading-relaxed">{sec.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-brand-cream-dark/60 shadow-lg max-h-[500px] relative group">
            <img 
              src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80" 
              alt="Premium secure entryway"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-brand-cream/90 backdrop-blur-md border border-brand-gold/20 flex items-center gap-4 shadow-md">
              <Shield className="w-10 h-10 text-brand-gold shrink-0" />
              <div>
                <span className="font-display font-bold text-sm text-brand-charcoal block">Secured by Narenn-Shield</span>
                <span className="text-brand-charcoal-light text-xs block mt-0.5">Automated biometric logging and gate guard operations in full sync.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* -------------------- TESTIMONIALS -------------------- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">VERIFIED REVIEWS</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-brand-charcoal tracking-tight">
            Residents Who Chose <span className="text-brand-gold italic font-medium">Narenn</span>
          </h2>
          <p className="text-brand-charcoal-light text-sm mt-4">
            Real co-living experiences shared by working professionals and students living in Madhapur.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((test, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl bg-brand-cream border border-brand-cream-dark/60 shadow-sm flex flex-col justify-between relative hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <div className="flex gap-1 text-brand-gold mb-6">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-brand-charcoal-light text-sm leading-relaxed italic mb-8">
                  "{test.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-brand-cream-dark/40">
                <img 
                  src={test.avatar} 
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border border-brand-gold/30"
                />
                <div>
                  <span className="font-display font-bold text-sm text-brand-charcoal block leading-none mb-1.5">{test.name}</span>
                  <span className="font-sans text-[10px] text-brand-charcoal-light block leading-none">{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------- NEIGHBORHOOD & LOCATION HUBS -------------------- */}
      <section id="neighborhood" className="py-24 bg-brand-cream-dark/20 border-y border-brand-cream-dark/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">LOCATION BENEFITS</span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-brand-charcoal tracking-tight leading-tight">
              In the Heart of <br />
              <span className="text-brand-gold italic font-medium">Madhapur.</span>
            </h2>
            <p className="text-brand-charcoal-light text-sm leading-relaxed">
              Location is the ultimate amenity. Our properties place you minutes away from major Hitech IT Parks, premium multi-cuisine dining, and active luxury lifestyle/entertainment hubs.
            </p>

            <div className="space-y-4 pt-2">
              {[
                { title: "Major IT Hubs", dist: "5 mins to Raheja Mindspace & Hitech City", desc: "Reduce commute fatigue to Salesforce, Deloitte, Amazon, and other top IT headquarters." },
                { title: "Metro Connectivity", dist: "Walking distance to Madhapur Metro Station", desc: "Seamless and green transit routes straight to main Hyderabad city lines." },
                { title: "Lifestyle Hubs", dist: "Close to Jubilee Hills cafes & Inorbit Mall", desc: "Enjoy weekends at top breweries, upscale lounges, and fashion shopping arenas." }
              ].map((loc, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-sm text-brand-charcoal block">{loc.title}</span>
                    <span className="font-sans text-[11px] text-brand-gold font-bold block mt-0.5">{loc.dist}</span>
                    <span className="text-brand-charcoal-light text-xs mt-1 block leading-relaxed">{loc.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-brand-cream border border-brand-cream-dark/60 rounded-3xl p-8 shadow-md relative min-h-[400px] flex flex-col justify-between overflow-hidden">
            {/* Styled background map details to look futuristic and Gen-Z */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#222" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            {/* Map Simulator */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold block mb-1">LOCALITY MAP SYSTEM</span>
              <h3 className="text-2xl font-display font-bold text-brand-charcoal">VIP Hills, Road 21</h3>
              <span className="text-brand-charcoal-light text-xs block">Silicon Valley, Madhapur, Hyderabad, Telangana</span>
            </div>

            {/* Simulating Map Markers */}
            <div className="my-8 relative h-48 bg-brand-cream-dark/30 border border-brand-cream-dark/40 rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="absolute w-2.5 h-2.5 bg-brand-gold rounded-full animate-ping" style={{ top: '35%', left: '40%' }} />
              <div className="absolute w-4 h-4 bg-brand-gold border-2 border-brand-cream rounded-full shadow-md" style={{ top: '33%', left: '39%' }} />
              <span className="absolute bg-brand-charcoal text-brand-cream text-[10px] font-bold px-2 py-0.5 rounded shadow-sm" style={{ top: '22%', left: '35%' }}>
                Narenn Elite
              </span>

              <div className="absolute w-3 h-3 bg-brand-burgundy border-2 border-brand-cream rounded-full" style={{ top: '65%', left: '68%' }} />
              <span className="absolute bg-brand-cream border border-brand-cream-dark text-brand-charcoal-light text-[9px] px-2 py-0.5 rounded" style={{ top: '55%', left: '60%' }}>
                Madhapur Metro
              </span>

              <div className="absolute w-3 h-3 bg-brand-charcoal border-2 border-brand-cream rounded-full" style={{ top: '15%', left: '20%' }} />
              <span className="absolute bg-brand-cream border border-brand-cream-dark text-brand-charcoal-light text-[9px] px-2 py-0.5 rounded" style={{ top: '8%', left: '15%' }}>
                Mindspace IT Park
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-brand-cream-dark/40 z-10">
              <span className="text-xs text-brand-charcoal-light">Close to major food joints like Jubilee Hills Cafes, Inorbit Mall, and metro.</span>
              <a 
                href="https://maps.google.com/?q=Narenn+Elite,+Road+21,+VIP+Hills,+Silicon+Valley,+Madhapur"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-brand-cream font-display font-bold text-xs tracking-wider transition-colors shrink-0 shadow-md flex items-center gap-1.5"
              >
                <Map className="w-4 h-4" />
                View on Google Maps
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* -------------------- BOTTOM FINAL CTA BANNER -------------------- */}
      <section className="py-28 text-center bg-brand-cream relative z-10">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">EXPERIENCE THE STANDARD</span>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-brand-charcoal tracking-tight leading-none">
            Upgrade to <br />
            <span className="text-brand-gold italic font-medium">Premium Living Today.</span>
          </h2>
          <p className="text-brand-charcoal-light text-md max-w-xl mx-auto leading-relaxed">
            Spaces are filling up fast for the upcoming semester/quarter. Schedule your personal residency tour at Narenn Living today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-brand-cream font-display font-bold text-sm tracking-wider shadow-lg transition-colors flex items-center justify-center gap-2 group"
            >
              Schedule a Visit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://wa.me/917075985666" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-brand-cream-dark hover:border-brand-gold hover:bg-brand-gold/5 text-brand-charcoal font-display font-bold text-sm tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-brand-gold" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* -------------------- FOOTER -------------------- */}
      <footer className="bg-brand-cream border-t border-brand-cream-dark/80 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-brand-gold bg-brand-cream flex items-center justify-center font-display font-bold text-brand-gold text-md">
                N
              </div>
              <div>
                <span className="font-display font-bold text-md tracking-wider text-brand-charcoal block leading-none">NARENN</span>
                <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-brand-gold block mt-0.5">LIVING</span>
              </div>
            </a>
            <p className="text-brand-charcoal-light text-xs leading-relaxed max-w-sm">
              Premium co-living and hospitality spaces meticulously designed for the modern urban lifestyle. Elevating daily routines through curated amenities, delicious food, and security in Madhapur, Hyderabad.
            </p>
          </div>

          {/* Links 1 */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-gold block mb-2">PROPERTIES</span>
            <ul className="space-y-2 text-xs text-brand-charcoal-light">
              <li><a href="#properties" className="hover:text-brand-gold transition-colors">Narenn Elite</a></li>
              <li><a href="#properties" className="hover:text-brand-gold transition-colors">Narenn Crown</a></li>
              <li><a href="#properties" className="hover:text-brand-gold transition-colors">Narenn Pinnacle</a></li>
              <li><a href="#properties" className="hover:text-brand-gold transition-colors">Narenn Supreme</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-gold block mb-2">COMPANY</span>
            <ul className="space-y-2 text-xs text-brand-charcoal-light">
              <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition-colors">The Narenn Legacy</a></li>
              <li><a href="#amenities" className="hover:text-brand-gold transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-gold block mb-2">CONTACT</span>
            <ul className="space-y-2 text-xs text-brand-charcoal-light">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-gold" />
                <a href="tel:+917075985666" className="hover:text-brand-gold transition-colors">+91 70759 85666</a>
              </li>
              <li>
                <a href="mailto:info@narennliving.com" className="hover:text-brand-gold transition-colors">info@narennliving.com</a>
              </li>
              <li className="leading-relaxed">
                Narenn Elite, Road 21, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500084
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-brand-cream-dark/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-brand-charcoal-light">
          <span>&copy; {new Date().getFullYear()} Narenn Group. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="https://wa.me/917075985666" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">WhatsApp</a>
            <span>&bull;</span>
            <span>Designed with elegance for Gen-Z</span>
          </div>
        </div>
      </footer>

      {/* -------------------- BOOK A VISIT MODAL -------------------- */}
      <AnimatePresence>
        {bookingModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetBookingForm}
              className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-brand-cream border border-brand-cream-dark shadow-2xl rounded-3xl p-6 md:p-8 max-w-lg w-full relative z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={resetBookingForm}
                className="absolute top-4 right-4 p-2 text-brand-charcoal hover:text-brand-gold transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {!bookingSubmitted ? (
                <div>
                  <div className="mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold block mb-1">SCHEDULE TOUR</span>
                    <h3 className="text-2xl font-display font-bold text-brand-charcoal">Book a Live Visit</h3>
                    <p className="text-brand-charcoal-light text-xs mt-1">Select a property and choose a convenient time to tour our co-living residences.</p>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="block font-display font-semibold text-xs text-brand-charcoal-light mb-1.5">FULL NAME</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-xl border border-brand-cream-dark bg-brand-cream-dark/10 focus:border-brand-gold focus:ring-0 text-sm outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-display font-semibold text-xs text-brand-charcoal-light mb-1.5">PHONE NUMBER</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          required 
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your phone number"
                          className="w-full px-4 py-3 rounded-xl border border-brand-cream-dark bg-brand-cream-dark/10 focus:border-brand-gold focus:ring-0 text-sm outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-display font-semibold text-xs text-brand-charcoal-light mb-1.5">EMAIL ADDRESS</label>
                        <input 
                          type="email" 
                          name="email" 
                          required 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your email address"
                          className="w-full px-4 py-3 rounded-xl border border-brand-cream-dark bg-brand-cream-dark/10 focus:border-brand-gold focus:ring-0 text-sm outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-display font-semibold text-xs text-brand-charcoal-light mb-1.5">SELECT PROPERTY</label>
                        <select 
                          name="property"
                          value={formData.property}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-brand-cream-dark bg-brand-cream-dark/10 focus:border-brand-gold focus:ring-0 text-sm outline-none transition-colors appearance-none"
                        >
                          <option value="Narenn Elite">Narenn Elite</option>
                          <option value="Narenn's Supreme">Narenn's Supreme</option>
                          <option value="Narenn Pinnacle">Narenn Pinnacle</option>
                          <option value="Narenn Grand">Narenn Grand</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-display font-semibold text-xs text-brand-charcoal-light mb-1.5">OCCUPANCY PREFERENCE</label>
                        <select 
                          name="roomType"
                          value={formData.roomType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-brand-cream-dark bg-brand-cream-dark/10 focus:border-brand-gold focus:ring-0 text-sm outline-none transition-colors appearance-none"
                        >
                          <option value="Private Room">Private Room (Single)</option>
                          <option value="2 Sharing">2 Sharing (Double)</option>
                          <option value="3 Sharing">3 Sharing (Triple)</option>
                          <option value="4 Sharing">4 Sharing (Quad)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-display font-semibold text-xs text-brand-charcoal-light mb-1.5">DATE OF VISIT</label>
                      <input 
                        type="date" 
                        name="visitDate" 
                        required 
                        value={formData.visitDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-brand-cream-dark bg-brand-cream-dark/10 focus:border-brand-gold focus:ring-0 text-sm outline-none transition-colors"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 rounded-xl bg-brand-gold text-brand-cream font-display font-bold text-sm tracking-wider shadow-md hover:bg-brand-gold-dark transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                    >
                      <Send className="w-4 h-4" />
                      Submit Visit Request
                    </button>
                  </form>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-brand-gold/10 border-2 border-brand-gold rounded-full flex items-center justify-center text-brand-gold mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-charcoal">Booking Request Sent!</h3>
                  <p className="text-brand-charcoal-light text-sm max-w-xs mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-brand-charcoal">{formData.name}</span>. Our tour manager will contact you shortly at <span className="font-semibold text-brand-charcoal">{formData.phone}</span> to confirm your slot for <span className="font-semibold text-brand-charcoal">{formData.visitDate}</span>.
                  </p>
                  <button 
                    onClick={resetBookingForm}
                    className="px-6 py-2.5 rounded-full bg-brand-charcoal hover:bg-brand-gold text-brand-cream font-display font-bold text-xs tracking-wider transition-colors mt-4"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
