'use client'

import { useState, useEffect } from 'react'
import { Save, Loader2, User } from 'lucide-react'
import { ImageUpload } from '@/components/admin/ImageUpload'
import { AdminPageHeader } from '@/components/admin/AdminPageHeader'
import { CollapsibleSection } from '@/components/admin/CollapsibleSection'
import { FormSkeleton } from '@/components/admin/SkeletonLoader'
import { useToast } from '@/components/admin/Toast'

export default function AdminAboutPage() {
  const { toast } = useToast()
  const [data, setData] = useState({
    description_en: '',
    description_id: '',
    image: '',
    published: true
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch('/api/about')
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
      const res = await fetch('/api/about', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (res.ok) {
        toast('About section updated successfully!', 'success')
      } else {
        toast('Failed to update About section.', 'error')
      }
    } catch {
      toast('Network error occurred.', 'error')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <FormSkeleton />

  return (
    <div style={{ maxWidth: '800px' }}>
      <AdminPageHeader 
        title="About Me" 
        description="Tell your story and manage the professional bio display on the portfolio website." 
        icon={User} 
      />

      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Indonesian Bio */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
            Konten Utama (Bahasa Indonesia)
          </h3>
          <div>
            <label className="label">Biografi / Deskripsi (ID)</label>
            <textarea 
              className="input" 
              style={{ height: '180px', resize: 'vertical' }} 
              required 
              value={data.description_id}
              onChange={(e) => setData({ ...data, description_id: e.target.value })}
              placeholder="Ceritakan tentang diri Anda, pengalaman, keahlian, dan apa yang Anda sukai..."
            />
          </div>
        </div>

        {/* English Collapsible Bio */}
        <CollapsibleSection title="English Translation (Manual Overrides)">
          <div>
            <label className="label">Biography / Description (EN)</label>
            <textarea 
              className="input" 
              style={{ height: '180px', resize: 'vertical' }} 
              value={data.description_en}
              onChange={(e) => setData({ ...data, description_en: e.target.value })}
              placeholder="Leave blank for auto-translation based on the Indonesian version"
            />
          </div>
        </CollapsibleSection>

        {/* Media & Publish */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
            Foto & Pengaturan Halaman
          </h3>

          <div>
            <ImageUpload 
              label="Profile Photo / Portrait (A4 CV / About Section)"
              value={data.image || ''} 
              onChange={(url) => setData({ ...data, image: url })} 
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
            <div>
              <label className="label" style={{ marginBottom: '2px' }}>Publish Status</label>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Show this section on the website</span>
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
            {saving ? <Loader2 size={18} className="animate-spin" /> : <><Save size={18} /> Save Changes</>}
          </button>
        </div>
      </form>
    </div>
  )
}
