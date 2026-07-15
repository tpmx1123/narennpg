import { Phone } from 'lucide-react';
import { BRAND_LOGO, RESIDENCES } from '../../data/homeData';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-gold/20 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
        
        {/* Brand Info */}
        <div className="lg:col-span-5 space-y-4">
          <a href="#" className="inline-flex">
            <img
              src={BRAND_LOGO}
              alt="Narenn Living"
              className="h-14 w-auto object-contain rounded-md bg-brand-charcoal p-1.5"
            />
          </a>
          <p className="text-brand-charcoal-light text-xs leading-relaxed max-w-sm">
            Premium co-living residences plus a safe space for girls at Narenn&apos;s Crown —
            meticulously designed for modern urban living in Madhapur, Hyderabad.
          </p>
        </div>

        {/* Links 1 */}
        <div className="lg:col-span-2 space-y-3">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-gold block mb-2">PROPERTIES</span>
          <ul className="space-y-2 text-xs text-brand-charcoal-light">
            {RESIDENCES.map((res) => (
              <li key={res.name}>
                <a href="#properties" className="hover:text-brand-gold transition-colors">
                  {res.name}{' '}
                  <span className="text-[10px] text-brand-gold">({res.livingType})</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links 2 */}
        <div className="lg:col-span-2 space-y-3">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-gold block mb-2">COMPANY</span>
          <ul className="space-y-2 text-xs text-brand-charcoal-light">
            <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
            <li><a href="#about" className="hover:text-brand-gold transition-colors">The Narenn Legacy</a></li>
            <li><a href="#amenities" className="hover:text-brand-gold transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3 space-y-3">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-gold block mb-2">CONTACT</span>
          <ul className="space-y-2 text-xs text-brand-charcoal-light">
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <a href="tel:+917075985666" className="hover:text-brand-gold transition-colors">+91 70759 85666</a>
            </li>
            <li>
              <a href="mailto:info@narennliving.com" className="hover:text-brand-gold transition-colors">info@narennliving.com</a>
            </li>
            <li className="leading-relaxed">
              Narenn Elite, Road 21, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500084
            </li>
          </ul>
        </div>

      </div>

      {/* Sub-footer */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-brand-cream-dark/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-brand-charcoal-light">
        <span>&copy; {new Date().getFullYear()} Narenn Group. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="https://wa.me/917075985666" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">WhatsApp</a>
          <span>&bull;</span>
          <span>Designed with elegance for Gen-Z</span>
        </div>
      </div>
    </footer>
  );
}
