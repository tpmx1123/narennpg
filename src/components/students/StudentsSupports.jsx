import { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Wifi, Sofa, Zap, Moon } from 'lucide-react';
import { STUDENTS_SUPPORTS, STUDENTS_IMAGES } from '../../data/studentsPageData';

const EASE = [0.16, 1, 0.3, 1];

const ICONS = { Monitor, Wifi, Sofa, Zap, Moon };

export default function StudentsSupports() {
  const img = STUDENTS_IMAGES.study;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-0 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 py-10 lg:py-12 bg-brand-green-pale/35 border-t border-brand-gold/15">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="max-w-5xl mx-auto space-y-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
              {STUDENTS_SUPPORTS.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
              {STUDENTS_SUPPORTS.h2}
            </h2>
            <div className="space-y-3">
              {STUDENTS_SUPPORTS.paragraphs.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl aspect-[16/10] sm:aspect-[3/2]">
              <img loading="lazy"
                src={src}
                alt={img.alt}
                title={img.title}
                onError={() => setSrc(img.fallback)}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 border-t border-brand-charcoal/10 pt-6">
          {STUDENTS_SUPPORTS.features.map((item) => {
            const Icon = ICONS[item.icon] ?? Monitor;
            return (
              <li key={item.title} className="space-y-2">
                <Icon
                  className="w-5 h-5 text-brand-burgundy"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <p className="font-display font-bold text-sm text-brand-charcoal leading-snug">
                  {item.title}
                </p>
                <p className="text-xs text-brand-charcoal-light leading-relaxed">{item.body}</p>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
}
