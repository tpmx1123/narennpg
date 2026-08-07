import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { AMENITIES_DAILY, AMENITIES_IMAGES } from '../../data/amenitiesData';


export default function AmenitiesHonest() {
  const plain = AMENITIES_DAILY.h2.replace(AMENITIES_DAILY.h2Accent, '').trim();

  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <motion.div
          {...scrollReveal}
          className="lg:col-span-6 space-y-5"
        >
          <span className="section-eyebrow block mb-3">
            {AMENITIES_DAILY.eyebrow}
          </span>
          <h2 className="section-title">
            {plain}{' '}
            <span className="section-title-accent">{AMENITIES_DAILY.h2Accent}</span>
          </h2>
          {AMENITIES_DAILY.paragraphs.map((para) => (
            <p key={para.slice(0, 48)} className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
              {para}
            </p>
          ))}
        </motion.div>

        <motion.div
          {...scrollReveal}
          className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-brand-gold/20">
            <img
              src={AMENITIES_IMAGES.housekeeping.src}
              alt={AMENITIES_IMAGES.housekeeping.alt}
              title={AMENITIES_IMAGES.housekeeping.title}
              loading="lazy" className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-2xl mt-4 sm:mt-8 border border-brand-gold/20">
            <img
              src={AMENITIES_IMAGES.wifi.src}
              alt={AMENITIES_IMAGES.wifi.alt}
              title={AMENITIES_IMAGES.wifi.title}
              loading="lazy" className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
