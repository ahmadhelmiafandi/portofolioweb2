'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/contexts/LangContext'
import { ArrowRight, Download, Sparkles } from 'lucide-react'

interface HeroData {
  title_en: string; title_id: string
  subtitle_en: string; subtitle_id: string
  cta_en: string; cta_id: string
  badge_en: string; badge_id: string
  image?: string | null
  cv_url?: string | null
}

const DEFAULT_HERO: HeroData = {
  title_en: 'Building Digital Experiences That Inspire.',
  title_id: 'Membangun Pengalaman Digital yang Menginspirasi.',
  subtitle_en: 'Full-Stack Developer specialized in crafting elegant, high-performance web applications with modern technologies.',
  subtitle_id: 'Full-Stack Developer yang berfokus pada pembuatan aplikasi web elegan dan berkinerja tinggi dengan teknologi modern.',
  cta_en: 'View My Work', cta_id: 'Lihat Karya Saya',
  badge_en: 'Available for Freelance', badge_id: 'Tersedia untuk Freelance',
}

export function HeroSection({ data }: { data?: HeroData | null }) {
  const { lang } = useLang()
  const hero  = data || DEFAULT_HERO
  const title    = lang === 'en' ? hero.title_en    : hero.title_id
  const subtitle = lang === 'en' ? hero.subtitle_en : hero.subtitle_id
  const badge    = lang === 'en' ? hero.badge_en    : hero.badge_id

  const words    = title.split(' ')
  const lastWord = words[words.length - 1]
  const firstWords = words.slice(0, -1).join(' ')

  const stats = [
    { value: '3+',  label: lang === 'en' ? 'Years Experience' : 'Tahun Pengalaman' },
    { value: '20+', label: lang === 'en' ? 'Projects Done'    : 'Proyek Selesai' },
    { value: '15+', label: lang === 'en' ? 'Happy Clients'    : 'Klien Puas' },
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
          grid-template-columns: 1fr 380px;
          gap: 64px;
          align-items: center;
          width: 100%;
          padding: 80px 24px 64px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hero-title {
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1.08;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 20px;
          font-family: 'Outfit', sans-serif;
          letter-spacing: -0.03em;
        }
        .hero-subtitle {
          font-size: 17px;
          color: var(--text-secondary);
          max-width: 500px;
          margin-bottom: 36px;
          line-height: 1.7;
          font-weight: 400;
        }
        .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .hero-stats { display: flex; gap: 36px; margin-top: 52px; flex-wrap: wrap; }
        .hero-stat-divider {
          width: 1px; background: var(--border);
          align-self: stretch; margin: 4px 0;
        }
        .hero-img-wrap {
          position: relative;
          display: flex; align-items: center; justify-content: center;
        }
        .hero-img-frame {
          position: relative;
          width: 340px; height: 380px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-lg);
          background: var(--surface);
        }
        .hero-img-frame img { width: 100%; height: 100%; object-fit: cover; }
        .hero-no-img {
          width: 340px; height: 380px;
          border-radius: 24px;
          background: linear-gradient(135deg, var(--surface-2), var(--surface-3));
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Outfit', sans-serif;
          font-size: 96px; font-weight: 800;
          color: var(--accent);
        }
        /* glow blob behind image */
        .hero-glow {
          position: absolute;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 64px 20px 80px;
            gap: 40px;
          }
          .hero-content-col { order: 2; }
          .hero-img-wrap    { order: 1; }
          .hero-title       { font-size: clamp(28px, 8vw, 48px); }
          .hero-subtitle    { font-size: 15px; margin: 0 auto 32px; }
          .hero-btns        { justify-content: center; }
          .hero-stats       { justify-content: center; gap: 24px; }
          .hero-img-frame, .hero-no-img { width: 260px; height: 300px; }
          .hero-no-img      { font-size: 72px; }
          .badge            { margin: 0 auto 20px !important; }
        }
        @media (max-width: 480px) {
          .hero-title { font-size: 28px; }
          .hero-btns  { flex-direction: column; align-items: center; }
          .hero-btns a, .hero-btns span { width: 100%; max-width: 280px; justify-content: center; }
        }
      `}</style>

      <section id="home" className="hero-section" aria-label="Hero">
        {/* Subtle grid */}
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 1, zIndex: 0 }} />
        {/* Background blobs */}
        <div style={{ position: 'absolute', width: 600, height: 600, background: 'radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 65%)', top: '-10%', right: '-10%', zIndex: 0, borderRadius: '50%' }} />
        <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(circle, rgba(244,63,94,0.06) 0%, transparent 65%)', bottom: '0%', left: '-8%', zIndex: 0, borderRadius: '50%' }} />

        <div className="hero-inner" style={{ position: 'relative', zIndex: 1 }}>
          {/* Left content */}
          <div className="hero-content-col">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <span className="badge" style={{ marginBottom: 24, display: 'inline-flex' }}>
                <span style={{ width: 7, height: 7, background: '#22c55e', borderRadius: '50%', flexShrink: 0, boxShadow: '0 0 6px #22c55e' }} />
                {badge}
              </span>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              {firstWords}{' '}
              <span className="gradient-text">{lastWord}</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              {subtitle}
            </motion.p>

            <motion.div
              className="hero-btns"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
            >
              <a href="#projects" className="btn-primary">
                <Sparkles size={15} />
                {lang === 'en' ? 'View My Work' : 'Lihat Karya Saya'}
                <ArrowRight size={15} />
              </a>
              {hero.cv_url ? (
                <a href="/api/cv/download" download className="btn-secondary">
                  <Download size={15} />
                  {lang === 'en' ? 'Download CV' : 'Unduh CV'}
                </a>
              ) : (
                <span className="btn-secondary" style={{ opacity: 0.4, cursor: 'not-allowed' }}>
                  <Download size={15} />
                  {lang === 'en' ? 'Download CV' : 'Unduh CV'}
                </span>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  {i > 0 && <div className="hero-stat-divider" />}
                  <div>
                    <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.03em' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 400, marginTop: 2 }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            className="hero-img-wrap"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="hero-glow" />
            {hero.image ? (
              <div className="hero-img-frame" style={{ position: 'relative', zIndex: 1 }}>
                <img src={hero.image} alt={lang === 'en' ? 'Profile' : 'Foto Profil'} />
              </div>
            ) : (
              <div className="hero-no-img" style={{ position: 'relative', zIndex: 1 }}>H</div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
