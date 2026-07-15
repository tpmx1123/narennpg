import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESIDENCES, BRAND_LOGO } from '../../data/homeData';

const NAV_LINKS = [
  { href: '#about', label: 'About Us' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#dining', label: 'Food' },
  { href: '#neighborhood', label: 'Location' },
];

const LAYER_ITEMS = RESIDENCES.map((res) => ({
  title: res.name,
  description: res.description,
  image: res.image,
  href: '#properties',
  tagline: res.tagline,
  livingType: res.livingType,
}));

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

const cardStagger = {
  animate: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const cardItem = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const chevronSpring = { type: 'spring', stiffness: 280, damping: 22 };

export default function Navbar({ onBookVisit }) {
  const [layerOpen, setLayerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookMenuOpen, setBookMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const bookCloseTimer = useRef(null);
  const layerCloseTimer = useRef(null);

  const clearMenuTimer = (timerRef) => {
    if (timerRef.current) clearTimeout(timerRef.current);
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
        setBookMenuOpen(false);
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
    return () => {
      clearMenuTimer(bookCloseTimer);
      clearMenuTimer(layerCloseTimer);
    };
  }, []);

  const closeAll = () => {
    setLayerOpen(false);
    setMobileOpen(false);
    setBookMenuOpen(false);
  };

  const openLayerMenu = () => {
    clearMenuTimer(layerCloseTimer);
    clearMenuTimer(bookCloseTimer);
    setBookMenuOpen(false);
    setLayerOpen(true);
  };

  const closeLayerMenu = () => {
    clearMenuTimer(layerCloseTimer);
    layerCloseTimer.current = setTimeout(() => setLayerOpen(false), 120);
  };

  const openBookMenu = () => {
    clearMenuTimer(bookCloseTimer);
    clearMenuTimer(layerCloseTimer);
    setLayerOpen(false);
    setBookMenuOpen(true);
  };

  const closeBookMenu = () => {
    clearMenuTimer(bookCloseTimer);
    bookCloseTimer.current = setTimeout(() => setBookMenuOpen(false), 120);
  };

  const bookProperty = (propertyName) => {
    setBookMenuOpen(false);
    setLayerOpen(false);
    onBookVisit({ property: propertyName });
  };

  // Stay transparent over hero even while the properties menu is open
  const overHero = !isScrolled;
  const menuExpanded = layerOpen || mobileOpen || bookMenuOpen;

  const linkClass = overHero
    ? 'font-display text-sm font-semibold tracking-wide text-brand-cream/90 hover:text-brand-gold-light transition-colors duration-300'
    : 'font-display text-sm font-semibold tracking-wide text-brand-charcoal hover:text-brand-gold transition-colors duration-300';

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
        boxShadow: menuExpanded && !overHero
          ? '0 8px 30px -18px rgba(34,34,34,0.2)'
          : 'none',
      }}
    >
      <nav className="max-w-[1160px] mx-auto px-4 sm:px-5 lg:px-[60px] py-3">
        <div className="flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2.5 shrink-0" onClick={closeAll}>
            <img
              src={BRAND_LOGO}
              alt="Narenn Living"
              className="h-11 sm:h-12 w-auto object-contain drop-shadow-sm"
            />
          </a>
          

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <div className="flex items-center gap-6 lg:gap-8">
              <button
                type="button"
                onMouseEnter={openLayerMenu}
                onMouseLeave={closeLayerMenu}
                className={`flex items-center gap-1.5 font-display text-sm font-semibold tracking-wide transition-colors duration-300 ${
                  layerOpen
                    ? 'text-brand-gold'
                    : overHero
                      ? 'text-brand-cream/90 hover:text-brand-gold-light'
                      : 'text-brand-charcoal hover:text-brand-gold'
                }`}
              >
                Our Properties
                <motion.span
                  animate={{ rotate: layerOpen ? 180 : 0 }}
                  transition={chevronSpring}
                  className="inline-flex "
                >
                  <ChevronDown className="w-4 h-4 " />
                </motion.span>
              </button>

              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setLayerOpen(false)}
                  className={linkClass}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/917075985666"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 transition-colors duration-300 ${
                  overHero
                    ? 'text-brand-cream/85 hover:text-brand-gold-light'
                    : 'text-brand-charcoal-light hover:text-brand-gold'
                }`}
                title="Chat with Us"
              >
                <MessageSquare className="w-5 h-5" />
              </a>

              <div
                className="relative"
                onMouseEnter={openBookMenu}
                onMouseLeave={closeBookMenu}
              >
                <button
                  type="button"
                  onClick={() => {
                    setBookMenuOpen((open) => !open);
                    setLayerOpen(false);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-brand-burgundy text-white font-display font-bold text-sm tracking-wide hover:bg-brand-burgundy-dark transition-colors rounded-[15px]"
                >
                  Book a Visit
                  <motion.span
                    animate={{ rotate: bookMenuOpen ? 180 : 0 }}
                    transition={chevronSpring}
                    className="inline-flex"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {bookMenuOpen && (
                    <motion.div
                      key="book-menu"
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute right-0 top-[calc(100%+10px)] z-50 w-64 overflow-hidden rounded-2xl border border-white/20 shadow-xl"
                      style={{
                        background: overHero ? 'rgba(20,20,20,0.82)' : 'rgba(255,255,255,0.95)',
                        WebkitBackdropFilter: 'blur(18px)',
                        backdropFilter: 'blur(18px)',
                      }}
                    >
                      <div className="px-3.5 py-2.5 border-b border-white/10">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                            overHero ? 'text-brand-gold' : 'text-brand-burgundy'
                          }`}
                        >
                          Choose a property
                        </span>
                      </div>
                      <ul className="py-1.5">
                        {RESIDENCES.map((res) => (
                          <li key={res.name}>
                            <button
                              type="button"
                              onClick={() => bookProperty(res.name)}
                              className={`w-full text-left px-3.5 py-2.5 flex items-center gap-3 transition-colors ${
                                overHero
                                  ? 'hover:bg-white/10 text-brand-cream'
                                  : 'hover:bg-brand-burgundy-pale text-brand-charcoal'
                              }`}
                            >
                              <img
                                src={res.image}
                                alt=""
                                className="w-10 h-10 rounded-lg object-cover shrink-0 border border-white/15"
                              />
                              <span className="min-w-0">
                                <span className="font-display font-bold text-sm block leading-tight">
                                  {res.name}
                                </span>
                                <span
                                  className={`text-[11px] block mt-0.5 ${
                                    res.livingType === 'For Girls'
                                      ? 'text-brand-gold'
                                      : overHero
                                        ? 'text-brand-cream/60'
                                        : 'text-brand-charcoal-light'
                                  }`}
                                >
                                  {res.livingType} · {res.tagline}
                                </span>
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <button
            type="button"
            className={`md:hidden p-2 transition-colors duration-300 ${
              overHero ? 'text-brand-cream' : 'text-brand-charcoal'
            }`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => {
              setMobileOpen((open) => !open);
              setLayerOpen(false);
            }}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Desktop properties layer — transparent glass + smooth open/close */}
      <AnimatePresence initial={false}>
        {layerOpen && (
          <motion.div
            key="nav-layer"
            {...menuMotion}
            onMouseEnter={openLayerMenu}
            onMouseLeave={closeLayerMenu}
            className="hidden md:block overflow-hidden border-t border-white/10"
            style={{
              background: overHero ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.35)',
              WebkitBackdropFilter: 'blur(22px)',
              backdropFilter: 'blur(22px)',
            }}
          >
            <div className="max-w-[1160px] mx-auto px-5 lg:px-[60px] py-5">
              <motion.div
                className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 "
                variants={cardStagger}
                initial="initial"
                animate="animate"
              >
                {LAYER_ITEMS.map((item) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    onClick={closeAll}
                    variants={cardItem}
                    className={`group min-w-0 overflow-hidden border transition-colors duration-300 rounded-[15px] ${
                      overHero
                        ? 'border-white/15 bg-white/8 hover:border-brand-gold/45 hover:bg-white/12'
                        : 'border-brand-cream-dark/50 bg-white/70 hover:border-brand-gold/40'
                    }`}
                    style={{
                      WebkitBackdropFilter: 'blur(12px)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <div className="relative h-36 overflow-hidden ">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/55 to-transparent" />
                      <span className="absolute top-3 left-3 text-[9px] uppercase tracking-widest font-bold text-brand-cream bg-black/45 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/15">
                        {item.livingType}
                      </span>
                      <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-widest font-bold text-brand-cream">
                        {item.tagline}
                      </span>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h3
                          className={`font-display font-bold text-base ${
                            overHero ? 'text-brand-cream' : 'text-brand-charcoal'
                          }`}
                        >
                          {item.title}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-brand-gold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                      <p
                        className={`text-xs leading-relaxed line-clamp-2 ${
                          overHero ? 'text-brand-cream/70' : 'text-brand-charcoal-light'
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile panel */}
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            {...menuMotion}
            className="md:hidden overflow-hidden border-t border-white/10 max-h-[calc(100vh-64px)]"
            style={{
              background: overHero ? 'rgba(12,12,12,0.45)' : 'rgba(255,255,255,0.7)',
              WebkitBackdropFilter: 'blur(22px)',
              backdropFilter: 'blur(22px)',
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-5 overflow-y-auto max-h-[calc(100vh-72px)]">
              <div>
                <button
                  type="button"
                  onClick={() => setLayerOpen((open) => !open)}
                  className={`w-full flex items-center justify-between font-display font-semibold text-sm py-2 ${
                    overHero ? 'text-brand-cream' : 'text-brand-charcoal'
                  }`}
                >
                  Our Properties
                  <motion.span
                    animate={{ rotate: layerOpen ? 180 : 0 }}
                    transition={chevronSpring}
                    className="inline-flex"
                  >
                    <ChevronDown className={`w-4 h-4 ${layerOpen ? 'text-brand-gold' : ''}`} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {layerOpen && (
                    <motion.div {...menuMotion} className="overflow-hidden">
                      <div className="flex flex-col gap-2 pt-2 pb-1">
                        {LAYER_ITEMS.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            onClick={closeAll}
                            className={`flex gap-3 border p-2 ${
                              overHero
                                ? 'border-white/15 bg-white/10'
                                : 'border-brand-cream-dark/60 bg-brand-cream/80'
                            }`}
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-20 h-16 object-cover shrink-0"
                            />
                            <div className="min-w-0">
                              <span
                                className={`font-display font-bold text-sm block ${
                                  overHero ? 'text-brand-cream' : 'text-brand-charcoal'
                                }`}
                              >
                                {item.title}
                              </span>
                              <span className="text-[10px] font-bold uppercase tracking-wide text-brand-gold block mt-0.5">
                                {item.livingType}
                              </span>
                              <span
                                className={`text-[11px] line-clamp-2 ${
                                  overHero ? 'text-brand-cream/65' : 'text-brand-charcoal-light'
                                }`}
                              >
                                {item.description}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                className={`flex flex-col gap-1 border-t pt-3 ${
                  overHero ? 'border-white/15' : 'border-brand-cream-dark/50'
                }`}
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeAll}
                    className={`py-2.5 font-display font-semibold text-sm hover:text-brand-gold ${
                      overHero ? 'text-brand-cream' : 'text-brand-charcoal'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    closeAll();
                    onBookVisit();
                  }}
                  className="w-full py-3.5 bg-brand-burgundy text-white font-display font-bold text-sm tracking-wide flex items-center justify-center gap-2"
                >
                  Book a Visit
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://wa.me/917075985666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 border border-brand-gold text-brand-gold font-display font-bold text-sm text-center"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
