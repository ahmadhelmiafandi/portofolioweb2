'use client'

import { useState, useEffect } from 'react'
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  Loader2, 
  CheckCircle2, 
  XCircle, 
  Star,
  Briefcase
} from 'lucide-react'
import { ImageUpload } from '@/components/admin/ImageUpload'
import { AdminPageHeader } from '@/components/admin/AdminPageHeader'
import { CollapsibleSection } from '@/components/admin/CollapsibleSection'
import { TableSkeleton } from '@/components/admin/SkeletonLoader'
import { ConfirmDialog } from '@/components/admin/ConfirmDialog'
import { useToast } from '@/components/admin/Toast'

interface Project {
  id: string
  title_en: string
  title_id: string
  description_en: string
  description_id: string
  image?: string | null
  tech_stack: string[]
  link?: string | null
  github?: string | null
  category: string
  featured: boolean
  published: boolean
  order: number
}

export default function AdminProjectsPage() {
  const { toast } = useToast()
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<Partial<Project> | null>(null)
  const [saving, setSaving] = useState(false)
  const [techStackText, setTechStackText] = useState('')
  
  // Confirm Delete Dialog State
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [deleteLoading, setDeleteLoading] = useState(false)

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects')
      const data = await res.json()
      if (Array.isArray(data)) {
        setProjects(data)
      }
    } catch {
      toast('Failed to load projects.', 'error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchProjects() }, [])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    const method = currentProject?.id ? 'PATCH' : 'POST'
    const url = currentProject?.id ? `/api/projects/${currentProject.id}` : '/api/projects'

    // Combine tech_stack chips array with any pending text in input and deduplicate
    const pendingTag = techStackText.trim()
    const pendingTags = pendingTag ? pendingTag.split(',').map(s => s.trim()).filter(Boolean) : []
    const rawStack = [...(currentProject?.tech_stack || []), ...pendingTags]
    const finalTechStack = Array.from(new Set(
      rawStack.flatMap(item => String(item).split(',')).map(s => s.trim()).filter(Boolean)
    ))

    const projectData = {
      ...currentProject,
      tech_stack: finalTechStack
    }

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectData)
      })
      if (res.ok) {
        toast(`Project ${currentProject?.id ? 'updated' : 'created'} successfully!`, 'success')
        setIsModalOpen(false)
        fetchProjects()
      } else {
        toast('Failed to save project.', 'error')
      }
    } catch {
      toast('Error saving project.', 'error')
    } finally {
      setSaving(false)
    }
  }

  const handleDeleteConfirm = async () => {
    if (!deleteId) return
    setDeleteLoading(true)
    try {
      const res = await fetch(`/api/projects/${deleteId}`, { method: 'DELETE' })
      if (res.ok) {
        toast('Project deleted successfully!', 'success')
        fetchProjects()
      } else {
        toast('Failed to delete project.', 'error')
      }
    } catch {
      toast('Error deleting project.', 'error')
    } finally {
      setDeleteLoading(false)
      setDeleteId(null)
    }
  }

  const filtered = projects.filter(p => 
    (p.title_id || '').toLowerCase().includes(search.toLowerCase()) || 
    (p.title_en || '').toLowerCase().includes(search.toLowerCase()) || 
    (p.category || '').toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <TableSkeleton cols={6} rows={5} />

  return (
    <div>
      <AdminPageHeader 
        title="Projects" 
        description="Manage your portfolio works, categories, and technologies." 
        icon={Briefcase}
        action={
          <button 
            onClick={() => { setCurrentProject({ tech_stack: [], featured: false, published: true, category: 'Web', order: 0 }); setTechStackText(''); setIsModalOpen(true); }}
            className="btn-primary"
          >
            <Plus size={16} /> Add Project
          </button>
        }
      />

      <div className="card" style={{ padding: '0', overflow: 'hidden', marginBottom: '40px' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid var(--border)', display: 'flex', gap: '12px' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              className="input" 
              placeholder="Search projects by title or category..." 
              style={{ paddingLeft: '40px' }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Order</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
                    No projects found.
                  </td>
                </tr>
              ) : filtered.map(project => (
                <tr key={project.id}>
                  <td>
                    <div style={{ width: '64px', height: '40px', borderRadius: '6px', overflow: 'hidden', background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                      {project.image ? (
                        <img src={project.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '10px' }}>No Img</div>
                      )}
                    </div>
                  </td>
                  <td>
                    <div style={{ fontWeight: '600', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {project.title_id}
                      {project.featured && <Star size={12} fill="#f59e0b" color="#f59e0b" />}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{project.title_en}</div>
                  </td>
                  <td><span className="tech-tag">{project.category}</span></td>
                  <td>
                    {project.published ? (
                      <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: '500' }}>
                        <CheckCircle2 size={13} /> Published
                      </span>
                    ) : (
                      <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}>
                        <XCircle size={13} /> Draft
                      </span>
                    )}
                  </td>
                  <td style={{ fontWeight: '600', fontFamily: 'monospace' }}>{project.order}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button 
                        onClick={() => { 
                          const rawStack = project.tech_stack || []
                          const cleanStack = Array.from(new Set(
                            rawStack.flatMap((item: string) => String(item).split(',')).map((s: string) => s.trim()).filter(Boolean)
                          ))
                          setCurrentProject({ ...project, tech_stack: cleanStack })
                          setTechStackText('')
                          setIsModalOpen(true)
                        }} 
                        style={{ color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer' }}
                        aria-label="Edit project"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button 
                        onClick={() => setDeleteId(project.id)} 
                        style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}
                        aria-label="Delete project"
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
        <div className="modal-overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="modal" style={{ maxWidth: '800px', width: '100%', animation: 'modal-enter 0.2s ease-out' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '800', fontFamily: 'Outfit, sans-serif' }}>
                {currentProject?.id ? 'Edit Project' : 'New Project'}
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
              {/* Indonesian Fields */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', background: 'var(--surface-2)', borderRadius: '10px', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Konten Utama (ID)</span>
                <div>
                  <label className="label">Title (ID)</label>
                  <input 
                    type="text" className="input" required 
                    value={currentProject?.title_id || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, title_id: e.target.value })}
                  />
                </div>

                <div>
                  <label className="label">Description (ID)</label>
                  <textarea 
                    className="input" style={{ height: '90px', resize: 'vertical' }} required 
                    value={currentProject?.description_id || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, description_id: e.target.value })}
                  />
                </div>
              </div>

              {/* English Collapsible Fields */}
              <CollapsibleSection title="English Translation Overrides">
                <div>
                  <label className="label">Title (EN)</label>
                  <input 
                    type="text" className="input" 
                    value={currentProject?.title_en || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, title_en: e.target.value })}
                    placeholder="Leave blank for auto-translation"
                  />
                </div>

                <div>
                  <label className="label">Description (EN)</label>
                  <textarea 
                    className="input" style={{ height: '90px', resize: 'vertical' }} 
                    value={currentProject?.description_en || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, description_en: e.target.value })}
                    placeholder="Leave blank for auto-translation"
                  />
                </div>
              </CollapsibleSection>

              {/* Stack & Links */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label className="label">Category</label>
                  <input 
                    type="text" className="input" required
                    value={currentProject?.category || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, category: e.target.value })}
                    placeholder="Web, Mobile, Design, etc."
                  />
                </div>
                <div>
                  <label className="label">Sort Order</label>
                  <input 
                    type="number" className="input" required
                    value={currentProject?.order ?? 0}
                    onChange={(e) => setCurrentProject({ ...currentProject, order: parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label className="label">Live Demo URL</label>
                  <input 
                    type="text" className="input" 
                    value={currentProject?.link || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, link: e.target.value })}
                    placeholder="https://example.com"
                  />
                </div>
                <div>
                  <label className="label">GitHub Repository URL</label>
                  <input 
                    type="text" className="input" 
                    value={currentProject?.github || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, github: e.target.value })}
                    placeholder="https://github.com/username/project"
                  />
                </div>
              </div>

              <div>
                <label className="label">Tech Stack</label>
                <div 
                  className="input" 
                  style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '8px', 
                    alignItems: 'center', 
                    minHeight: '48px', 
                    padding: '8px 12px',
                    cursor: 'text'
                  }}
                  onClick={(e) => {
                    const inputEl = e.currentTarget.querySelector('input')
                    if (inputEl) inputEl.focus()
                  }}
                >
                  {(currentProject?.tech_stack || []).map((tech, idx) => (
                    <span 
                      key={idx} 
                      style={{ 
                        background: 'var(--accent-light)', 
                        color: 'var(--accent)', 
                        padding: '4px 10px', 
                        borderRadius: '6px', 
                        fontSize: '12px', 
                        fontWeight: '600',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      {tech}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          const updated = (currentProject?.tech_stack || []).filter((_, i) => i !== idx)
                          setCurrentProject({ ...currentProject, tech_stack: updated })
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--accent)',
                          cursor: 'pointer',
                          padding: 0,
                          fontSize: '14px',
                          lineHeight: 1,
                          fontWeight: 'bold'
                        }}
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                  <input 
                    type="text"
                    value={techStackText}
                    onChange={(e) => {
                      const val = e.target.value
                      if (val.includes(',')) {
                        const parts = val.split(',')
                        const newTags = parts.slice(0, -1).map(s => s.trim()).filter(Boolean)
                        const remainder = parts[parts.length - 1]
                        const currentTags = currentProject?.tech_stack || []
                        setCurrentProject({ ...currentProject, tech_stack: [...currentTags, ...newTags] })
                        setTechStackText(remainder)
                      } else {
                        setTechStackText(val)
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        if (techStackText.trim()) {
                          const currentTags = currentProject?.tech_stack || []
                          setCurrentProject({ ...currentProject, tech_stack: [...currentTags, techStackText.trim()] })
                          setTechStackText('')
                        }
                      } else if (e.key === 'Backspace' && !techStackText) {
                        const currentTags = currentProject?.tech_stack || []
                        if (currentTags.length > 0) {
                          setCurrentProject({ ...currentProject, tech_stack: currentTags.slice(0, -1) })
                        }
                      }
                    }}
                    onBlur={() => {
                      if (techStackText.trim()) {
                        const currentTags = currentProject?.tech_stack || []
                        setCurrentProject({ ...currentProject, tech_stack: [...currentTags, techStackText.trim()] })
                        setTechStackText('')
                      }
                    }}
                    placeholder={(currentProject?.tech_stack || []).length === 0 ? "Ketik teknologi lalu tekan Koma (,), Enter, atau Spasi..." : "Tambah lagi..."}
                    style={{ 
                      border: 'none', 
                      outline: 'none', 
                      background: 'transparent', 
                      color: 'var(--text-primary)', 
                      fontSize: '14px', 
                      flex: 1, 
                      minWidth: '160px',
                      padding: '4px 0' 
                    }}
                  />
                </div>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
                  Ketik nama teknologi (contoh: Next.js, Tailwind CSS) lalu tekan <strong>Koma (,)</strong> atau <strong>Enter</strong> untuk menambahkan tag.
                </span>
              </div>

              <div>
                <ImageUpload 
                  label="Project Cover Image"
                  value={currentProject?.image || ''} 
                  onChange={(url) => setCurrentProject({ ...currentProject, image: url })} 
                />
              </div>

              <div style={{ display: 'flex', gap: '24px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                  <input 
                    type="checkbox" 
                    checked={currentProject?.featured || false}
                    onChange={(e) => setCurrentProject({ ...currentProject, featured: e.target.checked })}
                    style={{ cursor: 'pointer' }}
                  /> Featured Project
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                  <input 
                    type="checkbox" 
                    checked={currentProject?.published || false}
                    onChange={(e) => setCurrentProject({ ...currentProject, published: e.target.checked })}
                    style={{ cursor: 'pointer' }}
                  /> Published
                </label>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '12px' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn-secondary" style={{ minHeight: '42px' }}>Cancel</button>
                <button type="submit" disabled={saving} className="btn-primary" style={{ minHeight: '42px' }}>
                  {saving ? <Loader2 size={16} className="animate-spin" /> : 'Save Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Dialog */}
      <ConfirmDialog 
        isOpen={deleteId !== null}
        message="Are you sure you want to delete this project? This action is permanent and cannot be undone."
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteId(null)}
        loading={deleteLoading}
      />
    </div>
  )
}
