import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export default function PropertyAmenities({ data }) {
  return (
    <section className="mb-14 lg:mb-16 py-10 lg:py-14 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 bg-brand-cream-dark/60 border-y border-brand-gold/10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
      >
        <div className="lg:col-span-5">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            Amenities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15] mt-3 mb-4">
            Everything Included at {data.hero.h1}
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mb-6">
            One transparent monthly fee covers the essentials you use every day — rooms, meals, WiFi, cleaning and security.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            <Link
              to="/amenities/"
              className="inline-flex items-center gap-1.5 text-sm font-display font-bold text-brand-burgundy hover:underline"
            >
              Full amenities guide
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              to="/food/"
              className="inline-flex items-center gap-1.5 text-sm font-display font-bold text-brand-burgundy hover:underline"
            >
              Food menu
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
          {data.amenities.map((item) => (
            <li key={item} className="flex gap-3 items-start">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-burgundy-pale text-brand-burgundy">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
              </span>
              <span className="text-sm text-brand-charcoal leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
