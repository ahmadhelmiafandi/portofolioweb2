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
      setMessages(Array.isArray(data) ? data : [])
    } catch (err) {
      console.error(err)
      setMessages([])
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
    <div style={{ maxWidth: '1400px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
        <div style={{
          width: '48px',
          height: '48px',
          background: 'var(--accent-light)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent)'
        }}>
          <MessageSquare size={24} />
        </div>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '800', fontFamily: 'Outfit', marginBottom: '4px' }}>Messages</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>View and manage contact form submissions from your website.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: '24px', minHeight: '600px' }}>
        {/* List */}
        <div style={{ 
          background: 'var(--surface)', 
          border: '1px solid var(--border)', 
          borderRadius: '12px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ padding: '20px', borderBottom: '1px solid var(--border)', fontWeight: 700, fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Mail size={16} color="var(--accent)" />
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
                    padding: '16px 20px', 
                    borderBottom: '1px solid var(--border)', 
                    cursor: 'pointer',
                    background: selectedMessage?.id === m.id ? 'var(--accent-light)' : 'transparent',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    borderLeft: selectedMessage?.id === m.id ? '3px solid var(--accent)' : '3px solid transparent'
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
          borderRadius: '12px',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-sm)'
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
                padding: '20px', 
                background: 'var(--surface-2)', 
                borderRadius: '10px',
                fontSize: '15px',
                lineHeight: '1.8',
                whiteSpace: 'pre-wrap',
                color: 'var(--text-primary)',
                border: '1px solid var(--border)'
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
