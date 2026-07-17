import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { RESIDENCES } from '../../data/homeData';

const FOOTER_LOGO =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784010508/f51c22a1-fcd7-429f-95dc-dcc512f1285a_x6ybxo.png';

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="ig-brand" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="50%" stopColor="#DD2A7B" />
          <stop offset="100%" stopColor="#8134AF" />
        </linearGradient>
      </defs>
      <path
        fill="url(#ig-brand)"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
      />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/', Icon: FacebookIcon, color: '#1877F2' },
  { label: 'Instagram', href: 'https://www.instagram.com/', Icon: InstagramIcon, color: null },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', Icon: LinkedInIcon, color: '#0A66C2' },
  { label: 'WhatsApp', href: 'https://wa.me/917075985666', Icon: WhatsAppIcon, color: '#25D366' },
];

const COMPANY_LINKS = [
  { label: 'About Us', href: '/about-us/' },
  { label: 'Our Properties', href: '/properties/' },
  { label: 'Amenities', href: '/amenities/' },
  { label: 'FAQ', href: '/faq/' },
];

const EXPLORE_LINKS = [
  { label: 'Explore our rooms', href: '/rooms/' },
  { label: 'Premium amenities', href: '/amenities/' },
  { label: 'Homely food menu', href: '/food/' },
  { label: 'PG in Madhapur', href: '/locations/madhapur/' },
];

const RESIDENT_LINKS = [
  { label: 'Co-living for IT professionals', href: '/coliving-for-it-professionals/' },
  { label: 'PG for students', href: '/pg-for-students/' },
  { label: 'Sharing & pricing', href: '/rooms/' },
  { label: 'Book a free visit', href: '/contact-us/' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-green-pale border-t border-brand-gold/30 relative z-10 pt-28 sm:pt-32 lg:pt-36 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-4 mb-12">
          <div className="lg:col-span-3 space-y-4 max-w-xs">
            <Link to="/" className="flex justify-center">
              <img
                src={FOOTER_LOGO}
                alt="Narenn Living"
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-brand-charcoal-light leading-relaxed text-center">
              Premium co-living and luxury PG in VIP Hills, Madhapur - four properties, one standard
              of comfort, food and community near Hitech City.
            </p>
            <div className="flex items-center justify-center gap-2.5 pt-1">
              {SOCIAL_LINKS.map(({ label, href, Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white border border-black/5 flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
                  style={color ? { color } : undefined}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display font-bold text-sm text-brand-green">Company</h3>
            <ul className="space-y-2.5 text-sm text-brand-charcoal-light">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-brand-burgundy transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display font-bold text-sm text-brand-green">Explore</h3>
            <ul className="space-y-2.5 text-sm text-brand-charcoal-light">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-brand-burgundy transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display font-bold text-sm text-brand-green">For Residents</h3>
            <ul className="space-y-2.5 text-sm text-brand-charcoal-light">
              {RESIDENT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-brand-burgundy transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display font-bold text-sm text-brand-green">Contact Us</h3>
            <ul className="space-y-3 text-sm text-brand-charcoal-light">
              <li className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-white border border-brand-gold/30 flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-4 h-4 text-brand-burgundy" />
                </span>
                <a href="tel:+917075985666" className="hover:text-brand-burgundy transition-colors">
                  +91 70759 85666
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-white border border-brand-gold/30 flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-4 h-4 text-brand-burgundy" />
                </span>
                <a
                  href="mailto:info@narennliving.com"
                  className="hover:text-brand-burgundy transition-colors break-all"
                >
                  info@narennliving.com
                </a>
              </li>
            </ul>
            <p className="text-xs text-brand-charcoal-light leading-relaxed pt-1">
              VIP Hills, Madhapur, Hyderabad 500084
            </p>

            <div className="pt-2 space-y-2">
              <h4 className="font-display font-bold text-xs text-brand-green uppercase tracking-wide">
                Find Us on Maps
              </h4>
              <ul className="space-y-2">
                {RESIDENCES.map((res) => (
                  <li key={res.name}>
                    <a
                      href={res.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-brand-charcoal-light hover:text-brand-burgundy transition-colors group"
                    >
                      <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0 group-hover:text-brand-burgundy" />
                      <span>
                        {res.name}
                        <span className="text-brand-charcoal-light/70"> — Google Maps</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-brand-green/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-charcoal-light">
          <span>&copy; {new Date().getFullYear()} Narenn Group. All rights reserved.</span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-brand-burgundy transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-burgundy transition-colors">
              Terms of Use
            </a>
            <a href="/contact-us/" className="hover:text-brand-burgundy transition-colors">
              Contact
            </a>
            <a href="/locations/madhapur/" className="hover:text-brand-burgundy transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
