'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/contexts/LangContext'
import { formatDate } from '@/lib/utils'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

interface Experience {
  id: string; title_en: string; title_id: string
  company: string; location?: string | null
  start_date: string | Date; end_date?: string | Date | null
  description_en: string; description_id: string
}

const DEFAULT_EXPERIENCES: Experience[] = [
  { id: '1', title_en: 'Full-Stack Developer', title_id: 'Pengembang Full-Stack', company: 'Freelance', location: 'Remote', start_date: '2023-01-01', end_date: null, description_en: 'Building custom web applications and CMS systems for clients across Indonesia. Specialized in Next.js, PostgreSQL, and modern UI development.', description_id: 'Membangun aplikasi web dan sistem CMS khusus untuk klien di seluruh Indonesia.' },
  { id: '2', title_en: 'Frontend Developer', title_id: 'Pengembang Frontend', company: 'Duta Solusi', location: 'Jakarta, Indonesia', start_date: '2021-06-01', end_date: '2022-12-01', description_en: 'Developed and maintained frontend for company products using React and Vue.js.', description_id: 'Mengembangkan dan memelihara frontend produk perusahaan menggunakan React dan Vue.js.' },
  { id: '3', title_en: 'Junior Web Developer', title_id: 'Pengembang Web Junior', company: 'Startup Digital', location: 'Bandung, Indonesia', start_date: '2020-01-01', end_date: '2021-05-01', description_en: 'Started career building WordPress and PHP-based websites. Learned modern JavaScript frameworks.', description_id: 'Memulai karir membangun website berbasis WordPress dan PHP.' },
]

export function ExperienceSection({ data }: { data?: Experience[] | null }) {
  const { lang, t } = useLang()
  const experiences = (data && data.length > 0) ? data : DEFAULT_EXPERIENCES

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <span className="section-subtitle">{t.experience.subtitle}</span>
          <h2 className="section-title">{t.experience.title}</h2>
        </motion.div>

        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
          {/* Animated gradient timeline line */}
          <div style={{
            position: 'absolute', left: 19, top: 0, bottom: 0,
            width: 2, 
            background: 'linear-gradient(to bottom, var(--accent), var(--accent-2), var(--accent-3))',
            borderRadius: '9999px'
          }} />

          {experiences.map((exp, i) => {
            const title = lang === 'en' ? exp.title_en : exp.title_id
            const desc  = lang === 'en' ? exp.description_en : exp.description_id
            const start = formatDate(exp.start_date)
            const end   = exp.end_date ? formatDate(exp.end_date) : t.experience.present

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ display: 'flex', gap: 28, marginBottom: 20 }}
              >
                {/* Timeline dot with company icon */}
                <div style={{ flexShrink: 0, paddingTop: 18, position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: !exp.end_date ? 'linear-gradient(135deg, var(--accent), var(--accent-2))' : 'var(--surface-2)',
                    border: `2px solid ${!exp.end_date ? 'var(--accent)' : 'var(--border)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: !exp.end_date ? '0 4px 12px rgba(20,184,166,0.25)' : 'none'
                  }}>
                    <Briefcase size={18} color={!exp.end_date ? '#000' : 'var(--text-muted)'} strokeWidth={2} />
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  style={{
                    flex: 1,
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '14px',
                    padding: '20px 24px',
                    marginBottom: 8,
                    transition: 'var(--transition)',
                  }}
                  whileHover={{ borderColor: 'var(--accent)' }}
                >
                  <div style={{ marginBottom: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                        {title}
                      </h3>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 5,
                        fontSize: 12, 
                        color: !exp.end_date ? '#000' : 'var(--text-secondary)',
                        background: !exp.end_date ? 'linear-gradient(135deg, #10b981, #059669)' : 'var(--surface-2)',
                        padding: '4px 12px', borderRadius: '9999px',
                        whiteSpace: 'nowrap', fontWeight: 600,
                        border: `1px solid ${!exp.end_date ? '#10b98130' : 'var(--border)'}`,
                        boxShadow: !exp.end_date ? '0 2px 8px rgba(16,185,129,0.2)' : 'none'
                      }}>
                        <Calendar size={12} />
                        {start} — {end}
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'var(--text-secondary)' }}>
                        <Briefcase size={12} />{exp.company}
                      </span>
                      {exp.location && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'var(--text-muted)' }}>
                          <MapPin size={12} />{exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{desc}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
