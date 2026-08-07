import { motion, useReducedMotion } from 'framer-motion';
import { DOUBLE_SHARING_FALLBACK } from '../../../data/doubleSharingData';

const EASE = [0.16, 1, 0.3, 1];

export default function DoubleRoomFallback() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: EASE }}
      className="mb-14 lg:mb-16 bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
        <div className="lg:col-span-4">
          <span className="section-eyebrow block mb-3">
            Our Promise
          </span>
          <h2 className="section-title">
            What Happens If It{' '}
            <span className="section-title-accent">Doesn&apos;t Work Out</span>
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-5">
          {DOUBLE_SHARING_FALLBACK.paragraphs.map((para) => (
            <p
              key={para.slice(0, 48)}
              className={`text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed ${
                para === DOUBLE_SHARING_FALLBACK.paragraphs[0]
                  ? 'border-l-[3px] border-brand-burgundy pl-4 lg:pl-5'
                  : ''
              }`}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
