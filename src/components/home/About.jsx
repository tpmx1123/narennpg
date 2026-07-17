import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { HOME_SEO } from '../../data/seoHome';
import IconSlideButton from '../ui/IconSlideButton';

export default function About() {
  const navigate = useNavigate();
  return (
    <section id="about" className="py-14 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center bg-white">
      
      {/* LEFT SIDE: Premium Cinematic Image — centered in column */}
      <div className="lg:col-span-5 flex items-center justify-center self-center">
        <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] h-[360px] sm:h-[420px] lg:h-[460px] rounded-3xl overflow-hidden shadow-xl group">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" 
            alt="Premium co-living building interior in Madhapur, Hyderabad — Narenn Living VIP Hills"
            title="Narenn Living co-living in Madhapur"
            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 pointer-events-none" />
        </div>
      </div>

      {/* RIGHT SIDE: Content Narrative & Metrics */}
      <div className="lg:col-span-7 flex flex-col justify-center self-center">
        <span className="text-[11px] font-bold tracking-[0.25em] text-[#FBBD45] uppercase mb-3 block">
          From Day One
        </span>
        
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15] mb-3">
          Why Residents Choose <br />
          <span className="text-[#FBBD45] italic font-medium">Narenn Living.</span>
        </h2>
        
        <p className="text-brand-charcoal-light text-md leading-relaxed mb-3 max-w-2xl">
          We built Narenn Living around the things that actually matter when you move to a new city -
          food you look forward to, a room that feels yours, reliable internet, and people you can
          trust. Here is what every resident gets from day one:
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-3 max-w-2xl text-sm text-brand-charcoal-light">
          {HOME_SEO.whyChoose.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-brand-gold font-bold shrink-0" aria-hidden="true">
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-6">
          <IconSlideButton
            onClick={() => navigate('/about-us/')}
            radius={10}
            bgColor="#B1020C"
            bgHoverColor="#8A0109"
            fillColor="#FBBD45"
            textColor="#ffffff"
            textHoverColor="#1A1A1A"
            iconColor="#ffffff"
            iconHoverColor="#1A1A1A"
          >
            Know More About Us
          </IconSlideButton>
          
          <a 
            href="tel:+917075985666" 
            className="flex items-center gap-2 text-brand-charcoal-light font-display font-bold text-sm hover:text-[#FBBD45] transition-colors group"
          >
            <Phone className="w-4 h-4 text-[#FBBD45] group-hover:animate-pulse" />
            +91 70759 85666
          </a>
        </div>

      </div>
    </section>
  );
}