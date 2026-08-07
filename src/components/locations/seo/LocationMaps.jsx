import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';
import { CONTACT_MAPS } from '../../../data/contactUsData';
import { PHONE_DISPLAY, PHONE_TEL } from '../../../data/sitePages';


export default function LocationMaps({ data }) {
  const { maps } = data;

  return (
    <section className="mb-8 sm:mb-10 lg:mb-12 -mx-4 sm:-mx-6 lg:-mx-6 px-4 sm:px-6 lg:px-6 py-7 sm:py-10 lg:py-12 bg-brand-gold-pale/25 border-y border-brand-gold/15">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-start max-w-7xl mx-auto"
      >
        <div className="lg:col-span-5 space-y-3.5 sm:space-y-5 min-w-0">
          <span className="section-eyebrow block">
            {maps.eyebrow}
          </span>
          <h2 className="text-[1.65rem] sm:text-[2rem] lg:text-4xl font-display font-semibold text-brand-green tracking-tight leading-[1.2] sm:leading-[1.15]">
            {maps.h2}{' '}
            <span className="section-title-accent">{maps.h2Accent}</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {maps.body}
          </p>
          <address className="not-italic text-sm font-display font-semibold text-brand-green leading-relaxed">
            {maps.streetAddress}
            <br />
            {maps.locality}, {maps.region} {maps.postalCode}
          </address>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex min-h-11 items-center text-sm font-display font-semibold text-brand-burgundy hover:underline underline-offset-2"
          >
            {PHONE_DISPLAY}
          </a>
          <div>
            <Link
              to="/locations/madhapur/"
              className="inline-flex min-h-11 items-center text-sm font-display font-semibold text-brand-burgundy hover:underline underline-offset-2"
            >
              PG in Madhapur →
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {CONTACT_MAPS.map((property) => (
            <article
              key={property.name}
              className="bg-white rounded-xl border border-brand-gold/20 p-3 overflow-hidden min-w-0"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-display font-bold text-sm text-brand-green truncate min-w-0">
                  {property.name}
                </h3>
                <Link
                  to={property.href}
                  className="text-[11px] font-display font-semibold text-brand-burgundy hover:underline underline-offset-2 shrink-0 min-h-8 inline-flex items-center"
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
