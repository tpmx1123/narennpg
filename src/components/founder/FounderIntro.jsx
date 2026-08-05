import { motion } from 'framer-motion';
import { FOUNDER_INTRO } from '../../data/founderPageData';

const EASE = [0.22, 1, 0.36, 1];

export default function FounderIntro() {
  const { founder, experience } = FOUNDER_INTRO;

  return (
    <section className="pt-24 sm:pt-28 lg:pt-36 pb-8 sm:pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="max-w-3xl mb-6 sm:mb-8 lg:mb-6"
        >
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-2.5 sm:mb-3">
            {FOUNDER_INTRO.eyebrow}
          </span>
          <h1 className="text-2xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            {FOUNDER_INTRO.h1}{' '}
            <span className="text-brand-gold italic font-medium">{FOUNDER_INTRO.h1Accent}</span>{' '}
            {FOUNDER_INTRO.h1Suffix}
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="order-2 lg:order-1 lg:col-span-7 min-w-0 space-y-5 sm:space-y-6 text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed"
          >
            <p className="first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-display first-letter:font-bold first-letter:text-brand-green first-letter:mr-2 first-letter:float-left">
              {FOUNDER_INTRO.paragraphs[0]}
            </p>
            <p>{FOUNDER_INTRO.paragraphs[1]}</p>

            <div className="pt-5 sm:pt-6 border-t border-brand-gold/20">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-brand-green tracking-tight leading-[1.15] mb-2.5 sm:mb-3">
                {experience.h2}
              </h2>
              <p>{experience.body}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="order-1 lg:order-2 lg:col-span-5 lg:-mt-15"
          >
            <div className="relative group max-w-md mx-auto lg:max-w-none lg:mx-0">
              <div className="absolute inset-0 sm:-inset-3 border border-brand-gold/25 rounded-2xl -z-10 transition-transform group-hover:scale-[1.02]" />
              <div className="h-64 sm:h-80 lg:h-[22rem] rounded-xl overflow-hidden shadow-[0_20px_50px_-24px_rgba(15,61,46,0.28)]">
                <img
                  src={founder.image}
                  alt={founder.alt}
                  title={founder.title}
                  loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 sm:mt-6">
                <h3 className="text-lg sm:text-2xl font-display font-bold text-brand-green tracking-tight mb-1">
                  {founder.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                  {founder.role}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
