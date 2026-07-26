'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useTheme } from '@/components/Providers'
import { useLang } from '@/contexts/LangContext'
import { Moon, Sun, Globe, Menu, X, MessageCircle } from 'lucide-react'

import { useScrollPosition } from '@/lib/useScrollPosition'

const NAV_ITEMS = [
  { href: '#about',        key: 'about' },
  { href: '#skills',       key: 'skills' },
  { href: '#projects',     key: 'projects' },
  { href: '#certificates', key: 'certificates' },
  { href: '#experience',   key: 'experience' },
  { href: '#contact',      key: 'contact' },
] as const

interface HeroData {
  title_id?: string | null
  title_en?: string | null
}

interface ContactData {
  phone?: string | null
  site_name?: string | null
}

// Ambil nama dari contact atau hero title — tampilkan max 2 kata
function getSiteName(hero?: HeroData | null, contact?: ContactData | null): { first: string; last: string; initial: string } {
  const raw = contact?.site_name || hero?.title_id || hero?.title_en || 'Helmi Afandi'
  const parts = raw.trim().split(/\s+/).filter(Boolean)
  const initial = (parts[0]?.charAt(0) || 'H').toUpperCase()
  if (parts.length === 1) return { first: parts[0], last: '', initial }
  // Ambil kata pertama + kata terakhir saja
  const first = parts[0]
  const last  = parts[parts.length - 1]
  return { first, last, initial }
}

const getWaLink = (phone: string | null | undefined, lang: 'en' | 'id') => {
  const cleanPhone = (phone || '6282323609362').replace(/\D/g, '')
  const waNumber = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : cleanPhone
  const msg = lang === 'en'
    ? `Hi Helmi! I visited your portfolio and I'm interested in discussing a project collaboration with you. Could we connect?`
    : `Halo Helmi! Saya sudah melihat portofolio kamu dan tertarik untuk mendiskusikan kerja sama proyek. Apakah kita bisa ngobrol lebih lanjut?`
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`
}

export function Navbar({ hero, contact }: { hero?: HeroData | null; contact?: ContactData | null }) {
  const { theme, setTheme } = useTheme()
  const { lang, setLang, t } = useLang()
  const scrolled = useScrollPosition(20)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted]     = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = useCallback(() => setTheme(theme === 'dark' ? 'light' : 'dark'), [theme, setTheme])
  const toggleLang  = useCallback(() => setLang(lang === 'en' ? 'id' : 'en'), [lang, setLang])
  const { first, last, initial } = getSiteName(hero, contact)

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          height: 'var(--navbar-height)',
          zIndex: 99,
          transition: 'background 0.3s ease',
          background: scrolled
            ? 'color-mix(in srgb, var(--bg) 92%, transparent)'
            : 'color-mix(in srgb, var(--bg) 70%, transparent)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
          transform: 'translateZ(0)',
        }}
      >
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <a href="#" aria-label="portohelmi home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 18, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              { first.toLowerCase() }<span style={{ color: 'var(--accent)' }}>{ last ? last.toLowerCase() : '' }</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="hidden-mobile">
            {NAV_ITEMS.map(item => (
              <a
                key={item.key}
                href={item.href}
                className="nav-link"
                style={{
                  padding: '8px 14px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: 'Outfit, sans-serif',
                  borderRadius: '9999px',
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
              href={getWaLink(contact?.phone, lang)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={lang === 'en' ? 'Chat on WhatsApp' : 'Chat di WhatsApp'}
              className="hidden-mobile nav-wa-btn"
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '8px 18px',
                background: 'var(--accent)',
                borderRadius: '9999px',
                color: '#000',
                fontSize: 13, fontWeight: 600,
                fontFamily: 'Outfit, sans-serif',
                textDecoration: 'none',
              }}
            >
              <MessageCircle size={14} />
              {lang === 'en' ? 'Hire Me' : 'Hubungi Saya'}
            </a>

            {/* Lang toggle */}
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="nav-ctrl-btn"
              style={{
                display: 'flex', alignItems: 'center', gap: 5,
                padding: '7px 12px',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '9999px',
                color: 'var(--text-secondary)',
                fontSize: 12, fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'Outfit, sans-serif',
              }}
            >
              <Globe size={13} />
              {lang.toUpperCase()}
            </button>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="nav-ctrl-btn"
                style={{
                  width: 36, height: 36,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  borderRadius: '9999px',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                }}
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
      {mobileOpen && (
        <div
          role="dialog"
          aria-label="Mobile navigation"
          style={{
            position: 'fixed',
            top: 'var(--navbar-height)',
            left: 0, right: 0,
            background: 'color-mix(in srgb, var(--bg) 97%, transparent)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--border)',
            padding: '16px 24px 24px',
            zIndex: 98,
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'opacity 0.18s ease, transform 0.18s ease',
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
              href={getWaLink(contact?.phone, lang)}
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
        </div>
      )}
    </>
  )
}
