import { ArrowRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../../data/homeData';

export default function Gallery({ onBookVisit }) {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#FBBD45] uppercase block mb-3">
            Gallery Showcase
          </span>
          <p className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            A Glimpse of <span className="text-[#FBBD45] italic font-medium">Elegance</span>
          </p>
        </div>
        <button 
          onClick={() => onBookVisit()}
          className="text-brand-gold font-display font-bold text-sm tracking-wider hover:text-brand-gold-dark flex items-center gap-1.5 transition-colors mt-4 md:mt-0"
        >
          <span>VIEW FULL PROPERTY TOUR</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY_IMAGES.map((img, idx) => (
          <div 
            key={idx} 
            className="group rounded-3xl overflow-hidden border border-brand-cream-dark/50 relative h-72 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <img 
              src={img.url} 
              alt={img.alt || img.title}
              title={img.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-brand-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="font-display font-bold text-lg text-brand-cream block">{img.title}</span>
              <span className="font-sans text-[11px] uppercase tracking-widest text-brand-gold-light mt-1 block">
                Co-Living & For Girls Residences
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
