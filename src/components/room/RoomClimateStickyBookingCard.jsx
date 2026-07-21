import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Phone, Wifi, Wind, UtensilsCrossed, Sparkles, ChevronUp } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '../../data/sitePages';

const EASE = [0.22, 1, 0.36, 1];
const FADE = { duration: 0.15, ease: 'easeOut' };
const COLLAPSE = { duration: 0.2, ease: 'easeOut' };

const TRUST_ICONS = {
  AC: Wind,
  Meals: UtensilsCrossed,
  WiFi: Wifi,
  Housekeeping: Sparkles,
};

const linkClass =
  'font-semibold text-brand-burgundy underline underline-offset-2 hover:text-brand-burgundy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold rounded-sm';

function formatPrice(n) {
  return n.toLocaleString('en-IN');
}

function SegmentedToggle({ options, value, onChange, ariaLabel }) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className="flex p-1 rounded-full bg-white border border-brand-gold/30"
    >
      {options.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(opt.value)}
            className={`flex-1 min-h-[36px] rounded-full px-3 text-xs font-display font-bold tracking-wide transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold ${
              active
                ? 'bg-brand-green text-white shadow-sm'
                : 'text-brand-charcoal-light hover:text-brand-green'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function MonthlyHint({ parts }) {
  return (
    <p className="mt-2.5 text-xs leading-relaxed text-brand-charcoal-light/80">
      {parts.map((part, index) =>
        typeof part === 'string' ? (
          part
        ) : (
          <Link key={`${part.to}-${index}`} to={part.to} className={linkClass}>
            {part.label}
          </Link>
        )
      )}
    </p>
  );
}

function BookingCardBody({ onBookVisit, rates, booking, compact = false }) {
  const reduceMotion = useReducedMotion();
  const [billing, setBilling] = useState('monthly');
  const [climate, setClimate] = useState('nonAc');

  const isMonthly = billing === 'monthly';
  const price = isMonthly
    ? climate === 'ac'
      ? rates.monthly.ac.price
      : rates.monthly.nonAc.price
    : rates.daily.price;
  const unit = isMonthly ? 'month' : 'day';
  const ctaLabel = isMonthly ? 'Book This Room' : 'Book a Daily Stay';
  const productLabel = isMonthly
    ? booking.monthlyProductLabels[climate]
    : rates.daily.productName;

  const fadeProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: FADE,
      };

  return (
    <>
      <SegmentedToggle
        ariaLabel="Billing cycle"
        value={billing}
        onChange={setBilling}
        options={[
          { value: 'monthly', label: 'Monthly' },
          { value: 'daily', label: 'Daily' },
        ]}
      />

      <AnimatePresence initial={false} mode="wait">
        {isMonthly && (
          <motion.div
            key="climate-block"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={COLLAPSE}
            className="overflow-hidden"
          >
            <div className="pt-4">
              <SegmentedToggle
                ariaLabel="Climate option"
                value={climate}
                onChange={setClimate}
                options={[
                  { value: 'nonAc', label: 'Non-AC' },
                  { value: 'ac', label: 'AC' },
                ]}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={`${billing}-${climate}-${price}`} {...fadeProps}>
            <p className="text-[11px] font-bold tracking-[0.18em] text-brand-gold uppercase mb-2">
              {productLabel}
            </p>
            <p className="font-display text-3xl sm:text-4xl font-semibold text-brand-green tabular-nums tracking-tight">
              ₹{formatPrice(price)}
              <span className="text-sm font-sans font-medium text-brand-charcoal-light ml-1.5">
                /{unit}
              </span>
            </p>

            {isMonthly ? (
              <>
                <p className="mt-2 text-[11px] leading-relaxed text-brand-charcoal-light/80">
                  {rates.monthly.maintenanceNote}
                </p>
                <MonthlyHint parts={booking.monthlyHint} />
              </>
            ) : (
              <p className="mt-2.5 text-xs leading-relaxed text-brand-charcoal-light/80">
                {rates.daily.note}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-3 text-sm font-medium text-brand-burgundy">
        {booking.availabilitySignal}
      </p>

      {!compact && (
        <ul className="mt-5 flex flex-wrap gap-3 border-t border-brand-gold/25 pt-4">
          {booking.trustItems.map((item) => {
            const Icon = TRUST_ICONS[item] ?? Sparkles;
            return (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-brand-charcoal-light"
              >
                <Icon className="w-3.5 h-3.5 text-brand-gold" aria-hidden="true" />
                {item}
              </li>
            );
          })}
        </ul>
      )}

      <div className={`flex flex-col gap-3 ${compact ? 'mt-3' : 'mt-6'}`}>
        {onBookVisit && (
          <button
            type="button"
            onClick={() => onBookVisit({ roomType: booking.roomType })}
            className="inline-flex items-center justify-center min-h-[44px] rounded-[10px] bg-brand-burgundy px-5 py-3 text-sm font-display font-bold text-white hover:bg-brand-burgundy-dark hover:scale-[1.02] transition-all duration-150 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
          >
            {ctaLabel} →
          </button>
        )}
        <a
          href={`tel:${PHONE_TEL}`}
          className="inline-flex items-center justify-center gap-2 min-h-[44px] text-sm font-display font-bold text-brand-charcoal hover:text-brand-burgundy transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold rounded-md"
        >
          <Phone className="w-4 h-4 text-brand-gold" aria-hidden="true" />
          {PHONE_DISPLAY}
        </a>
      </div>
    </>
  );
}

export default function RoomClimateStickyBookingCard({ onBookVisit, rates, booking }) {
  const reduceMotion = useReducedMotion();
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      <motion.aside
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: EASE, delay: 0.15 }}
        className="hidden lg:block"
        aria-label="Book this room"
      >
        <div className="rounded-[16px] border border-brand-gold/35 bg-brand-gold-pale p-6 shadow-[0_20px_50px_-28px_rgba(15,61,46,0.18)]">
          <BookingCardBody onBookVisit={onBookVisit} rates={rates} booking={booking} />
        </div>
      </motion.aside>

      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40">
        <AnimatePresence>
          {sheetOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-charcoal/40"
              onClick={() => setSheetOpen(false)}
              aria-hidden="true"
            />
          )}
        </AnimatePresence>

        <motion.div
          layout
          className="relative border-t border-brand-gold/30 bg-brand-gold-pale shadow-[0_-12px_40px_-16px_rgba(15,61,46,0.2)]"
        >
          <button
            type="button"
            onClick={() => setSheetOpen((v) => !v)}
            className="w-full flex items-center justify-between gap-3 px-4 py-3.5 min-h-[52px] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-gold"
            aria-expanded={sheetOpen}
          >
            <span className="font-display font-bold text-sm text-brand-green">
              Book a Room ·{' '}
              <span className="font-display tabular-nums">
                from ₹{formatPrice(rates.monthly.nonAc.price)}/mo
              </span>
            </span>
            <ChevronUp
              className={`w-5 h-5 text-brand-burgundy transition-transform ${
                sheetOpen ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </button>

          <AnimatePresence>
            {sheetOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-5 pt-1 border-t border-brand-gold/20">
                  <BookingCardBody
                    onBookVisit={onBookVisit}
                    rates={rates}
                    booking={booking}
                    compact
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}
