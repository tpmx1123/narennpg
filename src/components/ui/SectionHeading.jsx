/**
 * Shared section heading styles — site-wide eyebrows + titles.
 * Eyebrow (light): burgundy/red · Title: green semibold · Accent: gold italic
 * Heroes use section-eyebrow-on-dark + section-title-on-dark separately.
 */
export const SECTION_EYEBROW = 'section-eyebrow block mb-3';

export const SECTION_TITLE =
  'section-title';

export const SECTION_TITLE_ACCENT = 'section-title-accent';

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
