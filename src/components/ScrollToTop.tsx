'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { useLang } from '@/contexts/LangContext'
import { motion, AnimatePresence } from 'framer-motion'

export function ScrollToTop() {
  const { lang } = useLang()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '32px',
            right: '32px',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'var(--accent)',
            color: '#000',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(20,184,166,0.3)',
            zIndex: 90,
            transition: 'var(--transition)',
          }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 12px 32px rgba(20,184,166,0.4)'
          }}
          whileTap={{ scale: 0.95 }}
          aria-label={lang === 'en' ? 'Back to top' : 'Kembali ke atas'}
        >
          <ArrowUp size={24} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
