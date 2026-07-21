import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export default function SingleRoomWhoShouldNot() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: EASE }}
      className="mb-14 lg:mb-16 bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
        <div className="lg:col-span-4">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            Honest Fit
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[2.15rem] text-brand-green tracking-tight leading-[1.12]">
            Who Should Not Take a{' '}
            <span className="text-brand-gold italic font-medium">Single Room</span>
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-5">
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed border-l-[3px] border-brand-burgundy pl-4 lg:pl-5">
            We will talk you out of it if it does not fit. If you are out of the building from nine
            in the morning until nine at night, if you are a fresher on a first salary trying to
            save, or if you know you settle into a new city faster with someone around, a single
            room is the wrong purchase. You would be paying a premium for a room you barely occupy
            and buying isolation on top.
          </p>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            Take{' '}
            <Link
              to="/rooms/double-sharing/"
              className="text-brand-burgundy font-semibold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold rounded-sm"
            >
              double sharing rooms
            </Link>
            , keep the difference, and upgrade in six months when your circumstances have changed.
            We would rather you stay two years in the right room than three months in the expensive
            one.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
