/**
 * @typedef {{ type: 'text', text: string } | { type: 'link', href: string, text: string }} BlogRichTextPart
 */

/**
 * @typedef {{
 *   type: 'paragraph',
 *   parts: BlogRichTextPart[],
 * }} BlogParagraphBlock
 */

/**
 * @typedef {{
 *   type: 'h2',
 *   text: string,
 * }} BlogHeadingBlock
 */

/**
 * @typedef {{
 *   type: 'list',
 *   items: string[],
 * }} BlogListBlock
 */

/**
 * @typedef {{
 *   type: 'image',
 *   src: string,
 *   alt: string,
 *   title?: string,
 *   caption?: string,
 * }} BlogImageBlock
 */

/**
 * @typedef {{
 *   type: 'callout',
 *   image: string,
 *   imageAlt: string,
 *   imageTitle?: string,
 *   eyebrow: string,
 *   body: string,
 *   cta: { href: string, label: string },
 * }} BlogCalloutBlock
 */

/**
 * @typedef {BlogParagraphBlock | BlogHeadingBlock | BlogListBlock | BlogImageBlock | BlogCalloutBlock} BlogContentBlock
 */

/**
 * @typedef {{
 *   question: string,
 *   answer: string,
 * }} BlogFaqItem
 */

/**
 * @typedef {{
 *   blocks: BlogContentBlock[],
 *   faqs: BlogFaqItem[],
 *   sidebarCta?: {
 *     title: string,
 *     buttonLabel: string,
 *     href: string,
 *     image: string,
 *     imageAlt: string,
 *   },
 * }} BlogArticleContent
 */

export {};
