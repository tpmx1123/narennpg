import { motion } from 'framer-motion';

const EASE_OUT = [0.16, 1, 0.3, 1];

const MEALS = [
  { num: '01', name: 'Breakfast', time: 'Morning start' },
  { num: '02', name: 'Lunch', time: 'Midday fuel' },
  { num: '03', name: 'Evening snacks', time: 'Evening bite' },
  { num: '04', name: 'Dinner', time: 'End of day' },
];

const FOOD_IMAGES = [
  {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784199448/image-27_y9go5p.webp',
    alt: 'Buffet counter with labelled Indian meals at Narenn Living Madhapur in-house kitchen',
    title: 'In-house kitchen buffet at Narenn Living',
    className: 'col-span-12 sm:col-span-7 row-span-2 min-h-[280px] sm:min-h-[360px]',
  },
  {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784199448/image-32_yry0pd.webp',
    alt: 'Resident serving lunch from the Narenn Living Madhapur buffet',
    title: 'Serving lunch at Narenn Living',
    className: 'col-span-6 sm:col-span-5 min-h-[200px] sm:min-h-[220px]',
  },
  {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784199448/image-37_qv84uj.webp',
    alt: 'Residents with thali trays at Narenn Living co-living dining hall',
    title: 'Community dining at Narenn Living',
    className: 'col-span-6 sm:col-span-5 min-h-[200px] sm:min-h-[220px]',
  },
];

export default function Dining() {
  return (
    <section
      id="dining"
      className="relative py-14 bg-white overflow-hidden border-y border-brand-gold/15"
    >
      <div
        className="pointer-events-none absolute -right-24 top-1/3 w-72 h-72 rounded-full bg-brand-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header — brand style */}
        <div className="mb-8 lg:mb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
          <div className="max-w-xl shrink-0">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#FBBD45] uppercase mb-3 block">
              In-House Kitchen
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
              Food That Tastes <br />
              Like <span className="text-[#FBBD45] italic font-medium">Home.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm sm:text-[15px] leading-relaxed text-brand-charcoal border-l-[3px] border-brand-burgundy pl-5 lg:pb-1">
            Bad food is the number one reason people leave a PG. It is also the first thing we got
            right. Our in-house kitchen serves four meals a day - breakfast, lunch, evening snacks and
            dinner - with a rotating menu of home-style South Indian and North Indian dishes, prepared
            fresh in a hygienic kitchen. See what is on our{' '}
            <a href="/food/" className="text-brand-burgundy font-semibold hover:underline">
              homely food menu
            </a>{' '}
            and taste the difference for yourself.
          </p>
        </div>

        {/* Unique day rhythm — four meals as a horizontal timeline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="mb-10 lg:mb-12 grid grid-cols-2 lg:grid-cols-4 gap-0 border-y border-brand-gold/30"
        >
          {MEALS.map((meal, idx) => (
            <div
              key={meal.name}
              className={`relative py-5 sm:py-6 px-4 sm:px-5 ${
                idx < MEALS.length - 1 ? 'border-r border-brand-gold/20' : ''
              } ${idx === 1 ? 'border-b lg:border-b-0 border-brand-gold/20' : ''} ${
                idx === 0 ? 'border-b lg:border-b-0 border-brand-gold/20' : ''
              }`}
            >
              <span className="font-display font-bold text-2xl sm:text-3xl text-brand-gold/40 leading-none block mb-2">
                {meal.num}
              </span>
              <span className="font-display font-bold text-sm sm:text-base text-brand-green block">
                {meal.name}
              </span>
              <span className="text-[11px] text-brand-charcoal-light mt-1 block">{meal.time}</span>
            </div>
          ))}
        </motion.div>

        {/* Asymmetric food gallery */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.06 }}
          className="grid grid-cols-12 grid-rows-[auto_auto] gap-3 sm:gap-4"
        >
          {FOOD_IMAGES.map((img) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl ${img.className} group`}
            >
              <img
                src={img.src}
                alt={img.alt}
                title={img.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/35 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
