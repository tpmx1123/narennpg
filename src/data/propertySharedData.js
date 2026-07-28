import { PROPERTIES_LIST } from './propertiesPageData';

export const PROPERTY_ADDRESS =
  'Road 21, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500084';

export const PROPERTY_HIGHLIGHTS = [
  { icon: 'Bed', title: 'Furnished AC rooms', description: 'Single, double, triple and quad sharing options.' },
  { icon: 'UtensilsCrossed', title: 'Four meals a day', description: 'Home-style food from our in-house kitchen.' },
  { icon: 'Wifi', title: 'High-speed WiFi', description: 'Fibre connectivity for work and study.' },
  { icon: 'Shield', title: 'Biometric security', description: 'No-curfew access with 24/7 CCTV coverage.' },
  { icon: 'Sparkles', title: 'Housekeeping', description: 'Daily cleaning and laundry support.' },
  { icon: 'Users', title: 'Community spaces', description: 'Terrace lounges and resident events.' },
];

export const PROPERTY_AMENITIES = [
  'Fully furnished AC rooms with bed, wardrobe and study desk',
  'Four home-style meals a day from our in-house kitchen',
  'High-speed fibre WiFi across the property',
  'Daily housekeeping and regular linen changes',
  'Laundry support',
  '24/7 CCTV and biometric no-curfew access',
  'On-site professional management',
  'Power backup for essential systems',
  'Terrace and common lounge spaces',
  'Community events and festival celebrations',
];

export const PROPERTY_ROOM_OPTIONS = [
  { label: 'Single Sharing', href: '/rooms/single-sharing/' },
  { label: 'Double Sharing', href: '/rooms/double-sharing/' },
  { label: 'Triple Sharing', href: '/rooms/triple-sharing/' },
  { label: 'Quad Sharing', href: '/rooms/quad-sharing/' },
];

export function getOtherProperties(currentId) {
  return PROPERTIES_LIST.filter((p) => p.id !== currentId);
}

export function getPropertyListItem(id) {
  return PROPERTIES_LIST.find((p) => p.id === id);
}
