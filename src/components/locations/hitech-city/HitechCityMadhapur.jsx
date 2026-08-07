import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';
import { HITECH_CITY_MADHAPUR, HITECH_CITY_IMAGES } from '../../../data/hitechCityLocationData';


export default function HitechCityMadhapur() {
  const img = HITECH_CITY_IMAGES.landmarks;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
      >
        <div className="lg:col-span-7 order-1 lg:order-1">
          <div className="overflow-hidden aspect-[4/3] lg:aspect-[5/4] rounded-xl sm:rounded-2xl w-full max-w-xl mx-auto lg:max-w-none">
            <img loading="lazy"
              src={src}
              alt={img.alt}
              title={img.title}
              onError={() => setSrc(img.fallback)}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="lg:col-span-5 order-2 lg:order-2 space-y-4 sm:space-y-5 min-w-0">
          <span className="section-eyebrow block">
            {HITECH_CITY_MADHAPUR.eyebrow}
          </span>
          <h2 className="section-title">
            The Convenience of{' '}
            <span className="section-title-accent">
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
