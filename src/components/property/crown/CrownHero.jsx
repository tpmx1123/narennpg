import PropertyHero from '../shared/PropertyHero';
import { CROWN } from '../../../data/narennCrownData';

export default function CrownHero({ onBookVisit }) {
  return <PropertyHero data={CROWN} onBookVisit={onBookVisit} />;
}
