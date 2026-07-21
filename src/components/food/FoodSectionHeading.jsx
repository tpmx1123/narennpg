export default function FoodSectionHeading({ title, centered = false }) {
  return (
    <div className={centered ? 'text-center max-w-3xl mx-auto' : ''}>
      <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-green tracking-tight leading-[1.12]">
        {title}
      </h2>
    </div>
  );
}
