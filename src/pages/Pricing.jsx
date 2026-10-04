import { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { m, AnimatePresence } from 'framer-motion'
import {
  HiArrowRight,
  HiCheck,
  HiMinus,
  HiChevronDown,
  HiOutlineGlobeAlt,
  HiOutlineSearch,
  HiOutlineSpeakerphone,
  HiOutlineChip,
} from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import SEO from '../components/SEO'
import PricingPlans, { growthPlans } from '../components/PricingPlans'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

// true = included, false = not included, string = plan-specific value
const comparison = [
  {
    group: 'Website',
    icon: HiOutlineGlobeAlt,
    rows: [
      { label: 'Website pages', values: ['Up to 5', 'Up to 10', 'Up to 40'] },
      { label: 'Mobile responsive design', values: [true, true, true] },
      { label: 'WhatsApp button & contact form', values: [true, true, true] },
      { label: 'Blog / CMS', values: [false, true, true] },
      { label: 'Speed & performance optimisation', values: [false, true, true] },
      { label: 'E-commerce store & custom integrations', values: [false, false, true] },
    ],
  },
  {
    group: 'SEO',
    icon: HiOutlineSearch,
    rows: [
      { label: 'SEO keywords tracked', values: ['10', '20', '50'] },
      { label: 'Meta titles & descriptions', values: [true, true, true] },
      { label: 'URL structure & canonical review', values: [false, true, true] },
      { label: 'Local directory submissions', values: [false, true, true] },
      { label: 'Competitor & keyword gap analysis', values: [false, false, true] },
      { label: 'Internal linking & content optimisation', values: [false, false, true] },
    ],
  },
  {
    group: 'Marketing',
    icon: HiOutlineSpeakerphone,
    rows: [
      { label: 'Google Business Profile setup', values: [true, true, true] },
      { label: 'Social media posts', values: ['8 / month', '16 / month', 'Full management'] },
      { label: 'Paid ads management', values: [false, 'Meta or Google', 'Meta + Google'] },
      { label: 'A/B testing', values: [false, false, true] },
    ],
  },
  {
    group: 'AI & Automation',
    icon: HiOutlineChip,
    rows: [
      { label: 'AI website chatbot', values: [false, true, true] },
      { label: 'WhatsApp automation', values: [false, false, true] },
      { label: 'CRM integration & lead workflows', values: [false, false, true] },
      { label: 'Dedicated account manager', values: [false, false, true] },
    ],
  },
]

const faqs = [
  {
    q: 'Which plan is right for my business?',
    a: 'Silver is ideal if you are just getting online and need a professional website with basic SEO. Gold suits growing businesses that want steady leads through ads and an AI chatbot. Platinum is built for established businesses that want full marketing management and advanced automation. Not sure? Book a free consultation and we will recommend the best fit.',
  },
  {
    q: 'Can I upgrade or change my plan later?',
    a: 'Yes. As your business grows you can move to a higher plan — just get in touch and our team will handle the switch.',
  },
  {
    q: 'Is the advertising budget included?',
    a: 'Our plans cover the setup and management of your ad campaigns. The advertising budget you spend on Meta or Google is paid separately and stays fully in your control.',
  },
  {
    q: 'Do you offer custom packages?',
    a: 'Absolutely. If you need a mix of services that is not covered by these plans — such as a mobile app, custom software or a CRM — we will build a package tailored to your goals.',
  },
  {
    q: 'How do I get started?',
    a: 'Click “Get Started” on any plan or contact us on WhatsApp. We will have a short call to understand your business, then share a clear timeline and kick off your project.',
  },
]

// Per-plan column styling, in the same order as growthPlans (Silver, Gold, Platinum)
const columns = [
  {
    bar: 'bg-gradient-to-r from-slate-400 to-slate-600',
    name: 'text-slate-700',
    check: 'bg-slate-700 text-white',
    value: 'bg-slate-100 text-slate-800',
    tint: '',
    button: 'bg-slate-800 text-white hover:bg-slate-900',
  },
  {
    bar: 'bg-gradient-to-r from-brand-blue to-brand-cyan',
    name: 'text-brand-blue',
    check: 'bg-brand-blue text-white',
    value: 'bg-brand-blue/10 text-brand-blue',
    tint: 'bg-brand-blue/[0.04]',
    button: 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-lg shadow-brand-blue/30 hover:opacity-95',
  },
  {
    bar: 'bg-gradient-to-r from-violet-500 to-fuchsia-500',
    name: 'text-violet-700',
    check: 'bg-violet-600 text-white',
    value: 'bg-violet-100 text-violet-700',
    tint: '',
    button: 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-700 hover:to-fuchsia-700',
  },
]

function Cell({ value, col }) {
  if (value === true) {
    return (
      <span className={`inline-flex w-7 h-7 rounded-full items-center justify-center shadow-sm ${col.check}`}>
        <HiCheck className="w-4 h-4" aria-hidden="true" />
        <span className="sr-only">Included</span>
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="inline-flex w-7 h-7 items-center justify-center text-slate-300">
        <HiMinus className="w-5 h-5" aria-hidden="true" />
        <span className="sr-only">Not included</span>
      </span>
    )
  }
  return (
    <span className={`inline-block px-3 py-1 rounded-lg text-sm font-semibold whitespace-nowrap ${col.value}`}>{value}</span>
  )
}

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <SEO
        title="Pricing | Website & SEO Packages"
        description="Transparent monthly packages from Selections Technologies — combining a professional website, SEO, digital marketing and AI chatbot automation. Plans from $249/month."
        keywords="website and SEO package, digital marketing packages UK, SEO pricing, website design pricing, AI chatbot pricing, affordable marketing plans, Selections Technologies pricing"
        canonical="/pricing"
      />

      {/* ─── Page Hero ────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue rounded-full blur-3xl opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500 rounded-full blur-3xl opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <m.div initial={false} animate="visible" variants={stagger} className="motion-safe:animate-fade-up">
            <m.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-4">
              Pricing
            </m.span>
            <m.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
              Simple Plans, <span className="text-gradient">Serious Growth</span>
            </m.h1>
            <m.p variants={fadeUp} className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
              One monthly package for your website, SEO, marketing and AI automation — no hidden fees,
              no juggling multiple agencies.
            </m.p>
          </m.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── Plans ────────────────────────────────────────── */}
      <PricingPlans showHeader={false} />

      {/* ─── Comparison Table ─────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <m.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-4">
              Compare Plans
            </m.span>
            <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-navy mb-4 leading-tight">
              Find the <span className="text-gradient">Perfect Fit</span>
            </m.h2>
            <m.p variants={fadeUp} className="text-slate-500 text-base leading-relaxed">
              See exactly what&apos;s included in each package, side by side.
            </m.p>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-x-auto"
          >
            <table className="w-full min-w-[720px] table-fixed text-left border-separate border-spacing-0">
              <colgroup>
                <col className="w-[34%]" />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th className="sticky left-0 z-10 bg-white p-6 align-bottom border-b-2 border-slate-200">
                    <span className="text-xs font-bold tracking-widest uppercase text-slate-400">Features</span>
                  </th>
                  {growthPlans.map((p, i) => (
                    <th key={p.name} className={`relative p-6 pt-8 text-center align-bottom border-b-2 border-slate-200 ${columns[i].tint}`}>
                      <span className={`absolute top-0 left-4 right-4 h-1 rounded-b-full ${columns[i].bar}`} />
                      {p.popular && (
                        <span className="inline-block mb-2 px-2.5 py-0.5 rounded-full bg-brand-blue text-white text-[10px] font-bold tracking-wider uppercase">
                          Most Popular
                        </span>
                      )}
                      <p className={`text-lg font-bold ${columns[i].name}`}>{p.name}</p>
                      <p className="text-3xl font-extrabold text-navy mt-1">
                        ${p.price}
                        <span className="text-sm font-medium text-slate-400">/mo</span>
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map(({ group, icon: GroupIcon, rows }) => (
                  <Fragment key={group}>
                    <tr>
                      <td colSpan={4} className="bg-slate-50 px-6 py-3.5 border-b border-slate-200">
                        <span className="sticky left-6 inline-flex items-center gap-2.5">
                          <span className="w-7 h-7 rounded-lg bg-navy text-white flex items-center justify-center">
                            <GroupIcon className="w-4 h-4" />
                          </span>
                          <span className="text-sm font-bold tracking-wide uppercase text-navy">{group}</span>
                        </span>
                      </td>
                    </tr>
                    {rows.map((row) => (
                      <tr key={row.label} className="group">
                        <td className="sticky left-0 z-10 bg-white group-hover:bg-slate-50 px-6 py-4 text-[15px] font-medium text-slate-800 border-b border-slate-100 transition-colors">
                          {row.label}
                        </td>
                        {row.values.map((v, i) => (
                          <td
                            key={i}
                            className={`px-4 py-4 text-center border-b border-slate-100 group-hover:bg-slate-50 transition-colors ${columns[i].tint}`}
                          >
                            <Cell value={v} col={columns[i]} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
                <tr>
                  <td className="sticky left-0 z-10 bg-white p-6" />
                  {growthPlans.map((p, i) => (
                    <td key={p.name} className={`p-6 text-center ${columns[i].tint}`}>
                      <Link
                        to="/contact"
                        className={`inline-flex items-center justify-center gap-1.5 w-full max-w-[180px] px-5 py-3 rounded-xl text-sm font-semibold transition-all ${columns[i].button}`}
                      >
                        Get Started <HiArrowRight />
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </m.div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center mb-12"
          >
            <m.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-4">
              FAQ
            </m.span>
            <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
              Pricing <span className="text-gradient">Questions</span>
            </m.h2>
          </m.div>

          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => {
              const open = openFaq === i
              return (
                <div
                  key={q}
                  className={`rounded-2xl border transition-all ${open ? 'border-brand-blue/30 bg-brand-blue/[0.03] shadow-md' : 'border-slate-200 bg-white'}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                    aria-expanded={open}
                  >
                    <span className="font-semibold text-navy">{q}</span>
                    <HiChevronDown className={`w-5 h-5 shrink-0 text-brand-blue transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 sm:px-6 pb-6 text-slate-500 text-sm leading-relaxed">{a}</p>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-brand-blue via-blue-600 to-brand-cyan relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to Grow Your Business?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Talk to our team today and get a free consultation on the right plan for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-brand-blue font-semibold rounded-xl shadow-lg shadow-black/20 hover:-translate-y-0.5 transition-all"
            >
              Get a Free Consultation <HiArrowRight />
            </Link>
            <a
              href="https://wa.me/447448091908"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/40 hover:border-white text-white font-semibold rounded-xl transition-all"
            >
              <FaWhatsapp className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
