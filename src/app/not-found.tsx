'use client'

import Link from 'next/link'
import { m } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '100px 24px',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background blobs */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'var(--accent-light)',
          filter: 'blur(100px)',
          borderRadius: '50%',
          zIndex: 0,
          opacity: 0.5
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'var(--accent-2-light)',
          filter: 'blur(100px)',
          borderRadius: '50%',
          zIndex: 0,
          opacity: 0.3
        }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '600px' }}>
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ 
              fontSize: 'clamp(120px, 20vw, 180px)', 
              fontWeight: '900', 
              fontFamily: 'Syne, sans-serif',
              lineHeight: 1,
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '20px'
            }}>
              404
            </div>
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '28px', fontWeight: '800', fontFamily: 'Syne', marginBottom: '16px', color: 'var(--text-primary)' }}
          >
            Halaman Tidak Ditemukan
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px' }}
          >
            Oops! Sepertinya halaman yang Anda cari telah dipindahkan atau tidak pernah ada. 
            Jangan khawatir, Anda bisa kembali ke tempat yang aman.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}
          >
            <Link href="/" className="btn-primary" style={{ padding: '14px 28px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Home size={18} /> Kembali ke Beranda
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="btn-secondary" 
              style={{ padding: '14px 28px', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <ArrowLeft size={18} /> Kembali Sebelumnya
            </button>
          </m.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
