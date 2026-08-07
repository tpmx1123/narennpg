import { useState } from 'react';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';
import { HITECH_CITY_COSTED, HITECH_CITY_IMAGES } from '../../../data/hitechCityLocationData';


export default function HitechCityCosted() {
  const img = HITECH_CITY_IMAGES.landmarks;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center max-w-6xl mx-auto"
      >
        <div className="order-2 lg:order-1 lg:col-span-6 space-y-4 sm:space-y-5 min-w-0">
          <span className="section-eyebrow block">
            {HITECH_CITY_COSTED.eyebrow}
          </span>
          <h2 className="section-title">
            The Ten-Minute Commute,{' '}
            <span className="section-title-accent">
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

        <div className="order-1 lg:order-2 lg:col-span-6">
          <div className="overflow-hidden aspect-[16/10] sm:aspect-[3/2] rounded-xl sm:rounded-2xl w-full max-w-xl mx-auto lg:max-w-none">
            <img loading="lazy"
              src={src}
              alt={img.alt}
              title={img.title}
              onError={() => setSrc(img.fallback)}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
