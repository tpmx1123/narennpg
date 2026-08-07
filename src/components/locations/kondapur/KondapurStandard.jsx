import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';
import { KONDAPUR_IMAGES, KONDAPUR_STANDARD } from '../../../data/kondapurLocationData';



export default function KondapurStandard() {
  const img = KONDAPUR_IMAGES.room;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-8 sm:mb-10 lg:mb-12 -mx-4 sm:-mx-6 lg:-mx-6 bg-brand-gold-pale/30 border-y border-brand-gold/15 overflow-hidden">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-12"
      >
        <div className="lg:col-span-5 relative min-h-[200px] sm:min-h-[280px] lg:min-h-full order-1">
          <img loading="lazy"
            src={src}
            alt={img.alt}
            title={img.title}
            onError={() => setSrc(img.fallback)}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        <div className="lg:col-span-7 order-2 px-4 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-14 space-y-4 sm:space-y-5 min-w-0">
          <span className="section-eyebrow block">
            {KONDAPUR_STANDARD.eyebrow}
          </span>
          <h2 className="section-title">
            Rooms, Food, WiFi and{' '}
            <span className="section-title-accent">{KONDAPUR_STANDARD.h2Accent}</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {KONDAPUR_STANDARD.body}{' '}
            <Link
              to={KONDAPUR_STANDARD.roomsLink.to}
              className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
            >
              {KONDAPUR_STANDARD.roomsLink.label}
            </Link>{' '}
            {KONDAPUR_STANDARD.mid}{' '}
            <Link
              to={KONDAPUR_STANDARD.amenitiesLink.to}
              className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
            >
              {KONDAPUR_STANDARD.amenitiesLink.label}
            </Link>{' '}
            {KONDAPUR_STANDARD.trail}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
