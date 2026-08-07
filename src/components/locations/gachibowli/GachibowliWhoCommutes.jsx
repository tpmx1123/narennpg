import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';
import { Briefcase, Building2, GraduationCap, Users } from 'lucide-react';
import SectionHeading from '../../ui/SectionHeading';
import { GACHIBOWLI_WHO } from '../../../data/gachibowliLocationData';


const ICONS = [Briefcase, Building2, GraduationCap, Users];

export default function GachibowliWhoCommutes() {
  return (
    <section className="mb-8 sm:mb-10 lg:mb-12 py-8 sm:py-10 lg:py-12 -mx-4 sm:-mx-6 lg:-mx-6 px-4 sm:px-6 lg:px-6 bg-brand-cream-dark/60 border-y border-brand-gold/15">
      <motion.div
        {...scrollReveal}
        className="max-w-5xl mx-auto space-y-6 sm:space-y-8"
      >
        <SectionHeading
          eyebrow={GACHIBOWLI_WHO.eyebrow}
          title={GACHIBOWLI_WHO.h2}
          accent={GACHIBOWLI_WHO.h2Accent}
          align="center"
          titleClassName="text-3xl sm:text-[2rem] lg:text-4xl"
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {GACHIBOWLI_WHO.items.map((item, index) => {
            const Icon = ICONS[index] ?? Briefcase;
            return (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white border border-brand-gold/20 px-3.5 py-3.5 sm:px-4 sm:py-4 shadow-sm min-w-0"
              >
                <Icon
                  className="w-5 h-5 text-brand-burgundy shrink-0 mt-0.5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
}
