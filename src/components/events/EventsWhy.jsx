import { motion } from 'framer-motion';
import { EVENTS_WHY } from '../../data/eventsPageData';

const EASE = [0.16, 1, 0.3, 1];

export default function EventsWhy() {
  const plain = EVENTS_WHY.h2.replace(EVENTS_WHY.h2Accent, '').trim();

  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="max-w-3xl mx-auto space-y-5 text-center"
      >
        <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
          {EVENTS_WHY.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
          {plain}{' '}
          <span className="text-brand-gold italic font-medium">{EVENTS_WHY.h2Accent}</span>
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
