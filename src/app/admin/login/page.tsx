'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { m } from 'framer-motion'
import { Lock, Mail, Loader2 } from 'lucide-react'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()
      if (res.ok) {
        router.push('/admin/dashboard')
      } else {
        setError(data.error || 'Invalid credentials')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg)',
      padding: '24px'
    }}>
      <m.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          width: '100%',
          maxWidth: '400px',
          background: 'var(--surface)',
          padding: '40px',
          borderRadius: '20px',
          border: '2px solid var(--text-primary)',
          boxShadow: '8px 8px 0px var(--text-primary)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
            borderRadius: '10px',
            border: '2px solid var(--text-primary)',
            boxShadow: '3px 3px 0px var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            margin: '0 auto 16px'
          }}>
            <Lock size={20} />
          </div>
          <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-space)' }}>Admin Login</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Welcome back. Please login to continue.</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {error && (
            <div style={{
              padding: '12px',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '2px solid #ef4444',
              color: '#ef4444',
              borderRadius: '8px',
              fontSize: '14px',
              textAlign: 'center',
              fontWeight: '700',
              boxShadow: '2px 2px 0px rgba(239, 68, 68, 0.2)'
            }}>
              {error}
            </div>
          )}

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '700', fontFamily: 'var(--font-space)' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-primary)', zIndex: 1, pointerEvents: 'none' }} />
              <input
                type="email"
                required
                className="input"
                style={{ paddingLeft: '40px', border: '2px solid var(--text-primary)', borderRadius: '8px', boxShadow: '2px 2px 0px var(--text-primary)' }}
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '700', fontFamily: 'var(--font-space)' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-primary)', zIndex: 1, pointerEvents: 'none' }} />
              <input
                type="password"
                required
                className="input"
                style={{ paddingLeft: '40px', border: '2px solid var(--text-primary)', borderRadius: '8px', boxShadow: '2px 2px 0px var(--text-primary)' }}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="neubrutal-btn-primary"
            style={{ width: '100%', height: '48px', marginTop: '8px' }}
          >
            {loading ? <Loader2 size={20} className="animate-spin" /> : 'Sign In'}
          </button>
        </form>

        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <a href="/" style={{ color: 'var(--text-muted)', fontSize: '13px', textDecoration: 'none', fontWeight: '600' }}>
            ← Back to Website
          </a>
        </div>
      </m.div>
    </div>
  )
}
