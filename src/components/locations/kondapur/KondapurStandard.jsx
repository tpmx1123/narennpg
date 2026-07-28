import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { KONDAPUR_IMAGES, KONDAPUR_STANDARD } from '../../../data/kondapurLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function KondapurStandard() {
  const img = KONDAPUR_IMAGES.room;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-0 -mx-4 sm:-mx-6 lg:-mx-10 bg-brand-gold-pale/30 border-y border-brand-gold/15 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12"
      >
        <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[300px] lg:min-h-full order-2 lg:order-1">
          <img
            src={src}
            alt={img.alt}
            title={img.title}
            onError={() => setSrc(img.fallback)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 px-4 sm:px-8 lg:px-12 py-10 lg:py-14 space-y-5">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            {KONDAPUR_STANDARD.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            Rooms, Food, WiFi and{' '}
            <span className="text-brand-gold italic font-medium">{KONDAPUR_STANDARD.h2Accent}</span>
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
