import { MapPin, Map } from 'lucide-react';

export default function Neighborhood() {
  return (
    <section id="neighborhood" className="py-24 bg-brand-burgundy-pale/35 border-y border-brand-burgundy/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">LOCATION BENEFITS</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-brand-charcoal tracking-tight leading-tight">
            In the Heart of <br />
            <span className="text-brand-gold italic font-medium">Madhapur.</span>
          </h2>
          <p className="text-brand-charcoal-light text-sm leading-relaxed">
            Location is the ultimate amenity. Our co-living homes and Narenn&apos;s Crown residence for girls place you minutes from Hitech IT Parks, premium dining, and lifestyle hubs.
          </p>

          <div className="space-y-4 pt-2">
            {[
              { title: "Major IT Hubs", dist: "5 mins to Raheja Mindspace & Hitech City", desc: "Reduce commute fatigue to Salesforce, Deloitte, Amazon, and other top IT headquarters." },
              { title: "Metro Connectivity", dist: "Walking distance to Madhapur Metro Station", desc: "Seamless and green transit routes straight to main Hyderabad city lines." },
              { title: "Lifestyle Hubs", dist: "Close to Jubilee Hills cafes & Inorbit Mall", desc: "Enjoy weekends at top breweries, upscale lounges, and fashion shopping arenas." }
            ].map((loc, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-display font-bold text-sm text-brand-charcoal block">{loc.title}</span>
                  <span className="font-sans text-[11px] text-brand-gold font-bold block mt-0.5">{loc.dist}</span>
                  <span className="text-brand-charcoal-light text-xs mt-1 block leading-relaxed">{loc.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 bg-brand-cream border border-brand-cream-dark/60 rounded-3xl p-8 shadow-md relative min-h-[400px] flex flex-col justify-between overflow-hidden">
          {/* Styled background map details to look futuristic and Gen-Z */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#222" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Map Simulator */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold block mb-1">LOCALITY MAP SYSTEM</span>
            <h3 className="text-2xl font-display font-bold text-brand-charcoal">VIP Hills, Road 21</h3>
            <span className="text-brand-charcoal-light text-xs block">Silicon Valley, Madhapur, Hyderabad, Telangana</span>
          </div>

          {/* Simulating Map Markers */}
          <div className="my-8 relative h-48 bg-brand-cream-dark/30 border border-brand-cream-dark/40 rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="absolute w-2.5 h-2.5 bg-brand-gold rounded-full animate-ping" style={{ top: '35%', left: '40%' }} />
            <div className="absolute w-4 h-4 bg-brand-gold border-2 border-brand-cream rounded-full shadow-md" style={{ top: '33%', left: '39%' }} />
            <span className="absolute bg-brand-charcoal text-brand-cream text-[10px] font-bold px-2 py-0.5 rounded shadow-sm" style={{ top: '22%', left: '35%' }}>
              Narenn Elite
            </span>

            <div className="absolute w-3 h-3 bg-brand-burgundy border-2 border-brand-cream rounded-full" style={{ top: '65%', left: '68%' }} />
            <span className="absolute bg-brand-cream border border-brand-cream-dark text-brand-charcoal-light text-[9px] px-2 py-0.5 rounded" style={{ top: '55%', left: '60%' }}>
              Madhapur Metro
            </span>

            <div className="absolute w-3 h-3 bg-brand-charcoal border-2 border-brand-cream rounded-full" style={{ top: '15%', left: '20%' }} />
            <span className="absolute bg-brand-cream border border-brand-cream-dark text-brand-charcoal-light text-[9px] px-2 py-0.5 rounded" style={{ top: '8%', left: '15%' }}>
              Mindspace IT Park
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-brand-cream-dark/40 z-10">
            <span className="text-xs text-brand-charcoal-light">Close to major food joints like Jubilee Hills Cafes, Inorbit Mall, and metro.</span>
            <a 
              href="https://maps.google.com/?q=Narenn+Elite,+Road+21,+VIP+Hills,+Silicon+Valley,+Madhapur"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-brand-burgundy hover:bg-brand-burgundy-dark text-white font-display font-bold text-xs tracking-wider transition-colors shrink-0 shadow-md flex items-center gap-1.5"
            >
              <Map className="w-4 h-4" />
              View on Google Maps
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
