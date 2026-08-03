import { motion } from 'framer-motion';
import ContactText, { PhoneWhatsAppLinks } from '../../ui/ContactText';
import SectionHeading from '../../ui/SectionHeading';
import { GACHIBOWLI_TWENTY } from '../../../data/gachibowliLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function GachibowliTwentyMinutes() {
  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="max-w-3xl mx-auto space-y-4 sm:space-y-5"
      >
        <SectionHeading
          eyebrow={GACHIBOWLI_TWENTY.eyebrow}
          title={GACHIBOWLI_TWENTY.h2}
          accent={GACHIBOWLI_TWENTY.h2Accent}
          align="center"
          titleClassName="text-3xl sm:text-[2rem] lg:text-4xl"
        />
        {GACHIBOWLI_TWENTY.paragraphs.map((para) => (
          <p
            key={para.slice(0, 48)}
            className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed text-left sm:text-center"
          >
            <ContactText>{para}</ContactText>
          </p>
        ))}
        <p className="text-center text-sm sm:text-[15px] text-brand-charcoal font-display font-semibold pt-1 sm:pt-2">
          Prefer to message?{' '}
          <PhoneWhatsAppLinks className="text-brand-burgundy font-semibold hover:underline underline-offset-2" />
        </p>
      </motion.div>
    </section>
  );
}
