import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../../ui/SectionHeading';
import { GACHIBOWLI_IMAGES, GACHIBOWLI_WORK_LIVING } from '../../../data/gachibowliLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function GachibowliWorkLiving() {
  const img = GACHIBOWLI_IMAGES.landmarks;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center"
      >
        <div className="order-2 lg:order-1 lg:col-span-7 space-y-3.5 sm:space-y-4 min-w-0">
          <SectionHeading
            eyebrow={GACHIBOWLI_WORK_LIVING.eyebrow}
            title={GACHIBOWLI_WORK_LIVING.h2}
            accent={GACHIBOWLI_WORK_LIVING.h2Accent}
            titleClassName="text-3xl sm:text-[2rem] lg:text-4xl"
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

        <div className="order-1 lg:order-2 lg:col-span-5">
          <div className="overflow-hidden aspect-[16/10] max-h-[240px] sm:max-h-[320px] rounded-xl sm:rounded-2xl border border-brand-gold/20 shadow-[0_16px_40px_-20px_rgba(15,61,46,0.16)] w-full max-w-xl mx-auto lg:max-w-none">
            <img
              src={src}
              alt={img.alt}
              title={img.title}
              onError={() => setSrc(img.fallback)}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
