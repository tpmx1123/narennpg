import { Fingerprint, Sparkles, UtensilsCrossed } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROPERTIES_STANDARD } from '../../data/propertiesPageData';

const EASE = [0.16, 1, 0.3, 1];

const ICONS = {
  UtensilsCrossed,
  Fingerprint,
  Sparkles,
};

export default function PropertiesStandard() {
  return (
    <section className="py-10 lg:py-14 -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-10 bg-brand-cream-dark/60 border-y border-brand-gold/10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            The Narenn Standard
          </span>
          <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15] mt-3">
            {PROPERTIES_STANDARD.h2}
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mt-4">
            {PROPERTIES_STANDARD.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {PROPERTIES_STANDARD.cards.map((card, index) => {
            const Icon = ICONS[card.icon] ?? Sparkles;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: EASE, delay: index * 0.06 }}
                className={`group bg-white rounded-2xl border border-brand-gold/20 p-5 sm:p-6 lg:p-7 text-center hover:shadow-[0_16px_40px_-24px_rgba(15,61,46,0.2)] transition-shadow ${
                  index === PROPERTIES_STANDARD.cards.length - 1
                    ? 'sm:col-span-2 sm:w-full sm:max-w-md sm:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0'
                    : ''
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-brand-gold-pale flex items-center justify-center text-brand-burgundy mx-auto mb-5 group-hover:bg-brand-burgundy group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-brand-green mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-brand-charcoal-light leading-relaxed">
                  {card.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
