import { ChefHat, Coffee, CupSoda, UtensilsCrossed } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { FOOD_MEALS, FOOD_SNACKS } from '../../data/foodPageData';
import FoodSectionHeading from './FoodSectionHeading';

const MEAL_ICONS = {
  breakfast: Coffee,
  lunch: UtensilsCrossed,
  dinner: ChefHat,
};

export default function FoodMeals() {
  return (
    <section className="mb-10 sm:mb-14 lg:mb-16 py-8 sm:py-10 lg:py-12 -mx-4 sm:-mx-6 lg:-mx-6 px-4 sm:px-6 lg:px-6 bg-brand-gold-pale/35 border-y border-brand-gold/15">
      <FoodSectionHeading centered title="Three Meals, Every Single Day" />
      <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {FOOD_MEALS.map((meal) => {
          const Icon = MEAL_ICONS[meal.key] ?? UtensilsCrossed;
          return (
            <motion.article
              key={meal.key}
              {...scrollReveal}
              className="bg-white p-5 sm:p-6 lg:p-7 rounded-2xl border border-brand-gold/20 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 shrink-0 bg-brand-gold-pale rounded-xl flex items-center justify-center text-brand-burgundy">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="min-w-0 font-display font-bold text-lg text-brand-green">{meal.title}</h3>
              </div>
              <p className="text-sm text-brand-charcoal-light leading-relaxed">{meal.description}</p>
            </motion.article>
          );
        })}
      </div>

      <motion.aside
        {...scrollReveal}
        className="mt-5 sm:mt-6 max-w-2xl mx-auto bg-white/80 p-5 sm:p-6 rounded-2xl border border-dashed border-brand-gold/35"
      >
        <p className="section-eyebrow mb-2">
          {FOOD_SNACKS.eyebrow}
        </p>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 shrink-0 bg-brand-gold-pale rounded-xl flex items-center justify-center text-brand-burgundy">
            <CupSoda className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <h3 className="font-display font-bold text-lg text-brand-green">{FOOD_SNACKS.title}</h3>
            <p className="mt-1 text-sm text-brand-charcoal-light leading-relaxed">
              {FOOD_SNACKS.description}
            </p>
          </div>
        </div>
      </motion.aside>
    </section>
  );
}
