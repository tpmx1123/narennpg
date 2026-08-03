import { motion } from 'framer-motion';
import { HITECH_CITY_RESIDENTS } from '../../../data/hitechCityLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function HitechCityResidents() {
  return (
    <section className="mb-8 sm:mb-10 lg:mb-12 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12 bg-brand-green-pale/35 border-y border-brand-gold/15">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="max-w-3xl mx-auto space-y-5 sm:space-y-6"
      >
        <div className="text-center space-y-2.5 sm:space-y-3">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            {HITECH_CITY_RESIDENTS.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            Who Our Hitech City{' '}
            <span className="text-brand-gold italic font-medium">
              {HITECH_CITY_RESIDENTS.h2Accent}
            </span>
          </h2>
        </div>

        <ol className="space-y-0 border-t border-brand-charcoal/10">
          {HITECH_CITY_RESIDENTS.bullets.map((item, index) => (
            <li
              key={item}
              className="flex gap-3 sm:gap-4 py-3 sm:py-3.5 border-b border-brand-charcoal/10"
            >
              <span className="font-display font-bold text-xs text-brand-charcoal/35 tabular-nums pt-0.5 w-5 sm:w-6 shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed min-w-0">
                {item}
              </p>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
