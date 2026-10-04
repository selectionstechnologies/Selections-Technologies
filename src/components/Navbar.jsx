import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { m, AnimatePresence } from 'framer-motion'
import {
  HiMenuAlt3,
  HiX,
  HiOutlineMail,
  HiOutlinePhone,
  HiChevronDown,
  HiArrowRight,
  HiOutlineCalendar,
  HiOutlineOfficeBuilding,
  HiOutlineBriefcase,
  HiOutlineUserGroup,
  HiOutlineChatAlt2,
  HiOutlineNewspaper,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
} from 'react-icons/hi'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import logo from '../assests/logo.webp'
import { services } from '../data/services'
import { legalPages } from '../data/legal'

const socials = [
  { icon: FaFacebookF, href: 'https://www.facebook.com/selections.technologies', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://www.instagram.com/selections.technologies/?hl=en', label: 'Instagram' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/selections-technologies/', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: 'https://wa.me/447448091908', label: 'WhatsApp' },
]

const companyLinks = [
  { to: '/about', label: 'About Us', desc: 'Who we are and how we work', icon: HiOutlineOfficeBuilding },
  { to: '/portfolio', label: 'Portfolio', desc: 'Websites and apps we have delivered', icon: HiOutlineBriefcase },
  { to: '/team', label: 'Our Team', desc: 'The people behind your project', icon: HiOutlineUserGroup },
  { to: '/contact', label: 'Contact Us', desc: 'Offices in the UK and Pakistan', icon: HiOutlineChatAlt2 },
]

const resourceLinks = [
  { to: '/blog', label: 'Blog', desc: 'Guides on websites, SEO and growth', icon: HiOutlineNewspaper },
  { to: '/courses', label: 'Courses', desc: 'Learn web development with our experts', icon: HiOutlineAcademicCap },
]

const navItems = [
  { label: 'Services', menu: 'services', match: ['/services'] },
  { label: 'Company', menu: 'company', match: companyLinks.map((l) => l.to) },
  { label: 'Resources', menu: 'resources', match: resourceLinks.map((l) => l.to) },
  { label: 'Legal', menu: 'legal', match: legalPages.map((l) => l.to) },
]

const features = {
  company: {
    eyebrow: 'Our work',
    title: '100+ projects delivered',
    desc: 'See the websites, stores and apps we have built for businesses across the UK and beyond.',
    to: '/portfolio',
  },
  resources: {
    eyebrow: 'Free consultation',
    title: 'Not sure where to start?',
    desc: 'Tell us about your business and we will recommend the right website, budget and plan.',
    to: '/contact',
  },
  legal: {
    eyebrow: 'Your data, your rights',
    title: 'Questions about your data?',
    desc: 'Ask us what we hold, or request a copy or deletion. We reply within one month.',
    to: '/gdpr',
  },
}

function MenuLink({ to, label, desc, icon: Icon }) {
  return (
    <Link to={to} className="group flex gap-4 rounded-xl p-3 transition-colors hover:bg-surface">
      <Icon size={22} className="mt-0.5 shrink-0 text-slate-500 transition-colors group-hover:text-brand-blue" />
      <span>
        <span className="block text-[15px] font-semibold text-navy group-hover:text-brand-blue transition-colors">{label}</span>
        <span className="mt-0.5 block text-sm leading-relaxed text-slate-500">{desc}</span>
      </span>
    </Link>
  )
}

// Office-tower illustration for the Company card, drawn in brand colours
const towers = [
  { x: 8, y: 78, w: 52, h: 112, fill: 'url(#twA)', cols: 3 },
  { x: 66, y: 22, w: 62, h: 168, fill: 'url(#twB)', cols: 3 },
  { x: 134, y: 58, w: 56, h: 132, fill: 'url(#twC)', cols: 3 },
]

function BuildingArt() {
  return (
    <svg viewBox="0 0 200 190" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="twA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2563EB" />
          <stop offset="1" stopColor="#1E3A8A" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="twB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#06B6D4" />
          <stop offset="1" stopColor="#2563EB" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="twC" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#0F172A" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <line x1="97" y1="22" x2="97" y2="4" stroke="#67E8F9" strokeWidth="2" />
      <circle cx="97" cy="4" r="3" fill="#67E8F9" />
      {towers.map((t, ti) => {
        const rows = Math.floor((t.h - 18) / 15)
        const gap = (t.w - t.cols * 9) / (t.cols + 1)
        return (
          <g key={ti}>
            <rect x={t.x} y={t.y} width={t.w} height={t.h} rx="4" fill={t.fill} />
            <rect x={t.x} y={t.y} width={t.w} height="4" rx="2" fill="#fff" opacity="0.25" />
            {Array.from({ length: rows }).map((_, r) =>
              Array.from({ length: t.cols }).map((_, c) => {
                const lit = (r * 7 + c * 3 + ti * 5) % 4 === 0
                return (
                  <rect
                    key={`${r}-${c}`}
                    x={t.x + gap + c * (9 + gap)}
                    y={t.y + 14 + r * 15}
                    width="9"
                    height="7"
                    rx="1.5"
                    fill={lit ? '#FDE68A' : '#fff'}
                    opacity={lit ? 0.9 : 0.22}
                  />
                )
              })
            )}
          </g>
        )
      })}
    </svg>
  )
}

// Large icon on frosted tiles, used for the Resources and Legal cards
function IconArt({ main: Main, side: Side }) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute right-6 top-1/2 flex h-28 w-28 -translate-y-1/2 rotate-6 items-center justify-center rounded-3xl border border-white/20 bg-gradient-to-br from-brand-blue to-brand-cyan shadow-2xl shadow-brand-cyan/30">
        <Main size={56} className="text-white" />
      </div>
      <div className="absolute right-28 bottom-8 flex h-14 w-14 -rotate-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
        <Side size={26} className="text-brand-cyan" />
      </div>
    </div>
  )
}

