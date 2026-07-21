import { ChefHat, Coffee, CupSoda, UtensilsCrossed } from 'lucide-react';
import { motion } from 'framer-motion';
import { FOOD_MEALS } from '../../data/foodPageData';
import FoodSectionHeading from './FoodSectionHeading';

const EASE = [0.16, 1, 0.3, 1];
const MEAL_ICONS = {
  breakfast: Coffee,
  lunch: UtensilsCrossed,
  snacks: CupSoda,
  dinner: ChefHat,
};

export default function FoodMeals() {
  return (
    <section className="mb-14 lg:mb-16 py-10 lg:py-12 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 bg-brand-gold-pale/35 border-y border-brand-gold/15">
      <FoodSectionHeading centered title="Four Meals, Every Single Day" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {FOOD_MEALS.map((meal) => {
          const Icon = MEAL_ICONS[meal.key] ?? UtensilsCrossed;
          return (
            <motion.article
              key={meal.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-brand-gold/20 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 shrink-0 bg-brand-gold-pale rounded-xl flex items-center justify-center text-brand-burgundy">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-brand-green">{meal.title}</h3>
              </div>
              <p className="text-sm text-brand-charcoal-light leading-relaxed">{meal.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
