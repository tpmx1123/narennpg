
export default function AboutSection({ h2, children, className = '', bordered = false }) {
  return (
    <section
      className={`mb-12 lg:mb-14 max-w-3xl ${bordered ? 'border-t border-brand-gold/20 pt-10' : ''} ${className}`}
    >
      <h2 className="font-display font-bold text-xl sm:text-2xl text-brand-green tracking-tight mb-4">
        {h2}
      </h2>
      {children}
    </section>
  );
}

export function AboutParagraph({ children }) {
  return (
    <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mb-4 last:mb-0">
      {children}
    </p>
  );
}

export function AboutBulletList({ items }) {
  return (
    <ul className="grid grid-cols-1 gap-y-2.5 text-sm sm:text-[15px] text-brand-charcoal-light">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span className="text-brand-burgundy font-bold shrink-0 mt-0.5" aria-hidden="true">
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
