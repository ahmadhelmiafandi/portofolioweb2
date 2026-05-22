'use client'

import { useState, useEffect } from 'react'
import { Save, Loader2, FileText, User, MessageSquare, Info, Image as ImageIcon } from 'lucide-react'
import { useToast } from '@/components/admin/Toast'

export default function AdminCVPage() {
  const { toast } = useToast()
  const [data, setData] = useState({
    hero: { title_en: '', subtitle_en: '', title_id: '', subtitle_id: '' },
    about: { image: '', description_en: '', description_id: '' },
    contact: { portfolio_extra_en: '', portfolio_extra_id: '' }
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const [heroRes, aboutRes, contactRes] = await Promise.all([
          fetch('/api/hero'),
          fetch('/api/about'),
          fetch('/api/contact')
        ])
        
        const hero = await heroRes.json()
        const about = await aboutRes.json()
        const contact = await contactRes.json()

        setData({
          hero: hero || { title_en: '', subtitle_en: '', title_id: '', subtitle_id: '' },
          about: about || { image: '', description_en: '', description_id: '' },
          contact: contact || { portfolio_extra_en: '', portfolio_extra_id: '' }
        })
      } catch (err) {
        console.error('Failed to fetch data', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      // Update all three models
      const results = await Promise.all([
        fetch('/api/hero', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data.hero)
        }),
        fetch('/api/about', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data.about)
        }),
        fetch('/api/contact', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data.contact)
        })
      ])

      if (results.every(res => res.ok)) {
        toast('CV Data updated successfully!', 'success')
      } else {
        toast('Some updates failed. Please check the console.', 'error')
      }
    } catch (err) {
      toast('Error saving CV data', 'error')
    } finally {
      setSaving(false)
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })
      const json = await res.json()
      if (json.url) {
        setData({ ...data, about: { ...data.about, image: json.url } })
      }
    } catch (err) {
      toast('Upload failed', 'error')
    }
  }

  if (loading) return <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}><Loader2 className="animate-spin" /></div>

  return (
    <div style={{ maxWidth: '900px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '800', fontFamily: 'Syne', marginBottom: '8px' }}>Manage CV Content</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Centralized control for your professional CV / Portfolio PDF.</p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Header Section */}
        <div className="card" style={{ padding: '32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
            <FileText size={20} color="var(--accent)" /> CV Header & Title
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label className="label">Full Name (Nama Lengkap)</label>
              <input 
                className="input" 
                value={data.hero.title_id || ''} 
                onChange={(e) => setData({ ...data, hero: { ...data.hero, title_id: e.target.value } })} 
              />
            </div>
            <div>
              <label className="label">Job Title / Subtitle (Pekerjaan / Subtitel)</label>
              <input 
                className="input" 
                value={data.hero.subtitle_id || ''} 
                onChange={(e) => setData({ ...data, hero: { ...data.hero, subtitle_id: e.target.value } })} 
              />
            </div>
          </div>
        </div>

        {/* Photo Section */}
        <div className="card" style={{ padding: '32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
            <ImageIcon size={20} color="var(--accent)" /> CV Photo (Profile)
          </h3>
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <div style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: '60px', 
              overflow: 'hidden', 
              background: 'var(--bg-secondary)',
              border: '2px solid var(--border)'
            }}>
              {data.about.image ? (
                <img src={data.about.image} alt="CV" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}><User size={40} color="var(--text-secondary)" /></div>
              )}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>Upload a professional portrait for your CV. Recommended size: 500x500px.</p>
              <input type="file" accept="image/*" onChange={handleImageUpload} style={{ fontSize: '14px' }} />
            </div>
          </div>
        </div>

        {/* Professional Summary Section */}
        <div className="card" style={{ padding: '32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
            <User size={20} color="var(--accent)" /> Professional Summary
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label className="label">Summary (Indonesian)</label>
              <textarea 
                className="input" 
                style={{ height: '120px' }}
                value={data.about.description_id || ''} 
                onChange={(e) => setData({ ...data, about: { ...data.about, description_id: e.target.value } })} 
              />
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="card" style={{ padding: '32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
            <Info size={20} color="var(--accent)" /> Additional Information (CV Sidebar)
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>Format: "Key: Value" (e.g. "Languages: English, Indonesian"). One item per line.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label className="label">Info (Indonesian)</label>
              <textarea 
                className="input" 
                style={{ height: '120px' }}
                value={data.contact.portfolio_extra_id || ''} 
                onChange={(e) => setData({ ...data, contact: { ...data.contact, portfolio_extra_id: e.target.value } })} 
              />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '100px' }}>
          <button type="submit" disabled={saving} className="btn-primary" style={{ padding: '12px 28px', height: 'auto', minHeight: '48px' }}>
            {saving ? <Loader2 size={20} className="animate-spin" /> : <><Save size={20} /> Update CV Content</>}
          </button>
        </div>
      </form>
    </div>
  )
}
