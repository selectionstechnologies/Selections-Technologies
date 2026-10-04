import { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { HiX, HiOutlineClock, HiOutlineAcademicCap, HiOutlineGlobe, HiOutlineCheckCircle, HiArrowRight } from 'react-icons/hi'
import { FaShopify, FaWordpress, FaMeta, FaChartLine } from 'react-icons/fa6'
import { MdStorefront, MdDesignServices, MdSmartphone, MdSearch } from 'react-icons/md'
import { SiOpenai } from 'react-icons/si'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const courses = [
  {
    id: 1,
    icon: FaShopify,
    title: 'Shopify Store Development',
    badge: 'Beginner – Advanced',
    price: '$149',
    duration: '12-16 Weeks',
    tagline: 'Build & launch professional Shopify stores from scratch.',
    color: 'from-green-500/20 to-green-600/5',
    border: 'border-green-500/20 hover:border-green-500/50',
    iconColor: 'text-green-500',
    iconBg: 'bg-green-500/10',
    headerGradient: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    highlights: [
      'Shopify store setup & theme customisation',
      'Product listing, collections & inventory',
      'Payment gateways & shipping setup',
      'Apps & integrations (Oberlo, DSers, etc.)',
      'SEO optimisation for Shopify',
      'Dropshipping & print-on-demand model',
      'Live project: fully functional store',
    ],
    description:
      'Master Shopify from zero to a live, revenue-ready store. You will learn theme customisation, product management, payment & shipping configuration, app integrations, and SEO — finishing with a real store you can sell immediately. Perfect for entrepreneurs, freelancers, and agencies.',
    level: 'Beginner – Advanced',
    language: 'English / Urdu',
    format: '100% Online (recorded + live sessions)',
    certificate: true,
  },
  {
    id: 2,
    icon: SiOpenai,
    title: 'Full-Stack Development with AI',
    badge: 'Intermediate',
    price: '$249',
    duration: '12-16 Weeks',
    tagline: 'Build complete web apps using React, Node.js & AI tools.',
    color: 'from-violet-500/20 to-violet-600/5',
    border: 'border-violet-500/20 hover:border-violet-500/50',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10',
    headerGradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    highlights: [
      'HTML, CSS, JavaScript fundamentals',
      'React.js (hooks, routing, state)',
      'Node.js & Express REST APIs',
      'MongoDB / PostgreSQL databases',
      'AI-assisted coding (GitHub Copilot, ChatGPT)',
      'Authentication & deployment (Vercel / AWS)',
      'Capstone: full-stack SaaS project',
    ],
    description:
      'The complete full-stack bootcamp supercharged with AI. Learn React on the frontend, Node + Express on the backend, and integrate AI coding assistants to build 10× faster. You will ship a real SaaS project and be job-ready for global remote roles.',
    level: 'Intermediate',
    language: 'English / Urdu',
    format: '100% Online (recorded + live sessions)',
    certificate: true,
  },
  {
    id: 3,
    icon: SiOpenai,
    title: 'Web Development with AI',
    badge: 'Beginner',
    price: '$199',
    duration: '12-16 Weeks',
    tagline: 'Create modern websites faster using AI-powered workflows.',
    color: 'from-brand-blue/20 to-blue-700/5',
    border: 'border-brand-blue/20 hover:border-brand-blue/50',
    iconColor: 'text-brand-blue',
    iconBg: 'bg-brand-blue/10',
    headerGradient: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)',
    highlights: [
      'HTML5, CSS3 & Tailwind CSS',
      'JavaScript & React basics',
      'AI tools: v0.dev, Bolt.new, Cursor IDE',
      'Responsive & mobile-first design',
      'Deployment on Vercel / Netlify',
      'Freelancing with AI-built websites',
      '3 real client-ready projects',
    ],
    description:
      'Learn modern web development accelerated by AI tools. Perfect for beginners — go from zero to building professional, responsive websites in just 8 weeks. Using tools like Cursor, v0.dev, and ChatGPT you will work smarter, not harder, and build a portfolio ready for freelancing or employment.',
    level: 'Beginner',
    language: 'English / Urdu',
    format: '100% Online (recorded + live sessions)',
    certificate: true,
  },
  {
    id: 4,
    icon: FaWordpress,
    title: 'WordPress Development with AI',
    badge: 'Beginner – Intermediate',
    price: '$149',
    duration: '12-16 Weeks',
    tagline: 'Build stunning WordPress websites — powered by AI.',
    color: 'from-sky-500/20 to-sky-600/5',
    border: 'border-sky-500/20 hover:border-sky-500/50',
    iconColor: 'text-sky-400',
    iconBg: 'bg-sky-500/10',
    headerGradient: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
    highlights: [
      'WordPress installation & core setup',
      'Elementor & Divi page builders',
      'WooCommerce & ecommerce setup',
      'Custom themes & child themes',
      'Plugins: SEO, security, speed',
      'AI content generation for sites',
      'Client project walkthrough',
    ],
    description:
      'Become a professional WordPress developer using AI to speed up every step — design, content, and deployment. Learn Elementor, WooCommerce, SEO plugins, and AI content tools. Start taking freelance clients by the end of week 6.',
    level: 'Beginner – Intermediate',
    language: 'English / Urdu',
    format: '100% Online (recorded + live sessions)',
    certificate: true,
  },
  {
    id: 5,
    icon: FaChartLine,
    title: 'Digital Marketing',
    badge: 'Beginner – Advanced',
    price: '$129',
    duration: '12-16 Weeks',
    tagline: 'Master the full digital marketing spectrum.',
    color: 'from-orange-500/20 to-orange-600/5',
    border: 'border-orange-500/20 hover:border-orange-500/50',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
    headerGradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    highlights: [
      'Digital marketing strategy & funnel',
      'SEO fundamentals & on-page tactics',
      'Social media marketing (Meta, TikTok)',
      'Email marketing & automation',
      'Content marketing & blogging',
      'Google Analytics 4 & data insights',
      'Freelancing as a digital marketer',
    ],
    description:
      'The complete digital marketing course covering SEO, social media, email marketing, content strategy, and analytics. Learn how brands grow online and build a freelance career or in-house career in one of the fastest-growing fields worldwide.',
    level: 'Beginner – Advanced',
    language: 'English / Urdu',
    format: '100% Online (recorded + live sessions)',
    certificate: true,
  },
  {
    id: 6,
    icon: MdStorefront,
    title: 'E-Commerce Website Management',
    badge: 'Beginner – Intermediate',
    price: '$129',
    duration: '12-16 Weeks',
    tagline: 'Run and scale an ecommerce business like a pro.',
    color: 'from-amber-500/20 to-amber-600/5',
    border: 'border-amber-500/20 hover:border-amber-500/50',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
    headerGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    highlights: [
      'Shopify & WooCommerce store management',
      'Product research & sourcing',
      'Order management & fulfilment',
      'Inventory & stock control',
      'Customer service automation',
      'Analytics & conversion optimisation',
      'Scaling with paid ads',
    ],
    description:
      'Learn everything needed to manage a thriving ecommerce store — from product listings and fulfilment to analytics and scaling with ads. Ideal for store owners, virtual assistants, and anyone wanting a high-income remote skill.',
    level: 'Beginner – Intermediate',
    language: 'English / Urdu',
    format: '100% Online (recorded + live sessions)',
    certificate: true,
  },
  {
    id: 7,
    icon: MdSearch,
    title: 'Search Engine Optimisation (SEO)',
    badge: 'Beginner – Advanced',
    price: '$119',
    duration: '12-16 Weeks',
    tagline: 'Rank #1 on Google with proven SEO strategies.',
    color: 'from-emerald-500/20 to-emerald-600/5',
    border: 'border-emerald-500/20 hover:border-emerald-500/50',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    headerGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    highlights: [
      'Keyword research (Ahrefs, SEMrush)',
      'On-page & technical SEO',
      'Link building strategies',
      'Local SEO & Google Business',
      'SEO for WordPress & Shopify',
      'Content strategy for rankings',
      'Live website audit & fixes',
    ],
    description:
      'Rank websites on Google with white-hat SEO strategies that actually work in 2025. From keyword research to technical audits and link building — you will run complete SEO campaigns and offer SEO as a high-paying freelance service worldwide.',
    level: 'Beginner – Advanced',
    language: 'English / Urdu',
    format: '100% Online (recorded + live sessions)',
    certificate: true,
  },
  {
    id: 8,
    icon: MdSmartphone,
    title: 'Social Media Digital Marketing',
    badge: 'Beginner',
    price: '$119',
    duration: '12-16 Weeks',
    tagline: 'Grow brands on Instagram, Facebook, TikTok & YouTube.',
    color: 'from-pink-500/20 to-pink-600/5',
    border: 'border-pink-500/20 hover:border-pink-500/50',
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-500/10',
    headerGradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
    highlights: [
      'Social media strategy & content calendar',
      'Instagram & Facebook growth tactics',
      'TikTok viral content strategies',
      'YouTube channel optimisation',
      'Reels, Shorts & video editing basics',
      'Community management & engagement',
      'Brand building & influencer outreach',
    ],
    description:
      'Master organic social media growth across all major platforms. Learn to create content that goes viral, build loyal communities, and manage brand pages professionally. A must-have skill for entrepreneurs, marketers, and freelancers in 2025.',
    level: 'Beginner',
    language: 'English / Urdu',
    format: '100% Online (recorded + live sessions)',
    certificate: true,
  },
  {
    id: 9,
    icon: MdDesignServices,
    title: 'Graphic Designing with AI',
    badge: 'Beginner – Intermediate',
    price: '$99',
    duration: '12-16 Weeks',
    tagline: 'Design stunning visuals using Canva, Figma & AI tools.',
    color: 'from-rose-500/20 to-rose-600/5',
    border: 'border-rose-500/20 hover:border-rose-500/50',
    iconColor: 'text-rose-400',
    iconBg: 'bg-rose-500/10',
    headerGradient: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
    highlights: [
      'Design principles & colour theory',
      'Canva Pro mastery',
      'Adobe Illustrator & Photoshop basics',
      'Figma for UI/UX design',
      'AI tools: Adobe Firefly, Midjourney',
      'Logo, poster, social media design',
      'Freelancing on Fiverr & Upwork',
    ],
    description:
      'Create professional graphics, logos, social media posts, and UI designs using the best AI-powered tools available. From Canva to Midjourney, you will build a strong portfolio and start earning as a graphic designer globally — even with zero experience.',
    level: 'Beginner – Intermediate',
    language: 'English / Urdu',
    format: '100% Online (recorded + live sessions)',
    certificate: true,
  },
  {
    id: 10,
    icon: FaMeta,
    title: 'Meta & Google Ads Specialist',
    badge: 'Beginner – Advanced',
    price: '$129',
    duration: '12-16 Weeks',
    tagline: 'Run profitable ad campaigns on Meta & Google.',
    color: 'from-indigo-500/20 to-indigo-600/5',
    border: 'border-indigo-500/20 hover:border-indigo-500/50',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10',
    headerGradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
    highlights: [
      'Facebook & Instagram Ads Manager',
      'Campaign structure, targeting & audiences',
      'Google Search, Display & Shopping Ads',
      'Pixel & conversion tracking setup',
      'A/B testing & ad creative strategy',
      'Budget management & ROAS optimisation',
      'Live ad account walkthrough',
    ],
    description:
      'Become a certified paid ads specialist managing real budgets on Meta (Facebook & Instagram) and Google. Learn audience targeting, ad copywriting, pixel tracking, and campaign optimisation — and charge clients $500–$2000/month managing their ads remotely.',
    level: 'Beginner – Advanced',
    language: 'English / Urdu',
    format: '100% Online (recorded + live sessions)',
    certificate: true,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: 'easeOut' } }),
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }

