import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_LOGO } from '../../data/homeData';
import { NAV_PROPERTIES, NAV_ROOMS } from '../../data/sitePages';
import IconSlideButton from '../ui/IconSlideButton';
import { Cld } from '../../utils/cloudinary';

const NAV_LINKS = [
  { to: '/amenities/', label: 'Amenities' },
  { to: '/food/', label: 'Food' },
  { to: '/locations/madhapur/', label: 'Locations' },
  { to: '/events/', label: 'Events' },
];

const EASE = [0.22, 1, 0.36, 1];

const withNavImage = (item) => ({
  ...item,
  image: Cld.navCard(item.image),
});

const PROPERTY_ITEMS = NAV_PROPERTIES.filter((p) => p.slug !== 'all').map(withNavImage);
const ROOM_ITEMS = NAV_ROOMS.filter((r) => r.slug !== 'all').map(withNavImage);
const MOBILE_PROPERTIES = NAV_PROPERTIES.map(withNavImage);
const MOBILE_ROOMS = NAV_ROOMS.map(withNavImage);

const NAV_PRELOAD_URLS = [
  BRAND_LOGO,
  ...PROPERTY_ITEMS.map((i) => i.image),
  ...ROOM_ITEMS.map((i) => i.image),
];

function preloadNavAssets() {
  NAV_PRELOAD_URLS.forEach((src) => {
    if (!src) return;
    const img = new Image();
    img.decoding = 'async';
    img.src = src;
  });
}

const menuMotion = {
  initial: { opacity: 0, height: 0, y: -12 },
  animate: {
    opacity: 1,
    height: 'auto',
    y: 0,
    transition: {
      height: { duration: 0.45, ease: EASE },
      opacity: { duration: 0.35, ease: 'easeOut' },
      y: { duration: 0.4, ease: EASE },
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    y: -8,
    transition: {
      height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.25, ease: 'easeIn' },
      y: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
  },
};

const cardStagger = { animate: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } } };
const cardItem = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};
const chevronSpring = { type: 'spring', stiffness: 280, damping: 22 };

const mobilePanel = {
  initial: { x: '100%' },
  animate: { x: 0, transition: { duration: 0.45, ease: EASE } },
  exit: { x: '100%', transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
};

const mobileBackdrop = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const mobileList = {
  animate: { transition: { staggerChildren: 0.05, delayChildren: 0.12 } },
};

const mobileItem = {
  initial: { opacity: 0, x: 28 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
};

function NavLink({ to, children, overHero, onClick, className = '' }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`font-display text-sm font-semibold tracking-wide whitespace-nowrap shrink-0 transition-colors duration-300 ${linkClass(overHero)} ${className}`}
    >
      {children}
    </Link>
  );
}

function linkClass(overHero) {
  return overHero
    ? 'text-brand-cream/90 hover:text-brand-gold-light'
    : 'text-brand-charcoal hover:text-brand-gold';
}

function AnimatedMenuIcon({ open, overHero }) {
  const color = overHero || open ? '#F7F3E9' : '#1A1A1A';

  return (
    <motion.span
      className="relative flex h-6 w-6 items-center justify-center"
      animate={open ? 'open' : 'closed'}
      initial={false}
    >
      <motion.span
        variants={{
          closed: { rotate: 0, y: -7, backgroundColor: color },
          open: { rotate: 45, y: 0, backgroundColor: color },
        }}
        transition={{ duration: 0.28, ease: EASE }}
        className="absolute left-0.5 h-[2px] w-5 rounded-full"
      />
      <motion.span
        variants={{
          closed: { opacity: 1, scaleX: 1, backgroundColor: color },
          open: { opacity: 0, scaleX: 0, backgroundColor: color },
        }}
        transition={{ duration: 0.2, ease: EASE }}
        className="absolute left-0.5 h-[2px] w-5 rounded-full origin-center"
      />
      <motion.span
        variants={{
          closed: { rotate: 0, y: 7, backgroundColor: color },
          open: { rotate: -45, y: 0, backgroundColor: color },
        }}
        transition={{ duration: 0.28, ease: EASE }}
        className="absolute left-0.5 h-[2px] w-5 rounded-full"
      />
    </motion.span>
  );
}

