'use client'

import { useState, useEffect } from 'react'
import { Save, Loader2, Mail, Phone, MapPin, Copyright, Heart, MessageSquare } from 'lucide-react'
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
    footer_copy: '',
    footer_made: ''
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch('/api/contact')
      .then(res => res.json())
      .then(json => {
        setData(json || {
          email: '',
          phone: '',
          location: '',
          footer_copy: '',
          footer_made: ''
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
        body: JSON.stringify(data)
      })
      if (res.ok) toast('Settings saved successfully!', 'success')
      else toast('Failed to save settings', 'error')
    } catch (err) {
      toast('Error saving settings', 'error')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}><Loader2 className="animate-spin" /></div>

  return (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '800', fontFamily: 'Syne', marginBottom: '8px' }}>Contact & Site Settings</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Manage your contact info and footer text.</p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Contact section */}
        <div className="card" style={{ padding: '32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
            <Mail size={20} color="var(--accent)" /> Contact Information
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)' }}>Email Address</label>
              <input 
                className="input" 
                value={data.email || ''} 
                onChange={(e) => setData({ ...data, email: e.target.value })} 
                placeholder="helmi@example.com"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)' }}>Phone Number</label>
              <input 
                className="input" 
                value={data.phone || ''} 
                onChange={(e) => setData({ ...data, phone: e.target.value })} 
                placeholder="+62 812 3456 7890"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)' }}>Location</label>
              <input 
                className="input" 
                value={data.location || ''} 
                onChange={(e) => setData({ ...data, location: e.target.value })} 
                placeholder="Jakarta, Indonesia"
              />
            </div>
          </div>
        </div>

        {/* Contact Text section */}
        <div className="card" style={{ padding: '32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
            <MessageSquare size={20} color="var(--accent)" /> Contact Text & Description
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)' }}>Title (Indonesian)</label>
              <input 
                className="input" 
                value={data.title_id || ''} 
                onChange={(e) => setData({ ...data, title_id: e.target.value })} 
                placeholder="Mari Bicara"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)' }}>Description (Indonesian)</label>
              <textarea 
                className="input" 
                style={{ height: '80px' }}
                value={data.desc_id || ''} 
                onChange={(e) => setData({ ...data, desc_id: e.target.value })} 
              />
            </div>
          </div>
        </div>

        {/* Footer section */}
        <div className="card" style={{ padding: '32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
            <Copyright size={20} color="var(--accent)" /> Footer Settings
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)' }}>Copyright Text</label>
              <input 
                className="input" 
                placeholder="e.g. © 2026 Helmi. All rights reserved."
                value={data.footer_copy || ''} 
                onChange={(e) => setData({ ...data, footer_copy: e.target.value })} 
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)' }}>"Made with" Text</label>
              <input 
                className="input" 
                placeholder="e.g. Made with Next.js & Supabase"
                value={data.footer_made || ''} 
                onChange={(e) => setData({ ...data, footer_made: e.target.value })} 
              />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="submit" disabled={saving} className="btn-primary" style={{ padding: '12px 28px', height: 'auto', minHeight: '48px' }}>
            {saving ? <Loader2 size={20} className="animate-spin" /> : <><Save size={20} /> Save Settings</>}
          </button>
        </div>
      </form>
    </div>
  )
}
