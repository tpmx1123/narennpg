import { motion } from 'framer-motion';
import { QUAD_SHARING_HERO } from '../../../data/quadSharingData';

const EASE = [0.16, 1, 0.3, 1];
const WATERMARK_LOGO =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784010508/f51c22a1-fcd7-429f-95dc-dcc512f1285a_x6ybxo.png';

export default function QuadRoomIntro() {
  return (
    <section className="mb-14 lg:mb-16 -mt-6 sm:-mt-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="relative overflow-hidden rounded-[10px] border border-brand-gold/25 bg-white shadow-[0_20px_60px_-24px_rgba(15,61,46,0.18)] p-6 sm:p-8 lg:p-12 max-w-6xl mx-auto"
      >
        <img
          src={WATERMARK_LOGO}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[280px] lg:w-[340px] h-auto object-contain opacity-[0.2]"
        />

        <div className="relative z-10 space-y-5 text-center max-w-5xl mx-auto">
          {QUAD_SHARING_HERO.paragraphs.map((para) => (
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
