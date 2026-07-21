import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

export default function SingleRoomValue() {
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
        All-Inclusive
      </span>
      <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.15] mb-4">
        The Value of{' '}
        <span className="text-brand-gold italic font-medium">All-Inclusive Living</span>
      </h2>
      <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
        Renting a one-bedroom flat in Madhapur means paying for furniture, appliances, internet, a
        cook, a maid, deposits and brokerage — and managing all of it yourself. A single room at
        Narenn Living bundles every one of those into a single, predictable monthly payment. Compare
        our{' '}
        <Link
          to="/amenities/"
          className="text-brand-burgundy font-semibold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold rounded-sm"
        >
          amenities
        </Link>{' '}
        and see how much simpler premium single living can be, or explore{' '}
        <Link
          to="/rooms/"
          className="text-brand-burgundy font-semibold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold rounded-sm"
        >
          all room types
        </Link>{' '}
        if you would like to weigh your options.
      </p>
    </motion.section>
  );
}
