import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { m, AnimatePresence } from 'framer-motion'
import { HiX, HiPaperAirplane, HiChatAlt2 } from 'react-icons/hi'
import { FaRobot, FaWhatsapp } from 'react-icons/fa'
import { services } from '../data/services'

const WHATSAPP = 'https://wa.me/447448091908'

// Rule-based assistant: matches keywords to canned answers with links. No AI service or API key involved.
const serviceKeywords = [
  [/automat/, 'ai-automation'],
  [/chat ?bot|\bbots?\b/, 'ai-chatbot-development'],
  [/lead gen/, 'ai-lead-generation'],
  [/shopify/, 'shopify-development'],
  [/wordpress|woocommerce|elementor/, 'wordpress-development'],
  [/e-?commerce|online (store|shop)/, 'ecommerce-solutions'],
  [/\bapps?\b|mobile|android|\bios\b|flutter/, 'mobile-app-development'],
  [/\bseo\b|rank|google search/, 'seo'],
  [/\bads\b|\bppc\b|meta|facebook ads|google ads/, 'meta-google-ads'],
  [/marketing|social media/, 'digital-marketing'],
  [/logo|graphic|branding/, 'graphic-design'],
  [/\bcrm\b/, 'crm-development'],
  [/care agency|recruitment|compliance/, 'care-agency-recruitment-compliance-system'],
  [/consult/, 'it-consulting'],
  [/software|portal|dashboard|system/, 'custom-software-development'],
  [/website|\bweb\b|landing page|react|next\.?js/, 'web-development'],
]

const actions = {
  demo: { label: 'Book a free demo', to: '/book-demo' },
  pricing: { label: 'View pricing', to: '/pricing' },
  services: { label: 'All services', to: '/services' },
  portfolio: { label: 'See our work', to: '/portfolio' },
  contact: { label: 'Contact page', to: '/contact' },
  courses: { label: 'View courses', to: '/courses' },
  whatsapp: { label: 'Chat on WhatsApp', href: WHATSAPP },
}

const quickReplies = ['Our services', 'Pricing', 'Book a demo', 'Contact details', 'Talk to a human']

function reply(raw) {
  const text = raw.toLowerCase().trim()

  if (/^(hi|hello|hey|salam|assalam|aoa|good (morning|afternoon|evening))\b/.test(text) && text.length < 30) {
    return { text: 'Hello! 👋 How can I help you today? You can ask about our services, pricing or book a free demo.', quick: true }
  }
  if (/demo|meeting|appointment|book|schedule|consultation|\bcall\b/.test(text)) {
    return {
      text: 'Great! You can pick a date and time for a free 30-minute demo with our team. We’ll confirm your slot by email or WhatsApp.',
      actions: [actions.demo, actions.whatsapp],
    }
  }
  if (/price|pricing|cost|how much|package|plan|budget|quote|rate/.test(text)) {
    return {
      text: 'Our pricing depends on what you need. You can see our packages on the pricing page, or tell us about your project for a free, no-obligation quote.',
      actions: [actions.pricing, actions.demo],
    }
  }
  const match = serviceKeywords.find(([re]) => re.test(text))
  if (match) {
    const s = services.find((x) => x.slug === match[1])
    if (s) {
      return {
        text: `${s.title}: ${s.tagline}`,
        actions: [{ label: `Learn about ${s.title}`, to: `/services/${s.slug}` }, actions.demo, actions.pricing],
      }
    }
  }
  if (/service|what (do|can) you|offer|help with/.test(text)) {
    return {
      text: `We offer ${services.length} services, including AI automation, websites, Shopify & WordPress stores, mobile apps, SEO and digital marketing. Which one are you interested in?`,
      actions: [actions.services, actions.demo],
    }
  }
  if (/contact|email|phone|number|address|office|location|where/.test(text)) {
    return {
      text: '📧 info@selectionstechnologies.com\n🇬🇧 UK: +44 7448 091908 — Croydon High Street\n🇵🇰 Pakistan: +92 300 3209005 — 28 Davis Road, Lahore',
      actions: [actions.contact, actions.whatsapp],
    }
  }
  if (/portfolio|work|project|example|client|case stud/.test(text)) {
    return { text: 'We’ve delivered 100+ projects for businesses in the UK and beyond. Take a look at some of our work:', actions: [actions.portfolio, actions.demo] }
  }
  if (/course|learn|training|class|internship/.test(text)) {
    return { text: 'We run practical courses in web development, digital marketing and more.', actions: [actions.courses, actions.whatsapp] }
  }
  if (/human|agent|person|whatsapp|talk|speak|someone/.test(text)) {
    return { text: 'Of course! Our team is happy to help — message us on WhatsApp or book a call.', actions: [actions.whatsapp, actions.demo] }
  }
  if (/thank|thanks|shukriya|great|ok(ay)?\b/.test(text)) {
    return { text: 'You’re welcome! Anything else I can help with?', quick: true }
  }
  return {
    text: 'I’m not sure about that one, but our team can help. Message us on WhatsApp or book a free demo and we’ll answer all your questions.',
    actions: [actions.whatsapp, actions.demo],
  }
}

