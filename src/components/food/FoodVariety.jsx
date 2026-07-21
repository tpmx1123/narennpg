import { EggFried } from 'lucide-react';
import { FOOD_VARIETY } from '../../data/foodPageData';
import FoodSectionHeading from './FoodSectionHeading';

export default function FoodVariety() {
  return (
    <section className="mb-14 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <div className="lg:col-span-6">
        <FoodSectionHeading title={FOOD_VARIETY.h2} />
        <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mt-4 mb-5">
          {FOOD_VARIETY.intro}
        </p>
        <ul className="space-y-3">
          {FOOD_VARIETY.items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm sm:text-[15px] text-brand-charcoal">
              <EggFried className="w-4 h-4 text-brand-gold shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-6">
        <img
          src={FOOD_VARIETY.image}
          alt={FOOD_VARIETY.alt}
          className="w-full aspect-[16/9] object-cover rounded-2xl border border-brand-gold/20 shadow-[0_20px_50px_-24px_rgba(15,61,46,0.18)]"
        />
      </div>
    </section>
  );
}
