import { motion } from 'framer-motion';
import { ABOUT_IMAGES } from '../../data/aboutUsData';

const EASE = [0.16, 1, 0.3, 1];

export default function AboutPhilosophy() {
  const { team } = ABOUT_IMAGES;

  return (
    <section className="mb-14 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        <div className="lg:col-span-7">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            How We Operate
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[2.15rem] text-brand-green tracking-tight leading-[1.12] mb-5">
            Our Operating{' '}
            <span className="text-brand-gold italic font-medium">Philosophy</span>
          </h2>
          <p className="font-display font-semibold text-base sm:text-lg text-brand-green tracking-tight leading-snug border-l-[3px] border-brand-burgundy pl-4 mb-5">
            Most co-living brands optimise for occupancy. We optimise for renewal.
          </p>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mb-4">
            Those two goals look identical for about three months and then diverge sharply. Chasing
            occupancy means filling beds fast and dealing with the consequences later. Chasing
            renewal means the food has to be good in month seven, the AC has to be serviced before
            someone complains, and the maintenance request has to be closed the same day it is
            raised.
          </p>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            That is why we keep housekeeping, maintenance, kitchen and security staff on our own
            payroll instead of contracting them out. A contractor optimises for their margin. An
            employee optimises for the resident standing in front of them. It costs us more. It is
            the reason our residents stay.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-[12px] overflow-hidden aspect-[4/3] max-h-[360px] border border-brand-gold/20 shadow-[0_20px_50px_-24px_rgba(15,61,46,0.25)]">
            <img
              src={team.src}
              alt={team.alt}
              title={team.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
