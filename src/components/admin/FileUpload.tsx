'use client'

import { useState, useRef } from 'react'
import { Upload, X, Loader2, FileText, CheckCircle2 } from 'lucide-react'
import { useToast } from '@/components/admin/Toast'

interface FileUploadProps {
  value?: string
  onChange: (url: string) => void
  label?: string
  accept?: string
  helperText?: string
}

export function FileUpload({ 
  value, 
  onChange, 
  label = 'Upload File', 
  accept = '.pdf,image/*',
  helperText = 'PDF or Images (max 10MB)'
}: FileUploadProps) {
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
        toast('File uploaded successfully!', 'success')
      } else {
        toast('Upload Error: ' + (data.error || 'Unknown error'), 'error')
      }
    } catch (err: any) {
      toast('Upload failed: ' + err.message, 'error')
    } finally {
      setUploading(false)
    }
  }

  // Get display name of file from URL
  const getFileName = (url: string) => {
    try {
      const decoded = decodeURIComponent(url)
      const parts = decoded.split('/')
      const lastPart = parts[parts.length - 1]
      // Strip timestamp prefix if any (e.g. 1716382103820-file-name.pdf)
      return lastPart.replace(/^\d+-/, '')
    } catch {
      return 'Uploaded Document'
    }
  }

  return (
    <div>
      <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '800', fontFamily: 'Space Grotesk' }}>
        {label}
      </label>
      <div style={{
        border: '2px dashed var(--border)',
        borderRadius: '4px',
        padding: '24px',
        textAlign: 'center',
        position: 'relative',
        background: 'var(--surface-2)',
        transition: 'all 0.2s',
        cursor: 'pointer',
        boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.05)'
      }} onClick={() => fileInputRef.current?.click()}>
        <input 
          type="file" 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
          accept={accept}
          onChange={handleUpload}
        />
        
        {value ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--surface)', border: '2px solid #000', padding: '12px 16px', borderRadius: '4px', boxShadow: '2px 2px 0px 0px #000' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
              <div style={{ background: 'var(--accent-4)', color: '#000', padding: '8px', borderRadius: '4px', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                <FileText size={20} />
              </div>
              <div style={{ textAlign: 'left', minWidth: 0 }}>
                <div style={{ fontSize: '14px', fontWeight: '700', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }} title={getFileName(value)}>
                  {getFileName(value)}
                </div>
                <a href={value} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: 'var(--accent)', textDecoration: 'underline', fontWeight: 600 }}>
                  View File
                </a>
              </div>
            </div>
            
            <button 
              type="button" 
              onClick={() => onChange('')}
              style={{ background: '#ff5252', color: 'white', border: '2px solid #000', padding: '6px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', boxShadow: '1px 1px 0px 0px #000' }}
              title="Remove file"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
            {uploading ? (
              <Loader2 size={32} className="animate-spin" style={{ color: 'var(--accent)' }} />
            ) : (
              <Upload size={32} />
            )}
            <div style={{ fontSize: '14px', fontWeight: 700 }}>
              {uploading ? 'Uploading your document...' : 'Click to select or drag file here'}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>
              {helperText}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
