import { FOOD_HOME } from '../../data/foodPageData';
import FoodSectionHeading from './FoodSectionHeading';

export default function FoodHome() {
  return (
    <section className="mb-14 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <div className="lg:col-span-6 order-2 lg:order-1">
        <FoodSectionHeading title={FOOD_HOME.h2} />
        <div className="space-y-4 mt-4">
          {FOOD_HOME.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="lg:col-span-6 order-1 lg:order-2">
        <img
          src={FOOD_HOME.image}
          alt={FOOD_HOME.alt}
          className="w-full aspect-[16/9] object-cover rounded-2xl border border-brand-gold/20 shadow-[0_20px_50px_-24px_rgba(15,61,46,0.18)]"
        />
      </div>
    </section>
  );
}
