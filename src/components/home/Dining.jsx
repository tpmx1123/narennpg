const FOOD_IMAGES = [
  {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784199448/image-27_y9go5p.webp',
    alt: 'Buffet counter with labelled Indian meals at Narenn Living Madhapur in-house kitchen',
    title: 'In-house kitchen buffet at Narenn Living',
    className: 'col-span-12 sm:col-span-7 row-span-2 min-h-[220px] sm:min-h-[280px] lg:min-h-[320px]',
  },
  {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784199448/image-32_yry0pd.webp',
    alt: 'Resident serving lunch from the Narenn Living Madhapur buffet',
    title: 'Serving lunch at Narenn Living',
    className: 'col-span-6 sm:col-span-5 min-h-[160px] sm:min-h-[180px] lg:min-h-[200px]',
  },
  {
    src: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784199448/image-37_qv84uj.webp',
    alt: 'Residents with thali trays at Narenn Living co-living dining hall',
    title: 'Community dining at Narenn Living',
    className: 'col-span-6 sm:col-span-5 min-h-[160px] sm:min-h-[180px] lg:min-h-[200px]',
  },
];

export default function Dining() {
  return (
    <section
      id="dining"
      className="py-14 lg:py-16 bg-brand-cream border-y border-brand-gold/15"
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase mb-3 block">
              In-House Kitchen
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-brand-green tracking-tight leading-[1.15] mb-5">
              Food That Tastes <br />
              Like <span className="text-brand-gold italic font-medium">Home.</span>
            </h2>
            <p className="text-sm sm:text-[15px] leading-relaxed text-brand-charcoal-light max-w-lg">
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

          <div className="grid grid-cols-12 gap-3 sm:gap-4">
            {FOOD_IMAGES.map((img) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(15,61,46,0.14),0_8px_24px_rgba(15,61,46,0.08)] ${img.className} group`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  title={img.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
