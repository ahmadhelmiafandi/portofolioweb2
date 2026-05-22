'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from 'lucide-react'

type ToastType = 'success' | 'error' | 'warning' | 'info'

interface Toast {
  id: number
  message: string
  type: ToastType
}

interface ToastContextType {
  toast: (message: string, type?: ToastType) => void
}

const ToastContext = createContext<ToastContextType>({ toast: () => {} })

export function useToast() {
  return useContext(ToastContext)
}

let toastId = 0

const ICONS: Record<ToastType, typeof CheckCircle2> = {
  success: CheckCircle2,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
}

const COLORS: Record<ToastType, { bg: string; border: string; icon: string; glow: string }> = {
  success: {
    bg: 'linear-gradient(135deg, #05291a 0%, #0a3d24 100%)',
    border: '#10b981',
    icon: '#34d399',
    glow: 'rgba(16, 185, 129, 0.25)',
  },
  error: {
    bg: 'linear-gradient(135deg, #2d0a0a 0%, #3d1414 100%)',
    border: '#ef4444',
    icon: '#f87171',
    glow: 'rgba(239, 68, 68, 0.25)',
  },
  warning: {
    bg: 'linear-gradient(135deg, #2d2305 0%, #3d3010 100%)',
    border: '#f59e0b',
    icon: '#fbbf24',
    glow: 'rgba(245, 158, 11, 0.25)',
  },
  info: {
    bg: 'linear-gradient(135deg, #051d2d 0%, #0a2a3d 100%)',
    border: '#3b82f6',
    icon: '#60a5fa',
    glow: 'rgba(59, 130, 246, 0.25)',
  },
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((message: string, type: ToastType = 'success') => {
    const id = ++toastId
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 4000)
  }, [])

  const removeToast = useCallback((id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toast: addToast }}>
      {children}

      {/* Toast Container */}
      <div style={{
        position: 'fixed',
        top: 24,
        right: 24,
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        pointerEvents: 'none',
      }}>
        {toasts.map((t, i) => {
          const color = COLORS[t.type]
          const Icon = ICONS[t.type]
          return (
            <div
              key={t.id}
              style={{
                pointerEvents: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 20px',
                background: color.bg,
                border: `1.5px solid ${color.border}`,
                borderRadius: 14,
                boxShadow: `0 8px 32px ${color.glow}, 0 2px 8px rgba(0,0,0,0.3)`,
                backdropFilter: 'blur(16px)',
                minWidth: 300,
                maxWidth: 440,
                animation: 'toastSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onClick={() => removeToast(t.id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(-4px)'
                e.currentTarget.style.boxShadow = `0 12px 40px ${color.glow}, 0 4px 12px rgba(0,0,0,0.4)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.boxShadow = `0 8px 32px ${color.glow}, 0 2px 8px rgba(0,0,0,0.3)`
              }}
            >
              {/* Icon with pulse */}
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: `${color.border}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                animation: 'toastPulse 2s ease-in-out infinite',
              }}>
                <Icon size={20} color={color.icon} />
              </div>

              {/* Message */}
              <span style={{
                flex: 1,
                color: '#f0f0f0',
                fontSize: 14,
                fontWeight: 500,
                lineHeight: 1.5,
                fontFamily: 'Inter, system-ui, sans-serif',
              }}>
                {t.message}
              </span>

              {/* Close button */}
              <button
                onClick={(e) => { e.stopPropagation(); removeToast(t.id) }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#888',
                  padding: 4,
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; e.currentTarget.style.background = 'none' }}
              >
                <X size={16} />
              </button>

              {/* Progress bar */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 16,
                right: 16,
                height: 2,
                borderRadius: 1,
                background: `${color.border}30`,
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  background: color.border,
                  borderRadius: 1,
                  animation: 'toastProgress 4s linear forwards',
                }} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes toastSlideIn {
          0% { opacity: 0; transform: translateX(100px) scale(0.8); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes toastPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes toastProgress {
          0% { width: 100%; }
          100% { width: 0%; }
        }
      `}</style>
    </ToastContext.Provider>
  )
}
