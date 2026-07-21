import { ShieldCheck } from 'lucide-react';
import { FOOD_HYGIENE } from '../../data/foodPageData';
import FoodSectionHeading from './FoodSectionHeading';

export default function FoodHygiene() {
  return (
    <section className="mb-14 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <div className="lg:col-span-6">
        <img
          src={FOOD_HYGIENE.image}
          alt={FOOD_HYGIENE.alt}
          className="w-full aspect-video object-cover rounded-2xl border border-brand-gold/20 shadow-[0_20px_50px_-24px_rgba(15,61,46,0.18)]"
        />
      </div>
      <div className="lg:col-span-6">
        <FoodSectionHeading title={FOOD_HYGIENE.h2} />
        <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mt-4 mb-5">
          {FOOD_HYGIENE.intro}
        </p>
        <ul className="space-y-3">
          {FOOD_HYGIENE.points.map((point) => (
            <li key={point} className="flex items-center gap-3 text-sm text-brand-charcoal">
              <ShieldCheck className="w-4 h-4 text-brand-burgundy shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
