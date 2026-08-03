import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export default function PropertyIdealFor({ data }) {
  const { idealFor } = data;

  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15] text-center mb-6 sm:mb-8 lg:mb-10">
          {idealFor.h2}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {idealFor.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: EASE, delay: index * 0.05 }}
              className="rounded-2xl border border-brand-gold/20 bg-white p-5 sm:p-6 lg:p-7 text-center"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-burgundy text-white text-sm font-display font-bold mb-4">
                {index + 1}
              </span>
              <h3 className="font-display font-bold text-base text-brand-green mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-brand-charcoal-light leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
