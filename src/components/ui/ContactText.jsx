import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../../data/sitePages';

/** Call number (70759…) and WhatsApp number (99631…) plus the word "WhatsApp" */
const CONTACT_TOKEN =
  /(\+91[\s-]?)?(70759[\s-]?85666)|(\+91[\s-]?)?(99631[\s-]?20333)|\bWhatsApp\b/gi;

const DEFAULT_LINK_CLASS =
  'text-brand-burgundy font-semibold hover:underline underline-offset-2';

const GOLD_LINK_CLASS = 'text-brand-gold font-semibold hover:underline';

/**
 * Inline phone + WhatsApp pair for CTAs: "70759 85666, WhatsApp"
 */
export function PhoneWhatsAppLinks({ className = GOLD_LINK_CLASS }) {
  return (
    <>
      <a href={`tel:${PHONE_TEL}`} className={className}>
        {PHONE_DISPLAY}
      </a>
      ,{' '}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        WhatsApp
      </a>
    </>
  );
}

/**
 * Turns phone / WhatsApp numbers and the word "WhatsApp" in prose into links.
 * Call number → tel:; WhatsApp number / "WhatsApp" → wa.me
 */
export function linkifyContact(text, linkClassName = DEFAULT_LINK_CLASS) {
  if (text == null || text === '') return text;
  if (typeof text !== 'string') return text;

  const nodes = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  CONTACT_TOKEN.lastIndex = 0;
  while ((match = CONTACT_TOKEN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];
    const isWhatsAppWord = /^whatsapp$/i.test(token);
    const isWhatsAppNumber = /99631/.test(token);

    if (isWhatsAppWord || isWhatsAppNumber) {
      nodes.push(
        <a
          key={`wa-${key++}`}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {token}
        </a>
      );
    } else {
      nodes.push(
        <a key={`tel-${key++}`} href={`tel:${PHONE_TEL}`} className={linkClassName}>
          {token}
        </a>
      );
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex === 0) return text;
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

/** Inline prose with auto-linked phone / WhatsApp mentions */
export default function ContactText({
  children,
  linkClassName = DEFAULT_LINK_CLASS,
}) {
  return <>{linkifyContact(children, linkClassName)}</>;
}
