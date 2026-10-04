import LegalPage from '../components/LegalPage'

const sections = [
  {
    title: 'Who We Are',
    body: [
      'Selections Technologies ("we", "us", "our") is based on Croydon High Street, United Kingdom. We are the data controller for personal data collected through this website and when we provide our services.',
      'If you have any questions about this policy or your data, email info@selectionstechnologies.com or call +44 7448 091908.',
    ],
  },
  {
    title: 'Information We Collect',
    body: [
      [
        'Contact details you give us: name, email address, phone number and the content of your message when you use our contact form, email, phone or WhatsApp.',
        'Project information: business details, logins, content and files you share with us so we can deliver your project.',
        'Course enrolment details: your name, contact details and payment records if you join one of our courses.',
        'Billing information: invoices and payment records. We do not store card details.',
      ],
    ],
  },
  {
    title: 'How We Use Your Information',
    body: [
      [
        'To reply to your enquiry and send you quotes.',
        'To deliver, support and invoice the services you ask for.',
        'To run training courses you enrol on.',
        'To meet our legal, tax and accounting obligations.',
        'To send you updates or offers, but only if you have agreed to receive them. You can opt out at any time.',
      ],
    ],
  },
  {
    title: 'Legal Basis for Processing',
    body: [
      'Under UK GDPR we rely on: contract (to provide services you have asked for or to take steps before a contract), legitimate interests (to reply to enquiries and run our business), legal obligation (to keep financial records), and consent (for marketing messages).',
    ],
  },
  {
    title: 'Who We Share It With',
    body: [
      'We never sell your personal data. We only share it with trusted providers that help us run our business, such as:',
      [
        'Web3Forms, which delivers messages sent through our contact form to our inbox.',
        'Our email, hosting and cloud storage providers.',
        'WhatsApp (Meta), if you choose to contact us there.',
        'Payment providers and our accountant, for billing.',
      ],
      'We may also share data if the law requires it.',
    ],
  },
  {
    title: 'International Transfers',
    body: [
      'Some of our providers store data outside the UK. Where that happens, we make sure appropriate safeguards are in place, such as UK adequacy regulations or standard contractual clauses.',
    ],
  },
  {
    title: 'How Long We Keep It',
    body: [
      [
        'Enquiries that do not become projects: up to 2 years.',
        'Client and project records: for the length of the project plus 6 years, to meet UK tax and accounting rules.',
        'Marketing preferences: until you unsubscribe.',
      ],
    ],
  },
  {
    title: 'Your Rights',
    body: [
      'You have the right to:',
      [
        'Access the personal data we hold about you.',
        'Ask us to correct inaccurate data.',
        'Ask us to delete your data.',
        'Object to or restrict how we use your data.',
        'Ask for your data in a portable format.',
        'Withdraw consent at any time where we rely on consent.',
      ],
      'To use any of these rights, email info@selectionstechnologies.com. We will respond within one month. Our GDPR & Your Rights page explains each right in more detail.',
    ],
  },
  {
    title: 'Cookies',
    body: [
      'This website does not currently use analytics or advertising cookies. See our Cookie Policy for details.',
    ],
  },
  {
    title: 'Security',
    body: [
      'We use secure, access-controlled systems to protect your data and only give access to people who need it to deliver your project. Logins you share with us are used only for your project.',
    ],
  },
  {
    title: 'Complaints',
    body: [
      'If you are unhappy with how we have handled your data, please contact us first so we can put it right. You also have the right to complain to the Information Commissioner’s Office (ICO) at ico.org.uk.',
    ],
  },
  {
    title: 'Changes to This Policy',
    body: [
      'We may update this policy from time to time. The latest version will always be available on this page.',
    ],
  },
]

const summary = [
  'We only collect what you send us — mainly your name, email, phone and message.',
  'We use it to reply to you and deliver the services you ask for.',
  'We never sell your data or use it for advertising.',
  'You can ask to see, correct or delete your data at any time.',
]

export default function PrivacyPolicy() {
  return (
    <LegalPage
      path="/privacy-policy"
      seo={{
        title: 'Privacy Policy',
        description:
          'How Selections Technologies collects, uses and protects your personal data under UK GDPR, and the rights you have over it.',
      }}
      title="Privacy Policy"
      intro="What personal data we collect, why we collect it, and how you stay in control of it."
      summary={summary}
      sections={sections}
    />
  )
}
