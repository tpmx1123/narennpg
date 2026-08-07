import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { AMENITIES_IMAGES, AMENITIES_MAINTENANCE, AMENITIES_MAINTENANCE_POINTS } from '../../data/amenitiesData';


export default function AmenitiesMaintenance() {
  const plain = AMENITIES_MAINTENANCE.h2.replace(AMENITIES_MAINTENANCE.h2Accent, '').trim();
  const { utilities } = AMENITIES_IMAGES;

  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
      >
        <div className="lg:col-span-7">
          <h2 className="section-title mb-6">
            {plain}{' '}
            <span className="section-title-accent">{AMENITIES_MAINTENANCE.h2Accent}</span>
          </h2>
          <ul className="space-y-3">
            {AMENITIES_MAINTENANCE_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed border-l-[3px] border-brand-burgundy pl-4 bg-brand-gold-pale/30 rounded-r-xl py-3 pr-4"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-brand-gold/20 shadow-[0_16px_40px_-24px_rgba(15,61,46,0.18)]">
            <img
              src={utilities.src}
              alt={utilities.alt}
              title={utilities.title}
              loading="lazy" className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
