'use client'

import { useState, useEffect } from 'react'
import { Save, Loader2, Mail, MessageSquare, Copyright, FileText, Settings } from 'lucide-react'
import { AdminPageHeader } from '@/components/admin/AdminPageHeader'
import { FormSkeleton } from '@/components/admin/SkeletonLoader'
import { useToast } from '@/components/admin/Toast'

type TabType = 'contact' | 'texts' | 'footer' | 'cv'

export default function AdminSettingsPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState<TabType>('contact')
  const [data, setData] = useState({
    email: '',
    phone: '',
    location: '',
    site_name: '',
    title_en: '',
    title_id: '',
    desc_en: '',
    desc_id: '',
    footer_copy: '',
    footer_made: '',
    portfolio_extra_en: '',
    portfolio_extra_id: '',
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch('/api/contact')
      .then(res => res.json())
      .then(json => {
        setData({
          email:              json?.email              ?? '',
          phone:              json?.phone              ?? '',
          location:           json?.location           ?? '',
          site_name:          json?.site_name          ?? 'Ahmad Helmi Afandi',
          title_en:           json?.title_en           ?? '',
          title_id:           json?.title_id           ?? '',
          desc_en:            json?.desc_en            ?? '',
          desc_id:            json?.desc_id            ?? '',
          footer_copy:        json?.footer_copy        ?? '',
          footer_made:        json?.footer_made        ?? '',
          portfolio_extra_en: json?.portfolio_extra_en ?? '',
          portfolio_extra_id: json?.portfolio_extra_id ?? '',
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
      if (res.ok) {
        toast('Settings updated successfully!', 'success')
      } else {
        toast('Failed to save settings.', 'error')
      }
    } catch {
      toast('Network error occurred.', 'error')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <FormSkeleton />

  const tabs: { id: TabType; label: string; icon: any }[] = [
    { id: 'contact', label: 'Contact & Brand', icon: Mail },
    { id: 'texts',   label: 'Contact Section Texts', icon: MessageSquare },
    { id: 'footer',  label: 'Footer Copyright', icon: Copyright },
    { id: 'cv',      label: 'CV A4 Resume Extra', icon: FileText },
  ]

  return (
    <div style={{ maxWidth: '850px' }}>
      <AdminPageHeader 
        title="Settings" 
        description="Unified configuration for your site branding, contact coordinates, footer copyright, and printed CV details." 
        icon={Settings} 
      />

      {/* Tabs list */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid var(--border)',
        marginBottom: '32px',
        gap: '8px',
        overflowX: 'auto',
        paddingBottom: '2px'
      }}>
        {tabs.map(tab => {
          const Icon = tab.icon
          const active = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                border: 'none',
                background: 'none',
                color: active ? 'var(--accent)' : 'var(--text-secondary)',
                borderBottom: active ? '2px solid var(--accent)' : '2px solid transparent',
                fontWeight: active ? '600' : '500',
                fontSize: '14px',
                cursor: 'pointer',
                fontFamily: 'Outfit, sans-serif',
                whiteSpace: 'nowrap',
                transition: 'var(--transition)'
              }}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          )
        })}
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* TAB 1: Contact Info & Brand */}
        {activeTab === 'contact' && (
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
              Informasi Kontak & Brand
            </h3>

            <div>
              <label className="label">Site Name (Logo / Header Text)</label>
              <input 
                className="input" 
                type="text"
                value={data.site_name}
                onChange={e => setData({ ...data, site_name: e.target.value })}
                placeholder="Ahmad Helmi Afandi"
                required
              />
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>Teks logo nama yang tampil di bagian atas kiri header website (navbar).</p>
            </div>

            <div>
              <label className="label">Email Address</label>
              <input 
                className="input" 
                type="email"
                value={data.email}
                onChange={e => setData({ ...data, email: e.target.value })}
                placeholder="helmi@example.com"
                required
              />
            </div>

            <div>
              <label className="label">WhatsApp Number / Phone</label>
              <input 
                className="input"
                value={data.phone}
                onChange={e => setData({ ...data, phone: e.target.value })}
                placeholder="6282323609362"
                required
              />
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>Gunakan kode negara di depan tanpa "+" (contoh: 6282323609362) agar tombol WhatsApp berfungsi lancar.</p>
            </div>

            <div>
              <label className="label">Location</label>
              <input 
                className="input"
                value={data.location}
                onChange={e => setData({ ...data, location: e.target.value })}
                placeholder="Jakarta, Indonesia"
              />
            </div>
          </div>
        )}

        {/* TAB 2: Contact Section Texts */}
        {activeTab === 'texts' && (
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
              Teks Section Kontak
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label className="label">Judul (Indonesia)</label>
                <input 
                  className="input"
                  value={data.title_id}
                  onChange={e => setData({ ...data, title_id: e.target.value })}
                  placeholder="Mari Bicara"
                  required
                />
              </div>
              <div>
                <label className="label">Judul (English)</label>
                <input 
                  className="input"
                  value={data.title_en}
                  onChange={e => setData({ ...data, title_en: e.target.value })}
                  placeholder="Let's Talk"
                />
              </div>
            </div>

            <div>
              <label className="label">Deskripsi (Indonesia)</label>
              <textarea 
                className="input" 
                style={{ height: '80px', resize: 'vertical' }}
                value={data.desc_id}
                onChange={e => setData({ ...data, desc_id: e.target.value })}
                placeholder="Saya selalu terbuka untuk peluang baru..."
                required
              />
            </div>

            <div>
              <label className="label">Deskripsi (English)</label>
              <textarea 
                className="input" 
                style={{ height: '80px', resize: 'vertical' }}
                value={data.desc_en}
                onChange={e => setData({ ...data, desc_en: e.target.value })}
                placeholder="I'm always open to new opportunities..."
              />
            </div>
          </div>
        )}

        {/* TAB 3: Footer Copyright */}
        {activeTab === 'footer' && (
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
              Teks Hak Cipta (Footer)
            </h3>
            
            <div>
              <label className="label">Copyright Text (Bahasa Indonesia)</label>
              <input
                className="input"
                value={data.footer_copy}
                onChange={e => setData({ ...data, footer_copy: e.target.value })}
                placeholder="© 2026 Helmi. Hak cipta dilindungi."
                required
              />
            </div>

            <div>
              <label className="label">Copyright Text (English)</label>
              <input
                className="input"
                value={data.footer_made}
                onChange={e => setData({ ...data, footer_made: e.target.value })}
                placeholder="© 2026 Helmi. All rights reserved."
              />
            </div>
          </div>
        )}

        {/* TAB 4: CV A4 Resume Info */}
        {activeTab === 'cv' && (
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ marginBottom: '8px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
                Informasi Tambahan CV / A4 Resume
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Informasi ini ditampilkan khusus pada lembar cetak resume PDF (/portfolio). Format: "Label: Nilai" per baris.
              </p>
            </div>

            <div>
              <label className="label">Informasi Tambahan (Indonesia)</label>
              <textarea
                className="input"
                style={{ height: '120px', fontFamily: 'monospace', fontSize: '13px' }}
                value={data.portfolio_extra_id}
                onChange={e => setData({ ...data, portfolio_extra_id: e.target.value })}
                placeholder="Bahasa: Indonesia (Native), Inggris (Profesional)"
              />
            </div>

            <div>
              <label className="label">Informasi Tambahan (English)</label>
              <textarea
                className="input"
                style={{ height: '120px', fontFamily: 'monospace', fontSize: '13px' }}
                value={data.portfolio_extra_en}
                onChange={e => setData({ ...data, portfolio_extra_en: e.target.value })}
                placeholder="Languages: Indonesian (Native), English (Professional)"
              />
            </div>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
          <button type="submit" disabled={saving} className="btn-primary" style={{ padding: '12px 28px', minHeight: '48px' }}>
            {saving ? <Loader2 size={18} className="animate-spin" /> : <><Save size={18} /> Simpan Pengaturan</>}
          </button>
        </div>
      </form>
    </div>
  )
}
