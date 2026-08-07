import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { AMENITIES_DONT_OFFER } from '../../data/amenitiesData';


export default function AmenitiesDontOffer() {
  const plain = AMENITIES_DONT_OFFER.h2.replace(AMENITIES_DONT_OFFER.h2Accent, '').trim();

  return (
    <section className="mb-10 sm:mb-14 lg:mb-16 flex justify-center">
      <motion.div
        {...scrollReveal}
        className="w-full max-w-3xl bg-brand-green-pale border border-brand-gold/20 p-5 sm:p-9 lg:p-10 rounded-2xl text-center"
      >
        <h2 className="section-title mb-5">
          <span>
            {plain}{' '}
            <span className="section-title-accent">{AMENITIES_DONT_OFFER.h2Accent}</span>
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
