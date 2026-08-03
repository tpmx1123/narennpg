import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { HOME_FAQS } from '../../data/seoHome';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-10 sm:py-14 bg-white border-t border-brand-gold/15">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3 text-center">
          FAQ
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15] text-center mb-8 sm:mb-10">
          Frequently Asked <span className="text-brand-gold italic font-medium">Questions</span>
        </h2>

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
                  <h3 className="font-display font-bold text-sm sm:text-base text-brand-charcoal pr-2">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-brand-burgundy transition-transform ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {open && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                    <p className="text-sm leading-relaxed text-brand-charcoal-light">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
