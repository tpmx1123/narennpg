import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../../data/homeData';
import { scrollReveal, staggerContainer, staggerItem } from '../../motion/motionPresets';

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <motion.div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16" {...scrollReveal}>
        <span className="section-eyebrow block mb-3">Verified Reviews</span>
        <p className="section-title">
          Residents Who Chose <span className="section-title-accent">Narenn</span>
        </p>
        <p className="text-brand-charcoal-light text-sm mt-4">
          Real Google reviews from residents across our co-living homes and Narenn&apos;s Crown
          residence for girls in Madhapur.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        {...staggerContainer}
      >
        {TESTIMONIALS.map((test) => (
          <motion.div
            key={test.name}
            {...staggerItem}
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
              <span className="font-display font-semibold text-sm text-brand-charcoal block leading-none mb-1.5">
                {test.name}
              </span>
              <span className="font-sans text-[10px] text-brand-charcoal-light block leading-none">
                {test.role}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
