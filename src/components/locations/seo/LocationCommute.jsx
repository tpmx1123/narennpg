import { useState } from 'react';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';


export default function LocationCommute({ data }) {
  const { commute } = data;
  const img = data.images.commute;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
      >
        <div className="order-2 lg:order-1 lg:col-span-6 space-y-3.5 sm:space-y-5 min-w-0">
          <span className="section-eyebrow block">
            {commute.eyebrow}
          </span>
          <h2 className="section-title break-words">
            {commute.h2}{' '}
            <span className="section-title-accent">{commute.h2Accent}</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {commute.intro}
          </p>

          <ul className="space-y-0 border-t border-brand-charcoal/10">
            {commute.items.map((item) => (
              <li
                key={item.place}
                className="flex items-start sm:items-center justify-between gap-2.5 sm:gap-4 py-3 sm:py-3.5 border-b border-brand-charcoal/10"
              >
                <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                  <span className="min-w-9 h-9 px-1.5 shrink-0 rounded-full bg-brand-burgundy text-white flex items-center justify-center font-display font-bold text-[9px] sm:text-[10px] leading-none text-center">
                    {item.short}
                  </span>
                  <span className="font-display font-semibold text-sm sm:text-[15px] text-brand-charcoal leading-snug break-words pt-1.5 sm:pt-0">
                    {item.place}
                  </span>
                </div>
                <span className="text-[11px] sm:text-sm font-semibold text-brand-burgundy shrink-0 text-right max-w-[38%] sm:max-w-none leading-snug pt-1.5 sm:pt-0">
                  {item.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6">
          <div className="overflow-hidden aspect-[16/10] sm:aspect-[4/3] lg:aspect-[5/4] rounded-xl sm:rounded-2xl w-full max-w-xl mx-auto lg:max-w-none">
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
