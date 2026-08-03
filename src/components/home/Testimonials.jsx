import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/homeData';

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
        <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
          Verified Reviews
        </span>
        <p className="text-2xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
          Residents Who Chose <span className="text-brand-gold italic font-medium">Narenn</span>
        </p>
        <p className="text-brand-charcoal-light text-sm mt-4">
          Real Google reviews from residents across our co-living homes and Narenn&apos;s Crown
          residence for girls in Madhapur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TESTIMONIALS.map((test) => (
          <div
            key={test.name}
            className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-brand-cream border border-brand-cream-dark/60 shadow-sm flex flex-col justify-between relative hover:shadow-md transition-shadow duration-300"
          >
            <div>
              <div className="flex gap-1 text-brand-gold mb-4 sm:mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-brand-charcoal-light text-sm leading-relaxed italic mb-5 sm:mb-8">
                &ldquo;{test.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-brand-cream-dark/40">
              <span className="font-display font-bold text-sm text-brand-charcoal block leading-none mb-1.5">
                {test.name}
              </span>
              <span className="font-sans text-[10px] text-brand-charcoal-light block leading-none">
                {test.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
