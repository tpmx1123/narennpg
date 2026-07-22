import { XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { ABOUT_NOT_ITEMS, ABOUT_PHILOSOPHY } from '../../data/aboutUsData';

const EASE = [0.16, 1, 0.3, 1];

export default function AboutPhilosophy() {
  return (
    <section className="mb-14 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <div className="max-w-3xl mb-8 lg:mb-10">
          <span className="text-[11px] font-bold tracking-[0.2em] text-brand-burgundy uppercase block mb-3">
            {ABOUT_PHILOSOPHY.eyebrow}
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.15] mb-5">
            {ABOUT_PHILOSOPHY.h2}
          </h2>
          <p className="text-base sm:text-lg font-display font-medium text-brand-charcoal-light italic border-l-4 border-brand-gold pl-5 leading-snug">
            “{ABOUT_PHILOSOPHY.quote}”
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-5 text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {ABOUT_PHILOSOPHY.paragraphs.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>

          <div className="bg-brand-cream-dark rounded-xl p-6 sm:p-8 space-y-5">
            <h3 className="font-display font-bold text-lg sm:text-xl text-brand-burgundy tracking-tight">
              What We Are <span className="text-brand-charcoal">Not</span>
            </h3>
            <ul className="space-y-4">
              {ABOUT_NOT_ITEMS.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-brand-burgundy shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-display font-bold text-sm text-brand-charcoal">{item.title}</p>
                    <p className="text-sm text-brand-charcoal-light mt-0.5">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
