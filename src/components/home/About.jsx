import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { HOME_SEO } from '../../data/seoHome';
import IconSlideButton from '../ui/IconSlideButton';
import { PHONE_DISPLAY, PHONE_TEL } from '../../data/sitePages';
import { Cld } from '../../utils/cloudinary';
import { scrollReveal } from '../../motion/motionPresets';

const ABOUT_IMAGE = Cld.heroStill('v1786002162/M_P00337_1_xcyssw_hxkokm.jpg');

export default function About() {
  const navigate = useNavigate();
  return (
    <section
      id="about"
      className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-4 items-center bg-white"
    >
      <motion.div
        className="hidden lg:flex lg:col-span-5 items-center justify-center self-center"
        {...scrollReveal}
      >
        <div className="relative w-full max-w-full sm:max-w-90 lg:max-w-100 h-70 sm:h-105 lg:h-115 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl group">
          <img
            src={ABOUT_IMAGE}
            alt="Premium co-living building interior in Madhapur, Hyderabad — Narenn Living VIP Hills"
            title="Narenn Living co-living in Madhapur"
            width={900}
            height={700}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-80 pointer-events-none" />
        </div>
      </motion.div>

      <motion.div className="lg:col-span-7 flex flex-col justify-center self-center" {...scrollReveal}>
        <span className="section-eyebrow block mb-3">From Day One</span>

        <h2 className="section-title mb-3">
          Why Residents Choose <br />
          <span className="section-title-accent">Narenn Living.</span>
        </h2>

        <div className="lg:hidden relative w-full h-70 sm:h-105 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl mb-6">
          <img
            src={ABOUT_IMAGE}
            alt="Premium co-living building interior in Madhapur, Hyderabad — Narenn Living VIP Hills"
            title="Narenn Living co-living in Madhapur"
            width={900}
            height={700}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-80 pointer-events-none" />
        </div>

        <p className="text-brand-charcoal-light text-sm sm:text-base leading-relaxed mb-3 max-w-3xl">
          We built Narenn Living around the things that actually matter when you move to a new city -
          food you look forward to, a room that feels yours, reliable internet, and people you can
          trust. Here is what every resident gets from day one:
        </p>

        <ul className="space-y-3 mb-5 max-w-2xl">
          {HOME_SEO.whyChoose.map((feature) => (
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

        <div className="flex flex-row items-center justify-around sm:justify-start gap-3 sm:gap-6">
          <IconSlideButton
            onClick={() => navigate('/about-us/')}
            radius={10}
            bgColor="#B1020C"
            bgHoverColor="#8A0109"
            fillColor="#FBBD45"
            textColor="#ffffff"
            textHoverColor="#1A1A1A"
            iconColor="#ffffff"
            iconHoverColor="#1A1A1A"
            className="hidden sm:inline-flex"
          >
            Know More About Us
          </IconSlideButton>

         
        </div>
      </motion.div>
    </section>
  );
}
