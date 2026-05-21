'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Database, Terminal, AlertOctagon, HelpCircle, Code } from 'lucide-react'

const TEMPLATE_QUERIES = [
  { label: 'List Projects', sql: 'SELECT * FROM "Project" ORDER BY "order" ASC, "createdAt" DESC;' },
  { label: 'List Certificates', sql: 'SELECT * FROM "Certificate" ORDER BY "order" ASC;' },
  { label: 'List Skills', sql: 'SELECT * FROM "Skill" ORDER BY "order" ASC;' },
  { label: 'Inbox Messages', sql: 'SELECT * FROM "Message" ORDER BY "createdAt" DESC;' },
  { label: 'List Users (Admin)', sql: 'SELECT id, email, name, role, "createdAt" FROM "User";' },
  { label: 'Page View Stats', sql: 'SELECT * FROM "PageView";' },
]

export default function SQLEditorPage() {
  const [query, setQuery] = useState('SELECT * FROM "Project" ORDER BY "order" ASC;')
  const [results, setResults] = useState<any[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [execTime, setExecTime] = useState<number | null>(null)
  const [executing, setExecuting] = useState(false)

  const handleRunQuery = async (sqlToRun = query) => {
    if (!sqlToRun.trim()) return
    
    setExecuting(true)
    setError(null)
    setResults(null)
    setExecTime(null)
    
    const start = performance.now()
    try {
      const res = await fetch('/api/admin/sql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: sqlToRun })
      })
      const data = await res.json()
      const end = performance.now()
      
      setExecTime(Math.round(end - start))
      
      if (data.success) {
        setResults(data.result)
      } else {
        setError(data.error || 'Failed to execute query.')
      }
    } catch (err: any) {
      setError(err.message || 'Network error occurred.')
    } finally {
      setExecuting(false)
    }
  }

  // Get table columns dynamically from first result row
  const getColumns = () => {
    if (!results || results.length === 0) return []
    return Object.keys(results[0])
  }

  return (
    <div>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <div style={{
            background: 'var(--accent-3)',
            color: '#000000',
            border: '2px solid #000000',
            padding: '6px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '2px 2px 0px 0px #000000'
          }}>
            <Terminal size={22} />
          </div>
          <h1 style={{ fontSize: '32px', fontWeight: '800', fontFamily: 'Space Grotesk' }}>Supabase SQL Editor</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
          Execute direct SQL queries against your PostgreSQL instance database. Perfect for fast CMS maintenance.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '24px', marginBottom: '32px' }} className="editor-grid">
        {/* SQL Input Area */}
        <div className="card" style={{ padding: '20px', background: 'var(--surface)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '12px', fontFamily: 'Space Grotesk', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Code size={16} /> Write SQL Query
          </h3>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Write your PostgreSQL query here..."
            style={{
              width: '100%',
              height: '180px',
              fontFamily: 'Consolas, Monaco, monospace',
              fontSize: '14px',
              padding: '12px',
              border: '3px solid #000000',
              borderRadius: '4px',
              outline: 'none',
              backgroundColor: '#1E1E1E',
              color: '#90EE90',
              boxShadow: 'var(--shadow-sm)',
              resize: 'vertical'
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)' }}>
              Note: Queries are protected by admin session credentials.
            </span>
            <button
              onClick={() => handleRunQuery()}
              disabled={executing}
              className="btn-primary"
              style={{
                background: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Play size={16} fill="black" />
              {executing ? 'Executing...' : 'Run Query'}
            </button>
          </div>
        </div>

        {/* Template Queries */}
        <div className="card" style={{ padding: '20px', background: 'var(--surface-2)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '12px', fontFamily: 'Space Grotesk', display: 'flex', alignItems: 'center', gap: '8px', color: '#000' }}>
            <Database size={16} /> Quick Templates
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {TEMPLATE_QUERIES.map((t, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setQuery(t.sql)
                  handleRunQuery(t.sql)
                }}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  textAlign: 'left',
                  background: '#FFFFFF',
                  color: '#000000',
                  border: '2px solid #000000',
                  borderRadius: '4px',
                  fontWeight: '700',
                  fontSize: '13px',
                  cursor: 'pointer',
                  boxShadow: '2px 2px 0px 0px #000000',
                  transition: 'all 0.1s ease',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-1px, -1px)'
                  e.currentTarget.style.boxShadow = '3px 3px 0px 0px #000000'
                  e.currentTarget.style.backgroundColor = 'var(--accent-2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = '2px 2px 0px 0px #000000'
                  e.currentTarget.style.backgroundColor = '#FFFFFF'
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Output Panel */}
      <div className="card" style={{ padding: '24px', minHeight: '200px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '2px solid var(--border)', paddingBottom: '12px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '800', fontFamily: 'Space Grotesk' }}>Result Terminal Output</h3>
          {execTime !== null && (
            <span className="badge" style={{ background: 'var(--accent-2)', textTransform: 'lowercase' }}>
              {execTime}ms execution
            </span>
          )}
        </div>

        {executing && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 0', gap: '16px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '4px solid var(--border)',
              borderTopColor: 'var(--accent)',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
            <span style={{ fontWeight: '700', fontFamily: 'Space Grotesk' }}>Running query against database...</span>
          </div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              padding: '16px',
              background: '#FFECEC',
              color: '#CC0000',
              border: '3px solid #FF0000',
              borderRadius: '4px',
              boxShadow: '3px 3px 0px 0px #CC0000',
              display: 'flex',
              gap: '12px',
              fontWeight: '700'
            }}
          >
            <AlertOctagon size={24} style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: 'Space Grotesk', fontSize: '16px', marginBottom: '4px' }}>Execution Failed</div>
              <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '13px' }}>{error}</pre>
            </div>
          </motion.div>
        )}

        {!executing && !error && results && results.length > 0 && (
          <div>
            {results[0].message ? (
              // Non-SELECT query success message
              <div style={{
                padding: '16px',
                background: 'var(--accent-light)',
                color: '#006622',
                border: '3px solid var(--accent)',
                borderRadius: '4px',
                boxShadow: '3px 3px 0px 0px var(--border)',
                fontWeight: '700',
                fontFamily: 'Space Grotesk, sans-serif'
              }}>
                {results[0].message}
              </div>
            ) : (
              // SELECT query results
              <div className="table-wrapper" style={{ marginTop: '8px' }}>
                <table>
                  <thead>
                    <tr>
                      {getColumns().map((col) => (
                        <th key={col}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((row, rowIdx) => (
                      <tr key={rowIdx}>
                        {getColumns().map((col) => {
                          const val = row[col]
                          let rendered = ''
                          if (val === null) {
                            rendered = 'NULL'
                          } else if (typeof val === 'object') {
                            rendered = JSON.stringify(val)
                          } else {
                            rendered = String(val)
                          }
                          return (
                            <td key={col} style={{ 
                              fontFamily: 'monospace', 
                              fontSize: '13px',
                              backgroundColor: val === null ? 'var(--bg-secondary)' : undefined,
                              color: val === null ? 'var(--text-muted)' : undefined,
                              fontWeight: val === null ? 'bold' : undefined
                            }}>
                              {rendered}
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <div style={{ marginTop: '16px', fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)' }}>
              Rows returned: {results.length}
            </div>
          </div>
        )}

        {!executing && !error && results && results.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)', fontWeight: '700', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <HelpCircle size={40} />
            <div>Query executed successfully, but returned 0 rows.</div>
          </div>
        )}

        {!executing && !error && !results && (
          <div style={{ textAlign: 'center', padding: '50px 0', color: 'var(--text-muted)', fontWeight: '700' }}>
            Enter a query above or click a template, then press "Run Query" to fetch data.
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .editor-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