function MobileAccordion({ title, open, onToggle, children }) {
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3.5 font-display text-base font-semibold text-brand-cream"
        aria-expanded={open}
      >
        {title}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={chevronSpring} className="inline-flex">
          <ChevronDown className={`w-4 h-4 ${open ? 'text-brand-gold' : 'text-brand-cream/60'}`} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key={`${title}-panel`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pb-3 flex flex-col gap-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [roomsOpen, setRoomsOpen] = useState(false);
  const [layerOpen, setLayerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePropsOpen, setMobilePropsOpen] = useState(false);
  const [mobileRoomsOpen, setMobileRoomsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const roomsTimer = useRef(null);
  const layerTimer = useRef(null);

  const clearTimer = (ref) => {
    if (ref.current) clearTimeout(ref.current);
  };

  // Warm logo + Properties/Rooms mega-menu images as soon as the site loads
  useEffect(() => {
    preloadNavAssets();
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setLayerOpen(false);
        setRoomsOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    closeAll();
  }, [location.pathname]);

  useEffect(
    () => () => {
      clearTimer(roomsTimer);
      clearTimer(layerTimer);
    },
    []
  );

  const closeAll = () => {
    setLayerOpen(false);
    setRoomsOpen(false);
    setMobileOpen(false);
    setMobilePropsOpen(false);
    setMobileRoomsOpen(false);
  };

  const openRooms = () => {
    clearTimer(roomsTimer);
    clearTimer(layerTimer);
    setLayerOpen(false);
    setRoomsOpen(true);
  };
  const closeRooms = () => {
    clearTimer(roomsTimer);
    roomsTimer.current = setTimeout(() => setRoomsOpen(false), 120);
  };

  const openLayer = () => {
    clearTimer(layerTimer);
    clearTimer(roomsTimer);
    setRoomsOpen(false);
    setLayerOpen(true);
  };
  const closeLayer = () => {
    clearTimer(layerTimer);
    layerTimer.current = setTimeout(() => setLayerOpen(false), 120);
  };

  const toggleMobile = () => {
    setMobileOpen((o) => {
      if (o) {
        setMobilePropsOpen(false);
        setMobileRoomsOpen(false);
      }
      return !o;
    });
    setLayerOpen(false);
    setRoomsOpen(false);
  };

  const overHero = isHome && !isScrolled && !mobileOpen;
  const menuExpanded = layerOpen || roomsOpen;

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 transition-[background,border-color,box-shadow] duration-500 ease-out"
      style={{
        WebkitBackdropFilter: mobileOpen ? 'none' : overHero || menuExpanded ? 'blur(18px)' : 'blur(14px)',
        backdropFilter: mobileOpen ? 'none' : overHero || menuExpanded ? 'blur(18px)' : 'blur(14px)',
        background: mobileOpen
          ? 'transparent'
          : overHero
            ? menuExpanded
              ? 'rgba(12, 12, 12, 0.28)'
              : 'linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 60%, rgba(255,255,255,0) 100%)'
            : menuExpanded
              ? 'rgba(255, 255, 255, 0.92)'
              : 'rgba(255, 255, 255, 0.96)',
        borderBottom: mobileOpen
          ? '1px solid transparent'
          : overHero
            ? menuExpanded
              ? '1px solid rgba(255,255,255,0.12)'
              : '1px solid transparent'
            : '1px solid rgba(15, 61, 46, 0.08)',
        boxShadow: !overHero && !mobileOpen ? '0 8px 30px -18px rgba(34,34,34,0.18)' : 'none',
      }}
    >
      <nav className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 py-3.5 relative z-[55]">
        <motion.div className="flex items-center gap-6 xl:gap-8">
          <Link
            to="/"
            className={`flex items-center gap-2.5 shrink-0 ml-3 lg:ml-6 transition-opacity ${mobileOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            onClick={closeAll}
          >
            <img
              src={BRAND_LOGO}
              alt="Narenn Living"
              width={180}
              height={48}
              decoding="async"
              fetchPriority="high"
              className="h-11 sm:h-12 w-auto object-contain drop-shadow-sm"
            />
          </Link>

          <motion.div className="hidden lg:flex items-center gap-5 xl:gap-7 ml-auto">
            <NavLink to="/about-us/" overHero={overHero} onClick={closeAll}>
              About Us
            </NavLink>

            <div className="relative" onMouseEnter={openLayer} onMouseLeave={closeLayer}>
              <button
                type="button"
                className={`flex items-center gap-1.5 font-display text-sm font-semibold tracking-wide whitespace-nowrap shrink-0 transition-colors ${
                  layerOpen ? 'text-brand-gold' : linkClass(overHero)
                }`}
              >
                Properties
                <motion.span animate={{ rotate: layerOpen ? 180 : 0 }} transition={chevronSpring} className="inline-flex">
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </button>
            </div>

            <div className="relative" onMouseEnter={openRooms} onMouseLeave={closeRooms}>
              <button
                type="button"
                className={`flex items-center gap-1.5 font-display text-sm font-semibold tracking-wide whitespace-nowrap shrink-0 transition-colors ${
                  roomsOpen ? 'text-brand-gold' : linkClass(overHero)
                }`}
              >
                Rooms
                <motion.span animate={{ rotate: roomsOpen ? 180 : 0 }} transition={chevronSpring} className="inline-flex">
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </button>
            </div>

            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} overHero={overHero} onClick={closeAll}>
                {link.label}
              </NavLink>
            ))}

            <IconSlideButton to="/contact-us/" onClick={closeAll} compact className="ml-2 xl:ml-4">
              Contact Us
            </IconSlideButton>
          </motion.div>

          <button
            type="button"
            className={`lg:hidden relative z-[70] p-2 ml-auto rounded-lg transition-colors ${
              mobileOpen
                ? 'text-brand-cream'
                : overHero
                  ? 'text-brand-cream'
                  : 'text-brand-charcoal'
            }`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={toggleMobile}
          >
            <AnimatedMenuIcon open={mobileOpen} overHero={overHero || mobileOpen} />
          </button>
        </motion.div>
      </nav>

      {/* Desktop properties layer */}
      <AnimatePresence initial={false}>
        {layerOpen && (
          <motion.div
            key="properties-layer"
            {...menuMotion}
            onMouseEnter={openLayer}
            onMouseLeave={closeLayer}
            className="hidden lg:block overflow-hidden border-t border-white/10"
            style={{
              background: overHero ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.35)',
              backdropFilter: 'blur(22px)',
            }}
          >
            <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 py-5">
              <motion.div className="grid grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-4" variants={cardStagger} initial="initial" animate="animate">
                {PROPERTY_ITEMS.map((item) => (
                  <motion.div key={item.label} variants={cardItem}>
                    <Link
                      to={item.href}
                      onClick={closeAll}
                      className={`group block min-w-0 overflow-hidden border transition-colors rounded-[15px] ${
                        overHero
                          ? 'border-white/15 bg-white/8 hover:border-brand-gold/45'
                          : 'border-brand-cream-dark/50 bg-white/70 hover:border-brand-gold/40'
                      }`}
                    >
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.label}
                          width={400}
                          height={260}
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/55 to-transparent" />
                        <span className="absolute top-3 left-3 text-[9px] uppercase tracking-widest font-bold text-brand-cream bg-black/45 px-2 py-0.5 rounded-full">
                          {item.livingType}
                        </span>
                      </div>
                      <div className="p-3">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className={`font-display font-bold text-sm ${overHero ? 'text-brand-cream' : 'text-brand-charcoal'}`}>
                            {item.label}
                          </h3>
                          <ArrowRight className="w-4 h-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className={`text-xs mt-1 line-clamp-2 ${overHero ? 'text-brand-cream/70' : 'text-brand-charcoal-light'}`}>
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              <div className="mt-3 text-right">
                <Link to="/properties/" onClick={closeAll} className="text-xs font-display font-bold text-brand-gold hover:underline">
                  View all properties →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop rooms layer */}
      <AnimatePresence initial={false}>
        {roomsOpen && (
          <motion.div
            key="rooms-layer"
            {...menuMotion}
            onMouseEnter={openRooms}
            onMouseLeave={closeRooms}
            className="hidden lg:block overflow-hidden border-t border-white/10"
            style={{
              background: overHero ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.35)',
              backdropFilter: 'blur(22px)',
            }}
          >
            <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 py-5">
              <motion.div className="grid grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-4" variants={cardStagger} initial="initial" animate="animate">
                {ROOM_ITEMS.map((item) => (
                  <motion.div key={item.label} variants={cardItem}>
                    <Link
                      to={item.href}
                      onClick={closeAll}
                      className={`group block min-w-0 overflow-hidden border transition-colors rounded-[15px] ${
                        overHero
                          ? 'border-white/15 bg-white/8 hover:border-brand-gold/45'
                          : 'border-brand-cream-dark/50 bg-white/70 hover:border-brand-gold/40'
                      }`}
                    >
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.label}
                          width={400}
                          height={260}
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/55 to-transparent" />
                        <span className="absolute top-3 left-3 text-[9px] uppercase tracking-widest font-bold text-brand-cream bg-black/45 px-2 py-0.5 rounded-full">
                          {item.sharingType}
                        </span>
                      </div>
                      <div className="p-3">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className={`font-display font-bold text-sm ${overHero ? 'text-brand-cream' : 'text-brand-charcoal'}`}>
                            {item.label}
                          </h3>
                          <ArrowRight className="w-4 h-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className={`text-[10px] font-semibold uppercase tracking-wide mt-0.5 ${overHero ? 'text-brand-gold/90' : 'text-brand-gold'}`}>
                          {item.tagline}
                        </p>
                        <p className={`text-xs mt-1 line-clamp-2 ${overHero ? 'text-brand-cream/70' : 'text-brand-charcoal-light'}`}>
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              <div className="mt-3 text-right">
                <Link to="/rooms/" onClick={closeAll} className="text-xs font-display font-bold text-brand-gold hover:underline">
                  View all rooms →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile full-screen drawer (from right) */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 z-[60]" key="mobile-drawer">
            <motion.button
              type="button"
              aria-label="Close menu backdrop"
              {...mobileBackdrop}
              onClick={closeAll}
              className="absolute inset-0 bg-brand-charcoal/55 backdrop-blur-sm"
            />

            <motion.aside
              {...mobilePanel}
              className="absolute inset-y-0 right-0 w-full max-w-full sm:max-w-md bg-brand-charcoal text-brand-cream shadow-2xl flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between px-6 pt-[max(1rem,env(safe-area-inset-top))] pb-4 border-b border-white/10">
                <Link to="/" onClick={closeAll} className="flex items-center">
                  <img
                    src={BRAND_LOGO}
                    alt="Narenn Living"
                    width={160}
                    height={40}
                    decoding="async"
                    className="h-10 w-auto object-contain"
                  />
                </Link>
                <button
                  type="button"
                  onClick={closeAll}
                  aria-label="Close menu"
                  className="p-2 rounded-lg text-brand-cream hover:text-brand-gold transition-colors"
                >
                  <AnimatedMenuIcon open overHero />
                </button>
              </div>

              <motion.nav
                variants={mobileList}
                initial="initial"
                animate="animate"
                className="flex-1 overflow-y-auto px-6 py-4"
              >
                <motion.div variants={mobileItem}>
                  <Link
                    to="/about-us/"
                    onClick={closeAll}
                    className="block py-3.5 border-b border-white/10 font-display text-base font-semibold text-brand-cream hover:text-brand-gold transition-colors"
                  >
                    About Us
                  </Link>
                </motion.div>

                <motion.div variants={mobileItem}>
                  <MobileAccordion
                    title="Properties"
                    open={mobilePropsOpen}
                    onToggle={() => {
                      setMobilePropsOpen((o) => !o);
                      setMobileRoomsOpen(false);
                    }}
                  >
                    {MOBILE_PROPERTIES.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={closeAll}
                        className="block rounded-lg px-3 py-2.5 text-sm text-brand-cream/80 hover:bg-white/5 hover:text-brand-gold transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </MobileAccordion>
                </motion.div>

                <motion.div variants={mobileItem}>
                  <MobileAccordion
                    title="Rooms"
                    open={mobileRoomsOpen}
                    onToggle={() => {
                      setMobileRoomsOpen((o) => !o);
                      setMobilePropsOpen(false);
                    }}
                  >
                    {MOBILE_ROOMS.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={closeAll}
                        className="block rounded-lg px-3 py-2.5 text-sm text-brand-cream/80 hover:bg-white/5 hover:text-brand-gold transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </MobileAccordion>
                </motion.div>

                {NAV_LINKS.map((link) => (
                  <motion.div key={link.to} variants={mobileItem}>
                    <Link
                      to={link.to}
                      onClick={closeAll}
                      className="block py-3.5 border-b border-white/10 font-display text-base font-semibold text-brand-cream hover:text-brand-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div variants={mobileItem} className="pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
                  <IconSlideButton to="/contact-us/" onClick={closeAll} className="w-full">
                    Contact Us
                  </IconSlideButton>
                </motion.div>
              </motion.nav>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
