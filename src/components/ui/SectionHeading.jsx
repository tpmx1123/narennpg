/**
 * Home-page section heading styles — use site-wide for eyebrows + H2s.
 * Eyebrow: gold · Title: green · Accent: gold italic
 */
export const SECTION_EYEBROW =
  'text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3';

export const SECTION_TITLE =
  'text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]';

export const SECTION_TITLE_ACCENT = 'text-brand-gold italic font-medium';

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  as: Tag = 'h2',
  align = 'left',
  className = '',
  titleClassName = '',
}) {
  const alignClass = align === 'center' ? 'text-center' : '';
  const plain = accent && title ? title.replace(accent, '').trim() : title;

  return (
    <div className={`${alignClass} ${className}`.trim()}>
      {eyebrow ? <span className={SECTION_EYEBROW}>{eyebrow}</span> : null}
      <Tag className={`${SECTION_TITLE} ${titleClassName}`.trim()}>
        {accent ? (
          <>
            {plain} <span className={SECTION_TITLE_ACCENT}>{accent}</span>
          </>
        ) : (
          title
        )}
      </Tag>
    </div>
  );
}
