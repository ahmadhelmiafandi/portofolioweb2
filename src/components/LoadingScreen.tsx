'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase]       = useState(0)  // 0=loading, 1=done, 2=exit
  const [visible, setVisible]   = useState(true)

  const PHASES = ['SYSTEM READY', 'PORTFOLIO', 'UI LOADING']

  useEffect(() => {
    // Progress bar animasi
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + Math.random() * 8 + 2
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setPhase(1), 200)
      setTimeout(() => setPhase(2), 700)
      setTimeout(() => setVisible(false), 1400)
    }
  }, [progress >= 100])

  // Cycle through phase labels
  useEffect(() => {
    const t = setInterval(() => setPhase(p => (p < 2 ? p + 1 : p)), 600)
    return () => clearInterval(t)
  }, [])

  if (!visible) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#050505',
            overflow: 'hidden',
          }}
        >
          {/* Background gradient blobs */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(20,184,166,0.2) 0%, transparent 65%)', top: '-20%', left: '-15%', filter: 'blur(60px)' }} />
            <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 65%)', bottom: '-15%', right: '-10%', filter: 'blur(60px)' }} />
          </div>

          {/* Main card */}
          <div style={{
            position: 'relative', zIndex: 1,
            width: '90%', maxWidth: 860,
            background: 'rgba(20,10,10,0.7)',
            backdropFilter: 'blur(24px)',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.06)',
            padding: 'clamp(28px, 5vw, 56px)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 40,
            alignItems: 'center',
          }}>

            {/* LEFT */}
            <div>
              {/* Status pills */}
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}
              >
                {PHASES.map((label, i) => (
                  <span key={label} style={{
                    fontSize: 10, fontWeight: 600, letterSpacing: '0.1em',
                    padding: '4px 10px', borderRadius: 9999,
                    fontFamily: 'Outfit, monospace',
                    background: i <= phase ? 'rgba(20,184,166,0.15)' : 'rgba(255,255,255,0.06)',
                    color: i <= phase ? '#14b8a6' : '#52525b',
                    border: `1px solid ${i <= phase ? 'rgba(20,184,166,0.3)' : 'rgba(255,255,255,0.08)'}`,
                    transition: 'all 0.3s ease',
                  }}>• {label}</span>
                ))}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                style={{
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 800, color: '#ffffff',
                  fontFamily: 'Outfit, sans-serif',
                  letterSpacing: '-0.03em', lineHeight: 1.15,
                  marginBottom: 16,
                }}
              >
                Welcome to<br />my Portfolio<br />Website
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
                style={{ fontSize: 14, color: '#a1a1aa', lineHeight: 1.7, marginBottom: 32, maxWidth: 360 }}
              >
                Building modern, reliable, and fast digital experiences with a focus on clean UI and solid engineering.
              </motion.p>

              {/* Progress bar */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 10, fontWeight: 600, color: '#52525b', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'monospace' }}>
                    LIVE STATUS
                  </span>
                  <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
                </div>
                <div style={{ width: '100%', height: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 9999, overflow: 'hidden', marginBottom: 20 }}>
                  <motion.div
                    style={{
                      height: '100%',
                      background: 'linear-gradient(90deg, #14b8a6, #8b5cf6)',
                      borderRadius: 9999,
                      width: `${Math.min(progress, 100)}%`,
                    }}
                    transition={{ ease: 'easeOut' }}
                  />
                </div>

                {/* Action pills */}
                <div style={{ display: 'flex', gap: 8 }}>
                  {[{ icon: '</>', label: 'CODE' }, { icon: '◉', label: 'PROFILE' }, { icon: '⊞', label: 'SOURCE' }].map(item => (
                    <div key={item.label} style={{
                      display: 'flex', alignItems: 'center', gap: 6,
                      padding: '6px 12px', borderRadius: 9999,
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      fontSize: 11, fontWeight: 600, color: '#71717a',
                      fontFamily: 'Outfit, sans-serif',
                    }}>
                      <span style={{ fontSize: 12 }}>{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT — circular gauge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: 24,
                display: 'flex', flexDirection: 'column',
              }}
            >
              {/* Top bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#52525b', letterSpacing: '0.08em', fontFamily: 'monospace' }}>CORE UI</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#22c55e', letterSpacing: '0.08em', fontFamily: 'monospace' }}>ONLINE</span>
              </div>

              {/* Circular progress */}
              <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 0 20px' }}>
                <div style={{ position: 'relative', width: 140, height: 140 }}>
                  <svg width="140" height="140" style={{ transform: 'rotate(-90deg)' }}>
                    {/* Track */}
                    <circle cx="70" cy="70" r="54" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                    {/* Progress */}
                    <motion.circle
                      cx="70" cy="70" r="54"
                      fill="none"
                      stroke="url(#loadGrad)"                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 54}`}
                      animate={{ strokeDashoffset: 2 * Math.PI * 54 * (1 - Math.min(progress, 100) / 100) }}
                      transition={{ ease: 'easeOut' }}
                    />
                    <defs>
                      <linearGradient id="loadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#14b8a6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Center text */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: '#a1a1aa', letterSpacing: '0.1em', fontFamily: 'monospace' }}>
                      WELCOME
                    </span>
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', marginTop: 6, display: 'inline-block' }}
                    />
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  { label: 'MODULES', value: '06', sub: 'Loaded' },
                  { label: 'LATENCY', value: '12ms', sub: 'Stable' },
                ].map(s => (
                  <div key={s.label} style={{
                    background: 'rgba(255,255,255,0.04)', borderRadius: 10,
                    padding: '12px 14px',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{ fontSize: 10, fontWeight: 600, color: '#52525b', letterSpacing: '0.08em', marginBottom: 4, fontFamily: 'monospace' }}>{s.label}</div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: '#f4f4f5', fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: '#52525b', marginTop: 2 }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
