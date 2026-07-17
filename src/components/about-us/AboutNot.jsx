import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { ABOUT_NOT_BULLETS } from '../../data/aboutUsData';

const EASE = [0.16, 1, 0.3, 1];

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE, delay: 0.04 + i * 0.05 },
  }),
};

export default function AboutNot() {
  return (
    <section className="mb-14 lg:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-8 lg:mb-10 items-end">
        <div className="lg:col-span-5">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            Clarity
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[2.15rem] text-brand-green tracking-tight leading-[1.12]">
            What We Are{' '}
            <span className="text-brand-burgundy italic font-medium">Not</span>
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed border-l-[3px] border-brand-gold pl-4 lg:pl-5">
            Clear lines help you choose with confidence. Here is what Narenn Living deliberately is
            not — so you know exactly what you are signing up for.
          </p>
        </div>
      </div>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-6 lg:gap-y-7 max-w-5xl"
      >
        {ABOUT_NOT_BULLETS.map((item, index) => (
          <motion.li
            key={item}
            custom={index}
            variants={itemVariants}
            className="flex gap-3.5 items-start"
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-burgundy/10 text-brand-burgundy">
              <X className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
            </span>
            <p className="text-sm sm:text-[15px] text-brand-charcoal leading-relaxed">{item}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
