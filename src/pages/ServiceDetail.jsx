import { useParams, Link } from 'react-router-dom'
import { m } from 'framer-motion'
import { HiArrowRight, HiCheck, HiChevronDown, HiChevronRight } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import SEO from '../components/SEO'
import NotFound from './NotFound'
import { getService, process } from '../data/services'

const BASE = 'https://selectionstechnologies.com'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }

function buildSchema(service) {
  const url = `${BASE}/services/${service.slug}`
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      serviceType: service.title,
      description: service.metaDescription,
      url,
      provider: { '@id': `${BASE}/#organization` },
      areaServed: [
        { '@type': 'Country', name: 'United Kingdom' },
        'Worldwide',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${service.title} services`,
        itemListElement: service.offerings.map((o) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: o.title, description: o.desc },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
        { '@type': 'ListItem', position: 3, name: service.title, item: url },
      ],
    },
  ]
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) return <NotFound />

  const { icon: Icon, title, tagline, intro, features, offerings, benefits, tools, faqs, iconBg, iconColor } = service
  const related = service.related.map(getService).filter(Boolean)

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`/services/${slug}`}
        appendSiteName={false}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(service)) }} />

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue rounded-full blur-3xl opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-cyan rounded-full blur-3xl opacity-10 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center flex-wrap gap-1.5 text-sm text-slate-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <HiChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <HiChevronRight className="w-4 h-4" />
            <span className="text-slate-200" aria-current="page">{title}</span>
          </nav>

          <div className="inline-flex w-16 h-16 mb-6 rounded-2xl items-center justify-center bg-white/10 border border-white/15 text-brand-cyan">
            <Icon size={30} />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">{title}</h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed mb-10">{tagline}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-blue hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-xl shadow-brand-blue/30 hover:-translate-y-0.5"
            >
              Get a Free Quote <HiArrowRight />
            </Link>
            <a
              href="https://wa.me/447448091908"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 hover:border-green-400 text-white font-semibold rounded-xl transition-all hover:bg-white/5"
            >
              <FaWhatsapp className="w-5 h-5 text-green-400" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ─── Overview ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-4">
              Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-6 leading-tight">
              {title} for <span className="text-gradient">Growing Businesses</span>
            </h2>
            {intro.map((p) => (
              <p key={p.slice(0, 24)} className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5">
                {p}
              </p>
            ))}
          </div>

          <aside className="lg:col-span-2 rounded-3xl bg-surface border border-slate-200 p-8">
            <div className={`inline-flex p-3 rounded-xl ${iconBg} mb-5`}>
              <Icon className={iconColor} size={24} />
            </div>
            <h3 className="text-lg font-bold text-navy mb-4">Why businesses choose us</h3>
            <ul className="space-y-3 mb-6">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-brand-blue text-white flex items-center justify-center">
                    <HiCheck className="w-3.5 h-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {features.map((f) => (
                <span key={f} className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600">
                  {f}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* ─── What We Offer ────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
              Our {title} <span className="text-gradient">Services</span>
            </h2>
          </div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {offerings.map((o, i) => (
              <m.div
                key={o.title}
                variants={fadeUp}
                custom={i}
                className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-blue/30 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="inline-flex w-10 h-10 mb-4 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white font-bold text-sm items-center justify-center">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-bold text-navy mb-2">{o.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{o.desc}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* ─── Process ──────────────────────────────────────── */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-4">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our <span className="text-gradient">Process</span>
            </h2>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ step, title: stepTitle, desc }) => (
              <li key={step} className="p-6 glass rounded-2xl">
                <div className="text-4xl font-black text-gradient opacity-70 mb-4">{step}</div>
                <h3 className="text-white font-bold text-lg mb-2">{stepTitle}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── Tools ────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-navy mb-6">Tools &amp; Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((t) => (
              <span key={t} className="px-4 py-2 rounded-xl bg-surface border border-slate-200 text-sm font-medium text-slate-700">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
              {title} <span className="text-gradient">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <details
                key={q}
                open={i === 0}
                className="group rounded-2xl border border-slate-200 open:border-brand-blue/30 open:bg-brand-blue/[0.03] open:shadow-md transition-all"
              >
                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-semibold text-navy text-base">{q}</h3>
                  <HiChevronDown className="w-5 h-5 shrink-0 text-brand-blue transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="px-5 sm:px-6 pb-6 text-slate-600 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Related Services ─────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy text-center mb-10">
              Related <span className="text-gradient">Services</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => {
                const RIcon = r.icon
                return (
                  <Link
                    key={r.slug}
                    to={`/services/${r.slug}`}
                    className="group p-7 rounded-2xl bg-white border border-slate-200 hover:border-brand-blue/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`inline-flex p-3 rounded-xl ${r.iconBg} mb-4`}>
                      <RIcon className={r.iconColor} size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2">{r.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{r.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:gap-3 transition-all">
                      Learn More <HiArrowRight />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-brand-blue via-blue-600 to-brand-cyan relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Tell us about your project and get a free, no-obligation quote — or explore our all-in-one growth packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-brand-blue font-semibold rounded-xl shadow-lg shadow-black/20 hover:-translate-y-0.5 transition-all"
            >
              Get a Free Quote <HiArrowRight />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/40 hover:border-white text-white font-semibold rounded-xl transition-all"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