const welcome = {
  from: 'bot',
  text: 'Hi there! 👋 I’m the Selections assistant. How can I help you today?',
  quick: true,
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [teaser, setTeaser] = useState(false)
  const [messages, setMessages] = useState([welcome])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const listRef = useRef(null)
  const inputRef = useRef(null)
  const { pathname } = useLocation()

  // Short greeting bubble a few seconds after the first visit to a page, until the chat is opened
  useEffect(() => {
    if (open) return
    const t = setTimeout(() => setTeaser(true), 6000)
    return () => clearTimeout(t)
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  const send = (text) => {
    const value = text.trim()
    if (!value || typing) return
    setMessages((msgs) => [...msgs, { from: 'user', text: value }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { from: 'bot', ...reply(value) }])
      setTyping(false)
    }, 650)
  }

  const openChat = () => {
    setOpen(true)
    setTeaser(false)
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <m.div
            key="panel"
            role="dialog"
            aria-label="Chat with Selections Technologies"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-3 left-3 sm:left-auto sm:right-6 z-50 flex h-[min(34rem,calc(100vh-8rem))] sm:w-[23rem] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-blue-900/20"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-brand-blue to-indigo-600 px-5 py-4 text-white">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <FaRobot size={20} />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-brand-blue bg-emerald-400" />
              </span>
              <div className="flex-1">
                <p className="font-bold leading-tight">Selections Assistant</p>
                <p className="text-xs text-blue-100">Instant answers · Team on WhatsApp</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-full p-1.5 hover:bg-white/15 transition-colors">
                <HiX size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={listRef} data-lenis-prevent className="flex-1 space-y-3 overflow-y-auto bg-surface px-4 py-4" aria-live="polite">
              {messages.map((msg, i) => (
                <div key={i} className={`flex flex-col ${msg.from === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.from === 'user'
                        ? 'rounded-br-md bg-brand-blue text-white'
                        : 'rounded-bl-md border border-slate-100 bg-white text-slate-700 shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.actions && (
                    <div className="mt-2 flex max-w-[90%] flex-wrap gap-1.5">
                      {msg.actions.map((a) =>
                        a.to ? (
                          <Link
                            key={a.label}
                            to={a.to}
                            className="rounded-full border border-brand-blue/30 bg-white px-3 py-1.5 text-xs font-semibold text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
                          >
                            {a.label} →
                          </Link>
                        ) : (
                          <a
                            key={a.label}
                            href={a.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-white hover:bg-green-500 transition-colors"
                          >
                            <FaWhatsapp size={13} /> {a.label}
                          </a>
                        )
                      )}
                    </div>
                  )}
                  {msg.quick && i === messages.length - 1 && (
                    <div className="mt-2 flex max-w-[95%] flex-wrap gap-1.5">
                      {quickReplies.map((q) => (
                        <button
                          key={q}
                          type="button"
                          onClick={() => send(q)}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-brand-blue hover:text-brand-blue transition-colors"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {typing && (
                <div className="flex w-16 items-center justify-center gap-1 rounded-2xl rounded-bl-md border border-slate-100 bg-white px-4 py-3 shadow-sm">
                  {[0, 150, 300].map((d) => (
                    <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: `${d}ms` }} />
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
              className="flex items-center gap-2 border-t border-slate-100 bg-white p-3"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                aria-label="Type your question"
                className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label="Send message"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white hover:bg-blue-600 disabled:opacity-40 transition-colors"
              >
                <HiPaperAirplane size={17} className="rotate-90" />
              </button>
            </form>
          </m.div>
        )}
      </AnimatePresence>

      {/* Greeting bubble */}
      <AnimatePresence>
        {teaser && !open && (
          <m.div
            key="teaser"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-24 right-6 z-50 flex max-w-[15rem] items-start gap-2 rounded-2xl rounded-br-md border border-slate-100 bg-white py-3 pl-4 pr-2 text-sm text-slate-700 shadow-xl"
          >
            <button type="button" onClick={openChat} className="text-left">
              Hi 👋 Need help with your project? Ask me anything!
            </button>
            <button type="button" onClick={() => setTeaser(false)} aria-label="Dismiss" className="shrink-0 rounded-full p-0.5 text-slate-400 hover:text-slate-600">
              <HiX size={14} />
            </button>
          </m.div>
        )}
      </AnimatePresence>

      {/* Launcher */}
      <m.button
        type="button"
        onClick={() => (open ? setOpen(false) : openChat())}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        title={open ? 'Close chat' : 'Chat with us'}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-indigo-600 text-white shadow-lg shadow-brand-blue/40 hover:shadow-brand-blue/60 transition-shadow"
      >
        {/* Pulsing rings match the WhatsApp button; they stop while the chat is open */}
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full bg-brand-blue opacity-60 motion-safe:animate-ping" />
            <span className="absolute -inset-1.5 rounded-full border-2 border-brand-blue/50 motion-safe:animate-pulse" />
          </>
        )}
        {open ? <HiX size={26} className="relative" /> : <HiChatAlt2 size={28} className="relative" />}
        {!open && <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400" />}
      </m.button>
    </>
  )
}
