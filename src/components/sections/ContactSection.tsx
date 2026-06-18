'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/contexts/LangContext'
import { Mail, MapPin, Phone, Link2, Send, Globe } from 'lucide-react'
import { Github, Linkedin, Instagram, Twitter, Facebook, Youtube, Twitch, Whatsapp } from '@/components/icons/BrandIcons'
import { useState } from 'react'

interface ContactData {
  email: string; phone?: string | null; location?: string | null
  title_en?: string | null; title_id?: string | null
  desc_en?: string | null; desc_id?: string | null
}
interface Social { id: string; name: string; link: string; icon?: string | null }

const formatLink = (url: string | null | undefined) => {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/')) return url
  return `https://${url}`
}

const DEFAULT_CONTACT: ContactData = { email: 'helmi@example.com', phone: '+62 812 3456 7890', location: 'Jakarta, Indonesia' }

const ICON_MAP: Record<string, React.ElementType> = {
  github: Github, linkedin: Linkedin, instagram: Instagram, twitter: Twitter,
  x: Twitter, facebook: Facebook, youtube: Youtube, whatsapp: Whatsapp,
  twitch: Twitch, mail: Mail, phone: Phone, globe: Globe, link: Link2,
  dribbble: Globe, behance: Globe,
}

export function ContactSection({ contact, socials }: { contact?: ContactData | null; socials?: Social[] | null }) {
  const { lang, t } = useLang()
  const cd = contact || DEFAULT_CONTACT
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/messages', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('sent'); setForm({ name: '', email: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
    setTimeout(() => setStatus('idle'), 4000)
  }

  const contactTitle = lang === 'en' ? (cd.title_en || "Let's Talk") : (cd.title_id || "Mari Bicara")
  const contactDesc  = lang === 'en'
    ? (cd.desc_en || "I'm always open to new opportunities and collaborations.")
    : (cd.desc_id || "Saya selalu terbuka untuk peluang dan kolaborasi baru.")

  const contactItems = [
    { icon: Mail,  value: cd.email,    href: `mailto:${cd.email}` },
    ...(cd.phone    ? [{ icon: Phone,  value: cd.phone,    href: `tel:${cd.phone}` }]   : []),
    ...(cd.location ? [{ icon: MapPin, value: cd.location, href: undefined }]            : []),
  ]

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <span className="section-subtitle">{t.contact.subtitle}</span>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-desc">
            {lang === 'en' ? "Have a project in mind? Let's build something amazing together." : 'Punya proyek? Mari kita bangun sesuatu yang luar biasa bersama.'}
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, maxWidth: 960, margin: '0 auto' }}>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10, letterSpacing: '-0.02em' }}>
                {contactTitle}
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: 15 }}>{contactDesc}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {contactItems.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: '10px',
                    background: i === 0 ? 'var(--accent-light)' : i === 1 ? 'var(--accent-2-light)' : 'rgba(99,102,241,0.1)',
                    color: i === 0 ? 'var(--accent)' : i === 1 ? 'var(--accent-2)' : '#818cf8',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <item.icon size={15} />
                  </div>
                  {item.href ? (
                    <a href={item.href} style={{ color: 'var(--text-primary)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                    >{item.value}</a>
                  ) : (
                    <span style={{ color: 'var(--text-secondary)', fontSize: 14 }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {socials && socials.length > 0 && (
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                  {lang === 'en' ? 'Follow Me' : 'Ikuti Saya'}
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {socials.map(s => {
                    const Icon = (s.icon ? ICON_MAP[s.icon.toLowerCase()] : null) || ICON_MAP[s.name.toLowerCase()] || Link2
                    return (
                      <a key={s.id} href={formatLink(s.link)} target="_blank" rel="noopener noreferrer"
                        aria-label={s.name}
                        style={{
                          width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '10px',
                          color: 'var(--text-secondary)', textDecoration: 'none', transition: 'var(--transition)',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-light)' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'var(--surface)' }}
                      >
                        <Icon size={15} />
                      </a>
                    )
                  })}
                </div>
              </div>
            )}
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit}
              style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: '16px', padding: '28px',
                display: 'flex', flexDirection: 'column', gap: 18,
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 14 }}>
                {[
                  { label: lang === 'en' ? 'Name' : 'Nama', type: 'text', key: 'name', placeholder: lang === 'en' ? 'Your name' : 'Nama Anda' },
                  { label: 'Email', type: 'email', key: 'email', placeholder: 'email@example.com' },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {f.label}
                    </label>
                    <input className="input" type={f.type} required placeholder={f.placeholder}
                      value={(form as any)[f.key]}
                      onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {lang === 'en' ? 'Message' : 'Pesan'}
                </label>
                <textarea className="input" required rows={5}
                  placeholder={t.contact.message_placeholder}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ resize: 'vertical', minHeight: 120 }}
                />
              </div>

              <button type="submit" disabled={status === 'sending'} className="btn-primary"
                style={{ justifyContent: 'center' }}
              >
                <Send size={14} />
                {status === 'sending' ? (lang === 'en' ? 'Sending...' : 'Mengirim...')
                  : status === 'sent'    ? (lang === 'en' ? '✓ Message Sent!' : '✓ Pesan Terkirim!')
                  : status === 'error'   ? (lang === 'en' ? 'Error, try again' : 'Error, coba lagi')
                  : t.contact.send}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
