import { CheckCircle2 } from 'lucide-react';

export default function Dining() {
  return (
    <section id="dining" className="py-24 bg-brand-gold-pale/50 border-y border-brand-gold/15">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#FBBD45] uppercase block mb-3">
            Food
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            Food That Tastes <br />
            Like <span className="text-[#FBBD45] italic font-medium">Home.</span>
          </h2>
          <p className="text-brand-charcoal-light text-sm leading-relaxed">
            Our in-house kitchen serves fresh meals every day with a rotating menu of home-style South
            Indian and North Indian dishes. See our{' '}
            <a href="/food/" className="text-brand-burgundy font-semibold hover:underline">
              homely food menu
            </a>{' '}
            and taste the difference for yourself.
          </p>
          
          <div className="space-y-3.5 pt-2">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="font-display font-bold text-sm text-brand-charcoal block">Chef-Prepared Hygienic Cooking</span>
                <span className="text-brand-charcoal-light text-xs">Meals cooked in a fully commercial automated kitchen by professional staff.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="font-display font-bold text-sm text-brand-charcoal block">Diverse Nutrition & Thrice-Daily Service</span>
                <span className="text-brand-charcoal-light text-xs">Thoroughly designed cyclical menu catering to balanced protein, carb, and fiber ratios.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="font-display font-bold text-sm text-brand-charcoal block">Premium Dining Infrastructure</span>
                <span className="text-brand-charcoal-light text-xs">Exquisitely styled central dining rooms featuring high-end sanitization protocols.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-12 gap-4">
          <div className="col-span-8 rounded-3xl overflow-hidden border border-brand-cream-dark/60 h-80 shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" 
              alt="Four homely meals a day served from the in-house kitchen at Narenn Living Madhapur"
              title="In-house kitchen food at Narenn Living"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="col-span-4 rounded-3xl overflow-hidden border border-brand-cream-dark/60 h-80 shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80" 
              alt="Nutritious food spread"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="col-span-4 rounded-3xl overflow-hidden border border-brand-cream-dark/60 h-64 shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" 
              alt="Tasty breakfast options"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="col-span-8 rounded-3xl overflow-hidden border border-brand-cream-dark/60 h-64 shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80" 
              alt="Co-living dining hall vibe"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
