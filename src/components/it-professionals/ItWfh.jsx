import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { IT_WFH, IT_IMAGES } from '../../data/itProfessionalsPageData';



export default function ItWfh() {
  const img = IT_IMAGES.wfh;
  const [src, setSrc] = useState(img.src);
  const plain = IT_WFH.h2.replace(IT_WFH.h2Accent, '').trim();

  return (
    <section className="mb-16 lg:mb-20">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto"
      >
        <div className="lg:col-span-6 space-y-5">
          <span className="section-eyebrow block mb-3">
            {IT_WFH.eyebrow}
          </span>
          <h2 className="section-title">
            {plain}{' '}
            <span className="section-title-accent">{IT_WFH.h2Accent}</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed">
            {IT_WFH.paragraphs[0]}{' '}
            <Link
              to={IT_WFH.link.to}
              className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
            >
              {IT_WFH.link.label}
            </Link>{' '}
            {IT_WFH.paragraphsAfter[0]}
          </p>
        </div>

        <div className="lg:col-span-6">
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
      </motion.div>
    </section>
  );
}
