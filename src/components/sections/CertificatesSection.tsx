'use client'

import { m } from 'framer-motion'
import { containerVariants, cardRevealUp } from '@/lib/motion'
import { useLang } from '@/contexts/LangContext'
import { translations } from '@/lib/i18n'
import { Award, Calendar, ExternalLink, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react'
import { useState, useMemo, useEffect } from 'react'

interface Certificate {
  id: string; name: string; issuer: string
  issue_date: string | Date
  credential_id?: string | null
  link?: string | null; file_url?: string | null
  published: boolean; order: number
}

export function CertificatesSection({ data }: { data?: Certificate[] | null }) {
  const { t: clientT, lang: clientLang } = useLang()
  const [showAll, setShowAll] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const lang = mounted ? clientLang : 'id'
  const t = mounted ? clientT : translations.id

  const publishedCerts = useMemo(() => data ? data.filter(c => c.published) : [], [data])
  const visibleCerts = useMemo(() => showAll ? publishedCerts : publishedCerts.slice(0, 3), [publishedCerts, showAll])

  const accentPairs = useMemo(() => [
    { bg: 'var(--accent-light)',   color: 'var(--accent)' },
    { bg: 'var(--accent-2-light)', color: 'var(--accent-2)' },
    { bg: 'rgba(99,102,241,0.1)',  color: '#818cf8' },
    { bg: 'rgba(234,179,8,0.1)',   color: '#eab308' },
  ], [])

  if (!data || data.length === 0) return null
  if (publishedCerts.length === 0) return null

  return (
    <section id="certificates" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 1, zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <m.div className="section-header"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-subtitle">{t.certificates.subtitle}</span>
          <h2 className="section-title">{t.certificates.title}</h2>
        </m.div>

        <m.div
          {...(mounted ? {
            variants: containerVariants,
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, margin: "-60px" }
          } : {})}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}
        >
          {visibleCerts.map((cert, index) => {
            const pair = accentPairs[index % accentPairs.length]
            const formattedDate = cert.issue_date
              ? new Date(cert.issue_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
              : ''

            return (
              <m.article
                key={cert.id}
                {...(mounted ? { variants: cardRevealUp } : {})}
                className="cert-card-perf"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderLeft: `4px solid ${pair.color}`,
                  borderRadius: '14px',
                  padding: '24px',
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: 'var(--shadow-sm)',
                  overflow: 'hidden'
                }}
              >
                {/* CSS gradient on hover — replaces expensive iframe anim-svg.html */}
                <div className="cert-hover-glow" style={{
                  position: 'absolute', top: -50, right: -50,
                  width: 200, height: 200,
                  background: `radial-gradient(circle, ${pair.color}15 0%, transparent 70%)`,
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  transform: 'scale(1.5)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }} />

                {/* Issuer badge with larger icon */}
                <div style={{
                  position: 'absolute', top: 20, right: 20,
                  width: 48, height: 48, borderRadius: '12px',
                  background: pair.bg, 
                  border: `2px solid ${pair.color}20`,
                  color: pair.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 4px 12px ${pair.color}25`,
                  zIndex: 2
                }}>
                  <Award size={24} strokeWidth={2.5} />
                </div>

                <div style={{ position: 'relative', zIndex: 2 }}>
                  {/* Issuer text badge */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: 11, fontWeight: 700, color: pair.color,
                    background: pair.bg,
                    padding: '5px 12px', borderRadius: '9999px',
                    marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.08em',
                    border: `1px solid ${pair.color}30`
                  }}>
                    <ShieldCheck size={13} />
                    {cert.issuer}
                  </div>

                  <h3 style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.3, marginBottom: 16, color: 'var(--text-primary)', paddingRight: 28 }}>
                    {cert.name}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 12, borderTop: '1px solid var(--border)', marginBottom: 20 }}>
                    {formattedDate && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'var(--text-muted)' }}>
                        <Calendar size={13} />
                        <span>{t.certificates.date}: <strong style={{ color: 'var(--text-secondary)' }}>{formattedDate}</strong></span>
                      </div>
                    )}
                    {cert.credential_id && (
                      <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'monospace', background: 'var(--surface-2)', padding: '3px 8px', borderRadius: '6px', display: 'inline-block' }}>
                        ID: {cert.credential_id}
                      </div>
                    )}
                  </div>
                </div>

                {/* Action button - Single primary CTA */}
                {(cert.link || cert.file_url) && (
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <a 
                      href={cert.file_url || cert.link || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ justifyContent: 'center', fontSize: 13, padding: '10px 16px', width: '100%' }}
                    >
                      <ExternalLink size={14} />
                      {lang === 'en' ? 'View Certificate' : 'Lihat Sertifikat'}
                    </a>
                  </div>
                )}

              </m.article>
            )
          })}
        </m.div>

        {publishedCerts.length > 3 && (
          <m.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}
          >
            <button
              onClick={() => {
                if (showAll) {
                  document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })
                  setTimeout(() => setShowAll(false), 350)
                } else {
                  setShowAll(true)
                }
              }}
              className="btn-secondary"
              style={{ gap: 8, padding: '11px 28px', fontSize: 14 }}
            >
              {showAll ? (
                <><ChevronUp size={15} />{lang === 'en' ? 'Show Less' : 'Sembunyikan'}</>
              ) : (
                <><ChevronDown size={15} />{lang === 'en' ? `View All Certificates (${publishedCerts.length})` : `Lihat Semua Sertifikat (${publishedCerts.length})`}</>
              )}
            </button>
          </m.div>
        )}
      </div>
    </section>
  )
}
