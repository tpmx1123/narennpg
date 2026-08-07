import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { Check } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { IT_NEEDS } from '../../data/itProfessionalsPageData';



export default function ItNeeds() {
  return (
    <section className="mb-14 lg:mb-16">
      <motion.div
        {...scrollReveal}
        className="max-w-3xl mx-auto"
      >
        <SectionHeading
          eyebrow={IT_NEEDS.eyebrow}
          title={IT_NEEDS.h2}
          accent={IT_NEEDS.h2Accent}
          align="center"
          className="mb-4"
        />
        <p className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed text-center mb-8">
          {IT_NEEDS.intro}
        </p>
        <ul className="space-y-0 border-t border-brand-charcoal/10">
          {IT_NEEDS.bullets.map((item) => (
            <li
              key={item}
              className="flex gap-3 py-3.5 border-b border-brand-charcoal/10"
            >
              <Check
                className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5"
                strokeWidth={2.5}
                aria-hidden="true"
              />
              <span className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
