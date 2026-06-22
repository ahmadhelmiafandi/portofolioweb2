'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit2, Trash2, Loader2, Calendar, Clock, CheckCircle2, XCircle } from 'lucide-react'
import { AdminPageHeader } from '@/components/admin/AdminPageHeader'
import { CollapsibleSection } from '@/components/admin/CollapsibleSection'
import { TableSkeleton } from '@/components/admin/SkeletonLoader'
import { ConfirmDialog } from '@/components/admin/ConfirmDialog'
import { useToast } from '@/components/admin/Toast'

interface Experience {
  id: string
  title_en: string
  title_id: string
  company: string
  location?: string | null
  start_date: string
  end_date?: string | null
  description_en: string
  description_id: string
  published: boolean
  order: number
}

export default function AdminExperiencePage() {
  const { toast } = useToast()
  const [data, setData] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [current, setCurrent] = useState<Partial<Experience> | null>(null)
  const [saving, setSaving] = useState(false)

  // Confirm Delete Dialog State
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [deleteLoading, setDeleteLoading] = useState(false)

  const fetchItems = async () => {
    try {
      const res = await fetch('/api/experience')
      const json = await res.json()
      if (Array.isArray(json)) {
        // Sort experiences by order (asc) then start_date (desc) as fallback
        setData(json.sort((a, b) => {
          if (a.order !== b.order) return a.order - b.order
          return new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
        }))
      }
    } catch {
      toast('Failed to load experiences.', 'error')
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
        toast(`Experience ${current?.id ? 'updated' : 'created'} successfully!`, 'success')
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

  const handleDeleteConfirm = async () => {
    if (!deleteId) return
    setDeleteLoading(true)
    try {
      const res = await fetch(`/api/experience/${deleteId}`, { method: 'DELETE' })
      if (res.ok) {
        toast('Experience deleted successfully!', 'success')
        fetchItems()
      } else {
        toast('Failed to delete experience.', 'error')
      }
    } catch {
      toast('Error deleting experience.', 'error')
    } finally {
      setDeleteLoading(false)
      setDeleteId(null)
    }
  }

  const formatDate = (dateStr?: string | null) => {
    if (!dateStr) return 'Present'
    return new Date(dateStr).toLocaleDateString('id-ID', { year: 'numeric', month: 'short' })
  }

  if (loading) return <TableSkeleton cols={4} rows={5} />

  return (
    <div>
      <AdminPageHeader 
        title="Experience" 
        description="Manage your professional career timeline and work history." 
        icon={Clock} 
        action={
          <button 
            onClick={() => { setCurrent({ start_date: new Date().toISOString().split('T')[0], order: 0, published: true }); setIsModalOpen(true); }}
            className="btn-primary"
          >
            <Plus size={16} /> Add Experience
          </button>
        }
      />

      <div className="card" style={{ padding: '0', overflow: 'hidden', marginBottom: '40px' }}>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Period</th>
                <th>Company & Location</th>
                <th>Role (ID / EN)</th>
                <th>Status</th>
                <th>Order</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
                    No experience records found.
                  </td>
                </tr>
              ) : data.map(item => (
                <tr key={item.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                      <Calendar size={14} /> 
                      {formatDate(item.start_date)} - {formatDate(item.end_date)}
                    </div>
                  </td>
                  <td>
                    <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{item.company}</div>
                    {item.location && <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.location}</div>}
                  </td>
                  <td>
                    <div style={{ fontWeight: '500', color: 'var(--text-primary)' }}>{item.title_id}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.title_en}</div>
                  </td>
                  <td>
                    {item.published ? (
                      <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: '500' }}>
                        <CheckCircle2 size={13} /> Published
                      </span>
                    ) : (
                      <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}>
                        <XCircle size={13} /> Draft
                      </span>
                    )}
                  </td>
                  <td style={{ fontWeight: '600', fontFamily: 'monospace' }}>{item.order}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button 
                        onClick={() => { setCurrent(item); setIsModalOpen(true); }} 
                        style={{ color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer' }}
                        aria-label="Edit experience"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button 
                        onClick={() => setDeleteId(item.id)} 
                        style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}
                        aria-label="Delete experience"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit/New Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal" style={{ maxWidth: '750px', width: '100%', animation: 'modal-enter 0.2s ease-out' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '800', fontFamily: 'Outfit, sans-serif' }}>
                Experience Details
              </h2>
              <button 
                type="button" 
                onClick={() => setIsModalOpen(false)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '20px' }}
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Indonesian Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', background: 'var(--surface-2)', borderRadius: '10px', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Konten Utama (ID)</span>
                <div>
                  <label className="label">Title / Role (ID)</label>
                  <input className="input" required value={current?.title_id || ''} onChange={(e) => setCurrent({ ...current, title_id: e.target.value })} />
                </div>

                <div>
                  <label className="label">Description (ID)</label>
                  <textarea className="input" style={{ height: '90px', resize: 'vertical' }} required value={current?.description_id || ''} onChange={(e) => setCurrent({ ...current, description_id: e.target.value })} />
                </div>
              </div>

              {/* English Collapsible Overrides */}
              <CollapsibleSection title="English Translation Overrides">
                <div>
                  <label className="label">Title / Role (EN)</label>
                  <input className="input" value={current?.title_en || ''} onChange={(e) => setCurrent({ ...current, title_en: e.target.value })} placeholder="Leave blank for auto-translation" />
                </div>

                <div>
                  <label className="label">Description (EN)</label>
                  <textarea className="input" style={{ height: '90px', resize: 'vertical' }} value={current?.description_en || ''} onChange={(e) => setCurrent({ ...current, description_en: e.target.value })} placeholder="Leave blank for auto-translation" />
                </div>
              </CollapsibleSection>

              {/* Company Info */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label className="label">Company Name</label>
                  <input className="input" required value={current?.company || ''} onChange={(e) => setCurrent({ ...current, company: e.target.value })} />
                </div>
                <div>
                  <label className="label">Location</label>
                  <input className="input" value={current?.location || ''} onChange={(e) => setCurrent({ ...current, location: e.target.value })} placeholder="e.g. Jakarta, Remote" />
                </div>
              </div>

              {/* Dates */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label className="label">Start Date</label>
                  <input type="date" className="input" required value={current?.start_date?.split('T')[0] || ''} onChange={(e) => setCurrent({ ...current, start_date: e.target.value })} />
                </div>
                <div>
                  <label className="label">End Date (Leave empty for Present)</label>
                  <input type="date" className="input" value={current?.end_date?.split('T')[0] || ''} onChange={(e) => setCurrent({ ...current, end_date: e.target.value || null })} />
                </div>
              </div>

              {/* Layout Order & Publishing */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label className="label">Sort Order</label>
                  <input 
                    type="number" className="input" required
                    value={current?.order ?? 0}
                    onChange={(e) => setCurrent({ ...current, order: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0 0' }}>
                  <div>
                    <label className="label" style={{ marginBottom: '2px' }}>Publish Status</label>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Show in timeline</span>
                  </div>
                  <button 
                    type="button" 
                    className={`toggle ${current?.published ? 'on' : ''}`}
                    onClick={() => setCurrent({ ...current, published: !current?.published })}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '12px' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn-secondary" style={{ minHeight: '42px' }}>Cancel</button>
                <button type="submit" disabled={saving} className="btn-primary" style={{ minHeight: '42px' }}>
                  {saving ? <Loader2 size={16} className="animate-spin" /> : 'Save Experience'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Dialog */}
      <ConfirmDialog 
        isOpen={deleteId !== null}
        message="Are you sure you want to delete this experience record? This action is permanent and cannot be undone."
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteId(null)}
        loading={deleteLoading}
      />
    </div>
  )
}
