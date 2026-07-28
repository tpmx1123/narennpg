import { useState } from 'react';
import { motion } from 'framer-motion';
import { HITECH_CITY_COSTED, HITECH_CITY_IMAGES } from '../../../data/hitechCityLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function HitechCityCosted() {
  const img = HITECH_CITY_IMAGES.landmarks;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-8 lg:mb-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center max-w-6xl mx-auto"
      >
        <div className="lg:col-span-6 space-y-5">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            {HITECH_CITY_COSTED.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            The Ten-Minute Commute,{' '}
            <span className="text-brand-gold italic font-medium">
              {HITECH_CITY_COSTED.h2Accent}
            </span>
          </h2>
          {HITECH_CITY_COSTED.paragraphs.map((para) => (
            <p
              key={para.slice(0, 40)}
              className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>

        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-2xl aspect-[16/10] sm:aspect-[3/2]">
            <img
              src={src}
              alt={img.alt}
              title={img.title}
              onError={() => setSrc(img.fallback)}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
