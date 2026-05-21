'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useLang } from '@/contexts/LangContext'
import { Moon, Sun, Globe, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { href: '#about', key: 'about' },
  { href: '#skills', key: 'skills' },
  { href: '#projects', key: 'projects' },
  { href: '#certificates', key: 'certificates' },
  { href: '#experience', key: 'experience' },
  { href: '#contact', key: 'contact' },
] as const

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const toggleLang = () => setLang(lang === 'en' ? 'id' : 'en')

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 'var(--navbar-height)',
    zIndex: 99,
    transition: 'all 0.3s ease',
    ...(scrolled ? {
      background: 'var(--surface)',
      borderBottom: '3px solid var(--border)',
      backdropFilter: 'blur(20px)',
    } : {
      background: 'transparent',
    }),
  }

  return (
    <>
      <nav style={navStyle}>
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36, height: 36,
              background: 'var(--accent-4)',
              border: '3px solid #000000',
              boxShadow: '3px 3px 0px 0px #000000',
              borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#000000', fontWeight: 800, fontSize: 16, fontFamily: 'Syne, sans-serif'
            }}>H</div>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 18, color: 'var(--text-primary)' }}>
              helmi<span style={{ color: 'var(--accent)' }}>.</span>dev
            </span>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden-mobile">
            {NAV_ITEMS.map(item => (
              <a
                key={item.key}
                href={item.href}
                style={{
                  padding: '8px 16px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: 'Space Grotesk, sans-serif',
                  border: '2px solid transparent',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = 'var(--text-primary)'
                  ;(e.target as HTMLElement).style.background = 'var(--surface-2)'
                  ;(e.target as HTMLElement).style.borderColor = 'var(--border)'
                  ;(e.target as HTMLElement).style.boxShadow = '2px 2px 0px 0px var(--border)'
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.color = 'var(--text-secondary)'
                  ;(e.target as HTMLElement).style.background = 'transparent'
                  ;(e.target as HTMLElement).style.borderColor = 'transparent'
                  ;(e.target as HTMLElement).style.boxShadow = 'none'
                }}
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {/* Lang Toggle */}
            <button
              onClick={toggleLang}
              title="Toggle language"
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '6px 12px',
                background: 'var(--surface-2)',
                border: '2px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                boxShadow: '2px 2px 0px 0px var(--border)',
                color: 'var(--text-secondary)',
                fontSize: 13, fontWeight: 600,
                cursor: 'pointer', transition: 'var(--transition)',
                fontFamily: 'Inter, sans-serif',
              }}
              onMouseEnter={e => {
                (e.currentTarget).style.borderColor = 'var(--accent)'
                ;(e.currentTarget).style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                (e.currentTarget).style.borderColor = 'var(--border)'
                ;(e.currentTarget).style.color = 'var(--text-secondary)'
              }}
            >
              <Globe size={14} />
              {lang.toUpperCase()}
            </button>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                title="Toggle theme"
                style={{
                  width: 36, height: 36,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--surface-2)',
                  border: '2px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: '2px 2px 0px 0px var(--border)',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer', transition: 'var(--transition)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget).style.borderColor = 'var(--accent)'
                  ;(e.currentTarget).style.color = 'var(--accent)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget).style.borderColor = 'var(--border)'
                  ;(e.currentTarget).style.color = 'var(--text-secondary)'
                }}
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="show-mobile"
              style={{
                width: 36, height: 36,
                display: 'none', alignItems: 'center', justifyContent: 'center',
                background: 'var(--surface-2)',
                border: '2px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                boxShadow: '2px 2px 0px 0px var(--border)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 'var(--navbar-height)',
              left: 0, right: 0,
              background: 'var(--surface)',
              borderBottom: '3px solid var(--border)',
              padding: '12px 24px 20px',
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
                  padding: '12px 0',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: 16,
                  fontWeight: 700,
                  fontFamily: 'Space Grotesk, sans-serif',
                  borderBottom: '2px solid var(--border)',
                }}
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
