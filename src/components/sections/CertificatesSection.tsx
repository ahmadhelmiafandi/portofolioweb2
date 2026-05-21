'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/contexts/LangContext'
import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react'

interface Certificate {
  id: string
  name: string
  issuer: string
  issue_date: string | Date
  credential_id?: string | null
  link?: string | null
  file_url?: string | null
  published: boolean
  order: number
}

export function CertificatesSection({ data }: { data?: Certificate[] | null }) {
  const { t } = useLang()

  if (!data || data.length === 0) return null

  // Filter only published certificates
  const publishedCerts = data.filter((c) => c.published)
  if (publishedCerts.length === 0) return null

  return (
    <>
      <style>{`
        .certs-section {
          background-color: var(--bg-secondary);
          position: relative;
          overflow: hidden;
        }
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 28px;
          margin-top: 40px;
        }
        .cert-card {
          background: var(--surface);
          border: 3px solid #000000;
          border-radius: var(--radius);
          padding: 28px;
          box-shadow: 6px 6px 0px 0px #000000;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }
        .cert-card:hover {
          transform: translate(-4px, -4px);
          box-shadow: 10px 10px 0px 0px #000000;
        }
        .cert-icon-wrapper {
          position: absolute;
          top: -16px;
          right: 20px;
          background: var(--accent-3); /* Vibrant Hot Pink */
          color: #000000;
          border: 2px solid #000000;
          border-radius: var(--radius-sm);
          padding: 6px;
          box-shadow: 2px 2px 0px 0px #000000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cert-meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          color: var(--text-secondary);
          margin-top: 8px;
        }
        @media (max-width: 480px) {
          .certs-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .cert-card {
            padding: 20px;
          }
        }
      `}</style>

      <section id="certificates" className="section certs-section">
        {/* Background Grid Pattern */}
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.25, zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Section Header */}
          <div className="section-header">
            <span className="section-subtitle">{t.certificates.subtitle}</span>
            <h2 className="section-title">{t.certificates.title}</h2>
            <div style={{ width: 80, height: 6, background: 'var(--accent-3)', border: '2px solid #000000', margin: '16px auto 0', boxShadow: '2px 2px 0px 0px #000000' }} />
          </div>

          {/* Grid Layout */}
          <div className="certs-grid">
            {publishedCerts.map((cert, index) => {
              const formattedDate = cert.issue_date
                ? new Date(cert.issue_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                  })
                : ''

              // Alternating decorative colored headers for each card
              const bgColors = ['var(--surface-2)', 'var(--accent-light)', '#FFF2CC', '#FFE5F1']
              const cardBg = bgColors[index % bgColors.length]

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="cert-card"
                >
                  {/* Floating Icon badge */}
                  <div className="cert-icon-wrapper">
                    <Award size={20} />
                  </div>

                  <div>
                    {/* Organization Banner */}
                    <div style={{
                      backgroundColor: cardBg,
                      border: '2px solid #000000',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '12px',
                      fontWeight: '800',
                      color: '#000000',
                      boxShadow: '1.5px 1.5px 0px 0px #000000',
                      marginBottom: '16px',
                      textTransform: 'uppercase',
                      fontFamily: 'Space Grotesk, sans-serif'
                    }}>
                      <ShieldCheck size={14} />
                      {cert.issuer}
                    </div>

                    {/* Certificate Name */}
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '800',
                      fontFamily: 'Space Grotesk',
                      lineHeight: '1.2',
                      marginBottom: '16px',
                      color: 'var(--text-primary)'
                    }}>
                      {cert.name}
                    </h3>

                    {/* Metadata Panel */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderTop: '2px dashed #000000', paddingTop: '12px', marginBottom: '24px' }}>
                      {formattedDate && (
                        <div className="cert-meta-item">
                          <Calendar size={14} />
                          <span>{t.certificates.date}: <span style={{ fontWeight: '800' }}>{formattedDate}</span></span>
                        </div>
                      )}
                      {cert.credential_id && (
                        <div className="cert-meta-item">
                          <span style={{ fontSize: '11px', background: 'var(--bg-secondary)', padding: '2px 6px', border: '1.5px solid #000000', borderRadius: '3px', fontWeight: '800', fontFamily: 'monospace' }}>
                            {t.certificates.id}: {cert.credential_id}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions / View Link */}
                  {(cert.link || cert.file_url) && (
                    <div style={{ marginTop: 'auto' }}>
                      <a
                        href={cert.link || cert.file_url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                          width: '100%',
                          justifyContent: 'center',
                          fontSize: '13px',
                          padding: '10px 16px',
                          background: 'var(--accent-4)', /* Bright Yellow */
                          color: '#000000'
                        }}
                      >
                        <span>{t.certificates.view_pdf}</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
