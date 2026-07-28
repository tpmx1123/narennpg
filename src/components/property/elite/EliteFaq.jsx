import PropertyFaq from '../shared/PropertyFaq';
import { ELITE } from '../../../data/narennEliteData';

export default function EliteFaq() {
  return <PropertyFaq faqs={ELITE.faqs} />;
}
