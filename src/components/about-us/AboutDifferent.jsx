import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { ABOUT_DIFFERENT_BULLETS } from '../../data/aboutUsData';

const EASE = [0.16, 1, 0.3, 1];
const EVENT_TAGS = ['Terrace nights', 'Festivals', 'Birthdays', 'Hangouts'];

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE, delay: 0.04 + i * 0.05 },
  }),
};

export default function AboutDifferent() {
  return (
    <section className="mb-14 lg:mb-16">
      {/* Different */}
      <div className="mb-8 lg:mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-8 lg:mb-10 items-end">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              
              <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase">
                Why Narenn
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[2.15rem] text-brand-green tracking-tight leading-[1.12]">
              What Makes Us{' '}
              <span className="text-brand-gold italic font-medium">Different</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed border-l-[3px] border-brand-burgundy pl-4 lg:pl-5">
              Plenty of operators run PGs in Madhapur. Very few run them well, year after year. What
              sets Narenn Living apart is consistency - the food is good every day, the rooms are
              clean every day, and the WiFi works every day. Here is what our residents count on:
            </p>
          </div>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-6 lg:gap-y-7 max-w-5xl"
        >
          {ABOUT_DIFFERENT_BULLETS.map((item, index) => (
            <motion.li
              key={item}
              custom={index}
              variants={itemVariants}
              className="flex gap-3.5 items-start"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 text-brand-burgundy">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
              </span>
              <p className="text-sm sm:text-[15px] text-brand-charcoal leading-relaxed">
                {item}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Community */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="relative overflow-hidden rounded-[18px] border border-brand-gold/20"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-green via-[#0c3226] to-brand-burgundy"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(251,189,69,0.22)_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(177,2,12,0.25)_0%,_transparent_45%)]"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/[0.04] to-transparent hidden lg:block"
          aria-hidden="true"
        />

        <div className="relative px-6 py-7 sm:px-9 sm:py-8 lg:px-11 lg:py-9">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            Belonging
          </span>

          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-[1.12] mb-4 max-w-3xl">
            A Community,{' '}
            <span className="text-brand-gold-light italic font-medium">Not Just Accommodation</span>
          </h2>

          <p className="text-sm sm:text-[15px] text-white/80 leading-relaxed max-w-3xl mb-5">
            The friendships people make at Narenn Living are often what they remember most. We
            actively build community through terrace gatherings, festival celebrations, birthday
            parties and casual get-togethers that turn strangers into friends. For anyone new to
            Hyderabad, that ready-made circle can be the difference between feeling lost and feeling
            at home.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
            <ul className="flex flex-wrap gap-2 flex-1">
              {EVENT_TAGS.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-brand-cream/90 backdrop-blur-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <Link
              to="/events/"
              className="inline-flex items-center gap-1.5 self-start sm:self-auto shrink-0 rounded-[8px] bg-brand-gold px-3.5 py-2 text-xs font-display font-bold text-brand-charcoal hover:bg-brand-gold-light transition-colors group"
            >
              community events
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
