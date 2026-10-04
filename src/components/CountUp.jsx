import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

export default function CountUp({ end, decimals = 0, suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, end, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setValue(v),
    })
    return () => controls.stop()
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {/* Final value for crawlers and screen readers; the animated number is visual only */}
      <span className="sr-only">
        {end.toFixed(decimals)}
        {suffix}
      </span>
      <span aria-hidden="true">
        {value.toFixed(decimals)}
        {suffix}
      </span>
    </span>
  )
}
