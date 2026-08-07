export default function FoodSectionHeading({ title, centered = false }) {
  return (
    <div className={centered ? 'text-center max-w-3xl mx-auto' : ''}>
      <h2 className="section-title">
        {title}
      </h2>
    </div>
  );
}
