import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IconSlideButton from '../ui/IconSlideButton';
import { Img } from '../../utils/media';

const EASE_OUT = [0.16, 1, 0.3, 1];

const SHARING_TIERS = [
  {
    id: '1',
    tab: '1 Sharing',
    occupancy: 'Single Occupancy',
    titleSuffix: '(1 Sharing)',
    description:
      'Designed for privacy and personal comfort. A peaceful space to focus, relax, and unwind.',
    image: Img.content(
      'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/M_P00016_1_irxbq9.jpg'
    ),
    alt: 'Fully furnished AC private room with bed, wardrobe and AC at Narenn Living Madhapur',
    features: [
      { label: 'Spacious Room', detail: 'Your own dedicated living space.' },
      { label: 'Comfortable Bed', detail: 'Ortho mattress for a restful sleep.' },
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
    image: Img.content(
      'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/M_P00210_2_tgzf4c.jpg'
    ),
    alt: 'Double sharing furnished room at Narenn Living Madhapur co-living',
    features: [
      { label: 'Twin Beds', detail: 'Personal beds with privacy-friendly layout.' },
      { label: 'Wardrobes', detail: 'Dual wardrobe setup for each resident.' },
      { label: 'High-Speed WiFi', detail: 'Strong fibre for work, study and streaming.' },
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
    image: Img.content(
      'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/M_P00196_1_hkg9hw.jpg'
    ),
    alt: 'Triple sharing room at Narenn Living PG in Madhapur',
    features: [
      { label: 'Three Beds', detail: 'Custom beds with personal storage drawers.' },
      { label: 'Wardrobe', detail: 'Modular wardrobe for each resident.' },
      { label: 'High-Speed WiFi', detail: 'Strong fibre for work, study and streaming.' },
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
    image: Img.content(
      'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/M_P00064_1_xrjutj.jpg'
    ),
    alt: 'Four sharing co-living room at Narenn Living Hyderabad',
    features: [
      { label: 'Four Beds', detail: 'Efficient layout with personal sleep zones.' },
      { label: 'Secure Storage', detail: 'Individual lockers and wardrobe space.' },
      { label: 'High-Speed WiFi', detail: 'Strong fibre for work, study and streaming.' },
      { label: 'Climate Control', detail: 'AC and Non-AC options available.' },
    ],
  },
];

export default function Pricing({ onBookVisit }) {
  const [activeId, setActiveId] = useState('4');
  const active = SHARING_TIERS.find((tier) => tier.id === activeId) ?? SHARING_TIERS[3];

  return (
    <section id="pricing" className="py-10 sm:py-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="section-eyebrow block mb-3">Sharing Types</span>
          <h2 className="section-title mb-4 sm:mb-5">
            Transparent Pricing,{' '}
            <span className="section-title-accent">No Surprises.</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            We publish a single monthly figure and we honour it. Your rent covers the room, AC, three
            meals a day, WiFi, daily housekeeping, RO water, hot water, power backup, security and
            every community event we run. Electricity is shared transparently as per actual usage,
            and that is the only variable.
          </p>
        </div>

        <div
          className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-x-4 sm:gap-x-12 gap-y-1 sm:gap-y-2 border-b border-brand-gold/20 mb-8 sm:mb-10"
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
                className={`relative min-h-11 pb-3 text-[10px] sm:text-xs font-display font-bold uppercase tracking-[0.12em] sm:tracking-[0.14em] transition-colors ${
                  isActive
                    ? 'text-brand-green'
                    : 'text-brand-charcoal-light hover:text-brand-charcoal'
                }`}
              >
                {tier.tab}
                {isActive ? (
                  <motion.span
                    layoutId="pricing-tab-underline"
                    className="absolute left-0 right-0 -bottom-px h-0.75 bg-brand-gold"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            role="tabpanel"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="rounded-2xl border border-brand-gold/15 bg-brand-gold-pale/25 shadow-[0_20px_50px_rgba(15,61,46,0.14),0_8px_24px_rgba(15,61,46,0.08)] p-4 sm:p-6 lg:p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
              <div className="rounded-xl overflow-hidden border border-brand-gold/10 min-h-48 sm:min-h-72 lg:min-h-0">
                <img
                  src={active.image}
                  alt={active.alt}
                  title={`${active.occupancy} ${active.titleSuffix}`}
                  loading="lazy" className="w-full h-full object-cover aspect-4/3 lg:aspect-auto lg:h-full min-h-48 sm:min-h-60"
                />
              </div>

              <div className="flex flex-col justify-between py-1 sm:py-2">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight leading-snug mb-3">
                    <span className="text-brand-burgundy">{active.occupancy}</span>{' '}
                    <span className="text-brand-green">{active.titleSuffix}</span>
                  </h3>
                  <p className="text-sm text-brand-charcoal-light leading-relaxed mb-6">
                    {active.description}
                  </p>

                  <ul className="space-y-3">
                    {active.features.map((feature) => (
                      <li key={feature.label} className="flex gap-3 text-sm">
                        <span
                          className="shrink-0 w-2 h-2 mt-1.5 bg-brand-gold"
                          aria-hidden="true"
                        />
                        <span className="text-brand-charcoal-light">
                          <strong className="font-bold text-brand-charcoal">
                            {feature.label}:
                          </strong>{' '}
                          {feature.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mt-8 pt-6 border-t border-brand-gold/20">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-charcoal-light block mb-1">
                      All-inclusive stay
                    </span>
                    <p className="font-display font-bold text-lg text-brand-green tracking-tight">
                      Enquire for current rates
                    </p>
                    <p className="text-[11px] text-brand-charcoal-light mt-1">
                      Meals, WiFi & housekeeping included · AC & Non-AC available
                    </p>
                  </div>

                  <IconSlideButton
                    onClick={() => onBookVisit?.({ roomType: active.tab })}
                    radius={10}
                    bgColor="#B1020C"
                    bgHoverColor="#8A0109"
                    fillColor="#D89B22"
                    textColor="#ffffff"
                    textHoverColor="#1A1A1A"
                    iconColor="#ffffff"
                    iconHoverColor="#1A1A1A"
                    className="w-full sm:w-auto"
                  >
                    Enquire Now
                  </IconSlideButton>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
