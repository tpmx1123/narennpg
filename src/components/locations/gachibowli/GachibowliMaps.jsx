import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';
import { Phone } from 'lucide-react';
import { CONTACT_MAPS } from '../../../data/contactUsData';
import { GACHIBOWLI_MAPS } from '../../../data/gachibowliLocationData';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../../../data/sitePages';


export default function GachibowliMaps() {
  const plain = GACHIBOWLI_MAPS.h2.replace(GACHIBOWLI_MAPS.h2Accent, '').trim();

  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start"
      >
        <div className="lg:col-span-5 space-y-4 sm:space-y-5 min-w-0">
          <span className="section-eyebrow block mb-2.5 sm:mb-3">
            {GACHIBOWLI_MAPS.eyebrow}
          </span>
          <p className="section-title">
            {plain}{' '}
            <span className="section-title-accent">{GACHIBOWLI_MAPS.h2Accent}</span>
          </p>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {GACHIBOWLI_MAPS.body}
          </p>
          <address className="not-italic text-sm font-display font-semibold text-brand-green leading-relaxed">
            {GACHIBOWLI_MAPS.streetAddress}
            <br />
            {GACHIBOWLI_MAPS.locality}, {GACHIBOWLI_MAPS.region} {GACHIBOWLI_MAPS.postalCode}
          </address>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 text-sm font-display font-semibold text-brand-burgundy hover:underline underline-offset-2"
            >
              <Phone className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm font-display font-semibold text-brand-burgundy hover:underline underline-offset-2"
            >
              WhatsApp
            </a>
          </div>
          <Link
            to="/contact-us/"
            className="inline-flex text-sm font-display font-semibold text-brand-burgundy hover:underline underline-offset-2"
          >
            Contact us →
          </Link>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {CONTACT_MAPS.map((property) => (
            <article
              key={property.name}
              className="bg-brand-gold-pale/30 rounded-xl border border-brand-gold/20 p-3 overflow-hidden min-w-0"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-display font-bold text-sm text-brand-green truncate min-w-0">
                  {property.name}
                </h3>
                <Link
                  to={property.href}
                  className="text-[11px] font-display font-semibold text-brand-burgundy hover:underline underline-offset-2 shrink-0"
                >
                  View →
                </Link>
              </div>
              <div className="w-full h-[120px] sm:h-[160px] rounded-lg overflow-hidden border border-brand-gold/15 bg-white">
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
