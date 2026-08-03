import { Bed, Shield, Sparkles, Users, UtensilsCrossed, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];
const ICONS = { Bed, Shield, Sparkles, Users, UtensilsCrossed, Wifi };

export default function PropertyHighlights({ data }) {
  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            What You Get at {data.hero.h1}
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mt-4">
            The same Narenn Living standard - comfort, food, WiFi and security - in this property&apos;s own setting.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
          {data.highlights.map((item, index) => {
            const Icon = ICONS[item.icon] ?? Sparkles;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: EASE, delay: index * 0.04 }}
                className="rounded-2xl bg-white border border-black/4 shadow-[0_8px_30px_-18px_rgba(26,26,26,0.18)] p-5 sm:p-6 lg:p-7"
              >
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start text-center sm:text-left">
                  <div className="w-11 h-11 rounded-full bg-brand-burgundy-pale flex items-center justify-center text-brand-burgundy shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-base text-brand-charcoal mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brand-charcoal-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
