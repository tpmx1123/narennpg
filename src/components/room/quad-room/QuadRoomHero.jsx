import { motion, useReducedMotion } from 'framer-motion';
import { QUAD_SHARING_IMAGES } from '../../../data/quadSharingData';

const EASE = [0.22, 1, 0.36, 1];

export default function QuadRoomHero() {
  const reduceMotion = useReducedMotion();
  const { hero } = QUAD_SHARING_IMAGES;

  return (
    <section className="relative min-h-110 lg:min-h-140 flex items-end overflow-hidden">
      <img
        src={hero.src}
        alt={hero.alt}
        title={hero.title}
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-brand-charcoal/90 via-brand-green/45 to-brand-green/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-brand-charcoal/55 via-brand-charcoal/15 to-transparent"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 lg:pb-16">
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.06 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase mb-4">
            4 Sharing · Quad Occupancy
          </span>

          <h1 className="text-2xl sm:text-[2rem] font-display font-bold text-brand-cream tracking-tight leading-[1.12] mb-6 sm:mb-7">
            Four Sharing PG Rooms in Madhapur -{' '}
            <span className="text-brand-gold-light italic font-medium">
              Maximum Value, Maximum Company
            </span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
