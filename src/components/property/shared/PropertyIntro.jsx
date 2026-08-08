import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';

const WATERMARK_LOGO =
  'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/f51c22a1-fcd7-429f-95dc-dcc512f1285a_x6ybxo.png';

export default function PropertyIntro({ data }) {
  return (
    <section className="mb-10 sm:mb-14 lg:mb-16 -mt-6 sm:-mt-8 relative z-10">
      <motion.div
        {...scrollReveal}
        className="relative overflow-hidden rounded-[10px] border border-brand-gold/25 bg-white shadow-[0_20px_60px_-24px_rgba(15,61,46,0.18)] p-5 sm:p-8 lg:p-12 max-w-6xl mx-auto"
      >
        <img
          src={WATERMARK_LOGO}
          alt=""
          aria-hidden="true"
          loading="lazy" className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[280px] lg:w-[340px] h-auto object-contain opacity-[0.07]"
        />

        <div className="relative z-10 space-y-5 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            <span className="inline-flex items-center rounded-full bg-brand-burgundy-pale text-brand-burgundy text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1">
              {data.audience}
            </span>
            <span className="text-sm font-display font-semibold text-brand-green">{data.tagline}</span>
          </div>

          {data.intro.map((para) => (
            <p
              key={para.slice(0, 48)}
              className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed text-center"
            >
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
