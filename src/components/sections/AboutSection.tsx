'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useLang } from '@/contexts/LangContext'
import Image from 'next/image'
import { Download } from 'lucide-react'

interface AboutData {
  description_en: string
  description_id: string
  image?: string | null
}

const DEFAULT_ABOUT: AboutData = {
  description_en: "I'm a passionate full-stack developer with over 3 years of experience building modern web applications. I specialize in React, Next.js, and Node.js, and I love creating elegant solutions to complex problems.\n\nWhen I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through writing.",
  description_id: "Saya adalah full-stack developer yang bersemangat dengan pengalaman lebih dari 3 tahun membangun aplikasi web modern. Saya mengkhususkan diri dalam React, Next.js, dan Node.js, dan saya suka menciptakan solusi elegan untuk masalah yang kompleks.\n\nKetika tidak coding, saya menjelajahi teknologi baru, berkontribusi pada proyek open-source, atau berbagi pengetahuan melalui tulisan.",
}

function LanyardCard({ image, name }: { image?: string | null; name: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 180, damping: 20, mass: 0.8 })
  const springY = useSpring(y, { stiffness: 180, damping: 20, mass: 0.8 })
  const rotateZ = useTransform(springX, [-100, 100], [10, -10])

  const stringD = useTransform(
    [springX, springY] as any,
    ([lx, ly]: number[]) =>
      `M 0 0 Q ${lx * 0.3} ${Math.max(24, ly * 0.5)} ${lx} ${ly + 50}`
  )

  return (
    <div style={{
      position: 'relative',
      width: 280,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      userSelect: 'none',
      overflow: 'visible',
      zIndex: 10,
    }}>
      {/* Pin anchor */}
      <div style={{
        width: 12, height: 12, borderRadius: '50%',
        background: '#a1a1aa',
        boxShadow: '0 2px 8px rgba(0,0,0,0.8)',
        flexShrink: 0, zIndex: 4, position: 'relative',
      }} />

      {/* Tali SVG */}
      <svg style={{
        position: 'absolute', top: 6, left: '50%',
        transform: 'translateX(-50%)',
        overflow: 'visible', pointerEvents: 'none', zIndex: 3,
        width: 2, height: 2,
      }}>
        <motion.path
          style={{ d: stringD }}
          fill="none" stroke="#27272a" strokeWidth="6" strokeLinecap="round"
        />
      </svg>

      {/* Card Container */}
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0}
        _dragX={x}
        _dragY={y}
        onDragEnd={() => {
          x.set(0)
          y.set(0)
        }}
        style={{
          x: springX,
          y: springY,
          rotateZ,
          marginTop: 8,
          cursor: 'grab',
          zIndex: 5,
          touchAction: 'none',
        }}
        whileDrag={{ scale: 1.02, cursor: 'grabbing' }}
      >
        {/* D-ring */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: -3, position: 'relative', zIndex: 2 }}>
          <div style={{
            width: 28, height: 22,
            borderTop: '5px solid #27272a',
            borderLeft: '5px solid #27272a',
            borderRight: '5px solid #27272a',
            borderRadius: '14px 14px 0 0',
          }} />
        </div>

        {/* ID Card */}
        <div style={{
          width: 260, height: 360,
          borderRadius: '20px', overflow: 'hidden',
          background: 'linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%)',
          boxShadow: '0 25px 80px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.08)',
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}>
          {/* Card Header - Blue gradient */}
          <div style={{
            height: 100,
            background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: 12,
              left: 16,
              display: 'flex',
              gap: 6,
            }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#eab308' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#22c55e' }} />
            </div>
          </div>

          {/* Photo Section */}
          <div style={{
            display: 'flex',
            gap: 12,
            padding: 16,
            flex: 1,
          }}>
            {/* Main Photo */}
            <div style={{
              width: 100, height: 140,
              borderRadius: '12px', overflow: 'hidden',
              background: '#18181b',
              border: '2px solid rgba(255,255,255,0.1)',
              flexShrink: 0,
            }}>
              {image ? (
                <Image
                  src={image} alt={name} width={100} height={140}
                  draggable={false}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
                />
              ) : (
                <div style={{
                  width: '100%', height: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 48, fontWeight: 800, color: 'var(--accent)',
                  fontFamily: 'Outfit, sans-serif',
                  background: 'linear-gradient(160deg, #18181b, #09090b)',
                  pointerEvents: 'none',
                }}>H</div>
              )}
            </div>

            {/* Info Section */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flex: 1,
              color: '#e4e4e7',
              fontSize: 12,
            }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2, color: '#f1f5f9' }}>Developer</div>
                <div style={{ fontSize: 10, color: '#a1a1aa' }}>Full-Stack</div>
              </div>
              <div style={{ fontSize: 10, color: '#a1a1aa', fontFamily: 'monospace' }}>ID: DEV2024001</div>
            </div>
          </div>

          {/* Stats Section */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            padding: '12px 16px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#14b8a6', fontSize: 16, fontWeight: 800 }}>3+</div>
              <div style={{ fontSize: 9, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: 2 }}>Years</div>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.08)' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#14b8a6', fontSize: 16, fontWeight: 800 }}>20+</div>
              <div style={{ fontSize: 9, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: 2 }}>Projects</div>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.08)' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#14b8a6', fontSize: 16, fontWeight: 800 }}>10+</div>
              <div style={{ fontSize: 9, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: 2 }}>Clients</div>
            </div>
          </div>
        </div>
      </motion.div>
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
            overflow: 'visible',
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
