import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { ROOMS_FAQS } from '../../data/roomsData';

export default function RoomsFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mb-6 lg:mb-8 pt-4 border-t border-brand-gold/15">
      <div className="max-w-3xl mx-auto">
        <span className="text-[11px] font-bold tracking-[0.25em] text-[#FBBD45] uppercase block mb-3 text-center">
          FAQ
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15] text-center mb-10">
          Frequently Asked <span className="text-[#FBBD45] italic font-medium">Questions</span>
        </h2>

        <div className="space-y-3 mb-8">
          {ROOMS_FAQS.map((faq, index) => {
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

        <p className="text-sm text-brand-charcoal-light leading-relaxed text-center">
          Explore{' '}
          <Link to="/rooms/single-sharing/" className="text-brand-burgundy font-semibold hover:underline">
            single sharing rooms
          </Link>
          ,{' '}
          <Link to="/rooms/double-sharing/" className="text-brand-burgundy font-semibold hover:underline">
            double sharing rooms
          </Link>
          ,{' '}
          <Link to="/rooms/triple-sharing/" className="text-brand-burgundy font-semibold hover:underline">
            triple sharing rooms
          </Link>{' '}
          or{' '}
          <Link to="/contact-us/" className="text-brand-burgundy font-semibold hover:underline">
            book a room
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
