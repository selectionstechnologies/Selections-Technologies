import { Link } from 'react-router-dom'
import { HiArrowRight, HiOutlineLightBulb } from 'react-icons/hi'
import SEO from './SEO'
import { legalPages, LEGAL_UPDATED } from '../data/legal'

const slugify = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

// Shared layout for legal pages: hero, "in short" summary, sticky contents list,
// numbered sections and links to the other policies.
// Each section is { title, body: [string | string[]] } — an array inside body renders as a bullet list.
export default function LegalPage({ path, seo, title, intro, summary, sections }) {
  const related = legalPages.filter((p) => p.to !== path)

  return (
    <>
      <SEO canonical={path} {...seo} />

      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute top-10 right-0 w-96 h-96 bg-brand-blue rounded-full blur-3xl opacity-10 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center motion-safe:animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-4">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">{title}</h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">{intro}</p>
          <p className="mt-6 text-sm text-slate-500">Last updated: {LEGAL_UPDATED}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent" />
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[240px_1fr] gap-10">
          <aside className="hidden lg:block">
            <nav className="sticky top-28 rounded-2xl bg-white border border-slate-100 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">On this page</p>
              <ol className="space-y-2 text-sm">
                {sections.map((s, i) => (
                  <li key={s.title}>
                    <a href={`#${slugify(s.title)}`} className="text-slate-600 hover:text-brand-blue transition-colors">
                      {i + 1}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="space-y-8 min-w-0">
            {summary && (
              <div className="rounded-3xl border border-brand-blue/15 bg-brand-blue/5 p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <HiOutlineLightBulb size={20} className="text-brand-blue" />
                  <h2 className="font-bold text-navy">In short</h2>
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-600 leading-relaxed">
                  {summary.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <article className="rounded-3xl bg-white border border-slate-100 p-6 sm:p-10 space-y-10">
              {sections.map((s, i) => (
                <section key={s.title} id={slugify(s.title)} className="scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-bold text-navy mb-4">
                    <span className="text-brand-blue mr-2">{i + 1}.</span>
                    {s.title}
                  </h2>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    {s.body.map((block, j) =>
                      Array.isArray(block) ? (
                        <ul key={j} className="list-disc pl-5 space-y-2 marker:text-brand-blue">
                          {block.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p key={j}>{block}</p>
                      )
                    )}
                  </div>
                </section>
              ))}

              <div className="rounded-2xl bg-surface p-6 text-sm text-slate-600">
                Questions about this page? Email{' '}
                <a href="mailto:info@selectionstechnologies.com" className="font-semibold text-brand-blue hover:underline">
                  info@selectionstechnologies.com
                </a>{' '}
                or{' '}
                <Link to="/contact" className="font-semibold text-brand-blue hover:underline">
                  contact us
                </Link>
                .
              </div>
            </article>

            <div>
              <h2 className="text-lg font-bold text-navy mb-4">Related policies</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map(({ to, label, desc, icon: Icon }) => (
                  <Link
                    key={to}
                    to={to}
                    className="group flex items-start gap-4 rounded-2xl bg-white border border-slate-100 p-5 hover:border-brand-blue/30 hover:shadow-md transition-all"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10">
                      <Icon size={20} className="text-brand-blue" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-semibold text-navy group-hover:text-brand-blue transition-colors">{label}</span>
                      <span className="block text-sm text-slate-500">{desc}</span>
                    </span>
                    <HiArrowRight size={18} className="mt-1 text-slate-300 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
