import { Phone } from 'lucide-react';

export default function About({ onBookVisit }) {
  return (
    <section id="about" className="pt-14 pb-10 lg:pt-10 lg:pb-8 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center bg-white">
      
      {/* LEFT SIDE: Premium Cinematic Image */}
      <div className="lg:col-span-6 w-full h-[450px] sm:h-[550px] rounded-3xl overflow-hidden shadow-xl relative group">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" 
          alt="Narenn Premium Co-Living Interior" 
          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Elegant structural subtle tint overlay matching brand guidelines */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 pointer-events-none" />
      </div>

      {/* RIGHT SIDE: Content Narrative & Metrics */}
      <div className="lg:col-span-6 flex flex-col justify-center">
        <span className="text-[11px] font-bold tracking-[0.25em] text-[#FBBD45] uppercase mb-3 block">
          OUR JOURNEY
        </span>
        
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-charcoal tracking-tight leading-[1.15] mb-6">
          Building Trust. <br />
          Delivering <span className="text-[#FBBD45] italic font-medium">Premium Living.</span>
        </h2>
        
        <p className="text-brand-charcoal-light text-md leading-relaxed mb-8 max-w-xl">
          From our inception to becoming Madhapur&apos;s trusted destination for premium living, our
          journey blends three high-end co-living residences with Narenn&apos;s Crown - a signature
          safe space for girls - built around exquisite design, security, and community.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-6 mb-12">
          <button 
            onClick={() => onBookVisit()}
            className="px-6 py-3 rounded-full bg-[#B1020C] text-white font-display font-bold text-sm tracking-wide hover:bg-[#8A0109] transition-all duration-300 shadow-sm"
          >
            Know More About Us
          </button>
          
          <a 
            href="tel:+917075985666" 
            className="flex items-center gap-2 text-brand-charcoal-light font-display font-bold text-sm hover:text-[#FBBD45] transition-colors group"
          >
            <Phone className="w-4 h-4 text-[#FBBD45] group-hover:animate-pulse" />
            +91 70759 85666
          </a>
        </div>

        {/* Metrics — metric beside label + desc */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {[
            { metric: "25+", label: "Years of Legacy", desc: "Trust in real estate" },
            { metric: "500+", label: "Happy Residents", desc: "Thriving community" },
            { metric: "4", label: "Premium Residences", desc: "Top Madhapur locations" },
            { metric: "4.9/5", label: "Google Rating", desc: "Verified stellar reviews" }
          ].map((stat, idx) => (
            <div key={idx} className="flex items-start gap-3 sm:gap-4">
              <span className="text-2xl sm:text-3xl font-display font-bold text-[#FBBD45] leading-none shrink-0">
                {stat.metric}
              </span>
              <div>
                <span className="font-display font-bold text-sm text-brand-charcoal block">
                  {stat.label}
                </span>
                <p className="font-sans text-[12px] text-brand-charcoal-light mt-0.5">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}