import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CONTACT_MAPS } from '../../../data/contactUsData';
import { KONDAPUR_PROPERTIES } from '../../../data/kondapurLocationData';
import { PHONE_DISPLAY, PHONE_TEL } from '../../../data/sitePages';

const EASE = [0.16, 1, 0.3, 1];

export default function KondapurProperties() {
  return (
    <section className="mb-8 lg:mb-10 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 py-10 lg:py-12 bg-brand-gold-pale/25 border-y border-brand-gold/15">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-7xl mx-auto"
      >
        <div className="lg:col-span-5 space-y-5">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            {KONDAPUR_PROPERTIES.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            Our{' '}
            <span className="text-brand-gold italic font-medium">
              {KONDAPUR_PROPERTIES.h2Accent}
            </span>
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {KONDAPUR_PROPERTIES.body}
          </p>
          <address className="not-italic text-sm font-display font-semibold text-brand-green leading-relaxed">
            {KONDAPUR_PROPERTIES.streetAddress}
            <br />
            {KONDAPUR_PROPERTIES.locality}, {KONDAPUR_PROPERTIES.region}{' '}
            {KONDAPUR_PROPERTIES.postalCode}
          </address>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex text-sm font-display font-semibold text-brand-burgundy hover:underline underline-offset-2"
          >
            {PHONE_DISPLAY}
          </a>
          <div>
            <Link
              to="/locations/madhapur/"
              className="inline-flex text-sm font-display font-semibold text-brand-burgundy hover:underline underline-offset-2"
            >
              PG in Madhapur →
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {CONTACT_MAPS.map((property) => (
            <article
              key={property.name}
              className="bg-white rounded-xl border border-brand-gold/20 p-3 overflow-hidden"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-display font-bold text-sm text-brand-green truncate">
                  {property.name}
                </h3>
                <Link
                  to={property.href}
                  className="text-[11px] font-display font-semibold text-brand-burgundy hover:underline underline-offset-2 shrink-0"
                >
                  View →
                </Link>
              </div>
              <div className="w-full h-[140px] sm:h-[160px] rounded-lg overflow-hidden border border-brand-gold/15 bg-white">
                <iframe
                  title={`Map of ${property.name} in VIP Hills, Madhapur`}
                  src={property.embed}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
