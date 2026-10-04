import LegalPage from '../components/LegalPage'

const sections = [
  {
    title: 'What Are Cookies?',
    body: [
      'Cookies are small text files a website saves on your device. They can be used to make a site work, remember your preferences or measure how people use it. Similar technologies, such as local storage, work in the same way and are covered by this policy too.',
    ],
  },
  {
    title: 'Cookies We Use',
    body: [
      'This website does not currently use analytics, advertising or tracking cookies. We do not track you across other websites and we do not build advertising profiles.',
      'Your browser may store small technical files needed to load the site quickly and securely. These are strictly necessary and do not identify you personally.',
    ],
  },
  {
    title: 'Third-Party Services',
    body: [
      'Some features take you to other services, such as WhatsApp, Facebook, Instagram or LinkedIn, when you click their links. Once you are on those sites, their own cookie and privacy policies apply.',
    ],
  },
  {
    title: 'Managing Cookies',
    body: [
      'You can view, block or delete cookies at any time through your browser settings. Blocking all cookies may stop some websites from working properly.',
    ],
  },
  {
    title: 'Changes to This Policy',
    body: [
      'If we start using analytics or marketing cookies in future, we will update this page and ask for your consent before setting any non-essential cookies, as required by UK law (PECR).',
    ],
  },
]

const summary = [
  'This website does not use analytics or advertising cookies.',
  'We do not track you across other websites.',
  'If that ever changes, we will ask for your consent first.',
  'You can manage cookies at any time in your browser.',
]

export default function CookiePolicy() {
  return (
    <LegalPage
      path="/cookie-policy"
      seo={{
        title: 'Cookie Policy',
        description: 'Which cookies the Selections Technologies website uses, why, and how you can manage them.',
      }}
      title="Cookie Policy"
      intro="What cookies this website uses — and, just as importantly, what it does not."
      summary={summary}
      sections={sections}
    />
  )
}
