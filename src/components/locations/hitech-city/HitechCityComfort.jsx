import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HITECH_CITY_COMFORT } from '../../../data/hitechCityLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function HitechCityComfort() {
  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5"
      >
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
          {HITECH_CITY_COMFORT.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
          Come Home to{' '}
          <span className="text-brand-gold italic font-medium">{HITECH_CITY_COMFORT.h2Accent}</span>
        </h2>
        <p className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed">
          {HITECH_CITY_COMFORT.body}{' '}
          <Link
            to={HITECH_CITY_COMFORT.link.to}
            className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
          >
            {HITECH_CITY_COMFORT.link.label}
          </Link>{' '}
          {HITECH_CITY_COMFORT.trail}
        </p>
      </motion.div>
    </section>
  );
}
