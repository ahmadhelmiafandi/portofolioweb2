'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/contexts/LangContext'
import { ArrowRight, Download, GitBranch, Link2, Camera, MessageCircle } from 'lucide-react'

interface HeroData {
  title_en: string; title_id: string
  subtitle_en: string; subtitle_id: string
  cta_en: string; cta_id: string
  badge_en: string; badge_id: string
  image?: string | null
  cv_url?: string | null
}

const DEFAULT_HERO: HeroData = {
  title_en: 'Helmi Afandi',
  title_id: 'Helmi Afandi',
  subtitle_en: 'Full-Stack Developer & UI Engineer',
  subtitle_id: 'Full-Stack Developer & UI Engineer',
  cta_en: 'View My Work', cta_id: 'Lihat Karya Saya',
  badge_en: 'Available for Freelance', badge_id: 'Tersedia untuk Freelance',
}

// ── Laptop + Coffee illustration ────────────────────────────
function HeroIllustration() {
  return (
    <div style={{ position: 'relative', width: 340, height: 380, zIndex: 1 }}>
      <div style={{ position: 'absolute', width: 220, height: 220, borderRadius: '50%', background: 'radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 70%)', top: '10%', left: '10%', filter: 'blur(32px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: 160, height: 160, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,63,94,0.12) 0%, transparent 70%)', bottom: '5%', right: '5%', filter: 'blur(28px)', pointerEvents: 'none' }} />

      {/* Laptop */}
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: 60, left: 30, width: 280 }}>
        <div style={{ width: 280, height: 180, background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)', borderRadius: '12px 12px 0 0', border: '2px solid #374151', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
          <div style={{ padding: '14px 16px', height: '100%' }}>
            <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f43f5e' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#eab308' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e' }} />
            </div>
            {[{ w: '60%', color: '#14b8a6' }, { w: '80%', color: '#9ca3af' }, { w: '45%', color: '#f43f5e' }, { w: '70%', color: '#9ca3af' }, { w: '55%', color: '#14b8a6' }, { w: '40%', color: '#9ca3af' }].map((line, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 0.7, x: 0 }} transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
                style={{ height: 8, borderRadius: 4, background: line.color, width: line.w, marginBottom: 10 }} />
            ))}
            <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1 }}
              style={{ width: 8, height: 14, background: '#14b8a6', borderRadius: 2 }} />
          </div>
        </div>
        <div style={{ width: 280, height: 6, background: '#374151', borderRadius: '0 0 2px 2px' }} />
        <div style={{ width: 300, height: 16, marginLeft: -10, background: 'linear-gradient(180deg, #1f2937 0%, #111827 100%)', borderRadius: '0 0 12px 12px', border: '2px solid #374151', borderTop: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 60, height: 4, background: '#374151', borderRadius: 4 }} />
        </div>
      </motion.div>

      {/* Coffee */}
      <motion.div animate={{ y: [0, -7, 0], rotate: [-2, 2, -2] }} transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
        style={{ position: 'absolute', bottom: 28, right: 20, zIndex: 2 }}>
        {[0, 1, 2].map(i => (
          <motion.div key={i} animate={{ y: [0, -18, 0], opacity: [0.6, 0, 0.6] }} transition={{ repeat: Infinity, duration: 1.8, delay: i * 0.4, ease: 'easeInOut' }}
            style={{ position: 'absolute', top: -18, left: 14 + i * 10, width: 3, height: 14, background: 'linear-gradient(to top, rgba(20,184,166,0.6), transparent)', borderRadius: 4 }} />
        ))}
        <div style={{ width: 52, height: 48, background: 'linear-gradient(135deg, #1f2937, #111827)', borderRadius: '6px 6px 14px 14px', border: '2px solid #374151', position: 'relative', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 6, boxShadow: '0 8px 20px rgba(0,0,0,0.4)' }}>
          <div style={{ width: 36, height: 8, background: '#7c3f00', borderRadius: '50%', opacity: 0.9 }} />
          <div style={{ position: 'absolute', right: -14, top: 10, width: 14, height: 24, border: '2px solid #374151', borderLeft: 'none', borderRadius: '0 10px 10px 0' }} />
        </div>
        <div style={{ width: 66, height: 8, marginLeft: -7, background: '#1f2937', borderRadius: '0 0 8px 8px', border: '1px solid #374151', borderTop: 'none' }} />
      </motion.div>

      {/* Badge </> */}
      <motion.div animate={{ y: [0, -8, 0], x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
        style={{ position: 'absolute', top: 20, right: 10, background: 'rgba(20,184,166,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(20,184,166,0.3)', borderRadius: 10, padding: '6px 12px', fontSize: 12, color: '#14b8a6', fontFamily: 'monospace', fontWeight: 600, zIndex: 3 }}>
        {'</>'}
      </motion.div>

      {/* Badge ⚡ */}
      <motion.div animate={{ y: [0, -6, 0], rotate: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1.5 }}
        style={{ position: 'absolute', bottom: 80, left: 10, background: 'rgba(244,63,94,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(244,63,94,0.3)', borderRadius: 10, padding: '6px 10px', fontSize: 16, zIndex: 3 }}>
        ⚡
      </motion.div>
    </div>
  )
}

const WA_NUMBER = '6282323609362'
const getWaLink = (lang: 'en' | 'id') => {
  const msg = lang === 'en'
    ? `Hi Helmi! I visited your portfolio and I'm interested in discussing a project collaboration.`
    : `Halo Helmi! Saya sudah melihat portofolio kamu dan tertarik untuk mendiskusikan kerja sama proyek.`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}

