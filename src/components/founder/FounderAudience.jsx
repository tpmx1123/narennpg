import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FOUNDER_AUDIENCE } from '../../data/founderPageData';

export default function FounderAudience() {
  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15] mb-3">
            {FOUNDER_AUDIENCE.h2}
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light max-w-2xl mx-auto leading-relaxed">
            {FOUNDER_AUDIENCE.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {FOUNDER_AUDIENCE.cards.map((card) => (
            <div
              key={card.key}
              className="relative group overflow-hidden rounded-2xl h-72 sm:h-80"
            >
              <div className="absolute inset-0 bg-brand-charcoal/40 group-hover:bg-brand-charcoal/25 transition-all z-10" />
              <img
                src={card.image}
                alt={card.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20">
                <h3 className="text-white text-xl sm:text-2xl font-display font-bold tracking-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4 max-w-sm">
                  {card.description}
                </p>
                <Link
                  to={card.href}
                  className="text-brand-gold text-[11px] font-display font-bold uppercase tracking-[0.18em] inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                >
                  {card.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
