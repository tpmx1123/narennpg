import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { IT_INTRO } from '../../data/itProfessionalsPageData';


const WATERMARK_LOGO =
  'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002176/narennlogo_opx4st_h4xfzh.png';

export default function ItIntro() {
  return (
    <section className="mb-14 lg:mb-16 -mt-6 sm:-mt-8 relative z-10">
      <motion.div
        {...scrollReveal}
        className="relative overflow-hidden rounded-[10px] border border-brand-gold/25 bg-white shadow-[0_20px_60px_-24px_rgba(15,61,46,0.18)] p-6 sm:p-8 lg:p-12 max-w-6xl mx-auto"
      >
        <img
          src={WATERMARK_LOGO}
          alt=""
          aria-hidden="true"
          loading="lazy" className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[280px] lg:w-[340px] h-auto object-contain opacity-[0.08]"
        />

        <div className="relative z-10 space-y-5 text-center max-w-5xl mx-auto">
          {IT_INTRO.map((para) => (
            <p
              key={para.slice(0, 48)}
              className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
