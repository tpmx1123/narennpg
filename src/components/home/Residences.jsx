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
              ? 'border-[#B1020C]/30 bg-[#B1020C] text-white'
              : 'border-white/25 bg-white/20 text-white'
          }`}
        >
          {res.livingType}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-black/35 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
          <Star className="h-3 w-3 fill-[#FBBD45] text-[#FBBD45]" />
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
        <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FBBD45]">
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
    <section id="properties" className="py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header — same style as About */}
        <div className=" lg:mb-2 px-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
          <div className="shrink-0">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#FBBD45] uppercase mb-3 block">
              Our Rooms
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
              Rooms Designed <br />
              <span className="text-[#FBBD45] italic font-medium">for Real Life.</span>
            </h2>
          </div>

          <p className="max-w-xl text-brand-charcoal-light text-md leading-relaxed border-l-2 border-brand-burgundy pl-5 lg:pl-6 lg:self-center">
            Every room at Narenn Living is move-in ready with a comfortable bed, wardrobe, study desk,
            air-conditioning and clean linen. Choose a private single room for focus and privacy, a
            double sharing room for the balance of company and space, or an economical triple sharing
            room that keeps costs down without cutting corners. Take a closer look at{' '}
            <a
              href="/rooms/"
              className="text-brand-burgundy font-semibold hover:underline"
            >
              our rooms
            </a>{' '}
            and find the option that fits your budget and lifestyle.
          </p>
        </div>

        {/* Minimal Control Row Indicator Layout */}
        <div className="flex justify-end items-center gap-2 mb-6 px-6 sm:px-10 lg:px-0">
          <button
            type="button"
            onClick={() => scrollByDir(-1)}
            aria-label="Scroll residences left"
            className="w-11 h-11 rounded-full border border-gray-150 bg-white text-brand-charcoal hover:bg-[#B1020C] hover:border-[#B1020C] hover:text-white transition-colors flex items-center justify-center shadow-sm focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          <button
            type="button"
            onClick={() => scrollByDir(1)}
            aria-label="Scroll residences right"
            className="w-11 h-11 rounded-full border border-gray-150 bg-white text-brand-charcoal hover:bg-[#B1020C] hover:border-[#B1020C] hover:text-white transition-colors flex items-center justify-center shadow-sm focus:outline-none"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Kinetic Carousels Track Frame Track */}
      <div
        ref={trackRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className="flex gap-5 overflow-x-auto px-6 pb- scrollbar-none snap-x"
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