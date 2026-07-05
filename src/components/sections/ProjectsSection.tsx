'use client'

import { m } from 'framer-motion'
import { containerVariants, cardRevealUp } from '@/lib/motion'
import { useState, useMemo, memo, useEffect } from 'react'
import { useLang } from '@/contexts/LangContext'
import { translations } from '@/lib/i18n'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, GitBranch } from 'lucide-react'

interface Project {
  id: string; title_en: string; title_id: string
  description_en: string; description_id: string
  image?: string | null; tech_stack: string[]
  link?: string | null; github?: string | null
  category: string; featured: boolean
}

const DEFAULT_PROJECTS: Project[] = [
  { id: '1', title_en: 'E-Commerce Platform', title_id: 'Platform E-Commerce', description_en: 'A full-featured e-commerce platform built with Next.js, PostgreSQL, and Stripe integration.', description_id: 'Platform e-commerce lengkap yang dibangun dengan Next.js, PostgreSQL, dan integrasi Stripe.', image: 'https://images.unsplash.com/photo-1563062634-1ce34d6c76dc?w=800&q=80', tech_stack: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'], category: 'Web', featured: true },
  { id: '2', title_en: 'Interior Design CMS', title_id: 'CMS Desain Interior', description_en: 'A complete content management system for an interior design company with configurator.', description_id: 'Sistem manajemen konten lengkap untuk perusahaan desain interior dengan konfigurator.', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80', tech_stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Framer Motion'], category: 'Web', featured: true },
  { id: '3', title_en: 'Honda Self-Service App', title_id: 'Aplikasi Layanan Mandiri Honda', description_en: 'A self-service booking and management application for Honda dealerships.', description_id: 'Aplikasi pemesanan dan manajemen layanan mandiri untuk dealer Honda.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', tech_stack: ['React', 'Node.js', 'MySQL', 'REST API'], category: 'Web', featured: false },
]

const formatLink = (url: string | null | undefined) => {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/')) return url
  return `https://${url}`
}

const ProjectCard = memo(function ProjectCard({ project, index, mounted }: { project: Project; index: number; mounted: boolean }) {
  const { lang: clientLang, t: clientT } = useLang()
  const lang = mounted ? clientLang : 'id'
  const t = mounted ? clientT : translations.id
  const title = lang === 'en' ? project.title_en : project.title_id
  const desc  = lang === 'en' ? project.description_en : project.description_id

  return (
    <m.article
      {...(mounted ? { variants: cardRevealUp } : {})}
      className="project-card-perf"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        boxShadow: 'var(--shadow-sm)',
        height: '100%'
      }}
    >
      {project.image && (
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--surface-2)' }}>
          <div className="project-img-hover-wrap">
            <Image src={project.image} alt={title} fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              style={{ objectFit: 'cover', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)', willChange: 'transform' }}
            />
          </div>
          
          {/* CSS gradient overlay on hover — replaces expensive iframe + backdrop-filter */}
          <div className="project-hover-overlay" style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(20,184,166,0.15), rgba(139,92,246,0.15))',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
            zIndex: 2
          }} />

          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to top, rgba(5,5,5,0.8), rgba(5,5,5,0.3))',
            pointerEvents: 'none',
            zIndex: 3
          }} />

          {project.featured && (
            <m.span 
              initial={{ scale: 0, y: -10 }}
              whileInView={{ scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.3 }}
              style={{ 
                position: 'absolute',
                top: 12,
                right: 12,
                fontSize: 11, 
                fontWeight: 700, 
                color: '#000',
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                padding: '6px 14px', 
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                boxShadow: '0 4px 12px rgba(245,158,11,0.4)',
                zIndex: 10
              }}>
              ⭐ {t.projects.featured}
            </m.span>
          )}
        </div>
      )}

      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            {project.category}
          </span>
        </div>

        <div>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: 8 }}>
            {title}
          </h3>
          <p style={{
            color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.6,
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
            overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {desc}
          </p>
        </div>

        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 'auto' }}>
          {project.tech_stack.slice(0, 4).map(tech => <span key={tech} className="tech-tag">{tech}</span>)}
          {project.tech_stack.length > 4 && (
            <span className="tech-tag" style={{ color: 'var(--accent)' }}>+{project.tech_stack.length - 4}</span>
          )}
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
          {project.link && (
            <a 
              href={formatLink(project.link)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ flex: 1, justifyContent: 'center', padding: '10px 16px', fontSize: 13 }}
            >
              <ExternalLink size={14} />
              {t.projects.visit_project}
            </a>
          )}
          {project.github && (
            <a 
              href={formatLink(project.github)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '10px 14px', fontSize: 13 }}
              aria-label="GitHub Repository"
            >
              <GitBranch size={15} />
            </a>
          )}
        </div>
      </div>

    </m.article>
  )
})

export function ProjectsSection({ data }: { data?: Project[] | null }) {
  const { lang: clientLang, t: clientT } = useLang()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const lang = mounted ? clientLang : 'id'
  const t = mounted ? clientT : translations.id

  const projects   = (data && data.length > 0) ? data : DEFAULT_PROJECTS
  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map(p => p.category)))], [projects])
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory), [projects, activeCategory])

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <m.div className="section-header"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-subtitle">{t.projects.subtitle}</span>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-desc">
            {lang === 'en' ? 'A curated selection of my favorite and most impactful work.' : 'Koleksi karya favorit dan paling berdampak dari saya.'}
          </p>
        </m.div>

        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{
                padding: '7px 20px', borderRadius: '9999px', fontSize: 13, fontWeight: 500,
                fontFamily: 'Outfit, sans-serif', cursor: 'pointer', border: '1px solid',
                transition: 'var(--transition)',
                borderColor: activeCategory === cat ? 'var(--accent)' : 'var(--border)',
                background:  activeCategory === cat ? 'var(--accent-light)' : 'transparent',
                color:       activeCategory === cat ? 'var(--accent)' : 'var(--text-secondary)',
              }}
            >{cat}</button>
          ))}
        </div>

        <m.div
          {...(mounted ? {
            variants: containerVariants,
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, margin: "-60px" }
          } : {})}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 28, marginTop: 32 }}
        >
           {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} mounted={mounted} />)}
        </m.div>
      </div>
    </section>
  )
}
