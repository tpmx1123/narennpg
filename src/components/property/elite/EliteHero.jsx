import PropertyHero from '../shared/PropertyHero';
import { ELITE } from '../../../data/narennEliteData';

export default function EliteHero({ onBookVisit }) {
  return <PropertyHero data={ELITE} onBookVisit={onBookVisit} />;
}
