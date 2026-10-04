import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import {
  HiOutlineClock,
  HiOutlineVideoCamera,
  HiOutlineCheckCircle,
  HiChevronLeft,
  HiChevronRight,
  HiArrowLeft,
  HiOutlineGlobeAlt,
  HiOutlineCalendar,
} from 'react-icons/hi'
import SEO from '../components/SEO'
import { WEB3FORMS_KEY } from '../data/forms'
import logo from '../assests/logo.webp'
import { team } from '../data/team'
import { services } from '../data/services'

const BOOKING_WINDOW_DAYS = 60
// Earliest bookable day is today + 2, leaving at least one full day free before any demo
const MIN_NOTICE_DAYS = 2
const SLOTS = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00']
const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const benefits = [
  'A walkthrough of what we can build for your business',
  'Honest advice on the right service, budget and timeline',
  'A clear, no-obligation quote after the call',
]

const initialForm = { name: '', email: '', phone: '', company: '', service: '', message: '' }

const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate())
const sameDay = (a, b) => a && b && a.toDateString() === b.toDateString()
const formatDate = (d) => d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
const formatSlot = (slot) => {
  const [h, m] = slot.split(':').map(Number)
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`
}

// Requests only: the team receives date, time and details by email and confirms the meeting manually
export default function BookDemo() {
  // The calendar depends on today's date, so it only renders in the browser (not in pre-rendered HTML)
  const [mounted, setMounted] = useState(false)
  const [today, setToday] = useState(null)
  const [viewMonth, setViewMonth] = useState(null)
  const [date, setDate] = useState(null)
  const [slot, setSlot] = useState('')
  const [step, setStep] = useState('pick')
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [timeZone, setTimeZone] = useState('')

  useEffect(() => {
    const now = startOfDay(new Date())
    setToday(now)
    setViewMonth(new Date(now.getFullYear(), now.getMonth(), 1))
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone || '')
    setMounted(true)
  }, [])

  const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n)
  const firstDay = useMemo(() => (today ? addDays(today, MIN_NOTICE_DAYS) : null), [today])
  const lastDay = useMemo(() => (today ? addDays(today, BOOKING_WINDOW_DAYS) : null), [today])

  const isAvailable = (d) => d >= firstDay && d <= lastDay && d.getDay() !== 0

  const days = useMemo(() => {
    if (!viewMonth) return []
    const first = new Date(viewMonth)
    const blanks = (first.getDay() + 6) % 7
    const count = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate()
    return [
      ...Array.from({ length: blanks }, () => null),
      ...Array.from({ length: count }, (_, i) => new Date(first.getFullYear(), first.getMonth(), i + 1)),
    ]
  }, [viewMonth])

  const canGoPrev = viewMonth && today && viewMonth > new Date(today.getFullYear(), today.getMonth(), 1)
  const canGoNext = viewMonth && lastDay && new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1) <= lastDay
  const shiftMonth = (n) => setViewMonth((v) => new Date(v.getFullYear(), v.getMonth() + n, 1))

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.'
    if (!form.phone.trim()) e.phone = 'Phone / WhatsApp is required.'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setLoading(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Demo Booking: ${form.name} — ${formatDate(date)}, ${formatSlot(slot)}`,
          from_name: 'Selections Technologies Website',
          'Requested date': formatDate(date),
          'Requested time': `${formatSlot(slot)} (${timeZone || 'visitor local time'})`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company || 'Not provided',
          service: form.service || 'Not specified',
          message: form.message || 'Not provided',
        }),
      })
      const data = await res.json()
      if (data.success) setStep('done')
      else alert('Something went wrong. Please try again or contact us via WhatsApp.')
    } catch {
      alert('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border bg-slate-50 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue focus:bg-white transition-all ${
      errors[field] ? 'border-rose-400' : 'border-slate-200'
    }`

  return (
    <>
      <SEO
        title="Book a Free Demo"
        description="Book a free 30-minute demo and consultation with Selections Technologies. Pick a date and time that suits you and talk to our team about your website, app or AI project."
        canonical="/book-demo"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/70 to-sky-100/60 pt-36 pb-24">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 -top-20 h-[30rem] w-[30rem] rounded-full bg-sky-200/40 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 motion-safe:animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
              Book Your <span className="bg-gradient-to-r from-brand-blue to-indigo-500 bg-clip-text text-transparent">Free Demo</span>
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-slate-600 text-lg">
              Pick a date and time that suits you — we'll confirm your slot by email or WhatsApp.
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.85fr_1.4fr] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-blue-900/10">
            {/* Left — meeting details */}
            <aside className="border-b lg:border-b-0 lg:border-r border-slate-100">
              <div className="flex items-center justify-center border-b border-slate-100 bg-surface px-8 py-8">
                <img src={logo} alt="Selections Technologies" className="h-14 w-auto object-contain" width="230" height="56" />
              </div>
              <div className="p-8">
                <p className="text-sm font-semibold text-slate-500">Selections Technologies</p>
                <h2 className="mt-1 text-2xl font-extrabold text-navy">Book a Free Demo</h2>

                <ul className="mt-5 space-y-3 text-sm font-medium text-slate-600">
                  <li className="flex items-center gap-3">
                    <HiOutlineClock size={20} className="text-brand-blue" /> 30 min
                  </li>
                  <li className="flex items-start gap-3">
                    <HiOutlineVideoCamera size={20} className="mt-0.5 shrink-0 text-brand-blue" />
                    Video call or WhatsApp — details shared when we confirm
                  </li>
                  {date && slot && (
                    <li className="flex items-start gap-3 text-brand-blue font-semibold">
                      <HiOutlineCalendar size={20} className="mt-0.5 shrink-0" />
                      {formatSlot(slot)}, {formatDate(date)}
                    </li>
                  )}
                  {timeZone && (
                    <li className="flex items-center gap-3">
                      <HiOutlineGlobeAlt size={20} className="text-brand-blue" /> {timeZone.replace(/_/g, ' ')}
                    </li>
                  )}
                </ul>

                <div className="mt-7 border-t border-slate-100 pt-6">
                  <p className="text-sm font-bold text-navy mb-3">What you'll get</p>
                  <ul className="space-y-2.5">
                    {benefits.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm text-slate-600">
                        <HiOutlineCheckCircle size={18} className="mt-0.5 shrink-0 text-emerald-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex items-center gap-3 rounded-2xl bg-surface p-3">
                  <span className="flex -space-x-2.5">
                    {team
                      .filter((t) => t.photo)
                      .map(({ name, photo }) => (
                        <img
                          key={name}
                          src={photo}
                          alt={name}
                          width="36"
                          height="36"
                          className="h-9 w-9 rounded-full border-2 border-white bg-slate-100 object-cover object-top"
                        />
                      ))}
                  </span>
                  <span className="text-xs font-medium text-slate-600">You'll speak directly with our leadership team</span>
                </div>
              </div>
            </aside>

            {/* Right — steps */}
            <div className="p-6 sm:p-8 min-h-[34rem]">
              {!mounted && <div className="h-full min-h-[28rem] animate-pulse rounded-2xl bg-slate-100" />}

              {mounted && step === 'pick' && (
                <div>
                  <h2 className="text-xl font-bold text-navy mb-6">Select a Date &amp; Time</h2>
                  <div className={`grid gap-8 ${date ? 'md:grid-cols-[1fr_11rem]' : ''}`}>
                    {/* Calendar */}
                    <div>
                      <div className="mb-4 flex items-center justify-center gap-6">
                        <button
                          type="button"
                          onClick={() => shiftMonth(-1)}
                          disabled={!canGoPrev}
                          aria-label="Previous month"
                          className="flex h-9 w-9 items-center justify-center rounded-full text-brand-blue hover:bg-brand-blue/10 disabled:text-slate-300 disabled:hover:bg-transparent"
                        >
                          <HiChevronLeft size={20} />
                        </button>
                        <p className="w-40 text-center font-semibold text-navy">
                          {viewMonth.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                        </p>
                        <button
                          type="button"
                          onClick={() => shiftMonth(1)}
                          disabled={!canGoNext}
                          aria-label="Next month"
                          className="flex h-9 w-9 items-center justify-center rounded-full text-brand-blue hover:bg-brand-blue/10 disabled:text-slate-300 disabled:hover:bg-transparent"
                        >
                          <HiChevronRight size={20} />
                        </button>
                      </div>

                      <div className="grid grid-cols-7 gap-1.5 text-center">
                        {WEEKDAYS.map((w) => (
                          <span key={w} className="pb-2 text-xs font-semibold text-slate-500">
                            {w}
                          </span>
                        ))}
                        {days.map((d, i) => {
                          if (!d) return <span key={`b${i}`} />
                          const available = isAvailable(d)
                          const selected = sameDay(d, date)
                          return (
                            <button
                              key={d.toISOString()}
                              type="button"
                              disabled={!available}
                              onClick={() => {
                                setDate(d)
                                setSlot('')
                              }}
                              aria-pressed={selected}
                              aria-label={formatDate(d)}
                              className={`relative mx-auto flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                                selected
                                  ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30'
                                  : available
                                    ? 'bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20'
                                    : 'text-slate-300 cursor-not-allowed'
                              }`}
                            >
                              {d.getDate()}
                              {sameDay(d, today) && <span className="absolute bottom-1.5 h-1 w-1 rounded-full bg-slate-400" />}
                            </button>
                          )
                        })}
                      </div>
                      <p className="mt-4 text-xs text-slate-400">
                        Available Monday to Saturday, from {MIN_NOTICE_DAYS} days ahead up to {BOOKING_WINDOW_DAYS} days ahead.
                      </p>
                    </div>

                    {/* Time slots */}
                    {date && (
                      <div>
                        <p className="mb-3 text-sm font-semibold text-navy">{date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
                        <div data-lenis-prevent className="grid grid-cols-2 md:grid-cols-1 gap-2 md:max-h-[22rem] md:overflow-y-auto md:pr-1">
                          {SLOTS.map((sl) =>
                            slot === sl ? (
                              <div key={sl} className="grid grid-cols-2 gap-1.5">
                                <span className="flex items-center justify-center rounded-lg bg-slate-600 py-3 text-sm font-semibold text-white">
                                  {formatSlot(sl)}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => setStep('details')}
                                  className="rounded-lg bg-brand-blue py-3 text-sm font-semibold text-white hover:bg-blue-600"
                                >
                                  Next
                                </button>
                              </div>
                            ) : (
                              <button
                                key={sl}
                                type="button"
                                onClick={() => setSlot(sl)}
                                className="rounded-lg border border-brand-blue/40 py-3 text-sm font-semibold text-brand-blue hover:border-brand-blue hover:bg-brand-blue/5 transition-colors"
                              >
                                {formatSlot(sl)}
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {mounted && step === 'details' && (
                <form onSubmit={handleSubmit} noValidate>
                  <button
                    type="button"
                    onClick={() => setStep('pick')}
                    className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
                  >
                    <HiArrowLeft /> Change date or time
                  </button>
                  <h2 className="text-xl font-bold text-navy mb-1">Enter your details</h2>
                  <p className="text-sm text-slate-500 mb-6">
                    {formatSlot(slot)}, {formatDate(date)}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe', required: true },
                      { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com', required: true },
                      { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', placeholder: '+44 XXXX XXXXXX', required: true },
                      { name: 'company', label: 'Company', type: 'text', placeholder: 'Your business name' },
                    ].map(({ name, label, type, placeholder, required }) => (
                      <div key={name}>
                        <label htmlFor={`bd-${name}`} className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                          {label} {required && <span className="text-rose-500">*</span>}
                        </label>
                        <input
                          id={`bd-${name}`}
                          type={type}
                          name={name}
                          value={form[name]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          className={inputClass(name)}
                        />
                        {errors[name] && <p className="mt-1 text-xs text-rose-500">{errors[name]}</p>}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <label htmlFor="bd-service" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                      Service you're interested in
                    </label>
                    <select id="bd-service" name="service" value={form.service} onChange={handleChange} className={inputClass('service')}>
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="bd-message" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                      What would you like to discuss?
                    </label>
                    <textarea
                      id="bd-message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us a little about your project..."
                      className={`${inputClass('message')} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-6 w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-brand-blue to-brand-cyan disabled:opacity-70 text-white font-bold rounded-xl shadow-lg shadow-brand-blue/30 hover:-translate-y-0.5 transition-all"
                  >
                    {loading ? 'Sending...' : 'Request Demo'}
                  </button>
                  <p className="mt-3 text-center text-xs text-slate-400">
                    This is a request — we'll confirm your slot or suggest another time.
                  </p>
                </form>
              )}

              {mounted && step === 'done' && (
                <div className="flex h-full min-h-[28rem] flex-col items-center justify-center text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                    <HiOutlineCheckCircle className="text-emerald-500" size={38} />
                  </div>
                  <h2 className="text-2xl font-extrabold text-navy mb-2">Request received!</h2>
                  <p className="max-w-sm text-slate-500">
                    Thanks, {form.name.split(' ')[0]}. We've received your request for{' '}
                    <span className="font-semibold text-navy">
                      {formatSlot(slot)}, {formatDate(date)}
                    </span>
                    . We'll confirm by email or WhatsApp shortly.
                  </p>
                  <Link to="/" className="mt-6 px-6 py-3 bg-brand-blue text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-colors">
                    Back to Home
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-600">
            <span>Prefer to chat first?</span>
            <a
              href="https://wa.me/447448091908"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-4 py-2.5 font-semibold text-white hover:bg-green-400 transition-colors"
            >
              <FaWhatsapp size={17} /> Message us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
