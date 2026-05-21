'use client'

import { useState, useEffect } from 'react'
import { Save, Loader2, CheckCircle2 } from 'lucide-react'
import { ImageUpload } from '@/components/admin/ImageUpload'

export default function AdminHeroPage() {
  const [data, setData] = useState({
    title_en: '',
    title_id: '',
    subtitle_en: '',
    subtitle_id: '',
    cta_en: 'View My Work',
    cta_id: 'Lihat Karya Saya',
    badge_en: 'Available for Freelance',
    badge_id: 'Tersedia untuk Freelance',
    image: '',
    cv_url: '',
    published: true
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetch('/api/hero').then(res => res.json()).then(d => {
      if (d && !d.error) setData(d)
      setLoading(false)
    })
  }, [])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      await fetch('/api/hero', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '800', fontFamily: 'Syne', marginBottom: '4px' }}>Hero Section</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Control the first thing visitors see on your portfolio.</p>
      </div>

      <form onSubmit={handleSave} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Title (ID)</label>
          <textarea 
            className="input" style={{ height: '120px', fontFamily: 'monospace' }} required 
            value={data.title_id}
            onChange={(e) => setData({ ...data, title_id: e.target.value })}
          />
          <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>Gunakan \n untuk baris baru (line break)</p>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Subtitle (ID)</label>
          <textarea 
            className="input" style={{ height: '100px' }} required 
            value={data.subtitle_id}
            onChange={(e) => setData({ ...data, subtitle_id: e.target.value })}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Badge (ID)</label>
          <input 
            type="text" className="input" 
            value={data.badge_id}
            onChange={(e) => setData({ ...data, badge_id: e.target.value })}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>CTA Label (ID)</label>
          <input 
            type="text" className="input" 
            value={data.cta_id}
            onChange={(e) => setData({ ...data, cta_id: e.target.value })}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>CV Download URL (PDF Link)</label>
          <input 
            type="text" className="input" placeholder="https://example.com/cv.pdf"
            value={data.cv_url || ''}
            onChange={(e) => setData({ ...data, cv_url: e.target.value })}
          />
        </div>

        <div>
          <ImageUpload 
            label="Hero Image / Profile Photo"
            value={data.image || ''} 
            onChange={(url) => setData({ ...data, image: url })} 
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <div style={{ color: success ? '#10b981' : 'transparent', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', transition: '0.3s' }}>
            <CheckCircle2 size={18} /> Settings saved successfully!
          </div>
          <button type="submit" disabled={saving} className="btn-primary" style={{ padding: '12px 32px' }}>
            {saving ? <Loader2 size={18} className="animate-spin" /> : <><Save size={18} /> Update Hero</>}
          </button>
        </div>
      </form>
    </div>
  )
}
