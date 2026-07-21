import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { SINGLE_SHARING_FAQS } from '../../../data/singleSharingData';

/** Same section chrome as home Faq.jsx */
export default function SingleRoomFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-14 bg-white border-t border-brand-gold/15">
      <div className="max-w-3xl mx-auto px-6">
        <span className="text-[11px] font-bold tracking-[0.25em] text-[#FBBD45] uppercase block mb-3 text-center">
          FAQ
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15] text-center mb-10">
          Frequently Asked <span className="text-[#FBBD45] italic font-medium">Questions</span>
        </h2>

        <div className="space-y-3">
          {SINGLE_SHARING_FAQS.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-brand-gold/25 rounded-2xl overflow-hidden bg-brand-gold-pale/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
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
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed text-brand-charcoal-light">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-brand-charcoal-light leading-relaxed text-center">
          Explore{' '}
          <Link to="/rooms/" className="text-brand-burgundy font-semibold hover:underline">
            all room types
          </Link>
          ,{' '}
          <Link
            to="/rooms/double-sharing/"
            className="text-brand-burgundy font-semibold hover:underline"
          >
            double sharing rooms
          </Link>{' '}
          or{' '}
          <Link to="/contact-us/" className="text-brand-burgundy font-semibold hover:underline">
            book a single room
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
