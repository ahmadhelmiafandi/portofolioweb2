'use client'

import { useState, useEffect } from 'react'
import { Mail, Loader2, MessageSquare, Trash2, Calendar, User } from 'lucide-react'
import { useToast } from '@/components/admin/Toast'

interface Message {
  id: string
  name: string
  email: string
  subject?: string | null
  message: string
  isRead: boolean
  createdAt: string
}

export default function AdminMessagesPage() {
  const { toast } = useToast()
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/messages')
      const data = await res.json()
      setMessages(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const deleteMessage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return
    try {
      const res = await fetch(`/api/messages/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setMessages(messages.filter(m => m.id !== id))
        if (selectedMessage?.id === id) setSelectedMessage(null)
      }
    } catch (err) {
      toast('Error deleting message', 'error')
    }
  }

  if (loading) return <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}><Loader2 className="animate-spin" /></div>

  return (
    <div style={{ maxWidth: '1200px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '800', fontFamily: 'Syne', marginBottom: '8px' }}>Manage Messages</h1>
        <p style={{ color: 'var(--text-secondary)' }}>View and manage contact form submissions from your website.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '32px', minHeight: '600px' }}>
        {/* List */}
        <div style={{ 
          background: 'var(--surface)', 
          border: '1px solid var(--border)', 
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ padding: '16px', borderBottom: '1px solid var(--border)', fontWeight: 600 }}>
            Inbox ({messages.length})
          </div>
          <div style={{ flex: 1, overflowY: 'auto', maxHeight: '700px' }}>
            {messages.length === 0 ? (
              <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>No messages yet.</div>
            ) : (
              messages.map(m => (
                <div 
                  key={m.id}
                  onClick={() => setSelectedMessage(m)}
                  style={{ 
                    padding: '16px', 
                    borderBottom: '1px solid var(--border)', 
                    cursor: 'pointer',
                    background: selectedMessage?.id === m.id ? 'var(--accent-light)' : 'transparent',
                    transition: '0.2s',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-primary)' }}>{m.name}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                      {new Date(m.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {m.message}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Detail */}
        <div style={{ 
          background: 'var(--surface)', 
          border: '1px solid var(--border)', 
          borderRadius: 'var(--radius-lg)',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {selectedMessage ? (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>{selectedMessage.subject || 'No Subject'}</h2>
                  <div style={{ display: 'flex', gap: '20px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <User size={14} /> {selectedMessage.name}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Mail size={14} /> {selectedMessage.email}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={14} /> {new Date(selectedMessage.createdAt).toLocaleString()}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => deleteMessage(selectedMessage.id)}
                  style={{ padding: '8px', borderRadius: '8px', color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', border: 'none', cursor: 'pointer' }}
                >
                  <Trash2 size={20} />
                </button>
              </div>
              <div style={{ 
                flex: 1, 
                padding: '24px', 
                background: 'rgba(0,0,0,0.05)', 
                borderRadius: 'var(--radius)',
                fontSize: '16px',
                lineHeight: '1.7',
                whiteSpace: 'pre-wrap',
                color: 'var(--text-primary)'
              }}>
                {selectedMessage.message}
              </div>
              <div style={{ marginTop: '32px' }}>
                <a 
                  href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject || 'Your Message'}`}
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                >
                  <Mail size={18} /> Reply via Email
                </a>
              </div>
            </>
          ) : (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
              <MessageSquare size={48} style={{ marginBottom: '16px', opacity: 0.2 }} />
              <p>Select a message to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
