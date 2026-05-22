'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/contexts/LangContext'
import { Mail, MapPin, Phone, Link2, Send, Globe, MessageCircle } from 'lucide-react'
import { Github, Linkedin, Instagram, Twitter, Facebook, Youtube, Twitch, Whatsapp } from '@/components/icons/BrandIcons'
import { useState } from 'react'

interface ContactData {
  email: string
  phone?: string | null
  location?: string | null
  title_en?: string | null
  title_id?: string | null
  desc_en?: string | null
  desc_id?: string | null
}

interface Social {
  id: string
  name: string
  link: string
  icon?: string | null
}

const formatLink = (url: string | null | undefined) => {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/')) return url
  return `https://${url}`
}

const DEFAULT_CONTACT: ContactData = {
  email: 'helmi@example.com',
  phone: '+62 812 3456 7890',
  location: 'Jakarta, Indonesia',
}

const ICON_MAP: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
  x: Twitter,
  facebook: Facebook,
  youtube: Youtube,
  whatsapp: Whatsapp,
  twitch: Twitch,
  mail: Mail,
  phone: Phone,
  globe: Globe,
  link: Link2,
  dribbble: Globe,
  behance: Globe,
}

export function ContactSection({
  contact,
  socials,
}: {
  contact?: ContactData | null
  socials?: Social[] | null
}) {
  const { lang, t } = useLang()
  const contactData = contact || DEFAULT_CONTACT
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  const contactTitle = lang === 'en' 
    ? (contactData.title_en || "Let's Talk") 
    : (contactData.title_id || "Mari Bicara")
  
  const contactDesc = lang === 'en'
    ? (contactData.desc_en || "I'm always open to new opportunities and collaborations. Whether you have a project, a question, or just want to say hi — my inbox is always open.")
    : (contactData.desc_id || "Saya selalu terbuka untuk peluang dan kolaborasi baru. Apapun yang ingin Anda diskusikan, jangan ragu untuk menghubungi saya.")

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">{t.contact.subtitle}</p>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-desc">
            {lang === 'en'
              ? "Have a project in mind? Let's build something amazing together."
              : 'Punya proyek? Mari kita bangun sesuatu yang luar biasa bersama.'}
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 48,
          maxWidth: 960,
          margin: '0 auto',
        }}>
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 24, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
              {contactTitle}
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {contactDesc}
            </p>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: Mail, value: contactData.email, href: `mailto:${contactData.email}` },
                ...(contactData.phone ? [{ icon: Phone, value: contactData.phone, href: `tel:${contactData.phone}` }] : []),
                ...(contactData.location ? [{ icon: MapPin, value: contactData.location, href: undefined }] : []),
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 40, height: 40,
                    background: ['var(--accent-4)', 'var(--accent-2)', 'var(--accent-light)'][i % 3],
                    border: '2px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    boxShadow: '2px 2px 0px 0px var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#000000',
                    flexShrink: 0,
                  }}>
                    <item.icon size={16} />
                  </div>
                  {item.href ? (
                    <a href={item.href} style={{ color: 'var(--text-primary)', fontSize: 15, textDecoration: 'none' }}
                      onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--accent)'}
                      onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--text-primary)'}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--text-primary)', fontSize: 15 }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Socials */}
            {socials && socials.length > 0 && (
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>
                  {lang === 'en' ? 'Follow Me' : 'Ikuti Saya'}
                </p>
                <div style={{ display: 'flex', gap: 10 }}>
                  {socials.map(s => {
                    const IconComp = (s.icon ? ICON_MAP[s.icon.toLowerCase()] : null) || ICON_MAP[s.name.toLowerCase()] || Link2
                    return (
                      <a
                        key={s.id}
                        href={formatLink(s.link)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: 40, height: 40,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: 'var(--surface)',
                          border: '2px solid var(--border)',
                          borderRadius: 'var(--radius-sm)',
                          boxShadow: '2px 2px 0px 0px var(--border)',
                          color: 'var(--text-primary)',
                          textDecoration: 'none',
                          transition: 'var(--transition)',
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget).style.transform = 'translate(-2px, -2px)'
                          ;(e.currentTarget).style.boxShadow = '4px 4px 0px 0px var(--border)'
                          ;(e.currentTarget).style.background = 'var(--surface-2)'
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget).style.transform = 'none'
                          ;(e.currentTarget).style.boxShadow = '2px 2px 0px 0px var(--border)'
                          ;(e.currentTarget).style.background = 'var(--surface)'
                        }}
                      >
                        <IconComp size={16} />
                      </a>
                    )
                  })}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                background: 'var(--surface)',
                border: '3px solid var(--border)',
                borderRadius: 'var(--radius)',
                boxShadow: 'var(--shadow-md)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)', marginBottom: 8 }}>
                    {lang === 'en' ? 'Name' : 'Nama'}
                  </label>
                  <input
                    className="input"
                    type="text"
                    required
                    placeholder={lang === 'en' ? 'Your name' : 'Nama Anda'}
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)', marginBottom: 8 }}>
                    Email
                  </label>
                  <input
                    className="input"
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)', marginBottom: 8 }}>
                  {lang === 'en' ? 'Message' : 'Pesan'}
                </label>
                <textarea
                  className="input"
                  required
                  rows={5}
                  placeholder={t.contact.message_placeholder}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ resize: 'vertical', minHeight: 120 }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary"
                style={{ justifyContent: 'center' }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Send size={15} />
                  {status === 'sending'
                    ? (lang === 'en' ? 'Sending...' : 'Mengirim...')
                    : status === 'sent'
                    ? (lang === 'en' ? '✓ Sent!' : '✓ Terkirim!')
                    : t.contact.send}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
