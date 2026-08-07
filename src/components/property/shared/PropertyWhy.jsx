import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';


export default function PropertyWhy({ data }) {
  const { why } = data;

  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
      >
        <div className="lg:col-span-5">
          <h2 className="section-title">
            {why.h2}
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-5">
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">{why.body}</p>
          <ul className="space-y-3">
            {why.points.map((point) => (
              <li key={point} className="flex gap-3 items-start">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 text-brand-burgundy">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                </span>
                <span className="text-sm sm:text-[15px] text-brand-charcoal leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
