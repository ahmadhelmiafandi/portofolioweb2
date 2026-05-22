'use client'

import { useState, useEffect } from 'react'
import { 
  Plus, Edit2, Trash2, Loader2, Globe, Link as LinkIcon,
  MessageCircle, Mail, Phone
} from 'lucide-react'
import {
  Github, Linkedin, Instagram, Twitter, Facebook, Youtube, Twitch, Whatsapp
} from '@/components/icons/BrandIcons'
import { useToast } from '@/components/admin/Toast'

interface Social {
  id: string
  name: string
  link: string
  icon?: string | null
}

// Icon options available for selection
const ICON_OPTIONS = [
  { value: 'github', label: 'GitHub', Icon: Github },
  { value: 'linkedin', label: 'LinkedIn', Icon: Linkedin },
  { value: 'instagram', label: 'Instagram', Icon: Instagram },
  { value: 'twitter', label: 'Twitter / X', Icon: Twitter },
  { value: 'facebook', label: 'Facebook', Icon: Facebook },
  { value: 'youtube', label: 'YouTube', Icon: Youtube },
  { value: 'whatsapp', label: 'WhatsApp', Icon: Whatsapp },
  { value: 'mail', label: 'Email', Icon: Mail },
  { value: 'twitch', label: 'Twitch', Icon: Twitch },
  { value: 'phone', label: 'Phone', Icon: Phone },
  { value: 'globe', label: 'Website', Icon: Globe },
  { value: 'link', label: 'Other Link', Icon: LinkIcon },
]

const ICON_MAP: Record<string, React.ElementType> = Object.fromEntries(
  ICON_OPTIONS.map(o => [o.value, o.Icon])
)

function getIconComponent(icon?: string | null, name?: string): React.ElementType {
  if (icon && ICON_MAP[icon.toLowerCase()]) return ICON_MAP[icon.toLowerCase()]
  if (name && ICON_MAP[name.toLowerCase()]) return ICON_MAP[name.toLowerCase()]
  return Globe
}

export default function AdminSocialsPage() {
  const { toast } = useToast()
  const [data, setData] = useState<Social[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [current, setCurrent] = useState<Partial<Social> | null>(null)
  const [saving, setSaving] = useState(false)

  const fetchItems = async () => {
    try {
      const res = await fetch('/api/socials')
      const json = await res.json()
      setData(Array.isArray(json) ? json : [])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchItems() }, [])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    const method = current?.id ? 'PATCH' : 'POST'
    const url = current?.id ? `/api/socials/${current.id}` : '/api/socials'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(current)
      })
      if (res.ok) {
        toast(current?.id ? 'Social link updated!' : 'Social link added!', 'success')
        setIsModalOpen(false)
        fetchItems()
      } else {
        toast('Failed to save social link', 'error')
      }
    } catch {
      toast('Network error occurred', 'error')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this social link?')) return
    try {
      const res = await fetch(`/api/socials/${id}`, { method: 'DELETE' })
      if (res.ok) {
        toast('Social link deleted', 'success')
        fetchItems()
      } else {
        toast('Failed to delete', 'error')
      }
    } catch {
      toast('Network error occurred', 'error')
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '800', fontFamily: 'Syne', marginBottom: '4px' }}>Social Links</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Connect your portfolio to your social platforms.</p>
        </div>
        <button 
          onClick={() => { setCurrent({ name: '', link: '', icon: 'globe' }); setIsModalOpen(true); }}
          className="btn-primary"
        >
          <Plus size={18} /> Add Link
        </button>
      </div>

      <div className="card" style={{ padding: '0' }}>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Platform</th>
                <th>Link</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={3} style={{ textAlign: 'center', padding: '40px' }}><Loader2 className="animate-spin" style={{ margin: '0 auto' }} /></td></tr>
              ) : data.length === 0 ? (
                <tr><td colSpan={3} style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>No social links added yet.</td></tr>
              ) : data.map(item => {
                const IconComp = getIconComponent(item.icon, item.name)
                return (
                  <tr key={item.id}>
                    <td style={{ fontWeight: '600' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: 32, height: 32,
                          borderRadius: 8,
                          background: 'var(--accent-light, rgba(99,102,241,0.1))',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <IconComp size={16} color="var(--accent)" />
                        </div>
                        {item.name}
                      </div>
                    </td>
                    <td>
                      <a href={item.link} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <LinkIcon size={12} /> {item.link}
                      </a>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button onClick={() => { setCurrent(item); setIsModalOpen(true); }} style={{ color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer' }}><Edit2 size={16} /></button>
                        <button onClick={() => handleDelete(item.id)} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 style={{ marginBottom: '24px', fontFamily: 'Syne' }}>Social Link</h2>
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>Platform Name (e.g. GitHub, LinkedIn)</label>
                <input className="input" required value={current?.name || ''} onChange={(e) => setCurrent({ ...current, name: e.target.value })} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>URL</label>
                <input className="input" required type="url" value={current?.link || ''} onChange={(e) => setCurrent({ ...current, link: e.target.value })} placeholder="https://..." />
              </div>

              {/* Icon Selector */}
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600' }}>Icon</label>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '8px',
                }}>
                  {ICON_OPTIONS.map(opt => {
                    const isSelected = (current?.icon || '').toLowerCase() === opt.value
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setCurrent({ ...current, icon: opt.value })}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '12px 4px',
                          border: isSelected ? '2px solid var(--accent)' : '2px solid var(--border)',
                          borderRadius: '10px',
                          background: isSelected ? 'var(--accent-light, rgba(99,102,241,0.08))' : 'var(--surface)',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          color: isSelected ? 'var(--accent)' : 'var(--text-secondary)',
                        }}
                      >
                        <opt.Icon size={20} />
                        <span style={{ fontSize: '10px', fontWeight: 600 }}>{opt.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '10px' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn-secondary">Cancel</button>
                <button type="submit" disabled={saving} className="btn-primary">
                  {saving ? <Loader2 size={16} className="animate-spin" /> : 'Save Link'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
