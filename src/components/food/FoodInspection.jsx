import { Phone } from 'lucide-react';
import { FOOD_INSPECTION, FOOD_SPECIAL } from '../../data/foodPageData';
import { PHONE_DISPLAY, PHONE_TEL } from '../../data/sitePages';

export default function FoodInspection() {
  return (
    <section className="mb-14 lg:mb-16 space-y-12 lg:space-y-14">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-green tracking-tight leading-[1.12]">
          Hygiene You Can{' '}
          <span className="text-brand-gold italic font-medium">Walk In and Inspect</span>
        </h2>
        <p className="mt-5 text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
          {FOOD_INSPECTION.body}
        </p>
      </div>

      <div className="max-w-3xl mx-auto text-center pt-10 border-t border-brand-gold/20">
        <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-green tracking-tight leading-[1.12]">
          Special Requirements and{' '}
          <span className="text-brand-gold italic font-medium">Off-Cycle Timings</span>
        </h2>
        <p className="mt-5 text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
          {FOOD_SPECIAL.body}
        </p>
        <a
          href={`tel:${PHONE_TEL}`}
          className="mt-7 inline-flex items-center gap-2.5 text-sm font-display font-bold text-brand-burgundy hover:text-brand-burgundy-dark transition-colors"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}
