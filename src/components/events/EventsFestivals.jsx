import { useState } from 'react';
import { motion } from 'framer-motion';
import { EVENTS_FESTIVALS, EVENTS_IMAGES } from '../../data/eventsPageData';

const EASE = [0.16, 1, 0.3, 1];

export default function EventsFestivals() {
  const { sweets } = EVENTS_IMAGES;
  const [src, setSrc] = useState(sweets.src);
  const plain = EVENTS_FESTIVALS.h2.replace(EVENTS_FESTIVALS.h2Accent, '').trim();

  return (
    <section id="about" className="mb-10 sm:mb-14 lg:mb-16 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center"
      >
        <div className="space-y-5">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            {EVENTS_FESTIVALS.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            {plain}{' '}
            <span className="text-brand-gold italic font-medium">{EVENTS_FESTIVALS.h2Accent}</span>
          </h2>
          {EVENTS_FESTIVALS.paragraphs.map((para) => (
            <p
              key={para.slice(0, 40)}
              className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-brand-gold/20 shadow-[0_20px_50px_-24px_rgba(15,61,46,0.2)]">
            <img
              src={src}
              alt={sweets.alt}
              title={sweets.title}
              onError={() => setSrc(EVENTS_IMAGES.festival.fallback)}
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="absolute bottom-2 right-2 sm:right-4 bg-white p-5 rounded-xl shadow-lg border border-brand-gold/20 hidden sm:block max-w-45">
            <p className="text-brand-burgundy font-display font-bold text-2xl leading-none mb-1">
              {EVENTS_FESTIVALS.stat}
            </p>
            <p className="text-xs text-brand-charcoal-light leading-snug">{EVENTS_FESTIVALS.statLabel}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
