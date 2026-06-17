'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useLang } from '@/contexts/LangContext'
import { Moon, Sun, Globe, Menu, X, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { href: '#about',        key: 'about' },
  { href: '#skills',       key: 'skills' },
  { href: '#projects',     key: 'projects' },
  { href: '#certificates', key: 'certificates' },
  { href: '#experience',   key: 'experience' },
  { href: '#contact',      key: 'contact' },
] as const

const WA_NUMBER = '6282323609362'
const getWaLink = (lang: 'en' | 'id') => {
  const msg = lang === 'en'
    ? `Hi Helmi! I visited your portfolio and I'm interested in discussing a project collaboration with you. Could we connect?`
    : `Halo Helmi! Saya sudah melihat portofolio kamu dan tertarik untuk mendiskusikan kerja sama proyek. Apakah kita bisa ngobrol lebih lanjut?`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted]     = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const toggleLang  = () => setLang(lang === 'en' ? 'id' : 'en')

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          height: 'var(--navbar-height)',
          zIndex: 99,
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <a href="#" aria-label="portohelmi home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36, height: 36,
              background: 'linear-gradient(135deg, #14b8a6, #f43f5e)',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 800, fontSize: 16,
              fontFamily: 'Outfit, sans-serif',
              flexShrink: 0,
            }}>H</div>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 18, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              porto<span style={{ color: 'var(--accent)' }}>helmi</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="hidden-mobile">
            {NAV_ITEMS.map(item => (
              <a
                key={item.key}
                href={item.href}
                style={{
                  padding: '8px 14px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: 'Outfit, sans-serif',
                  borderRadius: '9999px',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'
                  ;(e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'
                  ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                }}
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {/* WhatsApp */}
            <a
              href={getWaLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={lang === 'en' ? 'Chat on WhatsApp' : 'Chat di WhatsApp'}
              className="hidden-mobile"
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '8px 18px',
                background: 'var(--accent)',
                borderRadius: '9999px',
                color: '#000',
                fontSize: 13, fontWeight: 600,
                fontFamily: 'Outfit, sans-serif',
                textDecoration: 'none',
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--accent-hover)'
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(20,184,166,0.35)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--accent)'
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <MessageCircle size={14} />
              {lang === 'en' ? 'Hire Me' : 'Hubungi Saya'}
            </a>

            {/* Lang toggle */}
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              style={{
                display: 'flex', alignItems: 'center', gap: 5,
                padding: '7px 12px',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '9999px',
                color: 'var(--text-secondary)',
                fontSize: 12, fontWeight: 600,
                cursor: 'pointer', transition: 'var(--transition)',
                fontFamily: 'Outfit, sans-serif',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
            >
              <Globe size={13} />
              {lang.toUpperCase()}
            </button>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                style={{
                  width: 36, height: 36,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  borderRadius: '9999px',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer', transition: 'var(--transition)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            )}

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="show-mobile"
              style={{
                width: 36, height: 36,
                display: 'none', alignItems: 'center', justifyContent: 'center',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '9999px',
                color: 'var(--text-primary)',
                cursor: 'pointer',
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            style={{
              position: 'fixed',
              top: 'var(--navbar-height)',
              left: 0, right: 0,
              background: 'rgba(10,10,10,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)',
              padding: '16px 24px 24px',
              zIndex: 98,
            }}
          >
            {NAV_ITEMS.map(item => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  padding: '14px 0',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: 16,
                  fontWeight: 500,
                  fontFamily: 'Outfit, sans-serif',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </a>
            ))}
            <a
              href={getWaLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '16px 0 0',
                color: 'var(--accent)',
                textDecoration: 'none',
                fontSize: 16,
                fontWeight: 600,
                fontFamily: 'Outfit, sans-serif',
              }}
            >
              <MessageCircle size={18} />
              {lang === 'en' ? 'Hire Me via WhatsApp' : 'Hubungi via WhatsApp'}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </>
  )
}
