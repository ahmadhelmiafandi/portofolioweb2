'use client'

import { useState, useEffect } from 'react'
import { Save, Loader2, Mail, Phone, MapPin, MessageSquare } from 'lucide-react'
import { useToast } from '@/components/admin/Toast'

export default function AdminSettingsPage() {
  const { toast } = useToast()
  const [data, setData] = useState({
    email: '',
    phone: '',
    location: '',
    title_en: '',
    title_id: '',
    desc_en: '',
    desc_id: '',
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving]   = useState(false)

  useEffect(() => {
    fetch('/api/contact')
      .then(res => res.json())
      .then(json => {
        setData({
          email:    json?.email    ?? '',
          phone:    json?.phone    ?? '',
          location: json?.location ?? '',
          title_en: json?.title_en ?? '',
          title_id: json?.title_id ?? '',
          desc_en:  json?.desc_en  ?? '',
          desc_id:  json?.desc_id  ?? '',
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
      if (res.ok) toast('Tersimpan!', 'success')
      else toast('Gagal menyimpan', 'error')
    } catch {
      toast('Error', 'error')
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
    <div style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '800', fontFamily: 'Outfit', marginBottom: '8px' }}>Contact & Header</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Kelola informasi kontak dan teks di section kontak.</p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

        {/* Informasi Kontak */}
        <div className="card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Mail size={18} color="var(--accent)" /> Informasi Kontak
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label className="label">Email</label>
              <input className="input" type="email"
                value={data.email}
                onChange={e => setData({ ...data, email: e.target.value })}
                placeholder="helmi@example.com"
              />
            </div>
            <div>
              <label className="label">Nomor Telepon / WhatsApp</label>
              <input className="input"
                value={data.phone}
                onChange={e => setData({ ...data, phone: e.target.value })}
                placeholder="+62 812 3456 7890"
              />
            </div>
            <div>
              <label className="label">Lokasi</label>
              <input className="input"
                value={data.location}
                onChange={e => setData({ ...data, location: e.target.value })}
                placeholder="Jakarta, Indonesia"
              />
            </div>
          </div>
        </div>

        {/* Teks Section Contact */}
        <div className="card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <MessageSquare size={18} color="var(--accent)" /> Teks Section Kontak
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label className="label">Judul (Indonesia)</label>
                <input className="input"
                  value={data.title_id}
                  onChange={e => setData({ ...data, title_id: e.target.value })}
                  placeholder="Mari Bicara"
                />
              </div>
              <div>
                <label className="label">Judul (English)</label>
                <input className="input"
                  value={data.title_en}
                  onChange={e => setData({ ...data, title_en: e.target.value })}
                  placeholder="Let's Talk"
                />
              </div>
            </div>
            <div>
              <label className="label">Deskripsi (Indonesia)</label>
              <textarea className="input" style={{ height: '80px', resize: 'vertical' }}
                value={data.desc_id}
                onChange={e => setData({ ...data, desc_id: e.target.value })}
                placeholder="Saya selalu terbuka untuk peluang baru..."
              />
            </div>
            <div>
              <label className="label">Deskripsi (English)</label>
              <textarea className="input" style={{ height: '80px', resize: 'vertical' }}
                value={data.desc_en}
                onChange={e => setData({ ...data, desc_en: e.target.value })}
                placeholder="I'm always open to new opportunities..."
              />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="submit" disabled={saving} className="btn-primary" style={{ padding: '12px 28px', minHeight: '48px' }}>
            {saving ? <Loader2 size={18} className="animate-spin" /> : <><Save size={18} /> Simpan</>}
          </button>
        </div>
      </form>
    </div>
  )
}
