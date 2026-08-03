import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HITECH_CITY_VALUE } from '../../../data/hitechCityLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function HitechCityValue() {
  return (
    <section className="mb-8 sm:mb-10 lg:mb-12 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12 bg-brand-green-pale/40 border-y border-brand-gold/15">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5"
      >
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
          {HITECH_CITY_VALUE.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
          Better Value Than{' '}
          <span className="text-brand-gold italic font-medium">{HITECH_CITY_VALUE.h2Accent}</span>
        </h2>
        <p className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed">
          {HITECH_CITY_VALUE.body}{' '}
          <Link
            to={HITECH_CITY_VALUE.link.to}
            className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
          >
            {HITECH_CITY_VALUE.link.label}
          </Link>{' '}
          and{' '}
          <Link
            to={HITECH_CITY_VALUE.altLink.to}
            className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
          >
            {HITECH_CITY_VALUE.altLink.label}
          </Link>{' '}
          {HITECH_CITY_VALUE.trail}
        </p>
      </motion.div>
    </section>
  );
}