function CourseModal({ course, onClose }) {
  const Icon = course.icon
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <m.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
      >
        {/* Header */}
        <div className={`p-7 bg-gradient-to-br ${course.color} border-b border-slate-100 rounded-t-3xl`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-slate-500 hover:text-navy transition-colors shadow"
          >
            <HiX size={18} />
          </button>

          <div className={`inline-flex p-3 rounded-xl ${course.iconBg} mb-4`}>
            <Icon className={`${course.iconColor} text-2xl`} size={26} />
          </div>
          <h2 className="text-2xl font-extrabold text-navy mb-1">{course.title}</h2>
          <p className="text-slate-500 text-sm">{course.tagline}</p>

          <div className="flex flex-wrap gap-3 mt-4">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-white/70 px-3 py-1.5 rounded-full">
              <HiOutlineClock size={13} /> {course.duration}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-white/70 px-3 py-1.5 rounded-full">
              <HiOutlineAcademicCap size={13} /> {course.level}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-white/70 px-3 py-1.5 rounded-full">
              <HiOutlineGlobe size={13} /> {course.language}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-7">
          <p className="text-slate-600 text-sm leading-relaxed mb-6">{course.description}</p>

          <h3 className="font-bold text-navy text-base mb-3">What You'll Learn</h3>
          <ul className="grid sm:grid-cols-2 gap-2 mb-6">
            {course.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-slate-600">
                <HiOutlineCheckCircle className={`${course.iconColor} shrink-0 mt-0.5`} size={16} />
                {h}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-6">
            <span className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">📍 {course.format}</span>
            {course.certificate && (
              <span className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">🏆 Certificate of Completion</span>
            )}
            <span className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">🌍 Worldwide Enrollment</span>
          </div>

          <div className="pt-5 border-t border-slate-100">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSemAUMVs6YXVn4k9uJmEbuYndAraxkrNgMl17BX8xxA1CcQtg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-brand-blue hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-blue/30 hover:-translate-y-0.5"
            >
              Enroll Now <HiArrowRight />
            </a>
          </div>
        </div>
      </m.div>
    </m.div>
  )
}

export default function Courses() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <SEO
        title="IT & Digital Marketing Courses"
        description="Learn in-demand IT skills online with Selections Technologies. Courses in Shopify, WordPress, Web Development with AI, Digital Marketing, SEO, Graphic Design, Meta & Google Ads. Worldwide enrollment. Affordable prices."
        canonical="/courses"
      />

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute top-10 right-0 w-96 h-96 bg-brand-blue rounded-full blur-3xl opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-cyan rounded-full blur-3xl opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <m.div initial={false} animate="visible" variants={stagger} className="motion-safe:animate-fade-up">
            <m.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-4">
              Online Learning
            </m.span>
            <m.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5">
              Master In-Demand <span className="text-gradient">IT Skills</span>
            </m.h1>
            <m.p variants={fadeUp} className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed mb-8">
              Industry-led online courses designed to get you job-ready or freelance-ready. Learn at your own pace, worldwide, at prices that make sense.
            </m.p>
            <m.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              {[
                { icon: '🌍', text: 'Worldwide Enrollment' },
                { icon: '🎓', text: 'Certificate Included' },
                { icon: '💻', text: '100% Online' },
                { icon: '🤝', text: 'Lifetime Access' },
              ].map(({ icon, text }) => (
                <span key={text} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  {icon} {text}
                </span>
              ))}
            </m.div>
          </m.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent" />
      </section>

      {/* ─── Course Cards ─────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">All courses</h2>
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {courses.map((course, i) => {
              const Icon = course.icon
              return (
                <m.div
                  key={course.id}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={() => setSelected(course)}
                  className={`relative rounded-2xl border ${course.border} bg-white cursor-pointer transition-all duration-300 group overflow-hidden flex flex-col shadow-sm hover:shadow-xl`}
                >
                  {/* ── Gradient Header Banner ── */}
                  <div
                    className="relative h-44 overflow-hidden flex items-center justify-center"
                    style={{ background: course.headerGradient }}
                  >
                    {/* Decorative bubbles */}
                    <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10" />
                    <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/10" />
                    <div className="absolute top-3 left-10 w-6 h-6 rounded-full bg-white/15" />
                    <div className="absolute bottom-4 right-12 w-4 h-4 rounded-full bg-white/20" />

                    {/* Course number watermark */}
                    <span className="absolute top-3 left-4 text-white/25 font-black text-5xl leading-none select-none">
                      {String(course.id).padStart(2, '0')}
                    </span>

                    {/* Icon circle */}
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/30 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white drop-shadow-sm" size={30} />
                    </div>
                  </div>

                  {/* ── Level Badge — sits between banner and body ── */}
                  <div className="flex justify-center -mt-5 relative z-10 px-4">
                    <span
                      className="px-5 py-2 bg-white text-xs font-bold rounded-full shadow-lg border border-slate-100 whitespace-nowrap"
                      style={{
                        color: course.id === 1 ? '#16a34a'
                          : course.id === 2 ? '#7c3aed'
                          : course.id === 3 ? '#1d4ed8'
                          : course.id === 4 ? '#0284c7'
                          : course.id === 5 ? '#ea580c'
                          : course.id === 6 ? '#d97706'
                          : course.id === 7 ? '#059669'
                          : course.id === 8 ? '#db2777'
                          : course.id === 9 ? '#e11d48'
                          : '#4f46e5'
                      }}
                    >
                      {course.badge}
                    </span>
                  </div>

                  {/* ── Card Body ── */}
                  <div className="flex flex-col flex-1 px-6 pb-6 pt-4">
                    <h3 className="font-extrabold text-navy text-lg mb-2 leading-snug">{course.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{course.tagline}</p>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                        <span className="flex items-center gap-1"><HiOutlineClock size={13} /> {course.duration}</span>
                        <span className="flex items-center gap-1"><HiOutlineGlobe size={13} /> Online</span>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-bold text-brand-blue group-hover:gap-2 transition-all whitespace-nowrap">
                        View Details <HiArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </m.div>
              )
            })}
          </m.div>
        </div>
      </section>

      {/* ─── Why Learn With Us ────────────────────────────── */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Why Learn with <span className="text-gradient">Selections Technologies?</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">Real skills. Real projects. Real results — for students and professionals worldwide.</p>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {[
              { icon: '👨‍💻', title: 'Industry Experts', desc: 'Taught by working professionals with real-world project experience.' },
              { icon: '🎯', title: 'Project-Based', desc: 'Every course ends with a portfolio-ready live project you built yourself.' },
              { icon: '🌍', title: 'Worldwide Access', desc: 'Enroll from anywhere. Content in English and Urdu for maximum clarity.' },
              { icon: '💬', title: 'Lifetime Support', desc: 'Ask questions anytime — via WhatsApp, email, or community group.' },
            ].map(({ icon, title, desc }, i) => (
              <m.div
                key={title}
                variants={fadeUp}
                custom={i}
                className="glass p-6 rounded-2xl hover:border-brand-cyan/30 transition-colors text-center"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-cyan">
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to Start Your Learning Journey?
            </m.h2>
            <m.p variants={fadeUp} className="text-blue-100 mb-8">
              Enroll today and gain the skills that employers and clients are paying premium for in 2025.
            </m.p>
            <m.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-0.5"
              >
                Enroll Now <HiArrowRight />
              </Link>
              <a
                href="https://wa.me/447448091908"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/60 text-white font-semibold rounded-xl hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                WhatsApp Us
              </a>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* ─── Course Detail Modal ───────────────────────────── */}
      <AnimatePresence>
        {selected && <CourseModal course={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  )
}
