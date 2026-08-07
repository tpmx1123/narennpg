import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainerMount, staggerItemMount } from '../../../motion/motionPresets';
import { SINGLE_SHARING_IMAGES } from '../../../data/singleSharingData';

export default function SingleRoomHero() {
  const reduceMotion = useReducedMotion();
  const { hero } = SINGLE_SHARING_IMAGES;

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

      <div className="relative site-container pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 lg:pb-16">
        <motion.div
          className="max-w-3xl"
          {...(reduceMotion
            ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.35 } }
            : staggerContainerMount)}
        >
          <motion.span
            className="inline-flex items-center gap-2 section-eyebrow-on-dark mb-4"
            {...staggerItemMount}
          >
            1 Sharing · Private Occupancy
          </motion.span>

          <motion.h1 className="section-title-on-dark mb-6 sm:mb-7" {...staggerItemMount}>
            Single Sharing PG Rooms in Madhapur -{' '}
            <span className="section-title-accent">Your Own Private Space</span>
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}
