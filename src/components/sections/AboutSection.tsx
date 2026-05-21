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
  { icon: Code2, en: 'Clean Code', id: 'Kode Bersih', desc_en: 'Writing maintainable, scalable code', desc_id: 'Menulis kode yang dapat dipelihara' },
  { icon: Lightbulb, en: 'Problem Solver', id: 'Pemecah Masalah', desc_en: 'Finding creative solutions', desc_id: 'Menemukan solusi kreatif' },
  { icon: Rocket, en: 'Fast Delivery', id: 'Pengiriman Cepat', desc_en: 'Delivering projects on time', desc_id: 'Menyelesaikan proyek tepat waktu' },
]

export function AboutSection({ data }: { data?: AboutData | null }) {
  const { lang, t } = useLang()
  const about = data || DEFAULT_ABOUT
  const desc = lang === 'en' ? about.description_en : about.description_id

  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 80,
          alignItems: 'center',
        }}>
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: 440,
            }}>
              {/* Background decoration */}
              <div style={{
                position: 'absolute',
                inset: '-12px',
                right: '-24px',
                bottom: '-24px',
                background: 'var(--accent-3)',
                border: '3px solid var(--border)',
                borderRadius: 'var(--radius)',
                zIndex: 0,
              }} />

              {/* Image container */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                background: 'var(--surface)',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                border: '3px solid var(--border)',
                boxShadow: 'var(--shadow-md)',
                aspectRatio: '4/5',
              }}>
                {about.image ? (
                  <Image
                    src={about.image}
                    alt="Profile"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'var(--accent-4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 320,
                  }}>
                    <span style={{
                      fontSize: 120,
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 800,
                      color: '#000000',
                    }}>H</span>
                  </div>
                )}
              </div>

              {/* Floating card */}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-subtitle">{t.about.subtitle}</p>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 24 }}>
              {t.about.title}
            </h2>

            <div style={{ marginBottom: 36 }}>
              {desc.split('\n\n').map((para, i) => (
                <p key={i} style={{
                  color: 'var(--text-secondary)',
                  fontSize: 16,
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: '16px 20px',
                    background: 'var(--surface)',
                    border: '3px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'var(--transition)',
                  }}
                  whileHover={{ x: -2, y: -2, boxShadow: 'var(--shadow-md)', borderColor: 'var(--border)' }}
                >
                  <div style={{
                    width: 40, height: 40,
                    background: i % 2 === 0 ? 'var(--accent-4)' : 'var(--accent-2)',
                    border: '2px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#000000',
                    flexShrink: 0,
                  }}>
                    <item.icon size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)', marginBottom: 2 }}>
                      {lang === 'en' ? item.en : item.id}
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
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
