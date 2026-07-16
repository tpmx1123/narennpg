import { AMENITIES } from '../../data/homeData';

export default function Amenities() {
  return (
    <section id="amenities" className="bg-white relative overflow-hidden py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 lg:mb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-16">
          <div className="shrink-0">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#FBBD45] uppercase block mb-3">
              Premium Amenities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
              Built for IT Pros <br />
              <span className="text-[#FBBD45] italic font-medium">&amp; Students Alike.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-brand-charcoal border-l-2 border-brand-burgundy pl-5 lg:pl-6 lg:mt-6 lg:self-center">
            Whether you are an engineer starting a new role in Hitech City or a student preparing for
            exams, Narenn Living is designed around your day. Our{' '}
            <a
              href="/coliving-for-it-professionals/"
              className="text-brand-burgundy font-semibold hover:underline"
            >
              co-living for IT professionals
            </a>{' '}
            offers quiet, work-ready rooms and a fast-commute location, while our{' '}
            <a href="/pg-for-students/" className="text-brand-burgundy font-semibold hover:underline">
              PG for students
            </a>{' '}
            provides a safe, supportive and study-friendly environment with everything included in one
            simple monthly fee.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {AMENITIES.map((am) => (
            <article
              key={am.title}
              className="group relative h-36 sm:h-40 lg:h-44 overflow-hidden rounded-xl sm:rounded-2xl"
            >
              <img
                src={am.image}
                alt={am.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-charcoal/55 group-hover:bg-brand-charcoal/45 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3 sm:px-4">
                <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-tight mb-1">
                  {am.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-white/90 leading-snug max-w-[180px]">
                  {am.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
