'use client'

import { useState, useEffect } from 'react'

interface MotionPreferences {
  /** User has prefers-reduced-motion enabled */
  prefersReducedMotion: boolean
  /** Device is likely mobile (touch + small screen) */
  isMobile: boolean
  /** Shorthand: either reduced motion or mobile */
  shouldReduceMotion: boolean
}

/**
 * Detects motion preferences and device capabilities.
 * Used to reduce animation intensity on mobile/low-power devices
 * while preserving the premium feel.
 */
export function useMotionPreferences(): MotionPreferences {
  const [prefs, setPrefs] = useState<MotionPreferences>({
    prefersReducedMotion: false,
    isMobile: false,
    shouldReduceMotion: false,
  })

  useEffect(() => {
    const mqlMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mqlMobile = window.matchMedia('(max-width: 768px)')

    const update = () => {
      const reduced = mqlMotion.matches
      const mobile = mqlMobile.matches
      setPrefs({
        prefersReducedMotion: reduced,
        isMobile: mobile,
        shouldReduceMotion: reduced || mobile,
      })
    }

    update()

    mqlMotion.addEventListener('change', update)
    mqlMobile.addEventListener('change', update)

    return () => {
      mqlMotion.removeEventListener('change', update)
      mqlMobile.removeEventListener('change', update)
    }
  }, [])

  return prefs
}
