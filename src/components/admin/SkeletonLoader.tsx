'use client'

import React from 'react'

export function TableSkeleton({ rows = 5, cols = 4 }: { rows?: number; cols?: number }) {
  return (
    <div className="card" style={{ padding: '24px', width: '100%' }}>
      {/* Search/Header placeholder */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div className="skeleton" style={{ height: '38px', width: '200px', borderRadius: '8px' }} />
        <div className="skeleton" style={{ height: '38px', width: '120px', borderRadius: '9999px' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Table header placeholder */}
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border)' }}>
          {Array.from({ length: cols }).map((_, idx) => (
            <div key={idx} className="skeleton" style={{ height: '16px', width: '70%', borderRadius: '4px' }} />
          ))}
        </div>

        {/* Table rows placeholder */}
        {Array.from({ length: rows }).map((_, rIdx) => (
          <div key={rIdx} style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '16px', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
            {Array.from({ length: cols }).map((_, cIdx) => (
              <div key={cIdx} className="skeleton" style={{ height: '14px', width: cIdx === 0 ? '90%' : cIdx === cols - 1 ? '40%' : '75%', borderRadius: '4px' }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function CardSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', width: '100%' }}>
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="skeleton" style={{ height: '24px', width: '140px', borderRadius: '6px' }} />
            <div className="skeleton" style={{ height: '24px', width: '24px', borderRadius: '50%' }} />
          </div>
          <div className="skeleton" style={{ height: '14px', width: '100%', borderRadius: '4px' }} />
          <div className="skeleton" style={{ height: '14px', width: '80%', borderRadius: '4px' }} />
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
            <div className="skeleton" style={{ height: '24px', width: '60px', borderRadius: '12px' }} />
            <div className="skeleton" style={{ height: '24px', width: '60px', borderRadius: '12px' }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export function FormSkeleton() {
  return (
    <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div className="skeleton" style={{ height: '16px', width: '120px', borderRadius: '4px' }} />
        <div className="skeleton" style={{ height: '42px', width: '100%', borderRadius: '8px' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div className="skeleton" style={{ height: '16px', width: '150px', borderRadius: '4px' }} />
        <div className="skeleton" style={{ height: '80px', width: '100%', borderRadius: '8px' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="skeleton" style={{ height: '16px', width: '100px', borderRadius: '4px' }} />
          <div className="skeleton" style={{ height: '42px', width: '100%', borderRadius: '8px' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="skeleton" style={{ height: '16px', width: '100px', borderRadius: '4px' }} />
          <div className="skeleton" style={{ height: '42px', width: '100%', borderRadius: '8px' }} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px' }}>
        <div className="skeleton" style={{ height: '42px', width: '120px', borderRadius: '9999px' }} />
      </div>
    </div>
  )
}
