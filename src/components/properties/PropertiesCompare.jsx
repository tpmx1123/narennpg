import { motion } from 'framer-motion';
import { PROPERTIES_CHOOSE } from '../../data/propertiesPageData';

const EASE = [0.16, 1, 0.3, 1];

export default function PropertiesCompare() {
  return (
    <section className="mb-14 lg:mb-16 py-10 lg:py-14 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 bg-brand-cream-dark/60 border-y border-brand-gold/10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
      >
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15] mb-8">
            {PROPERTIES_CHOOSE.h2}
          </h2>
          <ol className="space-y-5">
            {PROPERTIES_CHOOSE.bullets.map((item, index) => (
              <li key={item} className="flex gap-4 items-start">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-burgundy text-white text-sm font-display font-bold">
                  {index + 1}
                </span>
                <span className="text-sm sm:text-[15px] text-brand-charcoal leading-relaxed pt-1">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-2xl overflow-hidden border border-brand-gold/20 shadow-[0_20px_50px_-24px_rgba(15,61,46,0.22)] aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[360px] max-h-[420px]">
          <img
            src={PROPERTIES_CHOOSE.image.src}
            alt={PROPERTIES_CHOOSE.image.alt}
            title={PROPERTIES_CHOOSE.image.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
}
