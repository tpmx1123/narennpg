import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { HOME_FAQS } from '../../data/seoHome';
import { accordionPanel, scrollReveal } from '../../motion/motionPresets';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-10 sm:py-14 bg-white border-t border-brand-gold/15">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div className="text-center mb-8 sm:mb-10" {...scrollReveal}>
          <span className="section-eyebrow block mb-3">FAQ</span>
          <h2 className="section-title">
            Frequently Asked <span className="section-title-accent">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {HOME_FAQS.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-brand-gold/25 rounded-2xl overflow-hidden bg-brand-gold-pale/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3.5 sm:gap-4 sm:px-5 sm:py-4 text-left"
                  aria-expanded={open}
                >
                  <h3 className="font-display font-semibold text-sm sm:text-base text-brand-charcoal pr-2">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-brand-burgundy transition-transform ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="panel"
                      initial={accordionPanel.initial}
                      animate={accordionPanel.animate}
                      exit={accordionPanel.exit}
                      transition={accordionPanel.transition}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 sm:px-5 sm:pb-5 text-sm leading-relaxed text-brand-charcoal-light">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
