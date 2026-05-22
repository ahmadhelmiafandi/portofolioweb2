'use client'

import { useState, useRef } from 'react'
import { Upload, X, Loader2, Image as ImageIcon } from 'lucide-react'
import { useToast } from '@/components/admin/Toast'

interface ImageUploadProps {
  value?: string
  onChange: (url: string) => void
  label?: string
}

export function ImageUpload({ value, onChange, label = 'Upload Image' }: ImageUploadProps) {
  const { toast } = useToast()
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      if (data.url) {
        onChange(data.url)
      } else {
        toast('Upload Error: ' + (data.error || 'Unknown error'), 'error')
      }
    } catch (err: any) {
      toast('Upload failed: ' + err.message, 'error')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>{label}</label>
      <div style={{
        border: '2px dashed var(--border)',
        borderRadius: 'var(--radius-sm)',
        padding: '24px',
        textAlign: 'center',
        position: 'relative',
        background: 'var(--surface-2)',
        transition: 'var(--transition)',
        cursor: 'pointer'
      }} onClick={() => fileInputRef.current?.click()}>
        <input 
          type="file" 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
          accept="image/*"
          onChange={handleUpload}
        />
        
        {value ? (
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={value} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0,
              transition: '0.2s'
            }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')} onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}>
              <button 
                type="button" 
                onClick={(e) => { e.stopPropagation(); onChange(''); }}
                style={{ background: '#ef4444', color: 'white', border: 'none', padding: '8px', borderRadius: '50%', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
            {uploading ? (
              <Loader2 size={32} className="animate-spin" />
            ) : (
              <Upload size={32} />
            )}
            <div style={{ fontSize: '14px' }}>{uploading ? 'Uploading...' : 'Click or drop to upload image'}</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>PNG, JPG or GIF (max 5MB)</div>
          </div>
        )}
      </div>
    </div>
  )
}
