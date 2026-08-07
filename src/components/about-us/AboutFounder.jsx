import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { ABOUT_FOUNDER } from '../../data/aboutUsData';

const LINK_CLASS = 'text-brand-burgundy font-semibold hover:underline underline-offset-2';

export default function AboutFounder() {
  const { links } = ABOUT_FOUNDER;

  return (
    <section className="mb-14 lg:mb-16 py-2">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center"
      >
        <div className="order-2 lg:order-1 lg:col-span-4 relative group w-full">
          <div className="absolute inset-0 sm:-inset-3 border border-brand-gold/25 rounded-2xl -z-10 transition-transform group-hover:scale-[1.02]" />
          <div className="h-72 sm:h-80 rounded-xl overflow-hidden shadow-[0_20px_50px_-24px_rgba(15,61,46,0.28)]">
            <img
              src={ABOUT_FOUNDER.image}
              alt={ABOUT_FOUNDER.alt}
              title={ABOUT_FOUNDER.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
          <div className="mt-5">
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-brand-green tracking-tight mb-1">
              {ABOUT_FOUNDER.name}
            </h3>
            <p className="section-eyebrow">
              {ABOUT_FOUNDER.role}
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-8 space-y-5 max-w-none">
          <span className="section-eyebrow block mb-3">
            {ABOUT_FOUNDER.eyebrow}
          </span>
          <h2 className="section-title">
            {ABOUT_FOUNDER.h2}{' '}
            <span className="section-title-accent">{ABOUT_FOUNDER.h2Accent}</span>
          </h2>

          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {ABOUT_FOUNDER.paragraphs[0]}
          </p>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            That belief became four carefully run{' '}
            <Link to={links[0].href} className={LINK_CLASS}>
              {links[0].label}
            </Link>{' '}
            in VIP Hills, Madhapur - with fully furnished{' '}
            <Link to={links[3].href} className={LINK_CLASS}>
              {links[3].label}
            </Link>
            , all-inclusive{' '}
            <Link to={links[1].href} className={LINK_CLASS}>
              {links[1].label}
            </Link>
            ,{' '}
            <Link to={links[2].href} className={LINK_CLASS}>
              {links[2].label}
            </Link>{' '}
            and the same standard of care for every resident.
          </p>

          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            Read the full vision in the{' '}
            <Link to={ABOUT_FOUNDER.ctaHref} className={LINK_CLASS}>
              Founder&apos;s Note
            </Link>
            , explore how we live day to day, or{' '}
            <Link to={links[4].href} className={LINK_CLASS}>
              {links[4].label}
            </Link>{' '}
            and see it for yourself.
          </p>

          <Link
            to={ABOUT_FOUNDER.ctaHref}
            className="inline-flex items-center gap-2 text-sm font-display font-bold text-brand-burgundy hover:text-brand-burgundy-dark transition-colors group"
          >
            {ABOUT_FOUNDER.ctaLabel}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
