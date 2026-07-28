import { motion } from 'framer-motion';
import { FAQ_WISH } from '../../data/faqPageData';

const EASE = [0.16, 1, 0.3, 1];

/** Quiet utility Q&A list — Treatment A */
export default function FaqWish() {
  return (
    <section className="mb-14 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-xl sm:text-2xl font-display font-bold text-brand-green tracking-tight leading-snug mb-6 text-center">
          {FAQ_WISH.h2}
        </h2>
        <ol className="space-y-0 border-t border-brand-charcoal/10">
          {FAQ_WISH.items.map((item, index) => (
            <li
              key={item.question}
              className="flex gap-4 py-4 sm:py-5 border-b border-brand-charcoal/10"
            >
              <span className="font-display font-bold text-xs text-brand-charcoal/35 tabular-nums pt-0.5 w-6 shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0 space-y-1.5">
                <h3 className="font-display font-semibold text-sm sm:text-[15px] text-brand-charcoal leading-snug">
                  {item.question}
                </h3>
                <p className="text-sm text-brand-charcoal-light leading-relaxed">{item.answer}</p>
              </div>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
