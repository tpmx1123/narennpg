import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { CONTACT_ADDRESS, CONTACT_MAPS } from '../../data/contactUsData';



export default function ContactAddress() {
  const plain = CONTACT_ADDRESS.h2.replace(CONTACT_ADDRESS.h2Accent, '').trim();

  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
      >
        <div className="lg:col-span-5 space-y-5">
          <span className="section-eyebrow block mb-3">
            {CONTACT_ADDRESS.eyebrow}
          </span>
          <h2 className="section-title">
            {plain}{' '}
            <span className="section-title-accent">{CONTACT_ADDRESS.h2Accent}</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {CONTACT_ADDRESS.body}
          </p>
          <address className="not-italic text-sm font-display font-semibold text-brand-green leading-relaxed">
            {CONTACT_ADDRESS.streetAddress}
            <br />
            {CONTACT_ADDRESS.locality}, {CONTACT_ADDRESS.region} {CONTACT_ADDRESS.postalCode}
          </address>
          <Link
            to={CONTACT_ADDRESS.link.to}
            className="inline-flex text-sm font-display font-semibold text-brand-burgundy hover:underline underline-offset-2"
          >
            {CONTACT_ADDRESS.link.label} →
          </Link>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {CONTACT_MAPS.map((property) => (
            <article
              key={property.name}
              className="bg-brand-gold-pale/30 rounded-xl border border-brand-gold/20 p-3 overflow-hidden"
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
              <div className="w-full h-45 sm:h-50 lg:h-40 rounded-lg overflow-hidden border border-brand-gold/15 bg-white">
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
