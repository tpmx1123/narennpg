const CLOUD_NAME = 'dcrdkvt2q';

/**
 * Pull the versioned public path from any Cloudinary delivery URL.
 * e.g. ".../upload/f_auto,q_auto/v123/foo.jpg" → "v123/foo.jpg"
 */
function publicPath(url) {
  if (!url) return '';
  const match = String(url).match(/\/upload\/(.+)$/);
  if (!match) return String(url).replace(/^\/+/, '');
  const rest = match[1];
  const versioned = rest.match(/(v\d+\/.+)$/);
  return versioned ? versioned[1] : rest.split('/').filter(Boolean).pop();
}

function isCloudinary(url) {
  return typeof url === 'string' && url.includes('res.cloudinary.com');
}

/**
 * Optimized still image. Always f_auto + eco quality; optional crop size.
 * @param {string} src - Full Cloudinary URL or "v123/file.jpg"
 * @param {{ w?: number, h?: number, crop?: string, gravity?: string, q?: string }} opts
 */
export function cldImg(src, { w, h, crop = 'fill', gravity = 'auto', q = 'auto:eco' } = {}) {
  if (!src) return src;
  if (!isCloudinary(src) && !/^v\d+\//.test(src)) return src;

  const path = isCloudinary(src) ? publicPath(src) : src;
  const parts = [`f_auto`, `q_${q}`];
  if (w || h) {
    parts.push(`c_${crop}`);
    if (gravity && crop !== 'limit' && crop !== 'scale' && crop !== 'fit') {
      parts.push(`g_${gravity}`);
    }
    if (w) parts.push(`w_${w}`);
    if (h) parts.push(`h_${h}`);
  }

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${parts.join(',')}/${path}`;
}

/**
 * Optimized MP4 for <video>. Caps width + bitrate; strip audio when muted loops.
 * @param {string} src
 * @param {{ w?: number, q?: string, muted?: boolean }} opts
 */
export function cldVideo(src, { w = 1280, q = 'auto:eco', muted = false } = {}) {
  if (!src) return src;
  const path = isCloudinary(src) ? publicPath(src) : src;
  const parts = [
    'f_mp4',
    `q_${q}`,
    'vc_auto',
    'c_limit',
    `w_${w}`,
  ];
  if (muted) parts.push('ac_none');

  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${parts.join(',')}/${path}`;
}

/**
 * Poster frame from a video asset.
 */
export function cldVideoPoster(src, { w = 640, h = 400, so = 1 } = {}) {
  if (!src) return src;
  const path = isCloudinary(src) ? publicPath(src).replace(/\.(mp4|webm|mov)$/i, '.jpg') : src;
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_${so},c_fill,g_auto,w_${w},h_${h},q_auto:eco,f_jpg/${path}`;
}

/** Presets used across the home page */
export const Cld = {
  heroVideo: (src) => cldVideo(src, { w: 1280, q: 'auto:eco', muted: false }),
  cardVideo: (src) => cldVideo(src, { w: 480, q: 'auto:eco', muted: true }),
  cardPoster: (src) => cldVideoPoster(src, { w: 560, h: 800 }),
  tile: (src) => cldImg(src, { w: 560, h: 360 }),
  heroStill: (src) => cldImg(src, { w: 1200, h: 900 }),
  content: (src) => cldImg(src, { w: 900, h: 700 }),
  wide: (src) => cldImg(src, { w: 1400, h: 800, crop: 'fill' }),
  icon: (src) => cldImg(src, { w: 96, h: 96, crop: 'fit', gravity: undefined }),
  logo: (src) => cldImg(src, { w: 240, crop: 'limit', gravity: undefined }),
  ornament: (src) => cldImg(src, { w: 1200, crop: 'limit', gravity: undefined }),
  /** Desktop mega-menu thumbnails */
  navCard: (src) => cldImg(src, { w: 400, h: 260 }),
};
