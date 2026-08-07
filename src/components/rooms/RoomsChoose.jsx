import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { ROOMS_CHOOSE } from '../../data/roomsData';

const EASE = [0.16, 1, 0.3, 1];

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE, delay: 0.04 + i * 0.05 },
  }),
};

export default function RoomsChoose() {
  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-8 lg:mb-10 items-end">
        <div className="lg:col-span-5">
          <span className="section-eyebrow block mb-3">
            Decision Guide
          </span>
          <h2 className="section-title">
            How to Choose Your{' '}
            <span className="section-title-accent">Room Format</span>
          </h2>
        </div>
        <div className="lg:col-span-7 flex items-stretch gap-5 lg:gap-6">
          <div
            className="hidden sm:block w-[3px] shrink-0 bg-brand-burgundy rounded-full"
            aria-hidden="true"
          />
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            Match the sharing type to how you actually live - calls, budget, company and commute -
            not just the sticker price.
          </p>
        </div>
      </div>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-6 lg:gap-y-7 max-w-5xl"
      >
        {ROOMS_CHOOSE.map((item, index) => (
          <motion.li
            key={item}
            custom={index}
            variants={itemVariants}
            className="min-w-0 flex gap-3.5 items-start"
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 text-brand-burgundy">
              <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
            </span>
            <p className="text-sm sm:text-[15px] text-brand-charcoal leading-relaxed">{item}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
