import { Check } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { DOUBLE_SHARING_INCLUDES } from '../../../data/doubleSharingData';

const EASE = [0.22, 1, 0.36, 1];

export default function DoubleRoomIncludes() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="mb-12 lg:mb-14"
    >
      <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
        Complete Package
      </span>
      <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.15] mb-4">
        What Your Double Room{' '}
        <span className="text-brand-gold italic font-medium">Includes</span>
      </h2>
      <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mb-6">
        Each double sharing room is thoughtfully furnished so both residents have their own
        comfortable, dedicated space:
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
        {DOUBLE_SHARING_INCLUDES.map((item, i) => (
          <motion.li
            key={item}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
            className="flex gap-3 items-start"
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 text-brand-burgundy">
              <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
            </span>
            <span className="text-sm text-brand-charcoal leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
