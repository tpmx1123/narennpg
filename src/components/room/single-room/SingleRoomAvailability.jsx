import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export default function SingleRoomAvailability() {
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
            Timing
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[2.15rem] text-brand-green tracking-tight leading-[1.12]">
            Availability —{' '}
            <span className="text-brand-gold italic font-medium">Book Early</span>
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-5">
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed border-l-[3px] border-brand-burgundy pl-4 lg:pl-5">
            Single sharing is our fastest-moving format and it moves in a predictable rhythm. Rooms
            open around month-end and are usually gone within days. Joining seasons and semester
            starts compress that window further.
          </p>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            If you have a confirmed joining date, tell us early. We will hold a room against your
            date rather than making you gamble on what is open the week you land. That one phone
            call saves most people a fortnight of hotel bills and stress.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
