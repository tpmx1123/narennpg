import LegalDoc from '../components/legal/LegalDoc';

const SECTIONS = [
  {
    title: '1. Information We Collect',
    body: 'We collect the following personal information through our website:',
    items: ['Full Name', 'Phone Number', 'Email Address', 'Booking Details'],
    footer: 'This information is submitted voluntarily by users through forms and inquiries.',
  },
  {
    title: '2. Why We Collect Your Data',
    body: 'We use your information for the following purposes:',
    items: [
      'To confirm your bookings and reservations',
      'To provide customer support and assistance',
      'To improve our services and user experience',
      'To send relevant updates, offers, or information (marketing communications)',
    ],
  },
  {
    title: '3. Data Sharing Policy',
    body: 'We do not share your personal data with any third parties. All information you provide is kept strictly confidential and used solely for the purposes mentioned above.',
  },
  {
    title: '4. Data Security',
    body: 'We implement appropriate security measures to protect your information from unauthorized access, misuse, or disclosure. However, please note that no method of data transmission over the Internet is 100% secure.',
  },
  {
    title: '5. Your Rights',
    body: 'You have the right to:',
    items: [
      'Request access to the personal data we hold about you',
      'Ask for corrections or updates to your information',
      'Request deletion of your data from our records',
      'Opt-out of marketing communications at any time',
    ],
    footer: 'To exercise any of these rights, please contact us using the information below.',
  },
];

export default function TermsOfUse() {
  return (
    <LegalDoc
      path="/terms-of-use/"
      title="Terms of Use | Narenn Living"
      description="Terms of Use for Narenn Living website and services — how we collect, use, and protect information when you interact with us."
      breadcrumb="Terms of Use"
      h1="Terms of"
      h1Accent="Use"
      intro="At Narenn Living, your privacy is extremely important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or interact with our services."
      sections={SECTIONS}
      contactIntro="If you have any questions or concerns regarding our privacy practices, please feel free to contact us:"
    />
  );
}
