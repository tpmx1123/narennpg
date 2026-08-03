import { motion } from 'framer-motion';
import { AMENITIES_DONT_OFFER } from '../../data/amenitiesData';

const EASE = [0.16, 1, 0.3, 1];

export default function AmenitiesDontOffer() {
  const plain = AMENITIES_DONT_OFFER.h2.replace(AMENITIES_DONT_OFFER.h2Accent, '').trim();

  return (
    <section className="mb-10 sm:mb-14 lg:mb-16 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="w-full max-w-3xl bg-brand-green-pale border border-brand-gold/20 p-5 sm:p-9 lg:p-10 rounded-2xl text-center"
      >
        <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15] mb-5">
          <span>
            {plain}{' '}
            <span className="text-brand-gold italic">{AMENITIES_DONT_OFFER.h2Accent}</span>
          </span>
        </h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          {AMENITIES_DONT_OFFER.paragraphs.map((para) => (
            <p key={para.slice(0, 48)} className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
