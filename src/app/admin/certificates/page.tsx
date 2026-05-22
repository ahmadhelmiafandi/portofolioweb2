'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Edit2, Trash2, Award, Calendar, ExternalLink, ShieldCheck, X, ToggleLeft, ToggleRight } from 'lucide-react'
import { useToast } from '@/components/admin/Toast'

interface Certificate {
  id: string
  name: string
  issuer: string
  issue_date: string
  credential_id?: string | null
  link?: string | null
  file_url?: string | null
  published: boolean
  order: number
}

export default function CertificatesCMS() {
  const { toast } = useToast()
  const [certificates, setCertificates] = useState<Certificate[]>([])
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [formData, setFormData] = useState<Partial<Certificate>>({
    name: '',
    issuer: '',
    issue_date: '',
    credential_id: '',
    link: '',
    file_url: '',
    published: true,
    order: 0
  })
  const [editingId, setEditingId] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  // Fetch all certificates
  const fetchCertificates = async () => {
    try {
      const res = await fetch('/api/certificates')
      if (res.ok) {
        const data = await res.json()
        setCertificates(data)
      }
    } catch (error) {
      console.error('Failed to fetch certificates:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCertificates()
  }, [])

  // Open Modal for Create
  const handleOpenAdd = () => {
    setEditingId(null)
    setFormData({
      name: '',
      issuer: '',
      issue_date: new Date().toISOString().split('T')[0],
      credential_id: '',
      link: '',
      file_url: '',
      published: true,
      order: certificates.length + 1
    })
    setModalOpen(true)
  }

  // Open Modal for Edit
  const handleOpenEdit = (cert: Certificate) => {
    setEditingId(cert.id)
    setFormData({
      name: cert.name,
      issuer: cert.issuer,
      issue_date: cert.issue_date ? new Date(cert.issue_date).toISOString().split('T')[0] : '',
      credential_id: cert.credential_id || '',
      link: cert.link || '',
      file_url: cert.file_url || '',
      published: cert.published,
      order: cert.order
    })
    setModalOpen(true)
  }

  // Handle Save
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.issuer || !formData.issue_date) return

    setSaving(true)
    const url = editingId ? `/api/certificates/${editingId}` : '/api/certificates'
    const method = editingId ? 'PATCH' : 'POST'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        toast('Certificate saved successfully!', 'success')
        await fetchCertificates()
        setModalOpen(false)
      } else {
        const errData = await res.json()
        toast(errData.error || 'Something went wrong while saving.', 'error')
      }
    } catch (error) {
      console.error('Failed to save certificate:', error)
      toast('Network error occurred.', 'error')
    } finally {
      setSaving(false)
    }
  }

  // Handle Delete
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this certificate?')) return

    try {
      const res = await fetch(`/api/certificates/${id}`, {
        method: 'DELETE'
      })
      if (res.ok) {
        toast('Certificate deleted successfully.', 'success')
        setCertificates(prev => prev.filter(c => c.id !== id))
      } else {
        toast('Failed to delete certificate.', 'error')
      }
    } catch (error) {
      console.error('Failed to delete certificate:', error)
      toast('Network error occurred.', 'error')
    }
  }

  // Handle Toggle Published State directly
  const handleTogglePublished = async (cert: Certificate) => {
    try {
      const updatedValue = !cert.published
      const res = await fetch(`/api/certificates/${cert.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: updatedValue })
      })
      if (res.ok) {
        setCertificates(prev =>
          prev.map(c => (c.id === cert.id ? { ...c, published: updatedValue } : c))
        )
      }
    } catch (error) {
      console.error('Failed to toggle published state:', error)
    }
  }

  return (
    <div>
      {/* Header section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div style={{
              background: 'var(--accent-4)',
              color: '#000000',
              border: '2px solid #000000',
              padding: '6px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '2px 2px 0px 0px #000000'
            }}>
              <Award size={20} />
            </div>
            <h1 style={{ fontSize: '32px', fontWeight: '800', fontFamily: 'Space Grotesk' }}>Manage Certificates</h1>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Create, update, and delete official credentials on your public portfolio page.</p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="btn-primary"
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <Plus size={18} /> Add Certificate
        </button>
      </div>

      {/* Main Content */}
      {loading ? (
        <div style={{ padding: '60px 0', textAlign: 'center', fontWeight: 'bold' }}>Loading credentials list...</div>
      ) : certificates.length === 0 ? (
        <div className="card" style={{ padding: '60px', textAlign: 'center', background: 'var(--surface-2)', color: '#000' }}>
          <Award size={48} style={{ margin: '0 auto 16px', display: 'block' }} />
          <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px', fontFamily: 'Space Grotesk' }}>No Certificates Found</h3>
          <p style={{ fontSize: '14px', marginBottom: '24px', fontWeight: '500' }}>You haven&apos;t added any certifications to display yet.</p>
          <button onClick={handleOpenAdd} className="btn-primary">Add Your First Certificate</button>
        </div>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th style={{ width: '40px', textAlign: 'center' }}>#</th>
                <th>Certificate Name</th>
                <th>Issuer</th>
                <th>Issue Date</th>
                <th>Credential ID</th>
                <th style={{ width: '120px', textAlign: 'center' }}>Published</th>
                <th style={{ width: '140px', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((cert, index) => (
                <tr key={cert.id}>
                  <td style={{ textAlign: 'center', fontWeight: '800', fontFamily: 'Space Grotesk' }}>{cert.order || index + 1}</td>
                  <td>
                    <div style={{ fontWeight: '700', fontSize: '15px' }}>{cert.name}</div>
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--text-muted)', textDecoration: 'underline', marginTop: '4px' }}>
                        Verification Link <ExternalLink size={10} />
                      </a>
                    )}
                  </td>
                  <td style={{ fontWeight: '700' }}>{cert.issuer}</td>
                  <td style={{ fontWeight: '600' }}>
                    {cert.issue_date ? new Date(cert.issue_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : '-'}
                  </td>
                  <td style={{ fontFamily: 'monospace', fontWeight: '700' }}>{cert.credential_id || '-'}</td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      onClick={() => handleTogglePublished(cert)}
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer', display: 'inline-flex' }}
                      title={cert.published ? 'Unpublish' : 'Publish'}
                    >
                      {cert.published ? (
                        <ToggleRight size={32} color="#00c853" style={{ fill: '#e8f5e9' }} />
                      ) : (
                        <ToggleLeft size={32} color="#9e9e9e" />
                      )}
                    </button>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                      <button
                        onClick={() => handleOpenEdit(cert)}
                        title="Edit"
                        style={{
                          background: 'var(--accent-4)',
                          border: '2px solid #000000',
                          padding: '6px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          boxShadow: '1px 1px 0px 0px #000000',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        onClick={() => handleDelete(cert.id)}
                        title="Delete"
                        style={{
                          background: '#ff5252',
                          color: '#ffffff',
                          border: '2px solid #000000',
                          padding: '6px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          boxShadow: '1px 1px 0px 0px #000000',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* CRUD Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="modal-overlay" onClick={() => setModalOpen(false)}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="modal"
              onClick={e => e.stopPropagation()}
              style={{ maxWidth: '560px' }}
            >
              {/* Modal header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '2px solid var(--border)', paddingBottom: '16px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '800', fontFamily: 'Space Grotesk', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Award size={20} />
                  {editingId ? 'Edit Certificate' : 'Add New Certificate'}
                </h2>
                <button
                  onClick={() => setModalOpen(false)}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex' }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Form */}
              <form onSubmit={handleSave}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '800', marginBottom: '6px', fontFamily: 'Space Grotesk' }}>
                      Certificate Name <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="input"
                      required
                      value={formData.name || ''}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Next.js Developer Certification"
                    />
                  </div>

                  {/* Issuer */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '800', marginBottom: '6px', fontFamily: 'Space Grotesk' }}>
                      Issuing Organization <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="input"
                      required
                      value={formData.issuer || ''}
                      onChange={e => setFormData({ ...formData, issuer: e.target.value })}
                      placeholder="e.g. Vercel, Google, Coursera"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {/* Issue Date */}
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '800', marginBottom: '6px', fontFamily: 'Space Grotesk' }}>
                        Issue Date <span style={{ color: 'red' }}>*</span>
                      </label>
                      <input
                        type="date"
                        className="input"
                        required
                        value={formData.issue_date || ''}
                        onChange={e => setFormData({ ...formData, issue_date: e.target.value })}
                      />
                    </div>

                    {/* Order */}
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '800', marginBottom: '6px', fontFamily: 'Space Grotesk' }}>
                        Display Order
                      </label>
                      <input
                        type="number"
                        className="input"
                        value={formData.order || 0}
                        onChange={e => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                      />
                    </div>
                  </div>

                  {/* Credential ID */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '800', marginBottom: '6px', fontFamily: 'Space Grotesk' }}>
                      Credential ID (Optional)
                    </label>
                    <input
                      type="text"
                      className="input"
                      value={formData.credential_id || ''}
                      onChange={e => setFormData({ ...formData, credential_id: e.target.value })}
                      placeholder="e.g. CERT-9843-XY2"
                    />
                  </div>

                  {/* Link */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '800', marginBottom: '6px', fontFamily: 'Space Grotesk' }}>
                      Certificate URL / Link (Optional)
                    </label>
                    <input
                      type="url"
                      className="input"
                      value={formData.link || ''}
                      onChange={e => setFormData({ ...formData, link: e.target.value })}
                      placeholder="https://verification-site.com/id"
                    />
                  </div>

                  {/* Upload Image/PDF Path */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '800', marginBottom: '6px', fontFamily: 'Space Grotesk' }}>
                      Upload File Path / PDF URL (Optional)
                    </label>
                    <input
                      type="text"
                      className="input"
                      value={formData.file_url || ''}
                      onChange={e => setFormData({ ...formData, file_url: e.target.value })}
                      placeholder="/uploads/my-certificate.pdf"
                    />
                  </div>

                  {/* Published state checkbox */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                    <input
                      type="checkbox"
                      id="published"
                      checked={formData.published || false}
                      onChange={e => setFormData({ ...formData, published: e.target.checked })}
                      style={{ width: '16px', height: '16px', accentColor: 'var(--accent)' }}
                    />
                    <label htmlFor="published" style={{ fontSize: '14px', fontWeight: '700', fontFamily: 'Space Grotesk', cursor: 'pointer' }}>
                      Published on website portfolio
                    </label>
                  </div>
                </div>

                {/* Modal actions */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '28px', borderTop: '2px solid var(--border)', paddingTop: '20px' }}>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="btn-primary"
                  >
                    {saving ? 'Saving...' : 'Save Certificate'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
