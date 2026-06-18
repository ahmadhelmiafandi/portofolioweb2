'use client'

import { useState, useEffect } from 'react'
import { Save, Loader2, Copyright } from 'lucide-react'
import { useToast } from '@/components/admin/Toast'

export default function AdminFooterPage() {
  const { toast } = useToast()
  const [data, setData] = useState({
    footer_copy: '',
    footer_made: '',
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch('/api/contact')
      .then(res => res.json())
      .then(json => {
        setData({
          footer_copy: json?.footer_copy ?? '',
          footer_made: json?.footer_made ?? '',
        })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) toast('Footer saved!', 'success')
      else toast('Failed to save', 'error')
    } catch {
      toast('Error saving', 'error')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}>
      <Loader2 className="animate-spin" />
    </div>
  )

  return (
    <div style={{ maxWidth: '720px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '800', fontFamily: 'Outfit', marginBottom: '8px' }}>Footer</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Kelola teks copyright yang tampil di bagian bawah website.</p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div className="card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Copyright size={18} color="var(--accent)" /> Teks Footer
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label className="label">Teks Copyright (Bahasa Indonesia)</label>
              <input
                className="input"
                value={data.footer_copy}
                onChange={e => setData({ ...data, footer_copy: e.target.value })}
                placeholder="© 2026 Helmi. Hak cipta dilindungi."
              />
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>Ditampilkan saat mode bahasa Indonesia</p>
            </div>
            <div>
              <label className="label">Teks Copyright (English)</label>
              <input
                className="input"
                value={data.footer_made}
                onChange={e => setData({ ...data, footer_made: e.target.value })}
                placeholder="© 2026 Helmi. All rights reserved."
              />
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>Displayed when language is set to English</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="submit" disabled={saving} className="btn-primary" style={{ padding: '12px 28px', minHeight: '48px' }}>
            {saving ? <Loader2 size={18} className="animate-spin" /> : <><Save size={18} /> Simpan Footer</>}
          </button>
        </div>
      </form>
    </div>
  )
}
