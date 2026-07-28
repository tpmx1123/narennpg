import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HITECH_CITY_MADHAPUR, HITECH_CITY_IMAGES } from '../../../data/hitechCityLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function HitechCityMadhapur() {
  const img = HITECH_CITY_IMAGES.landmarks;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-8 lg:mb-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
      >
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="overflow-hidden aspect-[4/3] lg:aspect-[5/4] -mx-4 sm:mx-0 sm:rounded-2xl">
            <img
              src={src}
              alt={img.alt}
              title={img.title}
              onError={() => setSrc(img.fallback)}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2 space-y-5">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            {HITECH_CITY_MADHAPUR.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            The Convenience of{' '}
            <span className="text-brand-gold italic font-medium">
              {HITECH_CITY_MADHAPUR.h2Accent}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed">
            {HITECH_CITY_MADHAPUR.body}{' '}
            <Link
              to={HITECH_CITY_MADHAPUR.link.to}
              className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
            >
              {HITECH_CITY_MADHAPUR.link.label}
            </Link>{' '}
            {HITECH_CITY_MADHAPUR.trail}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
