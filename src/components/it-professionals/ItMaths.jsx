import { useState } from 'react';
import { motion } from 'framer-motion';
import { IT_MATHS, IT_IMAGES } from '../../data/itProfessionalsPageData';

const EASE = [0.16, 1, 0.3, 1];

export default function ItMaths() {
  const img = IT_IMAGES.commute;
  const [src, setSrc] = useState(img.src);
  const plain = IT_MATHS.h2.replace(IT_MATHS.h2Accent, '').trim();

  return (
    <section className="mb-16 lg:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto"
      >
        <div className="lg:col-span-6 space-y-5">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            {IT_MATHS.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            {plain}{' '}
            <span className="text-brand-gold italic font-medium">{IT_MATHS.h2Accent}</span>
          </h2>
          {IT_MATHS.paragraphs.map((para) => (
            <p
              key={para.slice(0, 40)}
              className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
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
