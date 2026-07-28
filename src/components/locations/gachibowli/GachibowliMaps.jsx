import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { CONTACT_MAPS } from '../../../data/contactUsData';
import { GACHIBOWLI_MAPS } from '../../../data/gachibowliLocationData';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../../../data/sitePages';

const EASE = [0.16, 1, 0.3, 1];

export default function GachibowliMaps() {
  const plain = GACHIBOWLI_MAPS.h2.replace(GACHIBOWLI_MAPS.h2Accent, '').trim();

  return (
    <section className="mb-8 lg:mb-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
      >
        <div className="lg:col-span-5 space-y-5">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            {GACHIBOWLI_MAPS.eyebrow}
          </span>
          <p className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            {plain}{' '}
            <span className="text-brand-gold italic font-medium">{GACHIBOWLI_MAPS.h2Accent}</span>
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
