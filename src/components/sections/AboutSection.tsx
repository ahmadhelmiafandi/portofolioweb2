'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useLang } from '@/contexts/LangContext'
import Image from 'next/image'
import { Download } from 'lucide-react'
import { useRef } from 'react'

interface AboutData {
  description_en: string
  description_id: string
  image?: string | null
}

const DEFAULT_ABOUT: AboutData = {
  description_en: "I'm a passionate full-stack developer with over 3 years of experience building modern web applications. I specialize in React, Next.js, and Node.js, and I love creating elegant solutions to complex problems.\n\nWhen I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through writing.",
  description_id: "Saya adalah full-stack developer yang bersemangat dengan pengalaman lebih dari 3 tahun membangun aplikasi web modern. Saya mengkhususkan diri dalam React, Next.js, dan Node.js, dan saya suka menciptakan solusi elegan untuk masalah yang kompleks.\n\nKetika tidak coding, saya menjelajahi teknologi baru, berkontribusi pada proyek open-source, atau berbagi pengetahuan melalui tulisan.",
}

// ── Lanyard ID Card ──────────────────────────────────────────
function LanyardCard({ image, name }: { image?: string | null; name: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 120, damping: 14, mass: 0.8 })
  const springY = useSpring(y, { stiffness: 120, damping: 14, mass: 0.8 })
  const rotateX = useTransform(springY, [-120, 120], [12, -12])
  const rotateZ = useTransform(springX, [-120, 120], [8, -8])

  return (
    <div style={{ position: 'relative', width: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', userSelect: 'none' }}>
      {/* Hook */}
      <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#4b5563', border: '2px solid #6b7280', boxShadow: '0 2px 6px rgba(0,0,0,0.5)', zIndex: 10, flexShrink: 0 }} />

      {/* SVG string */}
      <svg style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', overflow: 'visible', pointerEvents: 'none', zIndex: 5, width: 4, height: 1 }}>
        <motion.path
          style={{
            d: useTransform([springX, springY] as any, ([lx, ly]: number[]) =>
              `M 0 6 C ${lx * 0.2} ${Math.max(ly * 0.4, 24)}, ${lx * 0.8} ${ly * 0.7}, ${lx} ${ly + 64}`)
          }}
          fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"
        />
      </svg>

      {/* Card */}
      <motion.div
        drag dragElastic={0.18} dragMomentum
        onDrag={(_, info) => { x.set(info.offset.x); y.set(info.offset.y) }}
        onDragEnd={() => { x.set(0); y.set(0) }}
        style={{ x: springX, y: springY, rotateX, rotateZ, marginTop: 6, cursor: 'grab', zIndex: 6 }}
        whileTap={{ cursor: 'grabbing', scale: 1.02 }}
      >
        <div style={{ width: 180, background: 'linear-gradient(160deg, #1f2937 0%, #111827 100%)', borderRadius: '14px', border: '1px solid #374151', boxShadow: '0 16px 48px rgba(0,0,0,0.6)', overflow: 'hidden', transformStyle: 'preserve-3d' }}>
          <div style={{ height: 6, background: 'linear-gradient(90deg, #14b8a6, #f43f5e)' }} />
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 10 }}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#0a0a0a', border: '2px solid #374151' }} />
          </div>
          <div style={{ padding: '10px 16px 6px' }}>
            <div style={{ width: '100%', aspectRatio: '3/4', borderRadius: '10px', overflow: 'hidden', background: 'linear-gradient(135deg, #1f2937, #111827)', border: '1px solid #374151' }}>
              {image ? (
                <Image src={image} alt={name} width={148} height={197} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, fontWeight: 800, color: 'var(--accent)', fontFamily: 'Outfit, sans-serif', minHeight: 160 }}>H</div>
              )}
            </div>
          </div>
          <div style={{ padding: '6px 16px 12px', textAlign: 'center' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#f9fafb', marginBottom: 4, fontFamily: 'Outfit, sans-serif' }}>{name}</div>
            <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 600, color: '#14b8a6', background: 'rgba(20,184,166,0.12)', padding: '2px 8px', borderRadius: 9999, border: '1px solid rgba(20,184,166,0.25)' }}>
              Full-Stack Dev
            </div>
          </div>
          <div style={{ background: '#0d1117', padding: '6px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 9, color: '#6b7280', fontFamily: 'monospace' }}>ID: HLM-001</span>
            <div style={{ display: 'flex', gap: 3 }}>
              {[...Array(3)].map((_, i) => <div key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: i === 0 ? '#14b8a6' : '#374151' }} />)}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hint */}
      <p style={{ position: 'absolute', bottom: -24, fontSize: 10, color: '#6b7280', fontFamily: 'Outfit, sans-serif', pointerEvents: 'none', whiteSpace: 'nowrap' }}>
        ↕ drag me
      </p>
    </div>
  )
}

export function AboutSection({ data }: { data?: AboutData | null }) {
  const { lang, t } = useLang()
  const about = data || DEFAULT_ABOUT
  const desc  = lang === 'en' ? about.description_en : about.description_id
  const paragraphs = desc.split('\n\n')

  const stats = [
    { value: '3+',  label: lang === 'en' ? 'Years' : 'Tahun' },
    { value: '20+', label: lang === 'en' ? 'Projects' : 'Proyek' },
    { value: '10+', label: lang === 'en' ? 'Clients' : 'Klien' },
  ]

  return (
    <section id="about" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            padding: 'clamp(28px, 4vw, 48px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle gradient glow inside card */}
          <div style={{ position: 'absolute', top: -60, left: -60, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(180px, 220px) 1fr',
            gap: 'clamp(24px, 4vw, 56px)',
            alignItems: 'flex-start',
          }}>
            {/* Left: Lanyard photo */}
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 20, paddingBottom: 32 }}>
              <LanyardCard image={about.image} name="Helmi Afandi" />
            </div>

            {/* Right: Content */}
            <div>
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12, color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif' }}
              >
                {lang === 'en' ? 'About ' : 'Tentang '}
                <span style={{ color: 'var(--accent)' }}>{lang === 'en' ? 'Me' : 'Saya'}</span>
              </motion.h2>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                style={{ fontSize: 14, fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: 20, borderLeft: '3px solid var(--accent)', paddingLeft: 12, lineHeight: 1.6 }}
              >
                {lang === 'en'
                  ? 'A blend of logic and design aesthetics.'
                  : 'Perpaduan logika kode dan estetika desain.'}
              </motion.p>

              {/* Description paragraphs */}
              <div style={{ marginBottom: 28 }}>
                {paragraphs.map((para, i) => (
                  <motion.p key={i}
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }}
                    style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.75, marginBottom: 14 }}>
                    {para}
                  </motion.p>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                style={{ display: 'flex', gap: 12, marginBottom: 28, flexWrap: 'wrap' }}
              >
                {stats.map((s, i) => (
                  <div key={i} style={{
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '14px 20px',
                    textAlign: 'center',
                    minWidth: 80,
                  }}>
                    <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--accent)', fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.03em' }}>{s.value}</div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Download CV button */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <a href="/api/cv/download" download className="btn-secondary" style={{ display: 'inline-flex' }}>
                  <Download size={15} />
                  {lang === 'en' ? 'Download CV' : 'Unduh CV'}
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 640px) {
          #about .container > div > div {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          #about .container > div > div > div:first-child {
            padding-bottom: 40px;
          }
          #about p[style*="border-left"] {
            text-align: left;
          }
        }
      `}</style>
    </section>
  )
}
