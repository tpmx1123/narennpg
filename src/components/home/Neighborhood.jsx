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

const AREA_IMAGE =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784114731/image-03-2_ze1iph.webp';

export default function Neighborhood() {
  return (
    <section
      id="neighborhood"
      className="relative py-14  bg-white  overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 lg:mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase mb-3 block">
              Location
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
              Four properties in{' '}
              <span className="text-brand-gold italic font-medium">VIP Hills, Madhapur.</span>
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
        </div>

        {/* Main — open list + full-bleed visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-14 lg:mb-16 items-start">
          <div className="lg:col-span-5">
            <ul className="divide-y divide-brand-gold/25">
              {NEARBY_HIGHLIGHTS.map(({ title, distance, detail }) => (
                <li key={title} className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-baseline justify-between gap-4 mb-1.5">
                    <span className="font-display font-bold text-base text-brand-charcoal">{title}</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold shrink-0">
                      {distance}
                    </span>
                  </div>
                  <p className="text-sm text-brand-charcoal-light leading-relaxed">{detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[340px] overflow-hidden rounded-[10px]">
            <img
              src={AREA_IMAGE}
              alt="Narenn Living terrace and neighbourhood views in VIP Hills, Madhapur"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-brand-green/40 to-transparent" />
            <div className="relative h-full min-h-[260px] sm:min-h-[340px] flex flex-col justify-end p-6 sm:p-8">
              
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-1">
                VIP Hills, Madhapur
              </h3>
              <p className="text-sm text-white/85 max-w-md leading-relaxed">
                Hyderabad, Telangana 500084 - four Narenn Living homes within walking distance of
                Madhapur&apos;s best commute and lifestyle corridors.
              </p>
            </div>
          </div>
        </div>

              
      </div>
    </section>
  );
}
