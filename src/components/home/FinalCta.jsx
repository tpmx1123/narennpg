import { ArrowRight, MessageSquare } from 'lucide-react';

export default function FinalCta({ onBookVisit }) {
  return (
    <section className="py-28 text-center bg-brand-cream relative z-10">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">EXPERIENCE THE STANDARD</span>
        <h2 className="text-4xl sm:text-6xl font-display font-bold text-brand-charcoal tracking-tight leading-none">
          Upgrade to <br />
          <span className="text-brand-gold italic font-medium">Premium Living Today.</span>
        </h2>
        <p className="text-brand-charcoal-light text-md max-w-xl mx-auto leading-relaxed">
          Spaces are filling fast. Book a tour of our co-living residences — or Narenn&apos;s Crown,
          curated exclusively for girls — at Narenn Living today.
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
