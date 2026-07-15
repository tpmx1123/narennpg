import { Shield } from 'lucide-react';

export default function Safety() {
  return (
    <section className="py-24 bg-brand-gold-pale/40 border-y border-brand-gold/15">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#FBBD45] uppercase block mb-3">
            Safety &amp; Security
          </span>
          <p className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            Every Precaution. <br />
            <span className="text-[#FBBD45] italic font-medium">Every Single Day.</span>
          </p>
          <p className="text-brand-charcoal-light text-sm leading-relaxed">
            Peace of mind is the ultimate luxury. Our multi-layered, state-of-the-art security protocols ensure that you can focus entirely on your professional goals and comfort, while we handle your complete safety.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {[
              { title: "Biometric Entry", desc: "Secured facial recognition or high-precision fingerprint scan checks at gates." },
              { title: "24/7 HD CCTV Monitoring", desc: "Comprehensive HD recording coverage of all common zones, lobbies, and parameters." },
              { title: "On-site Resident Warden", desc: "Professional, responsive managers available 24/7 for support and crisis control." },
              { title: "Strict Visitor Controls", desc: "Double OTP verification log checks for all visitor registrations via our custom app." }
            ].map((sec, idx) => (
              <div key={idx} className="p-5 bg-brand-cream border border-brand-cream-dark/60 rounded-2xl shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold mb-3">
                  {idx + 1}
                </div>
                <h4 className="font-display font-bold text-sm text-brand-charcoal mb-1">{sec.title}</h4>
                <p className="text-brand-charcoal-light text-xs leading-relaxed">{sec.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-brand-cream-dark/60 shadow-lg max-h-[500px] relative group">
          <img 
            src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80" 
            alt="Premium secure entryway"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-brand-cream/90 backdrop-blur-md border border-brand-gold/20 flex items-center gap-4 shadow-md">
            <Shield className="w-10 h-10 text-brand-gold shrink-0" />
            <div>
              <span className="font-display font-bold text-sm text-brand-charcoal block">Secured by Narenn-Shield</span>
              <span className="text-brand-charcoal-light text-xs block mt-0.5">Automated biometric logging and gate guard operations in full sync.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
