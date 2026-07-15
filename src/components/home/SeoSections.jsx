import { HOME_SEO } from '../../data/seoHome';

export default function SeoSections() {
  return (
    <>
      <section
        id="vip-hills-advantage"
        className="py-16 lg:py-20 bg-brand-gold-pale/40 border-y border-brand-gold/15"
      >
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#FBBD45] uppercase block mb-3">
            Location Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15] mb-6">
            The VIP Hills <span className="text-[#FBBD45] italic font-medium">Location Advantage</span>
          </h2>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-brand-charcoal-light">
            {HOME_SEO.locationAdvantage.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
          <div className="mt-8 rounded-2xl overflow-hidden border border-brand-gold/20 bg-brand-cream/50 min-h-[12rem] flex items-center justify-center">
            <img
              src="/images/narenn-living-location-map-vip-hills-madhapur.jpg"
              alt="Map showing Narenn Living VIP Hills location near Hitech City, Kondapur and Gachibowli"
              title="Narenn Living VIP Hills location"
              className="w-full h-56 sm:h-72 object-cover"
            />
          </div>
        </div>
      </section>

      <section id="how-booking-works" className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#FBBD45] uppercase block mb-3">
            Booking Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15] mb-6">
            How Booking Works at <span className="text-[#FBBD45] italic font-medium">Narenn Living</span>
          </h2>
          <ol className="space-y-4 list-decimal list-inside text-sm sm:text-base leading-relaxed text-brand-charcoal-light">
            {HOME_SEO.howBooking.map((step) => (
              <li key={step.slice(0, 40)} className="pl-1">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
