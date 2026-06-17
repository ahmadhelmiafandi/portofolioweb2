'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/contexts/LangContext'
import Image from 'next/image'
import { Code2, Lightbulb, Rocket } from 'lucide-react'

interface AboutData {
  description_en: string
  description_id: string
  image?: string | null
}

const DEFAULT_ABOUT: AboutData = {
  description_en: "I'm a passionate full-stack developer with over 3 years of experience building modern web applications. I specialize in React, Next.js, and Node.js, and I love creating elegant solutions to complex problems.\n\nWhen I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through writing.",
  description_id: "Saya adalah full-stack developer yang bersemangat dengan pengalaman lebih dari 3 tahun membangun aplikasi web modern. Saya mengkhususkan diri dalam React, Next.js, dan Node.js, dan saya suka menciptakan solusi elegan untuk masalah yang kompleks.\n\nKetika tidak coding, saya menjelajahi teknologi baru, berkontribusi pada proyek open-source, atau berbagi pengetahuan melalui tulisan.",
}

const HIGHLIGHTS = [
  { icon: Code2,     en: 'Clean Code',      id: 'Kode Bersih',       desc_en: 'Writing maintainable, scalable code',  desc_id: 'Menulis kode yang dapat dipelihara' },
  { icon: Lightbulb, en: 'Problem Solver',  id: 'Pemecah Masalah',   desc_en: 'Finding creative solutions',           desc_id: 'Menemukan solusi kreatif' },
  { icon: Rocket,    en: 'Fast Delivery',   id: 'Pengiriman Cepat',  desc_en: 'Delivering projects on time',          desc_id: 'Menyelesaikan proyek tepat waktu' },
]

export function AboutSection({ data }: { data?: AboutData | null }) {
  const { lang, t } = useLang()
  const about = data || DEFAULT_ABOUT
  const desc  = lang === 'en' ? about.description_en : about.description_id

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 72,
          alignItems: 'center',
        }}>
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: 420 }}>
              {/* Accent ring behind image */}
              <div style={{
                position: 'absolute',
                inset: '-16px', right: '-16px', bottom: '-16px',
                background: 'linear-gradient(135deg, rgba(20,184,166,0.15), rgba(244,63,94,0.1))',
                borderRadius: '28px',
                zIndex: 0,
              }} />
              <div style={{
                position: 'relative', zIndex: 1,
                background: 'var(--surface)',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-lg)',
                aspectRatio: '4/5',
              }}>
                {about.image ? (
                  <Image src={about.image} alt="Profile" fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    style={{ objectFit: 'cover' }} />
                ) : (
                  <div style={{
                    width: '100%', height: '100%',
                    background: 'linear-gradient(135deg, var(--surface-2), var(--surface-3))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    minHeight: 320,
                  }}>
                    <span style={{ fontSize: 96, fontFamily: 'Outfit, sans-serif', fontWeight: 800, color: 'var(--accent)' }}>H</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-subtitle" style={{ textAlign: 'left', display: 'inline-block', marginBottom: 12 }}>
              {t.about.subtitle}
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 20, color: 'var(--text-primary)' }}>
              {t.about.title}
            </h2>

            <div style={{ marginBottom: 32 }}>
              {desc.split('\n\n').map((para, i) => (
                <p key={i} style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>
                  {para}
                </p>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '14px 18px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    transition: 'var(--transition)',
                    cursor: 'default',
                  }}
                  whileHover={{ borderColor: 'var(--accent)', y: -2 }}
                >
                  <div style={{
                    width: 38, height: 38,
                    background: i === 0 ? 'var(--accent-light)' : i === 1 ? 'var(--accent-2-light)' : 'rgba(99,102,241,0.12)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: i === 0 ? 'var(--accent)' : i === 1 ? 'var(--accent-2)' : '#818cf8',
                    flexShrink: 0,
                  }}>
                    <item.icon size={17} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)', marginBottom: 2 }}>
                      {lang === 'en' ? item.en : item.id}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                      {lang === 'en' ? item.desc_en : item.desc_id}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
