import LegalPage from '../components/LegalPage'

const sections = [
  {
    title: 'Our Commitment',
    body: [
      'Selections Technologies follows the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Where we work with customers in the European Union, we also respect the rights given by the EU GDPR.',
      'This page explains your rights in plain English. For details of what data we collect and why, see our Privacy Policy.',
    ],
  },
  {
    title: 'Your Rights',
    body: [
      [
        'Right to be informed — to know what data we collect and how we use it.',
        'Right of access — to receive a copy of the personal data we hold about you.',
        'Right to rectification — to have incorrect or incomplete data corrected.',
        'Right to erasure — to have your data deleted when we no longer need it.',
        'Right to restrict processing — to ask us to pause using your data.',
        'Right to data portability — to receive your data in a common, machine-readable format.',
        'Right to object — to stop us using your data for marketing or based on legitimate interests.',
        'Rights about automated decisions — we do not make decisions about you using fully automated processing.',
      ],
    ],
  },
  {
    title: 'How to Make a Request',
    body: [
      [
        'Email info@selectionstechnologies.com with the subject "Data Request" and tell us which right you want to use.',
        'We may ask you to confirm your identity so we never share your data with the wrong person.',
        'We respond within one month. For complex requests this can be extended by up to two more months, and we will tell you if that happens.',
        'Requests are free of charge in almost all cases.',
      ],
    ],
  },
  {
    title: 'When We Process Data for Clients',
    body: [
      'When we build or maintain a website, online store, CRM or other system for your business, we may handle personal data about your customers or staff. In that case you are the data controller and we act as your data processor.',
      'As your processor, we:',
      [
        'Only use the data to deliver the work you have asked for.',
        'Keep it confidential and limit access to team members working on your project.',
        'Do not share it with anyone else without your permission, except trusted providers needed for the work.',
        'Help you respond to data requests from your own customers.',
        'Tell you without delay if we become aware of a data breach affecting your data.',
        'Delete or return the data when our work ends, if you ask us to.',
      ],
      'We are happy to sign a Data Processing Agreement (DPA) with you — just ask.',
    ],
  },
  {
    title: 'Data Breaches',
    body: [
      'If a personal data breach happens that is likely to put people at risk, we will report it to the Information Commissioner’s Office (ICO) within 72 hours where required, and tell the people affected without undue delay.',
    ],
  },
  {
    title: 'Making a Complaint',
    body: [
      'If you are not happy with how we have handled your data, please contact us first so we can put it right. You can also complain to the ICO at ico.org.uk or by calling 0303 123 1113. Customers in the EU can contact the data protection authority in their own country.',
    ],
  },
]

const summary = [
  'You can see, correct, move or delete your personal data at any time.',
  'Just email us — requests are free and answered within one month.',
  'When we build systems for your business, we act as your data processor.',
  'We will sign a Data Processing Agreement with you on request.',
]

export default function Gdpr() {
  return (
    <LegalPage
      path="/gdpr"
      seo={{
        title: 'GDPR & Your Data Rights',
        description:
          'Your data protection rights under UK and EU GDPR, how to make a request, and how Selections Technologies handles client data as a data processor.',
      }}
      title="GDPR & Your Rights"
      intro="Your data protection rights in plain English, and how to use them."
      summary={summary}
      sections={sections}
    />
  )
}
