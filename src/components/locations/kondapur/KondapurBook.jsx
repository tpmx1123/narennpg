import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContactText from '../../ui/ContactText';
import IconSlideButton from '../../ui/IconSlideButton';
import { KONDAPUR_BOOK, KONDAPUR_IMAGES } from '../../../data/kondapurLocationData';
import { WHATSAPP_URL } from '../../../data/sitePages';

const EASE = [0.16, 1, 0.3, 1];

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function KondapurBook({ onBookVisit }) {
  const bg = KONDAPUR_IMAGES.commute;
  const [src, setSrc] = useState(bg.src);

  return (
    <section className="relative mb-8 sm:mb-10 lg:mb-12 -mx-4 sm:-mx-6 lg:-mx-10 overflow-hidden">
      <img loading="lazy"
        src={src}
        alt=""
        aria-hidden="true"
        onError={() => setSrc(bg.fallback)}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-brand-charcoal/70" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-linear-to-b from-brand-green/40 via-brand-charcoal/50 to-brand-charcoal/75"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-14"
      >
        <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 sm:mb-5">
          {KONDAPUR_BOOK.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-white tracking-tight leading-[1.15] mb-4 sm:mb-5">
          {KONDAPUR_BOOK.h2}
        </h2>
        <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-xl mx-auto">
          <ContactText linkClassName="text-brand-gold font-semibold hover:underline underline-offset-2">
            {KONDAPUR_BOOK.body}
          </ContactText>{' '}
          <Link
            to="/contact-us/"
            className="text-brand-gold font-semibold hover:underline underline-offset-2"
          >
            book a visit
          </Link>
          .
        </p>

        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {onBookVisit ? (
            <IconSlideButton onClick={() => onBookVisit()}>Book a Visit</IconSlideButton>
          ) : (
            <IconSlideButton to="/contact-us/">Book a Visit</IconSlideButton>
          )}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Narenn Living"
            className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-white/30 text-[#25D366] bg-white/95 hover:bg-white transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
