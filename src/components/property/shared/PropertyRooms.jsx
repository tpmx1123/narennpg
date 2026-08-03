import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export default function PropertyRooms({ data }) {
  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
          Room Options at {data.hero.h1}
        </h2>
        <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mt-4 mb-8 max-w-2xl mx-auto">
          Explore sharing formats available across Narenn Living. Availability varies by property — we will help you match the right room.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {data.rooms.map((room) => (
            <Link
              key={room.href}
              to={room.href}
              className="flex items-center justify-between gap-3 rounded-xl border border-brand-charcoal/10 bg-white px-4 py-3.5 sm:px-5 sm:py-4 text-left hover:border-brand-burgundy/35 transition-colors group"
            >
              <span className="min-w-0 font-display font-bold text-sm text-brand-charcoal group-hover:text-brand-burgundy transition-colors">
                {room.label}
              </span>
              <ArrowUpRight className="w-4 h-4 text-brand-burgundy shrink-0" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
