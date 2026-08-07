import { useState } from 'react';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { FAQ_DEPOSITS, FAQ_IMAGES } from '../../data/faqPageData';



/** Trust stage — Treatment B (pricing transparency) */
export default function FaqDeposits() {
  const pricing = FAQ_IMAGES.pricing;
  const [src, setSrc] = useState(pricing.src);
  const plain = FAQ_DEPOSITS.h2.replace(FAQ_DEPOSITS.h2Accent, '').trim();

  return (
    <section className="mb-10 sm:mb-14 lg:mb-20">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center max-w-6xl mx-auto"
      >
        <div className="order-2 lg:order-1 lg:col-span-6 space-y-4 sm:space-y-5 min-w-0">
          <h2 className="section-title">
            {plain}{' '}
            <span className="section-title-accent">{FAQ_DEPOSITS.h2Accent}</span>
          </h2>
          {FAQ_DEPOSITS.paragraphs.map((para) => (
            <p
              key={para.slice(0, 40)}
              className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3]">
            <img loading="lazy"
              src={src}
              alt={pricing.alt}
              title={pricing.title}
              onError={() => setSrc(pricing.fallback)}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
