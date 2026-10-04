import LegalPage from '../components/LegalPage'

const sections = [
  {
    title: 'Our Approach',
    body: [
      'We want every client to be happy with their project. If something is not right, please talk to us first — most problems can be fixed quickly without anyone needing to cancel.',
      'Because our services are custom work carried out by our team, refunds are based on how much work has been completed at the time you cancel. This page explains exactly how that works.',
    ],
  },
  {
    title: 'Website, Software & Design Projects',
    body: [
      [
        'Before work starts: if you cancel after paying your deposit but before we have started any work, we refund the deposit in full.',
        'After work has started: the deposit is non-refundable, as it covers planning, scheduling and the work done in the early stages.',
        'Mid-project: if you cancel after the deposit stage, you pay for the work completed up to the cancellation date. If you have paid more than that, we refund the difference.',
        'After delivery or go-live: once a project has been delivered and approved, payments are non-refundable. Any bugs in our work are still fixed under our 30-day free support period.',
      ],
      'Example: on a £1,000 website with a £500 deposit, if you cancel when around 70% of the work is done, the amount due is £700 — so you would pay the remaining £200.',
    ],
  },
  {
    title: 'Monthly Services',
    body: [
      'SEO, digital marketing, ad management, maintenance and other monthly services can be cancelled with 30 days’ written notice. The current month is not refunded, and you will not be billed again after the notice period ends.',
      'Advertising spend paid directly to Google, Meta or other platforms is controlled by those platforms and cannot be refunded by us.',
    ],
  },
  {
    title: 'Training Courses',
    body: [
      [
        '7 days or more before the start date: full refund.',
        'Less than 7 days before the start date: you can move to a later batch at no cost, or receive a 50% refund.',
        'After the course has started: course fees are non-refundable, but you can join a later batch to catch up on missed classes, subject to availability.',
      ],
      'If we cancel or reschedule a course, you can choose a full refund or a place on the next batch.',
    ],
  },
  {
    title: 'Third-Party Costs',
    body: [
      'Domain names, hosting, premium themes, plugins, apps and stock images bought on your behalf are paid to third parties and cannot be refunded by us once purchased. Where possible, these are registered in your name so you keep them.',
    ],
  },
  {
    title: 'Your Consumer Rights',
    body: [
      'If you are buying as a consumer (not as a business), you have a 14-day cancellation period under the Consumer Contracts Regulations 2013. If you ask us to start work during those 14 days and then cancel, you will pay for the work already done.',
      'Nothing in this policy affects your statutory rights.',
    ],
  },
  {
    title: 'How to Request a Refund',
    body: [
      [
        'Email info@selectionstechnologies.com with your name, project or course name and the reason for cancelling.',
        'We confirm receipt within 2 working days and send you a breakdown of work completed and any amount due or refundable.',
        'Approved refunds are paid to your original payment method within 14 days.',
      ],
    ],
  },
]

const summary = [
  'Cancel before we start work and you get your deposit back in full.',
  'Cancel mid-project and you only pay for the work already done.',
  'Monthly services can be stopped with 30 days’ notice.',
  'Courses are fully refundable up to 7 days before the start date.',
  'Approved refunds are paid within 14 days.',
  'Your statutory consumer rights are never affected.',
]

export default function RefundPolicy() {
  return (
    <LegalPage
      path="/refund-policy"
      seo={{
        title: 'Refund Policy',
        description:
          'Clear cancellation and refund rules for website projects, monthly services and training courses at Selections Technologies, UK.',
      }}
      title="Refund Policy"
      intro="Simple, fair rules for cancellations and refunds — so you always know where you stand."
      summary={summary}
      sections={sections}
    />
  )
}
