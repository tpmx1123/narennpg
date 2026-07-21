import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

export default function DoubleRoomBestOfBoth() {
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
        Balance
      </span>
      <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.15] mb-4">
        The Best of{' '}
        <span className="text-brand-gold italic font-medium">Both Worlds</span>
      </h2>
      <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed border-l-[3px] border-brand-burgundy pl-4">
        A double room gives you a built-in friend from day one - invaluable when you are new to
        Hyderabad - while still offering plenty of personal space. Many of our residents form lasting
        friendships with their room-mates, sharing meals, plans and the small everyday moments that
        make a new city feel like home. If you would like even more privacy, our{' '}
        <Link
          to="/rooms/single-sharing/"
          className="text-brand-burgundy font-semibold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold rounded-sm"
        >
          single sharing rooms
        </Link>{' '}
        are always an option; if you prefer a livelier, more economical setup, take a look at our{' '}
        <Link
          to="/rooms/triple-sharing/"
          className="text-brand-burgundy font-semibold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold rounded-sm"
        >
          triple sharing rooms
        </Link>
        .
      </p>
    </motion.section>
  );
}