const featureArt = {
  company: <BuildingArt />,
  resources: <IconArt main={HiOutlineBookOpen} side={HiOutlineAcademicCap} />,
  legal: <IconArt main={HiOutlineShieldCheck} side={HiOutlineLockClosed} />,
}

function FeatureCard({ menu, eyebrow, title, desc, to }) {
  return (
    <div className="flex flex-col">
      <p className="mb-3 px-1 text-sm text-slate-500">{eyebrow}</p>
      <Link
        to={to}
        className="group relative flex min-h-[15rem] flex-1 flex-col overflow-hidden rounded-2xl bg-navy p-6 text-white"
      >
        <div className="pointer-events-none absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan opacity-40 blur-3xl transition-opacity group-hover:opacity-60" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-[85%] w-[48%] translate-y-1 transition-transform duration-500 group-hover:-translate-y-1">
          {featureArt[menu]}
        </div>
        <h3 className="relative max-w-[58%] text-xl font-bold leading-snug">{title}</h3>
        <p className="relative mt-2 max-w-[56%] text-sm leading-relaxed text-slate-300">{desc}</p>
        <span className="relative mt-auto pt-6">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy transition-transform group-hover:translate-x-1">
            <HiArrowRight size={18} />
          </span>
        </span>
      </Link>
    </div>
  )
}

// The eight services listed in the dropdown; the full list lives on /services
const FEATURED_SERVICES = [
  'ai-automation',
  'shopify-development',
  'wordpress-development',
  'ecommerce-solutions',
  'mobile-app-development',
  'custom-software-development',
  'seo',
  'meta-google-ads',
]
const featuredServices = FEATURED_SERVICES.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean)

