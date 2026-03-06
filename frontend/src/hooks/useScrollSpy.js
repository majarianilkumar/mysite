import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds, offset = 100) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const handler = () => {
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= offset && rect.bottom > offset
      })
      if (current) setActive(current)
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [sectionIds, offset])

  return active
}
