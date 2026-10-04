import { useState } from 'react'
import { Link } from 'react-router-dom'
import { m } from 'framer-motion'
import {
  HiOutlineUsers,
  HiOutlineCode,
  HiOutlineSupport,
  HiOutlineBadgeCheck,
  HiArrowRight,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiBadgeCheck,
  HiOutlineGlobeAlt,
  HiOutlineDeviceMobile,
  HiOutlineSpeakerphone,
  HiOutlineTrendingUp,
  HiOutlinePhone,
  HiOutlineLockClosed,
} from 'react-icons/hi'
import { FaStar, FaWhatsapp, FaShopify, FaRobot } from 'react-icons/fa'
import { MdSend } from 'react-icons/md'
import {
  HiOutlineRocketLaunch,
  HiOutlineCodeBracket,
  HiOutlineMegaphone,
  HiOutlineCloud,
  HiOutlineSquares2X2,
  HiOutlineFolder,
  HiOutlineChartBar,
  HiOutlineCog6Tooth,
  HiOutlineBell,
  HiOutlineMagnifyingGlass,
  HiOutlineSparkles,
  HiOutlineShoppingBag,
} from 'react-icons/hi2'
import '@fontsource/caveat/latin-700.css'
import SEO from '../components/SEO'
import { WEB3FORMS_KEY } from '../data/forms'
import CountUp from '../components/CountUp'
import PricingPlans from '../components/PricingPlans'
import { team } from '../data/team'
import { services as allServices } from '../data/services'

const BASE = 'https://selectionstechnologies.com'

const homeLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE}/#webpage`,
  url: `${BASE}/`,
  name: 'Selections Technologies | Web Development & IT Solutions UK',
  description: 'Selections Technologies provides innovative web development, software solutions, and digital transformation services to help businesses grow and succeed.',
  isPartOf: { '@id': `${BASE}/#website` },
  about: { '@id': `${BASE}/#organization` },
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a website cost in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At Selections Technologies, a basic business website starts from £250. WordPress sites range from £400–£1,500. E-commerce stores start from £800. Custom web apps from £2,000. Contact us for a free custom quote tailored to your needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic landing page takes 3–5 days. A WordPress or Shopify store takes 7–14 days. Custom web applications take 4–8 weeks. We provide a clear timeline before starting any project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer website maintenance after launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Selections Technologies offers ongoing website maintenance, security updates, content updates, speed optimisation, and dedicated support packages for all our clients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which services does Selections Technologies offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer web development, WordPress development, Shopify store development, mobile app development, digital marketing, SEO, Meta & Google Ads, graphic designing, AI chatbot development, CRM development, custom software development, and IT consulting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with international clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Selections Technologies works with clients worldwide including the UK, USA, UAE, and more. We communicate in English and accept international payments via PayPal, bank transfer, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Selections Technologies located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are based at Croydon High Street, UK. You can also reach us on WhatsApp at +44 7448 091908 or email info@selectionstechnologies.com.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build a Shopify store for dropshipping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We specialise in Shopify dropshipping store setup including product import, payment gateways, theme customisation, app integration, and launch support. Contact us for a free consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide SEO services in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide complete SEO services including keyword research, on-page SEO, technical SEO, link building, local SEO for the UK, and Google ranking reports.',
      },
    },
  ],
}

