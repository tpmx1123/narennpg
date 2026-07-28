import { useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { HERO_SLIDES, RESIDENCES } from '../../data/homeData';

const ease = [0.22, 1, 0.36, 1];
const CARD_WIDTH = 280;
const CARD_HEIGHT = 420;

const PROPERTY_CARDS = RESIDENCES.map((res) => {
  const slide = HERO_SLIDES.find((s) => s.property === res.name);
  return {
    ...res,
    videoUrl: slide?.videoUrl ?? '',
  };
});

function ResidenceCard({ res }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        y: hovered ? -6 : 0,
        scale: hovered ? 1.02 : 1,
      }}
      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      className="group relative shrink-0 overflow-hidden rounded-2xl border border-white/15 snap-start"
      style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
    >
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

      <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/80 via-brand-charcoal/15 to-transparent pointer-events-none" />

      <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 z-10">
        <span
          className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide backdrop-blur-md ${
            res.livingType === 'For Girls'
              ? 'border-[#B1020C]/30 bg-[#B1020C] text-white'
              : 'border-white/25 bg-white/20 text-white'
          }`}
        >
          {res.livingType}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-black/35 px-2 py-0.5 text-[9px] font-semibold text-white backdrop-blur-md">
          <Star className="h-2.5 w-2.5 fill-[#FBBD45] text-[#FBBD45]" />
          {res.rating}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-4">
        <motion.h3
          animate={{ y: hovered ? -2 : 0 }}
          transition={{ duration: 0.35, ease }}
          className="font-display text-lg font-bold leading-snug tracking-tight text-white"
        >
          {res.name}
        </motion.h3>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#FBBD45]">
          {res.tagline}
        </p>
        <motion.p
          animate={{ opacity: hovered ? 1 : 0.85 }}
          transition={{ duration: 0.35 }}
          className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-white/80"
        >
          {res.description}
        </motion.p>
      </div>
    </motion.article>
  );
}

export default function Residences() {
  return (
    <section id="properties" className="py-10 sm:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
          <div className="shrink-0">
            <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase mb-2 block">
              Our Rooms
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
              Rooms Designed <br />
              <span className="text-brand-gold italic font-medium">for Real Life.</span>
            </h2>
          </div>

          <p className="max-w-lg text-sm text-brand-charcoal-light leading-relaxed border-l-2 border-brand-burgundy pl-4 lg:pl-5 lg:self-center">
            Every room at Narenn Living is move-in ready with a comfortable bed, wardrobe, study desk,
            air-conditioning and clean linen. Choose a private single room for focus and privacy, a
            double sharing room for the balance of company and space, or an economical triple sharing
            room that keeps costs down without cutting corners. Take a closer look at{' '}
            <a href="/rooms/" className="text-brand-burgundy font-semibold hover:underline">
              our rooms
            </a>{' '}
            and find the option that fits your budget and lifestyle.
          </p>
        </div>
      </div>

      <div
        className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-10 pb-2 scrollbar-none snap-x snap-mandatory"
        style={{
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {PROPERTY_CARDS.map((res) => (
          <ResidenceCard key={res.name} res={res} />
        ))}
      </div>
    </section>
  );
}
