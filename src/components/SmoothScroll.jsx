import { useEffect } from 'react'
import Lenis from 'lenis'
import { setLenis } from '../lib/smoothScroll'

// Inertia-based smooth wheel scrolling. Touch scrolling stays native; skipped for reduced-motion users.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.1,
      // In-page #anchor links scroll smoothly, stopping below the fixed navbar
      anchors: { offset: -110 },
    })
    setLenis(lenis)
    return () => {
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  return null
}