export function HeroSection({ data }: { data?: HeroData | null }) {
  const { lang } = useLang()
  const hero = data || DEFAULT_HERO
  const name     = lang === 'en' ? hero.title_en    : hero.title_id
  const role     = lang === 'en' ? hero.subtitle_en : hero.subtitle_id
  const badge    = lang === 'en' ? hero.badge_en    : hero.badge_id

  const SOCIALS = [
    { icon: GitBranch, label: 'GitHub',    href: '#' },
    { icon: Link2,     label: 'LinkedIn',  href: '#' },
    { icon: Camera,       label: 'Instagram', href: '#' },
    { icon: MessageCircle, label: 'WhatsApp', href: getWaLink(lang) },
  ]

  return (
    <>
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: var(--navbar-height);
          background: var(--bg);
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          width: 100%;
          padding: 80px 24px 64px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hero-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 12px;
          font-family: 'Outfit', sans-serif;
        }
        .hero-name {
          font-size: clamp(36px, 4.5vw, 60px);
          font-weight: 800;
          color: var(--text-primary);
          font-family: 'Outfit', sans-serif;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 8px;
        }
        .hero-role {
          font-size: clamp(16px, 2vw, 20px);
          color: var(--text-secondary);
          font-weight: 400;
          margin-bottom: 24px;
          font-family: 'Outfit', sans-serif;
          line-height: 1.5;
        }
        .hero-desc {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 480px;
          margin-bottom: 32px;
        }
        .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .hero-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 64px 20px 80px;
            gap: 48px;
          }
          .hero-content-col { order: 2; }
          .hero-right        { order: 1; }
          .hero-name         { font-size: clamp(28px, 8vw, 44px); }
          .hero-desc         { margin: 0 auto 32px; }
          .hero-btns         { justify-content: center; }
          .hero-socials      { justify-content: center; }
        }
        @media (max-width: 480px) {
          .hero-btns { flex-direction: column; align-items: center; }
          .hero-btns a, .hero-btns span { width: 100%; max-width: 280px; justify-content: center; }
        }
      `}</style>

      <section id="home" className="hero-section" aria-label="Hero">
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 1, zIndex: 0 }} />
        <div style={{ position: 'absolute', width: 600, height: 600, background: 'radial-gradient(circle, rgba(20,184,166,0.1) 0%, transparent 65%)', top: '-15%', left: '-10%', zIndex: 0, borderRadius: '50%' }} />
        <div style={{ position: 'absolute', width: 500, height: 500, background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%)', bottom: '-10%', right: '-8%', zIndex: 0, borderRadius: '50%' }} />

        <div className="hero-inner" style={{ position: 'relative', zIndex: 1 }}>

          {/* LEFT */}
          <motion.div className="hero-content-col"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>

            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
              <span className="badge" style={{ marginBottom: 20, display: 'inline-flex' }}>
                <span style={{ width: 7, height: 7, background: '#22c55e', borderRadius: '50%', flexShrink: 0, boxShadow: '0 0 6px #22c55e' }} />
                {badge}
              </span>
            </motion.div>

            {/* Label */}
            <div className="hero-label">
              {lang === 'en' ? 'HELLO, I AM' : 'HALO, SAYA'}
            </div>

            {/* Name */}
            <motion.h1 className="hero-name"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
              {name}
            </motion.h1>

            {/* Role */}
            <motion.p className="hero-role"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }}>
              {lang === 'en' ? 'A ' : 'Seorang '}
              <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{role}</span>
            </motion.p>

            {/* Social icons */}
            <motion.div className="hero-socials"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{
                    width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '10px',
                    color: 'var(--text-secondary)', textDecoration: 'none', transition: 'var(--transition)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
                >
                  <s.icon size={15} />
                </a>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p className="hero-desc"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
              {lang === 'en'
                ? 'I help businesses and individuals turn ideas into beautiful, functional digital solutions.'
                : 'Saya membantu bisnis dan individu mengubah ide menjadi solusi digital yang indah dan berfungsi.'}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="hero-btns"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <a href="#projects" className="btn-primary">
                {lang === 'en' ? 'View My Work' : 'Lihat Karya Saya'}
                <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn-secondary">
                {lang === 'en' ? 'Contact Me' : 'Hubungi Saya'}
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div className="hero-right"
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.1 }}>

            <HeroIllustration />

            {/* Status bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              style={{
                background: 'rgba(17,24,39,0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(55,65,81,0.6)',
                borderRadius: 9999,
                padding: '8px 16px',
                display: 'flex', alignItems: 'center', gap: 10,
                width: '100%', maxWidth: 340,
              }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,#14b8a6,#f43f5e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff', flexShrink: 0 }}>H</div>
              <div>
                <div style={{ fontWeight: 600, color: '#f9fafb', fontSize: 12, fontFamily: 'Outfit, sans-serif' }}>Helmi Afandi</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#6b7280' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                  Online
                </div>
              </div>
              <a href="#contact"
                style={{ marginLeft: 'auto', background: 'var(--accent)', color: '#000', padding: '5px 14px', borderRadius: 9999, fontSize: 12, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap', transition: 'var(--transition)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-hover)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
              >
                {lang === 'en' ? 'Contact Me' : 'Hubungi'}
              </a>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </>
  )
}
