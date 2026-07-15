import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const EASE_OUT = [0.16, 1, 0.3, 1];

const FACILITIES = [
  {
    label: 'Four meals a day',
    icon: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784112855/dinner_gafddd.png',
  },
  {
    label: 'Daily house keeping cleaning',
    icon: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784013213/cleaning-lady_xf09yy.png',
  },
  {
    label: 'Weekly once linen changing',
    icon: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784112996/bed-sheets_le613g.png',
  },
  {
    label: 'Terrace garden',
    icon: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784112854/lounge_txg9nz.png',
  },
];

const SHARING_TIERS = [
  { id: '1', num: '01', name: '1 Sharing', subtitle: 'Single Suite', price: 34000, image: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp', desc: 'An exclusive premium domain crafted for absolute focus, deep privacy, and high-productivity living layouts.', alt: 'Fully furnished AC room with bed,wardrobe and study desk at Narenn Living Madhapur' },
  { id: '2', num: '02', name: '2 Sharing', subtitle: 'Dual Studio', price: 24000, image: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/ChatGPT-Image-Jun-30-2025-06_48_11-PM-1200x800_kjphte.webp', desc: 'Perfect spatial calibration combining interactive collaboration zones with high-end personal comfort anchors.', alt: 'Double sharing furnished room at Narenn Living Madhapur co-living' },
  { id: '3', num: '03', name: '3 Sharing', subtitle: 'Triple Pad', price: 16000, image: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121459/Narenn-Elite-3-1200x750_ndmzod.webp', desc: 'Dynamic coliving tier engineered to maximize community interaction dynamics, utility layouts, and cost balance.', alt: 'Triple sharing room at Narenn Living PG in Madhapur' },
  { id: '4', num: '04', name: '4 Sharing', subtitle: 'Quad Cluster', price: 12000, image: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121459/Narenn-Elite-6-1200x750_h0uzb7.webp', desc: 'Vibrant residential footprint designed strictly around fluid social routines and optimized group convenience.', alt: 'Four sharing co-living room at Narenn Living Hyderabad' }
];

export default function Pricing({ onBookVisit }) {
  return (
    <section id="pricing" className="py-14 bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Header Component — Completely Flush With NO Padding */}
        <div className="mb-10 px-8">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#FBBD45] uppercase block mb-3">
            Sharing Types
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            Transparent Pricing,{' '}
            <span className="text-[#FBBD45] italic font-medium">No Surprises.</span>
          </h2>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            <p className="text-sm text-brand-charcoal leading-relaxed border-l-[3px] border-brand-burgundy pl-5">
              We publish a single monthly figure and we honour it. Your rent covers the room, the AC,
              four meals a day, WiFi, daily housekeeping, RO water, hot water, power backup, security
              and every community event we run. Electricity is shared transparently as per actual usage,
              and that is the only variable.
            </p>
            <p className="text-sm text-brand-charcoal leading-relaxed border-l-[3px] border-brand-gold pl-5">
              Deposits are modest and refundable, governed by a written agreement that spells out the
              notice period and the deduction policy before you pay a rupee. No brokerage. No lock-in
              traps. No painting charges invented at exit. If a PG cannot tell you all of this in writing
              on day one, that is your answer about how month six will go.
            </p>
          </div>
        </div>

        {/* SPECIFICATION MATRIX GRID — With Strong Left & Right Padding */}
        <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-150 border-t border-b border-gray-150 py-8 px-6 md:px-12 lg:px-16">
          {SHARING_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: idx * 0.08 }}
              className="flex flex-col justify-between py-8 lg:py-2 lg:px-8 first:pl-0 last:pr-0"
            >
              <div>
                <h3 className="font-display font-bold text-xl text-brand-green tracking-tight mb-1">
                  {tier.name}
                </h3>
                <p className="mb-3">
                  <span className="font-display font-bold text-2xl text-brand-burgundy tracking-tight">
                    ₹{tier.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] font-semibold text-brand-charcoal-light ml-1">
                    / month
                  </span>
                </p>

                {/* Compact Borderless Content Image */}
                <div className="h-36 w-full rounded-2xl overflow-hidden mb-3 relative group">
                  <img 
                    src={tier.image} 
                    alt={tier.alt || tier.name}
                    title="Furnished AC room in Madhapur"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                
                <p className="text-xs leading-relaxed text-brand-charcoal-light/90 font-medium mb-3">
                  {tier.desc}
                </p>

                {/* Stay options — monthly / daily · AC & Non-AC */}
                <div className="mb-3">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#FBBD45] uppercase block mb-1.5">
                    Stay Options
                  </span>
                  <div className="flex flex-wrap gap-1.5 mb-1.5">
                    <span className="inline-flex rounded-full border border-brand-charcoal/10 bg-gray-50 px-2.5 py-0.5 text-[11px] font-bold text-brand-charcoal">
                      Monthly
                    </span>
                    <span className="inline-flex rounded-full border border-brand-charcoal/10 bg-gray-50 px-2.5 py-0.5 text-[11px] font-bold text-brand-charcoal">
                      Daily
                    </span>
                  </div>
                  <p className="text-[11px] font-medium text-brand-charcoal-light leading-relaxed">
                    AC and Non-AC rooms are available
                  </p>
                </div>

                {/* Core Utilities Mapping */}
                <div className="mb-3">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#FBBD45] uppercase block mb-1.5">
                    Included Services
                  </span>
                  <div className="space-y-1">
                    {FACILITIES.map((facility) => (
                      <div key={facility.label} className="flex items-center gap-2 text-brand-charcoal">
                        <div className="w-6 h-6 rounded-md bg-gray-50 flex items-center justify-center shrink-0 overflow-hidden">
                          <img
                            src={facility.icon}
                            alt=""
                            aria-hidden="true"
                            className="w-4 h-4 object-contain"
                          />
                        </div>
                        <span className="font-semibold text-[11px] tracking-tight text-brand-charcoal/90 capitalize truncate">
                          {facility.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button CTA */}
              <div className="pt-2">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => onBookVisit({ roomType: tier.name })}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#B1020C] hover:bg-[#B1020C]/90 text-white font-display font-bold text-xs tracking-widest uppercase shadow-md transition-all shrink-0"
                >
                  Enquire Rates
                  <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                </motion.button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* System Footnote Block Alignment */}
        <div className="mt-4 flex justify-end items-center w-full px-6 sm:px-10 pointer-events-none select-none">
          <span className="text-[10px] font-bold tracking-wide text-brand-charcoal-light/35">
            * Electricity bill separate
          </span>
        </div>

      </div>
    </section>
  );
}