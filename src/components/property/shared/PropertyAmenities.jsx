import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';


export default function PropertyAmenities({ data }) {
  return (
    <section className="mb-10 sm:mb-14 lg:mb-16 py-8 sm:py-10 lg:py-14 -mx-4 sm:-mx-6 lg:-mx-6 px-4 sm:px-6 lg:px-6 bg-brand-cream-dark/60 border-y border-brand-gold/10">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
      >
        <div className="lg:col-span-5">
          <span className="section-eyebrow block mb-3">
            Amenities
          </span>
          <h2 className="section-title mt-3 mb-4">
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

        <ul className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3.5">
          {data.amenities.map((item) => (
            <li key={item} className="flex gap-3 items-start">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-burgundy-pale text-brand-burgundy">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
              </span>
              <span className="min-w-0 text-sm text-brand-charcoal leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
