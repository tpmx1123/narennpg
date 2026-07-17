import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_LOGO } from '../../data/homeData';
import { NAV_PROPERTIES, NAV_ROOMS } from '../../data/sitePages';

const NAV_LINKS = [
  { to: '/amenities/', label: 'Amenities' },
  { to: '/food/', label: 'Food' },
  { to: '/locations/madhapur/', label: 'Locations' },
  { to: '/events/', label: 'Events' },
];

const PROPERTY_ITEMS = NAV_PROPERTIES.filter((p) => p.slug !== 'all');
const ROOM_ITEMS = NAV_ROOMS.filter((r) => r.slug !== 'all');

const menuMotion = {
  initial: { opacity: 0, height: 0, y: -12 },
  animate: {
    opacity: 1,
    height: 'auto',
    y: 0,
    transition: {
      height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      opacity: { duration: 0.35, ease: 'easeOut' },
      y: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
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
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};
const chevronSpring = { type: 'spring', stiffness: 280, damping: 22 };

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

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [roomsOpen, setRoomsOpen] = useState(false);
  const [layerOpen, setLayerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const roomsTimer = useRef(null);
  const layerTimer = useRef(null);

  const clearTimer = (ref) => {
    if (ref.current) clearTimeout(ref.current);
  };

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

  const overHero = isHome && !isScrolled;
  const menuExpanded = layerOpen || roomsOpen || mobileOpen;

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 transition-[background,border-color,box-shadow] duration-500 ease-out"
      style={{
        WebkitBackdropFilter: overHero || menuExpanded ? 'blur(18px)' : 'blur(14px)',
        backdropFilter: overHero || menuExpanded ? 'blur(18px)' : 'blur(14px)',
        background: overHero
          ? menuExpanded
            ? 'rgba(12, 12, 12, 0.28)'
            : 'linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 60%, rgba(255,255,255,0) 100%)'
          : menuExpanded
            ? 'rgba(255, 255, 255, 0.55)'
            : 'rgba(255, 255, 255, 0.45)',
        borderBottom: overHero
          ? menuExpanded
            ? '1px solid rgba(255,255,255,0.12)'
            : '1px solid transparent'
          : '1px solid rgba(255,255,255,0.35)',
        boxShadow: menuExpanded && !overHero ? '0 8px 30px -18px rgba(34,34,34,0.2)' : 'none',
      }}
    >
      <nav className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 py-3.5">
        <motion.div className="flex items-center gap-6 xl:gap-8">
          <Link to="/" className="flex items-center gap-2.5 shrink-0 ml-3 lg:ml-6" onClick={closeAll}>
            <img src={BRAND_LOGO} alt="Narenn Living" className="h-11 sm:h-12 w-auto object-contain drop-shadow-sm" />
          </Link>

          <motion.div className="hidden lg:flex items-center gap-5 xl:gap-7 ml-auto">
            <NavLink to="/about-us/" overHero={overHero} onClick={closeAll}>
              About Us
            </NavLink>

            {/* Properties dropdown */}
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

            {/* Rooms dropdown */}
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

            <Link
              to="/contact-us/"
              onClick={closeAll}
              className="inline-flex items-center justify-center px-4 py-2 rounded-[10px] bg-brand-burgundy text-white font-display font-bold text-xs tracking-wide whitespace-nowrap hover:bg-brand-burgundy-dark transition-colors ml-2 xl:ml-4"
            >
              Contact Us
            </Link>
          </motion.div>

          <button
            type="button"
            className={`lg:hidden p-2 ml-auto transition-colors ${overHero ? 'text-brand-cream' : 'text-brand-charcoal'}`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => {
              setMobileOpen((o) => !o);
              setLayerOpen(false);
              setRoomsOpen(false);
            }}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                        <img src={item.image} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                        <img src={item.image} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            {...menuMotion}
            className="lg:hidden overflow-hidden border-t border-white/10 max-h-[calc(100vh-64px)]"
            style={{
              background: overHero ? 'rgba(12,12,12,0.45)' : 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(22px)',
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-72px)]">
              <NavLink to="/about-us/" overHero={overHero} onClick={closeAll} className="py-2">
                About Us
              </NavLink>

              <div>
                <button
                  type="button"
                  onClick={() => setLayerOpen((o) => !o)}
                  className={`w-full flex items-center justify-between font-display font-semibold text-sm py-2 ${overHero ? 'text-brand-cream' : 'text-brand-charcoal'}`}
                >
                  Properties
                  <ChevronDown className={`w-4 h-4 ${layerOpen ? 'rotate-180 text-brand-gold' : ''}`} />
                </button>
                {layerOpen && (
                  <div className="flex flex-col gap-2 pt-2">
                    {NAV_PROPERTIES.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={closeAll}
                        className={`text-sm py-2 border-b ${overHero ? 'border-white/10 text-brand-cream' : 'border-brand-cream-dark/40 text-brand-charcoal'}`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setRoomsOpen((o) => !o)}
                  className={`w-full flex items-center justify-between font-display font-semibold text-sm py-2 ${overHero ? 'text-brand-cream' : 'text-brand-charcoal'}`}
                >
                  Rooms
                  <ChevronDown className={`w-4 h-4 transition-transform ${roomsOpen ? 'rotate-180 text-brand-gold' : ''}`} />
                </button>
                {roomsOpen && (
                  <div className="pl-3 flex flex-col gap-1 pt-1">
                    {NAV_ROOMS.map((item) => (
                      <Link key={item.href} to={item.href} onClick={closeAll} className={`py-2 text-sm ${linkClass(overHero)}`}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {NAV_LINKS.map((link) => (
                <NavLink key={link.to} to={link.to} overHero={overHero} onClick={closeAll} className="py-2">
                  {link.label}
                </NavLink>
              ))}

              <Link
                to="/contact-us/"
                onClick={closeAll}
                className="w-full py-3 rounded-[10px] bg-brand-burgundy text-white font-display font-bold text-xs text-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
