'use client'

import React, { useEffect } from 'react'
import { AlertTriangle, Loader2, Info } from 'lucide-react'

interface ConfirmDialogProps {
  isOpen: boolean
  title?: string
  message: string
  onConfirm: () => void | Promise<void>
  onCancel: () => void
  confirmText?: string
  cancelText?: string
  loading?: boolean
  type?: 'danger' | 'info' | 'warning'
}

export function ConfirmDialog({
  isOpen,
  title = 'Are you sure?',
  message,
  onConfirm,
  onCancel,
  confirmText = 'Yes, Delete',
  cancelText = 'Cancel',
  loading = false,
  type = 'danger'
}: ConfirmDialogProps) {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const getAccentColor = () => {
    if (type === 'danger') return '#ef4444'
    if (type === 'warning') return 'var(--accent-4)'
    return 'var(--accent)'
  }

  const getBgLight = () => {
    if (type === 'danger') return 'rgba(239, 68, 68, 0.1)'
    if (type === 'warning') return 'rgba(234, 179, 8, 0.1)'
    return 'var(--accent-light)'
  }

  return (
    <div 
      className="modal-overlay" 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        background: 'rgba(0, 0, 0, 0.65)', 
        backdropFilter: 'blur(4px)', 
        zIndex: 9999, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div 
        className="card" 
        style={{ 
          background: 'var(--surface)', 
          border: '1px solid var(--border)', 
          borderRadius: '16px', 
          padding: '24px', 
          maxWidth: '440px', 
          width: '100%',
          boxShadow: 'var(--shadow-lg)',
          animation: 'modal-enter 0.2s ease-out'
        }}
      >
        <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: getBgLight(),
            color: getAccentColor(),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            {type === 'info' ? <Info size={20} /> : <AlertTriangle size={20} />}
          </div>
          <div>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '700', 
              color: 'var(--text-primary)', 
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '6px' 
            }}>
              {title}
            </h3>
            <p style={{ 
              fontSize: '14px', 
              color: 'var(--text-secondary)', 
              lineHeight: 1.5 
            }}>
              {message}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button
            type="button"
            className="btn-secondary"
            onClick={onCancel}
            disabled={loading}
            style={{ padding: '9px 18px', fontSize: '13px', minHeight: '38px' }}
          >
            {cancelText}
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={onConfirm}
            disabled={loading}
            style={{ 
              background: getAccentColor(), 
              color: type === 'info' ? '#000' : '#fff',
              padding: '9px 18px', 
              fontSize: '13px',
              minHeight: '38px'
            }}
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : confirmText}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes modal-enter {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
