import { useState } from 'react';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { IT_SHIFTS, IT_IMAGES } from '../../data/itProfessionalsPageData';



export default function ItShifts() {
  const img = IT_IMAGES.shifts;
  const [src, setSrc] = useState(img.src);
  const plain = IT_SHIFTS.h2.replace(IT_SHIFTS.h2Accent, '').trim();

  return (
    <section className="mb-16 lg:mb-20">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto"
      >
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img loading="lazy"
              src={src}
              alt={img.alt}
              title={img.title}
              onError={() => setSrc(img.fallback)}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
          <span className="section-eyebrow block mb-3">
            {IT_SHIFTS.eyebrow}
          </span>
          <h2 className="section-title">
            {plain}{' '}
            <span className="section-title-accent">{IT_SHIFTS.h2Accent}</span>
          </h2>
          {IT_SHIFTS.paragraphs.map((para) => (
            <p
              key={para.slice(0, 40)}
              className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
