import { EggFried } from 'lucide-react';
import { FOOD_VARIETY } from '../../data/foodPageData';
import FoodSectionHeading from './FoodSectionHeading';

export default function FoodVariety() {
  return (
    <section className="mb-10 sm:mb-14 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
      <div className="order-2 lg:order-1 lg:col-span-6">
        <FoodSectionHeading title={FOOD_VARIETY.h2} />
        <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mt-4 mb-5">
          {FOOD_VARIETY.intro}
        </p>
        <ul className="space-y-3">
          {FOOD_VARIETY.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm sm:text-[15px] text-brand-charcoal">
              <EggFried className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="order-1 lg:order-2 lg:col-span-6">
        <img
          src={FOOD_VARIETY.image}
          alt={FOOD_VARIETY.alt}
          loading="lazy" className="w-full max-w-full aspect-video object-cover rounded-xl sm:rounded-2xl border border-brand-gold/20 shadow-[0_20px_50px_-24px_rgba(15,61,46,0.18)]"
        />
      </div>
    </section>
  );
}
