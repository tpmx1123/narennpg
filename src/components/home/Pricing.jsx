import { 
  Utensils, 
  Sparkles, 
  BedDouble, 
  Trees, 
  ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';

const EASE_OUT = [0.16, 1, 0.3, 1];

const FACILITY_ICONS = {
  '3 times meals': Utensils,
  'Daily house keeping cleaning': Sparkles,
  'Weekly once linen changing': BedDouble,
  'Terrace garden': Trees,
};

const SHARING_OPTIONS = [
  { id: '1-share', name: '1 Sharing', label: 'Single Suite', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80', desc: 'Crafted for absolute focus, total privacy, and high-productivity living.' },
  { id: '2-share', name: '2 Sharing', label: 'Dual Studio', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80', desc: 'Spatial balance combining collaborative space with personal comfort.' },
  { id: '3-share', name: '3 Sharing', label: 'Triple Pad', image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80', desc: 'Maximizing community values, room utility, and cost-efficiency.' },
  { id: '4-share', name: '4 Sharing', label: 'Quad Cluster', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80', desc: 'Designed around interactive social routines and optimized spaces.' }
];

const AMENITIES_LIST = [
  '3 times meals',
  'Daily house keeping cleaning',
  'Weekly once linen changing',
  'Terrace garden'
];

export default function CompactAllInOnePricing({ onBookVisit }) {
  return (
    <section id="pricing" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Scaled Down Minimal Header */}
        <div className="mb-12 border-b border-gray-100 pb-6">
          <span className="text-[10px] font-black tracking-[0.3em] text-[#FBBD45] uppercase block mb-1">
            ACCOMMODATION TIERS
          </span>
          <h2 className="text-3xl font-display font-black text-brand-charcoal tracking-tight">
            Residency Options & <span className="text-[#B1020C] italic font-serif font-medium">Pricing Layouts</span>
          </h2>
        </div>

        {/* COMPACT 4-COLUMN ALL-IN-ONE CARD SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SHARING_OPTIONS.map((room, idx) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: idx * 0.05 }}
              className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300 p-4"
            >
              {/* Tighter Media Header */}
              <div className="h-36 w-full rounded-xl overflow-hidden relative mb-4 shrink-0">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-[10px] font-black uppercase tracking-wider bg-white/90 text-brand-charcoal px-2 py-0.5 rounded-md backdrop-blur-sm">
                  {room.label}
                </span>
              </div>

              {/* Core Typographical Layout Info */}
              <div className="flex-1 flex flex-col">
                <h3 className="font-display font-black text-xl text-brand-charcoal tracking-tight mb-1">
                  {room.name}
                </h3>
                <p className="text-[11px] leading-relaxed text-brand-charcoal-light mb-4 line-clamp-2">
                  {room.desc}
                </p>

                {/* Minimal Rent Split Tiers Grid */}
                <div className="grid grid-cols-2 gap-2 border-t border-b border-gray-50 py-3 mb-4">
                  <div>
                    <span className="text-[9px] font-black tracking-wider text-[#FBBD45] uppercase block mb-1">
                      Monthly System
                    </span>
                    <div className="space-y-0.5">
                      <p className="text-[11px] font-bold text-brand-charcoal flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[#B1020C]" /> AC Room
                      </p>
                      <p className="text-[11px] font-bold text-brand-charcoal flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-gray-300" /> Non-AC
                      </p>
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-black tracking-wider text-[#FBBD45] uppercase block mb-1">
                      Day Stays
                    </span>
                    <div className="space-y-0.5">
                      <p className="text-[11px] font-bold text-brand-charcoal flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[#B1020C]" /> AC Option
                      </p>
                      <p className="text-[11px] font-bold text-brand-charcoal flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-gray-300" /> Non-AC
                      </p>
                    </div>
                  </div>
                </div>

                {/* Micro Included Utilities Facility Index */}
                <div className="mb-4">
                  <span className="text-[9px] font-black tracking-wider text-brand-charcoal-light/70 uppercase block mb-2">
                    Included Comforts
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {AMENITIES_LIST.map((facility) => {
                      const Icon = FACILITY_ICONS[facility];
                      return (
                        <div key={facility} className="flex items-center gap-2 text-brand-charcoal/90">
                          <div className="w-5 h-5 rounded bg-gray-50 flex items-center justify-center text-[#B1020C] shrink-0">
                            <Icon className="w-3 h-3 stroke-[2.2]" />
                          </div>
                          <span className="font-medium text-[11px] tracking-tight capitalize truncate">
                            {facility}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Lower Layout Action Matrix Footprint */}
                <div className="mt-auto pt-3 border-t border-gray-50 flex flex-col gap-2 relative">
                  <button
                    type="button"
                    onClick={() => onBookVisit({ roomType: room.name })}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#B1020C] hover:bg-[#B1020C]/90 text-white font-display font-black text-[11px] tracking-widest uppercase shadow-sm transition-all shrink-0"
                  >
                    Enquire Rates
                    <ArrowRight className="h-3 w-3 stroke-[2.5]" />
                  </button>

                  {/* COMPLETELY UN-HIGHLIGHTED FOOTNOTE IN CORNER */}
                  <div className="text-right text-[9px] font-medium tracking-wide text-brand-charcoal-light/40 select-none pointer-events-none mt-1">
                    * Electricity bill separate
                  </div>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}