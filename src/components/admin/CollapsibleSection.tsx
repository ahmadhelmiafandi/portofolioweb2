'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CollapsibleSectionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function CollapsibleSection({ title, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div style={{
      border: '1px dashed var(--border-hover)',
      borderRadius: '12px',
      background: 'rgba(255, 255, 255, 0.01)',
      overflow: 'hidden',
      transition: 'var(--transition)'
    }}>
      {/* Trigger Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none',
          border: 'none',
          color: 'var(--text-secondary)',
          fontWeight: '600',
          fontSize: '14px',
          cursor: 'pointer',
          fontFamily: 'Outfit, sans-serif',
          textAlign: 'left'
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Foldable Content */}
      {isOpen && (
        <div style={{
          padding: '0 20px 20px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          animation: 'fold-enter 0.2s ease-out'
        }}>
          {children}
        </div>
      )}

      <style>{`
        @keyframes fold-enter {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
