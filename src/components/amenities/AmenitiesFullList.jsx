import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { AMENITIES_FULL_LIST, AMENITIES_FULL_LIST_ITEMS } from '../../data/amenitiesData';

const EASE = [0.16, 1, 0.3, 1];

export default function AmenitiesFullList() {
  const plain = AMENITIES_FULL_LIST.h2.replace(AMENITIES_FULL_LIST.h2Accent, '').trim();

  return (
    <section className="mb-14 lg:mb-16 pt-8 lg:pt-10 pb-10 lg:pb-12 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 bg-brand-gold-pale/25 border-b border-brand-gold/15">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.12] mb-3">
          {plain}{' '}
          <span className="text-brand-gold italic font-medium">{AMENITIES_FULL_LIST.h2Accent}</span>
        </h2>
        <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mb-6">
          {AMENITIES_FULL_LIST.intro}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {AMENITIES_FULL_LIST_ITEMS.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 bg-white p-4 rounded-xl border border-brand-gold/20 shadow-sm"
            >
              <CheckCircle2 className="w-5 h-5 shrink-0 text-brand-burgundy mt-0.5" aria-hidden="true" />
              <span className="text-sm text-brand-charcoal leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
