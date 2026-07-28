import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROPERTIES_LIST } from '../../data/propertiesPageData';

const EASE = [0.16, 1, 0.3, 1];

export default function PropertiesShowcase() {
  return (
    <section className="mb-14 lg:mb-16 space-y-12 lg:space-y-16">
      {PROPERTIES_LIST.map((property, index) => {
        const reverse = index % 2 === 1;

        return (
          <motion.article
            key={property.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
          >
            <div className={`lg:col-span-6 ${reverse ? 'lg:order-2' : ''}`}>
              <div className="rounded-xl overflow-hidden border border-brand-gold/20 shadow-[0_20px_50px_-24px_rgba(15,61,46,0.22)] aspect-[4/3]">
                <img
                  src={property.image.src}
                  alt={property.image.alt}
                  title={property.image.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className={`lg:col-span-6 ${reverse ? 'lg:order-1' : ''}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15] mb-4">
                {property.h2}
              </h2>
              <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mb-5">
                {property.body}
              </p>
              <Link
                to={property.href}
                className="inline-flex items-center gap-1.5 text-sm font-display font-bold text-brand-burgundy hover:text-brand-burgundy-dark transition-colors group mb-6"
              >
                {property.linkLabel}
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <div className="w-full h-[180px] sm:h-[195px] rounded-xl overflow-hidden border border-brand-gold/15">
                <iframe
                  title={`Map of ${property.name}`}
                  src={property.embed}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </motion.article>
        );
      })}
    </section>
  );
}
