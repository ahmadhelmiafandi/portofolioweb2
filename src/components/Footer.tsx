'use client'

import { useLang } from '@/contexts/LangContext'
import { Heart } from 'lucide-react'

export function Footer({ contact }: { contact?: any }) {
  const { lang, t } = useLang()
  const year = new Date().getFullYear()

  // Show the right language version — one line only
  const copyText = lang === 'id'
    ? (contact?.footer_copy || `© ${year} Helmi. Hak cipta dilindungi.`)
    : (contact?.footer_made || `© ${year} Helmi. All rights reserved.`)

  return (
    <footer style={{
      background: 'var(--surface)',
      borderTop: '3px solid var(--border)',
      padding: '40px 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32,
            background: 'var(--accent-4)',
            border: '3px solid var(--border)',
            boxShadow: '2px 2px 0px 0px var(--border)',
            borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#000000', fontWeight: 800, fontSize: 14,
          }}>H</div>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 16, color: 'var(--text-primary)' }}>
            helmi<span style={{ color: 'var(--accent)' }}>.</span>dev
          </span>
        </div>

        {/* Copyright — single line, language-aware */}
        <div style={{ fontSize: 13, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span>{copyText}</span>
        </div>

        {/* Back to top */}
        <a
          href="#"
          className="btn-secondary"
          style={{
            padding: '6px 12px',
            fontSize: 12,
          }}
        >
          {lang === 'en' ? '↑ Back to top' : '↑ Kembali ke atas'}
        </a>
      </div>
    </footer>
  )
}
