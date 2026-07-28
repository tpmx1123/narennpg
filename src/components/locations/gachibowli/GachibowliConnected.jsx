import { useState } from 'react';
import { motion } from 'framer-motion';
import { GACHIBOWLI_CONNECTED, GACHIBOWLI_IMAGES } from '../../../data/gachibowliLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function GachibowliConnected() {
  const img = GACHIBOWLI_IMAGES.commute;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-8 lg:mb-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
      >
        <div className="lg:col-span-6 space-y-5">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            {GACHIBOWLI_CONNECTED.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            Well Connected to{' '}
            <span className="text-brand-gold italic font-medium">Gachibowli</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {GACHIBOWLI_CONNECTED.intro}
          </p>

          <ul className="space-y-0 border-t border-brand-charcoal/10">
            {GACHIBOWLI_CONNECTED.items.map((item) => (
              <li
                key={item.place}
                className="flex items-center justify-between gap-4 py-3.5 border-b border-brand-charcoal/10"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-9 h-9 shrink-0 rounded-full bg-brand-burgundy text-white flex items-center justify-center font-display font-bold text-[10px]">
                    {item.short}
                  </span>
                  <span className="font-display font-semibold text-sm sm:text-[15px] text-brand-charcoal truncate">
                    {item.place}
                  </span>
                </div>
                <span className="text-sm font-semibold text-brand-burgundy shrink-0">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6">
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
      </motion.div>
    </section>
  );
}
