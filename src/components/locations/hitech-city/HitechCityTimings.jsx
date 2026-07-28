import { motion } from 'framer-motion';
import { HITECH_CITY_TIMINGS } from '../../../data/hitechCityLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function HitechCityTimings() {
  return (
    <section className="mb-8 lg:mb-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="max-w-3xl mx-auto text-center space-y-5"
      >
        <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
          {HITECH_CITY_TIMINGS.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
          Built for{' '}
          <span className="text-brand-gold italic font-medium">
            {HITECH_CITY_TIMINGS.h2Accent}
          </span>
        </h2>
        {HITECH_CITY_TIMINGS.paragraphs.map((para) => (
          <p
            key={para.slice(0, 40)}
            className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed text-left sm:text-center"
          >
            {para}
          </p>
        ))}
      </motion.div>
    </section>
  );
}
