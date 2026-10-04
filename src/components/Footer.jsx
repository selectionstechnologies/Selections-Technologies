import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { HiArrowRight } from 'react-icons/hi'
import logo from '../assests/logo.webp'
import { legalPages } from '../data/legal'

// Every column holds exactly 8 links so the four columns line up evenly.
// Columns ending in a "View all" link show 7 items plus that link.
const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/courses', label: 'Courses' },
  { to: '/about', label: 'About Us' },
  { to: '/team', label: 'Our Team' },
  { to: '/blog', label: 'Blog' },
]

const services = [
  { to: '/services/ai-automation', label: 'AI Automation' },
  { to: '/services/web-development', label: 'Web Development' },
  { to: '/services/shopify-development', label: 'Shopify Store Development' },
  { to: '/services/wordpress-development', label: 'WordPress Development' },
  { to: '/services/mobile-app-development', label: 'Mobile App Development' },
  { to: '/services/seo', label: 'SEO Services' },
  { to: '/services/digital-marketing', label: 'Digital Marketing' },
]

const supportLinks = [
  { to: '/contact', label: 'Contact Us' },
  { to: '/book-demo', label: 'Book a Demo' },
  ...legalPages.map(({ to, label }) => ({ to, label })),
]

// Short titles kept here (not imported from blogs.js) so article content stays out of
// the main bundle. Slugs must match src/data/blogs.js.
const latestBlogs = [
  { to: '/blog/how-to-build-shopify-store-in-pakistan-2025', label: 'Build a Shopify Store in Pakistan' },
  { to: '/blog/how-much-does-a-website-cost-in-pakistan', label: 'How Much Does a Website Cost?' },
  { to: '/blog/how-to-rank-website-on-google-in-pakistan', label: 'How to Rank on Google' },
  { to: '/blog/ai-chatbots-for-business-pakistan-2025', label: 'AI Chatbots for Business' },
  { to: '/blog/wordpress-vs-shopify-which-is-better-for-pakistan', label: 'WordPress vs Shopify' },
  { to: '/blog/best-digital-marketing-strategies-for-pakistani-businesses', label: 'Digital Marketing Strategies' },
  { to: '/blog/website-security-essentials-pakistani-businesses', label: 'Website Security Essentials' },
]

const contacts = [
  { title: 'Email Us', icon: MdEmail, lines: [{ text: 'info@selectionstechnologies.com', href: 'mailto:info@selectionstechnologies.com' }] },
  {
    title: 'United Kingdom',
    icon: MdLocationOn,
    lines: [{ text: '+44 7448 091908', href: 'tel:+447448091908' }, { text: 'Croydon High Street, UK' }],
    page: { to: '/web-development-company-uk', label: 'Web development in the UK' },
  },
  {
    title: 'Pakistan',
    icon: MdLocationOn,
    lines: [{ text: '+92 300 3209005', href: 'tel:+923003209005' }, { text: '28 Davis Road, Lahore, PK' }],
    page: { to: '/software-house-lahore', label: 'Software house in Lahore' },
  },
]

const socials = [
  { icon: FaFacebookF, href: 'https://www.facebook.com/selections.technologies', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://www.instagram.com/selections.technologies/?hl=en', label: 'Instagram' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/selections-technologies/', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: 'https://wa.me/447448091908', label: 'WhatsApp' },
]

function LinkColumn({ title, links, viewAll }) {
  return (
    <nav aria-label={title}>
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">{title}</h3>
      <ul className="space-y-3">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to} className="group flex items-center gap-2 text-sm text-slate-400 hover:text-brand-cyan transition-colors">
              <span className="h-1 w-1 shrink-0 rounded-full bg-brand-blue transition-transform group-hover:scale-150" />
              <span className="truncate">{label}</span>
            </Link>
          </li>
        ))}
        {viewAll && (
          <li>
            <Link to={viewAll.to} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan hover:gap-2.5 transition-all">
              {viewAll.label} <HiArrowRight size={14} />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28 md:pb-10">
        {/* Top: brand + contact */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center pb-12 border-b border-white/10">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-5">
              <div className="bg-white rounded-xl px-4 py-2 inline-block shadow-sm">
                <img src={logo} alt="Selections Technologies — IT Company Croydon UK" className="h-10 w-auto object-contain" width="180" height="40" loading="lazy" />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6 max-w-md">
              Empowering businesses through innovative technology solutions, modern web development, and reliable digital services worldwide.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-brand-blue flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid gap-4 sm:grid-cols-3">
            {contacts.map(({ title, icon: Icon, lines, page }) => (
              <div key={title} className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue/15 text-brand-cyan">
                    <Icon size={17} />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white">{title}</p>
                </div>
                <div className="space-y-1.5 text-sm">
                  {lines.map(({ text, href }) =>
                    href ? (
                      <a key={text} href={href} className="block break-words text-slate-300 hover:text-brand-cyan transition-colors">
                        {text}
                      </a>
                    ) : (
                      <p key={text} className="text-slate-400">
                        {text}
                      </p>
                    )
                  )}
                  {page && (
                    <Link to={page.to} className="inline-flex items-center gap-1.5 pt-1 font-semibold text-brand-cyan hover:gap-2.5 transition-all">
                      {page.label} <HiArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Links: four equal columns of 8 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 py-12">
          <LinkColumn title="Quick Links" links={quickLinks} />
          <LinkColumn title="Our Services" links={services} viewAll={{ to: '/services', label: 'View all services' }} />
          <LinkColumn title="Support & Legal" links={supportLinks} />
          <LinkColumn title="Latest Blogs" links={latestBlogs} viewAll={{ to: '/blog', label: 'View all articles' }} />
        </div>

        {/* Bottom bar — centred so the floating buttons in the corners never cover it */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-center gap-x-3 gap-y-1 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Selections Technologies. All rights reserved.</p>
          <span className="hidden md:inline text-slate-600">·</span>
          <p>Croydon, UK &nbsp;·&nbsp; Lahore, PK</p>
        </div>
      </div>
    </footer>
  )
}
