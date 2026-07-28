import PropertyFaq from '../shared/PropertyFaq';
import { CROWN } from '../../../data/narennCrownData';

export default function CrownFaq() {
  return <PropertyFaq faqs={CROWN.faqs} />;
}
