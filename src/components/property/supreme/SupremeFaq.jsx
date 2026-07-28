import PropertyFaq from '../shared/PropertyFaq';
import { SUPREME } from '../../../data/narennSupremeData';

export default function SupremeFaq() {
  return <PropertyFaq faqs={SUPREME.faqs} />;
}
