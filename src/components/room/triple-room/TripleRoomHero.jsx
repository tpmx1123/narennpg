import { motion, useReducedMotion } from 'framer-motion';
import { TRIPLE_SHARING_IMAGES } from '../../../data/tripleSharingData';

const EASE = [0.22, 1, 0.36, 1];

export default function TripleRoomHero() {
  const reduceMotion = useReducedMotion();
  const { hero } = TRIPLE_SHARING_IMAGES;

  return (
    <section className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] flex items-end overflow-hidden">
      <img
        src={hero.src}
        alt={hero.alt}
        title={hero.title}
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-green/85 to-brand-green/55"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/70 via-brand-charcoal/25 to-transparent"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-28 sm:pt-32 pb-12 sm:pb-14 lg:pb-16">
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.06 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase mb-4">
            3 Sharing · Triple Occupancy
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-cream tracking-tight leading-[1.12]">
            Triple Sharing PG Rooms in Madhapur —{' '}
            <span className="text-brand-gold-light italic font-medium">
              Smart, Social and Economical
            </span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
