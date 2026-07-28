export default function FoodSectionHeading({ title, centered = false }) {
  return (
    <div className={centered ? 'text-center max-w-3xl mx-auto' : ''}>
      <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
        {title}
      </h2>
    </div>
  );
}