// Website-mockup illustration on a brand backdrop, with a question underneath
function ServicesShowcaseCard() {
  return (
    <Link
      to="/contact"
      className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-shadow hover:shadow-xl"
    >
      <div className="relative flex flex-1 min-h-[15rem] items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-light to-brand-blue/70 px-6 pt-8">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-cyan opacity-30 blur-3xl" />
        <div className="absolute inset-0 hero-grid opacity-20" />

        {/* Browser window */}
        <div className="relative w-full max-w-[17rem] translate-y-3 rounded-t-xl bg-white shadow-2xl transition-transform duration-500 group-hover:translate-y-0">
          <div className="flex items-center gap-1.5 border-b border-slate-100 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="ml-2 h-2 flex-1 rounded-full bg-slate-100" />
          </div>
          <div className="space-y-2.5 p-3">
            <div className="rounded-lg bg-gradient-to-r from-brand-blue to-brand-cyan p-3">
              <div className="h-2 w-2/3 rounded-full bg-white/90" />
              <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-white/60" />
              <div className="mt-3 h-3.5 w-14 rounded-md bg-white" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-md border border-slate-100 p-1.5">
                  <div className="h-5 rounded bg-slate-100" />
                  <div className="mt-1.5 h-1 w-3/4 rounded-full bg-slate-200" />
                </div>
              ))}
            </div>
            <div className="h-1.5 w-5/6 rounded-full bg-slate-100" />
            <div className="h-1.5 w-2/3 rounded-full bg-slate-100" />
          </div>
        </div>

        {/* Floating badges */}
        <div className="absolute left-4 top-6 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-navy shadow-lg transition-transform duration-500 group-hover:-translate-y-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> 100+ projects
        </div>
        <div className="absolute right-4 top-16 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-brand-blue shadow-lg transition-transform duration-500 group-hover:-translate-y-1">
          SEO ready
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <span className="font-semibold text-navy">Not sure which service you need?</span>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-white transition-transform group-hover:rotate-[-45deg]">
          <HiArrowRight size={18} />
        </span>
      </div>
    </Link>
  )
}

