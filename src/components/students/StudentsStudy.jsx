import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { STUDENTS_STUDY, STUDENTS_IMAGES } from '../../data/studentsPageData';

const EASE = [0.16, 1, 0.3, 1];

export default function StudentsStudy() {
  const img = STUDENTS_IMAGES.study;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-8 lg:mb-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
      >
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="overflow-hidden aspect-[4/3] lg:aspect-[5/4] -mx-4 sm:mx-0 sm:rounded-2xl">
            <img loading="lazy"
              src={src}
              alt={img.alt}
              title={img.title}
              onError={() => setSrc(img.fallback)}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2 space-y-5 px-0">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            {STUDENTS_STUDY.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            {STUDENTS_STUDY.h2}
          </h2>
          <p className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed">
            {STUDENTS_STUDY.paragraphs[0]}{' '}
            <Link
              to={STUDENTS_STUDY.link.to}
              className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
            >
              {STUDENTS_STUDY.link.label}
            </Link>{' '}
            {STUDENTS_STUDY.paragraphsAfter[0]}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
