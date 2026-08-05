import { useState } from 'react';
import { motion } from 'framer-motion';
import { STUDENTS_APPROVE, STUDENTS_IMAGES } from '../../data/studentsPageData';

const EASE = [0.16, 1, 0.3, 1];

export default function StudentsApprove() {
  const img = STUDENTS_IMAGES.parents;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-0 -mx-4 sm:-mx-6 lg:-mx-10 bg-brand-gold-pale/30 border-t border-brand-gold/15 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: EASE }}
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
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            {STUDENTS_APPROVE.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            Why Parents{' '}
            <span className="text-brand-gold italic font-medium">Approve</span> of Narenn Living
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
