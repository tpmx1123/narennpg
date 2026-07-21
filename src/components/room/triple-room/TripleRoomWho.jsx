import { motion, useReducedMotion } from 'framer-motion';
import { TRIPLE_SHARING_WHO } from '../../../data/tripleSharingData';

const EASE = [0.16, 1, 0.3, 1];

export default function TripleRoomWho() {
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
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            Audience Fit
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[2.15rem] text-brand-green tracking-tight leading-[1.12]">
            Who Triple Sharing Is{' '}
            <span className="text-brand-gold italic font-medium">Built For</span>
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-5">
          {TRIPLE_SHARING_WHO.paragraphs.map((para, i) => (
            <p
              key={para.slice(0, 48)}
              className={`text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed ${
                i === 0 ? 'border-l-[3px] border-brand-burgundy pl-4 lg:pl-5' : ''
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
