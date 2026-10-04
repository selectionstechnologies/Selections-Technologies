import { m } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import ChatWidget from './ChatWidget'

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp — bottom left */}
      <m.a
        href="https://wa.me/447448091908"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        title="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/40 hover:shadow-green-500/60 transition-shadow"
      >
        {/* Pulsing rings draw the eye without moving the button itself */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-ping" />
        <span className="absolute -inset-1.5 rounded-full border-2 border-[#25D366]/50 motion-safe:animate-pulse" />
        <FaWhatsapp size={30} className="relative" />
      </m.a>

      {/* Chat assistant — bottom right */}
      <ChatWidget />
    </>
  )
}
