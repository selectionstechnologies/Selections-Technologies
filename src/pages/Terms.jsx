import LegalPage from '../components/LegalPage'

const sections = [
  {
    title: 'About These Terms',
    body: [
      'These terms and conditions apply to all services provided by Selections Technologies ("we", "us", "our"), based on Croydon High Street, United Kingdom, to any customer ("you", "your").',
      'By accepting a quote, paying a deposit or asking us to start work, you agree to these terms. If anything in your written quote or proposal differs from these terms, the quote or proposal takes priority for that project.',
    ],
  },
  {
    title: 'Our Services',
    body: [
      'We provide website development, WordPress and Shopify development, e-commerce, custom software, CRM, mobile apps, AI chatbots, digital marketing, SEO, paid advertising, graphic design and training courses.',
      'The exact scope of each project — features, pages, deliverables and timeline — is set out in the quote or proposal we send you. Work that is not listed there is outside the agreed scope.',
    ],
  },
  {
    title: 'Quotes & Acceptance',
    body: [
      'Quotes are valid for 30 days from the date they are issued. A project is confirmed once you accept the quote in writing (email or WhatsApp is fine) and pay any required deposit.',
    ],
  },
  {
    title: 'Payments',
    body: [
      [
        'Unless your quote says otherwise, we require a 50% deposit before work starts and the remaining balance before the project goes live or final files are handed over.',
        'Monthly services (such as maintenance, SEO, marketing or ad management) are billed in advance each month.',
        'Invoices are due within 7 days unless agreed otherwise.',
        'If a payment is overdue, we may pause work, take a live site offline or withhold deliverables until the balance is paid.',
        'Advertising spend on platforms such as Google or Meta is paid by you directly and is separate from our management fees.',
      ],
    ],
  },
  {
    title: 'Your Responsibilities',
    body: [
      'To keep your project on schedule, you agree to:',
      [
        'Provide content, images, logins and feedback within a reasonable time when we ask for them.',
        'Make sure you own or have permission to use any content, logos or images you give us.',
        'Nominate one person who can approve work and make decisions.',
        'Check work carefully at each review stage.',
      ],
      'If materials or feedback are delayed, delivery dates will move accordingly. If a project is on hold for more than 60 days because we are waiting on you, we may close it and invoice for the work completed.',
    ],
  },
  {
    title: 'Revisions & Changes',
    body: [
      'Each project includes the number of revision rounds stated in your quote. A revision round is one consolidated list of changes to the agreed design or functionality.',
      'New features, extra pages or changes to an already approved stage are treated as additional work. We will tell you the cost and any effect on the timeline before going ahead.',
    ],
  },
  {
    title: 'Timelines & Delivery',
    body: [
      'Timelines in our quotes are estimates based on the agreed scope and on receiving materials and feedback promptly. We will keep you updated and let you know as soon as possible if anything is likely to cause a delay.',
    ],
  },
  {
    title: 'Ownership & Intellectual Property',
    body: [
      'Once your project has been paid in full, you own the final design, content and custom code created specifically for you.',
      'Third-party items such as themes, plugins, apps, fonts and stock images remain subject to their own licences. Our own reusable tools, code libraries and know-how remain ours, but you receive a permanent licence to use them as part of your project.',
      'Unless you ask us not to, we may show the finished work in our portfolio and marketing.',
    ],
  },
  {
    title: 'Hosting, Domains & Third-Party Services',
    body: [
      'Hosting, domain names, Shopify plans, app subscriptions and similar services are provided by third parties. Where possible these are registered in your name. We are not responsible for outages, price changes or policy changes made by these providers.',
    ],
  },
  {
    title: 'Maintenance & Support',
    body: [
      'We fix any bugs in our own work that you report within 30 days of launch at no extra cost. After that, support and updates are provided under a maintenance plan or charged at our hourly rate.',
      'Problems caused by changes made by you or another developer, or by third-party updates, are not covered by this free period.',
    ],
  },
  {
    title: 'SEO & Marketing Results',
    body: [
      'Search rankings, traffic and advertising results depend on factors outside our control, such as search engine algorithms and competition. We work to industry best practice but cannot guarantee specific rankings, leads or sales.',
    ],
  },
  {
    title: 'Training Courses',
    body: [
      'Course fees must be paid before the course starts. Course materials are for your personal use and must not be shared or resold. Any certificate is issued on completion of the course requirements.',
    ],
  },
  {
    title: 'Cancellation & Refunds',
    body: [
      'You can cancel a project, monthly service or course by telling us in writing. What you pay or get back depends on how much work has been done — the full rules, with examples, are in our Refund Policy.',
      'If you are a consumer, you may also have a 14-day cancellation right under the Consumer Contracts Regulations. Your statutory rights are not affected.',
    ],
  },
  {
    title: 'Limitation of Liability',
    body: [
      'Our total liability for any project is limited to the amount you have paid us for that project. We are not liable for indirect losses such as lost profits, lost data or lost business opportunities.',
      'Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot be limited under UK law. Your statutory rights as a consumer are not affected.',
    ],
  },
  {
    title: 'Confidentiality',
    body: [
      'We keep your business information, logins and data confidential and only use them to deliver your project. How we handle personal data is explained in our Privacy Policy.',
    ],
  },
  {
    title: 'Changes to These Terms',
    body: [
      'We may update these terms from time to time. The version on this page at the time your project is confirmed applies to that project.',
    ],
  },
  {
    title: 'Governing Law',
    body: [
      'These terms are governed by the laws of England and Wales, and any disputes will be handled by the courts of England and Wales.',
    ],
  },
]

const summary = [
  'Your written quote sets the scope, price and timeline of your project.',
  'We usually take a 50% deposit, with the balance due before go-live.',
  'You own the final work once it has been paid for in full.',
  'Bugs in our work reported within 30 days of launch are fixed free.',
  'You can cancel at any time and only pay for work already done.',
  'These terms are governed by the laws of England and Wales.',
]

export default function Terms() {
  return (
    <LegalPage
      path="/terms"
      seo={{
        title: 'Terms & Conditions',
        description:
          'Terms and conditions for website development, digital marketing, software and training services provided by Selections Technologies, Croydon, UK.',
      }}
      title="Terms & Conditions"
      intro="How we work with you — payments, timelines, ownership and everything else agreed when you start a project with us."
      summary={summary}
      sections={sections}
    />
  )
}
