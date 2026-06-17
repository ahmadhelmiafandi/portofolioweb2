'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit2, Trash2, Loader2 } from 'lucide-react'

interface Skill {
  id: string; name: string; level: number
  category: string; icon?: string; published: boolean; order: number
}

// Popular devicon names for autocomplete hint
const ICON_SUGGESTIONS = [
  'react','nextjs','typescript','javascript','html5','css3','tailwindcss',
  'nodejs','express','python','laravel','php','flutter','dart',
  'postgresql','mysql','mongodb','redis','prisma',
  'git','github','docker','figma','linux','vscode','firebase','supabase',
]

function IconPreview({ icon }: { icon: string }) {
  const name = icon.toLowerCase().replace(/[\s/.]/g, '')
  if (!name) return <span style={{ fontSize: 20, color: 'var(--text-muted)' }}>?</span>
  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`}
      alt={name}
      width={28} height={28}
      style={{ objectFit: 'contain' }}
      onError={(e) => {
        const t = e.currentTarget
        if (!t.src.includes('-plain')) {
          t.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-plain.svg`
        } else {
          t.style.display = 'none'
        }
      }}
    />
  )
}

export default function AdminSkillsPage() {
  const [skills, setSkills]       = useState<Skill[]>([])
  const [loading, setLoading]     = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [current, setCurrent]     = useState<Partial<Skill> | null>(null)
  const [saving, setSaving]       = useState(false)
  const [iconPreview, setIconPreview] = useState('')

  const fetch_ = async () => {
    try {
      const res = await fetch('/api/skills')
      const data = await res.json()
      setSkills(Array.isArray(data) ? data : [])
    } finally { setLoading(false) }
  }

  useEffect(() => { fetch_() }, [])

  const openNew = () => {
    setCurrent({ name: '', level: 80, category: 'Frontend', icon: '', published: true, order: 0 })
    setIconPreview('')
    setIsModalOpen(true)
  }

  const openEdit = (s: Skill) => {
    setCurrent(s)
    setIconPreview(s.icon || '')
    setIsModalOpen(true)
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    const method = current?.id ? 'PATCH' : 'POST'
    const url    = current?.id ? `/api/skills/${current.id}` : '/api/skills'
    try {
      await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(current) })
      setIsModalOpen(false)
      fetch_()
    } finally { setSaving(false) }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Hapus skill ini?')) return
    await fetch(`/api/skills/${id}`, { method: 'DELETE' })
    fetch_()
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 800, fontFamily: 'Outfit', marginBottom: 4 }}>Skills</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Kelola keahlian teknis. Isi field Icon dengan nama devicon.</p>
        </div>
        <button onClick={openNew} className="btn-primary"><Plus size={18} /> Add Skill</button>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Icon</th>
                <th>Name</th>
                <th>Category</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={6} style={{ textAlign: 'center', padding: 40 }}><Loader2 className="animate-spin" style={{ margin: '0 auto' }} /></td></tr>
              ) : skills.map(skill => (
                <tr key={skill.id}>
                  <td>
                    <div style={{ width: 36, height: 36, background: 'var(--surface-2)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {skill.icon ? <IconPreview icon={skill.icon} /> : <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-muted)' }}>{skill.name.charAt(0)}</span>}
                    </div>
                  </td>
                  <td style={{ fontWeight: 600 }}>{skill.name}</td>
                  <td><span className="tech-tag">{skill.category}</span></td>
                  <td style={{ fontSize: 13, color: skill.published ? '#10b981' : 'var(--text-muted)' }}>
                    {skill.published ? 'Published' : 'Draft'}
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button onClick={() => openEdit(skill)} style={{ color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer' }}><Edit2 size={16} /></button>
                      <button onClick={() => handleDelete(skill.id)} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal" style={{ maxWidth: 500 }}>
            <h2 style={{ marginBottom: 24, fontFamily: 'Outfit' }}>{current?.id ? 'Edit Skill' : 'New Skill'}</h2>
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

              <div>
                <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 600 }}>Skill Name</label>
                <input type="text" className="input" required
                  value={current?.name || ''}
                  onChange={e => setCurrent({ ...current, name: e.target.value })}
                />
              </div>

              {/* Icon field with preview */}
              <div>
                <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 600 }}>
                  Icon (Devicon name)
                </label>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <input type="text" className="input"
                    placeholder="e.g. react, laravel, flutter, postgresql"
                    value={current?.icon || ''}
                    onChange={e => {
                      setCurrent({ ...current, icon: e.target.value })
                      setIconPreview(e.target.value)
                    }}
                  />
                  {/* Live preview */}
                  <div style={{
                    width: 48, height: 48, flexShrink: 0,
                    background: 'var(--surface-2)', borderRadius: 10,
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {iconPreview
                      ? <IconPreview icon={iconPreview} />
                      : <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>preview</span>
                    }
                  </div>
                </div>
                {/* Suggestion chips */}
                <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {ICON_SUGGESTIONS.map(s => (
                    <button
                      key={s} type="button"
                      onClick={() => { setCurrent({ ...current, icon: s }); setIconPreview(s) }}
                      style={{
                        padding: '3px 10px', borderRadius: 9999, fontSize: 11,
                        cursor: 'pointer', border: '1px solid var(--border)',
                        background: current?.icon === s ? 'var(--accent-light)' : 'transparent',
                        color: current?.icon === s ? 'var(--accent)' : 'var(--text-muted)',
                        transition: 'var(--transition)',
                      }}
                    >{s}</button>
                  ))}
                </div>
                <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 8 }}>
                  Cari nama lengkap di{' '}
                  <a href="https://devicon.dev" target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--accent)' }}>devicon.dev</a>
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 600 }}>Category</label>
                  <input type="text" className="input" required
                    value={current?.category || ''}
                    onChange={e => setCurrent({ ...current, category: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <input type="checkbox" id="pub" checked={current?.published ?? true}
                  onChange={e => setCurrent({ ...current, published: e.target.checked })}
                />
                <label htmlFor="pub" style={{ fontSize: 14, cursor: 'pointer' }}>Published</label>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, paddingTop: 8 }}>
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn-secondary">Cancel</button>
                <button type="submit" disabled={saving} className="btn-primary">
                  {saving ? <Loader2 size={16} className="animate-spin" /> : 'Save Skill'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
