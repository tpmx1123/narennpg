import { ArrowRight, MessageSquare } from 'lucide-react';

export default function FinalCta({ onBookVisit }) {
  return (
    <section id="contact" className="py-28 text-center bg-brand-cream relative z-10">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <span className="text-[11px] font-bold tracking-[0.25em] text-[#FBBD45] uppercase block mb-3">
          Book a Visit
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
          Book Your Free <br />
          <span className="text-[#FBBD45] italic font-medium">Visit Today.</span>
        </h2>
        <p className="text-brand-charcoal-light text-md max-w-xl mx-auto leading-relaxed">
          Walk through the rooms, meet the team and taste the food. Call{' '}
          <a href="tel:+917075985666" className="text-brand-burgundy font-semibold hover:underline">
            70759 85666
          </a>{' '}
          or{' '}
          <a href="/contact-us/" className="text-brand-burgundy font-semibold hover:underline">
            book a free visit
          </a>{' '}
          and see why residents stay longer at Narenn Living.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => onBookVisit()}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-burgundy hover:bg-brand-burgundy-dark text-white font-display font-bold text-sm tracking-wider shadow-lg transition-colors flex items-center justify-center gap-2 group"
          >
            Schedule a Visit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a 
            href="https://wa.me/917075985666" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-brand-cream-dark hover:border-brand-gold hover:bg-brand-gold/5 text-brand-charcoal font-display font-bold text-sm tracking-wider flex items-center justify-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-brand-gold" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
