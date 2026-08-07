import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { STUDENTS_INCLUDED } from '../../data/studentsPageData';



export default function StudentsIncluded() {
  return (
    <section className="mb-0 -mx-4 sm:-mx-6 lg:-mx-6 px-4 sm:px-6 lg:px-6 py-12 lg:py-14 bg-brand-green-pale/50 border-t border-brand-gold/15">
      <motion.div
        {...scrollReveal}
        className="max-w-3xl mx-auto text-center space-y-6"
      >
        <span className="section-eyebrow block">
          {STUDENTS_INCLUDED.eyebrow}
        </span>
        <h2 className="section-title">
          {STUDENTS_INCLUDED.h2}
        </h2>
        {STUDENTS_INCLUDED.paragraphs.map((para) => (
          <p
            key={para.slice(0, 40)}
            className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed"
          >
            {para}
          </p>
        ))}

        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 pt-1">
          {STUDENTS_INCLUDED.chips.map((chip, i) => (
            <span key={chip} className="inline-flex items-center gap-2">
              {i > 0 ? (
                <span className="text-brand-charcoal/25 text-xs" aria-hidden="true">
                  ·
                </span>
              ) : null}
              <span className="text-xs sm:text-sm font-display font-bold tracking-wide text-brand-green uppercase">
                {chip}
              </span>
            </span>
          ))}
        </div>

        <p className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed">
          {STUDENTS_INCLUDED.linkLead}{' '}
          <Link
            to={STUDENTS_INCLUDED.link.to}
            className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
          >
            {STUDENTS_INCLUDED.link.label}
          </Link>{' '}
          {STUDENTS_INCLUDED.linkTrail}
        </p>
      </motion.div>
    </section>
  );
}
