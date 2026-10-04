import LegalPage from '../components/LegalPage'

const sections = [
  {
    title: 'Security in Everything We Build',
    body: [
      'Security is part of every website, store and app we deliver — not an optional extra. As standard, the projects we build include:',
      [
        'HTTPS/SSL so all data between your visitors and your site is encrypted.',
        'Up-to-date software, themes and plugins from trusted sources.',
        'Protection for forms against spam and abuse.',
        'Secure admin logins with strong passwords, and two-factor authentication where the platform supports it.',
        'Regular backups on our maintenance and care plans.',
      ],
    ],
  },
  {
    title: 'Your Logins & Access',
    body: [
      [
        'Wherever possible, we ask you to create a separate user or collaborator account for us instead of sharing your own password.',
        'Access is limited to the team members working on your project.',
        'Logins are only used for your project and are never shared with anyone else.',
        'When the project ends, you can remove our access, and we recommend changing any passwords you shared with us.',
      ],
    ],
  },
  {
    title: 'How We Protect Data',
    body: [
      [
        'We use reputable, secure providers for email, file storage and hosting.',
        'Our team accounts are protected with strong passwords and two-factor authentication.',
        'Client files and data are only kept for as long as they are needed.',
        'Payments are handled by trusted payment providers — we never store card details.',
      ],
    ],
  },
  {
    title: 'Maintenance & Monitoring',
    body: [
      'On our maintenance and care plans we keep your software updated, take regular backups and check your site for problems, so security issues are fixed before they affect your business. Ask us which level of monitoring is included in your plan.',
    ],
  },
  {
    title: 'If Something Goes Wrong',
    body: [
      'If we find a security issue affecting your website or data, we will tell you quickly, explain what happened and work with you to fix it. Where personal data is involved, we follow the breach process in our GDPR & Your Rights page.',
    ],
  },
  {
    title: 'Reporting a Vulnerability',
    body: [
      'If you believe you have found a security problem on our website or on a site we have built, please email info@selectionstechnologies.com with the subject "Security". Include as much detail as you can, and please give us reasonable time to fix the issue before sharing it publicly. We will reply as soon as possible and keep you updated.',
    ],
  },
]

const summary = [
  'Every site we build uses HTTPS and up-to-date, trusted software.',
  'We ask for separate user accounts instead of your own password.',
  'Only the people working on your project can access your logins.',
  'Found a security issue? Email us and we will act quickly.',
]

export default function Security() {
  return (
    <LegalPage
      path="/security"
      seo={{
        title: 'Security',
        description:
          'How Selections Technologies keeps your website, logins and data secure — from HTTPS and backups to access control and responsible disclosure.',
      }}
      title="Security"
      intro="How we keep your website, your logins and your data safe — during your project and after launch."
      summary={summary}
      sections={sections}
    />
  )
}
