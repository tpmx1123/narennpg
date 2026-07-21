import { motion } from 'framer-motion';
import { AMENITIES_DAILY, AMENITIES_IMAGES } from '../../data/amenitiesData';

const EASE = [0.16, 1, 0.3, 1];

export default function AmenitiesHonest() {
  const plain = AMENITIES_DAILY.h2.replace(AMENITIES_DAILY.h2Accent, '').trim();

  return (
    <section className="mb-14 lg:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="lg:col-span-6 space-y-5"
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            {AMENITIES_DAILY.eyebrow}
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.12]">
            {plain}{' '}
            <span className="text-brand-gold italic font-medium">{AMENITIES_DAILY.h2Accent}</span>
          </h2>
          {AMENITIES_DAILY.paragraphs.map((para) => (
            <p key={para.slice(0, 48)} className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
              {para}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.08 }}
          className="lg:col-span-6 grid grid-cols-2 gap-4"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-brand-gold/20">
            <img
              src={AMENITIES_IMAGES.housekeeping.src}
              alt={AMENITIES_IMAGES.housekeeping.alt}
              title={AMENITIES_IMAGES.housekeeping.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-2xl mt-8 border border-brand-gold/20">
            <img
              src={AMENITIES_IMAGES.wifi.src}
              alt={AMENITIES_IMAGES.wifi.alt}
              title={AMENITIES_IMAGES.wifi.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
