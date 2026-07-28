import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export default function RoomsRent() {
  return (
    <section className="mb-14 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-8 items-end">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
              Transparent Fee
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
              What Your Rent Covers -{' '}
              <span className="text-brand-gold italic font-medium">and What It Does Not</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-stretch gap-5 lg:gap-6">
            <div
              className="hidden sm:block w-[3px] shrink-0 bg-brand-burgundy rounded-full"
              aria-hidden="true"
            />
            <p className="font-display font-bold text-sm sm:text-base text-brand-charcoal uppercase tracking-wide leading-snug">
              One monthly figure. One written agreement. No surprise invoices at exit.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="rounded-[12px] border border-brand-gold/25 bg-brand-green-pale/50 p-6 sm:p-7">
            <h3 className="font-display font-bold text-sm text-brand-green uppercase tracking-wide mb-3">
              Covered in rent
            </h3>
            <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
              Rent covers the fully furnished AC room, four meals a day, high-speed WiFi, daily
              housekeeping and weekly deep clean, RO drinking water, 24x7 hot water, power backup,
              lift access, security and every community event we run through the year.
            </p>
          </div>
          <div className="rounded-[12px] border border-brand-gold/25 bg-[#FFF4E8] p-6 sm:p-7">
            <h3 className="font-display font-bold text-sm text-brand-burgundy uppercase tracking-wide mb-3">
              Outside rent
            </h3>
            <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
              Electricity is billed transparently against actual usage - that is the only variable
              line. The refundable deposit is modest and governed by a written agreement stating the
              notice period and deduction policy up front. There is no brokerage, no furniture cost,
              no internet installation charge and no exit painting deduction.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