function MegaMenu({ menu }) {
  if (menu === 'services') {
    return (
      <div className="grid grid-cols-[1.7fr_1fr] gap-8 p-8">
        <div className="flex flex-col">
          <p className="mb-4 text-sm text-slate-500">Services overview</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1">
            {featuredServices.map(({ slug, title, icon: Icon }) => (
              <Link
                key={slug}
                to={`/services/${slug}`}
                className="group flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-surface"
              >
                <Icon size={22} className="shrink-0 text-slate-700 transition-colors group-hover:text-brand-blue" />
                <span className="text-[17px] text-navy transition-colors group-hover:text-brand-blue">{title}</span>
              </Link>
            ))}
          </div>
          <div className="mt-auto flex items-center gap-6 px-3 pt-5">
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:gap-2.5 transition-all">
              View all {services.length} services <HiArrowRight size={16} />
            </Link>
            <Link to="/pricing" className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors">
              View pricing
            </Link>
          </div>
        </div>
        <ServicesShowcaseCard />
      </div>
    )
  }

  if (menu === 'legal') {
    return (
      <div className="grid grid-cols-[1.6fr_1fr] gap-6 p-6">
        <div className="grid grid-cols-2 content-start gap-1">
          {legalPages.map((link) => (
            <MenuLink key={link.to} {...link} />
          ))}
        </div>
        <FeatureCard menu="legal" {...features.legal} />
      </div>
    )
  }

  const links = menu === 'company' ? companyLinks : resourceLinks
  return (
    <div className="grid grid-cols-[1fr_1.15fr] gap-6 p-6">
      <div className="flex flex-col gap-1">
        {links.map((link) => (
          <MenuLink key={link.to} {...link} />
        ))}
      </div>
      <FeatureCard menu={menu} {...features[menu]} />
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileSection, setMobileSection] = useState(null)
  const closeTimer = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close every menu after navigating
  useEffect(() => {
    setOpenMenu(null)
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpenMenu(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openNow = (menu) => {
    clearTimeout(closeTimer.current)
    setOpenMenu(menu)
  }
  const closeSoon = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150)
  }

  const isGroupActive = (match) => match.some((p) => pathname === p || pathname.startsWith(`${p}/`))

  const linkClass = (active) =>
    `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
      active ? 'text-brand-blue bg-brand-blue/8' : 'text-navy hover:text-brand-blue hover:bg-brand-blue/5'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <AnimatePresence initial={false}>
        {!scrolled && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="hidden md:block bg-gradient-to-r from-brand-blue via-blue-600 to-indigo-600 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between text-white">
              <div className="flex items-center gap-7">
                <a href="mailto:info@selectionstechnologies.com" className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors">
                  <HiOutlineMail size={17} />
                  info@selectionstechnologies.com
                </a>
                <a href="tel:+447448091908" className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors">
                  <HiOutlinePhone size={17} />
                  <span className="font-semibold text-white">UK</span> +44 7448 091908
                </a>
                <a href="tel:+923003209005" className="hidden lg:flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors">
                  <HiOutlinePhone size={17} />
                  <span className="font-semibold text-white">PK</span> +92 300 3209005
                </a>
              </div>
              <div className="flex items-center gap-4">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-white/90 hover:bg-white/15 hover:text-white transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 bg-white ${
          scrolled ? 'shadow-md shadow-slate-200/80 py-2' : 'py-3 border-b border-slate-100'
        }`}
      >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Selections Technologies — Web Development UK" className="h-12 w-auto object-contain" width="200" height="48" fetchpriority="high" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" onMouseLeave={closeSoon}>
          {navItems.map((item) =>
            item.menu ? (
              <button
                key={item.label}
                type="button"
                onMouseEnter={() => openNow(item.menu)}
                onClick={() => setOpenMenu(openMenu === item.menu ? null : item.menu)}
                aria-expanded={openMenu === item.menu}
                aria-haspopup="true"
                className={`${linkClass(isGroupActive(item.match) || openMenu === item.menu)} inline-flex items-center gap-1`}
              >
                {item.label}
                <HiChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${openMenu === item.menu ? 'rotate-180' : ''}`}
                />
              </button>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                onMouseEnter={closeSoon}
                className={({ isActive }) => linkClass(isActive)}
              >
                {item.label}
              </NavLink>
            )
          )}
          <Link
            to="/book-demo"
            onMouseEnter={closeSoon}
            className="group ml-3 inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-md shadow-brand-blue/25 hover:shadow-brand-blue/40 hover:-translate-y-0.5"
          >
            <HiOutlineCalendar size={18} className="transition-transform group-hover:rotate-[-8deg]" />
            Book a Demo
          </Link>

          {/* Dropdown panel — pt-3 keeps the gap below the bar hoverable */}
          <AnimatePresence>
            {openMenu && (
              <div
                key="mega"
                onMouseEnter={() => openNow(openMenu)}
                className={`absolute left-1/2 top-full w-full -translate-x-1/2 px-4 pt-3 ${openMenu === 'company' || openMenu === 'resources' ? 'max-w-4xl' : openMenu === 'services' ? 'max-w-6xl' : 'max-w-5xl'}`}
              >
                <m.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-slate-300/50"
                >
                  <MegaMenu menu={openMenu} />
                </m.div>
              </div>
            )}
          </AnimatePresence>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-navy p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-100 shadow-lg"
          >
            <div data-lenis-prevent className="max-h-[75vh] overflow-y-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => {
                if (!item.menu) {
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                          isActive ? 'text-brand-blue bg-brand-blue/8' : 'text-navy hover:text-brand-blue hover:bg-slate-50'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )
                }
                const expanded = mobileSection === item.menu
                const links =
                  item.menu === 'services'
                    ? [{ to: '/services', label: 'All Services' }, { to: '/pricing', label: 'Pricing' }, ...services.map((s) => ({ to: `/services/${s.slug}`, label: s.title }))]
                    : item.menu === 'company'
                      ? companyLinks
                      : item.menu === 'legal'
                        ? legalPages
                        : resourceLinks
                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setMobileSection(expanded ? null : item.menu)}
                      aria-expanded={expanded}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                        isGroupActive(item.match) ? 'text-brand-blue' : 'text-navy hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                      <HiChevronDown size={18} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
                    </button>
                    {expanded && (
                      <div className="ml-4 mb-1 border-l border-slate-100 pl-2 flex flex-col">
                        {links.map(({ to, label }) => (
                          <NavLink
                            key={to}
                            to={to}
                            end
                            className={({ isActive }) =>
                              `px-3 py-2 rounded-lg text-sm transition-colors ${
                                isActive ? 'text-brand-blue font-semibold' : 'text-slate-600 hover:text-brand-blue'
                              }`
                            }
                          >
                            {label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
              <Link
                to="/book-demo"
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 bg-brand-blue text-white text-sm font-semibold rounded-lg"
              >
                <HiOutlineCalendar size={18} />
                Book a Demo
              </Link>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
