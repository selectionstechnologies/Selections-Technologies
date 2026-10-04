import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist. Explore our services, pricing and portfolio."
        noIndex
      />
      <section className="relative min-h-[80vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-40 text-center">
          <p className="text-7xl sm:text-8xl font-black text-gradient mb-4">404</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Page Not Found</h1>
          <p className="text-slate-400 text-lg mb-10">
            Sorry, we couldn&apos;t find that page. It may have moved or no longer exists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-blue hover:bg-blue-500 text-white font-semibold rounded-xl transition-all"
            >
              Back to Home <HiArrowRight />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 hover:border-brand-cyan/60 text-white font-semibold rounded-xl transition-all"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
