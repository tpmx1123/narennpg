import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

export default function TripleRoomCommunity() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="mb-12 lg:mb-14"
    >
      <span className="section-eyebrow block mb-3">
        Social Living
      </span>
      <h2 className="section-title mb-4">
        Instant <span className="section-title-accent">Community</span>
      </h2>
      <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed border-l-[3px] border-brand-burgundy pl-4">
        There is a special energy to a triple room. You arrive as strangers and, more often than not,
        leave as close friends. For anyone new to Hyderabad, that built-in group takes the edge off
        the transition — you have people to share meals with, explore the city with, and lean on from
        day one. Our{' '}
        <Link
          to="/pg-for-students/"
          className="text-brand-burgundy font-semibold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold rounded-sm"
        >
          PG for students
        </Link>{' '}
        is built around exactly this kind of supportive, social living.
      </p>
    </motion.section>
  );
}
