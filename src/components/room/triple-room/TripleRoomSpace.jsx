import { Check } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { TRIPLE_SHARING_SPACE } from '../../../data/tripleSharingData';

const EASE = [0.16, 1, 0.3, 1];

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE, delay: 0.04 + i * 0.05 },
  }),
};

export default function TripleRoomSpace() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: EASE }}
      className="mb-14 lg:mb-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-8 lg:mb-10 items-end">
        <div className="lg:col-span-5">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            Real Layout
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[2.15rem] text-brand-green tracking-tight leading-[1.12]">
            Space That Actually Works for{' '}
            <span className="text-brand-gold italic font-medium">Three</span>
          </h2>
        </div>
      </div>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-6 lg:gap-y-7 max-w-5xl"
      >
        {TRIPLE_SHARING_SPACE.points.map((point, index) => (
          <motion.li
            key={point}
            custom={index}
            variants={reduceMotion ? undefined : itemVariants}
            className="flex gap-3.5 items-start"
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 text-brand-burgundy">
              <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
            </span>
            <p className="text-sm sm:text-[15px] text-brand-charcoal leading-relaxed">{point}</p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
