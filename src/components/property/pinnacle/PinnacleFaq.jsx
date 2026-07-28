import PropertyFaq from '../shared/PropertyFaq';
import { PINNACLE } from '../../../data/narennPinnacleData';

export default function PinnacleFaq() {
  return <PropertyFaq faqs={PINNACLE.faqs} />;
}
