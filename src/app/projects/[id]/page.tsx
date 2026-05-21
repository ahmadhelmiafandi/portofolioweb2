'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, GitBranch, Loader2 } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { useLang } from '@/contexts/LangContext'

export default function ProjectDetailPage() {
  const { id } = useParams()
  const { lang, t } = useLang()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/projects/${id}`, { cache: 'no-store' })
      .then(res => res.json())
      .then(json => {
        setProject(json)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [id])

  const formatLink = (url: string | null | undefined) => {
    if (!url) return ''
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/')) return url
    return `https://${url}`
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Loader2 className="animate-spin" size={40} color="var(--accent)" />
        </div>
      </>
    )
  }

  if (!project) {
    return (
      <>
        <Navbar />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', gap: '20px' }}>
          <h2>Project Not Found</h2>
          <Link href="/#projects" className="btn-primary">Back to Home</Link>
        </div>
      </>
    )
  }

  const title = lang === 'en' ? project.title_en : project.title_id
  const description = lang === 'en' ? project.description_en : project.description_id

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--navbar-height)', minHeight: '100vh' }}>
        <div className="container" style={{ padding: '60px 24px' }}>
          <Link
            href="/#projects"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: 'var(--text-muted)', textDecoration: 'none', fontSize: 14,
              fontWeight: 500, marginBottom: 40,
              transition: 'var(--transition)',
            }}
          >
            <ArrowLeft size={16} />
            {lang === 'en' ? 'Back to Projects' : 'Kembali ke Proyek'}
          </Link>

          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <div style={{ marginBottom: 40 }}>
              <span style={{
                fontSize: 12, fontWeight: 700, color: 'var(--accent)',
                textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 12,
              }}>
                {project.category}
              </span>
              <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>
                {title}
              </h1>
              <p style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 640, whiteSpace: 'pre-wrap' }}>
                {description}
              </p>
            </div>

            {project.image && (
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: 40, aspectRatio: '16/9', position: 'relative', border: '1px solid var(--border)' }}>
                <Image src={project.image} alt={title} fill style={{ objectFit: 'cover' }} />
              </div>
            )}

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 20, marginBottom: 40,
            }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                <h4 style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                  Tech Stack
                </h4>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {project.tech_stack?.map((tech: string) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                <h4 style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                  Links
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {project.link && (
                    <a href={formatLink(project.link)} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--accent)', fontSize: 14, textDecoration: 'none', fontWeight: 600 }}>
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={formatLink(project.github)} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none', fontWeight: 500 }}>
                      <GitBranch size={14} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
