'use client'

import { useState, useEffect } from 'react'
import { Save, Loader2, Star } from 'lucide-react'
import { ImageUpload } from '@/components/admin/ImageUpload'
import { FileUpload } from '@/components/admin/FileUpload'
import { AdminPageHeader } from '@/components/admin/AdminPageHeader'
import { CollapsibleSection } from '@/components/admin/CollapsibleSection'
import { FormSkeleton } from '@/components/admin/SkeletonLoader'
import { useToast } from '@/components/admin/Toast'

export default function AdminHeroPage() {
  const { toast } = useToast()
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

  useEffect(() => {
    fetch('/api/hero')
      .then(res => res.json())
      .then(d => {
        if (d && !d.error) setData(d)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      const res = await fetch('/api/hero', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (res.ok) {
        toast('Hero section updated successfully!', 'success')
      } else {
        toast('Failed to save Hero section.', 'error')
      }
    } catch {
      toast('Network error occurred.', 'error')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <FormSkeleton />

  return (
    <div style={{ maxWidth: '900px' }}>
      <AdminPageHeader 
        title="Hero Section" 
        description="Control the landing page view first seen by your portfolio visitors." 
        icon={Star} 
      />

      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Indonesian Fields (Main) */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
            Konten Utama (Bahasa Indonesia)
          </h3>
          
          <div>
            <label className="label">Title (ID)</label>
            <textarea 
              className="input" 
              style={{ height: '100px', fontFamily: 'monospace' }} 
              required 
              value={data.title_id}
              onChange={(e) => setData({ ...data, title_id: e.target.value })}
            />
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>Gunakan \n untuk baris baru (line break)</p>
          </div>

          <div>
            <label className="label">Subtitle (ID)</label>
            <textarea 
              className="input" 
              style={{ height: '80px' }} 
              required 
              value={data.subtitle_id}
              onChange={(e) => setData({ ...data, subtitle_id: e.target.value })}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label className="label">Badge (ID)</label>
              <input 
                type="text" 
                className="input" 
                value={data.badge_id}
                onChange={(e) => setData({ ...data, badge_id: e.target.value })}
              />
            </div>
            <div>
              <label className="label">CTA Label (ID)</label>
              <input 
                type="text" 
                className="input" 
                value={data.cta_id}
                onChange={(e) => setData({ ...data, cta_id: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* English Collapsible Section */}
        <CollapsibleSection title="English Translation (Manual Overrides)">
          <div>
            <label className="label">Title (EN)</label>
            <textarea 
              className="input" 
              style={{ height: '100px', fontFamily: 'monospace' }} 
              value={data.title_en}
              onChange={(e) => setData({ ...data, title_en: e.target.value })}
              placeholder="Leave blank for auto-translation"
            />
          </div>

          <div>
            <label className="label">Subtitle (EN)</label>
            <textarea 
              className="input" 
              style={{ height: '80px' }} 
              value={data.subtitle_en}
              onChange={(e) => setData({ ...data, subtitle_en: e.target.value })}
              placeholder="Leave blank for auto-translation"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label className="label">Badge (EN)</label>
              <input 
                type="text" 
                className="input" 
                value={data.badge_en}
                onChange={(e) => setData({ ...data, badge_en: e.target.value })}
                placeholder="Leave blank for auto-translation"
              />
            </div>
            <div>
              <label className="label">CTA Label (EN)</label>
              <input 
                type="text" 
                className="input" 
                value={data.cta_en}
                onChange={(e) => setData({ ...data, cta_en: e.target.value })}
                placeholder="Leave blank for auto-translation"
              />
            </div>
          </div>
        </CollapsibleSection>

        {/* Uploads and Controls */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
            Media & File Pendukung
          </h3>

          <div>
            <label className="label">CV Download File (PDF)</label>
            <FileUpload
              label="Upload CV PDF"
              accept=".pdf"
              helperText="PDF format (max 10MB)"
              value={data.cv_url || ''}
              onChange={(url) => setData({ ...data, cv_url: url })}
            />
          </div>

          <div>
            <ImageUpload 
              label="Hero Image / Profile Photo"
              value={data.image || ''} 
              onChange={(url) => setData({ ...data, image: url })} 
            />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
            <div>
              <label className="label" style={{ marginBottom: '2px' }}>Publish Status</label>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Show this section on the web</span>
            </div>
            <button 
              type="button" 
              className={`toggle ${data.published ? 'on' : ''}`}
              onClick={() => setData({ ...data, published: !data.published })}
            />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
          <button type="submit" disabled={saving} className="btn-primary" style={{ padding: '12px 32px', minHeight: '48px' }}>
            {saving ? <Loader2 size={18} className="animate-spin" /> : <><Save size={18} /> Update Hero</>}
          </button>
        </div>
      </form>
    </div>
  )
}
