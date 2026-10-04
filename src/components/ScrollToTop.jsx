import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getLenis } from '../lib/smoothScroll'

// useLayoutEffect scrolls before the new page paints; it is a no-op warning on the server, so fall back there
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function ScrollToTop() {
  // key changes on every navigation, including clicking a link to the page you are already on
  const { key, hash } = useLocation()

  useIsomorphicLayoutEffect(() => {
    if (hash) return // let in-page anchors (#section) scroll to their target
    // 'instant' overrides the global smooth scrolling so the new page always starts at the top
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
    else window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [key, hash])

  return null
}
