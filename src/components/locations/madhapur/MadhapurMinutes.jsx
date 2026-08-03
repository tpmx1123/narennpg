import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MADHAPUR_MINUTES } from '../../../data/madhapurLocationData';

const EASE = [0.22, 1, 0.36, 1];

function PlaceTitle({ item, className }) {
  const titleClass =
    className ?? 'font-display font-bold text-base sm:text-lg text-brand-charcoal';
  if (item.to) {
    return (
      <h3 className={titleClass}>
        <Link to={item.to} className="hover:text-brand-burgundy transition-colors">
          {item.place}
        </Link>
      </h3>
    );
  }
  return <h3 className={titleClass}>{item.place}</h3>;
}

function TimelineItem({ item, index }) {
  const placeLeft = index % 2 === 0;
  const delay = 0.2 + index * 0.12;

  return (
    <li className="relative">
      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0, x: -14 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.4, ease: EASE, delay }}
        className="flex items-start gap-3.5 md:hidden"
      >
        <div className="relative z-10 w-10 h-10 shrink-0 rounded-full bg-brand-burgundy text-white flex items-center justify-center font-display font-bold text-[11px] shadow-[0_0_0_4px_#fff]">
          {item.short}
        </div>
        <div className="pt-1 min-w-0">
          <PlaceTitle item={item} className="font-display font-bold text-base text-brand-charcoal" />
          <p className="text-sm font-semibold text-brand-burgundy mt-0.5">{item.time}</p>
          {item.detail ? (
            <p className="text-sm text-brand-charcoal-light mt-0.5">{item.detail}</p>
          ) : null}
        </div>
      </motion.div>

      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: placeLeft ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: EASE, delay }}
          className="text-right"
        >
          {placeLeft ? (
            <>
              <PlaceTitle item={item} />
              {item.detail ? (
                <p className="text-sm text-brand-charcoal-light mt-0.5">{item.detail}</p>
              ) : null}
            </>
          ) : (
            <p className="text-brand-burgundy font-semibold text-sm sm:text-base">{item.time}</p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35, ease: EASE, delay: delay + 0.05 }}
          className="relative z-10 w-11 h-11 rounded-full bg-brand-burgundy text-white flex items-center justify-center font-display font-bold text-[11px] shadow-[0_0_0_4px_#fff]"
        >
          {item.short}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: placeLeft ? 24 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: EASE, delay: delay + 0.08 }}
          className="text-left"
        >
          {placeLeft ? (
            <p className="text-brand-burgundy font-semibold text-sm sm:text-base">{item.time}</p>
          ) : (
            <>
              <PlaceTitle item={item} />
              {item.detail ? (
                <p className="text-sm text-brand-charcoal-light mt-0.5">{item.detail}</p>
              ) : null}
            </>
          )}
        </motion.div>
      </div>
    </li>
  );
}

function DottedLine({ className }) {
  return (
    <div className={className} aria-hidden="true">
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        className="madhapur-dot-flow w-full h-full origin-top"
      />
    </div>
  );
}

export default function MadhapurMinutes() {
  return (
    <section className="mb-8 sm:mb-10 lg:mb-12 py-8 lg:py-12 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 bg-white border-y border-brand-gold/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15] text-center mb-8 lg:mb-9">
          {MADHAPUR_MINUTES.h2}
        </h2>

        <div className="relative">
          <div
            className="absolute left-5 top-5 bottom-5 w-0 border-l-2 border-dotted border-brand-gold/35 md:hidden"
            style={{
              maskImage: 'linear-gradient(to bottom, #000 0%, #000 calc(100% - 4px), transparent calc(100% - 4px))',
              WebkitMaskImage:
                'linear-gradient(to bottom, #000 0%, #000 calc(100% - 4px), transparent calc(100% - 4px))',
            }}
            aria-hidden="true"
          />
          <DottedLine className="absolute left-5 top-5 bottom-5 w-0.5 md:hidden z-1" />

          <div
            className="absolute left-1/2 top-[22px] bottom-[22px] w-0 -translate-x-1/2 border-l-2 border-dotted border-brand-gold/35 hidden md:block"
            style={{
              maskImage: 'linear-gradient(to bottom, #000 0%, #000 calc(100% - 4px), transparent calc(100% - 4px))',
              WebkitMaskImage:
                'linear-gradient(to bottom, #000 0%, #000 calc(100% - 4px), transparent calc(100% - 4px))',
            }}
            aria-hidden="true"
          />
          <DottedLine className="absolute left-1/2 top-[22px] bottom-[22px] w-0.5 -translate-x-1/2 hidden md:block z-1" />

          <ul className="relative z-2 space-y-4 md:space-y-5">
            {MADHAPUR_MINUTES.items.map((item, index) => (
              <TimelineItem key={item.place} item={item} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
