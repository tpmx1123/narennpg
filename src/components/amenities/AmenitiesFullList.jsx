import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { AMENITIES_FULL_LIST, AMENITIES_FULL_LIST_ITEMS } from '../../data/amenitiesData';


export default function AmenitiesFullList() {
  const plain = AMENITIES_FULL_LIST.h2.replace(AMENITIES_FULL_LIST.h2Accent, '').trim();

  return (
    <section className="mb-14 lg:mb-16 pt-8 lg:pt-10 pb-10 lg:pb-12 -mx-4 sm:-mx-6 lg:-mx-6 px-4 sm:px-6 lg:px-6 bg-brand-gold-pale/25 border-b border-brand-gold/15">
      <motion.div
        {...scrollReveal}
        className="max-w-5xl mx-auto"
      >
        <h2 className="section-title mb-3">
          {plain}{' '}
          <span className="section-title-accent">{AMENITIES_FULL_LIST.h2Accent}</span>
        </h2>
        <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mb-6">
          {AMENITIES_FULL_LIST.intro}
        </p>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {AMENITIES_FULL_LIST_ITEMS.map((item, index) => (
            <div
              key={item}
              className={`flex items-start gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-xl border border-brand-gold/20 shadow-sm ${
                index === AMENITIES_FULL_LIST_ITEMS.length - 1
                  ? 'col-span-2 w-full max-w-lg mx-auto lg:col-span-1 lg:max-w-none lg:mx-0'
                  : ''
              }`}
            >
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-brand-burgundy mt-0.5" aria-hidden="true" />
              <span className="text-xs sm:text-sm text-brand-charcoal leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
