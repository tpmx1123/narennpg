import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IconSlideButton from '../ui/IconSlideButton';

const EASE_OUT = [0.16, 1, 0.3, 1];

const SHARING_TIERS = [
  {
    id: '1',
    tab: '1 Sharing',
    occupancy: 'Single Occupancy',
    titleSuffix: '(1 Sharing)',
    description:
      'Designed for privacy and personal comfort. A peaceful space to focus, relax, and unwind.',
    price: 34000,
    image:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp',
    alt: 'Fully furnished AC private room with bed, wardrobe and study desk at Narenn Living Madhapur',
    features: [
      { label: 'Spacious Room', detail: 'Your own dedicated living space.' },
      { label: 'Comfortable Bed', detail: 'Premium mattress for a restful sleep.' },
      { label: 'In-Room Entertainment', detail: 'Television and mini-fridge.' },
      { label: 'Climate Control', detail: 'Fan, with AC option available.' },
    ],
  },
  {
    id: '2',
    tab: '2 Sharing',
    occupancy: 'Twin Occupancy',
    titleSuffix: '(2 Sharing)',
    description:
      'Balanced living with personal space and friendly companionship — ideal for friends or classmates.',
    price: 24000,
    image:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/ChatGPT-Image-Jun-30-2025-06_48_11-PM-1200x800_kjphte.webp',
    alt: 'Double sharing furnished room at Narenn Living Madhapur co-living',
    features: [
      { label: 'Twin Beds', detail: 'Personal beds with privacy-friendly layout.' },
      { label: 'Study Desks', detail: 'Independent desks for work and study.' },
      { label: 'Storage', detail: 'Dual wardrobe setup for each resident.' },
      { label: 'Climate Control', detail: 'AC and Non-AC options available.' },
    ],
  },
  {
    id: '3',
    tab: '3 Sharing',
    occupancy: 'Triple Occupancy',
    titleSuffix: '(3 Sharing)',
    description:
      'Comfortable shared living designed for collaboration, cost efficiency, and everyday camaraderie.',
    price: 16000,
    image:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121459/Narenn-Elite-3-1200x750_ndmzod.webp',
    alt: 'Triple sharing room at Narenn Living PG in Madhapur',
    features: [
      { label: 'Three Beds', detail: 'Custom beds with personal storage drawers.' },
      { label: 'Study Space', detail: 'Individual study compartments.' },
      { label: 'Wardrobe', detail: 'Modular wardrobe for each resident.' },
      { label: 'Climate Control', detail: 'AC and Non-AC options available.' },
    ],
  },
  {
    id: '4',
    tab: '4 Sharing',
    occupancy: 'Quad Occupancy',
    titleSuffix: '(4 Sharing)',
    description:
      'A vibrant, budget-friendly footprint built around group routines and shared convenience.',
    price: 12000,
    image:
      'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121459/Narenn-Elite-6-1200x750_h0uzb7.webp',
    alt: 'Four sharing co-living room at Narenn Living Hyderabad',
    features: [
      { label: 'Four Beds', detail: 'Efficient layout with personal sleep zones.' },
      { label: 'Study Tables', detail: 'Dedicated desks and chairs for each bed.' },
      { label: 'Secure Storage', detail: 'Individual lockers and wardrobe space.' },
      { label: 'Climate Control', detail: 'AC and Non-AC options available.' },
    ],
  },
];

export default function Pricing({ onBookVisit }) {
  const [activeId, setActiveId] = useState('4');
  const active = SHARING_TIERS.find((tier) => tier.id === activeId) ?? SHARING_TIERS[3];

  return (
    <section id="pricing" className="py-14 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-10">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            Sharing Types
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            Transparent Pricing,{' '}
            <span className="text-brand-gold italic font-medium">No Surprises.</span>
          </h2>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            <p className="text-sm text-brand-charcoal leading-relaxed border-l-[3px] border-brand-burgundy pl-5">
              We publish a single monthly figure and we honour it. Your rent covers the room, the AC,
              four meals a day, WiFi, daily housekeeping, RO water, hot water, power backup, security
              and every community event we run. Electricity is shared transparently as per actual
              usage, and that is the only variable.
            </p>
            <p className="text-sm text-brand-charcoal leading-relaxed border-l-[3px] border-brand-gold pl-5">
              Deposits are modest and refundable, governed by a written agreement that spells out
              the notice period and the deduction policy before you pay a rupee. No brokerage. No
              lock-in traps. No painting charges invented at exit.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div
          className="flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-2 border-b border-brand-charcoal/10 mb-8 sm:mb-10"
          role="tablist"
          aria-label="Sharing types"
        >
          {SHARING_TIERS.map((tier) => {
            const isActive = tier.id === activeId;
            return (
              <button
                key={tier.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(tier.id)}
                className={`relative pb-3 text-[11px] sm:text-xs font-display font-bold uppercase tracking-[0.14em] transition-colors ${
                  isActive
                    ? 'text-brand-charcoal'
                    : 'text-brand-charcoal-light hover:text-brand-charcoal'
                }`}
              >
                {tier.tab}
                {isActive && (
                  <motion.span
                    layoutId="pricing-tab-underline"
                    className="absolute left-0 right-0 -bottom-px h-[3px] bg-brand-gold"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active tier panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            role="tabpanel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Image — distinctive bottom-right radius */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden rounded-br-[4.5rem] sm:rounded-br-[5.5rem]">
                <img
                  src={active.image}
                  alt={active.alt}
                  title={`${active.occupancy} ${active.titleSuffix}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-7 flex flex-col">
              <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight leading-snug mb-3">
                <span className="text-brand-burgundy">{active.occupancy}</span>{' '}
                <span className="text-brand-green">{active.titleSuffix}</span>
              </h3>
              <p className="text-sm text-brand-charcoal-light leading-relaxed mb-6 max-w-xl">
                {active.description}
              </p>

              <ul className="space-y-2.5 mb-8 max-w-xl">
                {active.features.map((feature) => (
                  <li key={feature.label} className="flex gap-2.5 text-sm text-brand-charcoal">
                    <span className="text-brand-burgundy font-bold shrink-0 mt-0.5" aria-hidden="true">
                      •
                    </span>
                    <span>
                      <strong className="font-bold text-brand-charcoal">{feature.label}:</strong>{' '}
                      <span className="text-brand-charcoal-light font-medium">{feature.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 pt-2 border-t border-brand-gold/20">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-charcoal-light block mb-1">
                    Starting From
                  </span>
                  <p className="font-display font-bold text-2xl sm:text-3xl text-brand-charcoal tracking-tight">
                    ₹{active.price.toLocaleString('en-IN')}{' '}
                    <span className="text-sm font-semibold text-brand-charcoal-light">/ month</span>
                  </p>
                  <p className="text-[11px] text-brand-charcoal-light mt-1">
                    * Electricity bill separate · AC & Non-AC available
                  </p>
                </div>

                <IconSlideButton
                  onClick={() => onBookVisit({ roomType: active.tab })}
                  radius={10}
                  bgColor="#B1020C"
                  bgHoverColor="#8A0109"
                  fillColor="#FBBD45"
                  textColor="#ffffff"
                  textHoverColor="#1A1A1A"
                  iconColor="#ffffff"
                  iconHoverColor="#1A1A1A"
                >
                  Enquire Now
                </IconSlideButton>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
