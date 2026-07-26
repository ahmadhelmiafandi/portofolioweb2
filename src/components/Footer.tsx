'use client'

import { useLang } from '@/contexts/LangContext'

interface FooterProps {
  contact?: any
  hero?: { title_id?: string | null; title_en?: string | null } | null
}

export function Footer({ contact, hero }: FooterProps) {
  const { lang } = useLang()
  const year = new Date().getFullYear()
  const copyText = lang === 'id'
    ? (contact?.footer_copy || `© ${year} Helmi. Hak cipta dilindungi.`)
    : (contact?.footer_made || `© ${year} Helmi. All rights reserved.`)

  const raw     = contact?.site_name || hero?.title_id || hero?.title_en || 'Helmi Afandi'
  const parts   = raw.trim().split(/\s+/).filter(Boolean)
  const first   = parts[0] || 'Helmi'
  const last    = parts.length > 1 ? parts[parts.length - 1] : ''

  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '32px 0',
    }}>
      <div className="container" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            {first.toLowerCase()}<span style={{ color: 'var(--accent)' }}>{last ? last.toLowerCase() : ''}</span>
          </span>
        </div>

        <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{copyText}</span>
      </div>
    </footer>
  )
}
