import { m } from 'framer-motion'
import SEO from '../components/SEO'
import CountUp from '../components/CountUp'
import { HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineStar, HiOutlineHeart, HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const values = [
  {
    icon: HiOutlineLightningBolt,
    title: 'Innovation',
    desc: 'We embrace emerging technologies and creative thinking to build forward-looking solutions.',
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Integrity',
    desc: 'Transparency and honesty form the foundation of every client relationship we build.',
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
  },
  {
    icon: HiOutlineStar,
    title: 'Excellence',
    desc: 'We hold ourselves to the highest standards — in code quality, design, and communication.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
  {
    icon: HiOutlineHeart,
    title: 'Customer Satisfaction',
    desc: 'Your success is our success. We go above and beyond to ensure outstanding client outcomes.',
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
  },
]

const stats = [
  { end: 100, suffix: '+', label: 'Projects Delivered' },
  { end: 50, suffix: '+', label: 'Happy Clients' },
  { end: 5, suffix: '+', label: 'Years Experience' },
  { end: 6, label: 'Core Services' },
]

const aboutLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://selectionstechnologies.com/about#webpage',
  url: 'https://selectionstechnologies.com/about',
  name: 'About Selections Technologies',
  description:
    'Selections Technologies is a technology company dedicated to delivering high-quality software solutions, modern websites, and innovative digital services.',
  isPartOf: { '@id': 'https://selectionstechnologies.com/#website' },
  about: { '@id': 'https://selectionstechnologies.com/#organization' },
}

export default function About() {
  return (
    <>
      <SEO
        title="About Us | UK IT & Web Agency"
        description="Selections Technologies is a dedicated IT company delivering high-quality software solutions, modern websites, and innovative digital services. Learn about our mission, vision, and core values."
        keywords="about Selections Technologies, Selection Technologies company, Selections Tech, Selection Tech, IT company UK, software house UK, web development agency UK, digital agency UK, tech company UK, professional web developers UK, graphic design company UK, Shopify experts UK, WordPress experts UK, digital marketing agency UK, who is Selections Technologies, best software house UK, top IT company UK, technology solutions UK, company mission vision values"
        canonical="/about"
        ogType="website"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }} />
      {/* ─── Page Hero ────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute top-10 right-0 w-96 h-96 bg-brand-blue rounded-full blur-3xl opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-cyan rounded-full blur-3xl opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <m.div initial={false} animate="visible" variants={stagger} className="motion-safe:animate-fade-up">
            <m.span
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-4"
            >
              Who We Are
            </m.span>
            <m.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6"
            >
              About <span className="text-gradient">Us</span>
            </m.h1>
            <m.p
              variants={fadeUp}
              className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed"
            >
              We are a passionate team of technologists committed to building digital solutions that matter.
            </m.p>
          </m.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent" />
      </section>

      {/* ─── Company Overview ─────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-14 items-center"
          >
            {/* Text */}
            <m.div variants={fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-4">
                Company Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-6 leading-tight">
                Driven by Technology,{' '}
                <span className="text-gradient">Guided by Purpose</span>
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-5">
                Selections Technologies is a technology company dedicated to delivering high-quality
                software solutions, modern websites, and innovative digital services. Founded with a
                vision to bridge the gap between businesses and technology, we partner with companies
                of all sizes to craft solutions that are not just functional — but transformative.
              </p>
              <p className="text-slate-500 text-base leading-relaxed mb-8">
                Our multidisciplinary team of developers, designers, and consultants brings together
                diverse expertise to tackle complex challenges and deliver results that exceed expectations.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
              >
                Work With Us <HiArrowRight />
              </Link>
            </m.div>

            {/* Stats grid */}
            <m.div
              variants={stagger}
              className="grid grid-cols-2 gap-5"
            >
              {stats.map(({ end, suffix, label }, i) => (
                <m.div
                  key={label}
                  variants={fadeUp}
                  custom={i}
                  className="p-7 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-gradient mb-2"><CountUp end={end} suffix={suffix} /></div>
                  <div className="text-slate-500 text-sm font-medium">{label}</div>
                </m.div>
              ))}
            </m.div>
          </m.div>
        </div>
      </section>

      {/* ─── Mission & Vision ─────────────────────────────── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Mission */}
            <m.div
              variants={fadeUp}
              className="p-8 rounded-2xl glass border-brand-blue/20 hover:border-brand-blue/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-blue-600 flex items-center justify-center text-white text-xl font-black mb-5">
                M
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                To provide reliable and innovative technology solutions that empower businesses to
                achieve their goals, streamline operations, and stay ahead in a rapidly evolving
                digital landscape.
              </p>
            </m.div>

            {/* Vision */}
            <m.div
              variants={fadeUp}
              className="p-8 rounded-2xl glass border-brand-cyan/20 hover:border-brand-cyan/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan to-cyan-600 flex items-center justify-center text-white text-xl font-black mb-5">
                V
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed">
                To become a trusted technology partner for businesses worldwide, recognized for our
                commitment to innovation, quality, and the transformative impact we create for every
                client we serve.
              </p>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* ─── Values ───────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-4">
              Core Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              The Principles That <span className="text-gradient">Drive Us</span>
            </h2>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map(({ icon: Icon, title, desc, color, bg }, i) => (
              <m.div
                key={title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center"
              >
                <div className={`inline-flex p-4 rounded-2xl ${bg} mb-5`}>
                  <Icon className={`${color} text-2xl`} size={26} />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-navy-dark via-navy to-navy-light relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue rounded-full blur-3xl opacity-10 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Let's Build Something{' '}
              <span className="text-gradient">Great Together</span>
            </m.h2>
            <m.p variants={fadeUp} className="text-slate-400 mb-8">
              Partner with us and experience the Selections Technologies difference.
            </m.p>
            <m.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-brand-blue/30 hover:-translate-y-0.5"
              >
                Contact Us <HiArrowRight />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all hover:-translate-y-0.5"
              >
                Our Services
              </Link>
            </m.div>
          </m.div>
        </div>
      </section>
    </>
  )
}
