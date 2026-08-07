import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';
import { HITECH_CITY_TIMINGS } from '../../../data/hitechCityLocationData';


export default function HitechCityTimings() {
  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      <motion.div
        {...scrollReveal}
        className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5"
      >
        <span className="section-eyebrow block">
          {HITECH_CITY_TIMINGS.eyebrow}
        </span>
        <h2 className="section-title">
          Built for{' '}
          <span className="section-title-accent">
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
