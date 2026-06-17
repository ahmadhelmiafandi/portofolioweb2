'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/contexts/LangContext'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, GitBranch } from 'lucide-react'
import { useState } from 'react'

interface Project {
  id: string; title_en: string; title_id: string
  description_en: string; description_id: string
  image?: string | null; tech_stack: string[]
  link?: string | null; github?: string | null
  category: string; featured: boolean
}

const DEFAULT_PROJECTS: Project[] = [
  { id: '1', title_en: 'E-Commerce Platform', title_id: 'Platform E-Commerce', description_en: 'A full-featured e-commerce platform built with Next.js, PostgreSQL, and Stripe integration.', description_id: 'Platform e-commerce lengkap yang dibangun dengan Next.js, PostgreSQL, dan integrasi Stripe.', tech_stack: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'], category: 'Web', featured: true },
  { id: '2', title_en: 'Interior Design CMS', title_id: 'CMS Desain Interior', description_en: 'A complete content management system for an interior design company with configurator.', description_id: 'Sistem manajemen konten lengkap untuk perusahaan desain interior dengan konfigurator.', tech_stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Framer Motion'], category: 'Web', featured: true },
  { id: '3', title_en: 'Honda Self-Service App', title_id: 'Aplikasi Layanan Mandiri Honda', description_en: 'A self-service booking and management application for Honda dealerships.', description_id: 'Aplikasi pemesanan dan manajemen layanan mandiri untuk dealer Honda.', tech_stack: ['React', 'Node.js', 'MySQL', 'REST API'], category: 'Web', featured: false },
]

const formatLink = (url: string | null | undefined) => {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/')) return url
  return `https://${url}`
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { lang, t } = useLang()
  const title = lang === 'en' ? project.title_en : project.title_id
  const desc  = lang === 'en' ? project.description_en : project.description_id

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        transition: 'var(--transition)',
      }}
      whileHover={{ y: -3, boxShadow: 'var(--shadow-md)' }}
    >
      {/* Image */}
      {project.image && (
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden', background: 'var(--surface-2)' }}>
          <Image src={project.image} alt={title} fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
          />
        </div>
      )}

      <div style={{ padding: '20px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {project.category}
          </span>
          {project.featured && (
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--accent-2)', background: 'var(--accent-2-light)', padding: '2px 10px', borderRadius: '9999px' }}>
              {t.projects.featured}
            </span>
          )}
        </div>

        <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
          {title}
        </h3>

        <p style={{
          color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.65, flex: 1,
          display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical',
          overflow: 'hidden', textOverflow: 'ellipsis',
        }}>
          {desc}
        </p>

        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
          {project.tech_stack.map(tech => <span key={tech} className="tech-tag">{tech}</span>)}
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 8, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
          {project.link && (
            <a href={formatLink(project.link)} target="_blank" rel="noopener noreferrer"
              className="btn-primary"
              style={{ flex: 1, justifyContent: 'center', padding: '9px 14px', fontSize: 13 }}
            >
              <ExternalLink size={13} />
              {t.projects.visit_project}
            </a>
          )}
          {project.github && (
            <a href={formatLink(project.github)} target="_blank" rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '9px 14px', fontSize: 13 }}
              aria-label="GitHub"
            >
              <GitBranch size={14} />
            </a>
          )}
          <Link href={`/projects/${project.id}`}
            className="btn-secondary"
            style={{ flex: project.link ? undefined : 1, justifyContent: 'center', padding: '9px 14px', fontSize: 13 }}
          >
            {t.projects.view_project}
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export function ProjectsSection({ data }: { data?: Project[] | null }) {
  const { lang, t } = useLang()
  const projects   = (data && data.length > 0) ? data : DEFAULT_PROJECTS
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <span className="section-subtitle">{t.projects.subtitle}</span>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-desc">
            {lang === 'en' ? 'A curated selection of my favorite and most impactful work.' : 'Koleksi karya favorit dan paling berdampak dari saya.'}
          </p>
        </motion.div>

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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
