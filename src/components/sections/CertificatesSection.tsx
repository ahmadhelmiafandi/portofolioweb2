'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/contexts/LangContext'
import { Award, Calendar, ExternalLink, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

interface Certificate {
  id: string; name: string; issuer: string
  issue_date: string | Date
  credential_id?: string | null
  link?: string | null; file_url?: string | null
  published: boolean; order: number
}

export function CertificatesSection({ data }: { data?: Certificate[] | null }) {
  const { t, lang } = useLang()
  const [showAll, setShowAll] = useState(false)

  if (!data || data.length === 0) return null
  const publishedCerts = data.filter(c => c.published)
  if (publishedCerts.length === 0) return null

  const visibleCerts = showAll ? publishedCerts : publishedCerts.slice(0, 3)

  const accentPairs = [
    { bg: 'var(--accent-light)',   color: 'var(--accent)' },
    { bg: 'var(--accent-2-light)', color: 'var(--accent-2)' },
    { bg: 'rgba(99,102,241,0.1)',  color: '#818cf8' },
    { bg: 'rgba(234,179,8,0.1)',   color: '#eab308' },
  ]

  return (
    <section id="certificates" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 1, zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <span className="section-subtitle">{t.certificates.subtitle}</span>
          <h2 className="section-title">{t.certificates.title}</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
          {visibleCerts.map((cert, index) => {
            const pair = accentPairs[index % accentPairs.length]
            const formattedDate = cert.issue_date
              ? new Date(cert.issue_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
              : ''

            return (
              <motion.article
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  transition: 'var(--transition)',
                }}
                whileHover={{ borderColor: pair.color, y: -3, boxShadow: 'var(--shadow-md)' }}
              >
                {/* Accent icon top-right */}
                <div style={{
                  position: 'absolute', top: 16, right: 16,
                  width: 36, height: 36, borderRadius: '10px',
                  background: pair.bg, color: pair.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Award size={17} />
                </div>

                <div>
                  {/* Issuer badge */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    fontSize: 11, fontWeight: 600, color: pair.color,
                    background: pair.bg,
                    padding: '3px 10px', borderRadius: '9999px',
                    marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.08em',
                  }}>
                    <ShieldCheck size={12} />
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

                {/* Action buttons */}
                {(cert.link || cert.file_url) && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer"
                        className="btn-secondary"
                        style={{ justifyContent: 'center', fontSize: 13, padding: '9px 14px' }}
                      >
                        <ExternalLink size={13} />
                        {lang === 'en' ? `View on ${cert.issuer}` : `Lihat di ${cert.issuer}`}
                      </a>
                    )}
                    {cert.file_url && (
                      <a href={cert.file_url} target="_blank" rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ justifyContent: 'center', fontSize: 13, padding: '9px 14px' }}
                      >
                        {t.certificates.view_pdf}
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                )}
              </motion.article>
            )
          })}
        </div>

        {publishedCerts.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}
          >
            <button onClick={() => setShowAll(!showAll)} className="btn-secondary"
              style={{ gap: 8, padding: '11px 28px', fontSize: 14 }}
            >
              {showAll ? (
                <><ChevronUp size={15} />{lang === 'en' ? 'Show Less' : 'Sembunyikan'}</>
              ) : (
                <><ChevronDown size={15} />{lang === 'en' ? `View All Certificates (${publishedCerts.length})` : `Lihat Semua Sertifikat (${publishedCerts.length})`}</>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
