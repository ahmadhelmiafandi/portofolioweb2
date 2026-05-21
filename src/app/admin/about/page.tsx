'use client'

import { useState, useEffect } from 'react'
import { Save, Loader2, CheckCircle2 } from 'lucide-react'
import { ImageUpload } from '@/components/admin/ImageUpload'

export default function AdminAboutPage() {
  const [data, setData] = useState({
    description_en: '',
    description_id: '',
    image: '',
    published: true
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetch('/api/about').then(res => res.json()).then(d => {
      if (d && !d.error) setData(d)
      setLoading(false)
    })
  }, [])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      await fetch('/api/about', {
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
        <h1 style={{ fontSize: '28px', fontWeight: '800', fontFamily: 'Syne', marginBottom: '4px' }}>About Section</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Tell your story and upload your profile picture.</p>
      </div>

      <form onSubmit={handleSave} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Description (ID)</label>
          <textarea 
            className="input" style={{ height: '180px' }} required 
            value={data.description_id}
            onChange={(e) => setData({ ...data, description_id: e.target.value })}
            placeholder="Ceritakan kisah Anda dalam Bahasa Indonesia..."
          />
        </div>

        <div>
          <ImageUpload 
            label="Profile Image"
            value={data.image || ''} 
            onChange={(url) => setData({ ...data, image: url })} 
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <div style={{ color: success ? '#10b981' : 'transparent', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', transition: '0.3s' }}>
            <CheckCircle2 size={18} /> About section updated!
          </div>
          <button type="submit" disabled={saving} className="btn-primary" style={{ padding: '12px 32px' }}>
            {saving ? <Loader2 size={18} className="animate-spin" /> : <><Save size={18} /> Save Changes</>}
          </button>
        </div>
      </form>
    </div>
  )
}