// Sections rise and come into focus as they scroll into view
const fadeUp = {
  hidden: { opacity: 0, y: 48, filter: 'blur(8px)' },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const teaserServices = [
  { icon: HiOutlineGlobeAlt, slug: 'web-development', title: 'Web Development', desc: 'Fast, modern websites & web apps' },
  { icon: FaShopify, slug: 'shopify-development', title: 'Shopify & WordPress', desc: 'Stores and sites that convert' },
  { icon: HiOutlineDeviceMobile, slug: 'mobile-app-development', title: 'Mobile Apps', desc: 'iOS & Android with React Native' },
  { icon: HiOutlineSpeakerphone, slug: 'digital-marketing', title: 'Digital Marketing', desc: 'Campaigns that drive growth' },
  { icon: HiOutlineTrendingUp, slug: 'seo', title: 'SEO & Google Ads', desc: 'Rank higher, reach more buyers' },
  { icon: FaRobot, slug: 'ai-chatbot-development', title: 'AI Chatbot', desc: '24/7 automated support & leads' },
]

const whyCards = [
  {
    icon: HiOutlineUsers,
    title: 'Professional Team',
    desc: 'Our skilled engineers and designers bring years of experience across diverse technology domains.',
    color: 'from-blue-500/20 to-blue-600/5',
    border: 'border-blue-500/20',
    iconColor: 'text-brand-blue',
  },
  {
    icon: HiOutlineCode,
    title: 'Modern Technologies',
    desc: 'We leverage the latest frameworks and tools to build fast, scalable, and future-proof solutions.',
    color: 'from-cyan-500/20 to-cyan-600/5',
    border: 'border-cyan-500/20',
    iconColor: 'text-brand-cyan',
  },
  {
    icon: HiOutlineSupport,
    title: 'Reliable Support',
    desc: 'Dedicated post-launch support and maintenance to keep your systems running seamlessly.',
    color: 'from-purple-500/20 to-purple-600/5',
    border: 'border-purple-500/20',
    iconColor: 'text-purple-400',
  },
  {
    icon: HiOutlineBadgeCheck,
    title: 'Quality Solutions',
    desc: 'Every project undergoes rigorous quality assurance to meet the highest standards of excellence.',
    color: 'from-emerald-500/20 to-emerald-600/5',
    border: 'border-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
]

const testimonials = [
  {
    name: 'Fatima K.',
    role: 'E-Commerce Owner',
    country: '🇵🇰',
    service: 'WooCommerce Store',
    rating: 5,
    text: 'Selections Technologies built our online store from scratch. Our sales increased 3x within the first month. Extremely professional team with great communication!',
    avatar: 'FK',
    avatarBg: 'bg-pink-500',
  },
  {
    name: 'James R.',
    role: 'Hospitality Manager',
    country: '🇬🇧',
    service: 'WordPress Website',
    rating: 5,
    text: 'Excellent work on our hotel platform. Delivered on time, communicated clearly throughout, and the final result exceeded our expectations. Highly recommend!',
    avatar: 'JR',
    avatarBg: 'bg-brand-blue',
  },
  {
    name: 'Dr. Ahmed S.',
    role: 'Medical Professional',
    country: '🇵🇰',
    service: 'Professional Website',
    rating: 5,
    text: 'My medical website looks very professional and ranks well on Google. Patient inquiries have significantly increased since launch. Very satisfied!',
    avatar: 'AS',
    avatarBg: 'bg-teal-500',
  },
  {
    name: 'Ayesha M.',
    role: 'Online Business Coach',
    country: '🇵🇰',
    service: 'Training Platform',
    rating: 5,
    text: 'They built our e-commerce training academy website. Clean design, fast loading, and exactly what we needed. Will definitely work with them again.',
    avatar: 'AM',
    avatarBg: 'bg-violet-500',
  },
  {
    name: 'Muhammad T.',
    role: 'Real Estate Developer',
    country: '🇵🇰',
    service: 'Real Estate Portal',
    rating: 5,
    text: 'Our property listing platform works perfectly. Selections Technologies understood our requirements from day one and delivered without any issues.',
    avatar: 'MT',
    avatarBg: 'bg-emerald-500',
  },
  {
    name: 'Sarah L.',
    role: 'Digital Marketing Agency',
    country: '🇬🇧',
    service: 'Agency Website',
    rating: 5,
    text: 'Professional, responsive, and delivered exactly what we needed. The team is knowledgeable and easy to work with. A genuine pleasure to collaborate with!',
    avatar: 'SL',
    avatarBg: 'bg-orange-500',
  },
]

const services = [
  'AI Automation',
  'Web Development',
  'WordPress Website',
  'Shopify Store',
  'Mobile App',
  'Digital Marketing',
  'Graphic Design',
  'SEO Services',
  'Custom Software',
  'AI Chatbot',
  'Other',
]

const trustPoints = [
  { icon: HiOutlineLightningBolt, short: 'Projects start within 24 hours' },
  { icon: HiOutlineShieldCheck, short: '100% satisfaction guarantee' },
  { icon: HiOutlineClock, short: 'No commitment required' },
]

const quoteSteps = [
  { title: 'Tell us your idea', desc: 'Share a few details about your business and project.' },
  { title: 'Free consultation & quote', desc: 'We talk it through and send you a clear proposal.' },
  { title: 'We build & launch', desc: 'Your project goes live — with support after launch.' },
]

function Orb({ className }) {
  return <div className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`} />
}

const heroFeatures = [
  { to: '/services/web-development', Icon: HiOutlineCodeBracket, title: 'Web Development', desc: 'Modern, scalable & fast', tile: 'bg-blue-100 text-brand-blue' },
  { to: '/services/digital-marketing', Icon: HiOutlineMegaphone, title: 'Digital Marketing', desc: 'Grow your online presence', tile: 'bg-purple-100 text-purple-600' },
  { to: '/services/custom-software-development', Icon: HiOutlineCloud, title: 'Software Solutions', desc: 'Custom for your business', tile: 'bg-emerald-100 text-emerald-600' },
  { to: '/services', Icon: HiOutlineRocketLaunch, title: 'Digital Transformation', desc: 'Build a smarter future', tile: 'bg-orange-100 text-orange-500' },
]

const dashStats = [
  { label: 'Total Projects', end: 100, suffix: '+', change: '12%', Icon: HiOutlineFolder, tile: 'bg-blue-50 text-brand-blue' },
  { label: 'Happy Clients', end: 100, suffix: '+', change: '18%', Icon: HiOutlineUsers, tile: 'bg-emerald-50 text-emerald-600' },
  { label: 'Years Experience', end: 5, suffix: '+', change: '20%', Icon: HiOutlineSparkles, tile: 'bg-amber-50 text-amber-500' },
]

const dashProjects = [
  { name: 'E-Commerce Platform', type: 'Web Development', status: 'Completed', Icon: HiOutlineShoppingBag, tile: 'bg-blue-50 text-brand-blue', badge: 'bg-emerald-50 text-emerald-600' },
  { name: 'Marketing Campaign', type: 'Digital Marketing', status: 'In Progress', Icon: HiOutlineMegaphone, tile: 'bg-emerald-50 text-emerald-600', badge: 'bg-blue-50 text-brand-blue' },
  { name: 'Business Software', type: 'Software Solutions', status: 'Completed', Icon: HiOutlineCloud, tile: 'bg-purple-50 text-purple-600', badge: 'bg-emerald-50 text-emerald-600' },
]

const dashNav = [
  { label: 'Dashboard', Icon: HiOutlineSquares2X2 },
  { label: 'Projects', Icon: HiOutlineFolder },
  { label: 'Clients', Icon: HiOutlineUsers },
  { label: 'Analytics', Icon: HiOutlineChartBar },
  { label: 'Settings', Icon: HiOutlineCog6Tooth },
]

// Laptop showing a Selections dashboard, with a blue blob behind and a handwritten note
function HeroLaptop() {
  const avatar = team.find((t) => t.photo)?.photo
  return (
    <div className="relative mx-auto w-full max-w-[640px] pt-10">
      {/* Blob */}
      <div className="absolute -right-10 top-0 h-[85%] w-[90%] rounded-[42%_58%_60%_40%/45%_40%_60%_55%] bg-gradient-to-br from-brand-blue via-blue-500 to-indigo-500 opacity-90" />
      <div className="absolute -left-6 bottom-6 h-40 w-40 rounded-full bg-brand-cyan/30 blur-3xl" />

      {/* Handwritten note on a white card so it stays readable over the blob and laptop */}
      <div className="absolute -left-6 -top-2 z-20 hidden xl:block rotate-[-6deg]">
        <div className="rounded-2xl bg-white px-5 py-3 shadow-xl shadow-blue-900/15 ring-1 ring-slate-100">
          <p className="font-hand text-[28px] font-bold leading-[1.05] text-navy">
            Innovative Solutions
            <br />
            <span className="bg-gradient-to-r from-brand-blue to-indigo-500 bg-clip-text text-transparent">Real Results</span>
          </p>
        </div>
        <svg viewBox="0 0 60 50" className="absolute -bottom-10 right-6 h-10 w-12 text-navy/70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <path d="M8 4 C 12 24, 26 38, 50 42" />
          <path d="M40 34 L51 42 L40 48" />
        </svg>
      </div>

      {/* Laptop */}
      <div className="relative motion-safe:animate-float [animation-duration:8s]">
        <div className="rounded-t-[1.4rem] border-[10px] border-b-[14px] border-slate-900 bg-slate-900 shadow-2xl shadow-blue-900/30">
          <div className="flex overflow-hidden rounded-md bg-slate-50 text-left" style={{ aspectRatio: '16 / 10' }}>
            {/* Sidebar */}
            <aside className="hidden w-[22%] shrink-0 flex-col bg-navy px-2.5 py-3 sm:flex">
              <div className="mb-4 flex items-center gap-1.5 px-1">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-brand-blue to-brand-cyan text-[9px] font-black text-white">S</span>
                <span className="text-[8px] font-extrabold tracking-wider text-white leading-tight">
                  SELECTIONS
                  <span className="block text-[5px] font-semibold tracking-[0.2em] text-slate-400">TECHNOLOGIES</span>
                </span>
              </div>
              {dashNav.map(({ label, Icon }, i) => (
                <span
                  key={label}
                  className={`mb-1 flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[8px] font-medium ${i === 0 ? 'bg-brand-blue text-white' : 'text-slate-400'}`}
                >
                  <Icon size={10} />
                  {label}
                </span>
              ))}
            </aside>

            {/* Main */}
            <div className="flex-1 min-w-0 p-3">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-5 flex-1 items-center gap-1 rounded-md border border-slate-200 bg-white px-2 text-[7px] text-slate-400">
                  <HiOutlineMagnifyingGlass size={8} /> Search anything...
                </span>
                <HiOutlineBell size={11} className="text-slate-400" />
                {avatar && <img src={avatar} alt="" className="h-5 w-5 rounded-full object-cover object-top" width="20" height="20" />}
              </div>

              <div className="grid grid-cols-3 gap-2">
                {dashStats.map(({ label, end, suffix, change, Icon, tile }) => (
                  <div key={label} className="rounded-lg border border-slate-100 bg-white p-2 shadow-sm">
                    <div className="flex items-start justify-between">
                      <span className="text-[7px] text-slate-500">{label}</span>
                      <span className={`flex h-4 w-4 items-center justify-center rounded ${tile}`}>
                        <Icon size={8} />
                      </span>
                    </div>
                    <div className="mt-0.5 text-sm font-extrabold text-navy">
                      <CountUp end={end} suffix={suffix} />
                    </div>
                    <div className="text-[6px] font-semibold text-emerald-600">↑ {change}</div>
                  </div>
                ))}
              </div>

              <div className="mt-2 grid grid-cols-[1.3fr_1fr] gap-2">
                <div className="rounded-lg border border-slate-100 bg-white p-2 shadow-sm">
                  <div className="text-[7px] font-semibold text-navy">Project Growth</div>
                  <svg viewBox="0 0 120 50" className="mt-1 h-auto w-full" aria-hidden="true">
                    <defs>
                      <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#2563EB" stopOpacity="0.35" />
                        <stop offset="1" stopColor="#2563EB" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[12, 24, 36].map((y) => (
                      <line key={y} x1="0" x2="120" y1={y} y2={y} stroke="#E2E8F0" strokeWidth="0.5" />
                    ))}
                    <path d="M0 44 L15 38 L30 40 L45 30 L60 32 L75 22 L90 18 L105 10 L120 6 L120 50 L0 50 Z" fill="url(#growthFill)" />
                    <path d="M0 44 L15 38 L30 40 L45 30 L60 32 L75 22 L90 18 L105 10 L120 6" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="rounded-lg border border-slate-100 bg-white p-2 shadow-sm">
                  <div className="mb-1 text-[7px] font-semibold text-navy">Recent Projects</div>
                  {dashProjects.map(({ name, type, status, Icon, tile, badge }) => (
                    <div key={name} className="mb-1 flex items-center gap-1">
                      <span className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded ${tile}`}>
                        <Icon size={7} />
                      </span>
                      <span className="min-w-0 flex-1 leading-none">
                        <span className="block truncate text-[6px] font-semibold text-navy">{name}</span>
                        <span className="block truncate text-[5px] text-slate-400">{type}</span>
                      </span>
                      <span className={`shrink-0 rounded px-1 py-0.5 text-[5px] font-semibold ${badge}`}>{status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Base */}
        <div className="relative mx-auto h-4 w-[112%] -translate-x-[5.4%] rounded-b-2xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-xl">
          <div className="absolute left-1/2 top-0 h-1.5 w-20 -translate-x-1/2 rounded-b-lg bg-slate-400" />
        </div>
      </div>
    </div>
  )
}

