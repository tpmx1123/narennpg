import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export default function RoomsTransparent() {
  return (
    <section className="mb-14 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
      >
        <div className="lg:col-span-5 lg:-mt-1">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            Pricing Clarity
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            Everything Included,{' '}
            <span className="text-brand-gold italic font-medium">Nothing Hidden</span>
          </h2>
        </div>

        <div className="lg:col-span-7 flex items-stretch gap-5 lg:gap-6">
          <div
            className="hidden sm:block w-[3px] shrink-0 bg-brand-burgundy rounded-full"
            aria-hidden="true"
          />
          <div className="space-y-4 min-w-0">
            <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
              The biggest frustration with renting a flat is the hidden cost - furniture, appliances,
              internet, cook, maid, deposits and brokerage all add up fast. At Narenn Living, one
              transparent monthly fee covers it all. Compare our all-inclusive{' '}
              <Link
                to="/amenities/"
                className="font-semibold text-brand-burgundy hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold rounded-sm"
              >
                amenities
              </Link>{' '}
              and see how much simpler and often cheaper managed co-living can be. And with our{' '}
              <Link
                to="/food/"
                className="font-semibold text-brand-burgundy hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold rounded-sm"
              >
                homely food menu
              </Link>
              , you will never worry about cooking or ordering in.
            </p>
            <Link
              to="/amenities/"
              className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-[0.12em] text-brand-burgundy hover:text-brand-burgundy-dark transition-colors group"
            >
              Amenities included
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
