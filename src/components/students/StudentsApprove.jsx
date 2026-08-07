import { useState } from 'react';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { STUDENTS_APPROVE, STUDENTS_IMAGES } from '../../data/studentsPageData';



export default function StudentsApprove() {
  const img = STUDENTS_IMAGES.parents;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-0 -mx-4 sm:-mx-6 lg:-mx-6 bg-brand-gold-pale/30 border-t border-brand-gold/15 overflow-hidden">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-12"
      >
        <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[300px] lg:min-h-full order-2 lg:order-1">
          <img loading="lazy"
            src={src}
            alt={img.alt}
            title={img.title}
            onError={() => setSrc(img.fallback)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 px-4 sm:px-8 lg:px-12 py-10 lg:py-14 space-y-5">
          <span className="section-eyebrow block">
            {STUDENTS_APPROVE.eyebrow}
          </span>
          <h2 className="section-title">
            Why Parents{' '}
            <span className="section-title-accent">Approve</span> of Narenn Living
          </h2>
          {STUDENTS_APPROVE.paragraphs.map((para) => (
            <p
              key={para.slice(0, 40)}
              className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed"
            >
              {para}
            </p>
          ))}

          <ol className="space-y-0 border-t border-brand-charcoal/10 mt-2">
            {STUDENTS_APPROVE.bullets.map((item, index) => (
              <li
                key={item}
                className="flex gap-4 py-3.5 border-b border-brand-charcoal/10"
              >
                <span className="font-display font-bold text-xs text-brand-charcoal/35 tabular-nums pt-0.5 w-6 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-sm text-brand-charcoal-light leading-relaxed">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </motion.div>
    </section>
  );
}
