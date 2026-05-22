'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/contexts/LangContext'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, GitBranch, Star } from 'lucide-react'
import { useState } from 'react'

interface Project {
  id: string
  title_en: string
  title_id: string
  description_en: string
  description_id: string
  image?: string | null
  tech_stack: string[]
  link?: string | null
  github?: string | null
  category: string
  featured: boolean
}

const DEFAULT_PROJECTS: Project[] = [
  {
    id: '1',
    title_en: 'E-Commerce Platform',
    title_id: 'Platform E-Commerce',
    description_en: 'A full-featured e-commerce platform built with Next.js, PostgreSQL, and Stripe integration.',
    description_id: 'Platform e-commerce lengkap yang dibangun dengan Next.js, PostgreSQL, dan integrasi Stripe.',
    tech_stack: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
    category: 'Web',
    featured: true,
  },
  {
    id: '2',
    title_en: 'Interior Design CMS',
    title_id: 'CMS Desain Interior',
    description_en: 'A complete content management system for an interior design company with configurator.',
    description_id: 'Sistem manajemen konten lengkap untuk perusahaan desain interior dengan konfigurator.',
    tech_stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Framer Motion'],
    category: 'Web',
    featured: true,
  },
  {
    id: '3',
    title_en: 'Honda Self-Service App',
    title_id: 'Aplikasi Layanan Mandiri Honda',
    description_en: 'A self-service booking and management application for Honda dealerships.',
    description_id: 'Aplikasi pemesanan dan manajemen layanan mandiri untuk dealer Honda.',
    tech_stack: ['React', 'Node.js', 'MySQL', 'REST API'],
    category: 'Web',
    featured: false,
  },
]

const formatLink = (url: string | null | undefined) => {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/')) return url
  return `https://${url}`
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { lang, t } = useLang()
  const title = lang === 'en' ? project.title_en : project.title_id
  const desc = lang === 'en' ? project.description_en : project.description_id

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      style={{
        background: 'var(--surface)',
        border: '3px solid var(--border)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        transition: 'var(--transition)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-md)',
      }}
      whileHover={{ x: -4, y: -4, boxShadow: 'var(--shadow-lg)' }}
    >
      {/* Image */}
      <div className="project-img-wrapper" style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden', borderRadius: 0, borderBottom: '3px solid var(--border)' }}>
        {project.image ? (
          <Image src={project.image} alt={title} fill style={{ objectFit: 'cover' }} />
        ) : (
          <div style={{
            width: '100%',
            paddingBottom: '62.5%',
            background: ['var(--accent-3)', 'var(--accent-2)', 'var(--accent-4)', 'var(--accent)'][index % 4],
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 48,
              opacity: 0.3,
              color: '#000000',
              fontWeight: 800,
            }}>
              {'{ }'}
            </div>
          </div>
        )}


      </div>

      {/* Content */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{
          fontSize: 11,
          fontWeight: 700,
          color: 'var(--accent)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}>
          {project.category}
        </span>

        <h3 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 20,
          fontWeight: 700,
          color: 'var(--text-primary)',
        }}>
          {title}
        </h3>

        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: 14, 
          lineHeight: 1.7, 
          flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {desc}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
          {project.tech_stack.map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 10, marginTop: 8, paddingTop: 16, borderTop: '3px solid var(--border)' }}>
          {project.link && (
            <a
              href={formatLink(project.link)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ flex: 1, justifyContent: 'center', padding: '10px 16px', fontSize: 13 }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <ExternalLink size={14} />
                {t.projects.visit_project}
              </span>
            </a>
          )}
          {project.github && (
            <a
              href={formatLink(project.github)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '10px 16px', fontSize: 13 }}
            >
              <GitBranch size={14} />
            </a>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="btn-secondary"
            style={{ flex: project.link ? undefined : 1, justifyContent: 'center', padding: '10px 16px', fontSize: 13 }}
          >
            {t.projects.view_project}
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection({ data }: { data?: Project[] | null }) {
  const { lang, t } = useLang()
  const projects = (data && data.length > 0) ? data : DEFAULT_PROJECTS
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">{t.projects.subtitle}</p>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-desc">
            {lang === 'en'
              ? 'A curated selection of my favorite and most impactful work.'
              : 'Koleksi karya favorit dan paling berdampak dari saya.'}
          </p>
        </motion.div>

        {/* Filter */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-sm)',
                fontSize: 13,
                fontWeight: 800,
                fontFamily: 'Space Grotesk, sans-serif',
                cursor: 'pointer',
                border: '2px solid var(--border)',
                boxShadow: '2px 2px 0px 0px var(--border)',
                transition: 'var(--transition)',
                background: activeCategory === cat ? 'var(--accent-4)' : 'var(--surface)',
                color: '#000000',
              }}
              onMouseEnter={e => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.transform = 'translate(-2px, -2px)'
                  e.currentTarget.style.boxShadow = '4px 4px 0px 0px var(--border)'
                  e.currentTarget.style.background = 'var(--surface-2)'
                }
              }}
              onMouseLeave={e => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = '2px 2px 0px 0px var(--border)'
                  e.currentTarget.style.background = 'var(--surface)'
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 28,
        }}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
