import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

export default function TripleRoomMostValue() {
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
        Best Value
      </span>
      <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.15] mb-4">
        The Most Value for{' '}
        <span className="text-brand-gold italic font-medium">Your Money</span>
      </h2>
      <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed border-l-[3px] border-brand-burgundy pl-4">
        By sharing with two room-mates, you enjoy the full Narenn Living experience at the lowest
        possible cost — ideal if you are a student, a fresher on your first salary, or simply someone
        who would rather spend on experiences than rent. Every inclusion that comes with our single
        and double rooms comes with a triple too; you just pay less for it. Compare{' '}
        <Link
          to="/rooms/"
          className="text-brand-burgundy font-semibold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold rounded-sm"
        >
          all room types
        </Link>{' '}
        to see how the value stacks up.
      </p>
    </motion.section>
  );
}
