import { Link, useLocation } from 'react-router-dom'
import { m } from 'framer-motion'
import { HiArrowRight, HiCheck, HiChevronDown, HiChevronRight, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import SEO from '../components/SEO'
import NotFound from './NotFound'
import { getLocation } from '../data/locations'
import { process } from '../data/services'

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

function buildSchema(loc) {
  const url = `${BASE}${loc.path}`
  const { office } = loc
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${url}#office`,
      name: `Selections Technologies — ${loc.city}`,
      url,
      description: loc.metaDescription,
      image: `${BASE}/logo.png`,
      telephone: office.tel,
      email: 'info@selectionstechnologies.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: office.street,
        addressLocality: office.locality,
        addressRegion: office.region,
        addressCountry: loc.countryCode,
      },
      areaServed: { '@type': 'Country', name: loc.country },
      parentOrganization: { '@id': `${BASE}/#organization` },
      makesOffer: loc.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, url: `${BASE}/services/${s.slug}` },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: loc.faqs.map(({ q, a }) => ({
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
        { '@type': 'ListItem', position: 2, name: loc.heading, item: url },
      ],
    },
  ]
}

export default function LocationPage() {
  const { pathname } = useLocation()
  const loc = getLocation(pathname.replace(/\/$/, ''))

  if (!loc) return <NotFound />

  const { heading, eyebrow, tagline, intro, highlights, services, industries, faqs, office, city, country } = loc

  return (
    <>
      <SEO title={loc.metaTitle} description={loc.metaDescription} canonical={loc.path} appendSiteName={false} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(loc)) }} />

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue rounded-full blur-3xl opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-cyan rounded-full blur-3xl opacity-10 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center flex-wrap gap-1.5 text-sm text-slate-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <HiChevronRight className="w-4 h-4" />
            <span className="text-slate-200" aria-current="page">{heading}</span>
          </nav>

          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/15 text-brand-cyan text-sm font-semibold">
            <HiOutlineLocationMarker className="w-4 h-4" /> {eyebrow}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">{heading}</h1>
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
              About Us in {city}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-6 leading-tight">
              A Local Team for <span className="text-gradient">{country} Businesses</span>
            </h2>
            {intro.map((p) => (
              <p key={p.slice(0, 24)} className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5">
                {p}
              </p>
            ))}
          </div>

          <aside className="lg:col-span-2 rounded-3xl bg-surface border border-slate-200 p-8">
            <h3 className="text-lg font-bold text-navy mb-4">Why businesses choose us</h3>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-brand-blue text-white flex items-center justify-center">
                    <HiCheck className="w-3.5 h-3.5" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* ─── Services ─────────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
              Our Services in <span className="text-gradient">{country}</span>
            </h2>
          </div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((s, i) => (
              <m.div key={s.slug} variants={fadeUp} custom={i}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex h-full flex-col p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-blue/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="inline-flex w-10 h-10 mb-4 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white font-bold text-sm items-center justify-center">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-bold text-navy mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:gap-3 transition-all">
                    Learn More <HiArrowRight />
                  </span>
                </Link>
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

      {/* ─── Industries ───────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-navy mb-6">Industries We Work With in {country}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((t) => (
              <span key={t} className="px-4 py-2 rounded-xl bg-surface border border-slate-200 text-sm font-medium text-slate-700">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Office ───────────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-4">
              Visit or Call
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-6">Our {city} Office</h2>
            <ul className="space-y-5 text-slate-700">
              <li className="flex items-start gap-4">
                <HiOutlineLocationMarker className="mt-0.5 w-6 h-6 shrink-0 text-brand-blue" />
                <span>
                  Selections Technologies
                  <br />
                  {office.street}, {office.locality}, {country}
                </span>
              </li>
              <li className="flex items-center gap-4">
                <HiOutlinePhone className="w-6 h-6 shrink-0 text-brand-blue" />
                <a href={`tel:${office.tel}`} className="font-semibold hover:text-brand-blue transition-colors">{office.phone}</a>
              </li>
              <li className="flex items-center gap-4">
                <HiOutlineMail className="w-6 h-6 shrink-0 text-brand-blue" />
                <a href="mailto:info@selectionstechnologies.com" className="font-semibold break-all hover:text-brand-blue transition-colors">
                  info@selectionstechnologies.com
                </a>
              </li>
            </ul>
            <Link
              to="/book-demo"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-brand-blue hover:bg-blue-500 text-white font-semibold rounded-xl transition-all"
            >
              Book a Free Consultation <HiArrowRight />
            </Link>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white min-h-[320px]">
            <iframe
              title={`Map of Selections Technologies ${city} office`}
              src={`https://maps.google.com/maps?q=${office.map}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              className="h-full w-full min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
              Frequently Asked <span className="text-gradient">Questions</span>
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

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-brand-blue via-blue-600 to-brand-cyan relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Let&apos;s Talk About Your Project</h2>
          <p className="text-blue-100 text-lg mb-8">
            Tell us what you need and get a free, no-obligation quote from our {city} team.
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
