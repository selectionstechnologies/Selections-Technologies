import { Link } from 'react-router-dom'
import { m } from 'framer-motion'
import {
  HiArrowRight,
  HiOutlineCode,
  HiOutlineColorSwatch,
  HiOutlineTrendingUp,
  HiOutlineClipboardCheck,
  HiOutlineChatAlt2,
  HiOutlineDocumentText,
  HiOutlineEye,
  HiOutlineSupport,
} from 'react-icons/hi'
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'
import SEO from '../components/SEO'
import { team } from '../data/team'

const expertise = [
  {
    icon: HiOutlineCode,
    title: 'Developers',
    desc: 'React, Next.js, WordPress, Shopify and mobile app specialists who write clean, fast, maintainable code.',
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
  },
  {
    icon: HiOutlineColorSwatch,
    title: 'Designers',
    desc: 'UI/UX and graphic designers who turn your brand into websites and visuals people remember.',
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10',
  },
  {
    icon: HiOutlineTrendingUp,
    title: 'Marketing & SEO',
    desc: 'SEO, Meta and Google Ads specialists focused on leads and revenue, not vanity metrics.',
    color: 'text-amber-500',
    bg: 'bg-amber-400/10',
  },
  {
    icon: HiOutlineClipboardCheck,
    title: 'Project Management',
    desc: 'Your single point of contact — keeping scope, timelines and communication on track.',
    color: 'text-rose-500',
    bg: 'bg-rose-400/10',
  },
]

const howWeWork = [
  { icon: HiOutlineChatAlt2, title: 'One point of contact', desc: 'You always know who to speak to about your project.' },
  { icon: HiOutlineDocumentText, title: 'Clear, fixed quotes', desc: 'Scope and price agreed in writing before any work begins.' },
  { icon: HiOutlineEye, title: 'Regular progress updates', desc: 'See your project take shape and give feedback at every stage.' },
  { icon: HiOutlineSupport, title: 'Support after launch', desc: 'We stay with you for fixes, updates and growth after go-live.' },
]

// Each network in its own brand colour; on hover the button fills with that colour
const socialIcons = [
  {
    key: 'facebook',
    label: 'Facebook',
    Icon: FaFacebook,
    className: 'text-[#1877F2] bg-[#1877F2]/10 border-[#1877F2]/20 hover:bg-[#1877F2] hover:border-[#1877F2]',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    Icon: FaInstagram,
    className:
      'text-[#E4405F] bg-[#E4405F]/10 border-[#E4405F]/20 hover:border-transparent hover:bg-gradient-to-tr hover:from-[#FEDA75] hover:via-[#D62976] hover:to-[#4F5BD5]',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    Icon: FaLinkedin,
    className: 'text-[#0A66C2] bg-[#0A66C2]/10 border-[#0A66C2]/20 hover:bg-[#0A66C2] hover:border-[#0A66C2]',
  },
]

function initials(name) {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function Team() {
  return (
    <>
      <SEO
        title="Our Team | Developers, Designers & Marketers"
        description="Meet the Selections Technologies team — developers, designers, SEO and marketing specialists in Croydon, UK, who build and grow websites, stores and apps for businesses."
        keywords="Selections Technologies team, web developers Croydon, UK web design team, digital marketing team UK"
        canonical="/team"
      />

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute top-10 right-0 w-96 h-96 bg-brand-blue rounded-full blur-3xl opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-cyan rounded-full blur-3xl opacity-10 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center motion-safe:animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-4">
            Our Team
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            The People Behind <span className="text-gradient">Your Project</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
            Developers, designers and marketers working together to build websites, stores and apps that help
            your business grow.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent" />
      </section>

      {/* ─── Members ──────────────────────────────────────── */}
      {team.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-4">
                Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
                Meet the People <span className="text-gradient">Leading Your Project</span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-slate-500">
                Real people you can reach directly — not a faceless agency.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {team.map(({ name, role, photo, links = {} }, i) => (
                <m.div
                  key={name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
                  className="w-full max-w-[19rem]"
                >
                  <article className="group flex h-full flex-col items-center rounded-3xl px-6 pt-8 pb-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-2xl hover:shadow-brand-blue/10">
                    {/* Photo: brand gradient ring + tinted backdrop; multiply turns white photo backgrounds into the tint */}
                    <div className="relative h-52 w-52 sm:h-56 sm:w-56 rounded-full bg-gradient-to-br from-brand-blue/25 to-brand-cyan/25 p-[3px] transition-all duration-300 group-hover:from-brand-blue group-hover:to-brand-cyan">
                      <div className="isolate h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-[#DCE8FF] via-[#EEF5FF] to-[#D5F2F8] ring-4 ring-white">
                        {photo ? (
                          <img
                            src={photo}
                            alt={`${name}, ${role} at Selections Technologies`}
                            loading="lazy"
                            width="224"
                            height="224"
                            className="h-full w-full object-cover object-top mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-brand-blue text-5xl font-extrabold text-white">
                            {initials(name)}
                          </div>
                        )}
                      </div>
                    </div>

                    <h3 className="mt-7 text-2xl font-bold text-navy">{name}</h3>
                    <span className="mt-3 h-1 w-10 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan transition-all duration-300 group-hover:w-16" />
                    <p className="mt-3 text-base text-slate-500">{role}</p>

                    <div className="mt-auto flex items-center justify-center gap-3 pt-6">
                      {socialIcons
                        .filter(({ key }) => links[key])
                        .map(({ key, label, Icon, className }) => (
                          <a
                            key={key}
                            href={links[key]}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${name} on ${label}`}
                            title={label}
                            className={`flex h-12 w-12 items-center justify-center rounded-full border hover:-translate-y-0.5 hover:text-white hover:shadow-lg transition-all ${className}`}
                          >
                            <Icon size={18} />
                          </a>
                        ))}
                    </div>
                  </article>
                </m.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Expertise ────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Every Skill Your Project <span className="text-gradient">Needs</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className={`inline-flex p-3.5 rounded-2xl ${bg} mb-5`}>
                  <Icon className={color} size={26} />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How we work ──────────────────────────────────── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              How We Work <span className="text-gradient">With You</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWork.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl glass border-white/10">
                <Icon className="text-brand-cyan mb-4" size={26} />
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
            Ready to <span className="text-gradient">Work With Us?</span>
          </h2>
          <p className="text-slate-500 mb-8">Tell us about your project and get a free, no-obligation quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-brand-blue/30 hover:-translate-y-0.5"
            >
              Start Your Project <HiArrowRight />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-200 text-navy font-semibold rounded-xl hover:bg-white transition-all hover:-translate-y-0.5"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
