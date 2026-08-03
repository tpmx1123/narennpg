import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROPERTIES_LIST } from '../../data/propertiesPageData';

const EASE = [0.16, 1, 0.3, 1];

export default function PropertiesShowcase() {
  return (
    <section className="mb-14 lg:mb-16 space-y-6 sm:space-y-10 lg:space-y-16">
      {PROPERTIES_LIST.map((property, index) => {
        const reverse = index % 2 === 1;
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          `${property.name}, VIP Hills, Madhapur, Hyderabad`
        )}`;

        return (
          <motion.article
            key={property.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-10 items-center rounded-xl border border-brand-gold/20 bg-white p-3 shadow-sm lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
          >
            <div className={`min-w-0 lg:col-span-6 ${reverse ? 'lg:order-2' : ''}`}>
              <div className="rounded-lg lg:rounded-xl overflow-hidden border border-brand-gold/20 shadow-[0_20px_50px_-24px_rgba(15,61,46,0.22)] aspect-3/2 sm:aspect-4/3">
                <img
                  src={property.image.src}
                  alt={property.image.alt}
                  title={property.image.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div
              className={`min-w-0 pt-3 sm:pt-5 lg:pt-0 lg:col-span-6 ${
                reverse ? 'lg:order-1' : ''
              }`}
            >
              <h2 className="text-lg sm:text-2xl lg:text-4xl font-display font-bold text-brand-burgundy lg:text-brand-green tracking-tight leading-[1.15] mb-2 sm:mb-3 lg:mb-4">
                {property.h2}
              </h2>
              <p className="line-clamp-3 sm:line-clamp-none text-xs sm:text-[15px] text-brand-charcoal-light leading-relaxed mb-3 sm:mb-5">
                {property.body}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-1 sm:mb-4 lg:mb-6">
                <Link
                  to={property.href}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-display font-bold text-brand-burgundy hover:text-brand-burgundy-dark transition-colors group"
                >
                  {property.linkLabel}
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex lg:hidden items-center gap-1.5 text-xs sm:text-sm font-display font-bold text-brand-green hover:text-brand-burgundy transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  Open in Maps
                </a>
              </div>
              <div className="hidden lg:block w-full lg:h-48.75 rounded-xl overflow-hidden border border-brand-gold/15">
                <iframe
                  title={`Map of ${property.name}`}
                  src={property.embed}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full max-w-full h-full border-0"
                />
              </div>
            </div>
          </motion.article>
        );
      })}
    </section>
  );
}
