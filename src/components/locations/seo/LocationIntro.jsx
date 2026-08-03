import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];
const WATERMARK_LOGO =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784012843/narennlogo_opx4st.png';

export default function LocationIntro({ data }) {
  const paragraphs = data.intro.paragraphs.map((p) => (typeof p === 'string' ? p : p.text));

  return (
    <section className="mb-8 sm:mb-10 lg:mb-12 -mt-4 sm:-mt-5 lg:-mt-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="relative overflow-hidden rounded-[10px] border border-brand-gold/20 bg-white shadow-[0_12px_40px_-24px_rgba(15,61,46,0.14)] px-4 py-5 sm:px-8 sm:py-8 lg:px-10 lg:py-9 max-w-5xl mx-auto"
      >
        <img
          src={WATERMARK_LOGO}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] sm:w-[220px] lg:w-[260px] h-auto object-contain opacity-[0.1] sm:opacity-[0.12]"
        />

        <div className="relative z-10 space-y-3 sm:space-y-4 text-left sm:text-center max-w-4xl mx-auto">
          {paragraphs.map((para) => (
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
