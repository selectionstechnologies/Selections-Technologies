import { m } from 'framer-motion'
import SEO from '../components/SEO'
import { HiOutlineCheckCircle, HiArrowRight, HiArrowDown } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { services, process } from '../data/services'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: 'easeOut' },
  }),
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }

const servicesLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Selections Technologies Services',
  url: 'https://selectionstechnologies.com/services',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `https://selectionstechnologies.com/services/${s.slug}`,
    name: s.title,
  })),
}

export default function Services() {
  return (
    <>
      <SEO
        title="IT & Web Development Services UK"
        description="Selections Technologies offers web development, Shopify stores, WordPress websites, mobile apps, digital marketing, graphic design, logo design, SEO, social media marketing, AI chatbots, CRM, custom software and IT consulting. Get a free quote!"
        canonical="/services"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }} />

      {/* ─── Page Hero ────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue rounded-full blur-3xl opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-cyan rounded-full blur-3xl opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <m.div initial={false} animate="visible" variants={stagger} className="motion-safe:animate-fade-up">
            <m.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-4">
              What We Do
            </m.span>
            <m.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
              All-In-One <span className="text-gradient">IT Services</span>
            </m.h1>
            <m.p variants={fadeUp} className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
              From websites and mobile apps to digital marketing, AI chatbots, and graphic design — we are the only IT partner your business needs.
            </m.p>
          </m.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent" />
      </section>

      {/* ─── Service Cards ────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {services.map(({ slug, icon: Icon, title, desc, features, gradient, iconBg, iconColor, border }, i) => (
              <m.div
                key={title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`relative p-7 rounded-2xl border bg-gradient-to-br ${gradient} ${border} transition-all duration-300 overflow-hidden group`}
              >
                <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors" />

                <div className={`inline-flex p-3 rounded-xl ${iconBg} mb-5`}>
                  <Icon className={`${iconColor}`} size={24} />
                </div>
                <h2 className="text-lg font-bold text-navy mb-2">
                  <Link to={`/services/${slug}`} className="hover:underline underline-offset-4">
                    {title}
                  </Link>
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>

                <ul className="grid grid-cols-2 gap-2 mb-5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                      <HiOutlineCheckCircle className={`${iconColor} shrink-0`} size={14} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-5">
                  <Link
                    to={`/services/${slug}`}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold ${iconColor} hover:gap-3 transition-all`}
                  >
                    Learn More<span className="sr-only"> about {title}</span> <HiArrowRight size={14} />
                  </Link>
                  <Link to="/contact" className="text-sm font-semibold text-slate-500 hover:text-navy transition-colors">
                    Get a Quote
                  </Link>
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* ─── Our Process ──────────────────────────────────── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-4">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our <span className="text-gradient">Process</span>
            </h2>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {process.map(({ step, title, desc }, i) => (
              <m.div
                key={step}
                variants={fadeUp}
                custom={i}
                className="relative p-6 glass rounded-2xl group hover:border-brand-cyan/30 transition-colors"
              >
                <div className="text-4xl font-black text-gradient opacity-60 mb-4">{step}</div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                {i < process.length - 1 && (
                  <>
                    <HiArrowDown className="sm:hidden absolute left-1/2 -bottom-3 -translate-x-1/2 text-brand-blue text-xl z-10 bg-navy rounded-full" />
                    <HiArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-brand-blue text-xl z-10 bg-navy rounded-full" />
                  </>
                )}
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-cyan">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Have a Project in Mind?
            </m.h2>
            <m.p variants={fadeUp} className="text-blue-100 mb-8">
              Let's discuss your requirements and craft a solution that exceeds your expectations.
            </m.p>
            <m.div variants={fadeUp}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-0.5"
              >
                Get In Touch <HiArrowRight />
              </Link>
            </m.div>
          </m.div>
        </div>
      </section>
    </>
  )
}
