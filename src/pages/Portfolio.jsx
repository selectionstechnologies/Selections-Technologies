import { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO'
import CountUp from '../components/CountUp'
import { HiExternalLink, HiOutlineHome, HiOutlineShoppingCart, HiOutlineCode, HiOutlineDesktopComputer } from 'react-icons/hi'
import { MdOutlineRestaurant } from 'react-icons/md'

const categoryIcons = {
  'Real Estate': HiOutlineHome,
  'Hospitality': MdOutlineRestaurant,
  'E-Commerce': HiOutlineShoppingCart,
  'Web Development': HiOutlineCode,
  'WordPress': HiOutlineDesktopComputer,
}

const getFavicon = (url) => {
  try {
    // Google's favicon service always returns an image, avoiding 404s from sites without /favicon.ico
    return `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=64`
  } catch {
    return null
  }
}

const getAccentColor = (gradient) => gradient.match(/#[0-9a-fA-F]{6}/)?.[0] || '#1e293b'

const projects = [
  {
    id: 1,
    name: 'GuestFlow Pro',
    tagline: 'Hotel Concierge Platform',
    description: 'Digital concierge platform connecting Italian hospitality expertise with UK guests.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Hospitality',
    live: 'https://guestflowpro.com/hotels',
    fallback: 'linear-gradient(135deg, #1e40af, #0ea5e9)',
  },
  {
    id: 2,
    name: 'Amica Connect',
    tagline: 'Healthcare Staffing Platform',
    description: 'Hire fully compliant healthcare staff — faster, safer, without recruitment agencies.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    live: 'https://www.amicaconnect.com/',
    fallback: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
  },
  {
    id: 3,
    name: 'Maira Textile',
    tagline: 'Premium Bedding E-Commerce',
    description: 'Luxury e-commerce store for premium bedding sets, table linens, and curtains.',
    tech: ['WordPress', 'WooCommerce'],
    category: 'E-Commerce',
    live: 'https://mairatextile.com/',
    fallback: 'linear-gradient(135deg, #be185d, #f472b6)',
  },
  {
    id: 5,
    name: 'Selections Technologies',
    tagline: 'IT Services Company',
    description: 'UK-based IT services company offering web development and digital solutions.',
    tech: ['React', 'Tailwind CSS'],
    category: 'Web Development',
    live: 'https://selectionstechnologies.com/',
    fallback: 'linear-gradient(135deg, #2563EB, #06B6D4)',
  },
  {
    id: 6,
    name: 'Ayesha Consultancy',
    tagline: 'E-Commerce Training Academy',
    description: 'Expert mentorship for eBay, Amazon & Etsy sellers with proven growth strategies.',
    tech: ['WordPress'],
    category: 'WordPress',
    live: 'https://ayeshaconsultancy.com/',
    fallback: 'linear-gradient(135deg, #059669, #34d399)',
  },
  {
    id: 7,
    name: 'Dehleze',
    tagline: 'Fashion & Lifestyle Store',
    description: 'Modern e-commerce platform for fashion, lifestyle, and home products with Pakistan delivery.',
    tech: ['WordPress', 'WooCommerce'],
    category: 'E-Commerce',
    live: 'https://dehleze.com',
    fallback: 'linear-gradient(135deg, #dc2626, #f87171)',
  },
  {
    id: 8,
    name: 'Ecomsy',
    tagline: 'IT Services Website',
    description: 'IT service provider specializing in e-commerce solutions and web development.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    live: 'https://alirazadeveloper75.github.io/ecomsy.official/',
    fallback: 'linear-gradient(135deg, #0f172a, #334155)',
  },
  {
    id: 9,
    name: 'Cardiff Transfers',
    tagline: 'Airport & City Transfers UK',
    description: 'Fast and reliable car booking for airport pickups, city rides, and corporate travel in UK.',
    tech: ['HTML', 'Bootstrap'],
    category: 'Web Development',
    live: 'https://alirazadeveloper75.github.io/Cardiff-Transfers/index.html',
    fallback: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
  },
  {
    id: 10,
    name: 'Unclaimed Property',
    tagline: 'Legal & Finance Services UK',
    description: 'Helps individuals identify, claim, and manage unclaimed assets in the UK.',
    tech: ['WordPress'],
    category: 'WordPress',
    live: 'https://unclaimd.co.uk/',
    fallback: 'linear-gradient(135deg, #374151, #6b7280)',
  },
  {
    id: 11,
    name: 'Dr. Rashid Siraj',
    tagline: 'Surgeon & Healthcare',
    description: 'Professional website for a General, Laparoscopic, and Bariatric Surgeon.',
    tech: ['WordPress'],
    category: 'WordPress',
    live: 'https://drrashidsiraj.com/',
    fallback: 'linear-gradient(135deg, #0284c7, #38bdf8)',
  },
  {
    id: 13,
    name: 'Malkeeyat',
    tagline: 'Real Estate Pakistan',
    description: 'Real estate platform with residential, commercial, and industrial property listings.',
    tech: ['WordPress'],
    category: 'Real Estate',
    live: 'https://malkeeyat.com/',
    fallback: 'linear-gradient(135deg, #065f46, #10b981)',
  },
  {
    id: 14,
    name: 'ISLD',
    tagline: 'Global Leadership Platform',
    description: 'Global educational platform for changemakers promoting leadership and diplomacy.',
    tech: ['WordPress'],
    category: 'WordPress',
    live: 'https://isldofficial.com/',
    fallback: 'linear-gradient(135deg, #92400e, #f59e0b)',
  },
  {
    id: 15,
    name: 'PinoyCar',
    tagline: 'Automotive Marketplace',
    description: 'Trusted online platform for buying and selling vehicles in the Philippines.',
    tech: ['WordPress'],
    category: 'WordPress',
    live: 'https://pinoycar.com/',
    fallback: 'linear-gradient(135deg, #1e3a8a, #2563EB)',
  },
  {
    id: 16,
    name: 'IELTS Lahore',
    tagline: 'IELTS Coaching Institute',
    description: 'Premier institute for IELTS exam coaching and spoken English with personalized training.',
    tech: ['WordPress'],
    category: 'WordPress',
    live: 'https://ieltslahore.com/',
    fallback: 'linear-gradient(135deg, #0e7490, #06B6D4)',
  },
  {
    id: 17,
    name: 'WebSol',
    tagline: 'Web Development Agency',
    description: 'Leading provider of web development and digital marketing services.',
    tech: ['WordPress'],
    category: 'WordPress',
    live: 'https://websol.tech/',
    fallback: 'linear-gradient(135deg, #6d28d9, #8b5cf6)',
  },
  {
    id: 18,
    name: 'Online Tools Platform',
    tagline: 'All-in-One Web Toolkit',
    description: 'Web toolkit with file converters, calculators, and media tools for productivity.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    live: 'https://alirazadeveloper75.github.io/calculation-tools/',
    fallback: 'linear-gradient(135deg, #166534, #22c55e)',
  },
  {
    id: 19,
    name: 'Gazebo Restaurant',
    tagline: 'Indian Fine Dining Chain',
    description: 'Multi-location Indian fine dining restaurant across the UAE with online table reservations.',
    tech: ['WordPress'],
    category: 'Hospitality',
    live: 'https://www.gazebo.ae/',
    fallback: 'linear-gradient(135deg, #b91c1c, #f59e0b)',
  },
  {
    id: 20,
    name: 'Dodo Pizza Dubai',
    tagline: 'Pizza Delivery & Ordering',
    description: 'Round-the-clock pizza delivery platform for Dubai with online ordering and app integration.',
    tech: ['WordPress', 'WooCommerce'],
    category: 'E-Commerce',
    live: 'https://dodopizza.ae/dubai',
    fallback: 'linear-gradient(135deg, #ea580c, #facc15)',
  },
  {
    id: 21,
    name: 'House of Kabila',
    tagline: 'Mughlai Restaurant Chain',
    description: 'Indian Mughlai restaurant with two Dubai locations offering royal cuisine for dine-in and delivery.',
    tech: ['WordPress'],
    category: 'Hospitality',
    live: 'https://houseofkabila.com/',
    fallback: 'linear-gradient(135deg, #7c2d12, #eab308)',
  },
  {
    id: 22,
    name: 'The Maine Group',
    tagline: 'Hospitality Group Website',
    description: 'Corporate site for a multi-venue hospitality group spanning Dubai, London, and Ibiza.',
    tech: ['WordPress'],
    category: 'Hospitality',
    live: 'https://themainegroup.com/',
    fallback: 'linear-gradient(135deg, #0f172a, #38bdf8)',
  },
  {
    id: 23,
    name: 'Roka Restaurant',
    tagline: 'Restaurant & Reservations',
    description: 'Restaurant website with menu showcase and online reservation booking.',
    tech: ['WordPress'],
    category: 'Hospitality',
    live: 'https://www.rokarestaurant.com/en',
    fallback: 'linear-gradient(135deg, #111827, #f43f5e)',
  },
  {
    id: 24,
    name: 'Soul Kitchen DXB',
    tagline: 'Restaurant & Live Music Venue',
    description: 'Dubai dining venue blending Lebanese and Latin American cuisine with live music events.',
    tech: ['WordPress'],
    category: 'Hospitality',
    live: 'https://soulkitchendxb.com/',
    fallback: 'linear-gradient(135deg, #7c3aed, #ec4899)',
  },
  {
    id: 25,
    name: "Harat's",
    tagline: 'Irish Pub Chain',
    description: 'Website for a global Irish pub chain location in Dubai featuring events, music, and dining.',
    tech: ['WordPress'],
    category: 'Hospitality',
    live: 'https://harats.ae/',
    fallback: 'linear-gradient(135deg, #166534, #4ade80)',
  },
  {
    id: 26,
    name: 'The Property Agent',
    tagline: 'Estate Agency UK',
    description: 'London estate agency site for property sales, lettings, and rentals in Finchley and Totteridge.',
    tech: ['WordPress'],
    category: 'Real Estate',
    live: 'https://propertyagent.co.uk/',
    fallback: 'linear-gradient(135deg, #1e3a8a, #60a5fa)',
  },
  {
    id: 27,
    name: 'Metropolitan Wharf',
    tagline: 'Property & Studio Spaces',
    description: 'Website for the Metropolitan Wharf property in London showcasing available units and spaces.',
    tech: ['WordPress'],
    category: 'Real Estate',
    live: 'https://www.metropolitanwharf.com/',
    fallback: 'linear-gradient(135deg, #334155, #94a3b8)',
  },
  {
    id: 28,
    name: 'MyUKPA',
    tagline: 'UK Property Management',
    description: 'Property management platform offering guaranteed rent and landlord services across the UK.',
    tech: ['WordPress'],
    category: 'Real Estate',
    live: 'https://www.myukpa.com/',
    fallback: 'linear-gradient(135deg, #0369a1, #38bdf8)',
  },
  {
    id: 29,
    name: 'Real Estates WSP',
    tagline: 'North London Estate Agency',
    description: 'Independent estate agency site for residential sales, lettings, and new developments in North London.',
    tech: ['WordPress'],
    category: 'Real Estate',
    live: 'https://www.realestates-wsp.co.uk/',
    fallback: 'linear-gradient(135deg, #78350f, #d97706)',
  },
  {
    id: 30,
    name: 'Unique Property Company',
    tagline: 'London Lettings & Sales',
    description: 'London estate and lettings agency website specialising in distinctive, one-of-a-kind properties.',
    tech: ['WordPress'],
    category: 'Real Estate',
    live: 'https://uniquepropertycompany.co.uk/',
    fallback: 'linear-gradient(135deg, #4c1d95, #a78bfa)',
  },
  {
    id: 31,
    name: 'Lodhi Real Estate',
    tagline: 'Real Estate Company',
    description: 'Corporate website for a real estate company showcasing property listings and services.',
    tech: ['WordPress'],
    category: 'Real Estate',
    live: 'https://lodhirealestate.com/',
    fallback: 'linear-gradient(135deg, #0e7490, #67e8f9)',
  },
  {
    id: 32,
    name: 'Zalmi Marketing',
    tagline: 'Marketing Agency',
    description: 'Marketing agency website showcasing branding and digital marketing services.',
    tech: ['WordPress'],
    category: 'WordPress',
    live: 'https://www.thezalmimarketing.com/',
    fallback: 'linear-gradient(135deg, #b45309, #fde047)',
  },
  {
    id: 33,
    name: 'Ellahi Associates',
    tagline: 'Real Estate Consultancy',
    description: 'Real estate consultancy marketing premium residential and commercial developments in Lahore.',
    tech: ['WordPress'],
    category: 'Real Estate',
    live: 'https://ellahiassociates.com/',
    fallback: 'linear-gradient(135deg, #134e4a, #2dd4bf)',
  },
  {
    id: 34,
    name: 'Anaya Star Properties',
    tagline: 'Real Estate Agency UAE',
    description: 'Dubai real estate agency offering residential and commercial property sales, rentals, and off-plan investments across the UAE.',
    tech: ['WordPress'],
    category: 'Real Estate',
    live: 'https://anayastarproperties.com/',
    fallback: 'linear-gradient(135deg, #92400e, #fbbf24)',
  },
  {
    id: 35,
    name: 'District Real Estate',
    tagline: 'Property Advisory Dubai & Abu Dhabi',
    description: 'UAE property advisory firm offering buying, renting, and off-plan investment services across Dubai and Abu Dhabi.',
    tech: ['WordPress'],
    category: 'Real Estate',
    live: 'https://www.districtuae.com/',
    fallback: 'linear-gradient(135deg, #0c4a6e, #38bdf8)',
  },
  {
    id: 36,
    name: "Christie's Real Estate Dubai",
    tagline: 'Luxury Real Estate Dubai',
    description: 'Luxury real estate agency offering high-end residential sales, rentals, and off-plan investments across Dubai, Abu Dhabi, and Ras Al Khaimah.',
    tech: ['WordPress'],
    category: 'Real Estate',
    live: 'https://www.christiesrealestatedubai.com/',
    fallback: 'linear-gradient(135deg, #451a03, #d4af37)',
  },
  {
    id: 37,
    name: 'Kharz',
    tagline: 'Dubai Property Advisory',
    description: 'Dubai-based real estate advisory helping buyers and investors purchase apartments, villas, and commercial properties through verified listings.',
    tech: ['WordPress'],
    category: 'Real Estate',
    live: 'https://dubai.kharz.ae/',
    fallback: 'linear-gradient(135deg, #164e63, #22d3ee)',
  },
  {
    id: 38,
    name: 'White & Co Real Estate',
    tagline: 'Real Estate Brokerage Dubai',
    description: 'Dubai real estate brokerage specializing in residential and commercial property sales, rentals, and off-plan developments.',
    tech: ['WordPress'],
    category: 'Real Estate',
    live: 'https://whiteandcogroup.com/',
    fallback: 'linear-gradient(135deg, #1f2937, #9ca3af)',
  },
  {
    id: 39,
    name: 'Coldwell Banker UAE',
    tagline: 'Real Estate Agency UAE',
    description: 'UAE real estate agency facilitating property sales, rentals, and purchases across Dubai and other emirates.',
    tech: ['WordPress'],
    category: 'Real Estate',
    live: 'https://www.coldwellbanker.ae/',
    fallback: 'linear-gradient(135deg, #7f1d1d, #fca5a5)',
  },
  {
    id: 40,
    name: 'Dubai International Real Estate',
    tagline: 'Luxury Property Dubai',
    description: 'Real estate firm specializing in upscale luxury properties in Ras Al Khaimah and the wider UAE market.',
    tech: ['WordPress'],
    category: 'Real Estate',
    live: 'https://dubaiire.ae/',
    fallback: 'linear-gradient(135deg, #581c87, #c084fc)',
  },
  {
    id: 41,
    name: 'Impressive Real Estate',
    tagline: 'Property Consultancy Dubai',
    description: 'Dubai property consultancy offering buying, selling, and rental services across prime communities like Dubai Marina and Downtown Dubai.',
    tech: ['WordPress'],
    category: 'Real Estate',
    live: 'https://impressiverealestate.net/',
    fallback: 'linear-gradient(135deg, #0f766e, #5eead4)',
  },
  {
    id: 42,
    name: 'Next Level Real Estate',
    tagline: 'Real Estate Agency Dubai',
    description: 'Award-winning Dubai real estate agency offering property buying, selling, leasing, and investment consulting services.',
    tech: ['WordPress'],
    category: 'Real Estate',
    live: 'https://www.nextlevelrealestate.ae/',
    fallback: 'linear-gradient(135deg, #1e3a8a, #93c5fd)',
  },
  {
    id: 43,
    name: 'Homeland Realty',
    tagline: 'Real Estate Brokerage Dubai',
    description: 'Dubai real estate firm offering end-to-end property buying, selling, and off-plan investment services across the UAE.',
    tech: ['WordPress'],
    category: 'Real Estate',
    live: 'https://www.homeland.ae/',
    fallback: 'linear-gradient(135deg, #365314, #a3e635)',
  },
  {
    id: 44,
    name: 'Provident Estate',
    tagline: 'Leading Real Estate Agency Dubai',
    description: 'Dubai real estate agency offering property sales, rentals, off-plan investments, mortgages, and property management.',
    tech: ['WordPress'],
    category: 'Real Estate',
    live: 'https://providentestate.com/',
    fallback: 'linear-gradient(135deg, #7c2d12, #fb923c)',
  },
]

const techColors = {
  WordPress:    'bg-blue-50 text-brand-blue border border-blue-100',
  WooCommerce:  'bg-violet-50 text-violet-700 border border-violet-100',
  HTML:         'bg-orange-50 text-orange-700 border border-orange-100',
  CSS:          'bg-sky-50 text-sky-700 border border-sky-100',
  JavaScript:   'bg-yellow-50 text-yellow-700 border border-yellow-100',
  Bootstrap:    'bg-purple-50 text-purple-700 border border-purple-100',
  React:        'bg-cyan-50 text-cyan-700 border border-cyan-100',
  'Tailwind CSS': 'bg-teal-50 text-teal-700 border border-teal-100',
}

const filters = ['All', 'Real Estate', 'Hospitality', 'E-Commerce', 'WordPress']

const stats = [
  { end: 100, suffix: '+', label: 'Projects Delivered' },
  { end: 10, suffix: '+', label: 'Industries Served' },
  { end: 6, suffix: '+', label: 'Countries' },
  { end: 99.9, decimals: 1, suffix: '%', label: 'Client Satisfaction' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: 'easeOut' },
  }),
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const portfolioLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://selectionstechnologies.com/portfolio#webpage',
  url: 'https://selectionstechnologies.com/portfolio',
  name: 'Our Portfolio — Selections Technologies',
  description: 'Explore our portfolio of 42+ web development, WordPress, e-commerce, and software projects delivered across the UK and worldwide.',
  isPartOf: { '@id': 'https://selectionstechnologies.com/#website' },
}

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [faviconErrors, setFaviconErrors] = useState({})

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <SEO
        title="Portfolio | Web Development Work"
        description="Explore 42+ real-world projects by Selections Technologies — WordPress websites, WooCommerce stores, custom web development for clients across the UK, UAE, Philippines and worldwide."
        keywords="web development portfolio UK, WordPress projects, WooCommerce store development, IT company portfolio, website development examples, Shopify developer portfolio, digital agency work UK, Selections Technologies projects, web design portfolio UK"
        canonical="/portfolio"
        ogType="website"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioLd) }} />

      {/* ─── Hero ───────────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-brand-cyan rounded-full blur-3xl opacity-10 pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-brand-blue rounded-full blur-3xl opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <m.div initial={false} animate="visible" variants={stagger} className="motion-safe:animate-fade-up">
            <m.span
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-4"
            >
              Our Work
            </m.span>
            <m.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6"
            >
              Our <span className="text-gradient">Portfolio</span>
            </m.h1>
            <m.p
              variants={fadeUp}
              className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed"
            >
              Real-world projects delivered across the UK and worldwide — from WordPress sites and WooCommerce stores to custom web solutions.
            </m.p>
          </m.div>
        </div>

        {/* Stats bar */}
        <div className="motion-safe:animate-fade-up [animation-delay:200ms] relative max-w-4xl mx-auto px-4 mt-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map(({ end, decimals, suffix, label }) => (
              <div key={label} className="text-center glass rounded-2xl py-4 px-2">
                <p className="text-2xl sm:text-3xl font-extrabold text-gradient">
                  <CountUp end={end} decimals={decimals} suffix={suffix} />
                </p>
                <p className="text-xs text-slate-400 mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent" />
      </section>

      {/* ─── Projects ───────────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter tabs */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === f
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30 scale-105'
                    : 'bg-white text-slate-600 hover:text-brand-blue border border-slate-200 hover:border-brand-blue/30 hover:shadow-sm'
                }`}
              >
                {f}
                <span className={`ml-2 text-xs ${active === f ? 'text-white' : 'text-slate-500'}`}>
                  ({f === 'All' ? projects.length : projects.filter((p) => p.category === f).length})
                </span>
              </button>
            ))}
          </m.div>

          {/* Cards grid */}
          <h2 className="sr-only">Client projects</h2>
          <AnimatePresence mode="wait">
            <m.div
              key={active}
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {filtered.map((project, i) => (
                <m.div
                  key={project.id}
                  custom={i}
                  variants={fadeUp}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image */}
                  <div
                    className="relative h-48 overflow-hidden flex items-center justify-center"
                    style={{ background: project.fallback }}
                  >
                    {/* Dot texture overlay */}
                    <div
                      className="absolute inset-0 opacity-[0.15]"
                      style={{
                        backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
                        backgroundSize: '18px 18px',
                      }}
                    />
                    {/* Large watermark icon */}
                    {(() => {
                      const Icon = categoryIcons[project.category] ?? HiOutlineDesktopComputer
                      return (
                        <Icon
                          className="absolute -right-6 -bottom-6 text-white/10 group-hover:scale-110 transition-transform duration-500"
                          size={150}
                        />
                      )
                    })()}
                    {/* Company name */}
                    <span className="relative z-[1] text-white text-lg font-extrabold px-6 text-center drop-shadow-md group-hover:opacity-0 transition-opacity duration-300">
                      {project.name}
                    </span>
                    {/* Favicon badge */}
                    <div className="absolute top-3 left-3 z-10 w-9 h-9 rounded-lg bg-white shadow-md flex items-center justify-center overflow-hidden">
                      {faviconErrors[project.id] ? (
                        <span
                          className="text-sm font-extrabold"
                          style={{ color: getAccentColor(project.fallback) }}
                        >
                          {project.name.charAt(0)}
                        </span>
                      ) : (
                        <img
                          src={getFavicon(project.live)}
                          alt=""
                          width="24"
                          height="24"
                          loading="lazy"
                          decoding="async"
                          className="w-6 h-6 object-contain"
                          onError={() => setFaviconErrors((prev) => ({ ...prev, [project.id]: true }))}
                        />
                      )}
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 z-20 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-white text-navy text-sm font-bold rounded-xl hover:bg-brand-blue hover:text-white transition-colors"
                      >
                        Preview Site <HiExternalLink size={15} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-base font-bold text-navy leading-tight">{project.name}</h3>
                        <p className="text-xs text-cyan-700 font-semibold mt-0.5">{project.tagline}</p>
                      </div>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 p-1.5 rounded-lg text-slate-400 hover:text-brand-blue hover:bg-brand-blue/5 transition-colors"
                        aria-label={`Visit ${project.name}`}
                      >
                        <HiExternalLink size={17} />
                      </a>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className={`px-2.5 py-1 rounded-full text-xs font-semibold ${techColors[t] ?? 'bg-slate-100 text-slate-600'}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </m.div>
              ))}
            </m.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy to-brand-blue/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to Build Your{' '}
              <span className="text-gradient">Next Project?</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Let's turn your idea into a professional digital product. Get a free consultation today.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              Start Your Project
            </a>
          </m.div>
        </div>
      </section>
    </>
  )
}
