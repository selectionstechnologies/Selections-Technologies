import { Link } from 'react-router-dom'
import { m } from 'framer-motion'
import SEO from '../components/SEO'
import { blogs } from '../data/blogs'
import { HiArrowRight, HiClock, HiOutlineScale, HiOutlineCurrencyDollar, HiOutlineSearch, HiOutlineDeviceMobile, HiOutlineClipboardCheck, HiOutlineShieldCheck } from 'react-icons/hi'
import { FaShopify } from 'react-icons/fa'
import { MdCampaign, MdSmartToy } from 'react-icons/md'

const iconMap = {
  shopify:   { Icon: FaShopify,                   bg: 'bg-white/20' },
  compare:   { Icon: HiOutlineScale,               bg: 'bg-white/20' },
  cost:      { Icon: HiOutlineCurrencyDollar,      bg: 'bg-white/20' },
  marketing: { Icon: MdCampaign,                   bg: 'bg-white/20' },
  seo:       { Icon: HiOutlineSearch,              bg: 'bg-white/20' },
  mobile:    { Icon: HiOutlineDeviceMobile,        bg: 'bg-white/20' },
  ai:        { Icon: MdSmartToy,                   bg: 'bg-white/20' },
  agency:    { Icon: HiOutlineClipboardCheck,      bg: 'bg-white/20' },
  security:  { Icon: HiOutlineShieldCheck,         bg: 'bg-white/20' },
}

function BlogIcon({ name, size = 36 }) {
  const entry = iconMap[name]
  if (!entry) return null
  const { Icon, bg } = entry
  return (
    <div className={`w-16 h-16 rounded-2xl ${bg} backdrop-blur-sm flex items-center justify-center`}>
      <Icon size={size} className="text-white" />
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }

const blogLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': 'https://selectionstechnologies.com/blog',
  url: 'https://selectionstechnologies.com/blog',
  name: 'Selections Technologies Blog',
  description: 'Expert articles on web development, SEO, digital marketing, e-commerce, and IT trends for UK businesses.',
  publisher: { '@id': 'https://selectionstechnologies.com/#organization' },
  blogPost: blogs.map((b) => ({
    '@type': 'BlogPosting',
    headline: b.title,
    url: `https://selectionstechnologies.com/blog/${b.slug}`,
    datePublished: b.date,
    author: { '@type': 'Organization', name: b.author },
    description: b.excerpt,
  })),
}

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog | Web, SEO & Marketing Tips"
        description="Expert articles on web development, Shopify, WordPress, SEO, digital marketing, and IT strategies for UK businesses. Written by Selections Technologies."
        canonical="/blog"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }} />

      {/* ─── Hero ─────────────────────────── */}
      <section className="relative pt-40 pb-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute top-10 right-1/3 w-80 h-80 bg-brand-blue rounded-full blur-3xl opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <m.div initial={false} animate="visible" variants={stagger} className="motion-safe:animate-fade-up">
            <m.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-4">
              Knowledge Base
            </m.span>
            <m.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
              Our <span className="text-gradient">Blog</span>
            </m.h1>
            <m.p variants={fadeUp} className="max-w-xl mx-auto text-slate-400 text-lg leading-relaxed">
              Expert guides on web development, SEO, digital marketing, and e-commerce — written specifically for UK businesses.
            </m.p>
          </m.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent" />
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Articles grid */}
          <h2 className="sr-only">Latest articles</h2>
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {blogs.map((post, i) => (
              <m.div key={post.id} custom={i} variants={fadeUp}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div
                    className="h-44 flex flex-col items-center justify-center p-6 relative overflow-hidden"
                    style={{ background: post.coverGradient }}
                  >
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.4) 0%, transparent 50%)' }} />
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <BlogIcon name={post.icon} size={32} />
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${post.categoryColor} bg-white/90`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="flex items-center gap-1 text-xs text-slate-500"><HiClock size={12} />{post.readTime}</span>
                      <span className="text-slate-200">·</span>
                      <span className="text-xs text-slate-500">{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })}</span>
                    </div>
                    <h3 className="text-base font-extrabold text-navy mb-3 leading-snug group-hover:text-brand-blue transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="flex items-center gap-1 text-brand-blue text-sm font-semibold group-hover:gap-2 transition-all mt-auto">
                      Read Article <HiArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Need Help With Your <span className="text-gradient">Digital Growth?</span>
            </h2>
            <p className="text-slate-400 mb-7 text-base">Our team is ready to help you with SEO, web development, and digital marketing.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-blue hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-brand-blue/30 hover:-translate-y-0.5 transition-all">
              Get a Free Consultation <HiArrowRight />
            </Link>
          </m.div>
        </div>
      </section>
    </>
  )
}
