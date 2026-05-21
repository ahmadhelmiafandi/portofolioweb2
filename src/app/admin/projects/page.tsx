'use client'

import { useState, useEffect } from 'react'
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  ExternalLink,
  GitBranch,
  Loader2,
  CheckCircle2,
  XCircle,
  Star,
  Upload
} from 'lucide-react'
import { ImageUpload } from '@/components/admin/ImageUpload'

interface Project {
  id: string
  title_en: string
  title_id: string
  description_en: string
  description_id: string
  image?: string
  tech_stack: string[]
  link?: string
  github?: string
  category: string
  featured: boolean
  published: boolean
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<Partial<Project> | null>(null)
  const [saving, setSaving] = useState(false)

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects')
      const data = await res.json()
      setProjects(data)
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

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentProject)
      })
      if (res.ok) {
        setIsModalOpen(false)
        fetchProjects()
      }
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return
    await fetch(`/api/projects/${id}`, { method: 'DELETE' })
    fetchProjects()
  }

  const filtered = projects.filter(p => 
    p.title_en.toLowerCase().includes(search.toLowerCase()) || 
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '800', fontFamily: 'Syne', marginBottom: '4px' }}>Projects</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Manage your portfolio works and case studies.</p>
        </div>
        <button 
          onClick={() => { setCurrentProject({ tech_stack: [], featured: false, published: true, category: 'Web' }); setIsModalOpen(true); }}
          className="btn-primary"
        >
          <Plus size={18} /> Add Project
        </button>
      </div>

      <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid var(--border)', display: 'flex', gap: '12px' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              className="input" 
              placeholder="Search projects..." 
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
                <th>Featured</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', padding: '40px' }}>
                    <Loader2 size={24} className="animate-spin" style={{ margin: '0 auto' }} />
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                    No projects found.
                  </td>
                </tr>
              ) : filtered.map(project => (
                <tr key={project.id}>
                  <td>
                    <div style={{ width: '64px', height: '40px', borderRadius: '4px', overflow: 'hidden', background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                      {project.image ? (
                        <img src={project.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '10px' }}>No Img</div>
                      )}
                    </div>
                  </td>
                  <td>
                    <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{project.title_en}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{project.title_id}</div>
                  </td>
                  <td><span className="tech-tag">{project.category}</span></td>
                  <td>
                    {project.published ? (
                      <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}>
                        <CheckCircle2 size={14} /> Published
                      </span>
                    ) : (
                      <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}>
                        <XCircle size={14} /> Draft
                      </span>
                    )}
                  </td>
                  <td>
                    {project.featured && <Star size={14} fill="#f59e0b" color="#f59e0b" />}
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button onClick={() => { setCurrentProject(project); setIsModalOpen(true); }} style={{ color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer' }}><Edit2 size={16} /></button>
                      <button onClick={() => handleDelete(project.id)} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal" style={{ maxWidth: '800px' }}>
            <h2 style={{ marginBottom: '24px', fontFamily: 'Syne' }}>{currentProject?.id ? 'Edit Project' : 'New Project'}</h2>
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Title (ID)</label>
                <input 
                  type="text" className="input" required 
                  value={currentProject?.title_id || ''}
                  onChange={(e) => setCurrentProject({ ...currentProject, title_id: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Description (ID)</label>
                <textarea 
                  className="input" style={{ height: '100px' }} required 
                  value={currentProject?.description_id || ''}
                  onChange={(e) => setCurrentProject({ ...currentProject, description_id: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Category</label>
                  <input 
                    type="text" className="input" 
                    value={currentProject?.category || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, category: e.target.value })}
                  />
                </div>
                <div style={{ gridColumn: 'span 1' }}>
                  <ImageUpload 
                    label="Project Image"
                    value={currentProject?.image || ''} 
                    onChange={(url) => setCurrentProject({ ...currentProject, image: url })} 
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Live Link</label>
                  <input 
                    type="text" className="input" 
                    value={currentProject?.link || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, link: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>GitHub Link</label>
                  <input 
                    type="text" className="input" 
                    value={currentProject?.github || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, github: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Tech Stack (comma separated)</label>
                <input 
                  type="text" className="input" 
                  value={currentProject?.tech_stack?.join(', ') || ''}
                  onChange={(e) => setCurrentProject({ ...currentProject, tech_stack: e.target.value.split(',').map(s => s.trim()) })}
                />
              </div>

              <div style={{ display: 'flex', gap: '24px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={currentProject?.featured || false}
                    onChange={(e) => setCurrentProject({ ...currentProject, featured: e.target.checked })}
                  /> Featured Project
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={currentProject?.published || false}
                    onChange={(e) => setCurrentProject({ ...currentProject, published: e.target.checked })}
                  /> Published
                </label>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '12px' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn-secondary">Cancel</button>
                <button type="submit" disabled={saving} className="btn-primary">
                  {saving ? <Loader2 size={16} className="animate-spin" /> : 'Save Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
