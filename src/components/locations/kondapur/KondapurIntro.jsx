import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';
import { KONDAPUR_INTRO } from '../../../data/kondapurLocationData';


const WATERMARK_LOGO =
  'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/narennlogo_opx4st.png';

export default function KondapurIntro() {
  return (
    <section className="mb-8 sm:mb-10 lg:mb-12 -mt-4 sm:-mt-5 lg:-mt-6 relative z-10">
      <motion.div
        {...scrollReveal}
        className="relative overflow-hidden rounded-[10px] border border-brand-gold/20 bg-white shadow-[0_12px_40px_-24px_rgba(15,61,46,0.14)] px-4 py-5 sm:px-8 sm:py-8 lg:px-6 lg:py-9 max-w-5xl mx-auto"
      >
        <img
          src={WATERMARK_LOGO}
          alt=""
          aria-hidden="true"
          loading="lazy" className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] sm:w-[220px] lg:w-[260px] h-auto object-contain opacity-[0.05]"
        />

        <div className="relative z-10 space-y-3.5 sm:space-y-4 text-center max-w-4xl mx-auto">
          {KONDAPUR_INTRO.map((para) => (
            <p
              key={para.slice(0, 48)}
              className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
