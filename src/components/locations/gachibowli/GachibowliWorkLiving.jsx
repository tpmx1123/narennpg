import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../../ui/SectionHeading';
import { GACHIBOWLI_IMAGES, GACHIBOWLI_WORK_LIVING } from '../../../data/gachibowliLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function GachibowliWorkLiving() {
  const img = GACHIBOWLI_IMAGES.landmarks;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-8 lg:mb-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
      >
        <div className="lg:col-span-7 space-y-4">
          <SectionHeading
            eyebrow={GACHIBOWLI_WORK_LIVING.eyebrow}
            title={GACHIBOWLI_WORK_LIVING.h2}
            accent={GACHIBOWLI_WORK_LIVING.h2Accent}
          />
          {GACHIBOWLI_WORK_LIVING.paragraphs.map((para) => (
            <p
              key={para.slice(0, 48)}
              className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>

        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl aspect-[16/10] max-h-[280px] sm:max-h-[320px] border border-brand-gold/20 shadow-[0_16px_40px_-20px_rgba(15,61,46,0.16)]">
            <img
              src={src}
              alt={img.alt}
              title={img.title}
              onError={() => setSrc(img.fallback)}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
