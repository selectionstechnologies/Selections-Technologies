import { Link } from 'react-router-dom'
import { m } from 'framer-motion'
import { HiArrowRight, HiCheck, HiX, HiOutlineShieldCheck, HiOutlineBadgeCheck, HiOutlineSupport } from 'react-icons/hi'
import { FaStar, FaWhatsapp, FaMedal, FaCrown, FaGem } from 'react-icons/fa'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

function Orb({ className }) {
  return <div className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`} />
}

export const growthPlans = [
  {
    name: 'Silver Plan',
    icon: FaMedal,
    price: 249,
    tagline: 'Everything a small business needs to get online and start growing.',
    badge: 'Starter',
    theme: {
      bar: 'from-slate-300 via-slate-500 to-slate-300',
      card: 'bg-gradient-to-b from-slate-50 to-white border-slate-300 shadow-xl shadow-slate-300/40',
      icon: 'bg-gradient-to-br from-slate-400 to-slate-700 text-white shadow-lg shadow-slate-400/40',
      badge: 'bg-slate-100 text-slate-700 border-slate-200',
      label: 'text-slate-600',
      check: 'bg-slate-200 text-slate-700',
      button: 'bg-gradient-to-r from-slate-700 to-slate-900 text-white shadow-lg shadow-slate-500/30 hover:from-slate-800 hover:to-black',
    },
    groups: [
      { title: 'Website', items: ['Business website — up to 5 pages', 'Mobile responsive design', 'WhatsApp button & contact form'] },
      { title: 'SEO', items: ['On-page SEO for up to 5 pages', 'Up to 10 SEO keywords tracked', 'Meta titles & descriptions setup'] },
      { title: 'Marketing', items: ['Google Business Profile setup', '8 social media posts / month'] },
    ],
    excluded: ['Paid ads management', 'AI chatbot & automation'],
  },
  {
    name: 'Gold Plan',
    icon: FaCrown,
    price: 449,
    tagline: 'Website, SEO, ads and an AI chatbot — built to generate leads.',
    popular: true,
    groups: [
      { title: 'Website', items: ['Business website — up to 10 pages', 'Blog / CMS for easy updates', 'Speed & performance optimisation'] },
      { title: 'SEO', items: ['Up to 20 SEO keywords tracked', 'URL structure & canonical review', 'Local directory submissions'] },
      { title: 'Marketing', items: ['16 social media posts / month', 'Meta or Google Ads management'] },
      { title: 'AI & Automation', items: ['AI website chatbot for FAQs & lead capture'] },
    ],
    excluded: ['CRM & workflow automation'],
  },
  {
    name: 'Platinum Plan',
    icon: FaGem,
    price: 849,
    tagline: 'A complete digital growth engine with advanced AI automation.',
    badge: 'Best Value',
    theme: {
      bar: 'from-violet-500 via-fuchsia-500 to-indigo-500',
      card: 'bg-gradient-to-b from-violet-50 to-white border-violet-300 shadow-xl shadow-violet-300/40',
      icon: 'bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white shadow-lg shadow-violet-400/40',
      badge: 'bg-violet-100 text-violet-700 border-violet-200',
      label: 'text-violet-600',
      check: 'bg-violet-100 text-violet-600',
      button: 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30 hover:from-violet-700 hover:to-fuchsia-700',
    },
    groups: [
      { title: 'Website', items: ['Website or e-commerce store — up to 40 pages', 'Custom features & integrations'] },
      { title: 'SEO', items: ['Up to 50 SEO keywords tracked', 'Competitor & keyword gap analysis', 'Internal linking & content optimisation'] },
      { title: 'Marketing', items: ['Full social media management', 'Meta + Google Ads with A/B testing'] },
      { title: 'AI & Automation', items: ['AI chatbot + WhatsApp automation', 'CRM integration & lead automation workflows', 'Dedicated account manager & priority support'] },
    ],
    excluded: [],
  },
]

export default function PricingPlans({ showHeader = true }) {
  // Without the section's own h2, plan names are the next heading level below the page h1
  const PlanHeading = showHeader ? 'h3' : 'h2'

  return (
    <section className="py-24 bg-gradient-to-b from-white via-surface to-white relative overflow-hidden">
      <Orb className="w-96 h-96 bg-brand-blue -top-32 -left-32 opacity-[0.07]" />
      <Orb className="w-96 h-96 bg-violet-500 -bottom-32 -right-32 opacity-[0.07]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <m.span
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-4"
            >
              Growth Packages
            </m.span>
            <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-navy mb-4 leading-tight">
              Website, Marketing & SEO — <span className="text-gradient">All in One Plan</span>
            </m.h2>
            <m.p variants={fadeUp} className="text-slate-500 text-base leading-relaxed mb-4">
              Stop juggling multiple agencies. Each package combines a professional website, SEO, digital
              marketing and smart AI automation — so your business grows on every channel.
            </m.p>
            <m.div variants={fadeUp}>
              <Link to="/pricing" className="inline-flex items-center gap-1.5 text-brand-blue font-semibold text-sm hover:gap-2.5 transition-all">
                Compare all plans in detail <HiArrowRight />
              </Link>
            </m.div>
          </m.div>
        )}

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto"
        >
          {growthPlans.map((plan, i) => {
            const Icon = plan.icon
            const dark = plan.popular
            const t = plan.theme
            return (
              <m.div
                key={plan.name}
                variants={fadeUp}
                custom={i}
                className={`group relative rounded-3xl transition-all duration-300 hover:-translate-y-2 ${
                  dark
                    ? 'p-[2px] bg-gradient-to-b from-brand-blue via-brand-cyan to-brand-blue shadow-2xl shadow-brand-blue/30 md:-my-4'
                    : ''
                }`}
              >
                <div
                  className={`relative h-full flex flex-col rounded-3xl p-8 overflow-hidden ${
                    dark ? 'bg-navy text-white' : `border-2 ${t.card} group-hover:shadow-2xl transition-shadow duration-300`
                  }`}
                >
                  {dark ? (
                    <>
                      <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-brand-blue/30 blur-3xl" />
                      <div className="absolute inset-0 hero-grid opacity-20" />
                    </>
                  ) : (
                    <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${t.bar}`} />
                  )}

                  <div className="relative flex items-start justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${
                        dark ? 'bg-gradient-to-br from-brand-blue to-brand-cyan text-white shadow-lg shadow-brand-blue/40' : t.icon
                      }`}
                    >
                      <Icon />
                    </div>
                    {dark ? (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-brand-cyan text-[11px] font-bold tracking-wider uppercase">
                        <FaStar className="w-3 h-3" /> Most Popular
                      </span>
                    ) : (
                      <span className={`px-3 py-1 rounded-full border text-[11px] font-bold tracking-wider uppercase ${t.badge}`}>
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <PlanHeading className={`relative text-2xl font-bold mb-2 ${dark ? 'text-white' : 'text-navy'}`}>{plan.name}</PlanHeading>
                  <p className={`relative text-sm leading-relaxed mb-6 min-h-[2.5rem] ${dark ? 'text-slate-300' : 'text-slate-500'}`}>
                    {plan.tagline}
                  </p>

                  <div className="relative flex items-baseline gap-1">
                    <span className={`text-2xl font-bold self-start mt-2 ${dark ? 'text-slate-300' : 'text-slate-400'}`}>$</span>
                    <span className={`text-6xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-navy'}`}>{plan.price}</span>
                    <span className={`text-sm font-medium ${dark ? 'text-slate-300' : 'text-slate-500'}`}>/month</span>
                  </div>
                  <p className="relative text-xs mt-1 mb-6 text-slate-400">Billed monthly</p>

                  <div className={`relative h-px mb-6 ${dark ? 'bg-white/10' : 'bg-slate-200'}`} />

                  <div className="relative flex-1 space-y-5 mb-8">
                    {plan.groups.map((g) => (
                      <div key={g.title}>
                        <p className={`text-[11px] font-bold tracking-widest uppercase mb-2.5 ${dark ? 'text-brand-cyan' : t.label}`}>
                          {g.title}
                        </p>
                        <ul className="space-y-2.5">
                          {g.items.map((f) => (
                            <li key={f} className="flex items-start gap-3 text-sm">
                              <span
                                className={`mt-0.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center ${
                                  dark ? 'bg-brand-cyan/20 text-brand-cyan' : t.check
                                }`}
                              >
                                <HiCheck className="w-3.5 h-3.5" />
                              </span>
                              <span className={dark ? 'text-slate-200' : 'text-slate-700'}>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {plan.excluded.length > 0 && (
                      <ul className="space-y-2.5 pt-1">
                        {plan.excluded.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-sm">
                            <span
                              className={`mt-0.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center ${
                                dark ? 'bg-white/5 text-slate-500' : 'bg-slate-100 text-slate-400'
                              }`}
                            >
                              <HiX className="w-3 h-3" />
                            </span>
                            <span className={`line-through ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <Link
                    to="/contact"
                    className={`relative inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 font-semibold rounded-xl transition-all ${
                      dark
                        ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-lg shadow-brand-blue/40 hover:opacity-95'
                        : t.button
                    }`}
                  >
                    Get Started <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </m.div>
            )
          })}
        </m.div>

        {/* Trust strip + custom plan CTA */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 text-sm text-slate-500">
            {[
              { icon: HiOutlineShieldCheck, text: 'No hidden fees' },
              { icon: HiOutlineBadgeCheck, text: 'Website, SEO & marketing in one place' },
              { icon: HiOutlineSupport, text: 'Dedicated support' },
            ].map(({ icon: TIcon, text }) => (
              <span key={text} className="inline-flex items-center gap-2">
                <TIcon className="w-5 h-5 text-brand-blue" /> {text}
              </span>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl bg-white border border-slate-200 shadow-sm p-6 sm:p-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-navy mb-1">Need a custom package?</h3>
              <p className="text-sm text-slate-500">
                Tell us about your goals and we&apos;ll build a package tailored to your business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-blue hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-blue/30"
              >
                Get a Free Quote <HiArrowRight />
              </Link>
              <a
                href="https://wa.me/447448091908"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 hover:border-green-500 hover:text-green-600 text-navy font-semibold rounded-xl transition-all"
              >
                <FaWhatsapp className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  )
}
