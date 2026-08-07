import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { EVENTS_WHY } from '../../data/eventsPageData';



export default function EventsWhy() {
  const plain = EVENTS_WHY.h2.replace(EVENTS_WHY.h2Accent, '').trim();

  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <motion.div
        {...scrollReveal}
        className="max-w-3xl mx-auto space-y-5 text-center"
      >
        <span className="section-eyebrow block mb-3">
          {EVENTS_WHY.eyebrow}
        </span>
        <h2 className="section-title">
          {plain}{' '}
          <span className="section-title-accent">{EVENTS_WHY.h2Accent}</span>
        </h2>

        <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
          {EVENTS_WHY.paragraphs[0]}
        </p>

        <blockquote className="bg-brand-gold-pale/40 border-l-4 border-brand-burgundy rounded-r-xl p-5 sm:p-6 text-left">
          <p className="font-display font-semibold text-lg sm:text-xl italic text-brand-green leading-snug">
            &ldquo;{EVENTS_WHY.quote}&rdquo;
          </p>
        </blockquote>

        <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
          {EVENTS_WHY.paragraphs[1]}
        </p>
      </motion.div>
    </section>
  );
}
