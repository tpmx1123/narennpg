import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';
import { getOtherProperties } from '../../../data/propertySharedData';


export default function PropertyOthers({ currentId }) {
  const others = getOtherProperties(currentId);

  return (
    <section className="mb-10 sm:mb-14 lg:mb-16 pt-4 sm:pt-5 lg:pt-6 pb-10 sm:pb-12 lg:pb-16 -mx-4 sm:-mx-6 lg:-mx-6 px-4 sm:px-6 lg:px-6 bg-[#F7F7F5]">
      <motion.div
        {...scrollReveal}
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-8">
          <h2 className="section-title">
            Explore Other Properties
          </h2>
          <Link
            to="/properties/"
            className="inline-flex items-center gap-1 text-sm font-display font-bold text-brand-burgundy hover:text-brand-burgundy-dark transition-colors"
          >
            View all
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {others.map((property) => (
            <Link key={property.id} to={property.href} className="group block">
              <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-4">
                <img
                  src={property.image.src}
                  alt={property.image.alt}
                  title={property.image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-0.5">
                <h3 className="min-w-0 font-display font-bold text-base text-brand-charcoal group-hover:text-brand-burgundy transition-colors">
                  {property.name}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-brand-charcoal/70 group-hover:text-brand-burgundy shrink-0 transition-colors" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
