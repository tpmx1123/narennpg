import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { RESIDENCES } from '../../data/homeData';
import IconSlideButton from '../ui/IconSlideButton';
import { scrollReveal } from '../../motion/motionPresets';

const NEARBY_HIGHLIGHTS = [
  {
    title: 'Major IT Hubs',
    distance: '5–10 mins',
    detail: 'Raheja Mindspace, Hitech City, Salesforce, Deloitte & Amazon campuses.',
  },
  {
    title: 'Metro Connectivity',
    distance: 'Walkable',
    detail: 'Madhapur Metro Station links you to the rest of Hyderabad in minutes.',
  },
  {
    title: 'Lifestyle & Dining',
    distance: '15 mins',
    detail: 'Jubilee Hills cafés, Inorbit Mall, breweries and weekend hangout spots.',
  },
];

const AREA_IMAGE = 'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/image-03-2_ze1iph.webp';
const ELITE_MAP_URL =
  RESIDENCES.find((res) => res.name === 'Narenn Elite')?.mapUrl ??
  'https://maps.app.goo.gl/DqPwF8JMTihVhMX28';

export default function Neighborhood() {
  return (
    <section id="neighborhood" className="relative py-10 sm:py-14 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="mb-8 sm:mb-10 lg:mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12"
          {...scrollReveal}
        >
          <div className="max-w-xl">
            <span className="section-eyebrow block mb-3">Location</span>
            <h2 className="section-title">
              Four properties in{' '}
              <span className="section-title-accent">VIP Hills, Madhapur.</span>
            </h2>
          </div>
          <p className="text-sm text-brand-charcoal leading-relaxed max-w-lg border-l-[3px] border-brand-burgundy pl-5">
            From VIP Hills you can reach Hitech City in about 5–10 minutes, Gachibowli and the
            Financial District in 15–20 minutes. Explore{' '}
            <a href="/locations/madhapur/" className="text-brand-burgundy font-semibold hover:underline">
              PG in Madhapur
            </a>
            ,{' '}
            <a
              href="/coliving-for-it-professionals/"
              className="text-brand-burgundy font-semibold hover:underline"
            >
              co-living for IT professionals
            </a>{' '}
            and{' '}
            <a href="/pg-for-students/" className="text-brand-burgundy font-semibold hover:underline">
              PG for students
            </a>
            .
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 mb-10 sm:mb-14 lg:mb-16 items-start">
          <motion.div className="lg:col-span-5" {...scrollReveal}>
            <ul className="divide-y divide-brand-gold/25">
              {NEARBY_HIGHLIGHTS.map(({ title, distance, detail }) => (
                <li key={title} className="py-5 first:pt-0 last:pb-0">
                  <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 mb-1.5">
                    <span className="font-display font-semibold text-base text-brand-charcoal">
                      {title}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-gold shrink-0">
                      {distance}
                    </span>
                  </div>
                  <p className="text-sm text-brand-charcoal-light leading-relaxed">{detail}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="lg:col-span-7 relative min-h-55 sm:min-h-85 overflow-hidden rounded-[10px]"
            {...scrollReveal}
          >
            <img
              src={AREA_IMAGE}
              alt="Narenn Living terrace and neighbourhood views in VIP Hills, Madhapur"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-green/90 via-brand-green/40 to-transparent" />
            <div className="relative h-full min-h-55 sm:min-h-85 flex flex-col justify-end p-4 sm:p-8">
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-white mb-1">
                VIP Hills, Madhapur
              </h3>
              <p className="text-sm text-white/85 max-w-md leading-relaxed mb-4">
                Hyderabad, Telangana 500084 - four Narenn Living homes within walking distance of
                Madhapur&apos;s best commute and lifestyle corridors.
              </p>
              <IconSlideButton
                href={ELITE_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                leadingIcon={MapPin}
                compact
                radius={8}
                bgColor="#B1020C"
                bgHoverColor="#8A0109"
                fillColor="#D89B22"
                textColor="#ffffff"
                textHoverColor="#1A1A1A"
                iconColor="#ffffff"
                iconHoverColor="#1A1A1A"
              >
                View on Maps
              </IconSlideButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
