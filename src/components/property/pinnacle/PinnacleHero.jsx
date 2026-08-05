import PropertyHero from '../shared/PropertyHero';
import { PINNACLE } from '../../../data/narennPinnacleData';

export default function PinnacleHero({ onBookVisit }) {
  return <PropertyHero data={PINNACLE} onBookVisit={onBookVisit} />;
}
