import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';


export default function RoomsRent() {
  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <motion.div
        {...scrollReveal}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-8 items-end">
          <div className="lg:col-span-5">
            <span className="section-eyebrow block mb-3">
              Transparent Fee
            </span>
            <h2 className="section-title">
              What Your Rent Covers -{' '}
              <span className="section-title-accent">and What It Does Not</span>
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
              Rent covers the fully furnished AC room, three meals a day, high-speed WiFi, daily
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
