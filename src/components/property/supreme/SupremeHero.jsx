import PropertyHero from '../shared/PropertyHero';
import { SUPREME } from '../../../data/narennSupremeData';

export default function SupremeHero({ onBookVisit }) {
  return <PropertyHero data={SUPREME} onBookVisit={onBookVisit} matchPropertiesHero />;
}
