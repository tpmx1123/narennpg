import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';
import { HITECH_CITY_VALUE } from '../../../data/hitechCityLocationData';


export default function HitechCityValue() {
  return (
    <section className="mb-8 sm:mb-10 lg:mb-12 -mx-4 sm:-mx-6 lg:-mx-6 px-4 sm:px-6 lg:px-6 py-8 sm:py-10 lg:py-12 bg-brand-green-pale/40 border-y border-brand-gold/15">
      <motion.div
        {...scrollReveal}
        className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5"
      >
        <span className="section-eyebrow block">
          {HITECH_CITY_VALUE.eyebrow}
        </span>
        <h2 className="section-title">
          Better Value Than{' '}
          <span className="section-title-accent">{HITECH_CITY_VALUE.h2Accent}</span>
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
