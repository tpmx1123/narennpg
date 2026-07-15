import { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { HERO_SLIDES, RESIDENCES } from '../../data/homeData';

const ease = [0.22, 1, 0.36, 1];
const CARD_WIDTH = 360;
const CARD_HEIGHT = 480;
const CARD_STEP = CARD_WIDTH + 20;

const PROPERTY_CARDS = RESIDENCES.map((res) => {
  const slide = HERO_SLIDES.find((s) => s.property === res.name);
  return {
    ...res,
    videoUrl: slide?.videoUrl ?? '',
  };
});

const MARQUEE_CARDS = [...PROPERTY_CARDS, ...PROPERTY_CARDS];

function ResidenceCard({ res }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        y: hovered ? -8 : 0,
        scale: hovered ? 1.02 : 1,
      }}
      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      className="group relative shrink-0 overflow-hidden rounded-[28px] border border-white/15"
      style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
    >
      {/* Full-card video */}
      <motion.video
        key={res.videoUrl}
        src={res.videoUrl}
        poster={res.image}
        muted
        loop
        playsInline
        autoPlay
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.7, ease }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/15 to-transparent pointer-events-none" />

      <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2 z-10">
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide backdrop-blur-md ${
            res.livingType === 'For Girls'
              ? 'border-brand-burgundy/30 bg-brand-burgundy text-white'
              : 'border-white/25 bg-white/20 text-white'
          }`}
        >
          {res.livingType}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-black/35 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
          <Star className="h-3 w-3 fill-brand-gold text-brand-gold" />
          {res.rating}
        </span>
      </div>

      {/* Text on video — bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
        <motion.h3
          animate={{ y: hovered ? -2 : 0 }}
          transition={{ duration: 0.35, ease }}
          className="font-display text-xl sm:text-2xl font-bold leading-snug tracking-tight text-white"
        >
          {res.name}
        </motion.h3>
        <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-gold">
          {res.tagline}
        </p>
        <motion.p
          animate={{ opacity: hovered ? 1 : 0.85 }}
          transition={{ duration: 0.35 }}
          className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/80"
        >
          {res.description}
        </motion.p>
      </div>
    </motion.article>
  );
}

export default function Residences() {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let rafId = 0;
    const speed = 0.55;

    const tick = () => {
      if (!pausedRef.current && el) {
        el.scrollLeft += speed;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const scrollByDir = useCallback((dir) => {
    const el = trackRef.current;
    if (!el) return;
    setPaused(true);
    el.scrollBy({ left: dir * CARD_STEP, behavior: 'smooth' });
    window.setTimeout(() => setPaused(false), 900);
  }, []);

  return (
    <section id="properties" className="pt-8 pb-20 lg:pt-10 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 lg:mb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-20">
          <div className="shrink-0">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-brand-gold uppercase block mb-3">
              Our Residences
            </span>
            <h2 className="font-display font-bold text-brand-charcoal tracking-tight leading-[1.05]">
              <span className="block text-4xl sm:text-4xl lg:text-4xl">Four Properties.</span>
              <span className="block mt-1 text-4xl sm:text-4xl lg:text-4xl font-serif italic font-semibold bg-gradient-to-r from-brand-burgundy to-brand-gold bg-clip-text text-transparent">
                One Standard of Excellence.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-[15px] leading-relaxed text-brand-charcoal border-l-2 border-brand-burgundy pl-5 lg:pl-6 lg:mt-8 lg:self-center">
            Strategically located in Madhapur, each property offers a unique sanctuary tailored to
            your lifestyle. Three are premium co-living residences, while{' '}
            <span className="font-semibold text-brand-charcoal">Narenn&apos;s Crown</span> is a
            signature safe space curated exclusively for girls.
          </p>
        </div>

        <div className="flex justify-end items-center gap-2 mb-5">
          <button
            type="button"
            onClick={() => scrollByDir(-1)}
            aria-label="Scroll residences left"
            className="w-11 h-11 rounded-full border border-brand-gold/35 bg-white text-brand-charcoal hover:bg-brand-burgundy hover:border-brand-burgundy hover:text-white transition-colors flex items-center justify-center shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByDir(1)}
            aria-label="Scroll residences right"
            className="w-11 h-11 rounded-full border border-brand-gold/35 bg-white text-brand-charcoal hover:bg-brand-burgundy hover:border-brand-burgundy hover:text-white transition-colors flex items-center justify-center shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className="flex gap-5 overflow-x-auto px-6 pb-2 scrollbar-none"
        style={{
          scrollBehavior: 'auto',
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {MARQUEE_CARDS.map((res, idx) => (
          <ResidenceCard key={`${res.name}-${idx}`} res={res} />
        ))}
      </div>
    </section>
  );
}
