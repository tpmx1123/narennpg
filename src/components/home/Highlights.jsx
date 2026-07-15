const HIGHLIGHTS = [
  {
    label: 'Fully Furnished',
    detail: 'Designer Rooms',
    icon: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784013213/furniture_oc1dei.png',
  },
  {
    label: 'Chef-Curated Meals',
    detail: 'Thrice Daily',
    icon: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784012843/chef_o0npjr.png',
  },
  {
    label: 'High-Speed Wi-Fi',
    detail: 'Enterprise Grade',
    icon: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784013213/wifi-router_as6edp.png',
  },
  {
    label: '24/7 Smart Security',
    detail: 'Biometric Access',
    icon: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784013213/cctv_uxdqb6.png',
  },
  {
    label: 'Daily Housekeeping',
    detail: 'Laundry Included',
    icon: 'https://res.cloudinary.com/dmaeijlc/image/upload/v1784013213/cleaning-lady_xf09yy.png',
  },
];

export default function Highlights() {
  return (
    <section className="bg-brand-gold-pale/70 border-y border-brand-gold/20 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center gap-2.5 p-2 border-r border-brand-gold/15 last:border-none"
            >
              <img
                src={item.icon}
                alt=""
                aria-hidden="true"
                className="w-10 h-10 object-contain"
              />
              <span className="font-display font-bold text-sm text-brand-charcoal leading-none block">
                {item.label}
              </span>
              <span className="font-sans text-[11px] uppercase tracking-widest text-brand-burgundy mt-0.5 font-semibold block">
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
