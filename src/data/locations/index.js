import ameerpet from './ameerpet';
import begumpet from './begumpet';
import cyberTowers from './cyber-towers';
import durgamCheruvu from './durgam-cheruvu';
import financialDistrict from './financial-district';
import jubileeHills from './jubilee-hills';
import kothaguda from './kothaguda';
import kukatpally from './kukatpally';
import manikonda from './manikonda';
import mindspace from './mindspace';
import miyapur from './miyapur';
import nallagandla from './nallagandla';
import nanakramguda from './nanakramguda';
import raidurg from './raidurg';

/** SEO satellite location pages (Madhapur hub + custom pages stay separate). */
export const SEO_LOCATION_PAGES = [
  durgamCheruvu,
  jubileeHills,
  mindspace,
  cyberTowers,
  financialDistrict,
  raidurg,
  nanakramguda,
  kothaguda,
  manikonda,
  nallagandla,
  miyapur,
  kukatpally,
  ameerpet,
  begumpet,
];

export const SEO_LOCATION_BY_SLUG = Object.fromEntries(
  SEO_LOCATION_PAGES.map((page) => [page.slug, page])
);

export function getSeoLocation(slug) {
  return SEO_LOCATION_BY_SLUG[slug] ?? null;
}
