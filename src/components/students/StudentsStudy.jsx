import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { STUDENTS_STUDY, STUDENTS_IMAGES } from '../../data/studentsPageData';



export default function StudentsStudy() {
  const img = STUDENTS_IMAGES.study;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-8 lg:mb-10">
      <motion.div
        {...scrollReveal}
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
          <span className="section-eyebrow block">
            {STUDENTS_STUDY.eyebrow}
          </span>
          <h2 className="section-title">
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
