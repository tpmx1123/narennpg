import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE, delay: 0.04 + i * 0.05 },
  }),
};

const POINTS = [
  'Room availability shifts week to week across Narenn Elite, Narenn Crown, Narenn Pinnacle and Narenn Supreme — but the standards do not.',
  'The same in-house kitchen, housekeeping protocol, biometric no-curfew access and WiFi at every property.',
  'The same VIP Hills postcode, minutes from Hitech City, wherever you land in the group.',
  'Your decision is about budget and preference, not risk — there is no bad property to accidentally end up in.',
];

export default function RoomsProperties() {
  return (
    <section className="mb-14 lg:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-8 lg:mb-10 items-end">
        <div className="lg:col-span-5">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            One Standard
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.12]">
            Rooms Across Four Properties,{' '}
            <span className="text-brand-gold italic font-medium">One Standard</span>
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed border-l-[3px] border-brand-burgundy pl-4">
            The room mix and pricing vary slightly between properties. What you can count on does
            not — explore{' '}
            <Link
              to="/properties/"
              className="font-semibold text-brand-burgundy hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold rounded-sm"
            >
              our four properties
            </Link>{' '}
            to see how they compare.
          </p>
        </div>
      </div>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-6 lg:gap-y-7 max-w-5xl"
      >
        {POINTS.map((item, index) => (
          <motion.li
            key={item}
            custom={index}
            variants={itemVariants}
            className="flex gap-3.5 items-start"
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
