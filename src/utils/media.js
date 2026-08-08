const SPACES_HOST = 'digitaloceanspaces.com';

function isSpaces(url) {
  return typeof url === 'string' && url.includes(SPACES_HOST);
}

function qualityNumber(q) {
  if (typeof q === 'number') return q;
  if (q === 'auto:eco' || q === 'auto') return 72;
  const n = Number(q);
  return Number.isFinite(n) ? n : 72;
}

/**
 * Resize/compress DigitalOcean Spaces originals via WebP CDN.
 * Spaces has no on-the-fly transforms — this keeps cards/nav/icons light.
 */
export function optimizeImg(src, { w, h, crop = 'fill', q = 72 } = {}) {
  if (!src) return src;
  if (!isSpaces(src)) return src;

  const params = [
    `url=${encodeURIComponent(src)}`,
    `q=${qualityNumber(q)}`,
    'output=webp',
    'we',
  ];
  if (w) params.push(`w=${Math.round(w)}`);
  if (h) params.push(`h=${Math.round(h)}`);
  if (crop === 'fit' || crop === 'limit' || crop === 'scale') {
    params.push('fit=inside');
  } else if (w || h) {
    params.push('fit=cover');
    params.push('a=attention');
  }
  return `https://wsrv.nl/?${params.join('&')}`;
}

/** Size presets used across the site */
export const Img = {
  tile: (src) => optimizeImg(src, { w: 560, h: 360 }),
  heroStill: (src) => optimizeImg(src, { w: 1200, h: 900 }),
  content: (src) => optimizeImg(src, { w: 900, h: 700 }),
  wide: (src) => optimizeImg(src, { w: 1400, h: 800, crop: 'fill' }),
  icon: (src) => optimizeImg(src, { w: 96, h: 96, crop: 'fit' }),
  logo: (src) => optimizeImg(src, { w: 240, crop: 'limit' }),
  ornament: (src) => optimizeImg(src, { w: 1200, crop: 'limit' }),
  navCard: (src) => optimizeImg(src, { w: 400, h: 260 }),
  cardStill: (src) => optimizeImg(src, { w: 560, h: 800 }),
};
