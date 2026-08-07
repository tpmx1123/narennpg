import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';

const ROOM_FALLBACK =
  'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002153/ChatGPT-Image-Jun-30-2025-06_48_11-PM-1200x800_kjphte_b9o6aa.webp';

export default function LocationStandard({ data }) {
  const { standard } = data;
  const img = data.images.room ?? {
    src: ROOM_FALLBACK,
    fallback: ROOM_FALLBACK,
    alt: `Furnished AC room at Narenn Living — ${data.keyword}`,
    title: 'Narenn Living room',
  };
  const [src, setSrc] = useState(img.src);
  const body = standard.paragraphs.map((p) => (typeof p === 'string' ? p : p.text)).join(' ');
  const [roomsLink, amenitiesLink] =
    standard.links[0]?.to === '/rooms/'
      ? [standard.links[0], standard.links[1]]
      : [
          standard.links.find((l) => l.to.includes('rooms')) ?? standard.links[0],
          standard.links.find((l) => l.to.includes('amenities')) ?? standard.links[1],
        ];

  return (
    <section className="mb-8 sm:mb-10 lg:mb-12 -mx-4 sm:-mx-6 lg:-mx-6 bg-brand-gold-pale/30 border-y border-brand-gold/15 overflow-hidden">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-12"
      >
        <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[280px] lg:h-full order-1">
          <img loading="lazy"
            src={src}
            alt={img.alt}
            title={img.title}
            onError={() => setSrc(img.fallback ?? ROOM_FALLBACK)}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        <div className="lg:col-span-7 order-2 px-4 sm:px-8 lg:px-12 py-7 sm:py-10 lg:py-14 space-y-3.5 sm:space-y-5 min-w-0">
          <span className="section-eyebrow block">
            {standard.eyebrow}
          </span>
          <h2 className="section-title break-words">
            {standard.h2}{' '}
            <span className="section-title-accent">{standard.h2Accent}</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">{body}</p>
          {(roomsLink || amenitiesLink) && (
            <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
              Explore our{' '}
              {roomsLink ? (
                <Link
                  to={roomsLink.to}
                  className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
                >
                  {roomsLink.label}
                </Link>
              ) : null}
              {roomsLink && amenitiesLink ? ' and ' : null}
              {amenitiesLink ? (
                <Link
                  to={amenitiesLink.to}
                  className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
                >
                  {amenitiesLink.label}
                </Link>
              ) : null}
              .
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
}
