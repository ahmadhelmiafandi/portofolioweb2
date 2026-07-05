'use client'

import { m, useMotionValue, useTransform } from 'framer-motion'
import { useMemo, useState, useEffect } from 'react'
import { useLang } from '@/contexts/LangContext'
import Image from 'next/image'
import { Download } from 'lucide-react'
import { containerVariants, itemRevealUp } from '@/lib/motion'

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
  const rotateZ = useTransform(x, [-100, 100], [12, -12])

  // Dynamic left and right strap paths for a realistic neck-loop lanyard
  const leftStrapD = useTransform(
    [x, y] as any,
    ([lx, ly]: number[]) => {
      const endX = lx
      const endY = ly + 140
      const cpX = -45 + (endX + 45) * 0.3
      const cpY = endY * 0.4
      return `M -45 0 Q ${cpX} ${cpY} ${endX} ${endY}`
    }
  )
  const rightStrapD = useTransform(
    [x, y] as any,
    ([lx, ly]: number[]) => {
      const endX = lx
      const endY = ly + 140
      const cpX = 45 + (endX - 45) * 0.3
      const cpY = endY * 0.4
      return `M 45 0 Q ${cpX} ${cpY} ${endX} ${endY}`
    }
  )

  return (
    <div style={{
      position: 'relative',
      width: 240,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      userSelect: 'none',
      overflow: 'visible',
      zIndex: 10,
      paddingTop: 140, // Spacer for the lanyard strap area
    }}>
      {/* SVG Canvas for Double Ribbon Straps */}
      <svg style={{
        position: 'absolute', top: 0, left: '50%',
        transform: 'translateX(-50%)',
        overflow: 'visible', pointerEvents: 'none', zIndex: 3,
        width: 2, height: 2,
      }}>
        {/* Left Strap Fabric & Texture */}
        <m.path style={{ d: leftStrapD }} fill="none" stroke="rgba(0,0,0,0.55)" strokeWidth="13" strokeLinecap="round" />
        <m.path style={{ d: leftStrapD }} fill="none" stroke="#18181b" strokeWidth="10" strokeLinecap="round" />
        <m.path style={{ d: leftStrapD }} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2.5" strokeDasharray="5 3" />

        {/* Right Strap Fabric & Texture */}
        <m.path style={{ d: rightStrapD }} fill="none" stroke="rgba(0,0,0,0.55)" strokeWidth="13" strokeLinecap="round" />
        <m.path style={{ d: rightStrapD }} fill="none" stroke="#18181b" strokeWidth="10" strokeLinecap="round" />
        <m.path style={{ d: rightStrapD }} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2.5" strokeDasharray="5 3" />
      </svg>

      {/* ID Badge Holder & Clasp Assembly */}
      <m.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.8}
        dragTransition={{ bounceStiffness: 150, bounceDamping: 14 }}
        style={{
          x,
          y,
          rotateZ,
          marginTop: -6,
          cursor: 'grab',
          zIndex: 5,
          touchAction: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        whileDrag={{ scale: 1.03, cursor: 'grabbing' }}
      >
        {/* Metal Lobster Clasp & Ring */}
        <svg width="32" height="42" viewBox="0 0 32 42" style={{ marginBottom: -8, position: 'relative', zIndex: 6, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}>
          <defs>
            <linearGradient id="silver-metal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="35%" stopColor="#cbd5e1" />
              <stop offset="70%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>
          {/* Triangular Loop */}
          <path d="M 8 6 L 24 6 L 16 16 Z" fill="none" stroke="url(#silver-metal)" strokeWidth="3.5" strokeLinejoin="round" />
          {/* Swivel Cylinder */}
          <rect x="13.5" y="15" width="5" height="10" rx="1.5" fill="url(#silver-metal)" />
          <circle cx="16" cy="20" r="3.5" fill="#475569" />
          {/* Hook clip body */}
          <path d="M 12 25 C 12 25, 12 36, 16 36 C 20 36, 20 25, 20 25" fill="none" stroke="url(#silver-metal)" strokeWidth="4.5" strokeLinecap="round" />
          {/* Spring lever */}
          <line x1="13.5" y1="26" x2="18.5" y2="33" stroke="#94a3b8" strokeWidth="2" />
        </svg>

        {/* Clear Plastic Mika PVC Badge Holder */}
        <div style={{
          width: 220,
          padding: 8,
          borderRadius: 18,
          background: 'rgba(255, 255, 255, 0.04)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.7), inset 0 1px 2px rgba(255,255,255,0.05)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
          {/* Horizontal Slot hole on the mika casing */}
          <div style={{
            width: 44,
            height: 9,
            borderRadius: 99,
            background: 'rgba(5, 5, 5, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            margin: '0 auto 8px',
            flexShrink: 0,
          }} />

          {/* Internal Employee ID Card */}
          <div style={{
            width: '100%',
            aspectRatio: '3/4',
            borderRadius: 12,
            overflow: 'hidden',
            background: 'linear-gradient(180deg, #1e1e24 0%, #0c0c0f 100%)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: 'none',
          }}>
            {/* Header Ribbon / Corporate Banner */}
            <div style={{
              background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
              height: 22,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '12px 12px 0 0',
              flexShrink: 0,
            }}>
              <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.08em', color: '#000', fontFamily: 'Outfit, sans-serif' }}>
                CREATIVE DEVELOPER
              </span>
            </div>

            {/* Photo Casing & Portrait Image */}
            <div style={{
              flex: 1,
              margin: '12px auto 8px',
              width: 130,
              aspectRatio: '3/4',
              borderRadius: 8,
              overflow: 'hidden',
              background: '#09090b',
              border: '2px solid rgba(255, 255, 255, 0.04)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              position: 'relative',
            }}>
              {image ? (
                <Image
                  src={image} alt={name} width={130} height={173}
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

            {/* Card Footer: Name & Barcode Aligned Horizontally */}
            <div style={{
              padding: '10px 14px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: 52,
            }}>
              {/* Text details container */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1, minWidth: 0, paddingRight: 8 }}>
                {/* Employee Name */}
                <div style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  fontFamily: 'Outfit, sans-serif',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  marginBottom: 1,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                  {name}
                </div>
                <div style={{ fontSize: 8, color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1 }}>
                  Jepara, ID
                </div>
              </div>

              {/* Barcode representation */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                opacity: 0.8,
                flexShrink: 0,
              }}>
                <svg width="48" height="15">
                  <rect x="0" width="2" height="15" fill="#fff" />
                  <rect x="3" width="1" height="15" fill="#fff" />
                  <rect x="5" width="2" height="15" fill="#fff" />
                  <rect x="9" width="3" height="15" fill="#fff" />
                  <rect x="13" width="1" height="15" fill="#fff" />
                  <rect x="15" width="2" height="15" fill="#fff" />
                  <rect x="18" width="1" height="15" fill="#fff" />
                  <rect x="20" width="3" height="15" fill="#fff" />
                  <rect x="24" width="1" height="15" fill="#fff" />
                  <rect x="26" width="2" height="15" fill="#fff" />
                  <rect x="29" width="1" height="15" fill="#fff" />
                  <rect x="31" width="3" height="15" fill="#fff" />
                  <rect x="35" width="2" height="15" fill="#fff" />
                  <rect x="38" width="1" height="15" fill="#fff" />
                  <rect x="40" width="2" height="15" fill="#fff" />
                  <rect x="43" width="1" height="15" fill="#fff" />
                  <rect x="45" width="2" height="15" fill="#fff" />
                </svg>
                <span style={{ fontSize: 7, color: 'var(--text-muted)', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                  ID-82323
                </span>
              </div>
            </div>
          </div>

          {/* Holographic Plastic Reflector Sheen Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 60%)',
            pointerEvents: 'none',
            borderRadius: 'inherit',
            zIndex: 10,
          }} />
        </div>
      </m.div>
    </div>
  )
}

export function AboutSection({ data }: { data?: AboutData | null }) {
  const { lang, t } = useLang()
  const about = data || DEFAULT_ABOUT
  const desc  = lang === 'en' ? about.description_en : about.description_id
  const paragraphs = desc.split('\n\n')

  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const stats = useMemo(() => [
    { value: '3+',  label: lang === 'en' ? 'Years' : 'Tahun' },
    { value: '20+', label: lang === 'en' ? 'Projects' : 'Proyek' },
    { value: '10+', label: lang === 'en' ? 'Clients' : 'Klien' },
  ], [lang])

  return (
    <section id="about" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <m.div
          {...(mounted ? {
            variants: containerVariants,
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, margin: "-100px" }
          } : {})}
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
            alignItems: 'center', // Vertically center for premium layout balance
          }}>
            {/* Left: Lanyard photo */}
            <m.div {...(mounted ? { variants: itemRevealUp } : {})} style={{ display: 'flex', justifyContent: 'center', paddingTop: 20, paddingBottom: 32 }}>
              <LanyardCard image={about.image} name="Ahmad Helmi Afandi" />
            </m.div>
 
            {/* Right: Content */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Title */}
              <m.h2
                {...(mounted ? { variants: itemRevealUp } : {})}
                style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12, color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif' }}
              >
                {lang === 'en' ? 'About ' : 'Tentang '}
                <span style={{ color: 'var(--accent)' }}>{lang === 'en' ? 'Me' : 'Saya'}</span>
              </m.h2>
 
              {/* Tagline */}
              <m.p
                {...(mounted ? { variants: itemRevealUp } : {})}
                style={{ fontSize: 14, fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: 20, borderLeft: '3px solid var(--accent)', paddingLeft: 12, lineHeight: 1.6 }}
              >
                {lang === 'en'
                  ? 'A blend of logic and design aesthetics.'
                  : 'Perpaduan logika kode dan estetika desain.'}
              </m.p>
 
              {/* Description paragraphs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
                {paragraphs.map((para, i) => (
                  <m.p key={i}
                    {...(mounted ? { variants: itemRevealUp } : {})}
                    style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                    {para}
                  </m.p>
                ))}
              </div>
 
              {/* Stats */}
              <m.div
                {...(mounted ? { variants: itemRevealUp } : {})}
                style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}
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
              </m.div>
 
              {/* Download CV button */}
              <m.div {...(mounted ? { variants: itemRevealUp } : {})} >
                <a href="/api/cv/download" download className="btn-secondary" style={{ display: 'inline-flex' }}>
                  <Download size={15} />
                  {lang === 'en' ? 'Download CV' : 'Unduh CV'}
                </a>
              </m.div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  )
}
