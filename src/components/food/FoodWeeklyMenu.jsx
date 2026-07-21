import { useState } from 'react';
import { WEEKLY_MENU } from '../../data/foodPageData';

const MENU_DISCLAIMER =
  'Disclaimer: Menu items are subject to seasonal availability and local market fresh produce.';

const DAY_LABELS = {
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
  Sun: 'Sunday',
};

function MenuMealCard({ item }) {
  return (
    <article className="bg-white rounded-2xl border-l-4 border-brand-burgundy p-6 sm:p-7 shadow-sm">
      <span className="inline-block bg-brand-burgundy-pale text-brand-burgundy text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-[0.12em]">
        {item.meal}
      </span>
      <h3 className="font-display font-bold text-lg sm:text-xl text-brand-charcoal mb-3 leading-snug">
        {item.title}
      </h3>
      <p className="text-sm text-brand-charcoal-light leading-relaxed">{item.description}</p>
    </article>
  );
}

function DayTab({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-5 py-2.5 text-sm font-display font-bold transition-colors min-w-[7.5rem] ${
        active
          ? 'border-brand-burgundy bg-brand-burgundy text-white shadow-sm'
          : 'border-brand-burgundy bg-transparent text-brand-burgundy hover:bg-brand-burgundy/5'
      }`}
    >
      {label}
    </button>
  );
}

export default function FoodWeeklyMenu() {
  const [activeDay, setActiveDay] = useState('Mon');
  const [mobileOpenDay, setMobileOpenDay] = useState('Mon');

  return (
    <section
      id="weekly-menu"
      className="mb-14 lg:mb-16 py-10 lg:py-14 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 bg-[#F2F0ED] border-y border-brand-gold/10"
    >
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-charcoal tracking-tight leading-[1.12]">
          This Week&apos;s Menu
        </h2>
        <p className="text-sm text-brand-charcoal-light leading-relaxed mt-3">
          A real look at what is actually on the table — updated weekly.
        </p>
      </div>

      <div className="hidden md:block mt-10">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.entries(DAY_LABELS).map(([key, label]) => (
            <DayTab
              key={key}
              label={label}
              active={activeDay === key}
              onClick={() => setActiveDay(key)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {WEEKLY_MENU[activeDay].map((item) => (
            <MenuMealCard key={`${activeDay}-${item.meal}`} item={item} />
          ))}
        </div>

        <p className="text-center text-xs italic text-brand-charcoal-light/80 mt-8">{MENU_DISCLAIMER}</p>
      </div>

      <div className="md:hidden mt-8">
        <div className="flex gap-2 overflow-x-auto pb-3 -mx-1 px-1 scrollbar-none">
          {Object.entries(DAY_LABELS).map(([key, label]) => (
            <DayTab
              key={key}
              label={label.slice(0, 3)}
              active={mobileOpenDay === key}
              onClick={() => setMobileOpenDay(key)}
            />
          ))}
        </div>

        <div className="space-y-4">
          {WEEKLY_MENU[mobileOpenDay].map((item) => (
            <MenuMealCard key={`${mobileOpenDay}-${item.meal}`} item={item} />
          ))}
        </div>

        <p className="text-center text-xs italic text-brand-charcoal-light/80 mt-6">{MENU_DISCLAIMER}</p>
      </div>
    </section>
  );
}
