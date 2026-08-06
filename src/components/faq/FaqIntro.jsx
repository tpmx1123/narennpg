import { motion } from 'framer-motion';
import { FAQ_INTRO } from '../../data/faqPageData';
import ContactText from '../ui/ContactText';

const EASE = [0.16, 1, 0.3, 1];
const WATERMARK_LOGO =
  'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002176/narennlogo_opx4st_h4xfzh.png';

export default function FaqIntro() {
  return (
    <section className="mb-10 sm:mb-14 lg:mb-16 -mt-4 sm:-mt-6 lg:-mt-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="relative overflow-hidden rounded-[10px] border border-brand-gold/25 bg-white shadow-[0_20px_60px_-24px_rgba(15,61,46,0.18)] p-5 sm:p-8 lg:p-12 max-w-6xl mx-auto"
      >
        <img
          src={WATERMARK_LOGO}
          alt=""
          aria-hidden="true"
          loading="lazy" className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[280px] lg:w-[340px] h-auto object-contain opacity-[0.2]"
        />

        <div className="relative z-10 space-y-4 sm:space-y-5 text-center max-w-5xl mx-auto">
          {FAQ_INTRO.map((para) => (
            <p
              key={para.slice(0, 48)}
              className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed"
            >
              <ContactText>{para}</ContactText>
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
