import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HITECH_CITY_IT, HITECH_CITY_IMAGES } from '../../../data/hitechCityLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function HitechCityItPros() {
  const img = HITECH_CITY_IMAGES.room;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-8 sm:mb-10 lg:mb-12 -mx-4 sm:-mx-6 lg:-mx-10 bg-brand-gold-pale/30 border-y border-brand-gold/15 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: EASE }}
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
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            {HITECH_CITY_IT.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            Built for{' '}
            <span className="text-brand-gold italic font-medium">IT Professionals</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {HITECH_CITY_IT.body}{' '}
            <Link
              to={HITECH_CITY_IT.link.to}
              className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
            >
              {HITECH_CITY_IT.link.label}
            </Link>{' '}
            {HITECH_CITY_IT.trail}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
