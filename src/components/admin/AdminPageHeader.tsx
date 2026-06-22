'use client'

import React from 'react'

interface AdminPageHeaderProps {
  title: string
  description?: string
  icon?: React.ElementType
  action?: React.ReactNode
}

export function AdminPageHeader({ title, description, icon: Icon, action }: AdminPageHeaderProps) {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'md-center', 
      flexWrap: 'wrap', 
      gap: '16px',
      marginBottom: '32px' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {Icon && (
          <div style={{
            background: 'var(--accent-light)',
            color: 'var(--accent)',
            padding: '10px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(20,184,166,0.1)'
          }}>
            <Icon size={24} />
          </div>
        )}
        <div>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: '800', 
            fontFamily: 'Outfit, sans-serif', 
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            marginBottom: '4px' 
          }}>
            {title}
          </h1>
          {description && (
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '14px',
              fontWeight: 400
            }}>
              {description}
            </p>
          )}
        </div>
      </div>
      {action && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {action}
        </div>
      )}
    </div>
  )
}
