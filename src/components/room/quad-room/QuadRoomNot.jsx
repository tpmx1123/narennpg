import { motion, useReducedMotion } from 'framer-motion';
import { PHONE_DISPLAY, PHONE_TEL } from '../../../data/sitePages';

const EASE = [0.16, 1, 0.3, 1];

export default function QuadRoomNot() {
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
            Honest Floor
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[2.15rem] text-brand-green tracking-tight leading-[1.12]">
            What Four Sharing{' '}
            <span className="text-brand-gold italic font-medium">Is Not</span>
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-5">
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed border-l-[3px] border-brand-burgundy pl-4 lg:pl-5">
            It is not a dormitory. It is not eight beds in a converted hall. It is not the room you
            tolerate because you cannot afford better.
          </p>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            Four residents, a room proportioned for four, individual beds, individual lockable
            storage, individual study space, air conditioning, fibre WiFi, daily housekeeping and
            four meals a day - in VIP Hills, Madhapur. That is the floor at Narenn Living, not a
            compromise on it. Come and look at one before you assume the price implies the quality.
            Call{' '}
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-brand-burgundy font-semibold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold rounded-sm"
            >
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>
      </div>
    </motion.section>
  );
}