// Two rows of service pills that drift in opposite directions; hovering a row pauses it
function ServiceMarquee() {
  const half = Math.ceil(allServices.length / 2)
  const rows = [allServices.slice(0, half), allServices.slice(half)]

  return (
    <section className="relative overflow-hidden bg-navy py-16" aria-label="Services we offer">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-brand-blue/20 blur-3xl" />
      <p className="relative mb-10 text-center font-mono text-sm tracking-wide text-brand-cyan sm:text-base">
        Everything we build for your business
      </p>
      <div className="relative space-y-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {rows.map((row, r) => (
          <div key={r} className="group flex overflow-hidden">
            <ul
              className={`flex w-max shrink-0 gap-4 pr-4 group-hover:[animation-play-state:paused] ${
                r === 0 ? 'motion-safe:animate-marquee' : 'motion-safe:animate-marquee-reverse'
              }`}
            >
              {[...row, ...row].map(({ slug, title, icon: Icon }, i) => (
                <li key={`${slug}-${i}`} aria-hidden={i >= row.length || undefined}>
                  <Link
                    to={`/services/${slug}`}
                    tabIndex={i >= row.length ? -1 : undefined}
                    className="flex items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:border-brand-cyan/50 hover:bg-white/10 sm:text-lg"
                  >
                    <Icon className="text-brand-cyan" size={20} />
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

const initialQuote = { name: '', phone: '', service: '', message: '' }

export default function Home() {
  const [form, setForm] = useState(initialQuote)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setLoading(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Quote Request from ${form.name}`,
          from_name: 'Selections Technologies Website',
          name: form.name,
          phone: form.phone,
          service: form.service || 'Not specified',
          message: form.message || 'No additional message',
        }),
      })
      const data = await res.json()
      if (data.success) { setDone(true); setForm(initialQuote) }
    } catch {
      alert('Something went wrong. Please WhatsApp us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SEO
        title="Web Development & IT Solutions UK"
        description="Selections Technologies — a trusted UK IT company for web development, WordPress, Shopify, mobile apps, digital marketing, graphic design, SEO & custom software. Affordable. Professional. Trusted."
        keywords="Selections Technologies, Selection Technologies, Selections Tech, Selection Tech, web developer UK, web developer, web development company, website design UK, software house UK, IT company UK, mobile app development, digital marketing UK, graphic design UK, Shopify developer UK, WordPress developer UK, ecommerce website UK, SEO services UK, social media marketing, logo design, UI UX design, IT consulting, digital transformation, React developer UK, best IT company UK, affordable web development, custom software development, tech company UK, startup website, business website UK"
        canonical="/"
        ogType="website"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/70 to-sky-100/60">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 -top-20 h-[30rem] w-[30rem] rounded-full bg-sky-200/40 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-40 lg:pt-44 lg:pb-24">
          <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-[1fr_1.05fr]">
            {/* Text */}
            <div className="text-center lg:text-left">
              {/* Hero entrance uses CSS animations so it plays from the pre-rendered HTML, before JS loads */}
              <div className="motion-safe:animate-fade-up inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-4 py-2 text-sm font-medium text-brand-blue mb-7">
                <HiOutlineRocketLaunch size={16} />
                Your Growth Partner in Digital Transformation
              </div>

              {/* Heading + intro render without a fade so they paint immediately (LCP element) */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold text-navy leading-[1.1] tracking-tight mb-6">
                Empowering Businesses Through{' '}
                <span className="bg-gradient-to-r from-brand-blue to-indigo-500 bg-clip-text text-transparent">Technology</span>
              </h1>

              <p className="max-w-xl mx-auto lg:mx-0 text-slate-600 text-base sm:text-lg leading-relaxed mb-9">
                Selections Technologies provides innovative web development, software solutions, and digital
                transformation services to help businesses grow and succeed.
              </p>

              <div className="motion-safe:animate-fade-up [animation-delay:150ms] flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-blue hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-xl shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:-translate-y-0.5"
                >
                  Get Started <HiArrowRight className="text-lg" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border-2 border-brand-blue/30 bg-white/70 text-navy font-semibold rounded-xl transition-all duration-200 hover:border-brand-blue hover:text-brand-blue hover:-translate-y-0.5"
                >
                  <HiOutlineSparkles className="text-lg text-brand-blue" /> Start Free Trial
                </Link>
              </div>

              {/* Feature row */}
              <div className="motion-safe:animate-fade-up [animation-delay:250ms] mt-12 grid grid-cols-2 sm:grid-cols-4 gap-y-6 text-left">
                {heroFeatures.map(({ to, Icon, title, desc, tile }, i) => (
                  <Link
                    key={title}
                    to={to}
                    className={`group px-3 sm:px-4 ${i > 0 ? 'sm:border-l sm:border-slate-200' : 'sm:pl-0'} ${i % 2 === 1 ? 'border-l border-slate-200 sm:border-l' : ''}`}
                  >
                    <span className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl ${tile} transition-transform group-hover:-translate-y-0.5`}>
                      <Icon size={22} />
                    </span>
                    <span className="block text-sm font-bold text-navy group-hover:text-brand-blue transition-colors">{title}</span>
                    <span className="mt-0.5 block text-xs text-slate-500">{desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Visual — shown above the text on phones, beside it on large screens */}
            <div className="order-first lg:order-none motion-safe:animate-fade-up [animation-delay:200ms]">
              <HeroLaptop />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ────────────────────────────────── */}
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
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy leading-tight">
              What Sets Us <span className="text-gradient">Apart</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-slate-500 text-base">
              We combine technical expertise with a client-first mindset to deliver solutions that truly make a difference.
            </p>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyCards.map(({ icon: Icon, title, desc, color, border, iconColor }) => (
              <m.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative p-6 rounded-2xl border bg-gradient-to-br ${color} ${border} cursor-default overflow-hidden`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-white/60 mb-5 ${iconColor}`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* ─── Services Teaser ──────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-brand-blue via-blue-700 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <Orb className="w-96 h-96 bg-brand-cyan -top-24 -right-24 opacity-30" />
        <Orb className="w-80 h-80 bg-indigo-400 -bottom-24 -left-24 opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <m.div variants={fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-semibold tracking-widest uppercase mb-4">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                End-to-End Technology Solutions for{' '}
                <span className="text-cyan-300">Modern Businesses</span>
              </h2>
              <p className="text-blue-100 text-base leading-relaxed mb-8">
                From concept to deployment, we deliver full-cycle digital solutions — beautifully designed,
                rigorously tested, and built to scale.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-blue hover:bg-cyan-50 font-semibold rounded-xl transition-all shadow-lg shadow-black/20 hover:-translate-y-0.5"
              >
                Explore All Services <HiArrowRight />
              </Link>
            </m.div>

            <m.div variants={stagger} className="grid grid-cols-2 gap-4">
              {teaserServices.map(({ icon: Icon, slug, title, desc }, i) => (
                <m.div key={title} variants={fadeUp} custom={i}>
                  <Link
                    to={`/services/${slug}`}
                    className="group flex flex-col h-full p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm hover:bg-white hover:border-white hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300"
                  >
                    <div className="w-11 h-11 mb-4 rounded-xl flex items-center justify-center text-xl bg-white/15 text-white group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-cyan transition-all duration-300">
                      <Icon />
                    </div>
                    <p className="text-white group-hover:text-navy text-sm sm:text-base font-semibold mb-1 transition-colors">{title}</p>
                    <p className="text-blue-100/80 group-hover:text-slate-500 text-xs leading-relaxed transition-colors hidden sm:block">{desc}</p>
                  </Link>
                </m.div>
              ))}
            </m.div>
          </m.div>
        </div>
      </section>

      {/* ─── Services Marquee ─────────────────────────────── */}
      <ServiceMarquee />

      {/* ─── Pricing Plans ────────────────────────────────── */}
      <PricingPlans />

      {/* ─── Quick Quote Form ─────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-[#0B1E4D] via-[#0F2A6B] to-[#0A1633] relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-brand-blue/40 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 right-0 h-[30rem] w-[30rem] rounded-full bg-brand-cyan/25 blur-[120px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — pitch */}
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <m.span
                variants={fadeUp}
                className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-4"
              >
                Free Consultation
              </m.span>
              <m.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight"
              >
                Get a <span className="text-gradient">Free Quote</span>{' '}
                in 24 Hours
              </m.h2>
              <m.p
                variants={fadeUp}
                className="text-slate-400 text-base leading-relaxed mb-6"
              >
                Tell us about your project and we'll get back to you with a detailed proposal — no commitment, no cost.
              </m.p>

              <m.ul variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
                {trustPoints.map(({ icon: Icon, short }) => (
                  <li
                    key={short}
                    className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    <Icon className="text-brand-cyan" size={14} />
                    {short}
                  </li>
                ))}
              </m.ul>

              {/* How it works */}
              <m.ol variants={stagger} className="relative mb-10 space-y-6">
                <span className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-brand-blue via-brand-cyan to-transparent" aria-hidden="true" />
                {quoteSteps.map(({ title, desc }, i) => (
                  <m.li key={title} variants={fadeUp} className="relative flex gap-4">
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan text-sm font-extrabold text-white shadow-lg shadow-brand-blue/30">
                      {i + 1}
                    </span>
                    <div className="pt-1">
                      <p className="font-semibold text-white">{title}</p>
                      <p className="text-sm text-slate-400">{desc}</p>
                    </div>
                  </m.li>
                ))}
              </m.ol>

              <m.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/447448091908"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-green-500/30"
                >
                  <FaWhatsapp size={18} />
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+447448091908"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-white/20 hover:border-brand-cyan/60 hover:bg-white/5 text-white text-sm font-semibold rounded-xl transition-all hover:-translate-y-0.5"
                >
                  <HiOutlinePhone size={18} />
                  Call +44 7448 091908
                </a>
              </m.div>
            </m.div>

            {/* Right — form */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-[28px] bg-gradient-to-br from-brand-blue via-brand-cyan to-indigo-500 p-[2px] shadow-2xl shadow-brand-blue/30">
              <div className="bg-white rounded-[26px] p-8">
                {done ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
                      <HiOutlineCheckCircle className="text-emerald-500 text-4xl" />
                    </div>
                    <h3 className="text-xl font-extrabold text-navy mb-2">Request Sent!</h3>
                    <p className="text-slate-500 text-sm mb-6">
                      We'll get back to you within 24 hours with a free quote.
                    </p>
                    <button
                      onClick={() => setDone(false)}
                      className="px-5 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-xl hover:bg-blue-500 transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-extrabold text-navy mb-1">Start Your Project</h3>
                        <p className="text-slate-400 text-sm">Fill in a few details and we'll reach out fast.</p>
                      </div>
                      <div className="hidden sm:flex -space-x-2.5 shrink-0" title="Our leadership team">
                        {team
                          .filter((t) => t.photo)
                          .map(({ name, photo }) => (
                            <img
                              key={name}
                              src={photo}
                              alt={name}
                              width="40"
                              height="40"
                              loading="lazy"
                              className="h-10 w-10 rounded-full border-2 border-white bg-slate-100 object-cover object-top"
                            />
                          ))}
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                            Your Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue focus:bg-white transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                            WhatsApp / Phone <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            placeholder="+44 XXXX XXXXXX"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                          Service Needed
                        </label>
<div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Service needed">
                          {services.map((sv) => {
                            const active = form.service === sv
                            return (
                              <button
                                key={sv}
                                type="button"
                                role="radio"
                                aria-checked={active}
                                onClick={() => setForm((f) => ({ ...f, service: active ? '' : sv }))}
                                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${
                                  active
                                    ? 'border-brand-blue bg-brand-blue text-white shadow-md shadow-brand-blue/30'
                                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-brand-blue/40 hover:text-brand-blue'
                                }`}
                              >
                                {sv}
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                          Project Details
                        </label>
                        <textarea
                          name="message"
                          rows={3}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Brief description of your project..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue focus:bg-white transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-brand-blue to-brand-cyan disabled:opacity-70 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:-translate-y-0.5"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>Get Free Quote <MdSend size={17} /></>
                        )}
                      </button>

                      <p className="flex items-center justify-center gap-1.5 text-center text-xs text-slate-400">
                        <HiOutlineLockClosed size={13} />
                        Your details are safe. No spam — we'll only contact you about your project.
                      </p>
                    </form>
                  </>
                )}
              </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50/60 to-white relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-cyan/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-4">
              Client Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy leading-tight">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-slate-500 text-base">
              Real feedback from real clients — businesses we've helped grow with our digital solutions.
            </p>
            {/* Overall rating */}
            <div className="flex items-center justify-center gap-2 mt-5 flex-wrap">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <FaStar key={s} className="text-yellow-400" size={18} />
                ))}
              </div>
              <span className="text-navy font-bold text-sm">5.0</span>
              <span className="text-slate-500 text-sm">· Trusted by 100+ clients</span>
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
                <HiBadgeCheck size={14} />
                Verified Reviews
              </span>
            </div>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <m.div
                key={t.name}
                custom={i}
                variants={fadeUp}
                className="relative rounded-2xl bg-white border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:shadow-brand-blue/10 hover:border-brand-blue/20 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <FaStar key={s} className="text-yellow-400" size={13} />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-semibold">
                    <HiBadgeCheck size={12} />
                    Verified
                  </span>
                </div>

                {/* Quote */}
                <p className="text-slate-600 text-sm leading-relaxed flex-grow mb-5">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {t.avatar}
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="text-navy text-sm font-semibold truncate">
                      {t.name} <span className="ml-1">{t.country}</span>
                    </p>
                    <p className="text-slate-500 text-xs truncate">{t.role}</p>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-medium whitespace-nowrap">
                    {t.service}
                  </span>
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-brand-blue via-blue-600 to-brand-cyan relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5">
              Ready to Transform Your Business?
            </m.h2>
            <m.p variants={fadeUp} className="text-blue-100 text-base sm:text-lg mb-10 max-w-xl mx-auto">
              Let's build something extraordinary together. Get in touch with our team today and take the first step toward digital excellence.
            </m.p>
            <m.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-0.5"
              >
                Start Your Project <HiArrowRight />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/60 text-white font-semibold rounded-xl hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                View Our Work
              </Link>
            </m.div>
          </m.div>
        </div>
      </section>
    </>
  )
}
