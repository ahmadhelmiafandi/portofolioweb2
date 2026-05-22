'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit2, Trash2, Loader2, Calendar } from 'lucide-react'
import { useToast } from '@/components/admin/Toast'

interface Experience {
  id: string
  title_en: string
  title_id: string
  company: string
  location?: string
  start_date: string
  end_date?: string
  description_en: string
  description_id: string
}

export default function AdminExperiencePage() {
  const { toast } = useToast()
  const [data, setData] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [current, setCurrent] = useState<Partial<Experience> | null>(null)
  const [saving, setSaving] = useState(false)

  const fetchItems = async () => {
    try {
      const res = await fetch('/api/experience')
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
    const url = current?.id ? `/api/experience/${current.id}` : '/api/experience'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(current)
      })
      
      const json = await res.json()
      
      if (res.ok) {
        setIsModalOpen(false)
        fetchItems()
      } else {
        toast('Error: ' + (json.message || json.error || 'Failed to save'), 'error')
      }
    } catch (err: any) {
      toast('Network Error: ' + err.message, 'error')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '800', fontFamily: 'Syne', marginBottom: '4px' }}>Experience</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Your professional career timeline.</p>
        </div>
        <button 
          onClick={() => { setCurrent({ start_date: new Date().toISOString().split('T')[0] }); setIsModalOpen(true); }}
          className="btn-primary"
        >
          <Plus size={18} /> Add Experience
        </button>
      </div>

      <div className="card" style={{ padding: '0' }}>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Period</th>
                <th>Company</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={4} style={{ textAlign: 'center', padding: '40px' }}><Loader2 className="animate-spin" style={{ margin: '0 auto' }} /></td></tr>
              ) : data.map(item => (
                <tr key={item.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
                      <Calendar size={14} /> {new Date(item.start_date).toLocaleDateString()} - {item.end_date ? new Date(item.end_date).toLocaleDateString() : 'Present'}
                    </div>
                  </td>
                  <td style={{ fontWeight: '600' }}>{item.company}</td>
                  <td>{item.title_en}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button onClick={() => { setCurrent(item); setIsModalOpen(true); }} style={{ color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer' }}><Edit2 size={16} /></button>
                      <button onClick={async () => { if(confirm('Delete?')) { await fetch(`/api/experience/${item.id}`, { method: 'DELETE' }); fetchItems(); } }} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}><Trash2 size={16} /></button>
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
          <div className="modal" style={{ maxWidth: '700px' }}>
            <h2 style={{ marginBottom: '24px', fontFamily: 'Syne' }}>Experience Details</h2>
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>Title (ID)</label>
                <input className="input" required value={current?.title_id || ''} onChange={(e) => setCurrent({ ...current, title_id: e.target.value })} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>Company</label>
                  <input className="input" required value={current?.company || ''} onChange={(e) => setCurrent({ ...current, company: e.target.value })} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>Location</label>
                  <input className="input" value={current?.location || ''} onChange={(e) => setCurrent({ ...current, location: e.target.value })} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>Start Date</label>
                  <input type="date" className="input" required value={current?.start_date?.split('T')[0] || ''} onChange={(e) => setCurrent({ ...current, start_date: e.target.value })} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>End Date (leave empty for Present)</label>
                  <input type="date" className="input" value={current?.end_date?.split('T')[0] || ''} onChange={(e) => setCurrent({ ...current, end_date: e.target.value })} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>Description (ID)</label>
                <textarea className="input" style={{ height: '80px' }} required value={current?.description_id || ''} onChange={(e) => setCurrent({ ...current, description_id: e.target.value })} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '10px' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn-secondary">Cancel</button>
                <button type="submit" disabled={saving} className="btn-primary">
                  {saving ? <Loader2 size={16} className="animate-spin" /> : 'Save Item'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
